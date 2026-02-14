  
        // Jr NTR Music Gallery - Apple Music Style JavaScript

// Complete Jr NTR Filmography with Popular Songs and Gallery Images
const movies = [
    {
        title: "Ninnu Choodalani",
        year: 2001,
        director: "V.R. Pratap",
        poster: "posters/ninnu-choodalani.jpg",
        gallery: [
            "gallery/ninnu-choodalani-1.jpg",
            "gallery/ninnu-choodalani-2.jpg",
            "gallery/ninnu-choodalani-3.jpg",
            "gallery/ninnu-choodalani-4.jpg"
        ],
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
        poster: "posters/studentno1.jpg",
        gallery: [
            "gallery/student-no-1-1.jpg",
            "gallery/student-no-1-2.jpg",
            "gallery/student-no-1-3.jpg",
            "gallery/student-no-1-4.jpg"
        ],
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
        poster: "posters/subbu.jpg",
        gallery: [
            "gallery/subbu-1.jpg",
            "gallery/subbu-2.jpg",
            "gallery/subbu-3.jpg",
            "gallery/subbu-4.jpg"
        ],
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
        poster: "posters/aadi.jpg",
        gallery: [
            "gallery/aadi-1.jpg",
            "gallery/aadi-2.jpg",
            "gallery/aadi-3.jpg",
            "gallery/aadi-4.jpg"
        ],
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
        poster: "posters/allari-ramudu.jpg",
        gallery: [
            "gallery/allari-ramudu-1.jpg",
            "gallery/allari-ramudu-2.jpg",
            "gallery/allari-ramudu-3.jpg",
            "gallery/allari-ramudu-4.jpg"
        ],
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
        poster: "posters/naaga.jpg",
        gallery: [
            "gallery/naaga-1.jpg",
            "gallery/naaga-2.jpg",
            "gallery/naaga-3.jpg",
            "gallery/naaga-4.jpg"
        ],
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
        poster: "posters/simhadri.jpg",
        gallery: [
            "gallery/simhadri-1.jpg",
            "gallery/simhadri-2.jpg",
            "gallery/simhadri-3.jpg",
            "gallery/simhadri-4.jpg"
        ],
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
        poster: "posters/andhrawala.jpg",
        gallery: [
            "gallery/andhrawala-1.jpg",
            "gallery/andhrawala-2.jpg",
            "gallery/andhrawala-3.jpg",
            "gallery/andhrawala-4.jpg"
        ],
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
        poster: "posters/samba.jpg",
        gallery: [
            "gallery/samba-1.jpg",
            "gallery/samba-2.jpg",
            "gallery/samba-3.jpg",
            "gallery/samba-4.jpg"
        ],
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
        poster: "posters/naa-alludu.jpg",
        gallery: [
            "gallery/naa-alludu-1.jpg",
            "gallery/naa-alludu-2.jpg",
            "gallery/naa-alludu-3.jpg",
            "gallery/naa-alludu-4.jpg"
        ],
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
        poster: "posters/narasimhudu.jpg",
        gallery: [
            "gallery/narasimhudu-1.jpg",
            "gallery/narasimhudu-2.jpg",
            "gallery/narasimhudu-3.jpg",
            "gallery/narasimhudu-4.jpg"
        ],
        songs: [
            { name: "Krishnamurariki", file: "Songs/Krishnamurariki-Narasimhudu.mp3" },
            { name: " Muddoche Kopalu", file: "Songs/Muddoche Kopalu-Narasimhudu.mp3" },
            { name: "Muddula Gopala", file: "Songs/Muddula Gopala-Narasimhudu.mp3" },
            { name: "Rajamandrike", file: "Songs/Rajamandrike-Narasimhudu.mp3" },
            { name: "Singu Singu", file: "Songs/Singu Singu-Narasimhudu.mp3" },
            { name: " Yeluko Nayaka", file: "Songs/Yeluko Nayaka-Narasimhudu.mp3" }
        ]
    },
    {
        title: "Ashok",
        year: 2006,
        director: "Surender Reddy",
        poster: "posters/ashok.jpg",
        gallery: [
            "gallery/ashok-1.jpg",
            "gallery/ashok-2.jpg",
            "gallery/ashok-3.jpg",
            "gallery/ashok-4.jpg"
        ],
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
        poster: "posters/rakhi.jpg",
        gallery: [
            "gallery/rakhi-1.jpg",
            "gallery/rakhi-2.jpg",
            "gallery/rakhi-3.jpg",
            "gallery/rakhi-4.jpg"
        ],
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
        poster: "posters/yamadonga.jpg",
        gallery: [
            "gallery/yamadonga-1.jpg",
            "gallery/yamadonga-2.jpg",
            "gallery/yamadonga-3.jpg",
            "gallery/yamadonga-4.jpg"
        ],
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
        poster: "posters/kantri.jpg",
        gallery: [
            "gallery/kantri-1.jpg",
            "gallery/kantri-2.jpg",
            "gallery/kantri-3.jpg",
            "gallery/kantri-4.jpg"
        ],
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
        poster: "posters/adhurs.jpg",
        gallery: [
            "gallery/adhurs-1.jpg",
            "gallery/adhurs-2.jpg",
            "gallery/adhurs-3.jpg",
            "gallery/adhurs-4.jpg"
        ],
        songs: [
            { name: "Shiva Shambho", file: "Songs/Shiva Shambho-Adhurs.mp3" },
            { name: "Chandrakala", file: "Songs/Chandrakala-Adhurs.mp3" },
            { name: "Chary", file: "Songs/Chary-Adhurs.mp3" },
            { name: "Neethone", file: "Songs/Neethone-Adhurs.mp3" },
            { name: " Assalaam Valekhum", file: "Songs/Assalaam Valekhum-Adhurs.mp3" }
        ]
    },
    {
        title: "Brindavanam",
        year: 2010,
        director: "Vamsi Paidipally",
        poster: "posters/brindavanam.jpg",
        gallery: [
            "gallery/brindavanam-1.jpg",
            "gallery/brindavanam-2.jpg",
            "gallery/brindavanam-3.jpg",
            "gallery/brindavanam-4.jpg"
        ],
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
        poster: "posters/shakti.jpg",
        gallery: [
            "gallery/shakti-1.jpg",
            "gallery/shakti-2.jpg",
            "gallery/shakti-3.jpg",
            "gallery/shakti-4.jpg"
        ],
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
        poster: "posters/oosaravelli.jpg",
        gallery: [
            "gallery/oosaravelli-1.jpg",
            "gallery/oosaravelli-2.jpg",
            "gallery/oosaravelli-3.jpg",
            "gallery/oosaravelli-4.jpg"
        ],
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
        poster: "posters/dhammu.jpg",
        gallery: [
            "gallery/dhammu-1.jpg",
            "gallery/dhammu-2.jpg",
            "gallery/dhammu-3.jpg",
            "gallery/dhammu-4.jpg"
        ],
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
        poster: "posters/baadshah.jpg",
        gallery: [
            "gallery/baadshah-1.jpg",
            "gallery/baadshah-2.jpg",
            "gallery/baadshah-3.jpg",
            "gallery/baadshah-4.jpg"
        ],
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
        poster: "posters/ramayya-vasthavayya.jpg",
        gallery: [
            "gallery/ramayya-vasthavayya-1.jpg",
            "gallery/ramayya-vasthavayya-2.jpg",
            "gallery/ramayya-vasthavayya-3.jpg",
            "gallery/ramayya-vasthavayya-4.jpg"
        ],
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
        poster: "posters/rabhasa.jpg",
        gallery: [
            "gallery/rabhasa-1.jpg",
            "gallery/rabhasa-2.jpg",
            "gallery/rabhasa-3.jpg",
            "gallery/rabhasa-4.jpg"
        ],
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
        poster: "posters/temper.jpg",
        gallery: [
            "gallery/temper-1.jpg",
            "gallery/temper-2.jpg",
            "gallery/temper-3.jpg",
            "gallery/temper-4.jpg"
        ],
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
        poster: "posters/nannaku-prematho.jpg",
        gallery: [
            "gallery/nannaku-prematho-1.jpg",
            "gallery/nannaku-prematho-2.jpg",
            "gallery/nannaku-prematho-3.jpg",
            "gallery/nannaku-prematho-4.jpg"
        ],
        songs: [
            { name: " Don't Stop", file: "Songs/3- Dont Stop-Nannaku Prematho.mp3" },
            { name: "Follow Follow", file: "Songs/1- Follow Follow-Nannaku Prematho.mp3" },
            { name: "Naa Manasu Neelo", file: "Songs/2-Naa Manasu Nannaku Prematho.mp3" },
            { name: "Love Me Again", file: "Songs/4-Love Me Again-Nannaku Prematho.mp3" },
            { name: " Love Dhebba", file: "Songs/5-Love Dhebba-Nannaku Prematho.mp3" },
            { name: "Nannaku Title", file: "Songs/6-Nannaku-Nannaku Prematho.mp3" }
        ]
    },
    {
        title: "Janatha Garage",
        year: 2016,
        director: "Koratala Siva",
        poster: "posters/janatha-garage.jpg",
        gallery: [
            "gallery/janatha-garage-1.jpg",
            "gallery/janatha-garage-2.jpg",
            "gallery/janatha-garage-3.jpg",
            "gallery/janatha-garage-4.jpg"
        ],
        songs: [
            { name: "Pranaamam", file: "Songs/Pranaamam  - Janatha Garage.mp3" },
            { name: " Rock On Bro", file: "Songs/Rock On Bro  - Janatha Garage.mp3" },
            { name: "Apple Beauty ", file: "Songs/Apple Beauty  - Janatha Garage.mp3" },
            { name: " Nee Selvadigi", file: "Songs/Nee Selavdigi  - Janatha Garage.mp3" },
            { name: "Jayaho Janatha ", file: "Songs/Jayaho Janatha  - Janatha Garage.mp3" },
            { name: "Pakka Local ", file: "Songs/Pakka Local  - Janatha Garage.mp3" }

        ]
    },
    {
        title: "Jai Lava Kusa",
        year: 2017,
        director: "Bobby",
        poster: "posters/jai-lava-kusa.jpg",
        gallery: [
            "gallery/jai-lava-kusa-1.jpg",
            "gallery/jai-lava-kusa-2.jpg",
            "gallery/jai-lava-kusa-3.jpg",
            "gallery/jai-lava-kusa-4.jpg"
        ],
        songs: [
            { name: "Dochestha ", file: "Songs/Dochestha-Jai Lava Kusa.mp3" },
            { name: "Tring Tring", file: "Songs/Tring Tring-Jai Lava Kusa.mp3" },
            { name: "Nee Kallalona", file: "Songs/Nee Kallalona-Jai Lava Kusa.mp3" },
            { name: " Raavana", file: "Songs/Raavana-Jai Lava Kusa.mp3" },
            { name: " Andamaina Lokam", file: "Songs/Andamaina Lokam-Jai Lava Kusa.mp3" },
            { name: " Swing Zara", file: "Songs/Swing Zara-Jai Lava Kusa.mp3" }
        ]
    },
    {
        title: "Aravinda Sametha",
        year: 2018,
        director: "Trivikram Srinivas",
        poster: "posters/aravinda-sametha.jpg",
        gallery: [
            "gallery/aravinda-sametha-1.jpg",
            "gallery/aravinda-sametha-2.jpg",
            "gallery/aravinda-sametha-3.jpg",
            "gallery/aravinda-sametha-4.jpg"
        ],
        songs: [
            { name: "Yeda Poyindo", file: "Songs/Yeda Poyindo - Aravinda Sametha Veera Raghava.mp3" },
            { name: "AnaganagAnaga", file: "Songs/Anaganaganaga - Aravinda Sametha Veera Raghava.mp3" },
            { name: "Peniviti", file: "Songs/Peniviti - Aravinda Sametha Veera Raghava.mp3" },
            { name: "Reddy Ikkada Soodu", file: "Songs/Reddy Ikkada Soodu - Aravinda Sametha Veera Raghava.mp3" },
            { name: "Reddamma Thalli – Penchal Das", file: "Songs/Reddamma Thalli - Aravinda Sametha Veera Raghava.mp3" },
            { name: "Reddemma Thalli (Female) ", file: "Songs/Reddamma Thalli (Female) - Aravinda Sametha Veera Raghava.mp3" }


        ]
    },
    {
        title: "RRR",
        year: 2022,
        director: "S.S. Rajamouli",
        poster: "posters/rrr.jpg",
        gallery: [
            "gallery/rrr-1.jpg",
            "gallery/rrr-2.jpg",
            "gallery/rrr-3.jpg",
            "gallery/rrr-4.jpg"
        ],
        songs: [
            { name: "Dosti", file: "Songs/Dosti - RRR.mp3" },
            { name: "Naatu Naatu", file: "Songs/Nattu Nattu- RRR.mp3" },
            { name: "Komuram Bheemudo", file: "Songs/Komuram Bheemudo- RRR.mp3" },
            { name: "Etthara Jenda", file: "Songs/Etthara Jenda- RRR.mp3" },
            { name: "Komma Uyyala", file: "Songs/Komma Uyyala- RRR.mp3" },
              { name: "Janani", file: "Songs/Janani - RRR.mp3" }
        ]
    },
    {
        title: "Devara Part 1",
        year: 2024,
        director: "Koratala Siva",
        poster: "posters/devara.jpg",
        gallery: [
            "gallery/devara-1.jpg",
            "gallery/devara-2.jpg",
            "gallery/devara-3.jpg",
            "gallery/devara-4.jpg"
        ],
        songs: [
            { name: "Ayudha Pooja", file: "Songs/Ayudha Pooja - Devara.mp3" },
            { name: "Fear Song", file: "Songs/Fear - Devara.mp3" },
            { name: "Chuttamalle", file: "Songs/Chuttamalle - Devara.mp3" },
            { name: "Daavudi", file: "Songs/Daavudi - Devara.mp3" },
            { name: "All Hail The Tiger", file: "Songs/All Hail The Tiger - Devara.mp3" },
             { name: " Devara Thandavam", file: "Songs/Devara Thandavam - Devara.mp3" }

        ]
    },
    {
        title: "NTRNEEL 1",
        year: 2027,
        director: "Prashanth Neel",
        poster: "posters/ntrneel-1.jpg",
        gallery: [
            "gallery/ntrneel-1.jpg",
            "gallery/ntrneel-2.jpg",
            "gallery/ntrneel-3.jpg",
            "gallery/ntrneel-4.jpg"
        ],
        songs: [
            { name: "NTR IN RAVI BASRUR", file: "Songs/NTR IN BASRUR - NTRNEEL 1.mp3" },
         

        ]
    }
];

