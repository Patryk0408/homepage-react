import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        background: ${props => (props.darkMode ? '#252525' : '#FBFBFE')};
        font-family: Inter;
        font-style: normal;
        line-height: normal;
        transition: ${({ theme }) => theme.time.default};
    }
`
