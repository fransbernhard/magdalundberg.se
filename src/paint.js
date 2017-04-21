import React, { Component } from 'react';
import Menu from './components/menu';

// Create Component
class Paint extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <h2>All about me</h2>
            </div>
        )
    }

    // Lifecycle funcitons
    componentWillMount() {
        console.log('componentWillMound');
    }

    // Gets called AFTER render method
    componentDidMount() {
        console.log('componentDidMound');
        // any grabbing of external data
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
}

export default Paint;
