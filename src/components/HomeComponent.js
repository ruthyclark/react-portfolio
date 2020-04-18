import React, { Component } from 'react';

class Home extends Component {
    render () {
        return (
            <div className="container home">
                <img src={require("../images/pgh_landscape.jpg")} alt="Pgh" className="background img-fluid" />
                <div className="overlay"></div>
            <div className="container">
                <div className="description">
                    <h1>Hello Yinz, Welcome To Ruth's Portfolio
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>   
                    <button className="btn btn-outline-secondary btn-lg">See more</button>   
                    </h1>  
                </div>
            </div>
            </div>

        );
    }
}

export default Home