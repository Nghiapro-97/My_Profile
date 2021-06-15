import React from "react";
import { Jumbotron } from "react-bootstrap";
import {Nav} from './Navbar';

export const Header = () =>(
    <header className="text-center" id="home">
    <Nav/>
    <Jumbotron>
        <div class="overlay"></div>
        <div class="container">
            <p class="h1 border-bottoms">Doan Duc Nghia</p>
            <p class="lead">Interactive resume</p>
        </div>
        <a class="angle-dow" href="#main"><i class="fas fa-angle-down fa-3x p-3"></i></a>
    </Jumbotron> 
    </header>
)