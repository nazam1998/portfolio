import React, { useEffect, useState } from 'react';
import Logo from '../images/logo.png'
import LogoSticky from '../images/logo_sticky.png'
const Nav = () => {

    const [navEtat, setNavEtat] = useState('bg-transparent ');
    const [currentLogo, setCurrentLogo] = useState(Logo);

    const change = () => {

        if (window.scrollY > 450) {

            setNavEtat('sticky');
            setCurrentLogo(LogoSticky);

        } else if (window.scrollY > 330 && window.scrollY <= 450) {

            setNavEtat('middle')

        }

        else {

            setNavEtat('bg-transparent');
            setCurrentLogo(Logo);

        }
    }

    useEffect(
        window.onscroll = change
    );

    return (

        <nav className={"navbar navbar-expand-lg navbar-light mx-auto "} id={navEtat}>
            <img onClick={() =>window.location.href = '#'} src={currentLogo} alt="" className='img-fluid w-25 col-lg-1 col-md-1' id="img-brand" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav offset-lg-3 col-lg-6 text-center">

                    <a className="col-lg col nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
                    <a className="col-lg col nav-item nav-link" href="#section1">Services</a>
                    <a className="col-lg col nav-item nav-link" href="#section2">Projects</a>
                    <a className="col-lg col nav-item nav-link" href="#section3">About</a>
                    <a className="col-lg col nav-item nav-link" href="#section4">Studies</a>
                    <a className='btn text-white w-50 col-lg-2 col-4 offset-lg-2 my-2 rounded-0 text-center' href="#section5">Contact me</a>
                </div>
            </div>
        </nav>
    )

};

export default Nav
