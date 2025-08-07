import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const OTPForm = ({ email }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/verify-otp", { email, otp });
      if (res.data.status === "success") {
        setVerified(true);
      } else {
        setError("Invalid OTP");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return verified ? (
    <div className="dashboard">
      <h2>Welcome to Dashboard</h2>
    </div>
  ) : (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Enter OTP sent to your email</h2>
        <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default OTPForm;
