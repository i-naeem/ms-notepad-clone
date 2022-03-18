import { Separator } from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

const StyledSeprator = styled(Separator)`
  height: 1px;
  margin: 5px;
  background-color: darkgrey;
`;

export const DropdownSeparator = (props) => <StyledSeprator {...props} />;
