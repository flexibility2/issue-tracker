import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import IssueFormPage from "../../_components/IssueForm";
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
