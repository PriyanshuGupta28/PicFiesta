import { SignUp } from "@clerk/clerk-react";
import React from "react";
import { Flex } from "antd";

const Signup = () => {
  return (
    <div>
      <Flex justify="center" align="center">
        <SignUp />
      </Flex>
    </div>
  );
};

export default Signup;
