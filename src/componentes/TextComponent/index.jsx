import p from 'prop-types'
import * as S from './style'

export const TextComponent = ({children}) =>{
     return (
          <S.Container dangerouslySetInnerHTML={{__html:children}} />
     )
}
TextComponent.prototype = {
     children: p.string.isRequired
}



