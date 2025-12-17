# Student Design Brief
## Christmas CarolOke

**Project Date:** December 2025  
**Team:** You & Hank  

---

## Project Title
**Christmas CarolOke** 🎄🎤

---

## Design Challenge Summary

We want to create a whimsical, festive, and fun website where users can sing along to Christmas carols. The site provides an interactive karaoke experience with pre-loaded carols and the ability to add custom songs. Users can click buttons to randomly select songs, view lyrics while music plays, and build their own carol collection. The goal is to capture the joy and playfulness of holiday singing in a visually engaging, accessible digital space.

---

## Team Roles

- **You:** Design, UI/UX, Layout, and Styling
- **Hank:** Vue.js functionality, JavaScript interactivity, and data management

---

## Design Goals

1. **Festive Visual Theme** – Use Christmas colors (red, green, gold) with animated elements to create a holiday atmosphere
2. **Intuitive User Interface** – Simple, clear buttons and controls that anyone can use immediately without confusion
3. **Responsive Design** – Website works smoothly on desktop, tablet, and mobile devices
4. **Engaging Interactions** – Smooth animations, hover effects, and visual feedback make the experience feel polished
5. **Accessible & Readable** – Clear typography, good contrast, and easy-to-read lyrics display
6. **Fast & Smooth Performance** – Quick loading times and responsive interactions without lag

---

## Content and Data Plan

### Data Structure (JSON)
Each song in our collection is stored with these fields:
- **id** – Unique identifier for tracking default vs. custom songs
- **title** – Name of the song
- **artist** – Who performed/wrote it (e.g., "Traditional")
- **lyrics** – Full lyrics for display on screen (formatted with line breaks)
- **audioUrl** – Link to the audio file (MP3 or streaming URL)

### Default Songs (5 Christmas Carols)
1. Jingle Bells
2. Silent Night
3. O Come All Ye Faithful
4. Deck the Halls
5. Joy to the World

### Custom Songs
Users can add their own carols with the same data structure. Custom songs are saved to the browser's LocalStorage so they persist between visits.

---

## Vue Interactivity Plan

### Interactive Feature 1: Random Song Selector
- **How It Works:** User clicks "Random Song" button → Vue randomly selects a song from the collection → Audio plays with lyrics displayed
- **User Experience Benefit:** Adds an element of surprise and fun; perfect for group singing without deciding what to sing

### Interactive Feature 2: Add Your Own Song
- **How It Works:** User clicks "Add Your Song" → Form appears with fields (title, artist, lyrics, audio URL) → Validated form data is saved to collection and LocalStorage → Custom song appears in the song list
- **User Experience Benefit:** Allows personalization; users can add family songs, modern remixes, or funny versions

### Interactive Feature 3: Play/Stop Controls
- **How It Works:** Click song card to play → Audio player displays with controls → Stop button pauses and resets playback
- **User Experience Benefit:** Gives users full control over their karaoke experience

### Additional Interactive Features
- **Song Cards with Active State** – Visual indicator shows which song is currently playing
- **Remove Custom Songs** – Users can delete songs they've added (but cannot delete the original 5)
- **Audio Controls** – Built-in HTML5 audio player with play/pause/volume/progress

---

## New Concept Exploration: LocalStorage Data Persistence

### What We're Implementing:
Browser LocalStorage allows us to save custom songs so they remain available even after the user closes and reopens the website.

### Integration:
- When a user adds a new song, it's saved to `localStorage.setItem('customCarols', JSON.stringify(customSongs))`
- When the page loads, we retrieve saved songs with `localStorage.getItem('customCarols')`
- Custom songs (ID > 5) are stored separately from the default songs in the JSON file
- This creates a seamless experience where the user's personalized collection "remembers" their additions

### User Value:
Users can build their own carol library without losing their additions on page refresh. It's like creating a personal playlist that lives in their browser.

---

## AI Integration Plan

### 1. CSS Animations & Styling
**What We Asked:** How to create smooth festive animations for cards, buttons, and gradients  
**How We Adapted:** Tested all animations in browsers, refined timing (0.6s smooth header animation), adjusted color opacity for readability, made hover effects subtle and professional

### 2. Vue.js Architecture & Methods
**What We Asked:** How to structure Vue data, manage song state, handle form submission  
**How We Adapted:** Tested each method individually, enhanced error handling for audio playback, improved random selection logic, added user confirmation messages

### 3. LocalStorage Implementation
**What We Asked:** Best practices for saving/loading JSON data to browser storage  
**How We Adapted:** Added try-catch error handling, separated default from custom songs, optimized load order, tested persistence across sessions

---

## Success Criteria

### Criterion 1: Random Song Selection Works ✓
**Indicator:** Clicking "Random Song" button consistently plays a different song from the collection with no errors

### Criterion 2: Audio & Lyrics Sync ✓
**Indicator:** When a song plays, the audio plays and lyrics display simultaneously, allowing users to sing along

### Criterion 3: Add & Persist Custom Songs ✓
**Indicator:** Users can add new carols through the form; songs appear in the list; custom songs still exist after page refresh

### Bonus Success Criteria:
- ✓ Responsive design works on phones, tablets, and desktops
- ✓ Festive visual theme with smooth animations
- ✓ All buttons and controls are intuitive and clearly labeled
- ✓ No console errors or broken functionality

---

## Technical Implementation Notes

### Technologies Used:
- **HTML5** – Semantic markup for accessibility
- **CSS3** – Custom styling with animations, gradients, and responsive design
- **Bootstrap 5** – Grid system and responsive utilities
- **Vue.js 3** – Reactive data binding, component logic, state management
- **JSON** – Structured song data
- **LocalStorage API** – Browser data persistence
- **HTML5 Audio API** – Audio playback controls

### File Structure:
```
Christmas CarolOke/
├── index.html           (Main page with Vue app container)
├── style.css            (Custom styling and animations)
├── app.js               (Vue.js application logic)
├── data.json            (5 default Christmas carols)
└── AI_USAGE_DOCUMENTATION.md (How AI supported the project)
```

### Key Vue Methods:
- `loadSongs()` – Fetch songs from data.json
- `playSong(song)` – Play selected song and display lyrics
- `playRandomSong()` – Select and play a random song
- `stopSong()` – Pause and reset current song
- `addSong()` – Validate form and save new song to collection + localStorage
- `removeSong(id)` – Delete custom songs
- `saveToLocalStorage()` – Persist custom songs
- `loadLocalStorage()` – Retrieve saved songs on page load

---

## Accessibility Considerations

- Clear, readable font sizes for lyrics
- High contrast colors (dark background with light text)
- Semantic HTML for screen readers
- Proper form labels with `for` attributes
- Keyboard-accessible buttons
- Audio player with built-in controls
- Responsive text sizing on mobile

---

## Future Enhancement Ideas

- Dark mode toggle
- Search/filter songs by title or artist
- User favorites system
- Volume control
- Playback speed adjustment
- Song lyrics highlighting (sync with music timing)
- Karaoke scoring system
- Multi-language lyrics support
- Social sharing of custom carols

