export const mapData = (pagesData=[{}])=>{
    return pagesData.map((data)=>{
        const {'footer_text':footerHtml = "",
        slug="",
        title='',
        sections=[],
        menu={}
    } = data

        return{
            footerHtml,
            slug,
            title,
            sections,
            menu
        }
    })
}

// const {inspect} = require('util')
// const data = require('./dados.json')
// console.log(inspect(mapData(data),null,null,true),)