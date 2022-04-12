import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";
import Heard from "./components/Heard";


export default function App() {
  // 根据路由表生成对应的路由规则
  const elements = useRoutes(routes);
  return (
    <div>
      <div className="row">
      <Heard/>
      </div>
      <>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
            <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
             
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                
                  {/* 注册路由 */}
                  {elements}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
