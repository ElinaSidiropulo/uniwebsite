import React from 'react';

function TestimonialsSection() {
    return (
        <section id="testimonials" className="sec-testimonials">
            <div className="container">
                <h1>Clients said</h1>
                <hr />
                <div className="row" id="quotes">
                    <div className="col-sm-4">
                        <p className="text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        <p className="text-right">&mdash; Lorem Ipsum</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        <p className="text-right">&mdash; Lorem Ipsum</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        <p className="text-right">&mdash; Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;
