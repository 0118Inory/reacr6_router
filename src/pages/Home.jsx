import React ,{useState}from 'react'
import { Navigate ,NavLink,Outlet} from 'react-router-dom'
// Navigate   replace={true}
export default function Home() {
    // const[setSum]=useState(1)
  return (
    <div>
        <h3>我是Home主页</h3>
        <div>
          <ul className='nav nav-tabs'>
            <li><NavLink className="list-group-item" to="downlow">掉落效果</NavLink></li>
            <li><NavLink className="list-group-item" to="carousel3D">卡片旋转</NavLink></li>
            <li><NavLink className="list-group-item" to="dynamic">联动效果</NavLink></li>
            <li><NavLink className="list-group-item" to="logoCouml">Logo 聚集与散开</NavLink></li>
            <li><NavLink className="list-group-item" to="dribbble">详细说明切换</NavLink></li>
            <li><NavLink className="list-group-item" to="dribbble1">图片详细切换</NavLink></li>
            <li><NavLink className="list-group-item" to="line">折线图</NavLink></li>
          </ul>
          <Outlet/>
        </div>
    </div>
  )
}
