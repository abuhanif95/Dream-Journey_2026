import React from "react";
import "./App.css";
import ToDo from "./ToDo";
import Actor from "./Actor";
import Singer from "./Singer";
import Library from "./Library";
const App = () => {
  // const time = 50;
  // const actors = [
  //   "Bappa Raz",
  //   "Omar Sani",
  //   "Shakib Khan",
  //   "Sabbir Khan",
  //   "Shuvo",
  //   "Siam Ahmed",
  // ];

  const singers = [
    { id: 1, name: "Arijit Singh", song: "Tum Hi Ho", age: 34 },
    { id: 2, name: "Atif Aslam", song: "Tera Hone Laga Hoon", age: 38 },
    { id: 3, name: "Shreya Ghoshal", song: "Teri Meri", age: 37 },
    { id: 4, name: "Neha Kakkar", song: "Dilbar", age: 33 },
    { id: 5, name: "Sonu Nigam", song: "Kal Ho Naa Ho", age: 47 },
  ];

  const books = [
    { id: 1, name: "physics", price: 250 },
    { id: 2, name: "chemistry", price: 300 },
    { id: 3, name: "math", price: 200 },
    { id: 4, name: "english", price: 150 },
    { id: 5, name: "bangla", price: 100 },
  ];
  return (
    <div>
      <h1>React core Concepts</h1>

      <Library key={books.id} books={books}></Library>

      {/* {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))} */}

      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer}></Singer>
      ))}

      {/* <ToDo task="Learn React" isDone={true} time={time} />
      <ToDo task="Learn JS" isDone={false} />
      <ToDo task="Learn Python" isDone={true} time={time} /> */}
      {/* <Person></Person>
      <Person></Person>
      <Sports></Sports> */}
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="sft" tech="JavaScript"></Developer>
      <Developer name="sht"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Sakib" runs="6000"></Player>
      <Salami event="Eid" amount="1000"></Salami>
      <Salami event="Eid-ul-Adha" amount="5000"></Salami>
      <Salami event="Graduation"></Salami> */}
    </div>
  );
};

function Salami({ event, amount = 0 }) {
  return (
    <div className="student">
      <h2>Salami: {event}</h2>
      <p>Amount: {amount}</p>
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
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

// const {name, runs} = {name: 'Sakib', runs: 6000};
function Player(props) {
  return (
    <div className="student">
      <h2>Name: {props.name}</h2>
      <p>Runs: {props.runs}</p>
    </div>
  );
}

function Student() {
  return (
    <div className="student">
      <h2>Name:</h2>
      <p>Dept:</p>
    </div>
  );
}

function Person() {
  const age = 22;
  const name = "sft";

  const personStyle = {
    color: "blue",
    fontSize: "20px",
    textAlign: "center",
  };
  return (
    <>
      <p style={personStyle}>
        I am a person. My name is {name} and I am {age} years old.
      </p>
    </>
  );
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and loosing</p>
    </div>
  );
}

export default App;
