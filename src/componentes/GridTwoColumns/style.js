import style, { css } from 'styled-components'
import {Title as Heading} from '../Heading/style'
export const Container = style.div`
    ${({theme, background})=> css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap:${theme.spacings.large};

    @media ${theme.media.lteMedium}{
        grid-template-columns: 1fr;
        text-align: center;

    }

    ${Heading} {
        margin-bottom: ${theme.spacings.huge};
        color: ${background?"white":"#0A1128"};
    }
`}
`

export const TextContainer = style.div`
    ${({theme})=> css`
`}
`

export const ImageContainer = style.div`
    ${({theme})=> css`
`}
`

export const Image = style.img`
    ${({theme})=> css`
`}
`