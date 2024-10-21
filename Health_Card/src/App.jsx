import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Header from "./components/Header";
import "./App.css";
import Logo from "./assets/logo.png";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";


function App() {
  return (
    <div>

      <Router>
        <Header />   
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/login' Component={LoginPage} />
          <Route path='/register' Component={RegisterPage} />
          <Route path='/user' Component={UserPage} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
