import { mapMenu, mapMenuLinks } from "./map.menu"

describe('map-menu',() =>{
    test('should return a predefined object if no data',()=>{
        const menu = mapMenu()
        expect(menu.newTab).toBe(false)
        expect(menu.text).toBe('')
        expect(menu.srcImg).toBe('')
        expect(menu.link).toBe('')
    })
   
    test('should map menu to match key and values required',()=>{
        const menu = mapMenu({
            "open_in_new_tab":false,
            "logo_text":'Landing page',
            "logo_link":"#home",
            "menu": [
              {
                "link_text": "intro",
                "url": "#intro",
                "open_in_new_tab": false
              },
              {
                "link_text": "grid-one",
                "url": "#grid-one",
                "open_in_new_tab": false
              }
            ],
            logo:{
                url:'a.svg'
            }
          
        })
        expect(menu.newTab).toBe(false)
        expect(menu.text).toBe('Landing page')
        expect(menu.srcImg).toBe('a.svg')
        expect(menu.link).toBe('#home')
        expect(menu.links[0].newTab).toBe(false)
        expect(menu.links[0].children).toBe('intro')
        expect(menu.links[0].link).toBe('#intro')
    })

    test('should return an empty array if no links',()=>{
      const links = mapMenuLinks()
      expect(links).toEqual([])
      
  })
 
    test('should map links if links passed',()=>{
      const links = mapMenuLinks([
        {
          "link_text": "intro",
          "url": "#intro",
          "open_in_new_tab": false
        },
        {}
      ])
      expect(links[0].newTab).toBe(false)
      expect(links[0].children).toBe('intro')
      expect(links[0].link).toBe('#intro')
      
  })
 
})