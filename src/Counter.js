import React from 'react';

class Counter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			count:0
		}
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	
	increment(){
        if(this.props.isInc)
		  this.setState({count: this.state.count+1});
	}
	
	decrement(){
        if(this.props.isDec)
		  this.setState({count: this.state.count-1});
	}
	
	render(){ 
        return(
            <div>
                <a href="#"><img src="plus.png" alt="plus"/></a>
                <label>{this.state.count}</label>
                <a href="#"><img src="minus.jpg" alt="minus"/></a>
            </div>
		);
	}
}

export default Counter;