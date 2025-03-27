// src/data/reviewsData.js

const reviewsData = [
  {
    id: 1,
    date: "2025-04-01",
    placeName: "הנכד של אברהם",
    location: "ראשון לציון, Israel",
    phone: "03-555-1234",
    links: {
      googleMaps: "https://maps.google.com/?q=הנכד+של+אברהם+ראשון+לציון",
      waze: "https://waze.com/ul?ll=31.971291,34.789888&navigate=yes",
    },
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
    phone: "08-222-7890",
    links: {
      googleMaps: "https://maps.google.com/?q=Nobi+Ashkelon",
      waze: "https://waze.com/ul?ll=31.664027,34.569523&navigate=yes",
    },
    scores: {
      taste: 9,
      cleanliness: 8,
      servingSpeed: 9,
      saladVariety: 10,
    },
  },
  {
    id: 3,
    date: "2025-04-03",
    placeName: "Shawarma Laffa",
    location: "Tel Aviv, Israel",
    phone: "03-777-4567",
    links: {
      googleMaps: "https://maps.google.com/?q=Shawarma+Laffa+Tel+Aviv",
      waze: "https://waze.com/ul?ll=32.085299,34.781767&navigate=yes",
    },
    scores: {
      taste: 8,
      cleanliness: 9,
      servingSpeed: 8,
      saladVariety: 9,
    },
  },
  {
    id: 4,
    date: "2025-04-05",
    placeName: "שיפודי הזהב",
    location: "Ashkelon, Israel",
    phone: "08-333-5555",
    links: {
      googleMaps: "https://maps.google.com/?q=שיפודי+הזהב+אשקלון",
      waze: "https://waze.com/ul?ll=31.666,34.571&navigate=yes",
    },
    scores: {
      taste: 9,
      cleanliness: 9,
      servingSpeed: 8,
      saladVariety: 9, 
      // Avg ~ 8.75
    },
  },
  {
    id: 5,
    date: "2025-04-06",
    placeName: "גרבולי",
    location: "Ashkelon, Israel",
    phone: "08-111-9999",
    links: {
      googleMaps: "https://maps.google.com/?q=גרבולי+אשקלון",
      waze: "https://waze.com/ul?ll=31.662,34.568&navigate=yes",
    },
    scores: {
      taste: 8,
      cleanliness: 8,
      servingSpeed: 9,
      saladVariety: 9,
      // Avg ~ 8.5
    },
  },
  {
    id: 6,
    date: "2025-04-07",
    placeName: "שאוורמה שמעוני",
    location: "גן יבנה, Israel",
    phone: "08-987-6543",
    links: {
      googleMaps: "https://maps.google.com/?q=שאוורמה+שמעוני+גן+יבנה",
      waze: "https://waze.com/ul?ll=31.778,34.700&navigate=yes",
    },
    scores: {
      taste: 9,
      cleanliness: 9,
      servingSpeed: 9,
      saladVariety: 9,
      // Avg: 9
    },
  },
];

export default reviewsData;
