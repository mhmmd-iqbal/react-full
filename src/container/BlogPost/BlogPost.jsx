import Axios from 'axios';
import React, { Component, Fragment } from 'react';
import { FormGroup } from 'react-bootstrap';
import PostComponent from '../../component/Post/PostComponent';

class BlogPost extends Component{
    state = {
        post: []
    }

    getPostApi = () => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res.data)
            this.setState({
                post: res.data
            })
        })
    }
    componentDidMount(){
        this.getPostApi()
    }

    handleRemove = (data) => {
        console.log(data)
        Axios.delete('https://jsonplaceholder.typicode.com/posts/'+data)
        .then((res) => {
            console.log(res)
            this.getPostApi()
        })
    }

    handleDetail = (id) => {
        console.log(id)
        this.props.history.push('/detail/'+id)
    }
    
    inputHandle = (event) => {
        console.log(event.target.value)
        let name = event.target.name
        let value = event.target.value
    }

    render(){
        return(
            <Fragment>
                <p>Blog Post</p>
                <FormGroup className="col-4">
                    <input type="text" name="title" className="form-control" onChange={this.inputHandle}/>
                    <textarea name="desc" className="form-control" onChange={this.inputHandle} id="" cols="2" rows="2"></textarea>
                </FormGroup>
                <div className="row">
                    {
                        this.state.post.map(post => {
                            return <PostComponent key={post.id} data={post} remove={this.handleRemove} postDetail={this.handleDetail} />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default BlogPost