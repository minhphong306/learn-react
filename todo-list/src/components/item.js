import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default Item