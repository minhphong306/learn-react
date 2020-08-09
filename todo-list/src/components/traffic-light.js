import React, {Component} from 'react';
import './trafic-light.css'

const COLOR_RED = 0;
const COLOR_YELLOW = 1;
const COLOR_GREEN = 2;

class TrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            currentColor: COLOR_RED
        }

        setInterval(() => {
            console.log(this.currentColor);
            let color = this.state.currentColor
            switch (color) {
                case COLOR_RED:
                    color = COLOR_YELLOW;
                    break
                case COLOR_YELLOW:
                    color = COLOR_GREEN;
                    break
                case COLOR_GREEN:
                    color = COLOR_RED;
                    break
            }

            this.setState({
                currentColor: color
            })
        }, 2000)
    }

    render() {
        const {currentColor} = this.state;

        return (
            <div className="traffic-light">
                <div className={'bulb red ' + (currentColor === COLOR_RED ? 'active' : '')}></div>
                <div className={'bulb yellow ' + (currentColor === COLOR_YELLOW ? 'active' : '')}></div>
                <div className={'bulb green ' + (currentColor === COLOR_GREEN ? 'active' : '')}></div>
            </div>
        );
    }
}

export default TrafficLight;