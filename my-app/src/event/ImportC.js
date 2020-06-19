import React, {Component} from 'react';

class ImportC extends React.Component{

    constructor(){
        super()
        this.state={
            count:0
        }
        this.handC=this.handC.bind(this)
    }


    handC(){
        
        this.setState(prevState=>{
                return {
                    count:prevState.count+1
                }
            }

        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={ this.handC }>Change</button>
            </div>
        )
    }




}

export default ImportC