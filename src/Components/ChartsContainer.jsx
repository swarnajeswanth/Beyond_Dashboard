import React, { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChartCard from "./ChartCard";
import "./chartscontainer.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { ChartCardSkeleton } from "../Loader/SkeletonLoader";
import gsap from "gsap";
const ChartsContainer = ({ setChatSelected, kai, setKai }) => {
  const PeoplesData = [
    {
      profile_img: "",
      full_name: "Vinay Reddy",
      last_Message: "What's today plan ",
      last_seen: false,
      recieved_last_message: "17m",
    },
    {
      profile_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIIalwchC2BCuVl7HUArREAIrzk1cIegU3w&s",
      full_name: "Jeswanth Swarna",
      last_Message: "Hey What's up?",
      last_seen: true,
      recieved_last_message: "35m",
    },
    {
      profile_img: "",
      full_name: "Asif Shaik",
      last_Message: "Wanna meet u , Are you free on saturday",
      last_seen: false,
      recieved_last_message: "5m",
    },
  ];
  const shimmerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    gsap.fromTo(
      ".charts-filter-container > p",
      {
        top: "-20%",
        scale: 0,
        opacity: 0,
      },
      { top: 0, opacity: 1, scale: 1, stagger: 0.2 }
    );
    gsap.fromTo(
      ".charts-title >*",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      }
    );
  }, []);
  return (
    <div className="charts-container">
      <span className="charts-title">
        <span>Your inbox</span>

        <hr style={{ opacity: "0.6" }} />
      </span>
      <div>
        <div className="charts-filter-container">
          <p>
            <span>{loading ? "0" : "3"} Open</span>
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
          {loading ? (
            <>
              {[1, 2, 3].map((idx) => {
                return <ChartCardSkeleton key={idx} />;
              })}
            </>
          ) : (
            <>
              {PeoplesData.map((people, idx) => {
                return (
                  <ChartCard
                    key={idx}
                    isActive={kai === idx}
                    people={people}
                    onClick={() => setKai(idx)}
                    setChatSelected={setChatSelected}
                  />
                );
              })}
            </>
          )}
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
