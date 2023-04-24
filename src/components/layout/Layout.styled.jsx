import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 15px;

  @media (min-width: 768px) {
    padding: 25px;
  }
`;

export const NavList = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 50px;
  }
`;

export const NavLink = styled(Link)`
  font-size: 25px;
  color: #373737;
  text-decoration: none;
  &.active {
    color: #5cd3a8;
  }
  &:hover {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.12);
    color: #5cd3a8;
  }
`;

export const Wrapper = styled.main`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;
