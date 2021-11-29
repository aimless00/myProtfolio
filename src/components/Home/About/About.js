import React from 'react';
import img from '../../../img/protfolio2.jpg'
import resume from '../../../img/Junior Web Devloper Al Amins Resume.pdf';

import './About.css'

const About = () => {
    return (
        <div className='text-white container mt-5 mb-5'>
            <h1 className='fw-bold'>About Me</h1>
            <p>-------------------------------</p>
            <div className=' mt-5 about-section'>
                <div className='me-5'>
                    <img className='image' src={img} alt="" />
                </div>
                <div className='text-start'>
                    <h2>I am <span className='text-info'>Al Amin</span></h2>
                    <h6>WEB DEVELOPER & PHOTOGRAPHER</h6>
                    <p className='my-4'>I am a Junior Web Developer with around 6 months of experience in Web development, React, and MYSQL database. Experience of HTML, JavaScript, React, Firebase, NodeJS, Mongodb, Cascaded Style Sheets (CSS).</p>
                    <p className='my-4'>My lofty focus and attention to detail with my substantial integrated knowledge of HTML, CSS, JavaScript React and MySQL Database makes me an exceptional choice.In my current role as a Junior Web Developer.I will developed single Page applications by React from UI to function implementation under the direction of the Senior Developer.
                    </p>
                    <a href={resume} download><button className="btn btn-info">Download Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default About;