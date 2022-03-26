import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Circle from '../images/circle.png';
import Computer from '../images/computer.jpg';
import Square from '../images/square-dotted.png';

const Header = () => {
    const [i, setI] = useState(0);
    const [letter, setLetter] = useState([
        { char: "N", show: 'none' },
        { char: "a", show: 'none' },
        { char: "z", show: 'none' },
        { char: "a", show: 'none' },
        { char: "m", show: 'none' }
    ]);

    useEffect(() => {
        setTimeout(() => {

            let temp = [...letter];

            temp[i].show = 'show';

            setI((i + 1) % letter.length);

            setLetter(temp);
        }, 300);
    }, [i, letter]);

    return (

        <header id='header'>
            <Nav />
            {window.screen.width>1000&&<img src={Computer} alt="" id='computer' />}
            <img src={Circle} alt="" id='circle' />
            <img src={Square} alt="" id='square' />

            <h1 className='text-center my-5 text-white' id='me'>

                Hello ! This is {letter.map((e, i) => (e.show !== 'none' && <span key={i}>{e.char}</span>))}
                <span className='blink'>|</span>
                <p className='text-center text-white' id='trait'>Web Developper - Cloud Engineer</p>
            </h1>
            {window.screen.width > 560 && <div id="social-head" className='text-white'>
                <a className='text-white' href="https://www.linkedin.com/in/nazam-muhammad-872a0019b/"><i className="fab fa-linkedin"></i></a>
                <a className='text-white' href="https://github.com/nazam1998"><i className="fab fa-github"></i></a>
                <a className='text-white' href="https://www.instagram.com/nazam.webdev/"><i className="fab fa-instagram"></i></a>
            </div>}


        </header>
    )
};
export default Header