// State management
let currentFilter = 'all';
let currentSearch = '';
let currentSongIndex = -1;
let currentMovieIndex = -1;
let isPlaying = false;
let allSongs = [];
let isMuted = false;
let previousVolume = 0.7;
let currentView = 'library';
let lightboxImages = [];
let lightboxIndex = 0;
let currentMovieForLightbox = null;

// Audio player element
const audioPlayer = document.getElementById('audioPlayer');
const musicPlayer = document.getElementById('musicPlayer');
const loadingOverlay = document.getElementById('loadingOverlay');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setTimeout(() => {
        loadingOverlay.classList.add('hidden');
    }, 1000);
});

function initializeApp() {
    // Flatten all songs into a single array
    allSongs = [];
    movies.forEach((movie, movieIdx) => {
        movie.songs.forEach((song, songIdx) => {
            allSongs.push({
                ...song,
                movieTitle: movie.title,
                movieYear: movie.year,
                movieIdx: movieIdx,
                songIdx: songIdx
            });
        });
    });

    renderAlbums();
    renderSongs();
    renderGallery();
    
    // Set initial volume
    audioPlayer.volume = 0.7;
    updateVolumeUI(0.7);
}

function setupEventListeners() {
    // User badge click
    const userBadge = document.getElementById('userBadge');
    const userMenu = document.getElementById('userMenu');
    
    userBadge.addEventListener('click', function(e) {
        e.stopPropagation();
        userMenu.classList.toggle('active');
    });

    // Close user menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!userBadge.contains(e.target)) {
            userMenu.classList.remove('active');
        }
    });

    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            switchView(view);
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.decade;
            renderAlbums();
            renderSongs();
            renderGallery();
        });
    });

    // Search input
    document.getElementById('searchInput').addEventListener('input', function(e) {
        currentSearch = e.target.value;
        
        // Show/hide clear button
        const clearBtn = document.getElementById('searchClear');
        if (currentSearch.length > 0) {
            clearBtn.classList.add('active');
        } else {
            clearBtn.classList.remove('active');
        }
        
        renderAlbums();
        renderSongs();
        renderGallery();
    });

    // Audio events
    audioPlayer.addEventListener('loadedmetadata', function() {
        document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('timeupdate', function() {
        updateProgress();
    });

    audioPlayer.addEventListener('ended', function() {
        nextSong();
    });

    // Volume slider
    const volumeSliderContainer = document.getElementById('volumeSliderContainer');
    
    volumeSliderContainer.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const volume = Math.max(0, Math.min(1, clickX / width));
        
        audioPlayer.volume = volume;
        updateVolumeUI(volume);
        
        if (volume > 0 && isMuted) {
            isMuted = false;
        }
    });

    volumeSliderContainer.addEventListener('mousedown', function(e) {
        const handleVolumeMove = (moveEvent) => {
            const rect = volumeSliderContainer.getBoundingClientRect();
            const moveX = moveEvent.clientX - rect.left;
            const width = rect.width;
            const volume = Math.max(0, Math.min(1, moveX / width));
            
            audioPlayer.volume = volume;
            updateVolumeUI(volume);
            
            if (volume > 0 && isMuted) {
                isMuted = false;
            }
        };

        const handleVolumeUp = () => {
            document.removeEventListener('mousemove', handleVolumeMove);
            document.removeEventListener('mouseup', handleVolumeUp);
        };

        document.addEventListener('mousemove', handleVolumeMove);
        document.addEventListener('mouseup', handleVolumeUp);
    });

    // Lightbox keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                navigateLightbox(-1);
            } else if (e.key === 'ArrowRight') {
                navigateLightbox(1);
            }
        }
    });

    // Touch support for lightbox swipe gestures
    let touchStartX = 0;
    let touchEndX = 0;
    
    const lightbox = document.getElementById('lightbox');
    
    lightbox.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    lightbox.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - next image
                navigateLightbox(1);
            } else {
                // Swiped right - previous image
                navigateLightbox(-1);
            }
        }
    }
}

