const MOVIES = [

    { title: "Ninnu Choodalani", year: 2001, director: "V.R. Pratap", poster: "posters/ninnu-choodalani.jpg", songs: [{ name: "Campuslo Kaaletti", file: "Songs/CampusloKaaletti.mp3" }, { name: "Echota Nenunna", file: "Songs/EchotaNenunna.mp3" }, { name: "Oopirochina Bapu", file: "Songs/OopirochinaBapuB.mp3" }] },

    { title: "Student No. 1", year: 2001, director: "S.S. Rajamouli", poster: "posters/studentno1.jpg", songs: [{ name: "Yevetti", file: "Songs/YevettiChesad0.mp3" }, { name: "Paddanandi", file: "Songs/Paddanandi.mp3" }, { name: "Okariki Okarye", file: "Songs/OkarikiOkarye.mp3" }, { name: "Kastha Ninu", file: "Songs/KasthaNinu.mp3" }, { name: "Kuchipudi", file: "Songs/Kuchipudi.mp3" }, { name: "Ekkado Putti", file: "Songs/EkkadoPutti.mp3" }] },

    { title: "Subbu", year: 2001, director: "Suresh Varma", poster: "posters/subbu.jpg", songs: [{ name: "Hari Hara", file: "Songs/HariHara.mp3" }, { name: "LOVE Pasayyanu", file: "Songs/LOVEPasayyanu.mp3" }, { name: "Masthu Masthu", file: "Songs/MasthuMasthu.mp3" }, { name: "Naa Kosame", file: "Songs/NaaKosame.mp3" }, { name: "Miva Miva", file: "Songs/VivaViva.mp3" }, { name: "Janani Janmabhoomini", file: "Songs/ananiJanmabhoomini.mp3" }] },

    { title: "Aadi", year: 2002, director: "V.V. Vinayak", poster: "posters/aadi.jpg", songs: [{ name: "Ayyo Rama", file: "Songs/AyyoRama-.mp3" }, { name: "Chiki Chiki", file: "Songs/ChikiChiki.mp3" }, { name: "Nee Navvula", file: "Songs/NeeNavvula.mp3" }, { name: "Pattu Okato Sari", file: "Songs/PattuOkatoSari.mp3" }, { name: "Sunnunda", file: "Songs/Sunnunda.mp3" }, { name: "Toli Pilupe", file: "Songs/ToliPilupe.mp3" }] },

    { title: "Allari Ramudu", year: 2002, director: "B. Gopal", poster: "posters/allari-ramudu.jpg", songs: [{ name: "Boddunu Choodayyo", file: "Songs/BoddunuChoodayyo.mp3" }, { name: "Chelliya Chelliye", file: "Songs/ChelliyaChelliye.mp3" }, { name: "Jadaku Jada", file: "Songs/JadakuJada.mp3" }, { name: "Oppula Kuppa", file: "Songs/OppulaKuppa.mp3" }, { name: "Renduvela Rendu Varaku", file: "Songs/RenduvelaRenduVaraku.mp3" }] },

    { title: "Naaga", year: 2003, director: "D.K. Suresh", poster: "posters/naaga.jpg", songs: [{ name: "Dhool Anakapalli", file: "Songs/DhoolAnakapalli.mp3" }, { name: "Entha Chinna", file: "Songs/EnthaChinnaMudhu.mp3" }, { name: "Mecarina Mecarina", file: "Songs/MecarinaMecarina.mp3" }, { name: "Megham Karigenu", file: "Songs/MeghamKarigenu.mp3" }, { name: "Nayudore Pilla", file: "Songs/NayudorePilla.mp3" }, { name: "Oka Konte Pillane", file: "Songs/OkaKontePillane.mp3" }] },

    { title: "Simhadri", year: 2003, director: "S.S. Rajamouli", poster: "posters/simhadri.jpg", songs: [{ name: "Ammaina Nannaina", file: "Songs/AmmainaNannaina.mp3" }, { name: "Cheema Cheema", file: "Songs/CheemaCheema.mp3" }, { name: "Chinnadamme Cheekulu", file: "Songs/ChinnadammeCheekulu.mp3" }, { name: "Chiraku Anuko", file: "Songs/ChirakuAnuko.mp3" }, { name: "Nannedo Seyyamaku", file: "Songs/NannedoSeyyamaku.mp3" }, { name: "Nuvvu Whistlesthe", file: "Songs/NuvvuWhistlesthe.mp3" }, { name: "Singamalai", file: "Songs/Singamalai.mp3" }] },

    { title: "Andhrawala", year: 2004, director: "Puri Jagannadh", poster: "posters/andhrawala.jpg", songs: [{ name: "Gitchi Gitchi", file: "Songs/GitchiGitchi.mp3" }, { name: "Kokkokola missa", file: "Songs/Kokkokolamissa.mp3" }, { name: "Malleteegaroi", file: "Songs/Malleteegaroi.mp3" }, { name: "Nairey Nairey", file: "Songs/Nairey Nairey.mp3" }, { name: "Nipputunakai", file: "Songs/Nipputunakai.mp3" }, { name: "Unga Unga", file: "Songs/UngaUnga.mp3" }] },

    { title: "Samba", year: 2004, director: "V.V. Vinayak", poster: "posters/samba.jpg", songs: [{ name: "Dam Damare Dam", file: "Songs/DamDamareDam.mp3" }, { name: "Kita Kitalu Pettamak", file: "Songs/KitaKitaluPettamaku.mp3" }, { name: "Luxemburg Lux", file: "Songs/LuxemburgLux.mp3" }, { name: "Namasthe Namasthe", file: "Songs/NamastheNamasthe.mp3" }, { name: "Nandamuri Chandamama", file: "Songs/NandamuriChandamama.mp3" }, { name: "Tagilinadi Rabba", file: "Songs/TagilinadiRabba.mp3" }] },

    { title: "Naa Alludu", year: 2005, director: "Vara Mullapudi", poster: "posters/naa-alludu.jpg", songs: [{ name: "Andhala bommaro", file: "Songs/Andhala bommaroNaa Alludu.mp3" }, { name: "En Peru Murugan", file: "Songs/En Peru Murugan-Naa Alludu.mp3" }, { name: "Kandi Chenu Kada", file: "Songs/Kandi Chenu Kada-Naa Alludu.mp3" }, { name: "Nadumu Chusthe", file: "Songs/Nadumu Chusthe-Naa Alludu.mp3" }, { name: "Pattuko Pattuko", file: "Songs/Pattuko Pattuko-Naa Alludu.mp3" }, { name: "Pilla Chuste", file: "Songs/Pilla Chuste-Naa Alludu.mp3" }, { name: "Sayya Sayyare", file: "Songs/SayyaSayyare-Naa Alludu.mp3" }] },

    { title: "Narasimhudu", year: 2005, director: "B. Gopal", poster: "posters/narasimhudu.jpg", songs: [{ name: "Krishnamurariki", file: "Songs/Krishnamurariki-Narasimhudu.mp3" }, { name: "Muddoche Kopalu", file: "Songs/Muddoche Kopalu-Narasimhudu.mp3" }, { name: "Muddula Gopala", file: "Songs/Muddula Gopala-Narasimhudu.mp3" }, { name: "Rajamandrike", file: "Songs/Rajamandrike-Narasimhudu.mp3" }, { name: "Singu Singu", file: "Songs/Singu Singu-Narasimhudu.mp3" }, { name: "Yeluko Nayaka", file: "Songs/Yeluko Nayaka-Narasimhudu.mp3" }] },

    { title: "Ashok", year: 2006, director: "Surender Reddy", poster: "posters/ashok.jpg", songs: [{ name: "Gola Gola", file: "Songs/Gola Gola-Ashok.mp3" }, { name: "Jabiliki", file: "Songs/Jabiliki-Ashok.mp3" }, { name: "Muntajmahalu", file: "Songs/Muntajmahalu-Ashok.mp3" }, { name: "Nuvvasalu", file: "Songs/Nuvvasalu-Ashok.mp3" }, { name: "Okachinni", file: "Songs/Okachinni-Ashok.mp3" }, { name: "Yekantanga", file: "Songs/Yekantanga-Ashok.mp3" }] },

    { title: "Rakhi", year: 2006, director: "Krishna Vamsi", poster: "posters/rakhi.jpg", songs: [{ name: "Kallalo Kalagni", file: "Songs/Kallalo Kalagni-Rakhi.mp3" }, { name: "Ninnu Choosthe", file: "Songs/Ninnu Choosthe-Rakhi.mp3" }, { name: "Rakhee Rakhee", file: "Songs/Rakhee Rakhee-Rakhi.mp3" }, { name: "Rangu Rabba", file: "Songs/Rangu Rabba Rabba-Rakhi.mp3" }, { name: "Vastava Vastava", file: "Songs/Vastava Vastava-Rakhi.mp3" }, { name: "Zara Zara", file: "Songs/Zara Zara-Rakhi.mp3" }] },

    { title: "Yamadonga", year: 2007, director: "S.S. Rajamouli", poster: "posters/yamadonga.jpg", songs: [{ name: "Naachore", file: "Songs/Naachore-Yamadonga.mp3" }, { name: "Nuvvu Muttukunte", file: "Songs/Nuvvu Muttukunte-Yamadonga.mp3" }, { name: "Nunugu Meesaaloda", file: "Songs/Nunugu Meesaaloda-Yamadonga.mp3" }, { name: "Young Yama", file: "Songs/Young Yama-Yamadonga.mp3" }, { name: "O Lammi Thikkaregind", file: "Songs/O Lammi Thikkareginda-Yamadonga.mp3" }, { name: "Rabbaru Gaajulu", file: "Songs/Rabbaru Gaajulu-Yamadonga.mp3" }] },

    { title: "Kantri", year: 2008, director: "Meher Ramesh", poster: "posters/kantri.jpg", songs: [{ name: "123 Nenoka Kantri", file: "Songs/123 Nenoka Kantri-Kantri.mp3" }, { name: "Ammaho", file: "Songs/Ammaho-Kantri.mp3" }, { name: "Janthar Manthar", file: "Songs/Janthar Manthar-Kantri.mp3" }, { name: "Raamare", file: "Songs/Raamare-Kantri.mp3" }, { name: "Vayasunamy", file: "Songs/Vayasunamy-Kantri.mp3" }] },

    { title: "Adhurs", year: 2010, director: "V.V. Vinayak", poster: "posters/adhurs.jpg", songs: [{ name: "Shiva Shambho", file: "Songs/Shiva Shambho-Adhurs.mp3" }, { name: "Chandrakala", file: "Songs/Chandrakala-Adhurs.mp3" }, { name: "Chary", file: "Songs/Chary-Adhurs.mp3" }, { name: "Neethone", file: "Songs/Neethone-Adhurs.mp3" }, { name: "Assalaam Valekhum", file: "Songs/Assalaam Valekhum-Adhurs.mp3" }] },

    { title: "Brindavanam", year: 2010, director: "Vamsi Paidipally", poster: "posters/brindavanam.jpg", songs: [{ name: "Yuvakula", file: "Songs/Yuvakula-Brindavanam.mp3" }, { name: "Eyi Raja", file: "Songs/Eyi Raja-Brindavanam.mp3" }, { name: "Nijamena", file: "Songs/Nijamena-Brindavanam.mp3" }, { name: "Chinnadho", file: "Songs/Chinnadho-Brindavanam.mp3" }, { name: "Oopirage", file: "Songs/Oopirage-Brindavanam.mp3" }, { name: "Vachadura", file: "Songs/Vachadura-Brindavanam.mp3" }] },

    { title: "Shakti", year: 2011, director: "Meher Ramesh", poster: "posters/shakti.jpg", songs: [{ name: "Thaliya Thaliya", file: "Songs/Thaliya Thaliya-Shakti.mp3" }, { name: "Surro Surra", file: "Songs/Surro Surra-Shakti.mp3" }, { name: "Prema Desham", file: "Songs/Prema Desham-Shakti.mp3" }, { name: "Yamaga Unde", file: "Songs/Yamaga Unde-Shakti.mp3" }, { name: "Mahishasura Mardhini", file: "Songs/Mahishasura Mardhini-Shakti.mp3" }] },

    { title: "Oosaravelli", year: 2011, director: "Surender Reddy", poster: "posters/oosaravelli.jpg", songs: [{ name: "Sri Anjaneyam", file: "Songs/Sri Anjaneyam-Oosaravelli.mp3" }, { name: "Nenante Naaku", file: "Songs/Nenante Naaku-Oosaravelli.mp3" }, { name: "Love Ante Caring", file: "Songs/Love Ante Caring-Oosaravelli.mp3" }, { name: "Niharika", file: "Songs/Niharika-Oosaravelli.mp3" }, { name: "Dandiya India", file: "Songs/Dandiya India-Oosaravelli.mp3" }, { name: "Yelango Yelango", file: "Songs/Yelango Yelango-Oosaravelli.mp3" }, { name: "Brathakaali", file: "Songs/Brathakaali-Oosaravelli.mp3" }] },

    { title: "Dhammu", year: 2012, director: "Boyapati Srinu", poster: "posters/dhammu.jpg", songs: [{ name: "Oh Lilli", file: "Songs/Oh Lilli-Dhammu.mp3" }, { name: "Raja Vasireddy", file: "Songs/Raja Vasireddy-Dhammu.mp3" }, { name: "Ruler", file: "Songs/Ruler-Dhammu.mp3" }, { name: "Dhammu", file: "Songs/Dhammu-Dhammu.mp3" }, { name: "Vaasthu Bagundhe", file: "Songs/Vaasthu Bagundhe-Dhammu.mp3" }] },

    { title: "Baadshah", year: 2013, director: "Srinu Vaitla", poster: "posters/baadshah.jpg", songs: [{ name: "Sairo Sairo", file: "Songs/Sairo Sairo-Baadshah.mp3" }, { name: "Diamond Girl", file: "Songs/Diamond Girl-Baadshah.mp3" }, { name: "Welcome Kanakku", file: "Songs/Welcome Kanakam-Baadshah.mp3" }, { name: "Banthi Poola Janaki", file: "Songs/Banthi Poola Janaki-Baadshah.mp3" }, { name: "Baadshah", file: "Songs/Baadshah-Baadshah.mp3" }, { name: "Rangoli Rangoli", file: "Songs/Rangoli Rangoli-Baadshah.mp3" }] },

    { title: "Ramayya Vasthavayya", year: 2013, director: "Harish Shankar", poster: "posters/ramayya-vasthavayya.jpg", songs: [{ name: "O Lailaa", file: "Songs/O Lailaa-Ramayya Vasthavayya.mp3" }, { name: "Pandaga Chesko", file: "Songs/Pandaga Chesko-Ramayya Vasthavayya.mp3" }, { name: "Jabilli", file: "Songs/Jabilli-Ramayya Vasthavayya.mp3" }, { name: "Kurrayeedu", file: "Songs/Kurrayeedu-Ramayya Vasthavayya.mp3" }, { name: "Neneppudaina", file: "Songs/Neneppudaina-Ramayya Vasthavayya.mp3" }, { name: "Idhi Ranarangam", file: "Songs/Idhi Ranarangam-Ramayya Vasthavayya.mp3" }] },

    { title: "Rabhasa", year: 2014, director: "Santosh Srinivas", poster: "posters/rabhasa.jpg", songs: [{ name: "Rakasi Rakasi", file: "Songs/Rakaasi Rakaasi-Rabhasa.mp3" }, { name: "Hawa Hawa", file: "Songs/Hawa Hawa-Rabhasa.mp3" }, { name: "Garam Garam Chilaka", file: "Songs/Garam Garam Chilaka-Rabhasa.mp3" }, { name: "Maar Salaam", file: "Songs/Maar Salaam-Rabhasa.mp3" }, { name: "Dam Damare", file: "Songs/Dam Damare-Rabhasa.mp3" }] },

    { title: "Temper", year: 2015, director: "Puri Jagannadh", poster: "posters/temper.jpg", songs: [{ name: "Ittage Recchipodham", file: "Songs/Ittage Recchipodham-Temper.mp3" }, { name: "One More Time", file: "Songs/One More Time-Temper.mp3" }, { name: "Choolenge Aasma", file: "Songs/ChoolengeAasma-Temper.mp3" }, { name: "Temper", file: "Songs/Temper-Temper.mp3" }, { name: "Devudaa", file: "Songs/Devuda-Temper.mp3" }] },

    { title: "Nannaku Prematho", year: 2016, director: "Sukumar", poster: "posters/nannaku-prematho.jpg", songs: [{ name: "Don't Stop", file: "Songs/3- Dont Stop-Nannaku Prematho.mp3" }, { name: "Follow Follow", file: "Songs/1- Follow Follow-Nannaku Prematho.mp3" }, { name: "Naa Manasu Neelo", file: "Songs/2-Naa Manasu Nannaku Prematho.mp3" }, { name: "Love Me Again", file: "Songs/4-Love Me Again-Nannaku Prematho.mp3" }, { name: "Love Dhebba", file: "Songs/5-Love Dhebba-Nannaku Prematho.mp3" }, { name: "Nannaku Title", file: "Songs/6-Nannaku-Nannaku Prematho.mp3" }] },

    { title: "Janatha Garage", year: 2016, director: "Koratala Siva", poster: "posters/janatha-garage.jpg", songs: [{ name: "Pranaamam", file: "Songs/Pranaamam  - Janatha Garage.mp3" }, { name: "Rock On Bro", file: "Songs/Rock On Bro  - Janatha Garage.mp3" }, { name: "Apple Beauty", file: "Songs/Apple Beauty  - Janatha Garage.mp3" }, { name: "Nee Selvadigi", file: "Songs/Nee Selavdigi  - Janatha Garage.mp3" }, { name: "Jayaho Janatha", file: "Songs/Jayaho Janatha  - Janatha Garage.mp3" }, { name: "Pakka Local", file: "Songs/Pakka Local  - Janatha Garage.mp3" }] },

    { title: "Jai Lava Kusa", year: 2017, director: "Bobby", poster: "posters/jai-lava-kusa.jpg", songs: [{ name: "Dochestha", file: "Songs/Dochestha-Jai Lava Kusa.mp3" }, { name: "Tring Tring", file: "Songs/Tring Tring-Jai Lava Kusa.mp3" }, { name: "Nee Kallalona", file: "Songs/Nee Kallalona-Jai Lava Kusa.mp3" }, { name: "Raavana", file: "Songs/Raavana-Jai Lava Kusa.mp3" }, { name: "Andamaina Lokam", file: "Songs/Andamaina Lokam-Jai Lava Kusa.mp3" }, { name: "Swing Zara", file: "Songs/Swing Zara-Jai Lava Kusa.mp3" }] },

    { title: "Aravinda Sametha", year: 2018, director: "Trivikram Srinivas", poster: "posters/aravinda-sametha.jpg", songs: [{ name: "Yeda Poyindo", file: "Songs/Yeda Poyindo - Aravinda Sametha Veera Raghava.mp3" }, { name: "AnaganagAnaga", file: "Songs/Anaganaganaga - Aravinda Sametha Veera Raghava.mp3" }, { name: "Peniviti", file: "Songs/Peniviti - Aravinda Sametha Veera Raghava.mp3" }, { name: "Reddy Ikkada Soodu", file: "Songs/Reddy Ikkada Soodu - Aravinda Sametha Veera Raghava.mp3" }, { name: "Reddamma Thalli", file: "Songs/Reddamma Thalli - Aravinda Sametha Veera Raghava.mp3" }, { name: "Reddamma Thalli (Female)", file: "Songs/Reddamma Thalli (Female) - Aravinda Sametha Veera Raghava.mp3" }] },

    { title: "RRR", year: 2022, director: "S.S. Rajamouli", poster: "posters/rrr.jpg", songs: [{ name: "Dosti", file: "Songs/Dosti - RRR.mp3" }, { name: "Naatu Naatu", file: "Songs/Nattu Nattu- RRR.mp3" }, { name: "Komuram Bheemudo", file: "Songs/Komuram Bheemudo- RRR.mp3" }, { name: "Etthara Jenda", file: "Songs/Etthara Jenda- RRR.mp3" }, { name: "Komma Uyyala", file: "Songs/Komma Uyyala- RRR.mp3" }, { name: "Janani", file: "Songs/Janani - RRR.mp3" }] },

    { title: "Devara Part 1", year: 2024, director: "Koratala Siva", poster: "posters/devara.jpg", songs: [{ name: "Ayudha Pooja", file: "Songs/Ayudha Pooja - Devara.mp3" }, { name: "Fear Song", file: "Songs/Fear - Devara.mp3" }, { name: "Chuttamalle", file: "Songs/Chuttamalle - Devara.mp3" }, { name: "Daavudi", file: "Songs/Daavudi - Devara.mp3" }, { name: "All Hail The Tiger", file: "Songs/All Hail The Tiger - Devara.mp3" }, { name: "Devara Thandavam", file: "Songs/Devara Thandavam - Devara.mp3" }] },

    { title: "NTRNEEL", year: 2027, director: "Prashanth Neel", poster: "posters/ntrneel-1.jpg", songs: [{ name: "NTR IN BASRUR", file: "Songs/NTR IN BASRUR - NTRNEEL 1.mp3.mp3" }] },


];



