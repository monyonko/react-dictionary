import React from "react"
import './meanings.css'

export default function Meanings(props){
    console.log(props)
    const response = props.data
    return(
        <div>
            {
                Object.keys(response).map((key, index)=>{
                    if(response[index].example && response[index].synonyms && response[index].antonyms){
                        return(
                            <div>
                                <p className="definition">{index + 1}.{response[index].definition}</p>
                                <p className="sentence">{response[index].example}</p>
                                <p className="synonyms">{response[index].synonyms}</p>
                                <p className="antonyms">{response[index].antonyms}</p>
                               
                            </div>
                        )
                        }
                    if(response[index].example && response[index].synonyms ){
                        return(
                            <div> 
                                <p className="definition">{index + 1}.{response[index].definition}</p>
                                <p className="sentence">{response[index].example}</p>
                                <p className="synonyms">{response[index].synonyms}</p>
                                
                            </div>
                        )
                        }
                    if(response[index].example && response[index].antonyms){
                        return(
                            <div> 
                                <p className="definition">{index + 1}.{response[index].definition}</p>
                                <p className="sentence">{response[index].example}</p>
                                <p className="antonyms">{response[index].antonyms}</p>
                                
                            </div>
                        )
                        }
                    if(response[index].synonyms && response[index].antonyms){
                        return(
                            <div> 
                                <p className="definition">{index + 1}.{response[index].definition}</p>
                                <p className="synonyms">{response[index].synonyms}</p>
                                <p className="antonyms">{response[index].antonyms}</p>
                                
                            </div>
                        )
                        }
                    if(response[index].example){
                    return(
                        <div> 
                            <p className="definition">{index + 1}.{response[index].definition}</p>
                            <p className="sentence">{response[index].example}</p>                
                        </div>
                    )
                    }
                    
                    if(response[index].synonyms){
                        return(
                            <div> 
                                <p>{index + 1}.{response[index].definition}</p>
                                <p>{response[index].synonyms}</p>
                                
                            </div>
                        )
                        }
                    if(response[index].antonyms){
                        return(
                            <div> 
                                <p>{index + 1}.{response[index].definition}</p>
                                <p>{response[index].antonyms}</p>
                                
                            </div>
                        )
                        }
                   
                        
                    
                })
            }
        </div>
    )

}