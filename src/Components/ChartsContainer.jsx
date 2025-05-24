import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChartCard from "./ChartCard";
import "./chartscontainer.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { ChartCardSkeleton } from "../Loader/SkeletonLoader";

const ChartsContainer = () => {
  return (
    <div className="charts-container">
      <span className="charts-title">
        <span>Your inbox</span>
        <hr style={{ opacity: "0.6" }} />
      </span>
      <div>
        <div className="charts-filter-container">
          <p>
            <span>5 Open</span>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </p>
          <p>
            <span>Waiting longest</span>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </p>
        </div>
        <div className="charts-cards-container">
          <ChartCard />
          <ChartCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIIalwchC2BCuVl7HUArREAIrzk1cIegU3w&s" />
          <ChartCard />
          <ChartCardSkeleton />
        </div>
      </div>
      <div className="inbox-icons">
        <BsLayoutSidebarInset />
        <IoReorderThreeOutline />
      </div>
    </div>
  );
};

export default ChartsContainer;
