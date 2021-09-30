import { StyledNav, StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink exact to="/" activeStyle={{ color: '#472b7a' }}>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies" activeStyle={{ color: '#472b7a' }}>
        Movies
      </StyledNavLink>
    </StyledNav>
  );
}
