import { DropdownItem } from '../../styles/DropdownItem';
import { Dropdown } from '../../styles/Dropdown';

export const EditNavbarItem = (props) => {
  return (
    <Dropdown label="Edit">
      <DropdownItem label="Undo" shortcut="Ctrl + Z" />
      <DropdownItem label="Cut" shortcut="Ctrl + X" />
      <DropdownItem label="Paste" shortcut="Ctrl + V" />
      <DropdownItem label="Delete" shortcut="Del" />
      <DropdownItem label="Find" shortcut="Ctrl + F" />
    </Dropdown>
  );
};
