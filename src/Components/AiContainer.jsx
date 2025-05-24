import React, { useEffect, useRef, useState } from "react";
import { FaMailchimp } from "react-icons/fa6";
import { TbLayoutSidebar } from "react-icons/tb";
import { BiUpArrowAlt } from "react-icons/bi";
import { GiCash } from "react-icons/gi";
import "./aicontainer.css";
import gsap from "gsap";
const AiContainer = () => {
  const [show, setShow] = useState(true);
  const aiRef = useRef(null);
  const chimpRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      aiRef.current,
      {
        x: 300,
        opacity: 0,
      },
      { x: 0, opacity: 1 }
    );
    gsap.fromTo(
      chimpRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, repeat: -1, duration: 1.5 }
    );
  });
  return (
    <>
      {show ? (
        <div className={`ai-container ${!show && "none"} `} ref={aiRef}>
          <div className="ai-main">
            <div className="ai-container-header">
              <div>
                <span>
                  <FaMailchimp className="ai-icon" style={{ color: "black" }} />{" "}
                  Ai Copilot
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
              <TbLayoutSidebar
                style={{ cursor: "pointer" }}
                onClick={() => setShow(false)}
              />
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
      ) : (
        <FaMailchimp
          ref={chimpRef}
          className="ai-open-contianer"
          onClick={() => setShow(true)}
        />
      )}
    </>
  );
};

export default AiContainer;
