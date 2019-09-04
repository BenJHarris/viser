import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem 3rem;
  background-color: #08ea7c;
  background-image: linear-gradient(
    323deg,
    rgba(8, 234, 124, 0.5) 0%,
    rgba(4, 150, 84, 0.5) 100%
  );

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  box-shadow: 0px 5px 30px -15px #000000;

  transition: 0.5s;
  &:hover {
    background-color: #02b061;
  }
`;

export const FullWidthImage = styled.img`
  width: 100%;
`;
