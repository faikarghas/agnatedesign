import React, { Component } from 'react'
import HeaderLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'



export default class compoundService extends Component {

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
                                    <p className="service__wrapper_label">Compound Service Workflow</p>
                                    <div className="service__img">
                                        <img src="images/compound-service.png" alt="flowimg" width="100%"/>
                                    </div>
                                    <div className="service__text">
                                        <div className='service__col-1'>
                                            <h2>Compound Service <br/>.</h2>
                                        </div>
                                        <div className='service__col-2'>
                                            <p className="bd-bt">The Compound Service that we provide an expanded yet unified design-based module, Agnate aims to provide simplicity to business design needs, creating an ultimate one-stop design service for your business. We strongly recommend this method as means to ease and create a more compact way of creating your brand and achieving success for your project.</p>
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
