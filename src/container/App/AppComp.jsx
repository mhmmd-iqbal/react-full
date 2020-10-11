import React, { Component, Fragment } from 'react';
import Youtube from '../Youtube/Youtube';
import RouteComp from './RouteComp';

class AppComp extends Component{
    render(){
        return(
            <Fragment>
                Halaman Navigasi
                <RouteComp></RouteComp>
            </Fragment>
        )
    }
}

export default AppComp;