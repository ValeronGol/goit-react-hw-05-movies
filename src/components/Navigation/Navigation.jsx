import { StyledNav, StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink exact to="/">
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNav>
  );
}
