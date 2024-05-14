import React from "react";
import { InView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { changeScale } from "../effects/PointerEffect";

const Presentation = () => {

    const [ isHovered, setIsHovered ] = useState(false);
    const changeStateHovering = () => {
      setIsHovered( !isHovered )

  }

  useEffect(() => {
      
      if(isHovered){
          changeScale(2)
      } else {
          changeScale(1)
      }

  }, [ changeStateHovering ]);



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
      <div className="presentationContainer">
        <h1>ABOUT <span className="span-green">ME</span></h1>
          <br/>
          <p className="presentation_fr" onMouseEnter={changeStateHovering} onMouseLeave={changeStateHovering}> 
            Salut, je suis Damien, un développeur web <span>passionné</span> et <span>créatif</span> ! Je
            donne autant mon <span>maximum</span> sur le frontend que sur le backend du
            développement. Depuis longtemps, je suis animé par une véritable passion pour la création digitale et je décide enfin d'en faire ma profession.
            Quand je m'investis dans un projet, c'est <span>à fond !</span>  Je m'engage à donner le meilleur de moi-même
            pour réaliser tous les <span>objectifs</span> fixés, et ce, dans les délais
            impartis. Vous pouvez compter sur ma <span>détermination</span> et mon <span>énergie</span>
            pour mener à bien vos projets web.
          </p>
          <div
          className="profilePicture"
          title="Pictures of me, Damien Generet. Nice to meet you !"
        ></div>
        </div>
    </>
  );
};

export default Presentation;
