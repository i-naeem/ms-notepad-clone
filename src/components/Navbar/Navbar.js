import styled from 'styled-components';
import { Dropdown } from '../../styles/Dropdown';

const StyledNav = styled('nav')`
  box-shadow: 0px 2px 2px 0px #e9e6e6;
`;

const fileOptions = [
  {
    label: 'New',
    shortcut: 'Ctrl + N',
  },
  {
    label: 'New Tab',
    shortcut: 'Ctrl + Shit + N',
  },
  {
    label: 'Open...',
    shortcut: 'Ctrl + O',
  },
  {
    label: 'Save',
    shortcut: 'Ctrl + S',
  },
  {
    label: 'Save as...',
    shortcut: 'Ctrl + Shit + S',
  },
];

const editOptions = [
  { label: 'Undo', shortcut: 'Ctrl + Z' },
  { label: 'Cut', shortcut: 'Ctrl + X' },
  { label: 'Paste', shortcut: 'Ctrl + V' },
  { label: 'Delete', shortcut: 'Del' },
  { label: 'Find', shortcut: 'Ctrl + F' },
];

const formatOptions = [{ label: 'Word Wrap' }];
const viewOptions = [{ label: 'Zoom' }, { label: 'Statusbar' }];
const helpOptions = [{ label: 'About' }];

export const Navbar = (props) => {
  return (
    <StyledNav>
      <Dropdown label="File" options={fileOptions} />
      <Dropdown label="Edit" options={editOptions} />
      <Dropdown label="Format" options={formatOptions} />
      <Dropdown label="View" options={viewOptions} />
      <Dropdown label="Help" options={helpOptions} />
    </StyledNav>
  );
};
