import styled from "styled-components";
import { Button } from "./Button";
import { Console } from "./components/Console";
import { Flex } from "./components/Flex";
import { Title } from "./components/Title";

const AppWeapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
  padding: 2rem;
`;

function App() {
  return (
    <AppWeapper>
      <Flex justify="center">
        <Title color="green">DarkFrog System Console</Title>
      </Flex>
      <Flex margin="20px 0" direction="column">
        <Console color="green" />
        <Button outlined color="green" align="flex-end">
          Отправить
        </Button>
      </Flex>
    </AppWeapper>
  );
}

export default App;
