import React from "react";
import { InView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import transition from "../effects/transition";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "@radix-ui/react-icons";

const Presentation = () => {

  const [visibleParagraphs, setVisibleParagraphs] = useState([]);

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
  }, []);

  return (
    <>
      <div className="presentationContainer">
        <div className="text-presentation">
          <h1>
            ABOUT <span className="span-green">ME</span>
          </h1>
          <br />
          <p
            className="presentation_fr">
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
          <div className="arrow-link">
            <Link to="/contact" className="link">
                <p>Contact me !</p>
                <ArrowDownIcon className="arrow" />
            </Link>
            </div>
        </div>
        <div
          className="profilePicture"
          title="Pictures of me, Damien Generet. Nice to meet you !"
        ></div>
      </div>
    </>
  );
};

export default transition(Presentation);
