import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import IssueFormPage from "../../_components/IssueForm";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
interface Props {
  params: { id: string };
}

const EditPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!issue) {
    return notFound();
  }
  return <IssueFormPage issue={issue}></IssueFormPage>;
};

export default EditPage;
