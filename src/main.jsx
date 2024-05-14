import React from "react";
import ReactDOM from 'react-dom';
import './style/App.scss';
import PointerEffect from "../src/effects/PointerEffect";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Background from "./effects/Background";
import Projects from "./pages/Projects";
import Presentation from "./pages/Presentation";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ToggleTheme from "./effects/ToggleTheme";



ReactDOM.createRoot(document.getElementById('root')).render(
    
    <>
    <BrowserRouter>
        <PointerEffect />
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
        </Routes>
          
        </main>
    </BrowserRouter>
    </>

)