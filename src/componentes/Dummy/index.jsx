import p from 'prop-types'
import * as S from './style'

export const Dummy = ({children}) =>{
    return (
        <S.Container>
            <h1>{children}</h1>
        </S.Container>
    )
}

Dummy.prototype = {
    children: p.string.isRequired
}