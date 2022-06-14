import p from 'prop-types'
import * as S from './style'

export const TextComponent = ({children}) =>{
     return (
          <S.Container>{children}</S.Container>
     )
}
TextComponent.prototype = {
     children: p.node.isRequired
}