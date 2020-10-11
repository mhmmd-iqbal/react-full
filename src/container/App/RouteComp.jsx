import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BlogPost from '../BlogPost/BlogPost';
import DetailPost from '../BlogPost/DetailPost';
import LifeCirleComp from '../LifeCircleComp/LifeCircleComp';
import Product from '../Product/Product';
import Youtube from '../Youtube/Youtube';

class RouteComp extends Component
{
    render(){
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Halaman Satu</Link>
                            </li>
                            <li>
                                <Link to="/dua">Halaman Dua</Link>
                            </li>
                            <li>
                                <Link to="/tiga">Halaman Tiga</Link>
                            </li>
                            <li>
                                <Link to="/empat">Halaman Empat</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Route path="/" exact component={Youtube} />
                <Route path="/dua" component={BlogPost} />
                <Route path="/detail/:id" component={DetailPost} />
                <Route path="/tiga" component={LifeCirleComp} />
                <Route path="/empat" component={Product} />
            </Router>
        )
    }
}

export default RouteComp    