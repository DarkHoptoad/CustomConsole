import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  align-self: ${({ align }) => align || "stretch"};

  ${(props) =>
    props.outlined &&
    css`
      color: ${({ color }) => color || "white"};
      border: 1px solid ${({ color }) => color || "white"};
      background: transparent;
      transition: all 0.3s linear;
      &:hover {
        background: ${({ color }) => color || "white"};
        border: 1px solid black;
        color: black;
      }
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export { Button };
