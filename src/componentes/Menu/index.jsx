import p from 'prop-types'
import * as S from './style'
import {SectionContainner} from '../SectionContainner'
import {LogoLink} from '../LogoLink'
import {NavLinks} from '../NavLinks'

import {Menu as MenuIcon} from '@styled-icons/material-outlined/Menu'
import {Close as CloseIcon} from '@styled-icons/material-outlined/Close'
import { useState } from 'react'

export const Menu = ({links,logoData}) =>{
     const [visible,  setVisible] = useState(true)
     
     return (
          <>
               <S.Button visible={visible} onClick={()=> setVisible(true)} aria-label='Open/Close Menu'>
                  {visible?<CloseIcon aria-label='Close Menu' />:<MenuIcon aria-label='Open Menu' />}
               </S.Button>
               <S.Container visible={visible} onClick={()=> setVisible(false)}>
                    <SectionContainner>
                         <S.MenuContainer>
                              <LogoLink {...logoData}/>
                              <NavLinks links={links}/>
                         </S.MenuContainer>
                    </SectionContainner>
               </S.Container>
          </>
     )
}
Menu.prototype = {
     ...NavLinks.prototype,
     logoData: p.shape(LogoLink.prototype).isRequired
}