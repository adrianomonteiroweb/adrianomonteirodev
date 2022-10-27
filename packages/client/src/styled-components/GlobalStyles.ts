import { createGlobalStyle } from 'styled-components';

interface Props {
  theme: {
    body: string;
    fontColor: string;
  };
}

export const GlobalStyles = createGlobalStyle<Props>`
  background-color: ${(props) => props.theme.body}
  color: ${(props) => props.theme.fontColor}
`;
