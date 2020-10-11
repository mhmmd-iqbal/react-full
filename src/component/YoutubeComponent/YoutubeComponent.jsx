import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="" alt=""/>
            </div>
            <p className="tittle">{props.title}</p>
            <p className="desc">desc here</p>
        </div>
    )
}
YoutubeComponent.defaultProps = {
    title: 'Default'
}

export default YoutubeComponent