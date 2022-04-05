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
                        {window.screen.width >= 800 && <button className="btn rounded-0 px-4 py-2" onClick={() => { window.open('/cv/Nazam Muhammad CV Full Stack Developer.pdf',"_blank") }} ><i className="fa fa-download"></i> Download CV</button>}
                    </div>

                    <div className="col-lg-5">
                        {window.screen.width > 1000 && <img src={Square} alt="" id='dotted' />}
                        <img src={Bg} alt="" className='img-fluid w-100 about-img' />
                    </div>
                    {window.screen.width < 800 && <button className="btn rounded-0 px-4 py-2 my-5 mx-auto" onClick={() => { window.open('/cv/Nazam Muhammad CV Full Stack Developer.pdf',"_blank") }} ><i className="fa fa-download"></i> Download CV</button>}
                </div>
            </div>
            <div className="container text-center mt-5">
        <h1 className="mt-5">Skills</h1>
                <div className="row my-5" id='skills'>
                    <Skills nom='HTML' icon="fab fa-html5" points={90} color='orange' />
                    <Skills nom='CSS' icon="fab fa-css3-alt" points={75} color='#27a4d8' />
                    <Skills nom='Javascript' icon="fab fa-js" points={80} color='#efd81d' />
                    <Skills nom='React' icon="fab fa-react" points={60} color='#5ed3f3' />
                    <Skills nom='VueJS' icon="fab fa-vuejs" points={80} color='#3fb27f' />
                    <Skills nom='Python' icon="fab fa-python" points={50} color='darkblue' />
                    <Skills nom='Laravel' icon="fab fa-laravel" points={70} color='orange' />
                    <Skills nom='PHP' icon="fab fa-php" points={50} color='#7377ad' />
                    <Skills nom='SQL' icon="fas fa-database" points={35} color='grey' />
                    <Skills nom='Bash' icon="fas fa-hashtag" points={25} color='black' />
                </div>
            </div>
        </div>

    )

};

export default Section3
