import React from "react"
import Icon from "./icons"
import './phonetics.css'

export default function Phonetics(data){
   const response = data.data
   if(response){
    
    return (
        <span className="phonetic-page">
            {
                Object.keys(response).map((key,index) => {
                    if (response[index].audio && response[index].text){
                        return(
                            <span className="phoneticPage">
                                <Icon props={response[index].audio} />
                                <p className="phonetic-aspect">{(response[index].text).slice(2, -1)}</p>
                                <p className="pipe">|</p>
                            </span>

                        )
                    }
                    else if (response[index].audio){
                        return(
                            <span className="phoneticPage">
                                <Icon props={response[index].audio} />
                                <p className="pipe">|</p>
                            </span>

                        )
                    }
                    else{
                        return(
                            <span className="phoneticPage">
                                <p>{(response[index].text).slice(2, -1)}</p>
                                <p className="pipe"> |</p>
                            </span>
                            
                        )
                    }
                    

                })
            }
        </span>
    )
   }
    
}

