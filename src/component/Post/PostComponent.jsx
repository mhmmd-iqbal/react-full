import React from 'react';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import './PostComponent.css'

const PostComponent = (props) => {
    return (
        <div className="col-3 mb-2">
            <Card className="p-2">
                <div className="img-thumb">
                    <img src="" alt=""/>
                </div>
                <a className="tittle" onClick={() => props.postDetail(props.data.id)} >{props.data.title}</a>
                <p className="desc">{props.data.body}</p>
                <Button className="m-2 p-2" onClick={() => props.remove(props.data.id)}>Remove</Button>
            </Card>
        </div>
    )
}

export default PostComponent