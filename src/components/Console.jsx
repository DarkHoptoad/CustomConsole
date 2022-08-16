import { useState } from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { Line } from "./Line";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  resize: none;
  color: ${({ color }) => color || "white"};
  border: none;
  font-size: 24px;
  &:focus {
    outline: none;
  }
`;

const Console = ({ color, ...props }) => {
  const [lines, setLines] = useState(["C/Users/DarkFrog>"]);

  const onKeyPress = (e) => {
    e.charCode === 13 && setLines([...lines, "C/Users/DarkFrog>"]);
  };

  return (
    <Flex>
      <Flex direction="column" margin="0 15px">
        {lines.map((line) => (
          <Line color={color} key={line}>
            {line}
          </Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} color={color} {...props} />
    </Flex>
  );
};

export { Console };
