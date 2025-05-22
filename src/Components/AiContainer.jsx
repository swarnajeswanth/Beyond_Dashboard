import React from "react";
import { FaMailchimp } from "react-icons/fa6";
import { TbLayoutSidebar } from "react-icons/tb";
import { BiUpArrowAlt } from "react-icons/bi";
import { GiCash } from "react-icons/gi";
import "./aicontainer.css";
const AiContainer = () => {
  return (
    <div className="ai-container">
      <div className="ai-main">
        <div className="ai-container-header">
          <div>
            <span>
              <FaMailchimp className="ai-icon" /> Ai Copilot
            </span>
            <div className="active"></div>
          </div>
          <div>
            <span>Details</span>
            <div className="active"></div>
          </div>
        </div>
        <div>
          {" "}
          <TbLayoutSidebar />
        </div>
      </div>
      <hr />
      <div className="ai-container-content">
        <div className="ai-container-content-header">
          <span className="ai-icon">
            <FaMailchimp />
          </span>
          <span>Hi,i'm Fin Ai Copilot</span>
          <p>Ask me anything about this conversation</p>
        </div>
        <div className="suggestions">
          <p>
            <b>Suggested</b>
            <GiCash
              style={{
                display: "inline-block",
                fontSize: "1rem",
                margin: "0 0.4rem",
              }}
            />{" "}
            How do i get a refund?
          </p>
        </div>
      </div>
      <div className="ai-container-input">
        <span>
          <input type="text" placeholder="Ask a question..." />
          <span className="input-icon">
            <BiUpArrowAlt />
          </span>
        </span>
      </div>
    </div>
  );
};

export default AiContainer;
