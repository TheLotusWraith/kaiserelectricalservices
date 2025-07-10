const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// OAuth2 configuration
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Set credentials from environment variables
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

// Google Places API service
const places = google.places({ version: 'v1', auth: oauth2Client });

// Mock reviews as fallback
const mockReviews = [
  {
    author_name: "Sarah Johnson",
    rating: 5,
    relative_time_description: "2 months ago",
    text: "Kaiser Electrical Services did an amazing job on our home renovation. Professional, punctual, and excellent work quality. Highly recommend!",
    profile_photo_url: "https://via.placeholder.com/40/ff6b6b/ffffff?text=SJ"
  },
  {
    author_name: "Mike Chen",
    rating: 5,
    relative_time_description: "1 month ago",
    text: "Outstanding service! They installed our new electrical panel and everything works perfectly. Fair pricing and very knowledgeable team.",
    profile_photo_url: "https://via.placeholder.com/40/ff6b6b/ffffff?text=MC"
  },
  {
    author_name: "Lisa Rodriguez",
    rating: 5,
    relative_time_description: "3 weeks ago",
    text: "Fast response time and excellent work. Fixed our electrical issues quickly and professionally. Will definitely use them again!",
    profile_photo_url: "https://via.placeholder.com/40/ff6b6b/ffffff?text=LR"
  }
];

// Google Reviews endpoint
app.get('/api/google-reviews', async (req, res) => {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    
    if (!placeId) {
      console.log('No place ID configured, returning mock reviews');
      return res.json({ reviews: mockReviews });
    }

    // Get place details including reviews
    const response = await places.details({
      place_id: placeId,
      fields: ['reviews', 'rating', 'user_ratings_total']
    });

    const placeDetails = response.data.result;
    
    if (placeDetails.reviews && placeDetails.reviews.length > 0) {
      // Transform reviews to match our frontend expectations
      const reviews = placeDetails.reviews.map(review => ({
        author_name: review.author_name,
        rating: review.rating,
        relative_time_description: review.relative_time_description,
        text: review.text,
        profile_photo_url: review.profile_photo_url || `https://via.placeholder.com/40/ff6b6b/ffffff?text=${review.author_name.charAt(0)}`
      }));

      res.json({ reviews });
    } else {
      console.log('No reviews found, returning mock reviews');
      res.json({ reviews: mockReviews });
    }

  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    console.log('Returning mock reviews due to error');
    res.json({ reviews: mockReviews });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Google Reviews API available at http://localhost:${PORT}/api/google-reviews`);
}); 