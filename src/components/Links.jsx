import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "../pages/Index";
import Projects from "../pages/Projects";
import Presentation from "../pages/Presentation";
import Contact from "../pages/Contact";


const Links = () => {

    const location = useLocation()

    return(
        <>
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route index element={<Index />} />
            <Route path="/projects" element={<Projects />}  />
            <Route path="/about" element={<Presentation  />} />
            <Route path="/contact" element={<Contact />}  />
        </Routes>
        </AnimatePresence>
        </>

    )
}

export default Links