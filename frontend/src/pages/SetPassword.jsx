import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password.length < 6)
      return setMessage("Password must be at least 6 characters long.");
    if (password !== confirm) return setMessage("Passwords do not match.");

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5050/api/users/set-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Password set successfully!");
        navigate("/");
      } else {
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 animate-fadeIn">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo.png"
            alt="Jana Spandana Survey Logo"
            className="w-24 mb-3"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            Set Your Password
          </h2>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Create a strong password to protect your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Confirm password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          {message && (
            <div className="text-center">
              <p
                className={`text-sm ${
                  message.includes("success")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 text-white font-medium rounded-lg transition-all ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
            }`}
          >
            {loading ? "Setting Password..." : "Set Password"}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} D2D Survey. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
