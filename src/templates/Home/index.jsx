import React from "react";
import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'
import * as S from './style'

import {mapData} from '../../api/map-data'
import {Heading} from '../../componentes/Heading'
import {GridTwoColumns} from '../../componentes/GridTwoColumns'
import {GridContent} from '../../componentes/GridContent'
import {GridSection} from '../../componentes/GridSection'
import {GridImage} from '../../componentes/GridImage'

import { mockBase } from "../Base/mock";
import { Base } from "../Base";
import { PaneNotFound } from "../PageNotFound";
import { Loading } from "../Loading";



function Home() {
  const [data,setData] = useState([])
  const location = useLocation()

  useEffect(()=>{
    const pathName = location.pathname.replace(/[^a-z0-9-_]/gi,'')
    const slug = pathName?pathName:'landing-page'
    const load = async ()=>{
      try {
        const data = await fetch('http:localhost:1337/pages?slug='+slug)
        const json = await data.json()
        const pageData = mapData(json)
        setData(pageData[0])
      } catch (error) {
        setData(undefined)
      }
    }
    load()

    useEffect(()=>{
      if (data === undefined) {
        document.title = 'pagina não encontrada'
      }
      if (data===undefined) {
        document.title = 'Carregando...'
      }
    
      if (data && !data.slug) {
        document.title = data.title 
      }
    })
  },[location])
  if (data===undefined) {
    return <PaneNotFound/>
  }

  if (data && !data.slug) {
    return <Loading/>
  }

  const {menu,sections,footerHtml, slug} = data
  const {links,text,link,srcImg} = menu
  return <Base
  links={links} 
  footerHtml={footerHtml}
  logoData={{text,link,srcImg}}>
    {sections.map((section,index)=>{
      const key = `${slug}-${index}`
      const {component} = section
      if (component === 'section.section-two-columns') {
        return <GridTwoColumns key={key} {...section}/>
      }
      if (component === 'section.section-content') {
        return <GridContent key={key} {...section}/>
      }
      if (component === 'section.section-grid-text') {
        return <GridSection key={key} {...section}/>
      }
      if (component === 'section.section-grid-image') {
        return <GridImage key={key} {...section}/>
      }
    })}
  </Base>
}

export default Home;