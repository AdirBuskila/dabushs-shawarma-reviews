// src/components/AddReviewForm.js
import React, { useState } from "react";
import "../style/AddReviewForm.css"; // optional, if you want to style the form

function AddReviewForm({ onAddReview }) {
  const [formData, setFormData] = useState({
    placeName: "",
    location: "",
    date: "",
    taste: "",
    cleanliness: "",
    servingSpeed: "",
    saladVariety: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate or sanitize if needed
    if (
      !formData.placeName ||
      !formData.location ||
      !formData.date ||
      !formData.taste ||
      !formData.cleanliness ||
      !formData.servingSpeed ||
      !formData.saladVariety
    ) {
      alert("Please fill in all fields before submitting!");
      return;
    }

    // Construct the new review object
    const newReview = {
      id: Date.now(), // temporary unique ID
      date: formData.date,
      placeName: formData.placeName,
      location: formData.location,
      scores: {
        taste: Number(formData.taste),
        cleanliness: Number(formData.cleanliness),
        servingSpeed: Number(formData.servingSpeed),
        saladVariety: Number(formData.saladVariety),
      },
    };

    // Pass to parent
    onAddReview(newReview);

    // Reset form
    setFormData({
      placeName: "",
      location: "",
      date: "",
      taste: "",
      cleanliness: "",
      servingSpeed: "",
      saladVariety: "",
    });
  };

  return (
    <form className="add-review-form" onSubmit={handleSubmit}>
      <h2>Add a New Shawarma Review</h2>

      <label>
        Place Name:
        <input
          type="text"
          name="placeName"
          value={formData.placeName}
          onChange={handleChange}
        />
      </label>

      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>

      <label>
        Taste (0-10):
        <input
          type="number"
          name="taste"
          value={formData.taste}
          onChange={handleChange}
          min="0"
          max="10"
        />
      </label>

      <label>
        Cleanliness (0-10):
        <input
          type="number"
          name="cleanliness"
          value={formData.cleanliness}
          onChange={handleChange}
          min="0"
          max="10"
        />
      </label>

      <label>
        Serving Speed (0-10):
        <input
          type="number"
          name="servingSpeed"
          value={formData.servingSpeed}
          onChange={handleChange}
          min="0"
          max="10"
        />
      </label>

      <label>
        Salad Variety (0-10):
        <input
          type="number"
          name="saladVariety"
          value={formData.saladVariety}
          onChange={handleChange}
          min="0"
          max="10"
        />
      </label>

      <button type="submit">Add Review</button>
    </form>
  );
}

export default AddReviewForm;
