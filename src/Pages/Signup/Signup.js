import {
  SignInButton,
  SignOutButton,
  SignUp,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import auth from "../../Components/Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Flex } from "antd";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user, "handleSignup");
          // ...
        }
      );
    } catch (error) {
      const errorCode = error?.code;
      const errorMessage = error?.message;
      console.log(errorMessage, errorCode, "handleSignup");
    }
  };

  return (
    <div>
      <Flex justify="center" align="center">
        <SignUp />
      </Flex>
    </div>
  );
};

export default Signup;
