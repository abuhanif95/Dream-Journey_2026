// export default function ToDo(props) {
//   return (
//     <div>
//       <li>Task: {props.task}</li>
//     </div>
//   );
// }

// export default function ToDo({ task, isDone}) {
//   if (isDone === "true") {
//     return <li>Done: {task}</li>;
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

// export default function ToDo({ task, isDone, time }) {
//   if (isDone === "true") {
//     return (
//       <li>
//         Done: {task} Duration: {time}
//       </li>
//     );
//   }
//   return <li>Pending: {task}</li>;
// }

// conditional rendering:3 ternary
// condition? true : false;

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone === "true" ? (
//     <li>
//       Done: {task} Duration: {time}
//     </li>
//   ) : (
//     <li>Pending: {task}</li>
//   );
// }

// conditional rendering:4 &&

// export default function ToDo({ task, isDone, time = 0 }) {
//     return isDone && <li>Done Tasks: {task} time: {time}</li>
// }

export default function ToDo({ task, isDone, time = 0 }) {
  //   console.log(isDone);
  let listItem;

  if (isDone === true) {
    listItem = (
      <li>
        Done: {task} Duration: {time}
      </li>
    );
  } else {
    listItem = <li>Pending: {task}</li>;
  }
  return listItem;
}
