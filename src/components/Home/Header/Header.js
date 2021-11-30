import React from 'react';
import Typical from 'react-typical'

import './Header.css'
import resume from '../../../img/Junior Web Devloper Al Amins Resume.pdf';

const Header = () => {
    return (
        <div className='header p-5 header-section'>
            <div style={{ marginTop: '60px' }} className='container text-white header-text'>
                <h6 className='fw-bold my-5'>WELCOME TO MY WEBSITE</h6>
                <h1 className='fw-bold mb-5 me-5'>I'm
                    <Typical
                        steps={[" React Web Developer", 1800, ' Web Designer', 1500]}
                        loop={Infinity}
                        wrapper="bold"
                    />
                </h1>
                <p>
                    <a href="https://www.facebook.com/aimless00"><i className="fab fa-facebook-f mx-3"></i></a>
                    <a href="https://mobile.twitter.com/BornoIdlam"><i className="fab fa-twitter mx-3"></i></a>
                    <a href="https://www.instagram.com/ig_goblin00/"><i className="fab fa-instagram mx-3"></i></a>
                    <a href="https://www.linkedin.com/in/alamin00/"><i className="fab fa-linkedin mx-3"></i></a>
                    <a href="https://github.com/aimless00"><i className="fab fa-github mx-3"></i></a>
                </p>

                <button className="btn btn-warning text-white mx-3">Hire Me</button>
                <a href={resume} download><button className="btn btn-info">Download Resume</button></a>

            </div>
        </div>
    );
};

export default Header;