import React from "react";

const LoginForm = ({
  formData,
  loginMethod,
  otpSent,
  handleInputChange,
  handleMethodChange,
  sendOTP,
  handleSubmit,
}) => {
  return (
    <section className="login-form w-100" style={{ maxWidth: "400px" }}>
      <div className="d-flex justify-content-center gap-3 mb-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="loginMethod"
            id="otpLogin"
            value="otp"
            checked={loginMethod === "otp"}
            onChange={handleMethodChange}
          />
          <label className="form-check-label" htmlFor="otpLogin">
            Login with OTP
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="loginMethod"
            id="passwordLogin"
            value="password"
            checked={loginMethod === "password"}
            onChange={handleMethodChange}
          />
          <label className="form-check-label" htmlFor="passwordLogin">
            Login with Password
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="loginID" className="form-label fw-semibold">
            Your Login ID
          </label>
          <input
            type="text"
            className="form-control"
            id="loginID"
            name="loginID"
            placeholder="Enter Email or Phone Number"
            value={formData.loginID}
            onChange={handleInputChange}
            required
          />
        </div>

        {loginMethod === "otp" ? (
          <>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label fw-semibold">
                Enter OTP
              </label>
              <input
                type="text"
                className="form-control"
                id="otp"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              type="button"
              className={`btn w-100 mb-3 ${
                otpSent ? "btn-success" : "btn-outline-secondary"
              }`}
              onClick={sendOTP}
              disabled={otpSent}
            >
              {otpSent ? "OTP Sent" : "Send OTP"}
            </button>
          </>
        ) : (
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Enter Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100 mt-3 p-2">
          Login
        </button>

        {loginMethod === "password" && (
          <div className="text-center mt-3">
            <a href="/forgot-password" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>
        )}
      </form>
    </section>
  );
};

export default LoginForm;
