import { Item as DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

const Item = styled(DropdownMenuItem)`
  cursor: context-menu;
  font-size: 13px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: rgb(145, 201, 247);
    outline: none;
  }
`;
export const DropdownItem = ({ label, shortcut, children, ...rest }) => {
  return (
    <Item {...rest}>
      {children || (
        <>
          {label} {shortcut && <kbd>{shortcut}</kbd>}
        </>
      )}
    </Item>
  );
};
