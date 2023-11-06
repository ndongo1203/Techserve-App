import React from 'react'

function TechserveFooter() {
  return (
    <div className='footer'>
    <div class="container p-2 text-decoration-none">
    <div class="row">
        <div class="col-md-6">
            <div className="m-5">
                <a class="fw-bold text-dark nav-item" href="#icone"><i class="bi bi-heartbreak-fill"></i><span className="mx-3">Techserve</span></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit molestiae est ipsam consequatur? Impedit quae molestias saepe libero, quidem excepturi cumque quos in consequuntur blanditiis, magnam sed!</p>
            </div>
        </div>
        <div class="col-md-6">
            <div className="m-5 footer-liste">
                <ul class="me-2 ms-auto mb-2 mb-lg-0 d-flex">
                    <li class="nav-item me-3">
                        <a class="nav-link active text-dark" aria-current="page" href="#Home">Home</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link text-dark" href="#About">About Us</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link text-dark"  href="#Service">Services</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link text-dark" href='#News' >News</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link text-dark" href='#Contact'>Contacts</a>
                    </li>
                    <li class="nav-item text-dark">
                        <a class="nav-link" href='#Sign In'>Singn In</a>
                    </li>
                </ul>
                <div className="icones text-end mt-4">
                    <i class="bg-light bi bi-facebook mx-4"></i>
                    <i class="bg-light bi bi-twitter mx-4"></i>
                    <i class="bg-light bi bi-twitch mx-4"></i>
                </div>
                <p className="text-dark text-end me-3 mt-4">Copyright ©  All Rights Reserved, 2017</p>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default TechserveFooter