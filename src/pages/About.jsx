import React from 'react'


import { Navigate ,NavLink,Outlet} from 'react-router-dom'


export default function About() {
  return (
    <div className='nav nav-tabs'>
            <li><NavLink className="list-group-item" to="Chinamap">中国地图</NavLink></li>

    </div>
  )
}
