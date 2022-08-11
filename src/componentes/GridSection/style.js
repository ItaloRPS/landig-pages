import style, { css } from 'styled-components'

import {Title as HeaddingContainer} from '../Heading/style'
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
    counter-reset: grid-conunter;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
    gap:${theme.spacings.large};

    @media ${theme.media.lteMedium}{
        grid-template-columns: 1fr;
    }
`}
`

export const GridElement = style.div`
    ${({theme})=> css`
    ${HeaddingContainer}{
        position: relative;
        left: 5rem;
    }
    ${HeaddingContainer}::before{
        counter-increment: grid-conunter;
        content: counter(grid-conunter);
        position: absolute;
        font-size: 7rem;
        top:-3rem;
        left:-5rem;
        transform: rotate(5deg);
        font-weight: 800;
    }
`}
`