// ── User Account System ──────────────────────────────────────────────

let currentUser = null;

let users = JSON.parse(localStorage.getItem('jrntr_users')) || [];



// Account state management

function saveUsers() {

    localStorage.setItem('jrntr_users', JSON.stringify(users));

}



function saveCurrentUser() {

    if (currentUser) {

        localStorage.setItem('jrntr_current_user', JSON.stringify(currentUser));

    } else {

        localStorage.removeItem('jrntr_current_user');

    }

}



function loadCurrentUser() {

    const saved = localStorage.getItem('jrntr_current_user');

    if (saved) {

        currentUser = JSON.parse(saved);

        updateUIForLoggedInUser();

    }

}



// Registration

function register(username, email, password) {

    // Check if user already exists

    if (users.find(u => u.username === username || u.email === email)) {

        return { success: false, message: 'Username or email already exists' };

    }



    // Create new user

    const newUser = {

        id: Date.now().toString(),

        username,

        email,

        password, // In production, this should be hashed

        createdAt: new Date().toISOString(),

        favorites: [],

        playlists: [],

        settings: {

            theme: 'dark',

            volume: 0.5,

            shuffle: false,

            repeat: false

        }

    };



    users.push(newUser);

    saveUsers();



    return { success: true, message: 'Account created successfully!' };

}



