import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';

class Youtube extends Component{
    render(){
        return (
            <Fragment>
                <p>Halaman</p>

                <h5>Total Order : {this.props.order} </h5>
                <hr/>
                <YoutubeComponent title = "Judul 1"/>
                <YoutubeComponent title = "Judul 2"/>
                <YoutubeComponent title = "Judul 3"/>
                <YoutubeComponent />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order : state.totalOrder
    }
}

export default connect(mapStateToProps)(Youtube)