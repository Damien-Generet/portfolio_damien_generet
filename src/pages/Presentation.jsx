/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";

const Presentation = () => {

  const [setVisibleParagraphs] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleParagraphs((prevVisibleParagraphs) => [
              ...prevVisibleParagraphs,
              entry.target.id,
            ]);
          } else {
            setVisibleParagraphs((prevVisibleParagraphs) =>
              prevVisibleParagraphs.filter(
                (paragraphId) => paragraphId !== entry.target.id
              )
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [1, 0.5],
      }
    );

    document.querySelectorAll(".competence.viewEffect p").forEach((p) => {
      observer.observe(p);
    });

    return () => {
      observer.disconnect();
    };
  }, [setVisibleParagraphs]);

  return (
    <>
      <div className="presentationContainer" id="About">
        <div className="text-presentation">
          <h1>
            ABOUT <span className="span-green">ME</span>
          </h1>
          <br />
          <p
            className="presentation">
            Hi, I'm Damien. I'm a web developer skilled in both{" "}
            <span className="span-green">front-end</span> and{" "}
            <span className="span-green">back-end</span> development. I always
            put my all into my projects and possess unwavering confidence. If
            you choose to work with me, I can guarantee that I will devote
            myself entirely to achieving  <span className="span-green">success</span> and meeting your expectations.
            <br/>
            <br/>
            Previously, I worked as a sales representative and territorial
            manager in Montreal for a well-known franchise. However, I then
            pursued training as a web developer at{" "}
            <a href="https://www.thehackingproject.org" className="span-green">
              The Hacking Project
            </a>
            , and now I'm at your service, fully confident that succes<span className="span-green"> you won't regret
            it! </span>
          </p>
        </div>
        <div className="container-pictures">
        <div
          className="profilePicture"
          title="Pictures of me, Damien Generet. Nice to meet you !"
        ></div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Presentation;
