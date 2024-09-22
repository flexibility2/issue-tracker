import { IssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = IssueSchema.safeParse(data);
  if (!result.success) {
    return NextResponse.json(result.error.format(), { status: 400 });
  }
  const createResult = await prisma.issue.create({
    data: { title: data.title, description: data.description },
  });
  return NextResponse.json(createResult, { status: 201 });
}
