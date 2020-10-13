import React, { Component } from 'react';
import './clock.module.css';

export class Clock extends Component{

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {  
        this.setState({      
            date: new Date()    
        });  
    }

    render(){ console.log(this.props.format);
        const dateStr = this.state.date[this.props.format]();
        return(<span className="clock">{dateStr}</span>);
    }
}