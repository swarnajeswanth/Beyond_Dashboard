import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./chatcardSkeleton.css";
import "./messageSkeletonLoader.css";
export function ChartCardSkeleton() {
  const shimmerRef = useRef(null);

  useEffect(() => {
    gsap.to(shimmerRef.current, {
      xPercent: 100,
      repeat: -1,
      duration: 1.5,
      ease: "linear",
    });
  }, []);

  return (
    <div
      className="chart-card skeleton-wrapper"
      style={{ backgroundColor: "#3c6e7e" }}
    >
      <div className="chart-card-profile-picture skeleton avatar" />
      <div className="chart-card-details">
        <div className="skeleton line name-line"></div>
        <div className="skeleton line message-line short"></div>
        <div className="skeleton line message-line"></div>
      </div>
      <div className="shimmer" ref={shimmerRef}></div>
    </div>
  );
}

export function MessageSkeleton() {
  const shimmerRef = useRef(null);

  useEffect(() => {
    gsap.to(shimmerRef.current, {
      xPercent: 100,
      repeat: -1,
      duration: 1.5,
      ease: "linear",
    });
  }, []);

  return (
    <div className="cbsk-container">
      <div className="cbsk-avatar cbsk-skeleton-box" />
      <div className="cbsk-message cbsk-skeleton-box">
        <div className="cbsk-line short" />
        <div className="cbsk-line" />
        <div className="cbsk-line" />
        <div className="cbsk-line medium" />
      </div>
      <div className="cbsk-shimmer" ref={shimmerRef} />
    </div>
  );
}