// Login

function login(username, password) {

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {

        currentUser = user;

        saveCurrentUser();

        updateUIForLoggedInUser();

        return { success: true, message: 'Login successful!' };

    }



    return { success: false, message: 'Invalid username or password' };

}



// Logout

function logout() {

    currentUser = null;

    saveCurrentUser();

    updateUIForLoggedOutUser();

    closeAccountModal();

}



// Update user profile

function updateProfile(updates) {

    if (!currentUser) return { success: false, message: 'Not logged in' };



    const userIndex = users.findIndex(u => u.id === currentUser.id);

    if (userIndex !== -1) {

        users[userIndex] = { ...users[userIndex], ...updates };

        currentUser = users[userIndex];

        saveUsers();

        saveCurrentUser();

        updateUIForLoggedInUser();

        return { success: true, message: 'Profile updated successfully!' };

    }



    return { success: false, message: 'User not found' };

}



// Add to favorites

function addToFavorites(song) {

    if (!currentUser) return { success: false, message: 'Please login to add favorites' };



    const userIndex = users.findIndex(u => u.id === currentUser.id);

    if (userIndex !== -1) {

        const songId = `${song.movie}-${song.name}`;

        if (!users[userIndex].favorites.includes(songId)) {

            users[userIndex].favorites.push(songId);

            currentUser = users[userIndex];

            saveUsers();

            saveCurrentUser();

            return { success: true, message: 'Added to favorites!' };

        }

        return { success: false, message: 'Already in favorites' };

    }



    return { success: false, message: 'User not found' };

}



// Remove from favorites

