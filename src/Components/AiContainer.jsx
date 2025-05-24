import React, { useEffect, useRef, useState } from "react";
import { FaMailchimp } from "react-icons/fa6";
import { TbLayoutSidebar } from "react-icons/tb";
import { BiUpArrowAlt } from "react-icons/bi";
import { GiCash } from "react-icons/gi";
import "./aicontainer.css";
import gsap from "gsap";
import { FaChevronDown } from "react-icons/fa";
const AiContainer = () => {
  const [openSections, setOpenSections] = useState({
    userData: false,
    conversationAttributes: false,
    companyDetails: false,
    salesforce: false,
    stripe: false,
    jira: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const [show, setShow] = useState(true);
  const [clicked, setClicked] = useState("Ai");
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
  }, [show]);
  return (
    <>
      {show ? (
        <div className={`ai-container ${!show && "none"} `} ref={aiRef}>
          <div className="ai-main">
            <div className="ai-container-header">
              <div onClick={() => setClicked("Ai")}>
                <span className={`${clicked === "Ai" && "ai-active "}`}>
                  <FaMailchimp className="ai-icon" style={{ color: "black" }} />{" "}
                  Ai Copilot
                </span>
                <div className={`${clicked === "Ai" && "active"}`}></div>
              </div>
              <div onClick={() => setClicked("Detail")}>
                <span className={`${clicked === "Detail" && "ai-active "}`}>
                  Details
                </span>
                <div className={`${clicked === "Detail" && "active"}`}></div>
              </div>
            </div>
            <div>
              {" "}
              <TbLayoutSidebar
                className="sidebar-icon"
                style={{
                  cursor: "pointer",
                  fontSize: "1.6rem",
                }}
                onClick={() => setShow(false)}
              />
            </div>
          </div>
          <hr />
          {clicked === "Ai" ? (
            <>
              {" "}
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
            </>
          ) : (
            <div className="sidebar">
              <div className="section">
                <div className="label">Assignee</div>
                <div className="value with-avatar">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_8yUlsY5mKz7R29V1vV8wjUpgs_zDsH8RA&s"
                    alt="avatar"
                    className="avatar"
                  />
                  Brian Byrne
                </div>
                <div className="label">Team</div>
                <div className="value with-icon">
                  <span className="icon">👥</span> Unassigned
                </div>
              </div>

              <div className="section">
                <div className="label">Links</div>
                <div className="link">
                  <span className="icon">🎫</span> Tracker ticket{" "}
                  <button>+</button>
                </div>
                <div className="link">
                  <span className="icon">📂</span> Back-office tickets{" "}
                  <button>+</button>
                </div>
                <div className="link">
                  <span className="icon">↗</span> Side conversations{" "}
                  <button>+</button>
                </div>
              </div>

              {[
                { key: "userData", label: "USER DATA" },
                {
                  key: "conversationAttributes",
                  label: "CONVERSATION ATTRIBUTES",
                },
                { key: "companyDetails", label: "COMPANY DETAILS" },
                { key: "salesforce", label: "SALESFORCE" },
                { key: "stripe", label: "STRIPE" },
                { key: "jira", label: "JIRA FOR TICKETS" },
              ].map(({ key, label }) => (
                <div key={key} className="section">
                  <div
                    className="collapsible-header"
                    onClick={() => toggleSection(key)}
                  >
                    {label}
                    <FaChevronDown
                      className={`arrow-icon ${
                        openSections[key] ? "open" : ""
                      }`}
                    />
                  </div>
                  {openSections[key] && (
                    <div className="collapsible-content">
                      <p>Content for {label}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
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
