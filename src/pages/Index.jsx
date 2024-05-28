/* eslint-disable react/no-unescaped-entities */
import "../style/App.scss";
import Projects from "./Projects";
import Presentation from "./Presentation";
import Contact from "./Contact";
import IntersectionCV from "../components/IntersectionCV";


const Index = () => {
  

  return (
    <>
      <div className="titleContainer" id="Home">
        <div
        
        >
          <p>Hi, i'm</p>
          <h1 className="mainTitle">
            DAMIEN <span className="span-green">GENERET</span>
          </h1>
          <h2 className="second-title">A web developer.</h2>
        </div>
        <div className="small-about">
          <p>
          Unlock the <span className="span-green">power</span> of your online <span className="span-green">presence</span> ! Let's craft stunning
          websites that not only <span className="span-green">captivate</span> your audience but also drive your <span className="span-green">business</span> to new heights of <span className="span-green">success</span> !
          </p>

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
        </div>
      </div>
      <IntersectionCV />
      <Projects />
      <Presentation />
      <Contact />
    </>
  );
};

export default Index;
