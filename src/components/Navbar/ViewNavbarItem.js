import { DropdownItem } from '../../styles/DropdownItem';
import { Dropdown } from '../../styles/Dropdown';

export const ViewNavbarItem = (props) => {
  return (
    <Dropdown label="View">
      <DropdownItem label="Zoom" />
      <DropdownItem label="Statusbar" />
    </Dropdown>
  );
};
