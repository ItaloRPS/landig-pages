import p from 'prop-types'
import * as S from './style'
import {Heading} from '../Heading/index' 

export const LogoLink = ({text,srcImg,link}) =>{
     return (
         <Heading size='small' uppercase>
           <S.Container href={link}>
               {srcImg?(<img src={srcImg} alt={text}></img>):<span>{text}</span>}
           </S.Container>
         </Heading>
     )
}
LogoLink.prototype = {
     texte: p.string.isRequired,
     srcImg: p.string,
     link: p.string.isRequired
}