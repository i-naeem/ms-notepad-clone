import styled from 'styled-components';

const StyledButton = styled('button')`
  background: transparent;
  outline: none;
  border: none;
  padding: 2px 3px;

  &:hover {
    background-color: rgba(229, 243, 255);
  }
`;

export const NavbarItem = (props) => {
  return <StyledButton {...props} />;
};
