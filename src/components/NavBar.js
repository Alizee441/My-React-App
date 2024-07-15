// src/components/NavBar.js
import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  background-color: #ffffff; /* Fond blanc */
  color: #333; /* Couleur du texte */
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  border-radius: 5px; /* Border radius de 5px */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Box shadow avec blur de 5px */
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333; /* Couleur du texte */
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc; /* Fond gris au survol */
    color: #ffffff; /* Texte blanc au survol */
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavList>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">TV Shows</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Favorites</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Settings</NavLink>
        </NavItem>
      </NavList>
    </NavBarContainer>
  );
};

export default NavBar;
