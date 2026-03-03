'use strict';


const MOVIES = [
    { title: "Ninnu Choodalani", year: 2001, director: "V.R. Pratap", poster: "posters/ninnu-choodalani.jpg", gallery: ["gallery/ninnu-choodalani-1.jpg", "gallery/ninnu-choodalani-2.jpg", "gallery/ninnu-choodalani-3.jpg", "gallery/ninnu-choodalani-4.jpg"], songs: [{ name: "Campuslo Kaaletti", file: "Songs/CampusloKaaletti.mp3" }, { name: "Echota Nenunna", file: "Songs/EchotaNenunna.mp3" }, { name: "Oopirochina Bapu", file: "Songs/OopirochinaBapuB.mp3" }] },
    { title: "Student No. 1", year: 2001, director: "S.S. Rajamouli", poster: "posters/studentno1.jpg", gallery: ["gallery/student-no-1-1.jpg", "gallery/student-no-1-2.jpg", "gallery/student-no-1-3.jpg", "gallery/student-no-1-4.jpg"], songs: [{ name: "Yevetti", file: "Songs/YevettiChesad0.mp3" }, { name: "Paddanandi", file: "Songs/Paddanandi.mp3" }, { name: "Okariki Okarye", file: "Songs/OkarikiOkarye.mp3" }, { name: "Kastha Ninu", file: "Songs/KasthaNinu.mp3" }, { name: "Kuchipudi", file: "Songs/Kuchipudi.mp3" }, { name: "Ekkado Putti", file: "Songs/EkkadoPutti.mp3" }] },
    { title: "Subbu", year: 2001, director: "Suresh Varma", poster: "posters/subbu.jpg", gallery: ["gallery/subbu-1.jpg", "gallery/subbu-2.jpg", "gallery/subbu-3.jpg", "gallery/subbu-4.jpg"], songs: [{ name: "Hari Hara", file: "Songs/HariHara.mp3" }, { name: "LOVE Pasayyanu", file: "Songs/LOVEPasayyanu.mp3" }, { name: "Masthu Masthu", file: "Songs/MasthuMasthu.mp3" }, { name: "Naa Kosame", file: "Songs/NaaKosame.mp3" }, { name: "Miva Miva", file: "Songs/VivaViva.mp3" }, { name: "Janani Janmabhoomini", file: "Songs/ananiJanmabhoomini.mp3" }] },
    { title: "Aadi", year: 2002, director: "V.V. Vinayak", poster: "posters/aadi.jpg", gallery: ["gallery/aadi-1.jpg", "gallery/aadi-2.jpg", "gallery/aadi-3.jpg", "gallery/aadi-4.jpg"], songs: [{ name: "Ayyo Rama", file: "Songs/AyyoRama-.mp3" }, { name: "Chiki Chiki", file: "Songs/ChikiChiki.mp3" }, { name: "Nee Navvula", file: "Songs/NeeNavvula.mp3" }, { name: "Pattu Okato Sari", file: "Songs/PattuOkatoSari.mp3" }, { name: "Sunnunda", file: "Songs/Sunnunda.mp3" }, { name: "Toli Pilupe", file: "Songs/ToliPilupe.mp3" }] },
    { title: "Allari Ramudu", year: 2002, director: "B. Gopal", poster: "posters/allari-ramudu.jpg", gallery: ["gallery/allari-ramudu-1.jpg", "gallery/allari-ramudu-2.jpg", "gallery/allari-ramudu-3.jpg", "gallery/allari-ramudu-4.jpg"], songs: [{ name: "Boddunu Choodayyo", file: "Songs/BoddunuChoodayyo.mp3" }, { name: "Chelliya Chelliye", file: "Songs/ChelliyaChelliye.mp3" }, { name: "Jadaku Jada", file: "Songs/JadakuJada.mp3" }, { name: "Oppula Kuppa", file: "Songs/OppulaKuppa.mp3" }, { name: "Renduvela Rendu Varaku", file: "Songs/RenduvelaRenduVaraku.mp3" }, { name: "Rukmini", file: "Songs/RenduvelaRenduVaraku.mp3" }] },
    { title: "Naaga", year: 2003, director: "D.K. Suresh", poster: "posters/naaga.jpg", gallery: ["gallery/naaga-1.jpg", "gallery/naaga-2.jpg", "gallery/naaga-3.jpg", "gallery/naaga-4.jpg"], songs: [{ name: "Dhool Anakapalli", file: "Songs/DhoolAnakapalli.mp3" }, { name: "Entha Chinna", file: "Songs/EnthaChinnaMudhu.mp3" }, { name: "Mecarina Mecarina", file: "Songs/MecarinaMecarina.mp3" }, { name: "Megham Karigenu", file: "Songs/MeghamKarigenu.mp3" }, { name: "Nayudore Pilla", file: "Songs/NayudorePilla.mp3" }, { name: "Oka Konte Pillane", file: "Songs/OkaKontePillane.mp3" }] },
    { title: "Simhadri", year: 2003, director: "S.S. Rajamouli", poster: "posters/simhadri.jpg", gallery: ["gallery/simhadri-1.jpg", "gallery/simhadri-2.jpg", "gallery/simhadri-3.jpg", "gallery/simhadri-4.jpg"], songs: [{ name: "Ammaina Nannaina", file: "Songs/AmmainaNannaina.mp3" }, { name: "Cheema Cheema", file: "Songs/CheemaCheema.mp3" }, { name: "Chinnadamme Cheekulu", file: "Songs/ChinnadammeCheekulu.mp3" }, { name: "Chiraku Anuko", file: "Songs/ChirakuAnuko.mp3" }, { name: "Nannedo Seyyamaku", file: "Songs/NannedoSeyyamaku.mp3" }, { name: "Nuvvu Whistlesthe", file: "Songs/NuvvuWhistlesthe.mp3" }, { name: "Singamalai", file: "Songs/Singamalai.mp3" }] },
    { title: "Andhrawala", year: 2004, director: "Puri Jagannadh", poster: "posters/andhrawala.jpg", gallery: ["gallery/andhrawala-1.jpg", "gallery/andhrawala-2.jpg", "gallery/andhrawala-3.jpg", "gallery/andhrawala-4.jpg"], songs: [{ name: "Gitchi Gitchi", file: "Songs/GitchiGitchi.mp3" }, { name: "Kokkokola missa", file: "Songs/Kokkokolamissa.mp3" }, { name: "Malleteegaroi", file: "Songs/Malleteegaroi.mp3" }, { name: "Nairey Nairey", file: "Songs/Nairey Nairey.mp3" }, { name: "Nipputunakai", file: "Songs/Nipputunakai.mp3" }, { name: "Unga Unga", file: "Songs/UngaUnga.mp3" }] },
    { title: "Samba", year: 2004, director: "V.V. Vinayak", poster: "posters/samba.jpg", gallery: ["gallery/samba-1.jpg", "gallery/samba-2.jpg", "gallery/samba-3.jpg", "gallery/samba-4.jpg"], songs: [{ name: "Dam Damare Dam", file: "Songs/DamDamareDam.mp3" }, { name: "Kita Kitalu Pettamak", file: "Songs/KitaKitaluPettamaku.mp3" }, { name: "Luxemburg Lux", file: "Songs/LuxemburgLux.mp3" }, { name: "Namasthe Namasthe", file: "Songs/NamastheNamasthe.mp3" }, { name: "Nandamuri Chandamama", file: "Songs/NandamuriChandamama.mp3" }, { name: "Tagilinadi Rabba", file: "Songs/TagilinadiRabba.mp3" }] },
    { title: "Naa Alludu", year: 2005, director: "Vara Mullapudi", poster: "posters/naa-alludu.jpg", gallery: ["gallery/naa-alludu-1.jpg", "gallery/naa-alludu-2.jpg", "gallery/naa-alludu-3.jpg", "gallery/naa-alludu-4.jpg"], songs: [{ name: "Andhala bommaro", file: "Songs/Andhala bommaroNaa Alludu.mp3" }, { name: "En Peru Murugan", file: "Songs/En Peru Murugan-Naa Alludu.mp3" }, { name: "Kandi Chenu Kada", file: "Songs/Kandi Chenu Kada-Naa Alludu.mp3" }, { name: "Nadumu Chusthe", file: "Songs/Nadumu Chusthe-Naa Alludu.mp3" }, { name: "Pattuko Pattuko", file: "Songs/Pattuko Pattuko-Naa Alludu.mp3" }, { name: "Pilla Chuste", file: "Songs/Pilla Chuste-Naa Alludu.mp3" }, { name: "Sayya Sayyare", file: "Songs/SayyaSayyare-Naa Alludu.mp3" }] },
    { title: "Narasimhudu", year: 2005, director: "B. Gopal", poster: "posters/narasimhudu.jpg", gallery: ["gallery/narasimhudu-1.jpg", "gallery/narasimhudu-2.jpg", "gallery/narasimhudu-3.jpg", "gallery/narasimhudu-4.jpg"], songs: [{ name: "Krishnamurariki", file: "Songs/Krishnamurariki-Narasimhudu.mp3" }, { name: "Muddoche Kopalu", file: "Songs/Muddoche Kopalu-Narasimhudu.mp3" }, { name: "Muddula Gopala", file: "Songs/Muddula Gopala-Narasimhudu.mp3" }, { name: "Rajamandrike", file: "Songs/Rajamandrike-Narasimhudu.mp3" }, { name: "Singu Singu", file: "Songs/Singu Singu-Narasimhudu.mp3" }, { name: "Yeluko Nayaka", file: "Songs/Yeluko Nayaka-Narasimhudu.mp3" }] },
    { title: "Ashok", year: 2006, director: "Surender Reddy", poster: "posters/ashok.jpg", gallery: ["gallery/ashok-1.jpg", "gallery/ashok-2.jpg", "gallery/ashok-3.jpg", "gallery/ashok-4.jpg"], songs: [{ name: "Gola Gola", file: "Songs/Gola Gola-Ashok.mp3" }, { name: "Jabiliki", file: "Songs/Jabiliki-Ashok.mp3" }, { name: "Muntajmahalu", file: "Songs/Muntajmahalu-Ashok.mp3" }, { name: "Nuvvasalu", file: "Songs/Nuvvasalu-Ashok.mp3" }, { name: "Okachinni", file: "Songs/Okachinni-Ashok.mp3" }, { name: "Yekantanga", file: "Songs/Yekantanga-Ashok.mp3" }] },
    { title: "Rakhi", year: 2006, director: "Krishna Vamsi", poster: "posters/rakhi.jpg", gallery: ["gallery/rakhi-1.jpg", "gallery/rakhi-2.jpg", "gallery/rakhi-3.jpg", "gallery/rakhi-4.jpg"], songs: [{ name: "Kallalo Kalagni", file: "Songs/Kallalo Kalagni-Rakhi.mp3" }, { name: "Ninnu Choosthe", file: "Songs/Ninnu Choosthe-Rakhi.mp3" }, { name: "Rakhee Rakhee", file: "Songs/Rakhee Rakhee-Rakhi.mp3" }, { name: "Rangu Rabba", file: "Songs/Rangu Rabba Rabba-Rakhi.mp3" }, { name: "Vastava Vastava", file: "Songs/Vastava Vastava-Rakhi.mp3" }, { name: "Zara Zara", file: "Songs/Zara Zara-Rakhi.mp3" }] },
    { title: "Yamadonga", year: 2007, director: "S.S. Rajamouli", poster: "posters/yamadonga.jpg", gallery: ["gallery/yamadonga-1.jpg", "gallery/yamadonga-2.jpg", "gallery/yamadonga-3.jpg", "gallery/yamadonga-4.jpg"], songs: [{ name: "Naachore", file: "Songs/Naachore-Yamadonga.mp3" }, { name: "Nuvvu Muttukunte", file: "Songs/Nuvvu Muttukunte-Yamadonga.mp3" }, { name: "Nunugu Meesaaloda", file: "Songs/Nunugu Meesaaloda-Yamadonga.mp3" }, { name: "Young Yama", file: "Songs/Young Yama-Yamadonga.mp3" }, { name: "O Lammi Thikkaregind", file: "Songs/O Lammi Thikkareginda-Yamadonga.mp3" }, { name: "Rabbaru Gaajulu", file: "Songs/Rabbaru Gaajulu-Yamadonga.mp3" }] },
    { title: "Kantri", year: 2008, director: "Meher Ramesh", poster: "posters/kantri.jpg", gallery: ["gallery/kantri-1.jpg", "gallery/kantri-2.jpg", "gallery/kantri-3.jpg", "gallery/kantri-4.jpg"], songs: [{ name: "123 Nenoka Kantri", file: "Songs/123 Nenoka Kantri-Kantri.mp3" }, { name: "Ammaho", file: "Songs/Ammaho-Kantri.mp3" }, { name: "Janthar Manthar", file: "Songs/Janthar Manthar-Kantri.mp3" }, { name: "Raamare", file: "Songs/Raamare-Kantri.mp3" }, { name: "Vayasunamy", file: "Songs/Vayasunamy-Kantri.mp3" }] },
    { title: "Adhurs", year: 2010, director: "V.V. Vinayak", poster: "posters/adhurs.jpg", gallery: ["gallery/adhurs-1.jpg", "gallery/adhurs-2.jpg", "gallery/adhurs-3.jpg", "gallery/adhurs-4.jpg"], songs: [{ name: "Shiva Shambho", file: "Songs/Shiva Shambho-Adhurs.mp3" }, { name: "Chandrakala", file: "Songs/Chandrakala-Adhurs.mp3" }, { name: "Chary", file: "Songs/Chary-Adhurs.mp3" }, { name: "Neethone", file: "Songs/Neethone-Adhurs.mp3" }, { name: "Assalaam Valekhum", file: "Songs/Assalaam Valekhum-Adhurs.mp3" }] },
    { title: "Brindavanam", year: 2010, director: "Vamsi Paidipally", poster: "posters/brindavanam.jpg", gallery: ["gallery/brindavanam-1.jpg", "gallery/brindavanam-2.jpg", "gallery/brindavanam-3.jpg", "gallery/brindavanam-4.jpg"], songs: [{ name: "Yuvakula", file: "Songs/Yuvakula-Brindavanam.mp3" }, { name: "Eyi Raja", file: "Songs/Eyi Raja-Brindavanam.mp3" }, { name: "Nijamena", file: "Songs/Nijamena-Brindavanam.mp3" }, { name: "Chinnadho", file: "Songs/Chinnadho-Brindavanam.mp3" }, { name: "Oopirage", file: "Songs/Oopirage-Brindavanam.mp3" }, { name: "Vachadura", file: "Songs/Vachadura-Brindavanam.mp3" }] },
    { title: "Shakti", year: 2011, director: "Meher Ramesh", poster: "posters/shakti.jpg", gallery: ["gallery/shakti-1.jpg", "gallery/shakti-2.jpg", "gallery/shakti-3.jpg", "gallery/shakti-4.jpg"], songs: [{ name: "Thaliya Thaliya", file: "Songs/Thaliya Thaliya-Shakti.mp3" }, { name: "Surro Surra", file: "Songs/Surro Surra-Shakti.mp3" }, { name: "Prema Desham", file: "Songs/Prema Desham-Shakti.mp3" }, { name: "Yamaga Unde", file: "Songs/Yamaga Unde-Shakti.mp3" }, { name: "Mahishasura Mardhini", file: "Songs/Mahishasura Mardhini-Shakti.mp3" }] },
    { title: "Oosaravelli", year: 2011, director: "Surender Reddy", poster: "posters/oosaravelli.jpg", gallery: ["gallery/oosaravelli-1.jpg", "gallery/oosaravelli-2.jpg", "gallery/oosaravelli-3.jpg", "gallery/oosaravelli-4.jpg"], songs: [{ name: "Sri Anjaneyam", file: "Songs/Sri Anjaneyam-Oosaravelli.mp3" }, { name: "Nenante Naaku", file: "Songs/Nenante Naaku-Oosaravelli.mp3" }, { name: "Love Ante Caring", file: "Songs/Love Ante Caring-Oosaravelli.mp3" }, { name: "Niharika", file: "Songs/Niharika-Oosaravelli.mp3" }, { name: "Dandiya India", file: "Songs/Dandiya India-Oosaravelli.mp3" }, { name: "Yelango Yelango", file: "Songs/Yelango Yelango-Oosaravelli.mp3" }, { name: "Brathakaali", file: "Songs/Brathakaali-Oosaravelli.mp3" }] },
    { title: "Dhammu", year: 2012, director: "Boyapati Srinu", poster: "posters/dhammu.jpg", gallery: ["gallery/dhammu-1.jpg", "gallery/dhammu-2.jpg", "gallery/dhammu-3.jpg", "gallery/dhammu-4.jpg"], songs: [{ name: "Oh Lilli", file: "Songs/Oh Lilli-Dhammu.mp3" }, { name: "Raja Vasireddy", file: "Songs/Raja Vasireddy-Dhammu.mp3" }, { name: "Ruler", file: "Songs/Ruler-Dhammu.mp3" }, { name: "Dhammu", file: "Songs/Dhammu-Dhammu.mp3" }, { name: "Vaasthu Bagundhe", file: "Songs/Vaasthu Bagundhe-Dhammu.mp3" }] },
    { title: "Baadshah", year: 2013, director: "Srinu Vaitla", poster: "posters/baadshah.jpg", gallery: ["gallery/baadshah-1.jpg", "gallery/baadshah-2.jpg", "gallery/baadshah-3.jpg", "gallery/baadshah-4.jpg"], songs: [{ name: "Sairo Sairo", file: "Songs/Sairo Sairo-Baadshah.mp3" }, { name: "Diamond Girl", file: "Songs/Diamond Girl-Baadshah.mp3" }, { name: "Welcome Kanakku", file: "Songs/Welcome Kanakam-Baadshah.mp3" }, { name: "Banthi Poola Janaki", file: "Songs/Banthi Poola Janaki-Baadshah.mp3" }, { name: "Baadshah", file: "Songs/Baadshah-Baadshah.mp3" }, { name: "Rangoli Rangoli", file: "Songs/Rangoli Rangoli-Baadshah.mp3" }] },
    { title: "Ramayya Vasthavayya", year: 2013, director: "Harish Shankar", poster: "posters/ramayya-vasthavayya.jpg", gallery: ["gallery/ramayya-vasthavayya-1.jpg", "gallery/ramayya-vasthavayya-2.jpg", "gallery/ramayya-vasthavayya-3.jpg", "gallery/ramayya-vasthavayya-4.jpg"], songs: [{ name: "O Lailaa", file: "Songs/O Lailaa-Ramayya Vasthavayya.mp3" }, { name: "Pandaga Chesko", file: "Songs/Pandaga Chesko-Ramayya Vasthavayya.mp3" }, { name: "Jabilli", file: "Songs/Jabilli-Ramayya Vasthavayya.mp3" }, { name: "Kurrayeedu", file: "Songs/Kurrayeedu-Ramayya Vasthavayya.mp3" }, { name: "Neneppudaina", file: "Songs/Neneppudaina-Ramayya Vasthavayya.mp3" }, { name: "Idhi Ranarangam", file: "Songs/Idhi Ranarangam-Ramayya Vasthavayya.mp3" }] },
    { title: "Rabhasa", year: 2014, director: "Santosh Srinivas", poster: "posters/rabhasa.jpg", gallery: ["gallery/rabhasa-1.jpg", "gallery/rabhasa-2.jpg", "gallery/rabhasa-3.jpg", "gallery/rabhasa-4.jpg"], songs: [{ name: "Rakasi Rakasi", file: "Songs/Rakaasi Rakaasi-Rabhasa.mp3" }, { name: "Hawa Hawa", file: "Songs/Hawa Hawa-Rabhasa.mp3" }, { name: "Garam Garam Chilaka", file: "Songs/Garam Garam Chilaka-Rabhasa.mp3" }, { name: "Maar Salaam", file: "Songs/Maar Salaam-Rabhasa.mp3" }, { name: "Dam Damare", file: "Songs/Dam Damare-Rabhasa.mp3" }] },
    { title: "Temper", year: 2015, director: "Puri Jagannadh", poster: "posters/temper.jpg", gallery: ["gallery/temper-1.jpg", "gallery/temper-2.jpg", "gallery/temper-3.jpg", "gallery/temper-4.jpg"], songs: [{ name: "Ittage Recchipodham", file: "Songs/Ittage Recchipodham-Temper.mp3" }, { name: "One More Time", file: "Songs/One More Time-Temper.mp3" }, { name: "Choolenge Aasma", file: "Songs/ChoolengeAasma-Temper.mp3" }, { name: "Temper", file: "Songs/Temper-Temper.mp3" }, { name: "Devudaa", file: "Songs/Devuda-Temper.mp3" }] },
    { title: "Nannaku Prematho", year: 2016, director: "Sukumar", poster: "posters/nannaku-prematho.jpg", gallery: ["gallery/nannaku-prematho-1.jpg", "gallery/nannaku-prematho-2.jpg", "gallery/nannaku-prematho-3.jpg", "gallery/nannaku-prematho-4.jpg"], songs: [{ name: "Don't Stop", file: "Songs/3- Dont Stop-Nannaku Prematho.mp3" }, { name: "Follow Follow", file: "Songs/1- Follow Follow-Nannaku Prematho.mp3" }, { name: "Naa Manasu Neelo", file: "Songs/2-Naa Manasu Nannaku Prematho.mp3" }, { name: "Love Me Again", file: "Songs/4-Love Me Again-Nannaku Prematho.mp3" }, { name: "Love Dhebba", file: "Songs/5-Love Dhebba-Nannaku Prematho.mp3" }, { name: "Nannaku Title", file: "Songs/6-Nannaku-Nannaku Prematho.mp3" }] },
    { title: "Janatha Garage", year: 2016, director: "Koratala Siva", poster: "posters/janatha-garage.jpg", gallery: ["gallery/janatha-garage-1.jpg", "gallery/janatha-garage-2.jpg", "gallery/janatha-garage-3.jpg", "gallery/janatha-garage-4.jpg"], songs: [{ name: "Pranaamam", file: "Songs/Pranaamam  - Janatha Garage.mp3" }, { name: "Rock On Bro", file: "Songs/Rock On Bro  - Janatha Garage.mp3" }, { name: "Apple Beauty", file: "Songs/Apple Beauty  - Janatha Garage.mp3" }, { name: "Nee Selvadigi", file: "Songs/Nee Selavdigi  - Janatha Garage.mp3" }, { name: "Jayaho Janatha", file: "Songs/Jayaho Janatha  - Janatha Garage.mp3" }, { name: "Pakka Local", file: "Songs/Pakka Local  - Janatha Garage.mp3" }] },
    { title: "Jai Lava Kusa", year: 2017, director: "Bobby", poster: "posters/jai-lava-kusa.jpg", gallery: ["gallery/jai-lava-kusa-1.jpg", "gallery/jai-lava-kusa-2.jpg", "gallery/jai-lava-kusa-3.jpg", "gallery/jai-lava-kusa-4.jpg"], songs: [{ name: "Dochestha", file: "Songs/Dochestha-Jai Lava Kusa.mp3" }, { name: "Tring Tring", file: "Songs/Tring Tring-Jai Lava Kusa.mp3" }, { name: "Nee Kallalona", file: "Songs/Nee Kallalona-Jai Lava Kusa.mp3" }, { name: "Raavana", file: "Songs/Raavana-Jai Lava Kusa.mp3" }, { name: "Andamaina Lokam", file: "Songs/Andamaina Lokam-Jai Lava Kusa.mp3" }, { name: "Swing Zara", file: "Songs/Swing Zara-Jai Lava Kusa.mp3" }] },
    { title: "Aravinda Sametha", year: 2018, director: "Trivikram Srinivas", poster: "posters/aravinda-sametha.jpg", gallery: ["gallery/aravinda-sametha-1.jpg", "gallery/aravinda-sametha-2.jpg", "gallery/aravinda-sametha-3.jpg", "gallery/aravinda-sametha-4.jpg"], songs: [{ name: "Yeda Poyindo", file: "Songs/Yeda Poyindo - Aravinda Sametha Veera Raghava.mp3" }, { name: "AnaganagAnaga", file: "Songs/Anaganaganaga - Aravinda Sametha Veera Raghava.mp3" }, { name: "Peniviti", file: "Songs/Peniviti - Aravinda Sametha Veera Raghava.mp3" }, { name: "Reddy Ikkada Soodu", file: "Songs/Reddy Ikkada Soodu - Aravinda Sametha Veera Raghava.mp3" }, { name: "Reddamma Thalli", file: "Songs/Reddamma Thalli - Aravinda Sametha Veera Raghava.mp3" }, { name: "Reddemma Thalli (Female)", file: "Songs/Reddamma Thalli (Female) - Aravinda Sametha Veera Raghava.mp3" }] },
    { title: "RRR", year: 2022, director: "S.S. Rajamouli", poster: "posters/rrr.jpg", gallery: ["gallery/rrr-1.jpg", "gallery/rrr-2.jpg", "gallery/rrr-3.jpg", "gallery/rrr-4.jpg"], songs: [{ name: "Dosti", file: "Songs/Dosti - RRR.mp3" }, { name: "Naatu Naatu", file: "Songs/Nattu Nattu- RRR.mp3" }, { name: "Komuram Bheemudo", file: "Songs/Komuram Bheemudo- RRR.mp3" }, { name: "Etthara Jenda", file: "Songs/Etthara Jenda- RRR.mp3" }, { name: "Komma Uyyala", file: "Songs/Komma Uyyala- RRR.mp3" }, { name: "Janani", file: "Songs/Janani - RRR.mp3" }] },
    { title: "Devara Part 1", year: 2024, director: "Koratala Siva", poster: "posters/devara.jpg", gallery: ["gallery/devara-1.jpg", "gallery/devara-2.jpg", "gallery/devara-3.jpg", "gallery/devara-4.jpg"], songs: [{ name: "Ayudha Pooja", file: "Songs/Ayudha Pooja - Devara.mp3" }, { name: "Fear Song", file: "Songs/Fear - Devara.mp3" }, { name: "Chuttamalle", file: "Songs/Chuttamalle - Devara.mp3" }, { name: "Daavudi", file: "Songs/Daavudi - Devara.mp3" }, { name: "All Hail The Tiger", file: "Songs/All Hail The Tiger - Devara.mp3" }, { name: "Devara Thandavam", file: "Songs/Devara Thandavam - Devara.mp3" }] },
    { title: "NTRNEEL", year: 2027, director: "Prashanth Neel", poster: "posters/ntrneel-1.jpg", gallery: ["gallery/ntrneel-1.jpg", "gallery/ntrneel-2.jpg", "gallery/ntrneel-3.jpg", "gallery/ntrneel-4.jpg"], songs: [{ name: "NTR IN BASRUR ", file: "Songs/NTR IN BASRUR - NTRNEEL 1.mp3.mp3" },] }
];

