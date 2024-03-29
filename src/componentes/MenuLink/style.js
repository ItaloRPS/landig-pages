import style, { css } from 'styled-components'
export const Container = style.a`
    ${({theme})=> css`
    display:block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.medium};
    color: black;
    position: relative;

    &::after{
        content:'';
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        width: 0%;
        height: 0.2rem;
        background: ${theme.color.secondaryColor};
        
    }

    &:hover::after{
        left: 25%;
        width: 50%;
        transition: all 300ms ease-in-out; 
    }

`}
`