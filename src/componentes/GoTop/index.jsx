import p from 'prop-types'
import * as S from './style'
import {KeyboardArrowUp} from '@styled-icons/material-outlined/KeyboardArrowUp'

export const GoTop = () =>{
     return (
          <S.Container href='#' aria-label='Go to top' title='Go to top'>
            <KeyboardArrowUp />
          </S.Container>
     )
}
GoTop.prototype = {
     children: p.node.isRequired
}