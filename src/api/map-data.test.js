import {mapData} from './map-data'
describe('map-data',() =>{
    test("should map data even if there is no data",()=>{
        const pageData = mapData()[0]
        expect(pageData.footerHtml).toBe('')
        expect(pageData.slug).toBe('')
        expect(pageData.title).toBe('')
        expect(pageData.sections).toEqual([])
    })
    
    test("shold map data id there are data",()=>{
        const pageData = mapData([
            {
                footer_text:"<p>Hey</p>",
                slug:'slug',
                title:'title',
                sections:[1,2,3,4],
                menu:{a:'b'}
            }
        ])[0]
        expect(pageData.footerHtml).toBe("<p>Hey</p>")
        expect(pageData.slug).toBe('slug')
        expect(pageData.title).toBe('title')
        expect(pageData.sections).toEqual([1,2,3,4])
    })
})