import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log("Google login successful:", response);
    // Save the token or user data as needed
    navigate('/home'); // Redirect to profile page after login
  };

  const handleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  return (
    <div className="login">
      <h2>Login Page</h2>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  );
};

export default Login;
