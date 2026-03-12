import React from "react";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
const App = () => {
  const singers = [
    {
      id: 1,
      name: "Mahfuz",
      age: 69,
    },
    {
      id: 2,
      name: "Tahsan",
      age: 49,
    },
    {
      id: 3,
      name: "Dev",
      age: 56,
    },
  ];
  const actors = ["Raj", "Omar Sunny", "Shah"];
  // const time = 50;
  return (
    <div>
      <h1>React Core concepts</h1>

      {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))}

      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer.name} age={singer.age}></Singer>
      ))}

      {/* <Todo task="Learn React" isDone={true} time={time}></Todo>
      <Todo task="Revise Js" isDone={false}></Todo> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="sft" tech="JavaScript"></Developer>
      <Developer name="sht" tech="Python"></Developer>
      <Player name="Jon" runs="4939"></Player>
      <Player name="Junior" runs="7383"></Player>
      <Salami occasion="Eid" amount="50TK"></Salami>
      <Salami occasion="Graduation"></Salami> */}
    </div>
  );
};

function Student() {
  return (
    <div className="student">
      <h3>Name:</h3>
      <p>Dept:</p>
    </div>
  );
}

function Salami({ event, amount = 0 }) {
  return (
    <div className="student">
      <p>Salami for: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  );
}

// const {name, runs} = {name: 'jon', runs: 5000}
function Player({ name, runs }) {
  return (
    <div className="student">
      <p>Name:{name}</p>
      <p>Runs: {runs}</p>
    </div>
  );
}

function Developer(props) {
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Person() {
  const age = 22;
  const name = "sft";

  // const personStyle = {
  //   color: "red",
  //   fontSize: "18px",
  // };

  return (
    <p>
      I am a {name} {age}
    </p>
  );
}

function Pet() {
  return <p>Tiger</p>;
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and Losing</p>
    </div>
  );
}

export default App;
