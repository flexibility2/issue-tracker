"use client";
// import SimpleMDE from "react-simplemde-editor";
import { createIssueSchema } from "@/app/validationSchema";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { z } from "zod";
import IssueFormPage from "../_components/IssueForm";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  return <IssueFormPage></IssueFormPage>;
};

export default NewIssuePage;
