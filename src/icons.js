import React, {useState} from 'react';
import UseAnimations from 'react-useanimations';
import microphone2 from 'react-useanimations/lib/microphone2'


const Icons = (props) => {   
    console.log(props.props)
    let audio_url = props.props
    const [checked, setChecked] = useState(true)
    
    const start = (audio_url_link, state) => {
        let audio = new Audio(audio_url_link);
        if (state) {
            audio.play();
        } else {
            audio.pause();
        }
    };
    return(
        <UseAnimations reverse={checked} onClick={() => { 
            setChecked(!checked);  
            start(audio_url, true);
            setChecked(checked);
        }}
        size={25}
        wrapperStyle={{ marginRight: '1px' }}
        animation={microphone2}

        
    />

    )
}
    

export default Icons;