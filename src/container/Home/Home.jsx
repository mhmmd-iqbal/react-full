import React, { Component } from 'react';
import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';
import BlogPost from '../BlogPost/BlogPost';
import LifeCirleComp from '../LifeCircleComp/LifeCircleComp';
import Product from '../Product/Product';

class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                showComponent: false
            })
        }, 15000)
    }

    render(){
        return (
            <div>
                <p>Halaman</p>
                <hr/>
                <YoutubeComponent title = "Judul 1"/>
                <YoutubeComponent title = "Judul 2"/>
                <YoutubeComponent title = "Judul 3"/>
                <YoutubeComponent />
                <p>Counter</p>
                <hr/>
                <Product />

                <p>Life Circle Component</p>
                <hr/>
                {
                    this.state.showComponent ? <LifeCirleComp/> : null
                }
                <p>Blog Post</p>
                <hr/>
                <BlogPost/>
            </div>
        )    
    }
}

export default Home;