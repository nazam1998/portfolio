import React from 'react';
import Bootstrap from '../images/site_bootstrap.png';
import Emporium from '../images/site-emporium.png';
import Code_wizard from '../images/Code_wizard.png';
import AlForqane from '../images/markaz-al-forqane.png';
import Crownfunding from '../images/crownfunding.png';
const Section2 = () => {

    return (
        <div id='section2' className='text-center text-white'>

            <div className='my-5 p-5' id='section-dark-bg'>
                <span>Portfolios</span>
                <h1 className='mt-1 mx-auto'>Some of my awesome<br /> stuffs here</h1>
            </div>
            <div className="container" id='image-area'>

                <div className='row mx-auto text-center justify-content-center'>

                    <div className="image-pro col-lg-5 col-12 my-3"><img src={Crownfunding} alt="" className="img-fluid" />
                    <div className="description p-4">
                    <p>Training Project</p>
                    <p>crownfunding platform with pledge system</p>
                    <p>Tech used: Vuejs, Bootstrap-Vue</p>
                    </div>
                    </div>
                    <div className="image-pro col-lg-5 col-12 my-3"><img src={AlForqane} alt="" className="img-fluid" />
                        <div className="description p-4">
                            <p>Project for a Non Profit Organization</p>
                            <p>Blog with newsletter system and subscription and contact form</p>
                            <p>Tech used: Wordpress</p>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="image-pro col-lg-5 col-12 my-3"><img src={Bootstrap} alt="" className="img-fluid" />
                        <div className="description p-4">
                            <p>Training Project</p>
                            <p>Landing Page which challenge was to finish it in 3 days without using any frontend framework.</p>
                            <p>Tech used: HTML, CSS</p>
                        </div>
                    </div>
                    <div className="image-pro col-lg-5 col-12 my-3"><img src={Emporium} alt="" className="img-fluid" />
                        <div className="description p-4">
                            <p>Training Project</p>
                            <p>Landing page with a carousel done with vanilla js</p>
                            <p>Tech used: HTML, CSS, Javascript, Bootstrap</p>
                        </div>
                    </div>
                    <div className="image-pro col-lg-5 col-12 my-3"><img src={Code_wizard} alt="" className="img-fluid" />
                        <div className="description p-4">
                        <p>Internship project</p>
                        <p>Platform where you can register to a training and where you can manage your profil. The biggest challenge was to make a role management system, where you could dynamically assign permissions to a role</p>
                        <p>Tech used: HTML, CSS, Javascript, PHP(Laravel), Boostrap</p>
                        </div>
                    </div>

                </div>
                {/* <button className='btn my-5 rounded-0 px-4 py-2'>More Folio</button> */}
            </div>

        </div>
    )
};
export default Section2
