import React, { Component } from 'react';

class Home extends Component {
    render () {
        return (
            <div className="container home">
                <div className="image">
                    <img src={require("../images/pgh_landscape.jpg")} alt="Pgh" className="background" />
                </div>
            </div>
        );
    }
}

export default Home