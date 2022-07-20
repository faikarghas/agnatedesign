import React, { Component } from 'react'
import HeaderLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'



export default class graphicdesign extends Component {

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
                                    <p className="service__wrapper_label">Graphic Design Workflow</p>
                                    <div className="service__img">
                                        <img src="images/graphic-design-service.png" alt="flowimg" width="100%"/>
                                    </div>
                                    <div className="service__text">
                                        <div className='service__col-1'>
                                            <h2>Graphic Design <br/>.</h2>
                                        </div>
                                        <div className='service__col-2'>
                                            <p className="bd-bt">Graphic Design itself generally means the art or skill of combining text and pictures, practically using mixed media mostly digital mediums for design with means to communicate something through visuals. In every project we try to represent the brand visually, as without having to explain what the brand is to the consumers, they will have a unique-personal understanding of the brand itself.</p>
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
