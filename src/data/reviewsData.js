// src/data/reviewsData.js

const reviewsData = [
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
      // Average = (9 + 10 + 9 + 10) / 4 = 9.5
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
      // Average = (9 + 8 + 9 + 10) / 4 = 9.0
    },
  },
];

export default reviewsData;
