// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./Components/signup-page/signuppage";
import LoginPage from "./Components/login-page/loginpage";
import WelcomePage from "./Components/welcome-page/welcomepage";
import ContactPage from "./Components/contactpage/contactus";
import BookingPage from "./Components/booking-page/bookingpage";
import ChatBox from "./Components/chatboxpage/chatbox";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/bookingpage" element={<BookingPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/contactuspage" element={<ContactPage />} />
        <Route path="/chatbox" element={<ChatBox />} />
      </Routes>
    </Router>
  );
};

export default App;
