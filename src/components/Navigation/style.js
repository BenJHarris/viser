import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.div`
  border-bottom: 1px solid #282828;
`;

export const NavHeader = styled.div`
  max-width: 1010px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;

export const NavSection = styled.div`
  display: flex;
`;

export const NavButton = styled.div`
  padding: 1rem;
  transition: 0.2s;
  &:hover,
  &:focus {
    background-color: #ff6b6b;
  }
`;

export const Link = styled(RouterLink)`
  font-size: 16px;
`;
