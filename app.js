/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1"),
    React.createElement("h2", {}, "This is h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 second child"),
    React.createElement("h2", {}, "This is h2 second child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
