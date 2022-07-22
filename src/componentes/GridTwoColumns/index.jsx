import p from 'prop-types'
import * as S from './style'

import {SectionBackground} from '../SectionBackground/index'
import {Heading} from '../Heading'
import {TextComponent} from '../TextComponent/index'

export const GridTwoColumns = ({title, text, srcImg, background = false}) =>{
     return (
        <SectionBackground background={background}>
            <S.Container background={background}>
                <S.TextContainer>
                    <Heading uppercase colorDark={!background} as='h2'>{title}</Heading>
                    <TextComponent>{text}</TextComponent>
                </S.TextContainer>
                <S.ImageContainer>
                    <S.Image src={srcImg} alt={title}></S.Image>
                </S.ImageContainer>
            </S.Container>
        </SectionBackground>    
     )
}
GridTwoColumns.prototype = {
     title: p.string.isRequired,
     text: p.string.isRequired,
     srcImg: p.string.isRequired,
     background: p.bool
}