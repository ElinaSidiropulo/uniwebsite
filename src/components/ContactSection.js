import React from 'react';

function ContactSection() {
    return (
        <section id="contact" className="sec-contact">
            <div className="container">
                <h1>Hire me</h1>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form id="mail" action="https://formspree.io/f/meoekepg" method="POST" className="d-flex flex-column align-items-center">
                            <div className="form-group w-100">
                                <label className="sr-only" htmlFor="inputName">Full name</label>
                                <input id="inputName" name="name" className="form-control" type="text" placeholder="Name" required />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="inputMail" className="sr-only">Email Address</label>
                                <input id="inputMail" name="email" className="form-control" type="email" placeholder="mail.address@mail.com" required />
                            </div>
                            <div className="form-group w-100">
                                <label htmlFor="inputMessage" className="sr-only">Your Message</label>
                                <textarea id="inputMessage" name="message" className="form-control" cols="30" rows="8" required></textarea>
                            </div>
                            <div className="form-group w-100">
                                <button className="btn btn-primary d-block mx-auto" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
