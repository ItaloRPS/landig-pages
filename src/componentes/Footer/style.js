import style, { css } from 'styled-components'
import { Container as TextComponent } from '../TextComponent/style'
import { Container as SectionContainner } from '../SectionContainner/style'

export const Container = style.div`
    ${({theme})=> css`
    text-align: center;
    border-top: 0.1rem solid ${theme.color.mediunGray};
    
    a{
        color: inherit;
        text-decoration: none;
    }

    & ${TextComponent}{
        font-size: ${theme.font.sizes.small};
    }
    
    & ${SectionContainner}{
       padding-top:0;
       padding-bottom: 0;
    }

`}
`
