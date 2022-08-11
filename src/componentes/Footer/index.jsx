import p from 'prop-types'
import { TextComponent } from '../TextComponent'
import { SectionContainner } from '../SectionContainner'
import * as S from './style'

export const Footer = ({footerHtml}) =>{
     return (
        <S.Container>
            <SectionContainner></SectionContainner>
          <TextComponent>
                {footerHtml}
            </TextComponent>
        </S.Container>
        )
}
Footer.prototype = {
    footerHtml: p.string.isRequired
}