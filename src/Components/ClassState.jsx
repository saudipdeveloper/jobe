import React, { Component } from 'react';


class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            msg: 'Hello React!!',
            value: 10,
        };
    }
    

    change() {
        this.setState({
            msg: 'Hi Saudip This React Tutorials',
        });
    }

    add() {
        this.setState ({
            value: this.state.value + 5,
        });
    }

    substract() {
        this.setState({
            value: this.state.value - 5,
        });
    }

    render() {
        return (
            <section>
                <em> Sate Management through class Component</em>
                <h1>Massage is:-{this.state.msg}</h1>
                <h2>Value is:-{this.state.value}</h2>
                <button onClick={() => this.change()}>Change the massage</button>
                <button onClick={() => this.add()}>Addication</button>
                <button onClick={() => this.substract()}>Substraction</button>
            </section>
        );
    }
}

export default ClassState;