function removeFromFavorites(song) {

    if (!currentUser) return { success: false, message: 'Please login' };



    const userIndex = users.findIndex(u => u.id === currentUser.id);

    if (userIndex !== -1) {

        const songId = `${song.movie}-${song.name}`;

        const index = users[userIndex].favorites.indexOf(songId);

        if (index !== -1) {

            users[userIndex].favorites.splice(index, 1);

            currentUser = users[userIndex];

            saveUsers();

            saveCurrentUser();

            return { success: true, message: 'Removed from favorites' };

        }

    }



    return { success: false, message: 'Not in favorites' };

}



// Check if song is favorite

function isFavorite(song) {

    if (!currentUser) return false;

    const songId = `${song.movie}-${song.name}`;

    return currentUser.favorites.includes(songId);

}



// UI Updates

function updateUIForLoggedInUser() {

    const accountBtn = document.getElementById('accountBtn');

    const loginBtn = document.getElementById('loginBtn');

    const favoritesSection = document.getElementById('favoritesSection');



    if (accountBtn) {

        accountBtn.textContent = currentUser.username;

        accountBtn.style.display = 'block';

    }



    if (loginBtn) {

        loginBtn.style.display = 'none';

    }



    if (favoritesSection) {

        favoritesSection.style.display = 'block';

        renderFavorites();

    }

}



function updateUIForLoggedOutUser() {

    const accountBtn = document.getElementById('accountBtn');

    const loginBtn = document.getElementById('loginBtn');

    const favoritesSection = document.getElementById('favoritesSection');



    if (accountBtn) {

        accountBtn.style.display = 'none';

    }



    if (loginBtn) {

        loginBtn.style.display = 'block';

    }



    if (favoritesSection) {

        favoritesSection.style.display = 'none';

    }

}



// Modal functions

function showAccountModal() {

    let modal = document.getElementById('accountModal');

    if (!modal) {

        modal = createAccountModal();

    }



    if (currentUser) {

        showProfileView();

    } else {

        showLoginView();

    }



    modal.classList.add('open');

    document.body.style.overflow = 'hidden';

}



function closeAccountModal() {

    const modal = document.getElementById('accountModal');

    if (modal) {

        modal.classList.remove('open');

        document.body.style.overflow = '';

    }

}



function createAccountModal() {

    const modal = document.createElement('div');

    modal.id = 'accountModal';

    modal.className = 'account-modal';

    modal.innerHTML = `

        <div class="account-backdrop" onclick="closeAccountModal()"></div>

        <div class="account-content">

            <div class="account-header">

                <h3 id="accountTitle">Account</h3>

                <button class="account-close-btn" onclick="closeAccountModal()">

                    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">

                        <path d="M6 6l12 12M6 18L18 6" stroke="#fff" stroke-width="2" stroke-linecap="round"/>

                    </svg>

                </button>

            </div>

            <div class="account-body" id="accountBody">

                <!-- Content will be dynamically inserted -->

            </div>

        </div>

    `;

    document.body.appendChild(modal);

    return modal;

}



function showLoginView() {

    const title = document.getElementById('accountTitle');

    const body = document.getElementById('accountBody');



    title.textContent = 'Login';

    body.innerHTML = `

        <form class="auth-form" onsubmit="handleLogin(event)">

            <div class="form-group">

                <label for="loginUsername">Username</label>

                <input type="text" id="loginUsername" required>

            </div>

            <div class="form-group">

                <label for="loginPassword">Password</label>

                <input type="password" id="loginPassword" required>

            </div>

            <button type="submit" class="auth-btn">Login</button>

            <p class="auth-switch">

                Don't have an account? 

                <a href="#" onclick="showRegisterView(); return false;">Register</a>

            </p>

        </form>

    `;

}



function showRegisterView() {

    const title = document.getElementById('accountTitle');

    const body = document.getElementById('accountBody');



    title.textContent = 'Register';

    body.innerHTML = `

        <form class="auth-form" onsubmit="handleRegister(event)">

            <div class="form-group">

                <label for="registerUsername">Username</label>

                <input type="text" id="registerUsername" required>

            </div>

            <div class="form-group">

                <label for="registerEmail">Email</label>

                <input type="email" id="registerEmail" required>

            </div>

            <div class="form-group">

                <label for="registerPassword">Password</label>

                <input type="password" id="registerPassword" required>

            </div>

            <button type="submit" class="auth-btn">Register</button>

            <p class="auth-switch">

                Already have an account? 

                <a href="#" onclick="showLoginView(); return false;">Login</a>

            </p>

        </form>

    `;

}



function showProfileView() {

    const title = document.getElementById('accountTitle');

    const body = document.getElementById('accountBody');



    title.textContent = 'My Profile';

    body.innerHTML = `

        <div class="profile-view">

            <div class="profile-info">

                <h4>${currentUser.username}</h4>

                <p>${currentUser.email}</p>

                <p>Member since: ${new Date(currentUser.createdAt).toLocaleDateString()}</p>

            </div>

            <div class="profile-stats">

                <div class="stat">

                    <span class="stat-number">${currentUser.favorites.length}</span>

                    <span class="stat-label">Favorites</span>

                </div>

                <div class="stat">

                    <span class="stat-number">${currentUser.playlists.length}</span>

                    <span class="stat-label">Playlists</span>

                </div>

            </div>

            <div class="profile-actions">

                <button class="profile-btn" onclick="showEditProfileView()">Edit Profile</button>

                <button class="profile-btn logout" onclick="logout()">Logout</button>

            </div>

        </div>

    `;

}



function showEditProfileView() {

    const title = document.getElementById('accountTitle');

    const body = document.getElementById('accountBody');



    title.textContent = 'Edit Profile';

    body.innerHTML = `

        <form class="auth-form" onsubmit="handleProfileUpdate(event)">

            <div class="form-group">

                <label for="editUsername">Username</label>

                <input type="text" id="editUsername" value="${currentUser.username}" required>

            </div>

            <div class="form-group">

                <label for="editEmail">Email</label>

                <input type="email" id="editEmail" value="${currentUser.email}" required>

            </div>

            <div class="form-group">

                <label for="editPassword">New Password (leave blank to keep current)</label>

                <input type="password" id="editPassword">

            </div>

            <div class="form-actions">

                <button type="submit" class="auth-btn">Save Changes</button>

                <button type="button" class="auth-btn secondary" onclick="showProfileView()">Cancel</button>

            </div>

        </form>

    `;

}



// Form handlers

function handleLogin(event) {

    event.preventDefault();

    const username = document.getElementById('loginUsername').value;

    const password = document.getElementById('loginPassword').value;



    const result = login(username, password);

    if (result.success) {

        closeAccountModal();

        showNotification(result.message, 'success');

    } else {

        showNotification(result.message, 'error');

    }

}



function handleRegister(event) {

    event.preventDefault();

    const username = document.getElementById('registerUsername').value;

    const email = document.getElementById('registerEmail').value;

    const password = document.getElementById('registerPassword').value;



    const result = register(username, email, password);

    if (result.success) {

        showNotification(result.message, 'success');

        showLoginView();

    } else {

        showNotification(result.message, 'error');

    }

}



function handleProfileUpdate(event) {

    event.preventDefault();

    const username = document.getElementById('editUsername').value;

    const email = document.getElementById('editEmail').value;

    const password = document.getElementById('editPassword').value;



    const updates = { username, email };

    if (password) {

        updates.password = password;

    }



    const result = updateProfile(updates);

    if (result.success) {

        showNotification(result.message, 'success');

        showProfileView();

    } else {

        showNotification(result.message, 'error');

    }

}



// Render favorites

function renderFavorites() {

    if (!currentUser) return;



    const favoritesContainer = document.getElementById('favoritesContainer');

    if (!favoritesContainer) return;



    const favoriteSongs = player.playlist.filter(song =>

        currentUser.favorites.includes(`${song.movie}-${song.name}`)

    );



    if (favoriteSongs.length === 0) {

        favoritesContainer.innerHTML = '<p class="no-favorites">No favorites yet. Start adding songs to your favorites!</p>';

        return;

    }



    favoritesContainer.innerHTML = favoriteSongs.map((song, index) => `

        <div class="song-item" data-index="${player.playlist.indexOf(song)}">

            <div class="song-fav-star ${isFavorite(song) ? 'active' : ''}" onclick="toggleFavorite(${player.playlist.indexOf(song)})">

                <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">

                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="${isFavorite(song) ? '#fc3c44' : 'none'}" stroke="${isFavorite(song) ? '#fc3c44' : '#86868b'}" stroke-width="2"/>

                </svg>

            </div>

            <div class="song-info">

                <div class="song-name">${song.name}</div>

                <div class="song-movie">${song.movie} • ${song.year}</div>

            </div>

            <div class="song-time-cell">--:--</div>

        </div>

    `).join('');

}



