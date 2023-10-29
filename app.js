import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{"id":"textcolor"},"React using the React Element");

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX - to write more readable code
const jsxheading = <h1 className="text-color">React using JSX</h1>

root.render(jsxheading)