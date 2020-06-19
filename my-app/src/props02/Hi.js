import React from 'react';



function Hi(props){
    return(
        <div>
            <h4>Question:{props.question}</h4>
            <h4>Answer:{props.answer}</h4>
            <hr/>
        </div>
    )
}

export default Hi;