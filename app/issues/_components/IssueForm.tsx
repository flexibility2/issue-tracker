"use client";

import { Spinner } from "@/app/components";
import ErrorMsg from "@/app/components/ErrorMsg";
import { IssueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { TextField, Button } from "@radix-ui/themes";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

type IssueForm = z.infer<typeof IssueSchema>;

const IssueFormPage = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();

  const [error, setError] = React.useState<string | null>(null);
  const [submiting, setSubmiting] = React.useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({ resolver: zodResolver(IssueSchema) });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmiting(true);
      if (issue) await axios.patch(`/api/issues/${issue.id}`, data);
      else await axios.post("/api/issues", data);
      setSubmiting(true);
      router.push("/issues");
      router.refresh();
    } catch (e) {
      console.error(e);
      setSubmiting(true);
      setError("Failed to create issue");
    }
  });

  return (
    <div className="max-w-xl">
      {error && <div className="text-red-500 mb-5">{error}</div>}
      <form className=" space-y-3" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title}
            placeholder="Title"
            {...register("title")}
          ></TextField.Input>
        </TextField.Root>
        <ErrorMsg>{errors.title?.message}</ErrorMsg>
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMsg>{errors.description?.message}</ErrorMsg>

        <Button disabled={submiting}>
          {issue ? "Update Issue" : "Submit New Issue"}{" "}
          {submiting && <Spinner></Spinner>}
        </Button>
      </form>
    </div>
  );
};

export default IssueFormPage;
