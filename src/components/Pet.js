
import React from "react";

const Pet = ({ hunger, happiness }) => {
  const getPetMood = () => {
    if (happiness > 70 && hunger < 30) {
      return "happy";
    } else if (hunger > 70) {
      return "hungry";
    } else {
      return "neutral";
    }
  };

  return (
    <div>
      <h2>Your Pet is {getPetMood()}</h2>
      <img
        src={`/${getPetMood()}.png`} // Placeholder for pet images
        alt={getPetMood()}
        style={{ width: "200px" }}
      />
    </div>
  );
};

export default Pet;