// ── AUTH ────────────────────────────────────────────────────────────────────
const DEMO = { name: 'Demo User', email: 'demo@sangeetham.app', password: 'demo1234' };
let CURRENT_USER = null;
function getUsers() { return JSON.parse(localStorage.getItem('sg_users') || '[]'); }
function saveUsers(u) { localStorage.setItem('sg_users', JSON.stringify(u)); }
function switchTab(tab) {
    document.getElementById('tabSignin').classList.toggle('active', tab === 'signin');
    document.getElementById('tabSignup').classList.toggle('active', tab === 'signup');
    document.getElementById('formSignin').style.display = tab === 'signin' ? '' : 'none';
    document.getElementById('formSignup').style.display = tab === 'signup' ? '' : 'none';
    document.getElementById('authError').style.display = 'none';
}
function showAuthError(msg) { const el = document.getElementById('authError'); el.textContent = msg; el.style.display = 'block'; }
function doSignin() {
    const email = document.getElementById('siEmail').value.trim().toLowerCase();
    const pass = document.getElementById('siPass').value;
    if (!email || !pass) { showAuthError('Please fill in all fields.'); return; }
    if (email === DEMO.email && pass === DEMO.password) { loginUser({ name: DEMO.name, email: DEMO.email }); return; }
    const user = getUsers().find(u => u.email === email && u.password === pass);
    if (user) loginUser(user); else showAuthError('Incorrect email or password.');
}
function doSignup() {
    const name = document.getElementById('suName').value.trim();
    const email = document.getElementById('suEmail').value.trim().toLowerCase();
    const pass = document.getElementById('suPass').value;
    if (!name || !email || !pass) { showAuthError('Please fill in all fields.'); return; }
    if (pass.length < 6) { showAuthError('Password must be at least 6 characters.'); return; }
    const users = getUsers();
    if (users.find(u => u.email === email) || email === DEMO.email) { showAuthError('Email already registered.'); return; }
    users.push({ name, email, password: pass }); saveUsers(users); loginUser({ name, email });
}
function quickLogin(provider) { loginUser({ name: provider + ' User', email: provider.toLowerCase() + '@user.com' }); }
function loginUser(user) {
    CURRENT_USER = user;
    localStorage.setItem('sg_session', JSON.stringify(user));
    document.getElementById('authScreen').classList.add('hide');
    setTimeout(() => { document.getElementById('authScreen').style.display = 'none'; }, 500);
    document.getElementById('app').classList.add('visible');
    const initial = (user.name || 'U')[0].toUpperCase();
    document.getElementById('userAvatarBtn').textContent = initial;
    document.getElementById('udName').textContent = user.name;
    document.getElementById('udEmail').textContent = user.email;
    initApp();
}
function doSignout() {
    audio.pause(); CURRENT_USER = null;
    localStorage.removeItem('sg_session');
    document.getElementById('app').classList.remove('visible');
    document.getElementById('authScreen').style.display = 'flex';
    setTimeout(() => document.getElementById('authScreen').classList.remove('hide'), 20);
    document.getElementById('userDropdown').classList.remove('open');
    STATE.currentIdx = -1; STATE.isPlaying = false;
    document.getElementById('bottomPlayer').style.visibility = 'hidden';
    document.getElementById('miniPlayer').classList.remove('active');
}
function toggleUserMenu() { document.getElementById('userDropdown').classList.toggle('open'); }
document.addEventListener('click', e => {
    const wrap = document.querySelector('.user-menu-wrap');
    if (wrap && !wrap.contains(e.target)) document.getElementById('userDropdown').classList.remove('open');
});

