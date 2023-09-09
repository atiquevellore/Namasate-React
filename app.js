import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{"id":"parent"},[React.createElement("div",{"id":"childs"},
    [React.createElement("h2",{},"i am h2 tag")],React.createElement("div",{},
        [React.createElement("h3",{},"i am h3 tag"),React.createElement("h4",{},"react hmr check")]))])
console.log(parent)
const heading_3 = React.createElement("h3",{id: 'heading'},"Hello World from React! ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);