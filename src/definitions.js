import React from "react"
import Meanings from "./meanings"
import Synonyms from './synonyms'
import './definitions.css'


export default function Definition(data){
    console.log(data)
    const response = data.data
    console.log(response)

    if(response){
        return (
            <div className="definition-page">
                {
                    Object.keys(response).map((key, index)=>{
                        return(
                            <div key = {index}>
                                <p className="searchTerm">{response[index].partOfSpeech}</p>
                                <Meanings data={response[index].definitions}/>
                                <Synonyms data={response[index].synonyms}/>
                               
                            </div>
                        )
                    })
                }
           
            
            </div>
        )
        
    }
   
    
    

   
}