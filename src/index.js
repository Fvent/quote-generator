import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div id="app">
            <QuoteBox />
        </div>);
    }
}

var quotes = [
    {text: "Do, or Do Not", author: "Yoda"},
    {text: "All I see is fear, and dead men", author: "Darth Vader"},
    {text: "Hello There", author: "Obi-Wan Kenobi"},
    {text: "This is the way", author: "Mando / Ugandan Knuckles"},
    {text: "I am the Senate", author: "Sheev Palpatime"},
    {text: "I always shoot first", author: "Han Solo"},
    {text: "Twice the pride, double the fall", author: "Count Dooku"},
    {text: "It's a trap", author: "Admr. Ackbar"},
    {text: "You may fire when ready", author: "Grand Moff Tarkin"}
]

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: Math.ceil(Math.random() * ((quotes.length-1) - 0))
        }
        this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    handleNewQuote(){         
        this.setState({
            index: Math.ceil(Math.random() * ((quotes.length-1) - 0))
        });
    }

    render(){
        return (<div id="quote-box">
            <h1>QuoteBox</h1>
            
            <p id="text">{quotes[this.state.index].text}</p>
            <h5 id="author">-{quotes[this.state.index].author}</h5>
            <button id="new-quote" onClick={this.handleNewQuote}>Another One</button>

            <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet this Quote</a>
        </div>);
    }

}

ReactDOM.render(<App />, document.getElementById('root'));