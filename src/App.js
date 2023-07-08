import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from "./Dashboard";
function LoginSignupPage() {

  return (
    <>
 
 < BrowserRouter >
      <Routes>
      <Route   path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>

   
   </>
  );
}

export default LoginSignupPage;

