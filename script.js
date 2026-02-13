
// Complete Jr NTR Filmography with Popular Songs
// ADD YOUR MP3 FILE PATHS HERE - Replace "songs/filename.mp3" with your actual file paths
const movies = [
    {
        title: "Ninnu Choodalani",
        year: 2001,
        director: "V.R. Pratap",
        songs: [
            { name: "Campuslo Kaaletti", file: "Songs/CampusloKaaletti.mp3" },
            { name: "Echota Nenunna", file: "Songs/EchotaNenunna.mp3" },
            { name: " Oopirochina Bapu", file: "Songs/OopirochinaBapuB.mp3" }
        ]
    },
    {
        title: "Student No. 1",
        year: 2001,
        director: "S.S. Rajamouli",
        songs: [
            { name: "Yevetti", file: "Songs/YevettiChesad0.mp3" },
            { name: "Paddanandi", file: "Songs/Paddanandi.mp3" },
            { name: "Okariki Okarye", file: "Songs/OkarikiOkarye.mp3" },
            { name: "Kastha Ninu", file: "Songs/KasthaNinu.mp3" },
            { name: "Kuchipudi", file: "Songs/Kuchipudi.mp3" },
            { name: "Ekkado Putti", file: "Songs/EkkadoPutti.mp3" }

        ]
    },
    {
        title: "Subbu",
        year: 2001,
        director: "Suresh Varma",
        songs: [
            { name: "Hari Hara", file: "Songs/HariHara.mp3" },
            { name: "LOVE Pasayyanu", file: "Songs/LOVEPasayyanu.mp3" },
            { name: "Masthu Masthu", file: "Songs/MasthuMasthu.mp3" },
            { name: " Naa Kosame", file: "Songs/NaaKosame.mp3" },
            { name: " Miva Miva", file: "Songs/VivaViva.mp3" },
            { name: "Janani Janmabhoomini", file: "Songs/ananiJanmabhoomini.mp3" }
        ]
    },
    {
        title: "Aadi",
        year: 2002,
        director: "V.V. Vinayak",
        songs: [
            { name: "Ayyo Rama", file: "Songs/AyyoRama-.mp3" },
            { name: " Chiki Chiki", file: "Songs/ChikiChiki.mp3" },
            { name: " Nee Navvula", file: "Songs/NeeNavvula.mp3" },
            { name: "Pattu Okato Sari", file: "Songs/PattuOkatoSari.mp3" },
            { name: "Sunnunda", file: "Songs/Sunnunda.mp3" },
            { name: "Toli Pilupe", file: "Songs/ToliPilupe.mp3" }
        ]
    },
    {
        title: "Allari Ramudu",
        year: 2002,
        director: "B. Gopal",
        songs: [
            { name: " Boddunu Choodayyo", file: "Songs/BoddunuChoodayyo.mp3" },
            { name: " Chelliya Chelliye", file: "Songs/ChelliyaChelliye.mp3" },
            { name: "  Jadaku Jada", file: "Songs/JadakuJada.mp3" },
            { name: " Oppula Kuppa", file: "Songs/OppulaKuppa.mp3" },
            { name: "  Renduvela Rendu Varaku", file: "Songs/RenduvelaRenduVaraku.mp3" },
            { name: " Rukmini", file: "Songs/RenduvelaRenduVaraku.mp3" }
        ]
    },
    {
        title: "Naaga",
        year: 2003,
        director: "D.K. Suresh",
        songs: [
            { name: "Dhool Anakapalli ", file: "Songs/DhoolAnakapalli.mp3" },
            { name: "Entha Chinna ", file: "Songs/EnthaChinnaMudhu.mp3" },
            { name: "Mecarina Mecarina", file: "Songs/MecarinaMecarina.mp3" },
            { name: " Megham Karigenu", file: "Songs/MeghamKarigenu.mp3" },
            { name: "Nayudore Pilla", file: "Songs/NayudorePilla.mp3" },
            { name: "Oka Konte Pillane", file: "Songs/OkaKontePillane.mp3" }
        ]
    },
    {
        title: "Simhadri",
        year: 2003,
        director: "S.S. Rajamouli",
        songs: [
            { name: "Ammaina Nannaina", file: "Songs/AmmainaNannaina.mp3" },
            { name: "Cheema Cheema", file: "Songs/CheemaCheema.mp3" },
            { name: "Chinnadamme Cheekulu", file: "Songs/ChinnadammeCheekulu.mp3" },
            { name: " Chiraku Anuko", file: "Songs/ChirakuAnuko.mp3" },
            { name: "Nannedo Seyyamaku", file: "Songs/NannedoSeyyamaku.mp3" },
            { name: " Nuvvu Whistlesthe", file: "Songs/NuvvuWhistlesthe.mp3" },
            { name: "Singamalai", file: "Songs/Singamalai.mp3" }
        ]
    },
    {
        title: "Andhrawala",
        year: 2004,
        director: "Puri Jagannadh",
        songs: [
            { name: " Gitchi Gitchi", file: "Songs/GitchiGitchi.mp3" },
            { name: "Kokkokola missa", file: "Songs/Kokkokolamissa.mp3" },
            { name: "Malleteegaroi", file: "Songs/Malleteegaroi.mp3" },
            { name: "Nairey Nairey", file: "Songs/Nairey Nairey.mp3" },
            { name: "Nipputunakai", file: "Songs/Nipputunakai.mp3" },
            { name: "Unga Unga", file: "Songs/UngaUnga.mp3" }

        ]
    },
    {
        title: "Samba",
        year: 2004,
        director: "V.V. Vinayak",
        songs: [
            { name: " Dam Damare Dam", file: "Songs/DamDamareDam.mp3" },
            { name: " Kita Kitalu Pettamak", file: "Songs/KitaKitaluPettamaku.mp3" },
            { name: "Luxemburg Lux", file: "Songs/LuxemburgLux.mp3" },
            { name: "Namasthe Namasthe", file: "Songs/NamastheNamasthe.mp3" },
            { name: " Nandamuri Chandamama", file: "Songs/NandamuriChandamama.mp3" },
            { name: "Tagilinadi Rabba", file: "Songs/TagilinadiRabba.mp3" }
        ]
    },
    {
        title: "Naa Alludu",
        year: 2005,
        director: "Vara Mullapudi",
        songs: [
            { name: "Andhala bommaro", file: "Songs/Andhala bommaroNaa Alludu.mp3" },
            { name: " En Peru Murugan", file: "Songs/En Peru Murugan-Naa Alludu.mp3" },
            { name: "Kandi Chenu Kada", file: "Songs/Kandi Chenu Kada-Naa Alludu.mp3" },
            { name: " Nadumu Chusthe", file: "Songs/Nadumu Chusthe-Naa Alludu.mp3" },
            { name: "Pattuko Pattuko", file: "Songs/Pattuko Pattuko-Naa Alludu.mp3" },
            { name: "Pilla Chuste", file: "Songs/Pilla Chuste-Naa Alludu.mp3" },
            { name: " Sayya Sayyare", file: "Songs/SayyaSayyare-Naa Alludu.mp3" }
        ]
    },
    {
        title: "Narasimhudu",
        year: 2005,
        director: "B. Gopal",
        songs: [
            { name: "Krishnamurariki", file: "Songs/Krishnamurariki-Narasimhudu.mp3" },
            { name: " Muddoche Kopalu", file: "Songs/Muddoche Kopalu-Narasimhudu.mp3" },
            { name: "Muddula Gopala", file: "Songs/Muddula Gopala-Narasimhudu.mp3" },
            { name: "Rajamandrike", file: "Songs/Rajamandrike-Narasimhudu.mp3" },
            { name: "Singu Singu", file: "Songs/Singu Singu-Narasimhudu.mp3" },
            // { name: "Slokam", file: "Songs/Slokam-Narasimhudu.mp3" },
            { name: " Yeluko Nayaka", file: "Songs/Yeluko Nayaka-Narasimhudu.mp3" }
        ]
    },
    {
        title: "Ashok",
        year: 2006,
        director: "Surender Reddy",
        songs: [
            { name: "Gola Gola", file: "Songs/Gola Gola-Ashok.mp3" },
            { name: "Jabiliki", file: "Songs/Jabiliki-Ashok.mp3" },
            { name: "Muntajmahalu", file: "Songs/Muntajmahalu-Ashok.mp3" },
            { name: "Nuvvasalu.", file: "Songs/Nuvvasalu-Ashok.mp3" },
            { name: "Okachinni", file: "Songs/Okachinni-Ashok.mp3" },
            { name: "Yekantanga", file: "Songs/Yekantanga-Ashok.mp3" }
        ]
    },
    {
        title: "Rakhi",
        year: 2006,
        director: "Krishna Vamsi",
        songs: [
            { name: "Kallalo Kalagni", file: "Songs/Kallalo Kalagni-Rakhi.mp3" },
            { name: " Ninnu Choosthe", file: "Songs/Ninnu Choosthe-Rakhi.mp3" },
            { name: " Rakhee Rakhee", file: "Songs/Rakhee Rakhee-Rakhi.mp3" },
            { name: " Rangu Rabba", file: "Songs/Rangu Rabba Rabba-Rakhi.mp3" },
            { name: " Vastava Vastava", file: "Songs/Vastava Vastava-Rakhi.mp3" },
            { name: " Zara Zara", file: "Songs/Zara Zara-Rakhi.mp3" }

        ]
    },
    {
        title: "Yamadonga",
        year: 2007,
        director: "S.S. Rajamouli",
        songs: [
            { name: "Naachore", file: "Songs/Naachore-Yamadonga.mp3" },
            { name: " Nuvvu Muttukunte", file: "Songs/Nuvvu Muttukunte-Yamadonga.mp3" },
            { name: "Nunugu Meesaaloda", file: "Songs/Nunugu Meesaaloda-Yamadonga.mp3" },
            { name: "Young Yama", file: "Songs/Young Yama-Yamadonga.mp3" },
            { name: "O Lammi Thikkaregind", file: "Songs/O Lammi Thikkareginda-Yamadonga.mp3" },
            { name: " Rabbaru Gaajulu", file: "Songs/Rabbaru Gaajulu-Yamadonga.mp3" }
        ]
    },
    {
        title: "Kantri",
        year: 2008,
        director: "Meher Ramesh",
        songs: [
            { name: "123 Nenoka Kantri", file: "Songs/123 Nenoka Kantri-Kantri.mp3" },
            { name: "Ammaho", file: "Songs/Ammaho-Kantri.mp3" },
            { name: "Janthar Manthar", file: "Songs/Janthar Manthar-Kantri.mp3" },
            { name: "Raamare", file: "Songs/Raamare-Kantri.mp3" },
            { name: "Vayasunamy", file: "Songs/Vayasunamy-Kantri.mp3" }
        ]
    },
    {
        title: "Adhurs",
        year: 2010,
        director: "V.V. Vinayak",
        songs: [
            { name: "Shiva Shambho", file: "Songs/Shiva Shambho-Adhurs.mp3" },
            { name: "Chandrakala", file: "Songs/Chandrakala-Adhurs.mp3" },
            { name: "Chary", file: "Songs/Chary-Adhurs.mp3" },
            { name: "Neethone", file: "Songs/Neethone-Adhurs.mp3" },
            // { name: "Pilla Naavalla Kadhu", file: "songs/Adhurs-NeeKallalona.mp3" },
            { name: " Assalaam Valekhum", file: "Songs/Assalaam Valekhum-Adhurs.mp3" }
        ]
    },
    {
        title: "Brindavanam",
        year: 2010,
        director: "Vamsi Paidipally",
        songs: [
            { name: "Yuvakula", file: "Songs/Yuvakula-Brindavanam.mp3" },
            { name: "Eyi Raja", file: "Songs/Eyi Raja-Brindavanam.mp3" },
            { name: "Nijamena", file: "Songs/Nijamena-Brindavanam.mp3" },
            { name: "Chinnadho", file: "Songs/Chinnadho-Brindavanam.mp3" },
            { name: "Oopirage", file: "Songs/Oopirage-Brindavanam.mp3" },
            { name: "Vachadura", file: "Songs/Vachadura-Brindavanam.mp3" }


        ]
    },
    {
        title: "Shakti",
        year: 2011,
        director: "Meher Ramesh",
        songs: [
            { name: "Thaliya Thaliya", file: "Songs/Thaliya Thaliya-Shakti.mp3" },
            { name: "Surro Surra", file: "Songs/Surro Surra-Shakti.mp3" },
            { name: "Prema Desham", file: "Songs/Prema Desham-Shakti.mp3" },
            { name: "Yamaga Unde", file: "Songs/Yamaga Unde-Shakti.mp3" },
            { name: "Mahishasura Mardhini", file: "Songs/Mahishasura Mardhini-Shakti.mp3" }
        ]
    },
    {
        title: "Oosaravelli",
        year: 2011,
        director: "Surender Reddy",
        songs: [
            { name: "Sri Anjaneyam", file: "Songs/Sri Anjaneyam-Oosaravelli.mp3" },
            { name: "Nenante Naaku", file: "Songs/Nenante Naaku-Oosaravelli.mp3" },
            { name: "Love Ante Caring", file: "Songs/Love Ante Caring-Oosaravelli.mp3" },
            { name: "Niharika", file: "Songs/Niharika-Oosaravelli.mp3" },
            { name: " Dandiya India", file: "Songs/Dandiya India-Oosaravelli.mp3" },
            { name: "Yelango Yelango", file: "Songs/Yelango Yelango-Oosaravelli.mp3" },
            { name: "Brathakaali", file: "Songs/Brathakaali-Oosaravelli.mp3" }
        ]
    },
    {
        title: "Dhammu",
        year: 2012,
        director: "Boyapati Srinu",
        songs: [
            { name: " Oh Lilli", file: "Songs/Oh Lilli-Dhammu.mp3" },
            { name: "Raja Vasireddy", file: "Songs/Raja Vasireddy-Dhammu.mp3" },
            { name: "Ruler", file: "Songs/Ruler-Dhammu.mp3" },
            { name: "Dhammu", file: "Songs/Dhammu-Dhammu.mp3" },
            { name: "Vaasthu Bagundhe", file: "Songs/Vaasthu Bagundhe-Dhammu.mp3" },


        ]
    },
    {
        title: "Baadshah",
        year: 2013,
        director: "Srinu Vaitla",
        songs: [
            { name: "Sairo Sairo", file: "Songs/Sairo Sairo-Baadshah.mp3" },
            { name: "Diamond Girl", file: "Songs/Diamond Girl-Baadshah.mp3" },
            { name: "Welcome Kanakku", file: "Songs/Welcome Kanakam-Baadshah.mp3" },
            { name: "Banthi Poola Janaki", file: "Songs/Banthi Poola Janaki-Baadshah.mp3" },
            { name: "Baadshah", file: "Songs/Baadshah-Baadshah.mp3" },
            { name: "Rangoli Rangoli", file: "Songs/Rangoli Rangoli-Baadshah.mp3" }
        ]
    },
    {
        title: "Ramayya Vasthavayya",
        year: 2013,
        director: "Harish Shankar",
        songs: [
            { name: "O Lailaa", file: "Songs/O Lailaa-Ramayya Vasthavayya.mp3" },
            { name: "Pandaga Chesko", file: "Songs/Pandaga Chesko-Ramayya Vasthavayya.mp3" },
            { name: "Jabilli", file: "Songs/Jabilli-Ramayya Vasthavayya.mp3" },
            { name: "Kurrayeedu", file: "Songs/Kurrayeedu-Ramayya Vasthavayya.mp3" },
            { name: "Neneppudaina", file: "Songs/Neneppudaina-Ramayya Vasthavayya.mp3" },
            { name: "Idhi Ranarangam", file: "Songs/Idhi Ranarangam-Ramayya Vasthavayya.mp3" }
        ]
    },
    {
        title: "Rabhasa",
        year: 2014,
        director: "Santosh Srinivas",
        songs: [
            { name: "Rakasi Rakasi", file: "Songs/Rakaasi Rakaasi-Rabhasa.mp3" },
            { name: " Hawa Hawa", file: "Songs/Hawa Hawa-Rabhasa.mp3" },
            { name: "Garam Garam Chilaka", file: "Songs/Garam Garam Chilaka-Rabhasa.mp3" },
             { name: "Maar Salaam", file: "Songs/Maar Salaam-Rabhasa.mp3" },
              { name: "Dam Damare", file: "Songs/Dam Damare-Rabhasa.mp3" }
        ]
    },
    {
        title: "Temper",
        year: 2015,
        director: "Puri Jagannadh",
        songs: [
            { name: "Ittage Recchipodham", file: "Songs/Ittage Recchipodham-Temper.mp3" },
            { name: "One More Time", file: "Songs/One More Time-Temper.mp3" },
            { name: " Choolenge Aasma", file: "Songs/ChoolengeAasma-Temper.mp3" },
             { name: " Temper", file: "Songs/Temper-Temper.mp3" },
              { name: " Devudaa", file: "Songs/Devuda-Temper.mp3" }
        ]
    },
    {
        title: "Nannaku Prematho",
        year: 2016,
        director: "Sukumar",
        songs: [
            { name: " Don’t Stop", file: "Songs/3- Dont Stop-Nannaku Prematho.mp3" },
            { name: "Follow Follow", file: "Songs/1- Follow Follow-Nannaku Prematho.mp3" },
            { name: "Naa Manasu Neelo", file: "Songs/2-Naa Manasu Nannaku Prematho.mp3" },
            { name: "Love Me Again", file: "Songs/4-Love Me Again-Nannaku Prematho.mp3" },
            { name: " Love Dhebba", file: "Songs/5-Love Dhebba-Nannaku Prematho.mp3" },
            { name: "  Nannaku Title", file: "Songs/6-Nannaku-Nannaku Prematho.mp3" }
        ]
    },
    {
        title: "Janatha Garage",
        year: 2016,
        director: "Koratala Siva",
        songs: [
            { name: "Jayaho Janatha", file: "Songs/JanathaGarage-JayahoJanatha.mp3" },
            { name: "Pakka Local", file: "Songs/JanathaGarage-PakkaLocal.mp3" },
            { name: "Pranaamam", file: "Songs/JanathaGarage-Pranaamam.mp3" }
        ]
    },
    {
        title: "Jai Lava Kusa",
        year: 2017,
        director: "Bobby",
        songs: [
            { name: "Swing Zara", file: "Songs/JaiLavaKusa-SwingZara.mp3" },
            { name: "Raavana", file: "Songs/JaiLavaKusa-Raavana.mp3" },
            { name: "Nee Kallalona", file: "Songs/JaiLavaKusa-NeeKallalona.mp3" },
            { name: "Enduko Emo", file: "Songs/JaiLavaKusa-EndukoEmo.mp3" }
        ]
    },
    {
        title: "Aravinda Sametha",
        year: 2018,
        director: "Trivikram Srinivas",
        songs: [
            { name: "Anaganaganaga", file: "Songs/AravindaSametha-Anaganaganaga.mp3" },
            { name: "Peniviti", file: "Songs/AravindaSametha-Peniviti.mp3" },
            { name: "Reddy Ikkada Soodu", file: "Songs/AravindaSametha-ReddyIkkadaSoodu.mp3" },
            { name: "Yedalo Yedalo", file: "Songs/AravindaSametha-YedaloYedalo.mp3" }
        ]
    },
    {
        title: "RRR",
        year: 2022,
        director: "S.S. Rajamouli",
        songs: [
            { name: "Naatu Naatu", file: "Songs/RRR-NaatuNaatu.mp3" },
            { name: "Komuram Bheemudo", file: "Songs/RRR-KomuramBheemudo.mp3" },
            { name: "Dosti", file: "Songs/RRR-Dosti.mp3" },
            { name: "Etthara Jenda", file: "Songs/RRR-EttharaJenda.mp3" },
            { name: "Raamam Raaghavam", file: "Songs/RRR-RaamamRaaghavam.mp3" }
        ]
    },
    {
        title: "Devara Part 1",
        year: 2024,
        director: "Koratala Siva",
        songs: [
            { name: "Fear Song", file: "Songs/Devara-FearSong.mp3" },
            { name: "Chuttamalle", file: "Songs/Devara-Chuttamalle.mp3" },
            { name: "Daavudi", file: "Songs/Devara-Dheevara.mp3" },
            { name: "Ayudha Pooja", file: "Songs/Devara-AyudhaPooja.mp3" }
        ]
    }
];

