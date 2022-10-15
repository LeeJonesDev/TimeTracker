import React from 'react';
import styled, { css } from 'styled-components';

const TickButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.5em;

  ${props =>
    props.theme.checked &&
    css`
      background: palegreen;
      color: white;
      border: 2px solid palegreen;
    `};
  ${props =>
    props.theme.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const primaryTheme = {
  primary: true
};
const checkedTheme = {
  checked: true
};

const Tick = ({
  primary,
  checked
}: {
  primary?: boolean;
  checked?: boolean;
}) => {
  let theme = undefined;
  if (primary) {
    theme = primaryTheme;
  } else if (checked) {
    theme = checkedTheme;
  }

  return <TickButton theme={theme}> </TickButton>;
};

export default Tick;
