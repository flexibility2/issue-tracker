import authOptions from "@/app/auth/authOptions";
import { IssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
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
