import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";
import delay from "delay";
const LoadingNewIssuePage = () => {
  //   await delay(2000);
  return (
    <Box className="max-w-xl">
      <Skeleton></Skeleton>
      <Skeleton height={"20rem"}></Skeleton>
    </Box>
    // <div> Loading...</div>
  );
};

export default LoadingNewIssuePage;
