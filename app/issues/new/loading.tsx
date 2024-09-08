import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height={"20rem"}></Skeleton>
    </Box>
  );
};

export default LoadingNewIssuePage;
