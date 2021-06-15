import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-scroll";

export const Header = () =>(
    <header className="text-center" id="home">
    <Jumbotron>
        <div class="overlay"></div>
        <div class="container">
            <p class="h1 border-bottoms">Doan Duc Nghia</p>
            <p class="lead">Interactive resume</p>
        </div>
        <Link activeClass="active" to="profile" spy={true} smooth={true} offset={-70} duration={500}>
            <button class="angle-dow"> <i class="fas fa-angle-down fa-3x p-3"></i></button>
        </Link>       
    </Jumbotron> 
    </header>
)