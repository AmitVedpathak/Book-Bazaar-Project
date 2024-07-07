import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contactus from "./contactus/Contactus";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "../context/AuthProvider";

function App() {
  const [authUser,setAuthUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser? <Courses /> : <Navigate to='/signup'/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
