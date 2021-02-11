import React from "react";

export default function WelcomeScreen() {
  return (
    <section className="welcome-screen">
      <div className="container">
        <h1 className="welcome-screen__title">
          Test assignment for Frontend Developer position
        </h1>
        <p className="welcome-screen__description p">
          We kindly remind you that your test assignment should be submitted as a
          link to github/bitbucket repository. Please be patient, we consider and
          respond to every application that meets minimum requirements. We look
          forward to your submission. Good luck! The photo has to scale in the
          banner area on the different screens
        </p>
        <a href="#sign-up" className="button welcome-screen__button">
          Sing up now
        </a>
      </div>
    </section>
  );
}
