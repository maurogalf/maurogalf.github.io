import React from "react";
import About from "./left/About";
import Contact from "./left/Contact";
import Technologies from "./left/Technologies";
import { Link } from "react-router-dom";

export default function Left() {
  return (
    <div className="left">
      <About />
      <Contact />
      <Technologies />
      <Link to="/projects">
        <h2>→ Ver mis trabajos </h2>
      </Link>
    </div>
  );
}
