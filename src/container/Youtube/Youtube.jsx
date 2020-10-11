import React, { Component, Fragment } from 'react';
import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';

class Youtube extends Component{
    render(){
        return (
            <Fragment>
                <p>Halaman</p>
                <hr/>
                <YoutubeComponent title = "Judul 1"/>
                <YoutubeComponent title = "Judul 2"/>
                <YoutubeComponent title = "Judul 3"/>
                <YoutubeComponent />
            </Fragment>
        )
    }
}

export default Youtube