import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './Circle';
import Counter from './Counter';

export default class Parent extends React.Component {

    render() {
        return(
            <div>
            <Counter />
            <Circle />
            </div>
        );
    }
}