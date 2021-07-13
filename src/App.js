import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Form from "@rjsf/core";

function App() {
  const { default: Form } = JSONSchemaForm;
  const schema = {
    title: "Test form",
    type: "string",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Form schema={schema} />
      </header>
    </div>
  );
}

export default App;
