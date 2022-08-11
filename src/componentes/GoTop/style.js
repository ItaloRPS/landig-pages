import style, { css } from 'styled-components'
export const Container = style.a`
    ${({theme})=> css`
    position: fixed;
    background-color:${theme.color.mediunGray};
    color:${theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
`}
`