// src/components/ReviewCard.js
import React from "react";
import "../style/ReviewCard.css";

const ReviewCard = ({ date, placeName, location, scores }) => {
  const { taste, cleanliness, servingSpeed, saladVariety } = scores;
  const overallScore = (
    (taste + cleanliness + servingSpeed + saladVariety) / 4
  ).toFixed(1);

  return (
    <div className="review-card">
      <h2 className="place-name">
        {placeName} <span style={{ fontSize: "1.2rem" }}>🥙</span>
      </h2>
      <p className="location">🗺️ Location: {location}</p>
      <p className="date">📅 Date: {date}</p>
      <div className="score-section">
        <p>😋 Taste: {taste} / 10</p>
        <p>🧼 Cleanliness: {cleanliness} / 10</p>
        <p>⚡ Serving Speed: {servingSpeed} / 10</p>
        <p>🥗 Salad Variety: {saladVariety} / 10</p>
      </div>
      <div className="overall-score">⭐ Overall Score: {overallScore} / 10 ⭐</div>
    </div>
  );
};

export default ReviewCard;
