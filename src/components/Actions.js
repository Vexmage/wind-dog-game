
import React from "react";

const Actions = ({ onFeed, onPlay }) => {
  return (
    <div>
      <h3>Actions</h3>
      <button onClick={onFeed}>Feed Pet</button>
      <button onClick={onPlay}>Play with Pet</button>
    </div>
  );
};

export default Actions;
