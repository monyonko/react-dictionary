import React from "react"
import SingleImage from './singleImage'
import './images.css'

export default function Images(data){
    
    if(data.data){
        console.log(data.data.data.photos)
        const response = data.data.data.photos
        if(response){
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
   
    
   
   
   
}