// ── SONGS DATA ──────────────────────────────────────────────────────────────
const EMOJIS = ['🎵', '🎶', '🔥', '⭐', '🎸', '🎹', '🎺', '🥁', '🎷', '🪗', '🔱', '🎉', '🤝', '💫', '🌟'];
let emojiIdx = 0;
const ALL_SONGS = [];
MOVIES.forEach(movie => {
    movie.songs.forEach(s => {
        ALL_SONGS.push({
            id: `${movie.title}_${s.name}`.replace(/\s+/g, '_'),
            name: s.name, file: s.file, movie: movie.title, year: movie.year,
            director: movie.director, poster: movie.poster,
            emoji: EMOJIS[emojiIdx++ % EMOJIS.length], duration: 0
        });
    });
});
// Sort ALL_SONGS alphabetically by song name (A-Z)
ALL_SONGS.sort((a, b) => a.name.localeCompare(b.name));

// ── STATE ────────────────────────────────────────────────────────────────────
const STATE = {
    view: 'list', filtered: ALL_SONGS, activeMovie: null,
    currentIdx: -1, isPlaying: false, isShuffle: false, isRepeat: false,
    likedIds: new Set(JSON.parse(localStorage.getItem('sg_liked') || '[]')),
    recentIds: JSON.parse(localStorage.getItem('sg_recent') || '[]'),
    totalSeconds: parseInt(localStorage.getItem('sg_seconds') || '0'),
    npOpen: true,
};
const audio = document.getElementById('audioEl');

