import React from "react";
import { useEffect } from "react";
import { Base } from "../Base";
import { mockBase } from "../Base/mock";
import * as S from './style'
import {mapData} from '../../api/map-data'
import { useState } from "react";
import { PaneNotFound } from "../PageNotFound";
import { Loading } from "../Loading";



function Home() {
  const [data,setData] = useState([])

  useEffect(()=>{
    const load = async ()=>{
      try {
        const data = await fetch('http:localhost:1337/pages?slug=landing-page')
        const json = await data.json()
        const pageData = mapData(json)
        setData(pageData[0])
      } catch (error) {
        setData(undefined)
      }
    }
    load()

  },[])
  if (data===undefined) {
    return <PaneNotFound/>
  }

  if (data && !data.slug) {
    return <Loading/>
  }

  return <Base {...mockBase}/>
}

export default Home;
