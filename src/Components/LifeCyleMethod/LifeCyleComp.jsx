import React, {Component} from "react";


class LifeCyleComp extends Component {
    constructor() {
        super(); 
            this.state = {
                count: 0,
            };
        
    }

handleClick = () => {
    this.setState({ count: this.state.count + 5});
};

render() {
    return (
        <>
        <em>This is the LifeCycle Method of class Component</em>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick} className='btn'>Update</button>
        </>
    );
}


componentWillMount() {
    alert('Component Will mount');
}

componentDidMount() {
    console.log('Component Will mount');
}

shouldComponentUpdate() {
    console.log('should Component Update ?');
    return true;
}

componentWillUpdate() {
    alert('you can Update');
}

componentWillUpdate() {
    console.log('update updated');
}

}
export default LifeCyleComp;