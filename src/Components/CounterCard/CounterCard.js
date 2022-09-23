import React from "react"
import "./CounterCard.css";

class CounterCard extends React.Component{


    //Als een countercard word aangemaakt, dan voert de constructor zichzelf uit
    constructor(){
        super();
        this.state = {number: 0};
     };

     increase = () => {
        this.setState({ number: this.state.number + 1})
    }

     decrease = () => {
        this.setState({number: this.state.number - 1})
    }
render(){
    return(
       <>
        <article class="counter">
            <section class="counter__number">
                <h1  class="counter__value" id="js--number">{this.state.number}</h1>
            </section>
            <section class="counter__buttons">
                    <button onClick={this.decrease} class="counter__button counter__button--decrease">
                    Decrease
                    </button>
                <button onClick={this.increase} class="counter__button counter__button--increase">
                    Increase
                    </button>
            </section>
        </article>
        </>
    );
};
};

export default CounterCard