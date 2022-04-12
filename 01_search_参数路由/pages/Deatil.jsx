import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Deatil() {
    const [search,setSearch]=useSearchParams()
    const id=search.get('id')
    const title=search.get('title')
    const content=search.get('content')


  return (
    <ul>
        <li>信息编号：{id}</li>
        <li>信息标题：{title}</li>
        <li>信息内容：{content}</li>
   
    </ul>
  )
}
