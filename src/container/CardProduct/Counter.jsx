import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        console.log(this.props)
        return(
            <div className="counter">
                {/* Pengunakan fungsi semua secara lokal */}
                <button className="minus" onClick={this.handleMinus}> - </button>
                <input type="text" value={this.state.order} readOnly />
                <button className="plus" onClick={this.handlePlus}> + </button>

                {/*  Penggunaan fungsi dengan props di global menggunakan Redux */}
                <button className="minus" onClick={this.props.handleMinus}> - </button>
                <input type="text" value={this.props.order} readOnly />
                <button className="plus" onClick={this.props.handlePlus}> + </button>
            </div>
        )
    }
}

// Memanggil state global dan rubah ke prop
// parameter dikirim dari global
const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatchEvent) => {
    return {
        handlePlus: () => dispatchEvent({type: 'PLUS_ORDER'}),
        handleMinus: () => dispatchEvent({type: 'MINUS_ORDER'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)