// ── HELPERS ──────────────────────────────────────────────────────────────────
function fmt(s) { s = parseInt(s) || 0; return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`; }
function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function toast(msg) { const w = document.getElementById('toastWrap'), t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; w.appendChild(t); setTimeout(() => t.remove(), 3000); }
function eq() { return '<div class="eq-mini"><div class="eq-b"></div><div class="eq-b"></div><div class="eq-b"></div></div>'; }
function syncNpPanel() {
    document.getElementById('npPanel').classList.toggle('hidden', !STATE.npOpen);
    document.getElementById('npToggleBtn').classList.toggle('active', STATE.npOpen);
}

// ── INIT ─────────────────────────────────────────────────────────────────────
function initApp() {
    buildMovieNav();
    setupLikeDelegation();
    showAll(document.getElementById('navAll'));
    document.getElementById('topbarCount').textContent = `${ALL_SONGS.length} songs`;
    const th = localStorage.getItem('sg_theme');
    if (th) { document.documentElement.dataset.theme = th; updateThemeUI(th); }
}

// ── LIKE DELEGATION ───────────────────────────────────────────────────────────
// Single event listener on contentArea using capture phase.
// This fires BEFORE any onclick/ontouchend on child elements,
// so we can stopPropagation cleanly without inline handlers on every button.
function setupLikeDelegation() {
    const area = document.getElementById('contentArea');
    function handle(e) {
        const btn = e.target.closest('[data-like-id]');
        if (!btn) return;
        e.stopPropagation();
        e.preventDefault();
        doLike(btn.dataset.likeId);
    }
    area.addEventListener('click', handle, true);
    area.addEventListener('touchend', handle, { capture: true, passive: false });
}

function doLike(id) {
    if (STATE.likedIds.has(id)) { STATE.likedIds.delete(id); toast('💔 Removed'); }
    else { STATE.likedIds.add(id); toast('❤️ Liked!'); }
    localStorage.setItem('sg_liked', JSON.stringify([...STATE.likedIds]));
    document.querySelectorAll(`[data-like-id="${id}"]`).forEach(b => {
        b.textContent = STATE.likedIds.has(id) ? '♥' : '♡';
        b.classList.toggle('liked', STATE.likedIds.has(id));
    });
    const cur = ALL_SONGS[STATE.currentIdx];
    if (cur && cur.id === id) {
        const lb = document.getElementById('pLikeBtn');
        lb.textContent = STATE.likedIds.has(id) ? '♥' : '♡';
        lb.classList.toggle('liked', STATE.likedIds.has(id));
    }
}
function toggleLikeCurrent() {
    if (STATE.currentIdx < 0) return;
    const s = ALL_SONGS[STATE.currentIdx];
    if (s) doLike(s.id);
}

// ── SIDEBAR ──────────────────────────────────────────────────────────────────
function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); document.getElementById('sidebarOverlay').style.cssText = 'opacity:1;pointer-events:all'; }
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('sidebarOverlay').style.cssText = ''; }

// ── MOVIE NAV ────────────────────────────────────────────────────────────────
function buildMovieNav() {
    document.getElementById('movieNav').innerHTML = MOVIES.map((m, i) => `
    <div class="nav-movie" id="navMovie_${i}" onclick="showMovie(${i},this);closeSidebar()">
      ${m.poster ? `<img src="${esc(m.poster)}" class="nav-poster" onerror="this.outerHTML='<div class=nav-poster-fb>🎬</div>'">` : `<div class="nav-poster-fb">🎬</div>`}
      <div class="nav-movie-info"><div class="nav-movie-title">${esc(m.title)}</div><div class="nav-movie-year">${m.year} · ${m.songs.length} songs</div></div>
    </div>`).join('');
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function renderHero(movie) {
    if (!movie) { document.getElementById('heroArea').innerHTML = ''; document.getElementById('galleryArea').innerHTML = ''; return; }
    document.getElementById('heroArea').innerHTML = `
    <div class="movie-hero">
      <div class="movie-hero-bg" ${movie.poster ? `style="background-image:url('${movie.poster}')"` : ''}></div>
      <div class="movie-hero-overlay"></div>
      <div class="movie-hero-content">
        ${movie.poster ? `<img src="${esc(movie.poster)}" class="movie-poster" onerror="this.outerHTML='<div class=movie-poster-fb>🎬</div>'">` : `<div class="movie-poster-fb">🎬</div>`}
        <div class="movie-meta">
          <div class="movie-badge">🎬 Telugu · ${movie.year}</div>
          <div class="movie-title">${esc(movie.title)}</div>
          <div class="movie-info">Director: ${esc(movie.director)}</div>
          <div class="movie-info">${movie.songs.length} Songs</div>
          <div class="movie-actions">
            <button class="btn-play" onclick="playMovie('${esc(movie.title)}')">▶ Play All</button>
            <button class="btn-outline" onclick="shuffleMovie('${esc(movie.title)}')">🔀 Shuffle</button>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('galleryArea').innerHTML = movie.gallery && movie.gallery.length
        ? `<div class="gallery-strip">${movie.gallery.map(img => `<img src="${esc(img)}" class="gallery-img" onclick="openLightbox('${esc(img)}')" onerror="this.style.display='none'">`).join('')}</div>` : '';
}

