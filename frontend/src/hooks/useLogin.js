import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLogin = () => {
  const [formData, setFormData] = useState({
    loginID: "",
    otp: "",
    password: "",
  });
  const [loginMethod, setLoginMethod] = useState("password");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMethodChange = (e) => {
    setLoginMethod(e.target.value);
    setFormData((prev) => ({ ...prev, otp: "", password: "" }));
    setOtpSent(false);
  };

  // ✅ Send OTP
  const sendOTP = async () => {
    if (!formData.loginID) {
      return toast.error("Please enter your email or phone number");
    }

    try {
      const res = await fetch("http://localhost:5050/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loginID: formData.loginID }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setOtpSent(true);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send OTP. Try again.");
    }
  };

  // ✅ Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (loginMethod === "password") {
        // Normal password login
        const payload = {
          email: formData.loginID.toLowerCase(),
          password: formData.password,
        };

        const res = await fetch("http://localhost:5050/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (res.ok) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          toast.success("Login successful!");

          const role = data.user.role?.roleName;
          if (role === "Volunteer") navigate("/home");
          else if (role === "Admin" || role === "SuperAdmin")
            navigate("/adminmenu");
          else navigate("/");
        } else {
          toast.error(data.message || "Login failed");
        }
      } else {
        // OTP login
        if (!otpSent) return toast.error("Please send OTP first");

        const res = await fetch("http://localhost:5050/api/auth/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            loginID: formData.loginID,
            otp: formData.otp,
          }),
        });

        const data = await res.json();

        if (!res.ok) return toast.error(data.message);

        // ✅ Save token + user directly
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        toast.success("OTP verified successfully!");
        const role = data.user.role?.roleName;
        if (role === "Volunteer") navigate("/home");
        else if (role === "Admin" || role === "SuperAdmin")
          navigate("/adminmenu");
        else navigate("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    }
  };

  return {
    formData,
    loginMethod,
    otpSent,
    handleInputChange,
    handleMethodChange,
    sendOTP,
    handleSubmit,
  };
};

export default useLogin;