let currentFilter = 'all';
let currentSearch = '';
let currentSongIndex = -1;
let currentMovieIndex = -1;
let isPlaying = false;

// Audio player element
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');

// Set initial volume
audioPlayer.volume = 0.7;

// Audio event listeners
audioPlayer.addEventListener('loadedmetadata', function () {
    durationDisplay.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener('timeupdate', function () {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.setProperty('--progress', progress + '%');
    progressBar.querySelector('::before') || (progressBar.style.background = `linear-gradient(to right, var(--gold) ${progress}%, rgba(255,255,255,0.1) ${progress}%)`);
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

audioPlayer.addEventListener('ended', function () {
    nextSong();
});

audioPlayer.addEventListener('error', function () {
    console.log('Audio file not found. Make sure MP3 file exists in the songs folder.');
});

// Volume control
volumeSlider.addEventListener('input', function () {
    audioPlayer.volume = this.value / 100;
});

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function getSongFilePath(movieTitle, songName) {
    // Clean up title and song name for file path
    const cleanMovie = movieTitle.replace(/[^a-zA-Z0-9]/g, '');
    const cleanSong = songName.replace(/[^a-zA-Z0-9]/g, '');
    return `songs/${cleanMovie}-${cleanSong}.mp3`;
}

function renderMovies() {
    const grid = document.getElementById('moviesGrid');
    const loading = document.getElementById('loading');

    let filteredMovies = movies;

    // Apply decade filter
    if (currentFilter !== 'all') {
        const [start, end] = currentFilter.split('-').map(Number);
        filteredMovies = filteredMovies.filter(m => m.year >= start && m.year <= end);
    }

    // Apply search filter
    if (currentSearch) {
        filteredMovies = filteredMovies.filter(m =>
            m.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            m.songs.some(s => s.name.toLowerCase().includes(currentSearch.toLowerCase()))
        );
    }

    loading.style.display = 'none';

    if (filteredMovies.length === 0) {
        grid.innerHTML = '<div class="no-results">No movies found matching your criteria</div>';
        return;
    }

    grid.innerHTML = filteredMovies.map((movie, movieIdx) => {
        const actualMovieIndex = movies.indexOf(movie);
        return `
                <div class="movie-card" style="animation-delay: ${movieIdx * 0.1}s">
                    <span class="movie-year">${movie.year}</span>
                    <h2 class="movie-title">${movie.title}</h2>
                    <p class="movie-director">Directed by ${movie.director}</p>
                    <div class="songs-list">
                        <div class="songs-header">🎵 Songs (${movie.songs.length})</div>
                        ${movie.songs.map((song, songIdx) => `
                            <div class="song-item" id="song-${actualMovieIndex}-${songIdx}">
                                <span class="song-name">${song.name}</span>
                                <button class="play-btn" onclick="playSong(${actualMovieIndex}, ${songIdx})" id="btn-${actualMovieIndex}-${songIdx}">▶</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
    }).join('');

    // Update total movies stat
    document.getElementById('totalMovies').textContent = movies.length;

    // Update current playing song display if any
    if (currentMovieIndex !== -1 && currentSongIndex !== -1) {
        updatePlayingState();
    }
}

function playSong(movieIdx, songIdx) {
    currentMovieIndex = movieIdx;
    currentSongIndex = songIdx;

    const movie = movies[movieIdx];
    const song = movie.songs[songIdx];

    // Update UI
    document.getElementById('playerSong').textContent = song.name;
    document.getElementById('playerMovie').textContent = `${movie.title} (${movie.year})`;
    document.getElementById('nowPlaying').classList.add('active');

    // Load and play audio
    audioPlayer.src = song.file;
    audioPlayer.play().then(() => {
        isPlaying = true;
        playPauseBtn.textContent = '⏸';
        updatePlayingState();
    }).catch(error => {
        console.log('Could not play audio:', error);
        alert(`Audio file not found: ${song.file}\n\nPlease add the MP3 file to the correct location.`);
    });
}

function updatePlayingState() {
    // Remove all playing classes
    document.querySelectorAll('.song-item').forEach(item => item.classList.remove('playing'));
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.classList.remove('playing');
        btn.textContent = '▶';
    });

    // Add playing class to current song
    if (currentMovieIndex !== -1 && currentSongIndex !== -1) {
        const songItem = document.getElementById(`song-${currentMovieIndex}-${currentSongIndex}`);
        const playBtn = document.getElementById(`btn-${currentMovieIndex}-${currentSongIndex}`);

        if (songItem) songItem.classList.add('playing');
        if (playBtn) {
            playBtn.classList.add('playing');
            playBtn.textContent = isPlaying ? '⏸' : '▶';
        }
    }
}

function togglePlay() {
    if (currentMovieIndex === -1) return;

    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.textContent = '▶';
    } else {
        audioPlayer.play();
        isPlaying = true;
        playPauseBtn.textContent = '⏸';
    }
    updatePlayingState();
}

function nextSong() {
    if (currentMovieIndex === -1) return;

    const movie = movies[currentMovieIndex];

    if (currentSongIndex < movie.songs.length - 1) {
        playSong(currentMovieIndex, currentSongIndex + 1);
    } else if (currentMovieIndex < movies.length - 1) {
        playSong(currentMovieIndex + 1, 0);
    } else {
        playSong(0, 0);
    }
}

function previousSong() {
    if (currentMovieIndex === -1) return;

    if (currentSongIndex > 0) {
        playSong(currentMovieIndex, currentSongIndex - 1);
    } else if (currentMovieIndex > 0) {
        const prevMovie = movies[currentMovieIndex - 1];
        playSong(currentMovieIndex - 1, prevMovie.songs.length - 1);
    } else {
        const lastMovie = movies[movies.length - 1];
        playSong(movies.length - 1, lastMovie.songs.length - 1);
    }
}

function seekSong(event) {
    if (!audioPlayer.src) return;

    const progressBar = event.currentTarget;
    const clickX = event.offsetX;
    const width = progressBar.offsetWidth;
    const percentage = clickX / width;
    audioPlayer.currentTime = audioPlayer.duration * percentage;
}

function closePlayer() {
    audioPlayer.pause();
    audioPlayer.src = '';
    document.getElementById('nowPlaying').classList.remove('active');
    isPlaying = false;
    currentMovieIndex = -1;
    currentSongIndex = -1;
    updatePlayingState();
}

// Event Listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.decade;
        renderMovies();
    });
});

document.getElementById('searchInput').addEventListener('input', function (e) {
    currentSearch = e.target.value;
    renderMovies();
});

// Initial render
renderMovies();

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
    if (document.getElementById('nowPlaying').classList.contains('active')) {
        if (e.key === ' ' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            togglePlay();
        } else if (e.key === 'ArrowRight') {
            nextSong();
        } else if (e.key === 'ArrowLeft') {
            previousSong();
        } else if (e.key === 'Escape') {
            closePlayer();
        }
    }
});

// Update progress bar style dynamically
audioPlayer.addEventListener('timeupdate', function () {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    progressBar.style.background = `linear-gradient(to right, var(--gold) ${progress}%, rgba(255,255,255,0.1) ${progress}%)`;
});