// ── NAV ───────────────────────────────────────────────────────────────────────
function clearNavActive() { document.querySelectorAll('.nav-item,.nav-movie').forEach(n => n.classList.remove('active')); }
function setMobileNavActive(id) { document.querySelectorAll('.mn-item').forEach(b => b.classList.remove('active')); const el = document.getElementById(id); if (el) el.classList.add('active'); }
function showAll(el) {
    if (el) { clearNavActive(); el.classList.add('active'); }
    setMobileNavActive('mnHome');
    STATE.activeMovie = null; STATE.filtered = ALL_SONGS;
    renderHero(null); renderSongs(ALL_SONGS, '🎵 All Songs');
    document.getElementById('topbarCount').textContent = `${ALL_SONGS.length} songs`;
    closeSidebar();
}
function showLiked(el) {
    if (el) { clearNavActive(); el.classList.add('active'); }
    setMobileNavActive('mnLiked');
    STATE.activeMovie = null;
    const liked = ALL_SONGS.filter(s => STATE.likedIds.has(s.id));
    STATE.filtered = liked; renderHero(null);
    if (!liked.length) {
        document.getElementById('galleryArea').innerHTML = '';
        document.getElementById('contentArea').innerHTML = '<div class="state-empty"><div class="icon">❤️</div><h3>No liked songs yet</h3><p>Heart any song to save it here</p></div>';
        return;
    }
    renderSongs(liked, '❤️ Liked Songs'); closeSidebar();
}
function showRecent(el) {
    if (el) { clearNavActive(); el.classList.add('active'); }
    setMobileNavActive('mnHome');
    STATE.activeMovie = null;
    const recent = STATE.recentIds.map(id => ALL_SONGS.find(s => s.id === id)).filter(Boolean);
    STATE.filtered = recent; renderHero(null);
    if (!recent.length) {
        document.getElementById('galleryArea').innerHTML = '';
        document.getElementById('contentArea').innerHTML = '<div class="state-empty"><div class="icon">🕐</div><h3>No history yet</h3><p>Play a song to see it here</p></div>';
        return;
    }
    renderSongs(recent, '🕐 Recently Played'); closeSidebar();
}
function showMovie(idx, el) {
    if (el) { clearNavActive(); el.classList.add('active'); }
    setMobileNavActive('mnMovies');
    const movie = MOVIES[idx];
    STATE.activeMovie = movie.title;
    const songs = ALL_SONGS.filter(s => s.movie === movie.title);
    STATE.filtered = songs;
    renderHero(movie); renderSongs(songs, `🎬 ${movie.title}`);
    document.getElementById('topbarCount').textContent = `${songs.length} songs`;
    document.getElementById('scrollArea').scrollTo({ top: 0, behavior: 'smooth' });
    closeSidebar();
}
function playMovie(title) { const idx = ALL_SONGS.findIndex(s => s.movie === title); if (idx >= 0) playSong(idx); }
function shuffleMovie(title) { const songs = ALL_SONGS.filter(s => s.movie === title); if (!songs.length) return; STATE.isShuffle = true; playSong(ALL_SONGS.indexOf(songs[Math.floor(Math.random() * songs.length)])); }
function mobileNav(page, el) {
    if (page === 'home') showAll(document.getElementById('navAll'));
    else if (page === 'movies') { if (MOVIES.length === 1) showMovie(0, document.getElementById('navMovie_0')); else showAll(document.getElementById('navAll')); }
    else if (page === 'liked') showLiked(null);
    else if (page === 'profile') { document.querySelectorAll('.mn-item').forEach(b => b.classList.remove('active')); if (el) el.classList.add('active'); showProfile(); }
}

