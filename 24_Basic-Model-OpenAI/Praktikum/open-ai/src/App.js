import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Anda perlu mengimpor BrowserRouter

import ChatAI from "./pages/Chat";
import GenerateName from "./pages/generate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatAI />} />
        <Route path="/generate-name" element={<GenerateName />} />
      </Routes>
    </Router> 
  );
}

export default App;