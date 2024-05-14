import React from "react";
import ReactDOM from 'react-dom';
import './style/App.scss';
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Background from "./effects/Background";
import Projects from "./pages/Projects";
import Presentation from "./pages/Presentation";
import Contact from "./pages/Contact";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ToggleTheme from "./effects/ToggleTheme";



ReactDOM.createRoot(document.getElementById('root')).render(
    
    <>
    <BrowserRouter>
        <Background />
        <header>
            <Navbar />
        </header>
        <main>
        <ToggleTheme />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<Presentation />} />
                <Route path="/contact" element={<Contact />} />
        </Routes>
          
        </main>
    </BrowserRouter>
    </>

)