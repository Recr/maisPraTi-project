import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Header from "./components/Header";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import WeightPage from './pages/WeightPage'
import MedicinePage from "./pages/MedicinePage";


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
          <Route path='/about' Component={AboutPage} />
          <Route path='/contact' Component={ContactPage} />
          <Route path='/faq' Component={FAQPage} />
          <Route path='/weight' Component={WeightPage} />
          <Route path='/medicine' Component={MedicinePage} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;