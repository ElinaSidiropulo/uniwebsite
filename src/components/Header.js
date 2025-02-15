import React from 'react';

function Header() {
    return (
        <header role="banner">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation" id={"aaa"}>
                <div className="container">
                    <a href="#" className="navbar-brand">IITU University</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#course-info">Course Info</a></li>
                            <li className="nav-item"><a className="nav-link" href="#enrollment">Enrollment</a></li>
                            <li className="nav-item"><a className="nav-link" href="#folio">Faculty</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
