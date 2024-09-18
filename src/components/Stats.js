
import React from "react";

const Stats = ({ hunger, happiness }) => {
  return (
    <div>
      <h3>Pet Stats:</h3>
      <p>Hunger: {hunger}%</p>
      <p>Happiness: {happiness}%</p>
    </div>
  );
};

export default Stats;
