// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       Task: {task} {isDone}
//     </li>
//   );
// }

// import React from "react";

// const Todo = ({ task, isDone, time = 0 }) => {
//   if (isDone === true) {
//     return (
//       <div>
//         <li>
//           Done: {task} Duration: {time}
//         </li>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <li>Pending: {task}</li>
//       </div>
//     );
//   }
// };

// export default Todo;

// conditional rendering: 3 ternary
// condition ? true : false

// export default function Todo({task, isDone, time = 0}){
//     return isDone ? <li>Done: {task} Time: {time}</li> :
//                     <li>Not Done: {task}</li>
// }

// export default function Todo({ task, isDone, time = 0 }) {
//   return (
//     isDone && (
//       <li>
//         Done: {task} Time: {time}
//       </li>
//     )
//   );
// }

// export default function Todo({ task, isDone, time = 0 }) {
//   return (
//     isDone || (
//       <li>
//         Done: {task} Time: {time}
//       </li>
//     )
//   );
// }

export default function Todo({ task, isDone, time = 0 }) {
  const disPlayTime = time ? time : 100;
  let listItem;

  if (isDone === true) {
    listItem = (
      <li>
        Done: {task} time: {disPlayTime}
      </li>
    );
  } else {
    listItem = (
      <li>
        Pending: {task} time: {disPlayTime}
      </li>
    );
  }
  return listItem;
}
