import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

/* function ClassApp(){
    return(
        <div>
            <h1>Code are good </h1>
        </div>
        
    )
} */



class ClassApp extends React.Component{




    //创建自己的方法
    myWay(){

    }


    render(){

        return(
            <div>
                <h1>How are you?</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}


export default ClassApp;