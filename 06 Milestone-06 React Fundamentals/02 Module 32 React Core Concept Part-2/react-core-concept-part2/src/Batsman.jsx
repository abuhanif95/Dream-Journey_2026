import React, { useState } from "react";

const Batsman = () => {
  const [runs, setRuns] = useState(0);

  function handleSingle() {
    const totalRuns = runs + 1;
    setRuns(totalRuns);
  }

  const handleSix = () => {
    const updatedRuns = runs + 6;
    setRuns(updatedRuns);
  };
  return (
    <div>
      <h3 onClick={handleSingle}>
        Player:
        {runs > 50 && <p>You Score: 50</p>} Bangla Batsman
      </h3>
      <h2>Score: {runs}</h2>
      <button>Singles</button>
      <button>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
};

export default Batsman;
