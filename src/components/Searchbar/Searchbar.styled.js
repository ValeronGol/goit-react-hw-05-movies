import styled from '@emotion/styled';

export const SearchInput = styled.input`
  width: 300px;
  font: inherit;
  font-size: 16px;
  border: 2px solid #267a26;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 10px;
  border-radius: 5px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const StyledForm = styled.form`
  margin-top: 20px;
`;
export const StyledBtn = styled.button`
  margin: 20px;
  color: #312f30;
  background-color: #267a26;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #363738;
    color: #abdaab;
  }
`;
