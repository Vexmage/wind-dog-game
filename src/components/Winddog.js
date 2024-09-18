
import React from "react";

const Winddog = ({ stage, hunger, happiness, energy, onFly, onWindGust }) => {
  const getWinddogImage = () => {
    switch (stage) {
      case "Pup":
        return "/images/winddog-pup.png";
      case "Adolescent":
        return "/images/winddog-adolescent.png";
      case "Adult":
        return "/images/winddog-adult.png";
      default:
        return "/images/winddog-pup.png";
    }
  };

  return (
    <div>
      <h2>Winddog ({stage})</h2>
      <img
        src={getWinddogImage()}
        alt={`Winddog ${stage}`}
        style={{ width: "200px" }}
      />
      <div>
        <button onClick={onFly} disabled={energy < 10}>
          Fly
        </button>
        <button onClick={onWindGust} disabled={energy < 20}>
          Wind Gust
        </button>
      </div>
    </div>
  );
};

export default Winddog;
