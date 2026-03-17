import React from "react";

const Singer = ({ singer }) => {
  return (
    <div className="singer">
      <h3>Name: {singer.name}</h3>
      <p>Age: {singer.age}</p>
      <p>Genre: {singer.genre}</p>
    </div>
  );
};

export default Singer;
