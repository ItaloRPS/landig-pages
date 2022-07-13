import p from 'prop-types'
import * as S from './style'

export const SectionBackground = ({children, background = false}) =>{
     return (
          <S.Container background={background}>{children}</S.Container>
     )
}
SectionBackground.prototype = {
     children: p.node.isRequired,
     background: p.bool,
}