import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
});

export async function POST(request: NextRequest) {
  const data = await request.json();
  const result = createSchema.safeParse(data);
  if (!result.success) {
    return NextResponse.json(result.error.format(), { status: 400 });
  }
  const createResult = await prisma.issue.create({
    data: { title: data.title, description: data.description },
  });
  return NextResponse.json(createResult, { status: 201 });
}
