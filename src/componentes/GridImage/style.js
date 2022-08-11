import style, { css } from 'styled-components'

import {Container as TextComponent} from '../TextComponent/style'

export const Container = style.div`
    ${({theme})=> css`
    ${TextComponent}{
        margin-bottom: ${theme.spacings.xhuge};
    
    }
`}
`

export const Grid = style.div`
    ${({theme})=> css`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
    gap:${theme.spacings.large};
`}
`

export const GridElement = style.div`
    ${({theme})=> css`
    overflow:hidden;

`}
`
export const Image = style.img`
    ${({theme})=> css`
    width: 100%;
    transition: all 300ms ease-in-out;
    &:hover{
        transform: scale(1.2) rotate(10deg);
    }

`}
`