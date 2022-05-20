import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PropertiesPage from "./pages/PropertiesPage";
import RegisterPage from "./pages/RegisterPage";
 

const App=()=> {
  return (
    <>
      <Router>
        <Header/>
        <main className="py-3">
          <Routes>
            <Route path="/" element={<HomePage/>}  />  
            <Route path="*" element={<NotFound/>}  />
            <Route path="/login" element={<LoginPage/>}  />
            <Route path="/register" element={<RegisterPage/>}  />
            <Route path="/activate/:uid/:token" element={<ActivatePage/>}  />
            <Route path="/properties" element={<PropertiesPage/>}  />
          </Routes>
          <ToastContainer theme="dark" />
        </main>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
