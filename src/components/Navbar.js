import styled from 'styled-components';
import { NavbarItem } from './NavbarItem';

const StyledNav = styled('nav')`
  box-shadow: 0px 2px 2px 0px #e9e6e6;
`;

export const Navbar = (props) => {
  return (
    <StyledNav>
      <NavbarItem>File</NavbarItem>
      <NavbarItem>Edit</NavbarItem>
      <NavbarItem>Format</NavbarItem>
      <NavbarItem>View</NavbarItem>
      <NavbarItem>Help</NavbarItem>
    </StyledNav>
  );
};
