import { StyledNav, StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink exact to="/" activeStyle={{ color: '#523c9e' }}>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies" activeStyle={{ color: '#523c9e' }}>
        Movies
      </StyledNavLink>
    </StyledNav>
  );
}
