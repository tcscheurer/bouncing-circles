import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './Circle';
import Counter from './Counter';

export default class Parent extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            count: 0,
            
          };
       
        this.handleCountUpdate = this.handleCountUpdate.bind(this);      
         
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState !== this.state){
            if(prevState.count - this.state.count >= 11115 || prevState.count - this.state.count >= -11115){
                return true;
            }
        }
        return false;
    }

    handleCountUpdate(val){
        this.setState({
            count: this.state.count+val
        })
    }
    render() {
        
        return(
            
            <div>
                <h1>{this.state.count}</h1>
                <Circle 
                handleCountUpdate={this.handleCountUpdate}
                />
                <canvas />
            </div>
        );
    }
}