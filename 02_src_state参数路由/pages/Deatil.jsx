import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Deatil() {
   const {state:{id,title,content}}= useLocation()
//    console.log(state);


  return (
    <ul>
        <li>信息编号：{id}</li>
        <li>信息标题：{title}</li>
        <li>信息内容：{content}</li>
   
    </ul>
  )
}
