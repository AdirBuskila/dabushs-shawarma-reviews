// src/App.js
import React, { useState } from "react";
import ReviewCard from "./components/ReviewCard";
import AddReviewForm from "./components/AddReviewForm";
import "./style/App.css";

// Default initial data
const initialReviews = [
  {
    id: 1,
    date: "2025-04-01",
    placeName: "הנכד של אברהם",
    location: "ראשון לציון, Israel",
    scores: {
      taste: 9,
      cleanliness: 10,
      servingSpeed: 9,
      saladVariety: 10,
    },
  },
  {
    id: 2,
    date: "2025-04-02",
    placeName: "Nobi",
    location: "Ashkelon, Israel",
    scores: {
      taste: 9,
      cleanliness: 8,
      servingSpeed: 9,
      saladVariety: 10,
    },
  },
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);

  // A callback function to add a new review
  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo-container">
          <img src="/logo.jpg" alt="Shawarma Logo" className="shawarma-icon" />
          <h1 className="app-title">Dabush's Shawarma Reviews</h1>
        </div>
      </header>

      <main className="reviews-container">


        {/* Display all reviews */}
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            date={review.date}
            placeName={review.placeName}
            location={review.location}
            scores={review.scores}
          />
        ))}
        {/* Add the form */}
        <AddReviewForm onAddReview={handleAddReview} />
      </main>
    </div>
  );
}

export default App;
