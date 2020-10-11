import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order : 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    
    render(){ 
        return(
            <Fragment>
                <div className="header">
                    <div className="count">Order Lokal  : {this.state.order}</div>
                    <div className="count">Order Global : {this.props.order}</div>
                </div>

                <CardProduct 
                    onCounterChange = { 
                        (value) => this.handleCounterChange(value) 
                    } 
                />
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}
export default connect(mapStateToProps)(Product)