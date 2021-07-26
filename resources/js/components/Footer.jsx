import React from 'react';

const Footer = () => {  

    return (

        <footer>
            <div className="container p-5">
                <div className="row text-white justify-content-around text-center">
                    <div className="col-lg-4 row justify-content-around">
                        <a href="#section2" className="col-lg col-12">About</a>
                        <a href="#section1" className="col-lg col-12">Services</a>
                        <a href="#header" className="col-lg col-12">Portfolio</a>
                    </div>
                    <div className="col-lg-4 row justify-content-around align-items-center">
                        <a href="https://www.linkedin.com/in/nazam-muhammad-872a0019b/"><i className="col-lg col-6 fab fa-linkedin-in"></i></a>
                        <a href="tel:+32492801858"><i className="col-lg col-6 fas fa-phone-alt"></i></a>
                        <a href="mailto: nazamfr1998@gmail.com"><i className="col-lg col-6 fab fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>
            <hr className='separator' />
            <div className="copyright text-center text-white p-3">
                <span>Copyright ©2021 All rights reserved | This Website is made with <span id='heart'>&hearts;</span> by <a href="#">Nazam</a></span>
            </div>
        </footer>

    )

};

export default Footer
