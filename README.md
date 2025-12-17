# 🎄 Christmas CarolOke 🎤

A festive, interactive website where you can sing along to classic Christmas carols and add your own!

## Features

✨ **5 Pre-loaded Christmas Carols** – Classic songs to get you started  
🎵 **Play Audio & Display Lyrics** – Sing along with real lyrics  
🎲 **Random Song Selector** – Surprise yourself with a random carol  
➕ **Add Your Own Songs** – Create a personalized collection  
💾 **LocalStorage Persistence** – Your custom songs are saved forever  
📱 **Fully Responsive** – Works on desktop, tablet, and mobile  
🎨 **Festive Design** – Beautiful animations and holiday colors  

## Quick Start

1. **Open the website** – Download the files and open `index.html` in your browser
2. **Explore the songs** – See the 5 Christmas carols in the list
3. **Click to play** – Select any song to hear the music and read lyrics
4. **Try random** – Click the "Random Song" button for a surprise
5. **Add your own** – Click "Add Your Song" to create your custom carols
6. **Your songs persist** – Come back later and your additions will still be there

## How It Works

### The Technology Stack
- **HTML5** – Clean, semantic page structure
- **CSS3** – Festive styling with smooth animations
- **Bootstrap 5** – Responsive grid layout
- **Vue.js 3** – Interactive features and data management
- **JSON** – Structured song data
- **LocalStorage** – Browser-based data persistence

### The Data Flow
1. **Load Default Songs** – `data.json` contains 5 Christmas carols
2. **Load Custom Songs** – LocalStorage retrieves any songs you've added
3. **Display in Vue** – Songs appear in the list with play buttons
4. **Interact** – Click, add, remove, or shuffle songs
5. **Save Changes** – New songs are automatically saved to LocalStorage

## File Guide

| File | Purpose |
|------|---------|
| `index.html` | Main page with structure and Vue app container |
| `style.css` | All styling, animations, and responsive design |
| `app.js` | Vue.js logic for interactivity and data management |
| `data.json` | 5 default Christmas carols (title, artist, lyrics, audio URL) |
| `DESIGN_BRIEF.md` | Project planning and design decisions |
| `AI_USAGE_DOCUMENTATION.md` | How AI supported the development |
| `README.md` | This file – project overview |

## The 5 Songs

1. 🎵 **Jingle Bells** – Traditional
2. 🎵 **Silent Night** – Traditional
3. 🎵 **O Come All Ye Faithful** – Traditional
4. 🎵 **Deck the Halls** – Traditional
5. 🎵 **Joy to the World** – Traditional

## Adding Your Own Songs

Click "Add Your Song" and fill in:
- **Song Title** – Name of your carol
- **Artist** – Who performs it
- **Lyrics** – Full text to display
- **Audio URL** – Link to an MP3 or streaming audio

Your songs will appear in the list and be saved automatically!

## Key Interactive Features

### 🎲 Random Song Button
Picks a song at random from your entire collection and plays it.

### ➕ Add Song Form
Modal form for entering song details. Validates all fields before saving.

### 🎵 Play/Stop Controls
- Click a song card to play
- Use the audio player controls to pause, adjust volume, skip ahead
- Click "Stop" to end playback

### 💾 Automatic Saving
Custom songs are saved to your browser's LocalStorage. They'll be there next time you visit!

### 🗑️ Remove Songs
Delete custom songs you've added (default songs are locked).

## Browser Compatibility

Works in modern browsers that support:
- ES6 JavaScript
- LocalStorage API
- HTML5 Audio API
- CSS Grid & Flexbox

**Tested on:** Chrome 120+, Firefox 121+, Safari 17+, Edge 120+

## Customization Ideas

Want to personalize it more? Try:
- **Change the colors** – Edit CSS variables in `style.css`
- **Add more default songs** – Add entries to `data.json`
- **New features** – Modify `app.js` to add search, favorites, or themes
- **New styling** – Customize animations and layouts in `style.css`

## Project Documentation

- **Design Brief:** See `DESIGN_BRIEF.md` for project goals and planning
- **AI Documentation:** See `AI_USAGE_DOCUMENTATION.md` for how AI supported development
- **Code Comments:** Check `app.js` for detailed method explanations

## Future Ideas 🚀

- Dark mode toggle
- Search songs by title/artist
- Favorite songs collection
- Playback speed control
- Lyrics highlighting (sync with music)
- Karaoke scoring system
- Multiple language support

## Credits

- **Music & Audio:** Mixkit free sound library
- **Framework:** Vue.js 3, Bootstrap 5
- **Traditional Carols:** Public domain Christmas songs
- **Team:** You & Hank

---

**Enjoy singing! 🎄🎤✨**

Made with ❤️ for the holiday season
