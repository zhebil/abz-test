import React from "react";
import Acquaintance from "../components/acquaintance";
import SignUp from "../components/sign-up";
import WelcomeScreen from "../components/welcome-screen";
import Users from "../components/users";

export default function Home() {
  return (
    <>
      <WelcomeScreen />
      <Acquaintance />
      <Users />
      <SignUp />
    </>
  );
}
