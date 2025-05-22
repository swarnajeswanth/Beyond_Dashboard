import React from "react";
import { MdTimelapse } from "react-icons/md";
import "./ChartCard.css";
const ChartCard = ({ src }) => {
  return (
    <div className="chart-card">
      <div className="chart-card-profile-picture">
        <img
          src={
            src ||
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_8yUlsY5mKz7R29V1vV8wjUpgs_zDsH8RA&s`
          }
        />
      </div>
      <div className="chart-card-details">
        <h4 className="chart-card-UserName">
          Luis- Github{" "}
          <span>
            <MdTimelapse />
            3min
          </span>
        </h4>
        <p className="chart-card-message">
          <span>Hey! I have a Question....</span> <span>45m</span>
        </p>
      </div>
    </div>
  );
};

export default ChartCard;
