import React from 'react';
import sunglass from '../../../img/Sunglass.jpg'
import tour from '../../../img/Tour.jpg'
import Language from '../../../img/Language.jpg'
import Lab from '../../../img/lab.jpg'

const Projects = () => {
    return (
        <div style={{ marginTop: '150px' }} className='text-white container pb-5'>
            <h1 className='fw-bold'>My Projects</h1>
            <p>-------------------------------</p>

            <div>
                <div className="container overflow-hidden">
                    <div className="row gy-5">
                        <div className="col-6">
                            <div className="p-3">
                                <h5>Sunglass Companies</h5>
                                <img style={{ borderRadius: '15px' }} src={sunglass} alt="" />
                                <button className=" mt-3 btn btn-success">Work Details</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3">
                                <h5>Tour & Travell</h5>
                                <img style={{ borderRadius: '15px' }} src={tour} alt="" />
                                <button className=" mt-3 btn btn-success">Work Details</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3">
                                <h5>Tour & Travell</h5>
                                <img style={{ borderRadius: '15px' }} src={Language} alt="" />
                                <button className=" mt-3 btn btn-success">Work Details</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="p-3">
                                <h5>Hospital Lab</h5>
                                <img style={{ borderRadius: '15px' }} src={Lab} alt="" />
                                <button className=" mt-3 btn btn-success">Work Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;