import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ff7869;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  transition: 0.5s;
  background: none;
  color: #fff;
  font-weight: bold;
  &:hover {
    background-color: #ff7869;
    color: #961305;
  }
`;
