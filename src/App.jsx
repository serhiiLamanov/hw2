import React, { Component } from 'react';
import styles from './app.module.css';

export default class extends Component{
    FORMATS=["toLocaleString","toLocaleDateString","toLocaleTimeString", "toString"];
    state={
        activeFormat : 0,
        date: new Date(),
        bgColor: this.getRandomColor()
    }

    getRandomColor(){
        const randInt = int => Math.floor(Math.random() * int);
        return `hsl(${randInt(360)},${randInt(100)}%,${randInt(90)}%)`;
    }

    click(){
        this.setState((state, props) => ({
            activeFormat : state.activeFormat == this.FORMATS.length-1 ? 0 : state.activeFormat+1,
            bgColor: this.getRandomColor()
        }));
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

    render(){
        const dateStr = this.state.date[this.FORMATS[this.state.activeFormat]]();
        return(
            <div className={styles['random-format-clock']} onClick={()=>this.click()} style={{backgroundColor:this.state.bgColor}}>
                <h1>Click anywhere to change formats</h1>
                <span className={styles.clock}>{dateStr}</span>
            </div>
        );
    }
}