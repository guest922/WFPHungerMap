import { Wrapper } from "@wfp/ui";
import "./App.scss";
import HungerMap from "./Pages/HungerMap";
import { Module } from "@wfp/ui";
import RegularPage from "./Shared/RegularPage";

function App() {
  return (
    <div className="App">
      <RegularPage>
        <Wrapper>
          <Module>
            <HungerMap />
          </Module>
        </Wrapper>
      </RegularPage>
    </div>
  );
}

export default App;
