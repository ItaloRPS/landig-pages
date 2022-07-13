import p from 'prop-types'
import { MenuLink } from '../MenuLink'
import * as S from './style'

export const NavLinks = ({links = []}) =>{
     return (
          <S.Container>{
            links.map((link)=>(
                <MenuLink key={link.link} {...link}/>
            ))
            
            }</S.Container>
     )
}
NavLinks.prototype = {
     links: p.arrayOf({
        children: p.string.isRequired,
        link:p.string.isRequired,
        newTab: p.bool
     })
}