function switchView(view) {
    currentView = view;
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
    
    // Show/hide views
    const libraryView = document.getElementById('libraryView');
    const galleryView = document.getElementById('galleryView');
    
    if (view === 'library') {
        libraryView.classList.remove('hidden');
        galleryView.classList.add('hidden');
    } else if (view === 'gallery') {
        libraryView.classList.add('hidden');
        galleryView.classList.remove('hidden');
    } else if (view === 'search') {
        libraryView.classList.remove('hidden');
        galleryView.classList.add('hidden');
        document.getElementById('searchInput').focus();
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    currentSearch = '';
    document.getElementById('searchClear').classList.remove('active');
    renderAlbums();
    renderSongs();
    renderGallery();
}

function updateVolumeUI(volume) {
    const volumeSliderFill = document.getElementById('volumeSliderFill');
    const volumeSliderThumb = document.getElementById('volumeSliderThumb');
    const volumeIcon = document.getElementById('volumeIcon');
    
    const percentage = volume * 100;
    volumeSliderFill.style.width = percentage + '%';
    volumeSliderThumb.style.left = percentage + '%';
    
    // Update volume icon based on volume level
    if (volume === 0 || isMuted) {
        volumeIcon.textContent = '🔇';
    } else if (volume < 0.3) {
        volumeIcon.textContent = '🔈';
    } else if (volume < 0.7) {
        volumeIcon.textContent = '🔉';
    } else {
        volumeIcon.textContent = '🔊';
    }
}

function toggleMute() {
    if (isMuted) {
        audioPlayer.volume = previousVolume;
        updateVolumeUI(previousVolume);
        isMuted = false;
    } else {
        previousVolume = audioPlayer.volume;
        audioPlayer.volume = 0;
        updateVolumeUI(0);
        isMuted = true;
    }
}

function renderAlbums() {
    const grid = document.getElementById('albumsGrid');
    const noResults = document.getElementById('noAlbumsResults');
    let filteredMovies = getFilteredMovies();

    // Apply search filter to albums
    if (currentSearch) {
        filteredMovies = filteredMovies.filter(m =>
            m.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            m.director.toLowerCase().includes(currentSearch.toLowerCase()) ||
            m.songs.some(s => s.name.toLowerCase().includes(currentSearch.toLowerCase()))
        );
    }

    if (filteredMovies.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
    } else {
        grid.classList.remove('hidden');
        noResults.classList.add('hidden');
        
        grid.innerHTML = filteredMovies.map((movie, idx) => `
            <div class="album-card" onclick="playAlbum(${movies.indexOf(movie)})">
                <div class="album-cover">
                    <img src="${movie.poster}" alt="${movie.title}" class="album-cover-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="album-cover-placeholder" style="display:none;">🎬</div>
                    <div class="album-play-overlay">
                        <button class="album-play-btn" onclick="event.stopPropagation(); playAlbum(${movies.indexOf(movie)})">▶</button>
                    </div>
                </div>
                <div class="album-info">
                    <div class="album-title">${movie.title}</div>
                    <div class="album-year">${movie.year} · ${movie.songs.length} songs</div>
                </div>
            </div>
        `).join('');
    }
}

function renderSongs() {
    const list = document.getElementById('songsList');
    const noResults = document.getElementById('noSongsResults');
    let filteredSongs = allSongs;

    // Apply filter
    if (currentFilter !== 'all') {
        const [start, end] = currentFilter.split('-').map(Number);
        filteredSongs = filteredSongs.filter(s => s.movieYear >= start && s.movieYear <= end);
    }

    // Apply search
    if (currentSearch) {
        filteredSongs = filteredSongs.filter(s =>
            s.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            s.movieTitle.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }

    if (filteredSongs.length === 0) {
        list.classList.add('hidden');
        noResults.classList.remove('hidden');
    } else {
        list.classList.remove('hidden');
        noResults.classList.add('hidden');
        
        list.innerHTML = filteredSongs.map((song, idx) => {
            const isCurrentlyPlaying = currentMovieIndex === song.movieIdx && currentSongIndex === song.songIdx;
            return `
                <div class="song-item ${isCurrentlyPlaying ? 'playing' : ''}" onclick="playSongFromList(${song.movieIdx}, ${song.songIdx})">
                    <div class="song-number">${isCurrentlyPlaying && isPlaying ? '♪' : idx + 1}</div>
                    <div class="song-details">
                        <div class="song-name">${song.name}</div>
                        <div class="song-meta">${song.movieTitle} (${song.movieYear})</div>
                    </div>
                    <div class="song-duration">3:45</div>
                </div>
            `;
        }).join('');
    }
}

function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    let filteredMovies = getFilteredMovies();

    // Apply search filter
    if (currentSearch) {
        filteredMovies = filteredMovies.filter(m =>
            m.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            m.director.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }

    grid.innerHTML = filteredMovies.map((movie, movieIdx) => `
        <div class="gallery-movie-section">
            <div class="gallery-movie-title">${movie.title}</div>
            <div class="gallery-movie-year">${movie.year} · ${movie.director}</div>
            <div class="gallery-images">
                ${movie.gallery.map((img, imgIdx) => `
                    <div class="gallery-image-wrapper" onclick="openLightbox(${movies.indexOf(movie)}, ${imgIdx})">
                        <img src="${img}" alt="${movie.title} - Image ${imgIdx + 1}" class="gallery-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="gallery-image-placeholder" style="display:none;">📷</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function openLightbox(movieIdx, imgIdx) {
    const movie = movies[movieIdx];
    currentMovieForLightbox = movieIdx;
    lightboxImages = movie.gallery;
    lightboxIndex = imgIdx;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxPoster = document.getElementById('lightboxPoster');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCounter = document.getElementById('lightboxCounter');
    
    // Set gallery image
    lightboxImage.src = lightboxImages[lightboxIndex];
    
    // Set movie poster
    lightboxPoster.src = movie.poster;
    lightboxPoster.alt = movie.title + ' Poster';
    
    // Set title and counter
    lightboxTitle.textContent = movie.title + ' (' + movie.year + ')';
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Close on backdrop click
    lightbox.onclick = function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    };
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightbox.onclick = null;
    currentMovieForLightbox = null;
}

function navigateLightbox(direction) {
    lightboxIndex += direction;
    
    if (lightboxIndex < 0) {
        lightboxIndex = lightboxImages.length - 1;
    } else if (lightboxIndex >= lightboxImages.length) {
        lightboxIndex = 0;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    
    lightboxImage.src = lightboxImages[lightboxIndex];
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

function getFilteredMovies() {
    if (currentFilter === 'all') {
        return movies;
    }
    const [start, end] = currentFilter.split('-').map(Number);
    return movies.filter(m => m.year >= start && m.year <= end);
}

function playAlbum(movieIdx) {
    if (movies[movieIdx].songs.length > 0) {
        playSong(movieIdx, 0);
    }
}

function playSongFromList(movieIdx, songIdx) {
    playSong(movieIdx, songIdx);
}

function playSong(movieIdx, songIdx) {
    currentMovieIndex = movieIdx;
    currentSongIndex = songIdx;

    const movie = movies[movieIdx];
    const song = movie.songs[songIdx];

    // Update player UI
    document.getElementById('playerSongName').textContent = song.name;
    document.getElementById('playerArtist').textContent = `${movie.title} · Jr NTR`;
    
    // Update album art with movie poster
    const albumArtContainer = document.getElementById('playerAlbumArt');
    albumArtContainer.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="album-art-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="album-art-placeholder" style="display:none;">🎵</div>
    `;
    
    // Show player
    musicPlayer.classList.add('active');

    // Load and play audio
    audioPlayer.src = song.file;
    audioPlayer.play().then(() => {
        isPlaying = true;
        updatePlayButton();
        renderSongs(); // Re-render to show current playing song
    }).catch(error => {
        console.log('Could not play audio:', error);
    });
}

function togglePlay() {
    if (currentMovieIndex === -1) return;

    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioPlayer.play();
        isPlaying = true;
    }
    updatePlayButton();
}

function updatePlayButton() {
    const playBtn = document.getElementById('playBtn');
    
    if (isPlaying) {
        playBtn.textContent = '⏸';
    } else {
        playBtn.textContent = '▶';
    }
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

    const progressTrack = event.currentTarget;
    const rect = progressTrack.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    
    audioPlayer.currentTime = audioPlayer.duration * percentage;
}

function updateProgress() {
    if (!audioPlayer.duration) return;

    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    const progressFill = document.getElementById('progressFill');
    
    progressFill.style.width = percentage + '%';
    
    document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function playAll() {
    if (allSongs.length > 0) {
        playSong(0, 0);
    }
}

function shufflePlay() {
    if (allSongs.length > 0) {
        const randomSong = allSongs[Math.floor(Math.random() * allSongs.length)];
        playSong(randomSong.movieIdx, randomSong.songIdx);
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (musicPlayer.classList.contains('active') && e.target.tagName !== 'INPUT') {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight' && !document.getElementById('lightbox').classList.contains('active')) {
            nextSong();
        } else if (e.code === 'ArrowLeft' && !document.getElementById('lightbox').classList.contains('active')) {
            previousSong();
        }
    }
});
   