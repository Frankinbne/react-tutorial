import React, {Component} from 'react';



function Click(){

    return(
        <div>

        <p>111222</p>
        console.log("Click -> 111222", 111222)
        <button onClick={ myFun001 }></button>
        
        
        </div>
    )



}

function myFun001 () { 
    window.alert('666')
 }







export default Click;