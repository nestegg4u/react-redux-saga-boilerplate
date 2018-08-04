import { injectGlobal } from 'styled-components';

export const theme = {
  colour: {
    background: '#D7DCE5',
    disabled: '#A0A8B7',
    example: '#21252B',
    primary: '#C45140',
  },
  spacing: 8,
};

export const configureGlobalStyle = () => injectGlobal`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.colour.background};
    font-size: 14px;
    margin: 0;
    font-family: 'Lato';
  }

  #root {
    height: 100%;
  }
`;
