import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>Hello World</StyledApp>
    </>
  );
}

export default App;
