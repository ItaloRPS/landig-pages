import p from 'prop-types'
import * as S from './style'

import {SectionBackground} from '../SectionBackground'
import {Heading} from '../Heading'

export const GridImage = ({title, description, grid, background,sectionId=''}) =>{
     return (
     <SectionBackground background={background} sectionId={sectionId}>
          <S.Container>
              <Heading uppercase size='huge' as='h2'>{title}</Heading>
              <S.Grid>
                  {grid.map((el) =>(
                      <S.GridElement key={el.altText}>
                        <S.Image src={el.srcImg} alt={el.altText}/>
                      </S.GridElement>
                  ))}
              </S.Grid>
          </S.Container>
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

    })).isRequired,
    sectionId:p.string
}