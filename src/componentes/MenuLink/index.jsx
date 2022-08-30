import p from 'prop-types'
import * as S from './style'

export const MenuLink = ({children,link,newTab}) =>{
     const target =  newTab?'_blank':'_self'
     return (

          <S.Container href={link} target={target}>{children}</S.Container>
     )
}
MenuLink.prototype = {
     children: p.string.isRequired,
     link:p.string.isRequired,
     newTab:p.bool
}