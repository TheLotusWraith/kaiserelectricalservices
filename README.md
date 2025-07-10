# Kaiser Electrical Services Website

A modern, responsive website for Kaiser Electrical Services built with React, TypeScript, and Vite.

## Features

- Modern dark theme with coral red accents
- Responsive design with glassmorphism effects
- Google Reviews integration via OAuth2
- Multiple service pages (New Construction, Residential, Commercial)
- Contact form and service area information

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: CSS with modern design patterns
- **Backend**: Express.js with OAuth2 authentication
- **APIs**: Google Places API for reviews

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Google OAuth2 Setup

To enable Google Reviews functionality, you'll need to set up OAuth2 authentication:

1. **Create a Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Places API

2. **Create OAuth2 Credentials**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Set application type to "Web application"
   - Add authorized redirect URIs (e.g., `http://localhost:3001/auth/google/callback`)
   - Note down your Client ID and Client Secret

3. **Get a Refresh Token**:
   - Use the Google OAuth2 playground or implement the OAuth2 flow
   - Exchange authorization code for refresh token
   - Store the refresh token securely

4. **Find Your Place ID**:
   - Use [Google's Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Search for "Kaiser Electrical Services" and copy the Place ID

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Google OAuth2 Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:3001/auth/google/callback
GOOGLE_REFRESH_TOKEN=your_refresh_token_here

# Google Places API
GOOGLE_PLACE_ID=your_kaiser_electrical_place_id_here

# Server Configuration
PORT=3001
```

### 4. Start Development Servers

In separate terminals:

```bash
# Start the backend server
node server.js

# Start the frontend development server
npm run dev
```

The website will be available at `http://localhost:5173` and the API at `http://localhost:3001`.

## API Endpoints

- `GET /api/google-reviews` - Fetch Google reviews for Kaiser Electrical Services
- `GET /api/health` - Health check endpoint

## Project Structure

```
kaiser-electrical-services/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   └── App.tsx             # Main app component
├── server.js               # Express backend server
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Deployment

For production deployment:

1. Set up environment variables on your hosting platform
2. Build the frontend: `npm run build`
3. Deploy both frontend and backend to your hosting service
4. Update the `GOOGLE_REDIRECT_URI` to match your production domain

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Kaiser Electrical Services.
