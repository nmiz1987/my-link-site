import { render } from "react-dom";
import { StrictMode } from "react";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <div>
        <header>
          <h1 id="title">All of my links in one place</h1>
        </header>
        <Details />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
