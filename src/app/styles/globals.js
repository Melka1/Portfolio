import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    /* Keep anchor targets clear of the sticky header. */
    scroll-padding-top: 96px;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    /* Ambient depth instead of a flat navy field. */
    background-color: ${props => props.theme.colors.background1};
    background-image:
      radial-gradient(60rem 40rem at 85% -5%, rgba(148, 93, 214, 0.18), transparent 70%),
      radial-gradient(50rem 40rem at 0% 15%, rgba(19, 173, 199, 0.12), transparent 70%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  ::selection {
    background: ${props => props.theme.colors.purple};
    color: #fff;
  }

  /* Visible keyboard focus. Several components clear the outline on :focus
     and never replace it, which left them untraversable by keyboard. */
  :focus-visible {
    outline: 2px solid ${props => props.theme.colors.cyan};
    outline-offset: 3px;
    border-radius: 4px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background1};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.surfaceRaised};
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.purple};
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
