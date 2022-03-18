import styled from 'styled-components';
import { EditNavbarItem } from './EditNavbarItem';
import { FileNavbarItem } from './FileNavbarItem';
import { FormatNavbarItem } from './FormatNavbarItem';
import { HelpNavbarItem } from './HelpNavbarItem';
import { ViewNavbarItem } from './ViewNavbarItem';

const StyledNav = styled('nav')`
  box-shadow: 0px 2px 2px 0px #e9e6e6;
`;

export const Navbar = (props) => {
  return (
    <StyledNav>
      <FileNavbarItem />
      <EditNavbarItem />
      <FormatNavbarItem />
      <ViewNavbarItem />
      <HelpNavbarItem />
    </StyledNav>
  );
};
