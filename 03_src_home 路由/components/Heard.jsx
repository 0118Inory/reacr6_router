import React from "react";
import { useNavigate } from "react-router-dom";

export default function Heard() {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
        
    }
    function goOut() {
        navigate(1)
    }
  return (
    <div className="col-xs-offset-2 col-xs-8">
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={goBack}>ει</button>
        <button onClick={goOut}>εθΏ</button>
      </div>
    </div>
  );
}
