import React, { useState } from "react";
import CreateForm from "./form";
import NavBar from "../../components/Navbar/Navbar";
import { HeroContainer } from "../../components/Hero/HeroElements";
import { BrowserRouter as Router } from "react-router-dom";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <NavBar />
      <HeroContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <CreateForm />
        </div>
      </HeroContainer>
    </Router>
  );
};

export default Hero;
