import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackHub from "./components/FeedbackHub";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<FeedbackHub />} />
      </Routes>
    </Router>
  );
}

export default App;
