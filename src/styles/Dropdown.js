import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import styled from 'styled-components';

const Trigger = styled(DropdownMenu.Trigger)`
  background: ${(props) => (props.open ? 'rgb(145, 201, 247)' : 'none')};
  user-select: none;
  padding: 2px 3px;
  border: none;

  &:hover {
    background-color: rgb(229, 243, 255);
  }
`;

const Content = styled(DropdownMenu.Content)`
  min-width: 230px;
  background-color: rgb(242, 242, 242);
  box-shadow: 2px 2px 3px 0px darkgrey, -1px -1px 3px 0px darkgrey;
};
`;

export const Dropdown = ({ label = 'Dropdowns', children }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={() => setOpen(!open)}>
      <Trigger role="button" open={open}>
        {label}
      </Trigger>
      <Content align="start">{children}</Content>
    </DropdownMenu.Root>
  );
};
