import React from 'react';
// import Bg from '../images/bg.webp';
import Bg from '../images/about2_new.jpg';
import Square from '../images/square-dotted.png';
import Skills from './Skills';
const Section3 = () => {

    return (

        <div id='section3' className=''>
            <div className="container mx-auto" id='about-me'>

                <div className="row align-items-center">
                    <div className="offset-lg-2 col-lg-4 my-5">
                        <span>About</span>
                        <h2>About me</h2>
                        <p className='my-4'>A young talent who likes taking part in many projects and whose hobby is coding and daydreaming.</p>
                        {window.screen.width >= 800 && <button className="btn rounded-0 px-4 py-2" onClick={() => { window.open('/cv/Nazam Muhammad AWS Solution Architect CV.pdf',"_blank") }} ><i className="fa fa-download"></i> Download CV</button>}
                    </div>

                    <div className="col-lg-5">
                        {window.screen.width > 1000 && <img src={Square} alt="" id='dotted' />}
                        <img src={Bg} alt="" className='img-fluid w-100 about-img' />
                    </div>
                    {window.screen.width < 800 && <button className="btn rounded-0 px-4 py-2 my-5 mx-auto" onClick={() => { window.open('/cv/Nazam Muhammad AWS Solution Architect CV.pdf',"_blank") }} ><i className="fa fa-download"></i> Download CV</button>}
                </div>
            </div>
            <div className="container">

                <div className="row my-5" id='skills'>
                    <Skills nom='HTML' points={90} color='orange' />
                    <Skills nom='Javascript' points={80} color='yellow' />
                    <Skills nom='CSS' points={75} color='blue' />
                    <Skills nom='React' points={60} color='blue' />
                    <Skills nom='Python' points={50} color='darkblue' />
                    <Skills nom='Java' points={50} color='orange' />
                    <Skills nom='Laravel' points={45} color='yellow' />
                    <Skills nom='SQL' points={35} color='green' />
                    <Skills nom='Bash' points={25} color='black' />
                    <Skills nom='C#' points={15} color='violet' />
                </div>
            </div>
        </div>

    )

};

export default Section3
