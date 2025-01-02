import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import images from "./images";


function createCard(images){
    return <Card 
    key = {images.key}
    img = {images.imageURL}
    name = {images.description} />
}

function App(){
    return (<div>
        <Heading />
        <div className="container">
        {images.map(createCard)}
        </div>
    </div>
    )
}

export default App; 