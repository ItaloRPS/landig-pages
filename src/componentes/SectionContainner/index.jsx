import p from 'prop-types'
import * as S from './style'

export const SectionContainner = ({children}) =>{
     return (
          <S.Container>{children}</S.Container>
     )
}
SectionContainner.prototype = {
     children: p.node.isRequired
}