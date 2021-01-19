import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QuoteBox } from "./components/QuoteBox";

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

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div id="app">
            <QuoteBox quotes={quotes} />
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));