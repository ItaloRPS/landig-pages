import style, { css } from 'styled-components'

const containerBackgroundActivate = (theme)=>css`
   background: ${theme.color.primaryColor};
    color: ${theme.color.white};
`

export const Container = style.div`
    ${({theme,background})=> css`
    background: ${theme.color.white};
    color: ${theme.color.primaryColor};
    ${background && containerBackgroundActivate(theme)}
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem;
`}
`