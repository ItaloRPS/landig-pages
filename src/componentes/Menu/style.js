import style, { css } from 'styled-components'
import {Container as SectionContainner} from '../SectionContainner/style'
import {Title as Heading} from '../Heading/style'

const menuVisible = (theme)=>css`
visibility: visible;
opacity:1 ;
`;

export const Container = style.div`
    ${({theme,visible})=> css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.color.mediunGray};
    background: ${theme.color.white};
    overflow-y: auto;
    transition: all 300ms ease-in-out;

    ${SectionContainner} {
        padding-top: 0;
        padding-bottom: 0;
    }

    & ${Heading} {
        margin-top: 0;
        margin-bottom: 0;
    }

    @media ${theme.media.lteMedium}{
        height: 100vh;
        visibility: hidden;
        opacity: 0;
        ${visible && menuVisible(theme)}

        ${SectionContainner} {
            display: grid;
            grid-template-columns: 1fr;
            grid-column: 1fr;
            height: 100vh;
            align-items: center;
            
        }
    
        & ${Heading} {
            padding-bottom: ${theme.spacings.large};
            display:flex;
            justify-content: center;
        }

    }
`}
`

export const MenuContainer = style.div`
    ${({theme})=> css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${theme.color.mediunGray};

    @media ${theme.media.lteMedium}{
        display: block;
        text-align: center;
        padding:${theme.spacings.xxlarge} 0; 

    }
`}
`

export const Button = style.button`
    ${({theme,visible})=> css`
    position: fixed;
    z-index: 6;
    top: 2rem;
    right: 4rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.color.primaryColor};
    color: ${theme.color.white};
    border: none;
    display:none;
    pointer-events: ${visible?'none':'all'};


    @media ${theme.media.lteMedium}{
        display: flex;
        align-items: center;
        justify-content: center;

    }

    > svg {
        width: 2.5rem;
        height: 2.5rem;
    }
    
`}

`