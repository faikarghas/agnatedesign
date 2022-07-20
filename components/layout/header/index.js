import React, { useState } from 'react';
import Link from 'next/link'
import {Container,Row,Col} from 'react-bootstrap'

const index = (props) => {
    const [open, setstate] = useState(false)

    let show = ''

    if(open === true){
         show = 'visiblee'
    } else {
         show = ''
    }

    return (
        <header style={{height:`${props.height}`,backgroundColor:`${props.color}`}}>
            <nav style={{backgroundColor:`${props.navColor}`}}>
                <Container fluid className='h-100'>
                    <Row className='h-100'>
                        <Col xs={5} md={2} className="logo-side"><Link href="/"><a><img src="/images/logo-agnate.png" width="100%"/></a></Link></Col>
                        <Col xs={7} md={10} className="right-side">
                            <ul style={{listStyle:'none'}}>
                                <li><Link href="/about"><a>About</a></Link></li>
                                <li><Link href="/compound-service"><a>Compound Service</a></Link></li>
                                <li><Link href="/architecture"><a>Architecture</a></Link></li>
                                <li><Link href="/graphic-design"><a>Graphic Design</a></Link></li>
                                <li><Link href="/social-media"><a>Social Media</a></Link></li>
                            </ul>
                        </Col>
                        <Col xs={7} md={7} className="menu-mobile">
                            <div id="nav-icon3" className={open ? 'open' : ''} onClick={() => setstate(!open)}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={`menu-popup ${show}`}>
                    <Container fluid>
                        <Row>
                            <div className='pt-5 pb-5'>
                                <Container fluid>
                                    <Row>
                                        <Col xs={5} md={5} className="logo-side"><Link href="/"><a><img src="/images/logo-agnate.png" width="100%"/></a></Link></Col>
                                        <Col xs={7} md={7} className="menu-mobile">
                                            <div id="nav-icon3" className={open ? 'open' : ''} onClick={() => setstate(!open)}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <Col xs={12}>
                                <ul style={{listStyle:'none'}}>
                                    <li><Link href="/about"><a>About</a></Link></li>
                                    <li><Link href="/compound-service"><a>Compound Service</a></Link></li>
                                    <li><Link href="/architecture"><a>Architecture</a></Link></li>
                                    <li><Link href="/graphic-design"><a>Graphic Design</a></Link></li>
                                    <li><Link href="/social-media"><a>Social Media</a></Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </nav>
            {props.children}
        </header>
    )
}

export default index
