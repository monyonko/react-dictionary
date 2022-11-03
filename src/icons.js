import React, {useState} from 'react';
import UseAnimations from 'react-useanimations';
import microphone2 from 'react-useanimations/lib/microphone2'


const Icons = (props) => {
    const [checked, setChecked] = useState(true)
    let audio = new Audio("/christmas.mp3")
  
    const start = () => {
      audio.play()
    }
    return(
        <UseAnimations reverse={checked} onClick={() => { 
            setChecked(!checked);  
        }}
        size={25}
        wrapperStyle={{ marginRight: '1px' }}
        animation={microphone2}

        
    />

    )
}
    

export default Icons;