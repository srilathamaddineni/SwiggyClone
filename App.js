/**
 * <div id="parent">
 *    <div id="child">
 *    <h1>This is a h1 tag</h1>
 *    <h2>This is a h2 tag</h2>
 *    </div>
 * </div>
 */




const parent=React.createElement(
    "div",
    {id: "Parent",},
    React.createElement(
      "div",
      {id:"Parent"},
      [React.createElement("h1",{},"This is h1"), React.createElement("h2",{},"This is h2")]
    ));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);