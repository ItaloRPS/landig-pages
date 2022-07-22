import p from 'prop-types'
import * as S from './style'

import {SectionBackground} from '../SectionBackground'
import {Heading} from '../Heading'
import {TextComponent} from '../TextComponent'

export const GridSection = ({title, description, grid, background}) =>{
     return (
        <SectionBackground background={background} as='h2'>
            <S.Container>
                <Heading uppercase size='huge'>{title}</Heading>
                <TextComponent>{description}</TextComponent>
                <S.Grid>
                    {grid.map((el) =>(
                        <S.GridElement key={el.title}>
                            <Heading size='medium' colorDark={!background} as='h3'>
                                {el.title}
                            </Heading>
                            <TextComponent>{el.description}</TextComponent>
                        </S.GridElement>
                    ))}
                </S.Grid>
            </S.Container>
        </SectionBackground>
     )
}
GridSection.prototype = {
    title: p.string.isRequired,
    description: p.string.isRequired,
    grid:p.arrayOf(p.shape({
        title:p.string.isRequired,
        description:p.string.isRequired
    })).isRequired,
    background:p.bool

}