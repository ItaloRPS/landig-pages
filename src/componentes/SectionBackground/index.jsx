import p from 'prop-types'
import {SectionContainner} from '../SectionContainner'
import * as S from './style'

export const SectionBackground = ({children, background = false,sectionId =''}) =>{
     const ranndom = () =>`id-${Math.random()*10000}`.replace(/[^a-z0-9-_]/gi,'-')
     const id = sectionId?sectionId:ranndom()
     return (
          <S.Container background={background} id={id}>
               <SectionContainner>{children}</SectionContainner>
          </S.Container>
     )
}
SectionBackground.prototype = {
     children: p.node.isRequired,
     background: p.bool,
     sectionId:p.string
}