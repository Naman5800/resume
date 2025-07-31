import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import "./App.css";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

function App() {
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <div className="bg-black font-Poppins">
      <ScrollProgress className="top-[83px]" />
      <Navbar onNavigate={setScrollTarget} />
      <Routes>
        <Route path="/" element={<Home scrollTarget={scrollTarget} />} />
      </Routes>
    </div>
  );
}

export default App;