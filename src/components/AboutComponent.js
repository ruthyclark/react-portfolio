import React from "react";

function About(){
    return(
        <div className="container about-main">
            <div className="row">
                    <h2 className="page-title"> About me </h2>
            </div>
                <div className="col about-container">
                    <div className="image">
                        <img src={require("../images/my_pic1.png")} alt="Ruth" className="selfie image-fluid circular--square" />
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