import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import useLogin from "../hooks/useLogin";

const Index = () => {
  const {
    formData,
    loginMethod,
    otpSent,
    handleInputChange,
    handleMethodChange,
    sendOTP,
    handleSubmit,
  } = useLogin();

  return (
    <>
      <Navbar />
      <main
        className="container mt-5 d-flex flex-column align-items-center"
        role="main"
      >
        <div className="logo text-center mb-3">
          <img
            src="/logo.png"
            alt="Jana Spandana Survey Logo"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
        </div>
        <h3 className="text-center mb-4">Jana Spandana Survey (HHS)</h3>

        <LoginForm
          formData={formData}
          loginMethod={loginMethod}
          otpSent={otpSent}
          handleInputChange={handleInputChange}
          handleMethodChange={handleMethodChange}
          sendOTP={sendOTP}
          handleSubmit={handleSubmit}
        />
      </main>
    </>
  );
};

export default Index;
