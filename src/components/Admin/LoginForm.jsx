import React, { useState } from 'react';
import './Login.css'

const LoginForm = ({ setStep, setEmail }) => {
  const [user, setUser] = useState({ email: '', password: '', captcha: '' });
  const [captchaUrl, setCaptchaUrl] = useState('http://localhost:5000/api/captcha');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Call your .NET API to validate captcha and credentials
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (data.success) {
      setEmail(user.email);
      setStep('otp');
    } else {
      alert(data.message || 'Login failed');
      setCaptchaUrl(`${captchaUrl}?${new Date().getTime()}`); 
    }
  };

  return (
    <form className="form-box" onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      
      <div className="captcha-box">
        <img src={captchaUrl} alt="captcha" />
        <input type="text" name="captcha" placeholder="Enter Captcha" onChange={handleChange} required />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
