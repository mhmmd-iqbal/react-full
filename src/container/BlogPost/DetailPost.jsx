import Axios from 'axios';
import React, { Component, Fragment } from 'react';

class DetailPost extends Component
{
    state = {
        post: {
            title: '',
            body: ''
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        Axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
        .then((res) => {
            console.log(res.data)
            this.setState({
                post: {
                    title: res.data.title,
                    body: res.data.body,
                }
            })
        })
    }
    backButton = () => {
        this.props.history.push('/dua')
    }
    render(){
        console.log(this.props)
        return (
            <Fragment>
                <button onClick={this.backButton}>Kembali</button>
                <p>Detail Post</p>
                <h4>{this.state.post.title} </h4>
                <div>
                    {this.state.post.body}
                </div>
            </Fragment>
        )
    }
}

export default DetailPost