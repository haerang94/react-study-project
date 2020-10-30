import Temp from "components/Temp";
import Wrapper from "components/Wrapper";
import "./App.css";

function App() {
  return (
    <>
      <Wrapper>
        <Temp name="react" color="yellogreen" isSpecial></Temp>
        <Temp></Temp>
      </Wrapper>
    </>
  );
}

export default App;
