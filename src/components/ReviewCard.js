// src/components/ReviewCard.js
import React from "react";
import "../style/ReviewCard.css";

const ReviewCard = ({ date, placeName, location, phone, links, scores }) => {
  const { taste, cleanliness, servingSpeed, saladVariety } = scores;
  const overallScore = (
    (taste + cleanliness + servingSpeed + saladVariety) / 4
  ).toFixed(1);

  return (
    <div className="review-card">
      <h2 className="place-name">{placeName} 🥙</h2>
      <p className="location">🗺️ Location: {location}</p>
      <p className="date">📅 Date: {date}</p>
      <div className="score-section">
        <p>😋 Taste: {taste} / 10</p>
        <p>🧼 Cleanliness: {cleanliness} / 10</p>
        <p>⚡ Serving Speed: {servingSpeed} / 10</p>
        <p>🥗 Salad Variety: {saladVariety} / 10</p>
      </div>
            {/* NEW FIELDS */}
            {phone && <p>📞 Phone: {phone}</p>}
      
      {links && (
        <div className="links">
          {links.googleMaps && (
            <a
              href={links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="maps-link"
            >
              Maps
            </a>
          )}
          {links.waze && (
            <a
              href={links.waze}
              target="_blank"
              rel="noopener noreferrer"
              className="waze-link"
            >
              Waze
            </a>
          )}
        </div>
      )}

      <div className="overall-score">
        ⭐ Overall Score: {overallScore} / 10 ⭐
      </div>
    </div>
  );
};

export default ReviewCard;
