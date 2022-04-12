import React ,{useState}from 'react'
import { Navigate ,NavLink,Outlet} from 'react-router-dom'
// Navigate   replace={true}
export default function Home() {
    const[sum,setSum]=useState(1)
  return (
    <div>
        <h3>我是Home内容</h3>
        {sum===2?<Navigate to="/about"/>:<h4>当前sum的值是：{sum}</h4>}
        <button onClick={()=>setSum(2)}>点我将sum变为2</button>
        <div>
          <ul className='nav nav-tabs'>
            <li><NavLink className="list-group-item" to="new">New</NavLink></li>
            <li><NavLink className="list-group-item" to="message">Message</NavLink></li>
          </ul>
          <Outlet/>
        </div>
    </div>
  )
}
