import React from "react";
import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

const Competences = () => {

    const [visibleParagraphs, setVisibleParagraphs] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleParagraphs(prevVisibleParagraphs => [
                        ...prevVisibleParagraphs,
                        entry.target.id
                    ]);
                } else {
                    setVisibleParagraphs(prevVisibleParagraphs =>
                        prevVisibleParagraphs.filter(
                            paragraphId => paragraphId !== entry.target.id
                        )
                    );
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: [1, 0.5]
        });

        document.querySelectorAll('.competence.viewEffect p').forEach(p => {
            observer.observe(p);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
        <section className="competencesContainer">
            <h2>COMPÉTENCES</h2>
            <div className="competence viewEffect">
                <div className="lineCompetences">
                <p id="html" className={visibleParagraphs.includes('html') ? 'inView' : 'noInView'}>HTML </p><img className="svgCompetence" src="../public/html.svg" alt="HTML"></img>
                <p id="css" className={visibleParagraphs.includes('css') ? 'inView' : 'noInView'}>CSS</p> <img className="svgCompetence" src="../public/css.svg" alt="CSS"></img>
                <p id="javascript" className={visibleParagraphs.includes('javascript') ? 'inView' : 'noInView'}>JAVASCRIPT</p> <img className="svgCompetence" src="../public/javascript.svg" alt="JavaScript"></img>
                </div>
                <div className="lineCompetences">
                <p id="react" className={visibleParagraphs.includes('react') ? 'inView' : 'noInView'}>REACT</p> <img className="svgCompetence" src="../public/react.svg" alt="React"></img>
                <p id="vite" className={visibleParagraphs.includes('vite') ? 'inView' : 'noInView'}>VITE.JS</p> <img className="svgCompetence" src="../public/vite.svg" alt="Vite.js"></img>
                <p id="github" className={visibleParagraphs.includes('github') ? 'inView' : 'noInView'}>GITHUB</p> <img className="svgCompetence" src="../public/github.svg" alt="GitHub"></img>
                </div>
            </div>
        </section>
    </>
    )
}

export default Competences