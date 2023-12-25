import React from "react";
import "./Login.scss";

import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="login-root">
      <div className="login-wraper">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