// ── PROFILE ──────────────────────────────────────────────────────────────────
function showProfile() {
    renderHero(null); document.getElementById('galleryArea').innerHTML = ''; STATE.activeMovie = null;
    const u = CURRENT_USER || { name: 'User', email: '' };
    const initial = (u.name || 'U')[0].toUpperCase();
    const lc = STATE.likedIds.size, rc = STATE.recentIds.length, ts = ALL_SONGS.length, ml = Math.floor(STATE.totalSeconds / 60);
    const cs = STATE.currentIdx >= 0 ? ALL_SONGS[STATE.currentIdx] : null;
    const nowHtml = cs ? `<div class="prof-now-card"><div class="prof-now-thumb">${cs.poster ? `<img src="${esc(cs.poster)}" onerror="this.outerHTML='<span>${cs.emoji}</span>'">` : `<span>${cs.emoji}</span>`}</div><div class="prof-now-info"><div class="prof-now-label">🎵 Now Playing</div><div class="prof-now-title">${esc(cs.name)}</div><div class="prof-now-movie">${esc(cs.movie)}</div></div><button class="mp-play" style="width:36px;height:36px;font-size:15px" onclick="togglePlay()">${STATE.isPlaying ? '⏸' : '▶'}</button></div>` : '';
    document.getElementById('contentArea').innerHTML = `<div class="profile-page">
        <div class="prof-banner"><div class="prof-avatar-wrap"><div class="prof-avatar">${initial}</div></div></div>
        <div class="prof-info"><div class="prof-name">${esc(u.name)}</div><div class="prof-email">${esc(u.email)}</div><div class="prof-badge">🎵 Telugu Music Fan</div></div>
        <div class="prof-stats"><div class="prof-stat"><div class="prof-stat-val">${ts}</div><div class="prof-stat-label">Songs</div></div><div class="prof-stat"><div class="prof-stat-val">${lc}</div><div class="prof-stat-label">Liked</div></div><div class="prof-stat"><div class="prof-stat-val">${ml}</div><div class="prof-stat-label">Mins</div></div></div>
        ${nowHtml}
        <div class="prof-section"><div class="prof-section-title">Library</div><div class="prof-card">
            <div class="prof-row" onclick="showLiked(null)"><div class="prof-row-icon red">❤️</div><div class="prof-row-text"><div class="prof-row-label">Liked Songs</div><div class="prof-row-sub">${lc} song${lc !== 1 ? 's' : ''}</div></div><div class="prof-row-arrow">›</div></div>
            <div class="prof-row" onclick="showRecent(null)"><div class="prof-row-icon blue">🕐</div><div class="prof-row-text"><div class="prof-row-label">Recently Played</div><div class="prof-row-sub">${rc} song${rc !== 1 ? 's' : ''}</div></div><div class="prof-row-arrow">›</div></div>
            <div class="prof-row" onclick="showAll(document.getElementById('navAll'))"><div class="prof-row-icon amber">🎬</div><div class="prof-row-text"><div class="prof-row-label">Movies</div><div class="prof-row-sub">${MOVIES.length} movie${MOVIES.length !== 1 ? 's' : ''}</div></div><div class="prof-row-arrow">›</div></div>
        </div></div>
        <div class="prof-section"><div class="prof-section-title">Settings</div><div class="prof-card">
            <div class="prof-row" onclick="toggleTheme()"><div class="prof-row-icon" style="background:rgba(255,220,100,.12)">🌙</div><div class="prof-row-text"><div class="prof-row-label">Theme</div><div class="prof-row-sub">${document.documentElement.dataset.theme === 'light' ? 'Light mode on' : 'Dark mode on'}</div></div><div class="prof-row-arrow">›</div></div>
            <div class="prof-row" onclick="toggleShuffle()"><div class="prof-row-icon green">🔀</div><div class="prof-row-text"><div class="prof-row-label">Shuffle</div><div class="prof-row-sub">${STATE.isShuffle ? 'On' : 'Off'}</div></div><div class="prof-row-arrow">›</div></div>
            <div class="prof-row" onclick="toggleRepeat()"><div class="prof-row-icon blue">🔁</div><div class="prof-row-text"><div class="prof-row-label">Repeat</div><div class="prof-row-sub">${STATE.isRepeat ? 'On' : 'Off'}</div></div><div class="prof-row-arrow">›</div></div>
        </div></div>
        <div class="prof-section"><div class="prof-section-title">About</div><div class="prof-card"><div class="prof-row" style="cursor:default"><div class="prof-row-icon" style="background:rgba(245,166,35,.1)">🎵</div><div class="prof-row-text"><div class="prof-row-label">సంగీతం</div><div class="prof-row-sub">Telugu Music Player v1.0</div></div></div></div></div>
        <button class="prof-signout" onclick="doSignout()">↩ Sign Out</button>
    </div>`;
}

