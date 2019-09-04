import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  color: white;
  padding: 1rem 0;
  border-bottom: 1px solid #1b1c26;
  margin-bottom: 0.5rem;
  opacity: 0;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  animation: fadeIn 1s normal forwards;
  animation-delay: ${props => props.delay};
`;

export const Input = styled.input`
  border: none;
  border-bottom: 4px solid #8842d5;
`;

export const Label = styled.label`
  padding: 1rem;
`;

export const Header = styled.h1`
  padding: 3rem 0;
`;
