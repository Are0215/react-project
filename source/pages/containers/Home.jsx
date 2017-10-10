import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <section name="Home" >
                <h1>Home</h1>
                <Link to="/post"> Go to Post</Link>
            </section>
        );
    }
}
export default Home;