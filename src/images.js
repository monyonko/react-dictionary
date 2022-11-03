import React, {useEffect, useState} from "react"
import SingleImage from './singleImage'
import './images.css'

export default function(data){
    
    if(data.data.data){
        console.log(data.data.data.photos)
        const response = data.data.data.photos
        return (
            <div className="wordImages">
                <p className="imageTitle">Images</p>
                <div className="images-section">      
                    {
                        Object.keys(response).map((key, index)=>{
                            return(
                                <SingleImage data={response[index]}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
   
   
   
}