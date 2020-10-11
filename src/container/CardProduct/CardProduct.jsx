import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class CardProduct extends Component{
    // state = {
    //     order : 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order : this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order)
    //     })

    // }
    
    // handleMinus = () => {
    //     this.setState({
    //         order : this.state.order - 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order)
    //     })
    //     // handle setelah order state berubah
    // }
    
    render(){
        return(
            <div className="card">
                <div className="img-thumb">
                    <img src="" alt=""/>
                </div>
                <p className="product-tittle">Asala aal</p>
                <p className="product-price">Rp. 34.000</p>
                <Counter onCounterChange ={(value) => this.props.onCounterChange(value)} />
                {/* <div className="counter">
                    <button className="minus" onClick={this.handleMinus}> - </button>
                    <input type="text" value={this.state.order} readOnly />
                    <button className="plus" onClick={this.handlePlus}> + </button>
                </div> */}
            </div>
        )
    }
}

export default CardProduct