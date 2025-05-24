import React, { useEffect, useRef } from "react";
import { MdTimelapse } from "react-icons/md";
import "./ChartCard.css";
import gsap from "gsap";
const ChartCard = ({ people, isActive, onClick, setChatSelected }) => {
  const cardsref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".chart-card ",
      { opacity: 0, left: -100 },
      { opacity: 1, duration: 0.5, left: 0, stagger: 0.4 }
    );
  });
  return (
    <div
      className={`chart-card ${isActive ? "active" : ""}`}
      onClick={() => {
        onClick;
        setChatSelected(people);
      }}
      ref={cardsref}
    >
      <div className="chart-card-profile-picture">
        <img
          src={
            people.profile_img ||
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_8yUlsY5mKz7R29V1vV8wjUpgs_zDsH8RA&s`
          }
        />
      </div>
      <div className="chart-card-details">
        <h4 className="chart-card-UserName">
          {people.full_name}{" "}
          {people.last_seen && (
            <span>
              <MdTimelapse />
              3m
            </span>
          )}
        </h4>
        <p className="chart-card-message">
          <span>{people.last_Message.slice(0, 20)}....</span>{" "}
          <span> {people.recieved_last_message || "45m"} </span>
        </p>
      </div>
    </div>
  );
};

export default ChartCard;
