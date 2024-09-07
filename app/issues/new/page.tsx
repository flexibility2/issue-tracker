"use client";
import { Button, Text, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { createIssueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMsg from "@/app/components/ErrorMsg";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();

  const [error, setError] = React.useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({ resolver: zodResolver(createIssueSchema) });

  return (
    <div className="max-w-xl">
      {error && <div className="text-red-500 mb-5">{error}</div>}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            const res = await axios.post("/api/issues", data);
            console.log(res);
            router.push("/issues");
          } catch (e) {
            console.error(e);
            setError("Failed to create issue");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input
            placeholder="Title"
            {...register("title")}
          ></TextField.Input>
        </TextField.Root>
        <ErrorMsg>{errors.title?.message}</ErrorMsg>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMsg>{errors.description?.message}</ErrorMsg>

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
