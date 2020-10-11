import React, { Component } from 'react';

class Counter extends Component{
    state = {
        order : 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order : this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })

    }
    
    handleMinus = () => {
        this.setState({
            order : this.state.order - 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
        // handle setelah order state berubah
    }
    render(){
        return(
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}> - </button>
                <input type="text" value={this.state.order} readOnly />
                <button className="plus" onClick={this.handlePlus}> + </button>
            </div>
        )
    }
}

export default Counter