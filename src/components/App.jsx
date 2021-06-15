import React from "react";
import './App.css';
import { Navbars } from "./Navbar"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return(
        <div>
            <Navbars />
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;