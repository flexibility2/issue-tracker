import Image from "next/image";
import Pagination from "./components/Pagination";
import LatestIssues from "./LatestIssues";
import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Grid, Flex } from "@radix-ui/themes";
import { Metadata } from "next";

// export default function Home({
//   searchParams,
// }: {
//   searchParams: { page: string };
// }) {
//   return <LatestIssues></LatestIssues>;
// }

export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "DONE" },
  });
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues",
};

export const dynamic = "force-dynamic";
