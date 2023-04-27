import styled from 'styled-components';
import { Link as BackLink } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(BackLink)`
  text-align: center;
  width: 100px;
  font-size: 12px;
  padding: 7px 17px;
  border-radius: 2px;
  border: 1px solid #373737;
  text-decoration: none;
  text-transform: uppercase;
  color: #373737;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 18px;
  }
  &:hover {
    border-color: #5cd3a8;
  }
`;

export const Btn = styled.button`
  display: block;
  margin-top: 30px;
  width: 160px;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 10px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #373737;
  border: none;
  cursor: pointer;

  &:hover {
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05);
  }

  @media (min-width: 1200px) {
    margin-top: 50px;
  }
`;