// Toggle favorite

function toggleFavorite(index) {

    if (!currentUser) {

        showAccountModal();

        return;

    }



    const song = player.playlist[index];

    if (isFavorite(song)) {

        removeFromFavorites(song);

    } else {

        addToFavorites(song);

    }



    // Update UI

    renderFavorites();

    updateSongListFavorites();

}



// Update song list favorites

function updateSongListFavorites() {

    document.querySelectorAll('.song-item').forEach(el => {

        const idx = parseInt(el.dataset.index);

        if (idx >= 0 && idx < player.playlist.length) {

            const song = player.playlist[idx];

            const star = el.querySelector('.song-fav-star');

            if (star) {

                star.classList.toggle('active', isFavorite(song));

                const path = star.querySelector('path');

                if (path) {

                    path.setAttribute('fill', isFavorite(song) ? '#fc3c44' : 'none');

                    path.setAttribute('stroke', isFavorite(song) ? '#fc3c44' : '#86868b');

                }

            }

        }

    });

}



// Notification system

function showNotification(message, type = 'info') {

    const notification = document.createElement('div');

    notification.className = `notification ${type}`;

    notification.textContent = message;



    document.body.appendChild(notification);



    setTimeout(() => {

        notification.classList.add('show');

    }, 100);



    setTimeout(() => {

        notification.classList.remove('show');

        setTimeout(() => {

            document.body.removeChild(notification);

        }, 300);

    }, 3000);

}



// Global access

window.showAccountModal = showAccountModal;

window.closeAccountModal = closeAccountModal;

window.showLoginView = showLoginView;

window.showRegisterView = showRegisterView;

window.showProfileView = showProfileView;

window.showEditProfileView = showEditProfileView;

window.handleLogin = handleLogin;

window.handleRegister = handleRegister;

window.handleProfileUpdate = handleProfileUpdate;

window.toggleFavorite = toggleFavorite;

window.logout = logout;



// Initialize account system on load

document.addEventListener('DOMContentLoaded', () => {

    loadCurrentUser();

});



// ── Player State ──────────────────────────────────────────────

let player = {

    audio: new Audio(),

    playlist: [],       // all songs flat

    currentIndex: -1,

    isPlaying: false,

    isShuffle: false,

    isRepeat: false,

    volume: 0.5

};



// ── Build flat playlist from MOVIES ──────────────────────────

function buildPlaylist() {

    player.playlist = [];

    MOVIES.forEach(movie => {

        (movie.songs || []).forEach(song => {

            player.playlist.push({

                name: song.name,

                file: song.file,

                movie: movie.title,

                year: movie.year,

                poster: movie.poster

            });

        });

    });

}



// ── Audio setup ───────────────────────────────────────────────

function setupAudio() {

    player.audio.volume = player.volume;



    player.audio.addEventListener('ended', () => {

        if (player.isRepeat) {

            player.audio.currentTime = 0;

            player.audio.play();

        } else {

            playNext();

        }

    });



    player.audio.addEventListener('timeupdate', () => {

        if (!player.audio.duration) return;

        const pct = (player.audio.currentTime / player.audio.duration) * 100;
        document.getElementById('progressBar').style.width = pct + '%';
        document.querySelector('.current-time').textContent = fmtTime(player.audio.currentTime);
        document.querySelector('.total-time').textContent = fmtTime(player.audio.duration);

        // Also update nav bar time displays
        updateNavBarTime();

    });



    player.audio.addEventListener('loadedmetadata', () => {

        document.querySelector('.total-time').textContent = fmtTime(player.audio.duration);

    });



    player.audio.addEventListener('error', (e) => {

        console.error('Audio error for:', player.audio.src, e);

    });



    // Click on progress track to seek

    document.getElementById('progressTrack').addEventListener('click', (e) => {

        if (!player.audio.duration) return;

        const rect = e.currentTarget.getBoundingClientRect();

        const pct = (e.clientX - rect.left) / rect.width;

        player.audio.currentTime = pct * player.audio.duration;

    });

}



// ── Controls ─────────────────────────────────────────────────

function setupControls() {

    document.querySelector('.control-btn.play-pause').addEventListener('click', togglePlayPause);

    document.querySelector('.control-btn.prev-btn').addEventListener('click', playPrev);

    document.querySelector('.control-btn.next-btn').addEventListener('click', playNext);

    document.querySelector('.control-btn.shuffle').addEventListener('click', toggleShuffle);

    document.querySelector('.control-btn.repeat').addEventListener('click', toggleRepeat);



    // Progress bar click/seek functionality

    document.querySelector('.progress-track').addEventListener('click', (e) => {

        if (!player.audio.duration) return;

        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const percentage = x / rect.width;

        const newTime = percentage * player.audio.duration;

        player.audio.currentTime = newTime;



        // Show visual feedback

        const progressBar = document.getElementById('progressBar');

        if (progressBar) {

            progressBar.style.width = (percentage * 100) + '%';

            progressBar.style.transition = 'none';

            setTimeout(() => {

                progressBar.style.transition = 'width 0.3s linear';

            }, 100);

        }

    });



    document.querySelector('.volume-slider').addEventListener('input', (e) => {

        player.volume = e.target.value / 100;

        player.audio.volume = player.volume;

    });



    document.addEventListener('keydown', (e) => {

        if (e.target.tagName === 'INPUT') return;

        if (e.code === 'Space') { e.preventDefault(); togglePlayPause(); }

        if (e.code === 'ArrowRight') playNext();

        if (e.code === 'ArrowLeft') playPrev();

    });

}



function togglePlayPause() {

    if (player.currentIndex === -1) {

        if (player.playlist.length > 0) loadSong(0);

        return;

    }

    player.isPlaying ? pauseSong() : resumeSong();

}



function resumeSong() {

    player.audio.play().catch(err => console.error('Play error:', err));

    player.isPlaying = true;

    updatePlayBtn();

    updateNowPlayingNav();

    updateMobileMiniPlayer();

    updateMusicPlayerModal();

    highlightCurrentSong();

}



function pauseSong() {

    player.audio.pause();

    player.isPlaying = false;

    updatePlayBtn();

    updateMobileMiniPlayer();

    updateMusicPlayerModal();

}



function loadSong(indexOrSong) {

    let index;

    if (typeof indexOrSong === 'object') {

        // It's a song object, find its 

        index = player.playlist.findIndex(s => s.file === indexOrSong.file);

    } else {

        // It's an index

        index = indexOrSong;

    }



    if (index < 0 || index >= player.playlist.length) return;



    // If clicking the same song that's currently playing, just toggle play/pause

    if (player.currentIndex === index && player.audio.src) {

        if (player.isPlaying) {

            pauseSong();

        } else {

            resumeSong();

        }

        return;

    }



    // Load new song

    player.currentIndex = index;

    const song = player.playlist[index];

    player.audio.src = song.file;

    player.audio.load();

    player.audio.play().catch(err => console.error('Play error:', err));

    player.isPlaying = true;

    updatePlayBtn();

    updateNowPlayingNav();

    updateMobileMiniPlayer();

    highlightCurrentSong();

}



function playNext() {

    if (!player.playlist.length) return;

    let next = player.isShuffle

        ? Math.floor(Math.random() * player.playlist.length)

        : (player.currentIndex + 1) % player.playlist.length;

    loadSong(next);

}



function playPrev() {

    if (!player.playlist.length) return;

    // If more than 3s played, restart; else go to previous

    if (player.audio.currentTime > 3) {

        player.audio.currentTime = 0;

        return;

    }

    let prev = player.isShuffle

        ? Math.floor(Math.random() * player.playlist.length)

        : (player.currentIndex - 1 + player.playlist.length) % player.playlist.length;

    loadSong(prev);

}



function toggleShuffle() {

    player.isShuffle = !player.isShuffle;

    document.querySelector('.control-btn.shuffle').classList.toggle('active', player.isShuffle);

}



