import React from "react";

export const Footer = () =>(
    <footer class="footer" id="contact">
        <div class="container">
            <div class="py-5">
                <p class="text-center display-4">Contact</p>
                <blockquote class="blockquote text-center border-bottoms py-5">
                    <p class="mb-0">“If I had asked people what they wanted, they would have said faster horses. ”</p>
                    <footer class="blockquote-footer"><cite title="Source Title">Henry Ford</cite></footer>
                </blockquote>    
                <div class="d-flex justify-content-around py-5">
                    <a href="#" class="text-white fs-4"><i class="far fa-envelope fa-2x px-3"></i>nghiadoan171@gmail.com</a>
                    <a href="#" class="text-white fs-4"><i class="fas fa-phone-square-alt fa-2x px-3"></i>0372074734</a>
                </div>
            </div>
        </div>  
    </footer>
)