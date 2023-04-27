import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const BtnSelect = styled.select`
  width: 110px;
  border: 2px solid #5cd3a8;
  border-radius: 8px;

  &:hover {
    background-color: #5cd3a8;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 1200px) {
    padding: 4px 8px;
  }
`;
