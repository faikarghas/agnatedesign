import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'

import {sanityClient} from '../sanity'

import HeaderLayout from '../components/layout'
import ListItem from '../components/presentational/listBox/index'


function architecture ({properties}) {
    return (
        <React.Fragment>
        <HeaderLayout height="120px" color="#f2f2f2" navColor="#303030" />
        <main page="services">
            <section className="header">
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
            </section>
            <section className="galleries">
                {properties.map((item,i)=>{
                    return(
                        <ListItem key={i} title={item.title} category={item.category} width={100} height={320} image={item.image} link={item.slug.current}></ListItem>
                    )
                })}
            </section>
        </main>
    </React.Fragment>
    )
}

export async function getServerSideProps(context) {
    const query = '*[_type == "property" && category == "architecture" ] | order(_createdAt desc)'
    const properties = await sanityClient.fetch(query)

    if(!properties){
        return {
            props:{
                properties:[]
            }
        }
    } else {
        return{
            props:{
                properties
            }
        }
    }
}

export default architecture

