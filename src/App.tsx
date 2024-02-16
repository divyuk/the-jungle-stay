import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button.tsx";
import Heading from "./ui/Heading.tsx";

const StyledApp = styled.main`
  background-color: #ddd3cf;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Jungle Stay</Heading>
        <Heading as="h2">Check in</Heading>
        <Heading as="h3">Check out</Heading>
        <Button>Check In</Button>
      </StyledApp>
    </>
  );
}

export default App;
