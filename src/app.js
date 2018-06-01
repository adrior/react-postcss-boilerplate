import App from "./components/App/App.js";
import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App
      title="React + PostCSS Boilerplate"
      actions={[
        {
          title: (
            <span>
              Make some changes in <code>./src/App/App.css</code> and test
              livereloading
            </span>
          ),
          id: 0,
          checked: false
        },
        {
          title: (
            <span>
              Visit <a href="https://reactjs.org/docs/">reactjs.org/docs</a> to
              study how ReactJS works
            </span>
          ),
          id: 1,
          checked: true
        },
        {
          title: "Study how this example page works for quick start",
          id: 2,
          checked: false
        },
        {
          title: (
            <span>
              Check <code>.blueprint-templates</code> folder for README
            </span>
          ),
          id: 3,
          checked: false
        }
      ]}
    />,
    document.querySelector("#root")
  );
});
console.log("App is running");
