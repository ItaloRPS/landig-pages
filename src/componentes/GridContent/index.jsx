import p from 'prop-types'
import * as S from './style'

import {SectionBackground} from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridContent = ({title, html, background = false}) =>{
     return (
          <SectionBackground background={background} as='h2'>
               <S.Container>
                    <Heading uppercase colorDark={!background}>
                         {title}
                    </Heading>
                    <S.Hmtl>
                      <TextComponent>{html}</TextComponent>
                    </S.Hmtl>
               </S.Container>
          </SectionBackground>
     )
}
GridContent.prototype = {
     title:p.string.isRequired,
     html:p.string.isRequired,
     background: p.bool
}