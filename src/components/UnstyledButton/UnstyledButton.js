import styled from 'styled-components/macro';

export default styled.button`
  display: ${(props) => props.display || 'block'};
  margin: 0;
  padding: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
