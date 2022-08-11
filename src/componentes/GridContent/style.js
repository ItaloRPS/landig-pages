import style, { css } from 'styled-components'
export const Container = style.div`
    ${({theme})=> css`
    text-align:center;
    max-width: 58rem;
    margin: 0 auto;
`}

`
export const Hmtl = style.div`
    ${({theme})=> css`
    margin: ${theme.spacings.xhuge} 0;
`}
`