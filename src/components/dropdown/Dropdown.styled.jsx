import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100px;

  @media (min-width: 768px) {
    width: 140px;
  }
`;

export const BtnSelect = styled.select`
  width: 100%;
  border-radius: 8px;
  padding: 3px 7px;

  @media (min-width: 768px) {
    padding: 4px 8px;
  }
`;
