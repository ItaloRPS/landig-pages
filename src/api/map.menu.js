export const mapMenu = (menu = {}) => {
    const {
        open_in_new_tab:newTab = false,
        logo_text:text = '', 
        logo_link:link='',
        // logo:{url:srcImg =''}='',
        menu:links =[]   
    } = menu

    const srcImg = menu.logo && menu.logo.url? menu.logo.url:''
    return{
        newTab,
        text,
        link,
        srcImg,
        links:mapMenuLinks(links)

    }
}

export const mapMenuLinks = (links =  [])=>{
    return links.map((item) =>{
       const  {
            "link_text": children ='',
            "url": link ='',
            "open_in_new_tab": newTab = false
          } = item

          return {
            newTab,
            children,
            link
          }
    })
}