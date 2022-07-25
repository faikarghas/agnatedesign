import React from 'react'
import Fade from 'react-reveal/Fade'; 
import Link from 'next/link'
import {sanityClient,urlFor} from '../../../sanity'

const index = ({title,subTitle,image,width,height,link}) => {
  return (
    // <Zoom>
    <>
     <Fade>
        <div className='list_wrapper' style={{width:`${width}%`}}>
          <Link href={`/project/${link}`}>
            <a>
                <div className="list_item" >
                    <div className='img_wrapper' style={{height:`${height}px`}}>
                      <img alt="lanscape" src={urlFor(image)} width="100%" />
                    </div>
                    {title? <p className="title">{title}</p> : ''}
                    <p className="subTitle">{subTitle}</p>
                </div>
                </a>
          </Link>
        </div>
      </Fade>
    </>
  )
}

export default index