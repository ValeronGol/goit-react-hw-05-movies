import styled from '@emotion/styled';

export const StyledUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledImg = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 15px;
`;

export const StyledLi = styled.li`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const StyledSpan = styled.span`
  display: block;
  font-weight: 700;
`;
