import React, { useState, useEffect } from "react";
import Pet from "./components/Pet";
import Stats from "./components/Stats";
import Actions from "./components/Actions.js";

const App = () => {
  const [hunger, setHunger] = useState(50); // Initial hunger
  const [happiness, setHappiness] = useState(50); // Initial happiness

  // Decrease happiness and increase hunger over time
  useEffect(() => {
    const interval = setInterval(() => {
      setHunger((prev) => Math.min(prev + 5, 100));
      setHappiness((prev) => Math.max(prev - 5, 0));
    }, 5000); // Every 5 seconds
    return () => clearInterval(interval); // Clean up the interval
  }, []);

  const feedPet = () => {
    setHunger((prev) => Math.max(prev - 20, 0));
  };

  const playWithPet = () => {
    setHappiness((prev) => Math.min(prev + 20, 100));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Tamagotchi</h1>
      <Pet hunger={hunger} happiness={happiness} />
      <Stats hunger={hunger} happiness={happiness} />
      <Actions onFeed={feedPet} onPlay={playWithPet} />
    </div>
  );
};

export default App;
