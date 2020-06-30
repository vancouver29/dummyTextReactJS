import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paragraphs: 5,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({ paragraphs: ev.target.value });
    }

    render() {
        return ( <
            div id = "dummy-container" >
            <
            h1 > Dummy Text Generator < /h1> <
            div id = "dummy-text-result" > < /div> <
            div id = "dummy-text-control" >
            <
            h2 > Real time Options: < /h2> <
            p > Paragraphs: < /p> <
            p >
            <
            input type = "number"
            value = { this.state.paragraphs }
            onChange = { this.handleChange }
            /> <
            /p> <
            /div> <
            /div>
        );
    }
}