// ── SEARCH ────────────────────────────────────────────────────────────────────
let searchTimer;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainSearch').addEventListener('input', e => {
        clearTimeout(searchTimer);
        const q = e.target.value.trim().toLowerCase();
        if (!q) { STATE.filtered = STATE.activeMovie ? ALL_SONGS.filter(s => s.movie === STATE.activeMovie) : ALL_SONGS; renderSongs(STATE.filtered); return; }
        searchTimer = setTimeout(() => {
            const r = ALL_SONGS.filter(s => s.name.toLowerCase().includes(q) || s.movie.toLowerCase().includes(q) || s.director.toLowerCase().includes(q));
            STATE.filtered = r; renderHero(null); document.getElementById('galleryArea').innerHTML = '';
            renderSongs(r, `🔍 "${e.target.value.trim()}"`);
        }, 280);
    });
    const sess = localStorage.getItem('sg_session');
    if (sess) { try { loginUser(JSON.parse(sess)); } catch (e) { } }
});

// ── RENDER SONGS ──────────────────────────────────────────────────────────────
function renderSongs(songs, title = '🎵 Songs') {
    const count = songs.length, showMov = !STATE.activeMovie;
    let html = `<div class="section-header">
    <div class="section-title"><span class="pulse"></span>${esc(title)} <span style="font-size:12px;color:var(--text3);font-weight:400">${count} song${count !== 1 ? 's' : ''}</span></div>
    <div class="view-toggle">
      <button class="vt-btn ${STATE.view === 'grid' ? 'active' : ''}" onclick="setView('grid')">⊞</button>
      <button class="vt-btn ${STATE.view === 'list' ? 'active' : ''}" onclick="setView('list')">☰</button>
    </div></div>`;
    if (!count) { html += '<div class="state-empty"><div class="icon">🔍</div><h3>No songs found</h3></div>'; document.getElementById('contentArea').innerHTML = html; return; }
    if (STATE.view === 'grid') {
        html += '<div class="songs-grid">';
        songs.forEach(s => {
            const gi = ALL_SONGS.indexOf(s), liked = STATE.likedIds.has(s.id);
            const playing = STATE.currentIdx === gi && STATE.isPlaying, cur = STATE.currentIdx === gi;
            html += `<div class="song-card ${cur ? 'playing' : ''}" onclick="playSong(${gi})">
        <div class="song-art">
          ${s.poster ? `<img src="${esc(s.poster)}" onerror="this.style.display='none'">` : ''}
          <span>${s.emoji}</span>
          <div class="song-overlay"><div class="play-circle">${playing ? eq() : '▶'}</div></div>
        </div>
        <button class="like-btn ${liked ? 'liked' : ''}" data-like-id="${s.id}">${liked ? '♥' : '♡'}</button>
        <div class="song-info">
          <div class="song-name">${esc(s.name)}</div>
          ${showMov ? `<div class="song-movie">${esc(s.movie)}</div>` : ''}
          <div class="song-dur">${s.duration ? fmt(s.duration) : '—'}</div>
        </div>
      </div>`;
        });
        html += '</div>';
    } else {
        html += '<div class="song-list">';
        songs.forEach((s, i) => {
            const gi = ALL_SONGS.indexOf(s), liked = STATE.likedIds.has(s.id);
            const playing = STATE.currentIdx === gi && STATE.isPlaying, cur = STATE.currentIdx === gi;
            html += `<div class="song-row ${cur ? 'playing' : ''}" onclick="playSong(${gi})">
        <div class="row-num">${playing ? eq() : i + 1}</div>
        <div class="row-art">${s.poster ? `<img src="${esc(s.poster)}" onerror="this.outerHTML='<div class=row-art><span>${s.emoji}</span></div>'">` : `<span>${s.emoji}</span>`}</div>
        <div class="row-meta">
          <div class="row-title" style="${cur ? 'color:var(--amber)' : ''}">${esc(s.name)}</div>
          ${showMov ? `<div class="row-movie">${esc(s.movie)} · ${s.year}</div>` : ''}
        </div>
        <div class="row-dir">${esc(s.director)}</div>
        <button class="row-like ${liked ? 'liked' : ''}" data-like-id="${s.id}">${liked ? '♥' : '♡'}</button>
        <div class="row-dur">${s.duration ? fmt(s.duration) : '—'}</div>
      </div>`;
        });
        html += '</div>';
    }
    document.getElementById('contentArea').innerHTML = html;
    renderQueue();
}
function setView(v) { STATE.view = v; renderSongs(STATE.filtered); }

// ── PLAYBACK ──────────────────────────────────────────────────────────────────
let _playLock = false;
async function playSong(gi) {
    if (_playLock) return;
    if (gi < 0 || gi >= ALL_SONGS.length) return;
    _playLock = true;
    const song = ALL_SONGS[gi];
    STATE.currentIdx = gi;
    STATE.recentIds = [song.id, ...STATE.recentIds.filter(id => id !== song.id)].slice(0, 50);
    localStorage.setItem('sg_recent', JSON.stringify(STATE.recentIds));
    document.getElementById('bottomPlayer').style.visibility = 'visible';
    document.getElementById('miniPlayer').classList.add('active');
    updatePlayerUI(song); updatePlayingHighlight(); renderQueue();
    const pb = document.getElementById('playBtn'), npb = document.getElementById('npPlayBtn'), mpb = document.getElementById('mpPlayBtn');
    pb.textContent = '⏳'; pb.disabled = true; npb.textContent = '⏳'; mpb.textContent = '⏳';
    try {
        audio.pause(); audio.src = song.file;
        audio.volume = document.getElementById('volSlider').value / 100;
        audio.load(); await audio.play();
        song.duration = Math.round(audio.duration) || 0;
    } catch (e) {
        toast('❌ Cannot play: ' + song.file);
        pb.textContent = '▶'; pb.disabled = false; npb.textContent = '▶'; mpb.textContent = '▶';
    } finally { _playLock = false; }
}
function updatePlayingHighlight() {
    document.querySelectorAll('.song-row,.song-card').forEach(el => {
        el.classList.remove('playing');
        const m = (el.getAttribute('onclick') || '').match(/playSong\((\d+)\)/);
        if (m && parseInt(m[1]) === STATE.currentIdx) {
            el.classList.add('playing');
            const n = el.querySelector('.row-num'); if (n) n.innerHTML = eq();
            const t = el.querySelector('.row-title'); if (t) t.style.color = 'var(--amber)';
        }
    });
}
function updatePlayerUI(s) {
    const pt = document.getElementById('pThumb');
    if (s.poster) pt.innerHTML = `<img src="${esc(s.poster)}" style="width:100%;height:100%;object-fit:cover;border-radius:9px" onerror="this.outerHTML='${s.emoji}'">`;
    else pt.textContent = s.emoji;
    const na = document.getElementById('npArt');
    if (s.poster) na.innerHTML = `<img src="${esc(s.poster)}" style="width:100%;height:100%;object-fit:cover;border-radius:12px" onerror="this.outerHTML='<span>${s.emoji}</span>'">`;
    else na.innerHTML = `<span>${s.emoji}</span>`;
    const mt = document.getElementById('mpThumb');
    if (s.poster) mt.innerHTML = `<img src="${esc(s.poster)}" style="width:100%;height:100%;object-fit:cover;border-radius:8px" onerror="this.textContent='${s.emoji}'">`;
    else mt.textContent = s.emoji;
    document.getElementById('pTitle').textContent = s.name;
    document.getElementById('pArtist').textContent = s.movie + ' · ' + s.year;
    document.getElementById('npTitle').textContent = s.name;
    document.getElementById('npArtist').textContent = s.director;
    document.getElementById('npMovieLabel').textContent = s.movie + ' (' + s.year + ')';
    document.getElementById('mpTitle').textContent = s.name;
    document.getElementById('mpMovie').textContent = s.movie;
    const liked = STATE.likedIds.has(s.id);
    const lb = document.getElementById('pLikeBtn'); lb.textContent = liked ? '♥' : '♡'; lb.classList.toggle('liked', liked);
}
function togglePlay() { if (!audio.src) return; STATE.isPlaying ? audio.pause() : audio.play(); }
function playNext() {
    const pool = STATE.filtered.length ? STATE.filtered : ALL_SONGS;
    const sortedPool = pool.sort((a, b) => a.name.localeCompare(b.name));
    const cur = sortedPool.findIndex(s => ALL_SONGS.indexOf(s) === STATE.currentIdx);
    const next = STATE.isShuffle ? sortedPool[Math.floor(Math.random() * sortedPool.length)] : sortedPool[(cur + 1) % sortedPool.length];
    playSong(ALL_SONGS.indexOf(next));
}
function playPrev() {
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    const pool = STATE.filtered.length ? STATE.filtered : ALL_SONGS;
    const sortedPool = pool.sort((a, b) => a.name.localeCompare(b.name));
    const cur = sortedPool.findIndex(s => ALL_SONGS.indexOf(s) === STATE.currentIdx);
    playSong(ALL_SONGS.indexOf(sortedPool[Math.max(0, cur - 1)]));
}
function toggleShuffle() { STATE.isShuffle = !STATE.isShuffle; document.getElementById('shuffleBtn').classList.toggle('active', STATE.isShuffle); toast(STATE.isShuffle ? '🔀 Shuffle on' : '🔀 Shuffle off'); }
function toggleRepeat() { STATE.isRepeat = !STATE.isRepeat; audio.loop = STATE.isRepeat; document.getElementById('repeatBtn').classList.toggle('active', STATE.isRepeat); toast(STATE.isRepeat ? '🔁 Repeat on' : '🔁 Repeat off'); }
function seekAudio(e) { const r = e.currentTarget.getBoundingClientRect(); if (audio.duration) audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration; }

