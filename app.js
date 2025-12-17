const { createApp } = Vue;

createApp({
    data() {
        return {
            songs: [],
            currentSong: null,
            showAddForm: false,
            newSong: {
                title: '',
                artist: '',
                lyrics: '',
                audioUrl: ''
            },
            nextId: 7,
            currentTime: 0,
            highlightedLineIndex: -1
        };
    },
    mounted() {
        this.loadSongs();
        this.loadLocalStorage();
    },
    methods: {
        loadSongs() {
            // Load default songs from JSON file
            fetch('data.json')
                .then(response => response.json())
                .then(data => {
                    this.songs = data;
                    // Find the highest ID to continue from there
                    if (data.length > 0) {
                        this.nextId = Math.max(...data.map(song => song.id)) + 1;
                    }
                })
                .catch(error => console.error('Error loading songs:', error));
        },
        playSong(song) {
            this.currentSong = song;
            this.$nextTick(() => {
                const audio = this.$refs.audioPlayer;
                if (audio) {
                    audio.src = song.audioUrl;
                    audio.play().catch(error => {
                        console.log('Audio play error:', error);
                        alert('Could not play audio. Please check the audio URL.');
                    });
                }
            });
        },
        updateHighlight() {
            const audio = this.$refs.audioPlayer;
            if (!audio || !this.currentSong) return;
            
            this.currentTime = audio.currentTime;
            
            // Use song timings if available, otherwise calculate based on progress
            if (this.currentSong.timings && this.currentSong.timings.length > 0) {
                const lyrics = this.currentSong.lyrics.split('\n');
                let lineIndex = 0;
                
                // Find which line we're on based on timings
                for (let i = 0; i < this.currentSong.timings.length; i++) {
                    if (audio.currentTime >= this.currentSong.timings[i]) {
                        lineIndex = i;
                    } else {
                        break;
                    }
                }
                
                this.highlightedLineIndex = Math.min(lineIndex, lyrics.length - 1);
            } else {
                // Fallback to progress-based highlighting
                const lines = this.currentSong.lyrics.split('\n');
                const totalDuration = audio.duration || 0;
                if (totalDuration > 0) {
                    const progress = audio.currentTime / totalDuration;
                    const lineIndex = Math.floor(progress * lines.length);
                    this.highlightedLineIndex = Math.min(lineIndex, lines.length - 1);
                }
            }
        },
        playRandomSong() {
            if (this.songs.length === 0) {
                alert('No songs available!');
                return;
            }
            const randomIndex = Math.floor(Math.random() * this.songs.length);
            this.playSong(this.songs[randomIndex]);
        },
        stopSong() {
            const audio = this.$refs.audioPlayer;
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
            this.currentSong = null;
            this.highlightedLineIndex = -1;
        },
        songEnded() {
            this.currentSong = null;
        },
        addSong() {
            if (!this.newSong.title || !this.newSong.artist || !this.newSong.lyrics || !this.newSong.audioUrl) {
                alert('Please fill in all fields!');
                return;
            }

            const song = {
                id: this.nextId++,
                title: this.newSong.title,
                artist: this.newSong.artist,
                lyrics: this.newSong.lyrics,
                audioUrl: this.newSong.audioUrl
            };

            this.songs.push(song);
            this.saveToLocalStorage();
            
            // Reset form
            this.newSong = {
                title: '',
                artist: '',
                lyrics: '',
                audioUrl: ''
            };
            this.showAddForm = false;
            alert('Song added successfully! 🎵');
        },
        removeSong(id) {
            if (confirm('Are you sure you want to delete this song?')) {
                this.songs = this.songs.filter(song => song.id !== id);
                this.saveToLocalStorage();
                if (this.currentSong && this.currentSong.id === id) {
                    this.stopSong();
                }
            }
        },
        isDefaultSong(id) {
            // Default songs have IDs 1-6
            return id <= 6;
        },
        saveToLocalStorage() {
            // Save custom songs (ID > 6) to localStorage
            const customSongs = this.songs.filter(song => song.id > 6);
            localStorage.setItem('customCarols', JSON.stringify(customSongs));
        },
        loadLocalStorage() {
            // Load custom songs from localStorage
            const saved = localStorage.getItem('customCarols');
            if (saved) {
                try {
                    const customSongs = JSON.parse(saved);
                    this.songs = [...this.songs, ...customSongs];
                    // Update nextId based on loaded songs
                    if (this.songs.length > 0) {
                        this.nextId = Math.max(...this.songs.map(song => song.id)) + 1;
                    }
                } catch (error) {
                    console.error('Error loading from localStorage:', error);
                }
            }
        }
    }
}).mount('#app');
