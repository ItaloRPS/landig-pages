import linksMock from '../../componentes/NavLinks/mock'
import gridMock from '../../componentes/GridSection/mock'
import {GridSection} from '../../componentes/GridSection'

export const mockBase = {
    children:(
        <>
            <GridSection {...gridMock}/>
            <GridSection {...gridMock} background/>
            <GridSection {...gridMock}/>
            <GridSection {...gridMock} background/>
        </>
    ),
        links:linksMock,
        logoData:{
            text:'Logo',
            link:'#'
        },
        footerHtml:'<p> Teste Footer </p>'
    
}
