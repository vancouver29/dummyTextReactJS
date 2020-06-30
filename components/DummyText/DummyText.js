import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paragraphs: 3,
            results: [],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.fetchText();
    }

    fetchText() {
        const url =
            "https://baconipsum.com/api/?type=meat-and-filler&paras=" +
            this.state.paragraphs;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ results: data });
            });
    }

    // setSate is asynchronous function, so after setState finished
    // the fetchText function can be called back
    handleChange(ev) {
        this.setState({ paragraphs: ev.target.value }, () => {
            this.fetchText();
        });
    }

    render() {
        return ( <
            div id = "dummy-container" >
            <
            div id = "dummy-text-control" >
            <
            h2 > Real time Options: < /h2> <
            p > Paragraphs: < /p> <
            p >
            <
            input min = "1"
            type = "number"
            value = { this.state.paragraphs }
            onChange = { this.handleChange }
            /> <
            /p> <
            /div> <
            h1 > Dummy Text Generator < /h1> <
            div id = "dummy-text-result" > {
                this.state.results.map((paragraphText, index) => {
                    return <p key = { index } > { paragraphText } < /p>;
                })
            } <
            /div> <
            /div>
        );
    }
}