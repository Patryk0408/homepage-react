import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        background: var(--bg-light-mode,  ${props => (props.darkMode ? '#252525' : '#FBFBFE')});
        color: ${props => (props.darkMode ? `#FFFFFF` : `#000000`)};
        font-family: Inter;
        font-style: normal;
        line-height: normal;
    }
`
