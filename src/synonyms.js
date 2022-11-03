import React from "react"
import './synonyms.css'

export default function Synonyms(data){
    console.log(data)
    const response = data.data
    console.log(data.data[0])
    if(response[0] ){
        return(
            <span className="synonymPage">
                <p className="synonymTitle">Synonyms :</p>
                {
                    Object.keys(response).map((key, index)=>{
                        return(
                            <p className="synonym"> {response[index]}</p>
                        )
                    })
                }
               
            </span>
            
        )
    }
}