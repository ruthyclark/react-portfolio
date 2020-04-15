import React, { Component }  from 'react';

class Footer extends Component {

    render () {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">            
                        <div className="col-6 col-sm-3 text-center">
                            <a className= "btn btn-social-icon btn-linkedin" href="https://www.linkedin.com">
                                <i className="fa fa-linkedin"></i></a>
                            <a className= "btn btn-social-icon btn-github" href="https://github.com"> 
                                <i className="fa fa-github"></i></a>
                            <a className= "btn btn-social-icon btn-facebook" href="https://www.facebook.com"> 
                                <i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com"> 
                                <i className="fa fa-instagram" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;