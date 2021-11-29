import React from 'react';
import Typical from 'react-typical'

import './Header.css'

const Header = () => {
    return (
        <div className=' header p-5 header-section'>
            <div className='container text-white header-text'>
                <h6 className='fw-bold my-4'>WELCOME TO MY WEBSITE</h6>
                <h1 className='fw-bold mb-5 me-5'>I'm
                    <Typical
                        steps={[" React Web Developer", 1800, ' Web Designer', 1500]}
                        loop={Infinity}
                        wrapper="bold"
                    />
                </h1>
                <p>
                    <a href="https://www.facebook.com/aimless00"><i class="fab fa-facebook-f mx-3"></i></a>
                    <a href="https://mobile.twitter.com/BornoIdlam"><i class="fab fa-twitter mx-3"></i></a>
                    <a href="https://www.instagram.com/ig_goblin00/"><i class="fab fa-instagram mx-3"></i></a>
                    <a href="https://www.linkedin.com/in/alamin00/"><i class="fab fa-linkedin mx-3"></i></a>
                    <a href="https://github.com/aimless00"><i class="fab fa-github mx-3"></i></a>
                </p>

                <button className="btn btn-warning text-white">Hire Me</button>

            </div>
        </div>
    );
};

export default Header;