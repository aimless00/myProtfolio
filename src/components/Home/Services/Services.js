import React from 'react';
import ServiceSlider from '../ServiceSlider/ServiceSlider';



const Services = () => {
    return (
        <div style={{ marginTop: '150px' }} className='text-white container pb-5'>
            <h1 className='fw-bold'>My Service</h1>
            <p>-------------------------------</p>

            <div>
                <ServiceSlider></ServiceSlider>
            </div>

        </div>
    );
};

export default Services;