// creating a nested html strutucture using React.createElement()
/* <div>
    <div>
        <h1>i am h1 tag</h1>
        <h2> i am h2 tag</h2>
    </div>
    <div>
        <h1>i am h3 tag</h1>
        <h2> i am h4 tag</h2>
    </div>
</div> */

const parent = React.createElement("div",{id: "parent"},
[React.createElement("div",{id: "child"},
[React.createElement("h1",{},"i am h1 tag"),React.createElement("h1",{},"i am h2 tag")]),
[React.createElement("div",{id: "child2"},
[React.createElement("h1",{},"i am h3 tag"),React.createElement("h1",{},"i am h4 tag")])
]])
console.log(parent)
const heading_3 = React.createElement("h3",{id: 'heading'},"Hello World from React! ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);