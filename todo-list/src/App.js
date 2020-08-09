import React, {Component} from 'react';
import Item from './components/item'
import './App.css';
import TrafficLight from "./components/traffic-light";

class App extends Component {
    constructor() {
        super();

        this.items = ['job1', 'job2', 'job3'];
    }

    render() {
        return (
            <div className="App">
                <div>A simple TODO app</div>
                {
                    this.items.map((item, index) => <Item key={index} title={item}/>)
                }

                <div className="App">
                    <TrafficLight/>
                </div>
            </div>


        );
    }
}

export default App;