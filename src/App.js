import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './Components/Login'; // Assuming Login is in the same folder
import Profile from './Components/Profile'; // Import the Profile component

import './App.css'

const clientId = '233961795977-hhankdead218f4e3usngm999i4jikvva.apps.googleusercontent.com'; // Replace with your actual client ID

function App() {
  const isAuthenticated = false; // You would replace this with real authentication logic

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Redirect to /login if not authenticated */}
          <Route
            path="/home"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          {/* Optionally, you can add a fallback route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
