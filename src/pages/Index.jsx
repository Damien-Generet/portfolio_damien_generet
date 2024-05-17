import React from "react";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import "../style/App.scss";
import transition from "../effects/transition";
import { Link } from "react-router-dom";

const Index = () => {
  

  return (
    <>
      <div className="titleContainer">
        <div
        
        >
          <p>Hi, i'm</p>
          <h1 className="mainTitle">
            DAMIEN <span className="span-green">GENERET</span>
          </h1>
          <h2 className="second-title">A web developer.</h2>
        </div>
        <div className="small-about">
          Unlock the <span className="span-green">power</span> of your online <span className="span-green">presence</span> ! Let's craft stunning
          websites that not only <span className="span-green">captivate</span> your audience but also drive your <span className="span-green">business</span> to new heights of <span className="span-green">success</span> !
        </div>
        <div className="title-bottom">
            <div>
                <ul>
                    <li className="tag-competences">REACT</li>
                    <li className="tag-competences">JAVASCRIPT</li>
                    <li className="tag-competences">SASS</li>
                </ul>
                <ul>
                    <li className="tag-competences span-green">LEARN OTHER LANGUAGE</li>
                </ul>
                <ul>
                    <li className="tag-competences">RUBY ON RAIL</li>
                    <li className="tag-competences">SQL</li>
                    <li className="tag-competences">THREE.js</li>
                </ul>
            </div>
            <div className="arrow-link">
            <Link to="/projects" className="link">
                <p>My projects</p>
                <ArrowDownIcon className="arrow" />
            </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default transition(Index);
