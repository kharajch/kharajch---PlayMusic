# kharajch---PlayMusic 🎵

A modern, full-featured music player and discovery web application built with Next.js and React. Browse, search, and play songs with advanced filtering capabilities by language, genre, and artist.

## Features

- 🎧 **Audio Playback** - Play, pause, skip next, and skip previous controls
- 🔍 **Smart Search** - Real-time song name filtering
- 🎛️ **Multi-Filter System** - Filter music by language, genre, and artist
- 📱 **Responsive Design** - Works seamlessly on different screen sizes
- 🎨 **Dark Theme UI** - Beautiful dark interface with smooth interactions
- 🗂️ **Organized Navigation** - Intuitive sidebar navigation and explore sections
- 🖼️ **Album Artwork** - Display high-quality cover images for each song

## Tech Stack

- **Frontend Framework**: [Next.js 16.1.1](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS
- **Code Quality**: [ESLint 9](https://eslint.org/)
- **PostCSS**: For CSS processing and Tailwind compilation
- **Fonts**: Google Fonts (Geist Sans & Geist Mono)

## Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/kharajch/PlayMusic.git
   cd PlayMusic
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
kharajch---PlayMusic/
├── app/                           # Next.js App Router
│   ├── Explore/                  # Explore section routes
│   │   ├── Artist/               # Artist filtering page
│   │   ├── Genre/                # Genre filtering page
│   │   ├── Language/             # Language filtering page
│   │   └── page.js               # Explore hub
│   ├── layout.js                 # Root layout with persistent UI
│   ├── page.js                   # Home page
│   ├── globals.css               # Global styles
│   └── not-found.js              # Custom 404 page
│
├── components/                    # Reusable React components
│   ├── components/
│   │   ├── Card.js               # Music card with play button
│   │   └── music-data.js         # Music library dataset
│   ├── filters/
│   │   ├── GenreFilter.js        # Genre filter logic
│   │   ├── LanguageFilter.js     # Language filter logic
│   │   └── SingerFilter.js       # Artist/Singer filter logic
│   ├── css/                      # Component stylesheets
│   ├── HomeContent.js            # Home page content
│   ├── ExploreContent.js         # Explore page content
│   ├── ExploreArtist.js          # Artist browse page
│   ├── ExploreGenre.js           # Genre browse page
│   ├── ExploreLang.js            # Language browse page
│   ├── Playbar.js                # Audio control bar
│   └── Sidenav.js                # Navigation sidebar
│
├── public/                        # Static assets
│   ├── music/
│   │   ├── audio/               # MP3 audio files
│   │   └── img/                 # Album cover images
│   ├── buttons/                 # UI button icons
│   ├── explore/                 # Explore section images
│   └── profile-pic/             # User profile images
│
├── package.json                  # Project dependencies
├── jsconfig.json                 # Path aliases (@/*)
├── next.config.mjs              # Next.js configuration
├── postcss.config.mjs           # PostCSS + Tailwind setup
└── eslint.config.mjs            # ESLint configuration
```

## Available Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Main music library with search and filters |
| `/Explore` | Explore Hub | Browse music by different categories |
| `/Explore/Language` | Language Browse | Filter songs by language (Bengali, Hindi, English) |
| `/Explore/Genre` | Genre Browse | Filter songs by genre (Romantic, Sad, Energetic) |
| `/Explore/Artist` | Artist Browse | Filter songs by artist/singer |

## Available Scripts

Run these commands in the project directory:

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint to check code quality
npm run lint

# Run ESLint and fix issues
npm run lint --fix
```

## Usage

### Home Page
1. Browse all available songs in the music library
2. Use the search bar to find songs by name
3. Apply filters (Language, Genre, Singer) to narrow down results
4. Click on any song card to see details and play the track

### Explore Section
Navigate through different discovery paths:
- **By Language** - Browse songs in your preferred language
- **By Genre** - Discover music by mood or style
- **By Artist** - Find all songs from your favorite artists

### Playbar Controls
- ⏯️ **Play/Pause** - Toggle audio playback
- ⏭️ **Next** - Skip to the next song
- ⏮️ **Previous** - Go back to the previous song

## Music Library

The application includes a curated collection of songs featuring artists like:
- Arijit Singh
- Shreya Ghoshal
- And more...

Spanning multiple languages:
- Bengali
- Hindi
- English

Across various genres:
- Romantic
- Sad
- Energetic

## Design Features

- **Dark Theme**: Eye-friendly dark interface with vibrant accents
- **Color Scheme**:
  - Primary: Red accent color
  - Background: Deep black
  - Text: White for readability
- **Typography**: Google Fonts (Geist family) for modern appearance
- **Responsive Layout**: Optimized for desktop and tablet views

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

Potential features for future versions:
- User authentication and playlists
- Song upload functionality
- Advanced search with tags
- Social sharing features
- Lyrics display
- Offline mode
- Mobile app version

## License

This project is not licensed yet.

## Author

Created by **kharajch**

## Support

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.

---

Made with ❤️ for music lovers everywhere