function toggleRepeat() {

    player.isRepeat = !player.isRepeat;

    document.querySelector('.control-btn.repeat').classList.toggle('active', player.isRepeat);

}



// ── UI Updates ────────────────────────────────────────────────

function updatePlayBtn() {

    const svg = document.getElementById('playPauseIcon');

    if (!svg) return;

    if (player.isPlaying) {

        // Pause icon (two bars)

        svg.innerHTML = '<path d="M7 5h3v14H7zm7 0h3v14h-3z" fill="#1d1d1f"/>';

    } else {

        // Play icon (triangle)

        svg.innerHTML = '<path d="M8.5 6.5l15 7.5-15 7.5V6.5z" fill="#1d1d1f"/>';

    }

}



function updateNowPlayingNav() {

    const song = player.playlist[player.currentIndex];

    if (!song) return;



    document.getElementById('navSongName').textContent = song.name;

    document.getElementById('navMovieName').textContent = song.movie + ' — ' + song.year;



    const poster = document.getElementById('navPoster');

    const note = document.getElementById('navMusicNote');

    poster.src = song.poster;

    poster.style.display = 'block';

    note.style.display = 'none';

    poster.onerror = () => {

        poster.style.display = 'none';

        note.style.display = 'block';

    };

}



function highlightCurrentSong() {

    document.querySelectorAll('.song-item').forEach(el => {

        const idx = parseInt(el.dataset.index);

        const isActive = idx === player.currentIndex;

        el.classList.toggle('playing', isActive);

        // Update star/indicator

        const star = el.querySelector('.song-fav-star');

        if (star) star.textContent = isActive ? '♪' : '';

    });

}



// ── Render: All Songs List (Apple Music table style) ──────────

function renderSongsList(songs, container) {

    if (!container) return;

    let html = '';

    songs.forEach((song, i) => {

        const globalIndex = player.playlist.indexOf(song);

        const isActive = globalIndex === player.currentIndex;

        // Use movie title as "album", director as "artist" surrogate

        const movie = MOVIES.find(m => m.title === song.movie);

        const artist = movie ? movie.director : song.movie;

        const albumLabel = song.movie + ' (Original Motion Picture Soundtrack)';



        const dur = durationCache[song.file];

        const timeStr = dur ? fmtTime(dur) : '─:──';



        html += `

        <div class="song-item ${isActive ? 'playing' : ''}" data-index="${globalIndex}" onclick="loadSong(${globalIndex})">

            <div class="song-name-cell">

                <span class="song-fav-star">${isActive ? '♪' : ''}</span>

                <div class="song-art">

                    <img src="${song.poster}" alt="${song.movie}"

                         onerror="this.style.display='none'">

                </div>

                <span class="song-name-text">${song.name}</span>

            </div>

            <div class="song-artist-cell">${artist}</div>

            <div class="song-album-cell">${albumLabel}</div>

            <div class="song-time-cell">${timeStr}</div>

        </div>`;

    });

    container.innerHTML = html;

}



// ── Render: Popular Songs (home grid) ─────────────────────────

const POPULAR_SONGS = [

    { movieTitle: "Devara Part 1", songName: "Chuttamalle" },

    { movieTitle: "Devara Part 1", songName: "Daavudi" },

    { movieTitle: "RRR", songName: "Naatu Naatu" },

    { movieTitle: "RRR", songName: "Komuram Bheemudo" },

    { movieTitle: "Nannaku Prematho", songName: "Follow Follow" },

    { movieTitle: "Simhadri", songName: "Cheema Cheema" },

    { movieTitle: "Baadshah", songName: "Banthi Poola Janaki" },

    { movieTitle: "Jai Lava Kusa", songName: "Dochestha" }

];



const GRADIENTS = ['gradient-blue', 'gradient-purple', 'gradient-orange', 'gradient-pink', 'gradient-green', 'gradient-red', 'gradient-teal', 'gradient-indigo'];



function renderPopularSongs() {

    const grid = document.getElementById('popularSongsGrid');

    if (!grid) return;

    let html = '';

    POPULAR_SONGS.forEach((ps, i) => {

        const song = player.playlist.find(s => s.movie === ps.movieTitle && s.name === ps.songName);

        if (!song) return;

        const idx = player.playlist.indexOf(song);

        html += `

        <div class="song-card" onclick="loadSong(${idx})">

            <div class="song-background ${GRADIENTS[i % GRADIENTS.length]}">

                <img src="${song.poster}" alt="${song.movie}"

                     style="width:100%;height:100%;object-fit:cover;opacity:0.7"

                     onerror="this.style.display='none'">

            </div>

            <div class="play-overlay"><div class="play-overlay-btn">▶</div></div>

            <div class="song-content">

                <h3>${song.name}</h3>

                <p class="album">${song.movie}</p>

            </div>

        </div>`;

    });

    grid.innerHTML = html;

}



// ── Render: Movies Grid (A-Z) ─────────────────────────────────

function renderMoviesGrid(containerId) {

    const grid = document.getElementById(containerId);

    if (!grid) return;

    const sorted = [...MOVIES].sort((a, b) => a.title.localeCompare(b.title));

    let html = '';

    sorted.forEach((movie, i) => {

        const originalIndex = MOVIES.indexOf(movie);

        html += `

        <div class="movie-card" onclick="showMovieDetail(${originalIndex})">

            <div class="movie-poster-wrapper">

                <img class="movie-poster" src="${movie.poster}" alt="${movie.title}"

                     onerror="this.parentElement.innerHTML='<div class=\'movie-poster-placeholder\' style=\'background:${["linear-gradient(135deg,#667eea,#764ba2)", "linear-gradient(135deg,#f093fb,#f5576c)", "linear-gradient(135deg,#fa709a,#fee140)", "linear-gradient(135deg,#89f7fe,#66a6ff)", "linear-gradient(135deg,#fddb92,#d1fdff)", "linear-gradient(135deg,#9890e3,#b1f4cf)"][i % 6]}\'>🎬</div>'">

            </div>

            <div class="movie-info">

                <div class="movie-title">${movie.title}</div>

                <div class="movie-year">${movie.year} • ${movie.songs.length} songs</div>

            </div>

        </div>`;

    });

    grid.innerHTML = html;

}



// ── Render: Sidebar movie list ────────────────────────────────

function renderSidebarMovies() {

    const nav = document.getElementById('moviesSidebar');

    if (!nav) return;

    let html = '';

    MOVIES.forEach((movie, i) => {

        html += `<a href="#" class="nav-item" onclick="showMovieDetail(${i}); return false;">

            <span class="nav-icon">🎬</span>

            <span>${movie.title}</span>

        </a>`;

    });

    nav.innerHTML = html;

}



// ── Active nav item ──────────────────────────────────────────

function setActive(el) {

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    if (el) el.classList.add('active');

}



// ── Render: Recently Added grid ───────────────────────────────

function renderRecentlyAdded() {

    const grid = document.getElementById('recentlyAddedGrid');

    if (!grid) return;

    // Show movies in reverse chronological order (newest first)

    const sorted = [...MOVIES].sort((a, b) => b.year - a.year || b.title.localeCompare(a.title));

    let html = '';

    sorted.forEach((movie, i) => {

        const originalIndex = MOVIES.indexOf(movie);

        const gradients = ['linear-gradient(135deg,#667eea,#764ba2)', 'linear-gradient(135deg,#f093fb,#f5576c)', 'linear-gradient(135deg,#fa709a,#fee140)', 'linear-gradient(135deg,#89f7fe,#66a6ff)', 'linear-gradient(135deg,#fddb92,#d1fdff)', 'linear-gradient(135deg,#9890e3,#b1f4cf)'];

        html += `

        <div class="ra-card" onclick="showMovieDetail(${originalIndex})">

            <div class="ra-art">

                <img src="${movie.poster}" alt="${movie.title}"

                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">

                <div class="ra-art-fallback" style="display:none; background:${gradients[i % gradients.length]}">🎬</div>

                <div class="ra-play-overlay">

                    <div class="ra-play-btn">▶</div>

                </div>

            </div>

            <div class="ra-info">

                <div class="ra-title">${movie.title} (Original Motion Picture Soundtrack)</div>

                <div class="ra-artist">${movie.director}</div>

            </div>

        </div>`;

    });

    grid.innerHTML = html;

}



