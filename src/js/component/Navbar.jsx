import React from "react";

export default function Navbar(){

    return ( 
          <nav className="navbar navbar-dark navbar-expand-md bg-dark">
             <div className="container-fluid">
                <a className="navbar-brand text-light ms-3" href="#">Start Bootstrap</a>
                <button className="navbar-toggler navbar-light text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-light"></span>
                </button>
                <div className="collapse navbar-collapse navbar-light" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-3">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )


}