import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App/App";


// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const User = (props) => {
//   return (
//     <div>
//       <p> My name: {props.name}</p>
//       <p>Age:{props.age + 50}</p>
//     </div>
//   );
// };



// // функциональная компонента
// const App = function () {
//   return (
//     <div>
//       <User name={myName} age="45" />
//       <User name="DGenya" age={25} />
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <App />
  // </React.StrictMode>
);
