import React, {Component} from 'react';

class ClassL extends Component{


    //构造方法,又
    constructor(){
        super()
        this.state={
            name :"jack",
            age :30

        }
    }

    render(){
        return(
            <div>
                <h1>here are you!!  {this.state.name}</h1>
                <h1>here are you!!  {this.state.age}</h1>
                
            </div>
        )
    }




}

export default ClassL