import React from "react";
import HeroSection from "./HeroSection"; // Import your HeroSection component
import Image from "../../assets/images/image.jpg"; // Replace with the actual image path

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Hello! I'm Zarror Nibors"
        subtitle="I’m freelance UI/UX Designer"
        description="Based in Indonesia who loves to craft attractive design experiences for the web."
        buttonText="Contact Me"
      >
        {/* You can place the image or other children here */}
        <img
          src={Image}
          alt="Zarror Nibors"
          className="rounded-lg shadow-lg w-[70%]"
        />
      </HeroSection>
    </div>
  );
};

export default HomePage;