// ── AUDIO EVENTS ─────────────────────────────────────────────────────────────
audio.addEventListener('play', () => {
    STATE.isPlaying = true;
    document.getElementById('playBtn').textContent = '⏸'; document.getElementById('playBtn').disabled = false;
    document.getElementById('npPlayBtn').textContent = '⏸'; document.getElementById('mpPlayBtn').textContent = '⏸';
    document.getElementById('pThumb').classList.add('spin'); document.getElementById('npArt').classList.add('spinning');
    updatePlayingHighlight();
});
audio.addEventListener('pause', () => {
    STATE.isPlaying = false;
    document.getElementById('playBtn').textContent = '▶'; document.getElementById('npPlayBtn').textContent = '▶'; document.getElementById('mpPlayBtn').textContent = '▶';
    document.getElementById('pThumb').classList.remove('spin'); document.getElementById('npArt').classList.remove('spinning');
    updatePlayingHighlight();
});
audio.addEventListener('ended', () => { if (!STATE.isRepeat) playNext(); });
audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const p = (audio.currentTime / audio.duration) * 100;
    document.getElementById('progFill').style.width = p + '%';
    document.getElementById('npProgFill').style.width = p + '%';
    document.getElementById('pCur').textContent = fmt(audio.currentTime);
    document.getElementById('npCur').textContent = fmt(audio.currentTime);
    STATE.totalSeconds++;
    if (STATE.totalSeconds % 60 === 0) localStorage.setItem('sg_seconds', STATE.totalSeconds);
});
audio.addEventListener('loadedmetadata', () => {
    document.getElementById('pTot').textContent = fmt(audio.duration);
    document.getElementById('npTot').textContent = fmt(audio.duration);
});
audio.addEventListener('error', () => {
    toast('❌ File not found — check path in MOVIES');
    document.getElementById('playBtn').textContent = '▶'; document.getElementById('playBtn').disabled = false;
    document.getElementById('npPlayBtn').textContent = '▶';
});

// ── VOLUME ────────────────────────────────────────────────────────────────────
function setVolume(val) { audio.volume = val / 100; document.getElementById('volSlider').value = val; document.getElementById('mpVolSlider').value = val; }

// ── NP PANEL ─────────────────────────────────────────────────────────────────
function toggleNowPlaying() { STATE.npOpen = !STATE.npOpen; syncNpPanel(); }
function renderQueue() {
    const list = document.getElementById('queueList'); if (!list) return;
    const pool = STATE.filtered.length ? STATE.filtered : ALL_SONGS;
    const cur = pool.findIndex(s => ALL_SONGS.indexOf(s) === STATE.currentIdx);
    const up = pool.slice(cur + 1, cur + 6);
    if (!up.length) { list.innerHTML = '<div style="padding:10px 16px;font-size:12px;color:var(--text3)">No upcoming songs</div>'; return; }
    list.innerHTML = up.map(s => `<div class="queue-item" onclick="playSong(${ALL_SONGS.indexOf(s)})">
    <div class="qi-art">${s.poster ? `<img src="${esc(s.poster)}" onerror="this.outerHTML='<span>${s.emoji}</span>'">` : `<span>${s.emoji}</span>`}</div>
    <div class="qi-meta"><div class="qi-title">${esc(s.name)}</div><div class="qi-movie">${esc(s.movie)}</div></div>
    <div class="qi-dur">${fmt(s.duration || 0)}</div>
  </div>`).join('');
}

// ── LIGHTBOX ──────────────────────────────────────────────────────────────────
function openLightbox(src) { document.getElementById('lightboxImg').src = src; document.getElementById('lightbox').classList.add('open'); }
function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); }

// ── THEME ─────────────────────────────────────────────────────────────────────
function updateThemeUI(theme) {
    document.getElementById('themeLabel').textContent = theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode';
    document.querySelector('.tb-btn[onclick="toggleTheme()"]').textContent = theme === 'light' ? '☀️' : '🌙';
}
function toggleTheme() {
    const h = document.documentElement, l = h.dataset.theme === 'light';
    h.dataset.theme = l ? 'dark' : 'light'; updateThemeUI(l ? 'dark' : 'light');
    localStorage.setItem('sg_theme', h.dataset.theme);
    document.getElementById('userDropdown').classList.remove('open');
}

// ── KEYBOARD ──────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
    if (e.code === 'ArrowRight') playNext();
    if (e.code === 'ArrowLeft') playPrev();
});

// ── EXPOSE TO WINDOW ──────────────────────────────────────────────────────────
Object.assign(window, {
    switchTab, doSignin, doSignup, quickLogin, doSignout,
    toggleUserMenu, toggleSidebar, closeSidebar,
    showAll, showLiked, showRecent, showMovie, showProfile,
    playMovie, shuffleMovie, mobileNav,
    togglePlay, playNext, playPrev, playSong,
    toggleShuffle, toggleRepeat, seekAudio, setView, setVolume,
    doLike, toggleLikeCurrent,
    toggleNowPlaying, openLightbox, closeLightbox, toggleTheme,
    audio,
});