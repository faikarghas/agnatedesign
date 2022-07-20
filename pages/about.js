import React, { Component } from 'react'
import HeaderLayout from '../components/layout'
import {Container,Row,Col} from 'react-bootstrap'



export default class about extends Component {

    render() {
        return (
            <React.Fragment>
            <HeaderLayout height="120px" color="#f2f2f2" navColor="#303030" />
            <main page="about">
                <section className="section_first">
                    <Container fluid className="m-0 p-0">
                        <Row className="m-0 p-0">
                            <Col xs={12} className="m-0 p-0">
                                <div className='about_wrapper'>
                                    <div className='text_header'>
                                        <div className='text_header-title'>
                                            <h2>Brief History of Agnate<br/>.</h2>
                                        </div>
                                        <div className='text_header-desc'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium quam fuga expedita recusandae autem cupiditate harum deserunt perspiciatis sapiente cumque excepturi iusto a architecto est eveniet distinctio nulla inventore pariatur odio quidem sint, porro temporibus fugit! Alias nihil magni atque? Corporis aliquam voluptatum officia id sunt fuga numquam quaerat.</p>
                                        </div>
                                    </div>
                                    <div className='img_wrapper'>
                                        <img src="/images/img_about.png" width="100%" />
                                    </div>
                                    <div className='text_header'>
                                        <div className='text_header-title'>
                                            <h2>What is Agnate?<br/>.</h2>
                                        </div>
                                        <div className='text_header-desc'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium quam fuga expedita recusandae autem cupiditate harum deserunt perspiciatis sapiente cumque excepturi iusto a architecto est eveniet distinctio nulla inventore pariatur odio quidem sint, porro temporibus fugit! Alias nihil magni atque? Corporis aliquam voluptatum officia id sunt fuga numquam quaerat.</p>
                                        </div>
                                    </div>
                                    <div className='about__sosmed'>
                                        <ul>
                                            <li><a>hi@agnatedesign.com</a></li>
                                            <li><a>@agnate.social</a></li>
                                            <li><a>@agnate.design</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </React.Fragment>
        )
    }
}
