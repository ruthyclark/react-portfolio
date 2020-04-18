import React, { Component } from 'react';
import { Button, Label, Col, Form, FormGroup, Input } from 'reactstrap';

class Contact extends Component {
     
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            touched: {
                name: false,
                email: false,
                message: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();

    };

    render() {
        return(
            <div className="row row-content">
                <div className="col-12">
                    <h2> Contact Me</h2>
                </div>
                <div className="col-md-10">
                    <h4> Hiring for a Front-End role? Have a question? </h4>
                    <h4> Please feel free reach out! </h4>
                    <Form onSubmit={ this.handleSubmit }> 
                        <FormGroup row>
                            <Label htmlFor="name" md={2}> Your Name </Label>
                                <Col md={10}>
                                    <Input type="text" id="name" name="name"
                                        placeholder="Your Full Name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                    />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Your Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}>
                                    </Input>
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Send Message
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Contact;
