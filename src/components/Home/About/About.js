import React, { useEffect } from 'react';
import img from '../../../img/protfolio2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'


import './About.css'

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <div data-aos='fade-right' className='text-white container mt-5 mb-5 w-100 main'>
            <h1 className='fw-bold mt-5'>About Me</h1>
            <p>-------------------------------</p>
            <div data-aos='fade-up' className=' mt-5 about-section'>
                <div data-aos='fade-right' className='me-5'>
                    <img className='images' src={img} alt="" />
                </div>
                <div data-aos='fade-left' className='text-start'>
                    <h2>I am <span className='text-info'>Al Amin</span></h2>
                    <h6>WEB DEVELOPER & PHOTOGRAPHER</h6>
                    <p className='my-4'>I am a Junior Web Developer with around 6 months of experience in Web development, React, and MYSQL database. Experience of HTML, JavaScript, React, Firebase, NodeJS, Mongodb, Cascaded Style Sheets (CSS).</p>
                    <p className='my-4'>My lofty focus and attention to detail with my substantial integrated knowledge of HTML, CSS, JavaScript React and MySQL Database makes me an exceptional choice.In my current role as a Junior Web Developer.I will developed single Page applications by React from UI to function implementation under the direction of the Senior Developer.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;