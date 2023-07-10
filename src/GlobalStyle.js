import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        background: var(--bg-light-mode, #FBFBFE);
        font-family: Inter;
        font-style: normal;
        line-height: normal;
    }
`
