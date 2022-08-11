import {mapData} from './map-data'
describe('map-data',() =>{
    test("should map data even if there is no data",()=>{
        const pageData = mapData()
        // expect(pageData).toEqual([{footer_text:'footerHtml'}])
    })
})