// ── Section Navigation ────────────────────────────────────────

function showSection(name) {

    ['home', 'recentlyadded', 'allsongs', 'movies', 'moviedetail'].forEach(s => {

        const el = document.getElementById('section-' + s);

        if (el) el.style.display = (s === name) ? '' : 'none';

    });



    if (name === 'recentlyadded') {

        renderRecentlyAdded();

    }

    if (name === 'allsongs') {

        const list = document.getElementById('songsList');

        const sorted = [...player.playlist].sort((a, b) => a.name.localeCompare(b.name));

        renderSongsList(sorted, list);

    }

    if (name === 'movies') {

        renderMoviesGrid('moviesFullGrid');

    }

}



// ── Movie Detail ──────────────────────────────────────────────

function showMovieDetail(movieIndex) {

    const movie = MOVIES[movieIndex];

    if (!movie) return;



    showSection('moviedetail');



    const movieSongs = player.playlist.filter(s => s.movie === movie.title);

    const firstSongIndex = player.playlist.findIndex(s => s.movie === movie.title);



    // Build track list rows

    let tracksHtml = '';

    movieSongs.forEach((song, i) => {

        const globalIndex = player.playlist.indexOf(song);

        const isActive = globalIndex === player.currentIndex;

        const dur = durationCache[song.file];

        const timeStr = dur ? fmtTime(dur) : '─:──';

        tracksHtml += `

        <div class="album-track ${isActive ? 'playing' : ''}" data-index="${globalIndex}" onclick="loadSong(${globalIndex})">

            <div class="album-track-left">

                <span class="album-track-star">${isActive ? '♪' : '★'}</span>

                <span class="album-track-num">${i + 1}</span>

                <div class="album-track-info">

                    <div class="album-track-name">${song.name}</div>

                    <div class="album-track-artist">${movie.director}</div>

                </div>

            </div>

            <div class="album-track-right">

                <span class="album-track-time">${timeStr}</span>

                <button class="album-track-more" onclick="event.stopPropagation()">···</button>

            </div>

        </div>`;

    });



    const songCount = movieSongs.length;



    document.getElementById('movieDetailContent').innerHTML = `

        <div class="album-detail-wrap">

            <!-- Header -->

            <div class="album-detail-header">

                <div class="album-detail-poster-wrap">

                    <img class="album-detail-poster" src="${movie.poster}" alt="${movie.title}"

                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">

                    <div class="album-detail-poster-fallback" style="display:none">🎬</div>

                </div>

                <div class="album-detail-meta">

                    <h1 class="album-detail-title">${movie.title} (Original Motion Picture Soundtrack)</h1>

                    <p class="album-detail-artist">${movie.director}</p>

                    <p class="album-detail-sub">Telugu · ${movie.year}</p>

                    <div class="album-detail-actions">

                        <button class="album-play-btn" onclick="loadSong(${firstSongIndex})">

                            <svg viewBox="0 0 12 14" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l10 6-10 6V1z" fill="white"/></svg>

                            Play

                        </button>

                        <button class="album-shuffle-btn" onclick="toggleShuffle(); loadSong(${firstSongIndex})">

                            <svg viewBox="0 0 32 28" width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20.767 20.44a.81.81 0 00.49-.183l2.58-2.174c.316-.266.316-.681 0-.955l-2.58-2.183a.81.81 0 00-.49-.183c-.415 0-.673.258-.673.673v1.245h-1.162c-.739 0-1.195-.233-1.718-.847l-1.527-1.801 1.527-1.81c.54-.63.946-.847 1.677-.847h1.203v1.279c0 .407.258.664.673.664a.801.801 0 00.49-.174l2.58-2.175c.316-.266.316-.69 0-.955l-2.58-2.183a.761.761 0 00-.49-.183c-.415 0-.673.258-.673.665v1.386h-1.212c-1.228 0-1.992.34-2.863 1.386l-1.412 1.668-1.469-1.751c-.805-.946-1.569-1.303-2.747-1.303H8.896c-.53 0-.896.348-.896.838s.365.838.896.838h1.437c.697 0 1.162.225 1.685.847l1.519 1.801-1.52 1.81c-.53.623-.954.847-1.643.847H8.896c-.53 0-.896.348-.896.838s.365.838.896.838h1.536c1.179 0 1.901-.356 2.706-1.303l1.478-1.751 1.444 1.718c.822.98 1.627 1.336 2.822 1.336h1.212v1.412c0 .415.258.672.673.672z" fill="white"/></svg>

                            Shuffle

                        </button>

                        <button class="album-more-btn">···</button>

                    </div>

                </div>

            </div>



            <!-- Track list -->

            <div class="album-tracks">

                ${tracksHtml}

            </div>



            <!-- Footer info -->

            <div class="album-footer">

                <p>${movie.year}</p>

                <p>${songCount} song${songCount !== 1 ? 's' : ''}</p>

                <p>© ${movie.year} ${movie.director}</p>

            </div>

        </div>

    `;

}



// ── Filter: search ────────────────────────────────────────────

function filterSongs(query) {

    query = query.toLowerCase().trim();

    if (!query) {

        showSection('allsongs');

        return;

    }



    // Show allsongs section with filtered results

    ['home', 'recentlyadded', 'movies', 'moviedetail'].forEach(s => {

        const el = document.getElementById('section-' + s);

        if (el) el.style.display = 'none';

    });

    document.getElementById('section-allsongs').style.display = '';



    const filtered = player.playlist

        .filter(s => s.name.toLowerCase().includes(query) || s.movie.toLowerCase().includes(query))

        .sort((a, b) => a.name.localeCompare(b.name));



    renderSongsList(filtered, document.getElementById('songsList'));

}



// ── Filter: by movie name ─────────────────────────────────────

function filterByMovie(movieTitle) {

    const idx = MOVIES.findIndex(m => m.title === movieTitle);

    if (idx !== -1) showMovieDetail(idx);

}



// ── Helpers ───────────────────────────────────────────────────

function fmtTime(secs) {

    if (!secs || isNaN(secs)) return '─:──';

    const m = Math.floor(secs / 60);

    const s = Math.floor(secs % 60);

    return m + ':' + String(s).padStart(2, '0');

}

// Update navigation bar time displays
function updateNavBarTime() {
    const currentTimeEl = document.querySelector('.current-time');
    const totalTimeEl = document.querySelector('.total-time');

    if (currentTimeEl && player.audio.currentTime) {
        currentTimeEl.textContent = fmtTime(player.audio.currentTime);
    }
    if (totalTimeEl && player.audio.duration) {
        totalTimeEl.textContent = fmtTime(player.audio.duration);
    }
}

// Add more frequent time updates using requestAnimationFrame
let lastTimeUpdate = 0;
function frequentTimeUpdate() {
    if (player.isPlaying && player.audio.currentTime) {
        const now = Date.now();
        if (now - lastTimeUpdate > 100) { // Update every 100ms
            updateNavBarTime();
            lastTimeUpdate = now;
        }
    }
    requestAnimationFrame(frequentTimeUpdate);
}

// Start frequent updates when audio is playing
player.audio.addEventListener('play', () => {
    frequentTimeUpdate();
});

player.audio.addEventListener('pause', () => {
    // Final update when pausing
    updateNavBarTime();
});





// ── Duration cache & background loader ───────────────────────

const durationCache = {}; // file -> seconds



function loadDurationsInBackground() {

    let i = 0;

    const BATCH = 3; // load 3 at a time to avoid overloading



    function loadNext() {

        if (i >= player.playlist.length) return;

        const batch = player.playlist.slice(i, i + BATCH);

        i += BATCH;

        let done = 0;

        batch.forEach(song => {

            if (durationCache[song.file] !== undefined) {

                done++;

                if (done === batch.length) setTimeout(loadNext, 50);

                return;

            }

            const a = new Audio();

            a.preload = 'metadata';

            a.src = song.file;

            a.addEventListener('loadedmetadata', () => {

                durationCache[song.file] = a.duration;

                updateDurationInUI(song.file, a.duration);

                done++;

                if (done === batch.length) setTimeout(loadNext, 80);

            });

            a.addEventListener('error', () => {

                durationCache[song.file] = 0;

                done++;

                if (done === batch.length) setTimeout(loadNext, 80);

            });

        });

    }

    loadNext();

}



