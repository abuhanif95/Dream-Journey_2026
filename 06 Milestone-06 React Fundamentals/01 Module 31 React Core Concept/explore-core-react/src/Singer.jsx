import "./App.css";

export default function Singer({ singer, age }) {
  return (
    <div className="student">
      <h3>Singer: {singer}</h3>
      <p>Age: {age}</p>
    </div>
  );
}
