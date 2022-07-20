import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Link from 'next/link'
import { Tween, Timeline,PlayState } from 'react-gsap';

import {sanityClient} from '../sanity'
import Slider from "react-slick";

import HeaderLayout from '../components/layout'
import ListItem from '../components/presentational/listBox/index'


function index({properties}) {
    const [trans,setTrans] = useState()
    const [bannerAnimePlay,setBannerAnimePlay] = useState()

    const borderRef = React.useRef(null);

    const beforeChange = (prev, next) => {
        setBannerAnimePlay(PlayState.stop)
    }
    const afterChange = (index ) => {
        setBannerAnimePlay(PlayState.play)
    };

    useEffect(() => {

    }, [bannerAnimePlay])


    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        beforeChange,
        afterChange,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnFocus: false,
        pauseOnHover: false,
        adaptiveHeight: true

    };


    return (
        <React.Fragment>
            <div style={{backgroundColor:'#231f20'}}>
                <div className='header_home'>
                <HeaderLayout height="100vh" color="#231f20">
                    <section className="section_header-home">
                        <Slider {...settings}>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>
                                                    Creative Space
                                                </h2>
                                                <p>March 2017 | Compound Service</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/Creative_Space_180723_0008_FIX.jpg" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p>Creative space was one of the pilot projects that we’ve done to introduce the collaboration work between Architects and Graphic Designers. We stuck on a basic module where the main concept was to introduce space and develop it to be space of interactions. </p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>Elbow Box</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>Jagad Rewang</p></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>Jagad Rewang</h2>
                                                <p>November 2019 | Architecture, Graphic Design</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/CBF_1edit.jpg" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p>Jagad Rewang, meaning reversed world is located to the south axis of Borobudur temple, the positioning of the site was viral to extend continuity between Borobudur and the tourism center as an analogy of the continuity of life and death. There are three main concepts of the building itself; Adaptation-Transformation, Ngajeni and Pangursipan Andhap.</p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>Creative Space</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>El Chino</p></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>El Chino</h2>
                                                <p>December 2017 | Graphic Design</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/220102_ElChino_Banner-08.png" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p>El Chino is an asian-spanish fusion restaurant located in 18 Office Park Simatupang. In the middle of the hustle & bustle of the office central, El Chino provides food that visually represents the “Matador” country with the taste of the familiar asian local cuisine.</p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>Jagad Rewang</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>Rumah Baskara</p></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>Rumah Baskara</h2>
                                                <p>December 2021 | Architecture, Interior design, Construction</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/rumah-baskara.jpg" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p>Originally designed by Andra Matin, the owner of the house wanted to personalize the interior to make it more "his own" and reflect his character of himself which he described as gender-neutral, quirky, and eclectic which we represented by combining the vibrant yet down tone contrast colors in each area, using our composition of 15/25/25/35.</p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>El Chino</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>Mindtera</p></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>Mindtera</h2>
                                                <p>Oktober 2021 | Social Media</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/210903_Mindtera_Kelola_Ekspektasimu-01.png" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p></p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>Rumah Baskara</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>Ooma</p></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>Oooma</h2>
                                                <p>November 2021 | Architecture, Construction,<br/>Graphic Design, Social Media</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/220117ooma_Banner-07.png" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p>Ooma is a memorable little restaurant that is very approachable. Enjoying a meal regardless of dress style or social rank is the owner's goal. The food served is thick with Asian flavors. Not only that, Ooma also thought about nutritional balance, such as roast pork combined with savory and crunchy pak coi vegetables.</p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>Mindtera</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>Bico House</p></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>Bico House</h2>
                                                <p>January 2020 | Architecture, Graphic Design</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/200825_Bico_House_Facade_2.jpg" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p>Organised by Mitra10 the design competition aimed to resolve the understanding of the meaning “Contemporary House”. We tackled the issue by understanding that what is contemporary about a house is the time context of issues surrounding it. Minimal land use, high tension in material price and climate change were some of the biggest contemporary issues that were major in this context of time.</p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>Ooma</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>Kopi Cuan</p></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>Kopi Cuan</h2>
                                                <p>April 2020 | Graphic Design</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/220111_Kopi_Cuan_Banner-15.png" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p>Cuan is a Indonesian slang word which means good luck. Kopi Cuan has been around since 2017 in Jakarta, as a coffee stall that serves coffee that can be drunk by anyone because it is made for the general taste, not too hard on caffeine so it would be acceptable even for people who don't like to drink coffee.</p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>Ooma</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>Kopi Cuan</p></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>Bersenyawa Coffee</h2>
                                                <p>September 2019 | Architecture, Construction</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/2nd_Post_-_1.png" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p>Working with Architect Janitra Satriani again, Bersenyawa Coffee was reconstructed from a two story building into a 3 story building with a mezzanine area on the thor floor. One of the most challenging objectives of the project was the full skylight roof. </p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>Kopi Cuan</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>Elbow Box</p></Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='w-100 list-slider position-relative'>
                                <div className='left-title'>
                                    <Timeline
                                        target={
                                            <div className='d-flex flex-direction-columns'>
                                                <h2>Elbow Box</h2>
                                                <p>July 2019 | Social Media</p>
                                            </div>
                                        }
                                    >
                                        <Tween playState={bannerAnimePlay} from={{y:'50px',opacity:0}} to={{ y: '0',opacity:1}} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className='d-flex justify-content-center position-relative banner-container'>
                                    {/* <Link href="/project/[slug]" as="/project/elchino"> */}
                                        <a className="header-ct">
                                            <Timeline
                                                target={
                                                    <img className='banner' src="/images/191115_Elbow_Box_Feed_Kick_Boxing_.jpg" alt="elchino" width="100%" style={{WebkitTransform:`translate(0,${-trans}px)`,msTransform:`translate(0,${-trans}px)`,transform:`translate(0,${-trans}px)`}}/>
                                                }
                                            >
                                                <Tween from={{y:'-50px',opacity:0}} to={{ y: '0',opacity: 1 }} delay={.5}/>
                                            </Timeline>

                                        </a>
                                    {/* </Link> */}
                                </div>
                                <div className="right-desc">
                                    <Timeline
                                            target={
                                                <p></p>
                                            }
                                        >
                                        <Tween playState={bannerAnimePlay} from={{x:'50px'}} to={{ x: '0' }} delay={.5} />
                                    </Timeline>
                                </div>
                                <div className="border-center">
                                    <Row>
                                        <Col xs={2} md={1} className="centerThis"><p>8ersenyawa</p></Col>
                                        <Col xs={8} md={10} className="centerThis">
                                            <Timeline
                                                target={
                                                    <div className="bd"></div>
                                                }
                                                duration={2}
                                            >
                                                    <Tween playState={bannerAnimePlay} ref={borderRef} from={{css:{width:'0'}}} to={{css:{width:'100%'}}} delay={.7} />
                                            </Timeline>
                                        </Col>
                                        <Col xs={2} md={1} className="centerThis"><p>Creative Space</p></Col>
                                    </Row>
                                </div>
                            </div>
                        </Slider>
                    </section>
                </HeaderLayout>
                </div>
                <div className='header_sosmed'>
                    <ul>
                        <li><a>hi@agnatedesign.com</a></li>
                        <li><a>@agnate.social</a></li>
                        <li><a>@agnate.design</a></li>
                    </ul>
                </div>
            </div>
            <main page="home">
                <section className="section__first">
                    {properties.map((item,i)=>{
                        return(
                            <ListItem key={i} title={item.title} subTitle={item.type} width={item.width} height={item.height} image={item.image} link={item.slug.current}></ListItem>
                        )
                    })}
                </section>
            </main>
        </React.Fragment>
    )
}

export async function getServerSideProps(context) {
    const query = '*[_type == "property"] | order(_createdAt desc)'
    const properties = await sanityClient.fetch(query)

    console.log(properties);


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

export default index
