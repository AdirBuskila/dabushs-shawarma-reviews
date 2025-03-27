// src/App.js
import React, { useState } from "react";
import ReviewCard from "./components/ReviewCard";
import AddReviewForm from "./components/AddReviewForm";
import reviewsData from "./data/reviewsData";
import logo from './logo.jpg'
import "./style/App.css";

// Default initial data

function App() {
  const [reviews, setReviews] = useState(reviewsData);

  // A callback function to add a new review
  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo-container">
          <img src={logo} alt="Shawarma Logo" className="shawarma-icon" />
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
            links={review.links}
            phone={review.phone}
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
