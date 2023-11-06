import React from 'react'


function Navebar() {
    return (
        <div>
            <nav class="navbar this-nav navbar-expand-lg position-fixed w-100 bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#logo"><i class="bi bi-heartbreak-fill"></i><span className="mx-3">Techserve</span></a>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-2 ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a className="nav-link active text-black fw-bold" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-bold" href="#About Us">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-bold" aria-disabled="true" href='#Service'>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-bold" aria-disabled="true" href='#News'>News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-bold" aria-disabled="true" href='#Contact'>Contacts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-bold" aria-disabled="true" href='#News'>Singn In</a>
                            </li>
                        </ul>
                        <div className="btn">
                            <button type="button" className="text-black fw-bold btn btn-primary">TRY IT FREE</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navebar