import React, { useState, useEffect } from 'react';

const Section4 = () => {

    const [left, setLeft] = useState(-500);

    const moveNext = () => {
        if (left < 0) {

            setLeft(left + 100);

        } else {

            setLeft(-500);

        }
    }

    const movePrev = () => {
        if (left >= -400) {

            setLeft(left - 100);

        } else {

            setLeft(0);

        }
    }

    useEffect(() => {

        const id = setTimeout(() => {
            if (left >= -400) {

                setLeft(left - 100);

            } else {

                setLeft(0);

            }
        }, 5000);
        return () => clearTimeout(id);
    })

    return (

        <div id='section4' className="pt-5">
            <div className="carousel mx-auto text-center">
                <div className="row flex-nowrap mx-auto" style={{ left: `${left}%` }}>

                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>Septembre 2016</h4>
                        <p>CESS degree at Athénée Bracops Lambert (now Joseph Bracops)</p>
                        <p>Economics option</p>
                    </div>

                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>2016-2017</h4>
                        <p>Bachelor degree at HE2B ESI</p>
                        <p>Industrial computing</p>
                    </div>
                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>2017-2019</h4>
                        <p>Bachelor degree at EPHEC</p>
                        <p>Management computing</p>
                    </div>
                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>2019-2020</h4>
                        <p>Training at Molengeek and internship</p>
                        <p>Coding School 10</p>
                        <span>6-month hard-training as a full-stack web developer</span><br/>
                        <span>Worked on two projects (an event platform and a wordpress non-profit organization website)</span>
                    </div>
                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>2020-2021</h4>
                        <p>Training at Molengeek</p>
                        <p>AWS re/Start Program (Cloud Engineering)</p>
                        <span>3-month hard-training as a cloud practioner and got certified</span><br/>
                        <span>Got another as a AWS Solution Architect</span>
                    </div>
                    <div className="carousel-content col-12">
                        <h4 className='text-danger'>2021-2022</h4>
                        <p>Advanced Training at Molengeek</p>
                        <p>Level Up School</p>
                        <span>3-month hard-training as a full-stack web developer in Laravel and VueJS</span><br/>
                        <span>Worked on many projects, including an inventory management system</span>
                    </div>
                </div>
                {window.screen.width > 800 && <div><i onClick={moveNext} className="fas fa-arrow-left  fa-2x text-white" id='left'></i>
                    <i onClick={movePrev} className="fas fa-arrow-right fa-2x text-white" id='right'></i></div>}
            </div>
        </div>

    )
};

export default Section4;
