import React, { Component } from 'react'
import HeaderLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'



export default class architecture extends Component {

    render() {
        return (
            <React.Fragment>
            <HeaderLayout height="120px" color="#f2f2f2" navColor="#303030" />
            <main page="services">
                <img className='bg-image' src='images/bg-web-agnate.png' width="100%" height="100%" />
                <div className=" w-100">
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className="service__wrapper">
                                    <p className="service__wrapper_label">Architecture Workflow</p>
                                    <div className="service__img">
                                        <img src="images/architecture-service.png" alt="flowimg" width="100%"/>
                                    </div>
                                    <div className="service__text">
                                        <div className='service__col-1'>
                                            <h2>Architecture <br/>.</h2>
                                        </div>
                                        <div className='service__col-2'>
                                            <p className="bd-bt">Architecture has a more sophisticated meaning than what people generally understand. Architecture itself is a principle of design that combines art and logic. This combined method is used to expand or limit human activity through space using logic and stimulate the emotions using esthetics. The general idea is that architecture is a space made to function in a certain way.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
        </React.Fragment>
        )
    }
}
