import prisma from "@/prisma/client";
import { Flex, Table } from "@radix-ui/themes";
import React from "react";
import NextLink from "next/link";

import { IssueStatusBadge, Link } from "@/app/components";
import IssueActions from "./IssueActions";
import { Issue, Status } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Pagination from "@/app/components/Pagination";
import IssueTable, { columnNames } from "./IssueTable";

interface Props {
  searchParams: { status: Status; orderBy: keyof Issue; page: string };
}

const IssuePage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  console.log("PAGG: ", page);

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
    take: 10,
    skip: (page - 1) * pageSize, // Add this line
  });

  const issueCount = await prisma.issue.count({
    where: { status },
  });

  // await delay(2000);
  return (
    <Flex direction="column" gap={"3"}>
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issues}></IssueTable>
      <Pagination
        itemCount={issueCount}
        pageSize={pageSize}
        currentPage={page}
      ></Pagination>
    </Flex>
  );
};
export const dynamic = "force-dynamic";

export default IssuePage;
