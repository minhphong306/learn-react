import React, {Component} from 'react';
import Item from './components/item'
import './App.css';

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
            </div>
        );
    }
}

export default App;