import React from "react";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-md bg-white fixed-top py-3">
            <div className="container-fluid" style={{paddingInline: "70px"}}>
                <a href="/" className="text-dark fw-normal navbar-brand">Harshil Bhanushali</a>
                <button className="btn btn-outline-info text-info ms-auto">Contact Me</button>
                <button 
                className="navbar-toggler mx-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNav">
                <span className="fas fa-bars"></span></button>
                <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
                    <div className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link text-dark text-end pe-4 pe-md-auto">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link text-dark text-end pe-4 pe-md-auto">Projects</a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;