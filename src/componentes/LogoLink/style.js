import style, { css } from 'styled-components'
export const Container = style.a`
    ${({theme})=> css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.color.primaryColor};
    font-size:${theme.font.sizes.medium};
    font: ${theme.font.family.secondary};
    
    > img{
        max-height: 2.5rem;
    }

`}
`