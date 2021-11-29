import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="p-5">
                    <h5 className='fw-bold'>Adress</h5>
                    <p>Dimla, Nilphamri</p>
                    <p>Rangpur, Bangladesh</p>
                    <p>Phone: 01755223511</p>
                </div>
                <div className="p-5">
                    <h5 className='fw-bold'>Skilss</h5>
                    <p>HTML, CSS</p>
                    <p>JavaScript</p>
                    <p>React, NodeJS</p>
                    <p>MongoDB</p>
                </div>
                <div className="p-5">
                    <h5 className='fw-bold'>FOLLOW ME</h5>
                    <p><i className="fab fa-facebook-square"></i> <i className="fab fa-twitter-square"></i> <i className="fab fa-instagram"></i></p>
                    <button className="btn btn-primary">CONTACT US</button>
                </div>
            </div>
            <div className=" d-flex justify-content-between bg-dark text-white pt-2">
                <p>Made with <i className="fas fa-heart"></i> & <i className="fas fa-coffee"></i> in Rangpur, Bangladesh</p>
                <p>© CopyWirght from AL Amin</p>
            </div>
        </div>
    );
};

export default Footer;