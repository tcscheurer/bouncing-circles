import React from 'react';

class Counter extends React.Component{
	
	
	
	render(){ 
        return(
            <div>
                <a href="#"><img src="plus.png" alt="plus"/></a>
                <label>{this.props.count}</label>
                <a href="#"><img src="minus.jpg" alt="minus"/></a>
            </div>
		);
	}
}

export default Counter;