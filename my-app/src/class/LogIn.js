import React, {Component} from 'react';

class LogIn extends Component{


    //构造方法,又
    constructor(){
        super()
        this.state={
            isLogin:true

        }
    }

    render(){
        let WordDis
        if(this.state.isLogin){
            WordDis='Ok!'
        }else{
            WordDis='Not Ok!'
        }
        return(
            <div>
                <h1>here are you!!  {WordDis}</h1>
             
                
            </div>
        )
    }




}

export default LogIn