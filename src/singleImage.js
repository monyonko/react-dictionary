import React from "react"
import './singleImage.css'

export default function SingleImage(props){
    console.log(props)
    return(
        <div classNme="individual-image">
            <img src={props.data.src.tiny} alt={props.data.alt}/>

        </div>
        
    )
}