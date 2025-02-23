const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
  return React.createElement(
    "article",
    null,
    React.createElement("h2", null, "Counter"),
    React.createElement("p", null, "You clicked 1 times"),
    React.createElement("button", null, "Clicked me")
  );
}
// console.log(App());

// before React does its work
const articleElements = document.getElementsByTagName("article");
const articleElement = document.getElementsByTagName("article").item(0);
console.log(articleElements); // HTMLCollection[]
console.log(articleElement); // null

// Proof that React does its work after JavaScript Code is finished
// setTimeout is also Asynchronous
setTimeout(() => {
  const articleElements = document.getElementsByTagName("article");
  const articleElement = document.getElementsByTagName("article").item(0);
  console.log(articleElements); // HTMLCollection[]
  console.log(articleElement); // null
}, 5000);
