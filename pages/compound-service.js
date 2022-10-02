import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap'

import {sanityClient} from '../sanity'

import HeaderLayout from '../components/layout'
import ListItem from '../components/presentational/listBox/index'


function compoundService ({properties}) {
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
    const query = '*[_type == "property" && category == "compound" ] | order(_createdAt desc)'
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

export default compoundService