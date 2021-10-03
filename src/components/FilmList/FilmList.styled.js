import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  color: #071806;
  &:hover,
  &:focus {
    color: #267a26;
    background-color: #44034de6;
    padding: 5px;
    border-radius: 5px;
    font-weight: 700;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: circle;
`;

export const StyledLi = styled.li`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
