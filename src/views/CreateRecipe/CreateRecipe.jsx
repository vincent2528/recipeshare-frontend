import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import CreateForm from "./form";
import { HeroContainer } from "../../components/Hero/HeroElements";
import { GlobalStyle } from "../globalStyles";
import { BrowserRouter as Router } from "react-router-dom";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CreateForm />
        </div>
      </HeroContainer>
    </Router>
  );
};

export default Hero;
