import React from "react";

export default function Header() {
    return(
        <div>
            <nav class="navbar bg-dark" data-bs-theme="dark">
                <div class="container-fluid">

                    <a class="navbar-brand" href="#">
                        <img src="https://devf-website.s3.amazonaws.com/static/assets/img/devf-white.png" alt="Bootstrap" width="90" height="24"/>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Dev.f Music</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U">Crear Albums</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link" href="#">¿Quienes somos?</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

