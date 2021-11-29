import React from 'react';

const Courosel = () => {
    return (
        <div style={{ width: '120px' }}>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active text-secondary">
                        <h6>Web Developer</h6>
                    </div>
                    <div className="carousel-item text-secondary">
                        <h6>Web Design</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courosel;