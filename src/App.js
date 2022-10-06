import { render } from "react-dom";
import { StrictMode } from "react";
import Details from "./componnents/Details";

const App = () => {
  return (
    <StrictMode>
      <div>
        <header>
          <h1 id="title">My link pool</h1>
        </header>
        <main>
          <Details />
        </main>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
