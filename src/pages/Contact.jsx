import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1>
          <span className="span-green">CONTACT</span> ME
        </h1>
        <form className="contact-form">
          <div className="input-part">
            <div>
              <input type="text" id="input-name" placeholder="Name"></input>
              <input
                type="email"
                id="input-email"
                placeholder="Email address"
              ></input>
              <input
                type="text"
                id="input-subject"
                placeholder="Subject"
              ></input>
            </div>
            <div>
              <h3>
                Let's work <span className="span-green">Together !</span>
              </h3>
            </div>
          </div>
          <div className="text-area">
            <textarea
              name="message"
              type="text"
              id="input-message"
              placeholder="Message"
            ></textarea>
          </div>
          <input type="submit" value="Submit" id="input-submit"></input>

          <div className="media-logo">
            <a href="https://github.com/Damien-Generet"><GitHubLogoIcon /></a>
            <a href="https://www.linkedin.com/in/damiengeneret/"><LinkedInLogoIcon /></a>
            <a href="mailto:damiengeneret@outlook.com"><EnvelopeClosedIcon /></a>
          </div>

          <div className="media-link">
          <p>
          <a href="#">Malt</a> | <a href="#">Fiverr</a>
          </p>
          </div>

        </form>
      </div>
    </>
  );
};

export default Contact;
