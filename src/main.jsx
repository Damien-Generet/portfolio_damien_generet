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
import MouseParticles from "react-mouse-particles";
import { AnimatePresence } from "framer-motion";
import Links from "./components/Links";


ReactDOM.createRoot(document.getElementById('root')).render(
    
    <>
     <MouseParticles
          g={0.5}
          num={1}
          radius={1}
          life={5}
          v={0}
          color="var(--primary-color)"
          alpha={2}
          level={1}
        />
    <BrowserRouter>
        <Background />
        <header>
            <Navbar />
        </header>
        <main>
        <ToggleTheme />
        <AnimatePresence mode="wait">
        <Routes>
             <Route path="/*" element={<Links />} />
        </Routes>
        </AnimatePresence>
          
        </main>
    </BrowserRouter>
    </>

)