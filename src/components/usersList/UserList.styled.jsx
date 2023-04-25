import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    gap: 80px;
  }
`;
