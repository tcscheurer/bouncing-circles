import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './Circle';
import Counter from './Counter';

export default class Parent extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            isInc: false,
            isDec: false
          };
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
    }

    handleIncrease(isInc){
        this.setState({
            isInc : isInc
        });
    }

    handleDecrease(isDec){
        this.setState({
            isDec: isDec
        });
    }
    render() {
        return(
            <div>
                <Counter isInc={this.state.isInc}
                isDec={this.state.isDec}
                />
                <Circle isDec={this.state.isDec}
                isInc={this.state.isInc}
                onInc={this.handleIncrease}
                onDec={this.handleDecrease}
                />
            </div>
        );
    }
}