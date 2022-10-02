import React, { useEffect } from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Link from 'next/link'
import {sanityClient,urlFor} from '../../sanity'
import {capitalizeFirstLetter} from '../../helpers/capitalizeFirstLetter'
import {dateFormat} from '../../helpers/date/index.js'

import HeaderLayout from '../../components/layout'
import ListItem from '../../components/presentational/listBox/index'

function project({properties}) {
    return (
        <React.Fragment>
            <HeaderLayout color="#f9eedc"/>
            <main page="project-detail">
                <div className="section_first-project">
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className="ai-ends">
                                <div className="title">
                                    <Row>
                                        <Col xs={12} className="d-flex">
                                            <p className='mr-4'>{dateFormat(properties[0].releaseDate)}</p>
                                            <h2>{properties[0].title}<br/>{capitalizeFirstLetter(properties[0].category)}<br/>.</h2>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="desc">
                                    <ul className='cont'>
                                        <li><p>Contributors</p></li>
                                        <li>
                                            {properties[0].contributors && properties[0].contributors.map((item,key)=>{
                                                return <p>{item}</p>
                                            })}
                                        </li>
                                    </ul>
                                    <ul className='coll'>
                                        <li><p>Collaborators</p></li>
                                        <li>
                                            {properties[0].collaborators && properties[0].collaborators.map((item,key)=>{
                                                return <p>{item}</p>
                                            })}
                                        </li>
                                    </ul>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <p className='description'>{properties[0].description}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section_second-project">
                    <Container>
                        <Row>
                            <Col xs={12} md={12} className="">
                                <img src={urlFor(properties[0].image)} width="100%"/>
                            </Col>
                            {properties[0].images?.map((item,i)=>{
                                return(
                                <Col xs={12} md={12} key={i} >
                                    <img src={urlFor(item.asset)} width="100%"/>
                                </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </div>
                <div className="section_third-project">
                    <Container>
                        <Row>
                            {/* <Col xs={12} md={6} className=""></Col> */}
                            {/* <Col xs={12} md={6} className="desc-2">
                                <p>To complement the perfection of El Chino’s well- balanced menu, the<br/>restaurant has collaborated with Jakarta’s brewing professional, Publichood Cofee<br/>shop to create a divine ambiance for visionary salarymen as to support a<br/>better working environment. With a combination of two of Jakarta’s nest, El<br/>Chino may as well have become one of the go to places in Indonesia’s city of<br/>prosperous dreams.</p>
                            </Col> */}
                            <Col xs={12} className="nav-project">
                                <ul>
                                    {/* <li><a>Next</a></li> */}
                                    <li><Link href="/"><a>Home</a></Link></li>
                                    <li><Link href={`/${properties[0].category.toLowerCase()}`}><a>{capitalizeFirstLetter(properties[0].category)}</a></Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <section className="galleries">
                    {properties[0].images?.map((item,i)=>{
                        return(
                         <ListItem key={i} title={false} category={properties[0].category} width={100} height={320} image={item.asset} link={''}></ListItem>
                        )
                    })}
                </section> */}
            </main>
        </React.Fragment>
    )
}



export async function getServerSideProps(context) {
    const slug = context.query.slug
    const query = `*[slug.current == "${slug}"]`
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


export default project