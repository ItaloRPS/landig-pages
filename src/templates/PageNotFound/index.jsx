import p from 'prop-types'
import * as S from './style'
import {GridContent} from '../../componentes/GridContent'

export const PaneNotFound = ({children}) =>{
     return <GridContent 
    title='Error 404'
    html='<p> Apagina que voce busca não foi encontrada</p>'
    />

}