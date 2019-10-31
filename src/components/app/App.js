import React from "react";
import Styles from "./Styles";
import SimpleForm from "../simpleForm/SimpleForm";

function App() {
  return (
    <Styles>
      <header className="App-header">
        <a
          className="App-link"
          href="https://final-form.org/docs/react-final-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Final-Form{" "}
          <span role="img" aria-label="Flag">
            🏁
          </span>
        </a>
      </header>
      <main>
        <SimpleForm />
      </main>
    </Styles>
  );
}

export default App;
