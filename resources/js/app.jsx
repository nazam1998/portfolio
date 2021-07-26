import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Certification from './components/Certification';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from './components/Footer';

const App = () => {
        return (

            <div id='main'>

                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Certification/>
                <Section4 />
                <Section5 />
                <Footer />
            </div>

        )

};
export default App;
