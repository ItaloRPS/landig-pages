import p from 'prop-types'
import * as S from './style'

import {SectionBackground} from '../SectionBackground'
import {Heading} from '../Heading'

export const GridImage = ({title, description, grid, background}) =>{
     return (
     <SectionBackground background={background} as='h2'>
          <S.Container>
              <Heading uppercase size='huge'>{title}</Heading>
              <S.Grid>
                  {grid.map((el) =>(
                      <S.GridElement key={el.altText}>
                        <S.Image src={el.srcImg} alt={el.altText}/>
                      </S.GridElement>
                  ))}
              </S.Grid>
          </S.Container>u
      </SectionBackground>
   )
     
}
GridImage.prototype = {
    background: p.bool.isRequired,
    title:p.string.isRequired,
    description:p.string.isRequired,
    grid: p.arrayOf(
        p.shape({
         altText:p.string.isRequired,
         srcImg:p.string.isRequired

    })).isRequired
}