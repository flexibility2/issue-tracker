import React, { PropsWithChildren } from "react";
import { Button, Text, TextArea, TextField } from "@radix-ui/themes";
const ErrorMsg = ({ children }: PropsWithChildren) => {
  if (!children) {
    return null;
  }
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};

export default ErrorMsg;
