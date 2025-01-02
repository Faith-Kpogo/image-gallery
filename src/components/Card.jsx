import React from "react";

function Card(props){
     return (<div className="card">
        <img src={props.img} alt="Image"/>
        <h3 className="name">{props.name}</h3>
     </div>)
}

export default Card;