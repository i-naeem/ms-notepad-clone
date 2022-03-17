import styled from 'styled-components';

const StyledItem = styled('div')`
  min-width: ${(props) => props.width || '130px'};
  border-left: 2px solid rgb(215, 215, 215);
  padding: 2px 10px;
  font-size: 12px;
`;

export const StatusbarItem = (props) => {
  return <StyledItem {...props} />;
};
