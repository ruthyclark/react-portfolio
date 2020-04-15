import React from "react";

function About(){
    return(
        <div className="container main">
            <h2 className="page-title"> About me </h2>
            <div className="about-container">
                <div className="image">
                    <img src={require("../images/my_pic1.png")} alt="Ruth" className="selfie circular--square" />
                </div>
                <div className="about-paragraph">
                    <h4>Lorem Ipsum</h4>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                </div>
            </div>
        </div>
    );
}

export default About;