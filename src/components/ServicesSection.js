import React from 'react';

function ServicesSection() {
    return (
        <section id="services" className="sec-services">
            <div className="container">
                <h1>Our Values</h1>
                <div className="mb-4"/>
                <div className="row">
                    <div className="col-sm-4">
                        <i className="fa fa-4x fa-trophy"></i>
                        <h2 className="h3">Leadership</h2>
                        <p>Academic excellence and management of educational and social activities of the university</p>
                    </div>
                    <div className="col-sm-4">
                        <i className="fa fa-4x fa-graduation-cap"></i>
                        <h2 className="h3">Academic integrity</h2>
                        <p>Academic integrity is a cornerstone of our mission to deliver personalized education</p>
                    </div>
                    <div className="col-sm-4">
                        <i className="fa fa-4x fa-rocket"></i>
                        <h2 className="h3">Innovation focus</h2>
                        <p>Development of research and innovation activities in ICT and related sectors of the digital
                            economy</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
