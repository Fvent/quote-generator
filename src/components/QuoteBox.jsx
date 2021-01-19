import React from "react";

export class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: Math.ceil(Math.random() * ((this.props.quotes.length-1) - 0))
        }
        this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    handleNewQuote(){         
        this.setState({
            index: Math.ceil(Math.random() * ((this.props.quotes.length-1) - 0))
        });
    }

    render(){
        return (<div id="quote-box">
            <h1>QuoteBox</h1>
            
            <p id="text">{this.props.quotes[this.state.index].text}</p>
            <h5 id="author">-{this.props.quotes[this.state.index].author}</h5>
            <button id="new-quote" onClick={this.handleNewQuote}>Another One</button>

            <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet this Quote</a>
        </div>);
    }

}