// Update time cells live as durations load in

function updateDurationInUI(file, duration) {

    const timeStr = fmtTime(duration);

    // Update song list rows

    document.querySelectorAll('.song-item').forEach(el => {

        const idx = parseInt(el.dataset.index);

        if (idx >= 0 && player.playlist[idx] && player.playlist[idx].file === file) {

            const cell = el.querySelector('.song-time-cell');

            if (cell) cell.textContent = timeStr;

        }

    });

    // Update album track rows

    document.querySelectorAll('.album-track').forEach(el => {

        const idx = parseInt(el.dataset.index);

        if (idx >= 0 && player.playlist[idx] && player.playlist[idx].file === file) {

            const cell = el.querySelector('.album-track-time');

            if (cell) cell.textContent = timeStr;

        }

    });

}



// ── Init ──────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

    buildPlaylist();

    setupAudio();

    setupControls();

    renderPopularSongs();

    renderMoviesGrid('moviesHomeGrid');

    renderSidebarMovies();

    showSection('home');

    // Start loading durations in background after short delay

    setTimeout(loadDurationsInBackground, 800);

    console.log('✅ JRNTR Music Player ready —', player.playlist.length, 'songs loaded');

    console.log('⚠️  Make sure you are running via localhost (not file://) for audio to work.');

});



// Global access

window.loadSong = loadSong;

window.showSection = showSection;

window.showMovieDetail = showMovieDetail;

window.filterSongs = filterSongs;

window.filterByMovie = filterByMovie;

window.setActive = setActive;

window.renderRecentlyAdded = renderRecentlyAdded;

window.togglePlayPause = togglePlayPause;

window.playNext = playNext;

window.playPrev = playPrev;

window.openMusicPlayer = openMusicPlayer;



// ── Mobile Menu ───────────────────────────────────────────────

function openMobileMenu() {

    document.getElementById('mobileMenuOverlay').classList.add('open');

    document.body.style.overflow = 'hidden';

}



function closeMobileMenu() {

    document.getElementById('mobileMenuOverlay').classList.remove('open');

    document.body.style.overflow = '';

}



function setMobileActive(el) {

    document.querySelectorAll('.mobile-nav-item').forEach(n => n.classList.remove('active'));

    if (el) el.classList.add('active');

}



window.openMobileMenu = openMobileMenu;

window.closeMobileMenu = closeMobileMenu;

window.setMobileActive = setMobileActive;



// ── Mobile Mini-player update ─────────────────────────────────

function updateMobileMiniPlayer() {

    const miniPlayer = document.getElementById('mobileMiniPlayer');

    if (!miniPlayer) return;



    const song = player.playlist[player.currentIndex];

    if (!song) {

        miniPlayer.style.display = 'none';

        return;

    }



    miniPlayer.style.display = 'flex';

    document.getElementById('miniPlayerName').textContent = song.name;

    document.getElementById('miniPlayerMovie').textContent = song.movie;

    const art = document.getElementById('miniPlayerArt');

    art.src = song.poster;

    art.style.display = 'block';



    // Sync play/pause icon

    const icon = document.getElementById('miniPlayIcon');

    if (icon) {

        icon.innerHTML = player.isPlaying

            ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="#1d1d1f"/>'

            : '<path d="M8 5v14l11-7z" fill="#1d1d1f"/>';

    }

}



// ── Music Player Modal ──────────────────────────────────────

function openMusicPlayer() {

    const modal = document.getElementById('musicPlayerModal');

    if (!modal) return;



    modal.classList.add('open');

    document.body.style.overflow = 'hidden';



    // Sync modal with current player state

    updateMusicPlayerModal();



    // Show notification briefly

    const notification = document.getElementById('playerNotification');

    if (notification) {

        notification.style.display = 'flex';

        setTimeout(() => {

            notification.style.display = 'none';

        }, 5000);

    }

}



function closeMusicPlayer() {

    const modal = document.getElementById('musicPlayerModal');

    if (!modal) return;



    modal.classList.remove('open');

    document.body.style.overflow = '';

}



function updateMusicPlayerModal() {

    const song = player.playlist[player.currentIndex];

    if (!song) return;



    // Update song info

    const songName = document.getElementById('playerSongName');

    const movieName = document.getElementById('playerMovieName');

    const albumArt = document.getElementById('playerAlbumArt');

    const fallback = document.querySelector('.player-album-fallback');



    if (songName) songName.textContent = song.name;

    if (movieName) movieName.textContent = song.movie + ' — ' + song.year;



    if (albumArt) {

        albumArt.src = song.poster;

        albumArt.style.display = 'block';

        albumArt.onerror = () => {

            albumArt.style.display = 'none';

            if (fallback) fallback.style.display = 'flex';

        };

    }



    // Update play/pause icon

    const playIcon = document.getElementById('playerPlayIcon');

    if (playIcon) {

        playIcon.innerHTML = player.isPlaying

            ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="#1d1d1f"/>'

            : '<path d="M8.5 6.5l15 7.5-15 7.5V6.5z" fill="#1d1d1f"/>';

    }



    // Update progress bar

    const progressBar = document.getElementById('playerProgressBar');

    const currentTime = document.getElementById('playerCurrentTime');

    const totalTime = document.getElementById('playerTotalTime');



    if (player.audio.duration) {

        const pct = (player.audio.currentTime / player.audio.duration) * 100;

        if (progressBar) progressBar.style.width = pct + '%';

        if (currentTime) currentTime.textContent = fmtTime(player.audio.currentTime);

        if (totalTime) totalTime.textContent = fmtTime(player.audio.duration);

    }



    // Add progress bar click handler for modal

    const modalProgressTrack = document.getElementById('playerProgressTrack');

    if (modalProgressTrack && !modalProgressTrack.hasAttribute('data-listener-added')) {

        modalProgressTrack.addEventListener('click', (e) => {

            if (!player.audio.duration) return;

            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const percentage = x / rect.width;

            const newTime = percentage * player.audio.duration;

            player.audio.currentTime = newTime;

        });

        modalProgressTrack.setAttribute('data-listener-added', 'true');

    }



    // Update volume slider

    const volumeSlider = document.getElementById('playerVolumeSlider');

    if (volumeSlider) {

        volumeSlider.value = player.volume * 100;

        // Add event listener if not already added

        if (!volumeSlider.hasAttribute('data-listener-added')) {

            volumeSlider.addEventListener('input', (e) => {

                player.volume = e.target.value / 100;

                player.audio.volume = player.volume;

            });

            volumeSlider.setAttribute('data-listener-added', 'true');

        }

    }



    // Update shuffle/repeat buttons

    const shuffleBtn = document.querySelector('.player-control-btn');

    const repeatBtn = document.querySelectorAll('.player-control-btn')[3];



    if (shuffleBtn) shuffleBtn.style.opacity = player.isShuffle ? '1' : '0.5';

    if (repeatBtn) repeatBtn.style.opacity = player.isRepeat ? '1' : '0.5';

}



function closeNotification() {

    const notification = document.getElementById('playerNotification');

    if (notification) {

        notification.style.display = 'none';

    }

}



// Placeholder functions for footer buttons

function showLyrics() {

    console.log('Lyrics feature coming soon');

}



function showQueue() {

    console.log('Queue feature coming soon');

}



function showMoreOptions() {

    console.log('More options feature coming soon');

}



// Volume control functions

function increaseVolume() {

    player.volume = Math.min(1, player.volume + 0.1);

    player.audio.volume = player.volume;

    const volumeSlider = document.getElementById('playerVolumeSlider');

    if (volumeSlider) {

        volumeSlider.value = player.volume * 100;

    }

}



function decreaseVolume() {

    player.volume = Math.max(0, player.volume - 0.1);

    player.audio.volume = player.volume;

    const volumeSlider = document.getElementById('playerVolumeSlider');

    if (volumeSlider) {

        volumeSlider.value = player.volume * 100;

    }

}



window.closeMusicPlayer = closeMusicPlayer;

window.increaseVolume = increaseVolume;

window.decreaseVolume = decreaseVolume;
