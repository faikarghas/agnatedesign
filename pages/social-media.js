import React, { Component } from 'react'
import HeaderLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'



export default class socialMedia extends Component {

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
                                    <p className="service__wrapper_label">Social Media Workflow</p>
                                    <div className="service__img">
                                        <img src="images/compound-service.png" alt="flowimg" width="100%"/>
                                    </div>
                                    <div className="service__text">
                                        <div className='service__col-1'>
                                            <h2>Social Media <br/>.</h2>
                                        </div>
                                        <div className='service__col-2'>
                                            <p className="bd-bt">Social Media has proven in recent years to be one of the main anchors of business generators. As we move to a more digitalized and virtual era, visual communication is one of the most powerful tools to approach the brand audience as it is the most efficient way to communicate something, how amazing it is to talk withought even saying a word.</p>
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
