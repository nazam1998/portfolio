import React, { useState, useEffect } from 'react';

import Graphic from '../images/graphic.svg'
import Web from '../images/web.svg'
import Mobile from '../images/mobile.svg'

const Section1 = () => {

    return (

        <div id='section1' className='text-center p-5'>
            <div className='mt-5'>
                <hr />
                <p className='mt-4'>Service provided</p>
            </div>
            <div>
                <h2> Build Website
                    <br /> & Cloud Solution</h2>
            </div>

            <div className="container-lg my-5 mx-auto slide" >
                <div className="row mx-auto">
                    <div className="col-lg p-4  mx-lg-4 my-3 service">
                        <img className='img-fluid' src={Graphic} alt="" />
                        <h4 className='my-4'>Front End Developer</h4>
                        <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser. I can also make your website responsive for every device such as mobile, tablets and laptop.</p>
                    </div>
                    <div className="col-lg p-4  mx-lg-4 my-3 service">
                        <img className='img-fluid' src={Web} alt="" />
                        <h4 className='my-4'>Back End Developer</h4>
                        <p>You already have a website but don't know how to do back-end stuff like mailing, database and requests ? I am the right person for you.</p>
                    </div>
                    <div className="col-lg p-4  mx-lg-4 my-3 service">
                        <img className='img-fluid' src={Mobile} alt="" />
                        <h4 className='my-4'>Cloud Solutions</h4>
                        <p>As a Cloud Engineer, I learned how to migrate applications to the Cloud using best practices and the best design principles. </p>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Section1
