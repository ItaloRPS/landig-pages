import P from  'prop-types'
import * as S from './style'
export const Heading =({
    children,
    colorDark = true,
     as = 'h1',
     size = 'huge',
     uppercase =false,
    })=>{
    return <S.Wrapper colorDark ={colorDark} as={as} uppercase={uppercase}>{children}</S.Wrapper>
}

Heading.prototype ={
    children:P.node.isRequired,
    colorDark:P.bool,
    as:P.oneOf(['h1','h2','h3','h4','h5','h6']),
    size:P.oneOf(['small','mediun','big','hude','xhude'])
}