
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Place = {
  name: string;
  category: string;
  description: string;
};

type Highlight = {
  number: string;
  title: string;
  description: string;
};

type District = {
  name: string;
  malayalam: string;
  region: string;
  tagline: string;
  introduction: string[];
  heritage: string;
  culture: Highlight[];
  places: Place[];
  food: string;
  experience: string;
  image: string;
};

const districts: Record<string, District> = {
  // 01 — THIRUVANANTHAPURAM
  thiruvananthapuram: {
    name: "Thiruvananthapuram",
    malayalam: "തിരുവനന്തപുരം",
    region: "SOUTH KERALA",
    tagline: "Where Royal Heritage Meets the Sea.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Thiruvananthapuram, the capital of Kerala, is a district where royal history, spiritual traditions, coastal life and modern city culture come together.",
      "From the historic streets around Padmanabhaswamy Temple to the beaches of Kovalam and Varkala, the district offers a rich combination of heritage and natural beauty.",
      "Its identity is shaped by Travancore history, traditional architecture, classical arts, literature and the communities that continue to preserve its cultural character.",
    ],

    heritage:
      "The legacy of Travancore, temple architecture, traditional knowledge and coastal communities gives Thiruvananthapuram a distinctive place in Kerala's cultural history.",

    culture: [
      {
        number: "01",
        title: "Travancore Heritage",
        description:
          "Discover the history of the former Travancore kingdom through palaces, historic institutions, monuments and traditional architecture.",
      },
      {
        number: "02",
        title: "Classical Performing Arts",
        description:
          "Explore Kerala's classical performance traditions, including Kathakali, Mohiniyattam and Carnatic music.",
      },
      {
        number: "03",
        title: "Temple Traditions",
        description:
          "Understand the rituals, architecture, festivals and cultural practices associated with the district's historic temples.",
      },
      {
        number: "04",
        title: "Coastal Communities",
        description:
          "Discover the everyday life, occupations, food traditions and stories of communities along the Arabian Sea.",
      },
    ],

    places: [
      {
        name: "Padmanabhaswamy Temple",
        category: "Spiritual Heritage",
        description:
          "A renowned temple known for its historic significance, architecture and connection with Travancore royalty.",
      },
      {
        name: "Kuthiramalika Palace",
        category: "Royal Architecture",
        description:
          "Explore a historic palace associated with the Travancore royal family and traditional Kerala architecture.",
      },
      {
        name: "Napier Museum",
        category: "Art & History",
        description:
          "Discover a museum with collections reflecting art, archaeology and cultural history.",
      },
      {
        name: "Kovalam",
        category: "Coastal Heritage",
        description:
          "Experience a famous coastal destination known for its beaches and lighthouse.",
      },
      {
        name: "Varkala",
        category: "Coast & Landscape",
        description:
          "Explore the dramatic coastal cliffs, beaches and spiritual heritage of Varkala.",
      },
      {
        name: "Ponmudi",
        category: "Hills & Nature",
        description:
          "Discover a hill destination known for misty landscapes and winding mountain roads.",
      },
    ],

    food:
      "Explore traditional Kerala meals, coconut-based curries, seafood, local snacks, banana chips and the distinctive food culture of the southern coast.",

    experience:
      "Explore palace heritage, discover local museums, experience coastal village life, visit traditional markets and learn about Kerala's classical art forms.",
  },

  // 02 — KOLLAM
  kollam: {
    name: "Kollam",
    malayalam: "കൊല്ലം",
    region: "SOUTH KERALA",
    tagline: "The Gateway to the Backwaters.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Kollam is a historic coastal district with a long association with maritime trade, cashew processing, fishing communities and backwater life.",
      "The district's identity is closely connected with Ashtamudi Lake, the Arabian Sea, traditional industries and its historic trading settlements.",
      "From quiet lake villages to forest landscapes and waterfalls, Kollam offers a varied picture of southern Kerala.",
    ],

    heritage:
      "Kollam's trading history, traditional industries, fishing communities and backwater settlements form an important part of its living heritage.",

    culture: [
      {
        number: "01",
        title: "Maritime Heritage",
        description:
          "Explore Kollam's historic connections with coastal trade, ports, merchants and communities of the Arabian Sea.",
      },
      {
        number: "02",
        title: "Cashew Industry",
        description:
          "Discover the role of cashew cultivation, processing and traditional livelihoods in the district.",
      },
      {
        number: "03",
        title: "Backwater Life",
        description:
          "Understand the relationship between local communities, fishing, inland waterways and Ashtamudi Lake.",
      },
      {
        number: "04",
        title: "Temple & Folk Traditions",
        description:
          "Explore local temple festivals, traditional performances and community celebrations.",
      },
    ],

    places: [
      {
        name: "Ashtamudi Lake",
        category: "Backwater Heritage",
        description:
          "Discover an extensive lake landscape connected with fishing, waterways and traditional village life.",
      },
      {
        name: "Thangassery Lighthouse",
        category: "Maritime Heritage",
        description:
          "Visit a coastal landmark overlooking the Arabian Sea and the historic Thangassery area.",
      },
      {
        name: "Thenmala",
        category: "Eco Tourism",
        description:
          "Explore a forest destination known for nature-based tourism and outdoor experiences.",
      },
      {
        name: "Palaruvi Waterfalls",
        category: "Nature & Landscape",
        description:
          "Discover a scenic waterfall surrounded by forested landscapes.",
      },
      {
        name: "Jatayu Earth's Center",
        category: "Landscape & Culture",
        description:
          "Explore a hilltop destination featuring a monumental sculpture and adventure activities.",
      },
      {
        name: "Munroe Island",
        category: "Village Heritage",
        description:
          "Experience a network of canals and waterways through the traditional backwater landscape.",
      },
    ],

    food:
      "Discover Kollam's seafood traditions, fish curries, tapioca dishes, coconut-based preparations and local cashew products.",

    experience:
      "Explore backwater villages, learn about cashew processing, discover fishing livelihoods and experience the waterways around Ashtamudi and Munroe Island.",
  },

  // 03 — PATHANAMTHITTA
  pathanamthitta: {
    name: "Pathanamthitta",
    malayalam: "പത്തനംതിട്ട",
    region: "SOUTHERN HIGHLANDS",
    tagline: "A Land of Faith, Rivers & Traditions.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Pathanamthitta is a district of forested hills, rivers, temples and heritage villages in the southern part of Kerala.",
      "It is closely associated with the Sabarimala pilgrimage, the Aranmula heritage tradition and the famous Aranmula Kannadi metal mirror.",
      "The district's cultural identity reflects spiritual journeys, traditional craftsmanship, river-based celebrations and village life.",
    ],

    heritage:
      "Aranmula's traditional mirror-making, temple heritage, pilgrimage traditions and river celebrations are important elements of Pathanamthitta's cultural identity.",

    culture: [
      {
        number: "01",
        title: "Sabarimala Pilgrimage",
        description:
          "Discover the traditions, pilgrimage routes, community practices and spiritual significance associated with Sabarimala.",
      },
      {
        number: "02",
        title: "Aranmula Kannadi",
        description:
          "Learn about the distinctive handmade metal mirror tradition preserved by skilled artisan families.",
      },
      {
        number: "03",
        title: "Aranmula Vallamkali",
        description:
          "Explore the famous snake boat tradition and its connection with the Pamba River and local communities.",
      },
      {
        number: "04",
        title: "Temple Arts & Traditions",
        description:
          "Discover temple festivals, traditional rituals, music and community celebrations across the district.",
      },
    ],

    places: [
      {
        name: "Sabarimala",
        category: "Pilgrimage Heritage",
        description:
          "A major pilgrimage destination situated in the forested hills of the Western Ghats.",
      },
      {
        name: "Aranmula",
        category: "Craft & Living Heritage",
        description:
          "Discover the village known for its metal mirrors, temple traditions and snake boat festival.",
      },
      {
        name: "Perumthenaruvi Waterfalls",
        category: "Nature & Landscape",
        description:
          "Explore a scenic waterfall set within a green natural landscape.",
      },
      {
        name: "Konni",
        category: "Forest Heritage",
        description:
          "Discover forest landscapes and the area's historic association with elephants.",
      },
      {
        name: "Gavi",
        category: "Eco Tourism",
        description:
          "Experience forest scenery, wildlife habitats and nature-based tourism.",
      },
      {
        name: "Kaviyoor Rock-Cut Temple",
        category: "Ancient Architecture",
        description:
          "Explore a historic rock-cut temple and its distinctive architectural heritage.",
      },
    ],

    food:
      "Explore traditional central Travancore cuisine, vegetarian festival meals, appam, local rice preparations, fish dishes and regional snacks.",

    experience:
      "Discover traditional metal mirror craftsmanship, experience the cultural atmosphere of Aranmula, explore forest landscapes and learn about pilgrimage traditions.",
  },

  // 04 — ALAPPUZHA
  alappuzha: {
    name: "Alappuzha",
    malayalam: "ആലപ്പുഴ",
    region: "CENTRAL KERALA",
    tagline: "The Land of Backwaters & Boat Races.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Alappuzha is a coastal district famous for its interconnected backwaters, canals, beaches, coir industry and traditional houseboat journeys.",
      "The district's landscape is closely connected with Kuttanad, where farming takes place in low-lying areas surrounded by rivers and waterways.",
      "Its culture is shaped by boat-building traditions, fishing communities, coir craftsmanship, boat races and the everyday life of backwater villages.",
    ],

    heritage:
      "Alappuzha's backwater communities, coir artisans, traditional boat culture and Kuttanad farming heritage are central to its cultural identity.",

    culture: [
      {
        number: "01",
        title: "Vallam Kali",
        description:
          "Discover Kerala's famous boat race traditions, including the Nehru Trophy Boat Race and the communities behind them.",
      },
      {
        number: "02",
        title: "Coir Craftsmanship",
        description:
          "Explore the traditional production of coir products using coconut fibre and the skills of local artisans.",
      },
      {
        number: "03",
        title: "Kuttanad Farming",
        description:
          "Understand the distinctive agricultural practices and water management traditions of the Kuttanad region.",
      },
      {
        number: "04",
        title: "Backwater Communities",
        description:
          "Discover fishing, boat-building, village livelihoods and everyday life along Kerala's waterways.",
      },
    ],

    places: [
      {
        name: "Alappuzha Backwaters",
        category: "Backwater Heritage",
        description:
          "Experience the interconnected canals, lakes and traditional settlements of the district.",
      },
      {
        name: "Kuttanad",
        category: "Agricultural Heritage",
        description:
          "Discover a unique low-lying farming region known for its relationship with water.",
      },
      {
        name: "Alappuzha Beach",
        category: "Coastal Heritage",
        description:
          "Explore a popular beach with historic coastal structures and a long shoreline.",
      },
      {
        name: "Marari Beach",
        category: "Coastal Landscape",
        description:
          "Discover a peaceful coastal destination surrounded by traditional village landscapes.",
      },
      {
        name: "Krishnapuram Palace",
        category: "Royal Heritage",
        description:
          "Explore a historic palace known for traditional architecture and mural art.",
      },
      {
        name: "Pathiramanal Island",
        category: "Nature & Ecology",
        description:
          "Discover an island in Vembanad Lake known for its natural environment and birdlife.",
      },
    ],

    food:
      "Explore Kuttanad's regional cuisine, freshwater fish preparations, duck curry, tapioca, coconut-based dishes and traditional Kerala meals.",

    experience:
      "Explore backwater villages, learn about coir-making, discover traditional boat culture and experience the agricultural landscape of Kuttanad.",
  },

  // 05 — KOTTAYAM
  kottayam: {
    name: "Kottayam",
    malayalam: "കോട്ടയം",
    region: "CENTRAL KERALA",
    tagline: "Where Literature Meets the Lake.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Kottayam is a district known for its literary history, publishing heritage, rubber plantations, religious traditions and beautiful backwater landscapes.",
      "The district connects the highlands with the Vembanad Lake region, creating a landscape of hills, villages, plantations and waterways.",
      "Its identity is shaped by Malayalam literature, education, printing, traditional architecture and diverse religious communities.",
    ],

    heritage:
      "Kottayam's literary contributions, printing and publishing history, religious architecture and village traditions form an important part of its heritage.",

    culture: [
      {
        number: "01",
        title: "Literary Heritage",
        description:
          "Discover the writers, publishers, newspapers and literary institutions that have contributed to Malayalam literature.",
      },
      {
        number: "02",
        title: "Publishing & Printing",
        description:
          "Explore Kottayam's historic relationship with printing, book publishing and Malayalam journalism.",
      },
      {
        number: "03",
        title: "Religious Heritage",
        description:
          "Discover the churches, temples and community traditions that reflect the district's diverse cultural history.",
      },
      {
        number: "04",
        title: "Plantation Life",
        description:
          "Understand rubber cultivation, agricultural livelihoods and the landscape of the central Kerala highlands.",
      },
    ],

    places: [
      {
        name: "Kumarakom",
        category: "Backwater Heritage",
        description:
          "Discover a lakeside destination known for village landscapes and backwater experiences.",
      },
      {
        name: "Vembanad Lake",
        category: "Nature & Landscape",
        description:
          "Explore Kerala's extensive lake system and its surrounding communities.",
      },
      {
        name: "Marmala Waterfalls",
        category: "Nature & Landscape",
        description:
          "Discover a waterfall surrounded by the green landscapes of the highlands.",
      },
      {
        name: "Illikkal Kallu",
        category: "Hills & Nature",
        description:
          "Explore a dramatic hill destination with panoramic mountain views.",
      },
      {
        name: "Vaikom",
        category: "Spiritual Heritage",
        description:
          "Discover an important historic temple town with a rich cultural and social history.",
      },
      {
        name: "Thazhathangady",
        category: "Architectural Heritage",
        description:
          "Explore historic houses and traditional architecture along the Meenachil River.",
      },
    ],

    food:
      "Discover traditional Syrian Christian dishes, appam, stew, fish preparations, tapioca and the regional flavours of central Kerala.",

    experience:
      "Explore traditional architecture, discover literary institutions, experience village life near Kumarakom and learn about plantation communities.",
  },

  // 06 — IDUKKI
  idukki: {
    name: "Idukki",
    malayalam: "ഇടുക്കി",
    region: "WESTERN GHATS",
    tagline: "The Mountains Have Their Own Stories.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Idukki is a mountainous district of forests, tea plantations, spice gardens, rivers, dams and wildlife landscapes in the Western Ghats.",
      "Its identity is closely connected with Munnar, Thekkady, plantation communities and the natural heritage of the high ranges.",
      "The district is also home to diverse indigenous communities whose knowledge, traditions and relationship with the forest are important parts of its cultural heritage.",
    ],

    heritage:
      "Idukki's plantation history, indigenous knowledge, spice cultivation, mountain settlements and forest traditions form a distinctive cultural landscape.",

    culture: [
      {
        number: "01",
        title: "Plantation Heritage",
        description:
          "Discover the history of tea and spice plantations and the communities whose work shaped the high ranges.",
      },
      {
        number: "02",
        title: "Indigenous Communities",
        description:
          "Learn about the histories, knowledge systems and living traditions of indigenous communities through respectful community-led interpretation.",
      },
      {
        number: "03",
        title: "Spice Traditions",
        description:
          "Explore cardamom, pepper and other spice-growing traditions connected with the region's agriculture.",
      },
      {
        number: "04",
        title: "Mountain Life",
        description:
          "Discover the daily lives, food, architecture and livelihoods of communities in the high ranges.",
      },
    ],

    places: [
      {
        name: "Munnar",
        category: "Hill Station Heritage",
        description:
          "Explore tea plantations, mountain landscapes and the heritage of the high ranges.",
      },
      {
        name: "Thekkady",
        category: "Wildlife & Nature",
        description:
          "Discover forest landscapes and nature-based experiences around Periyar.",
      },
      {
        name: "Idukki Arch Dam",
        category: "Engineering Heritage",
        description:
          "Explore a major engineering landmark set within the mountainous landscape.",
      },
      {
        name: "Eravikulam National Park",
        category: "Wildlife & Conservation",
        description:
          "Discover a protected mountain ecosystem known for its high-altitude grasslands.",
      },
      {
        name: "Ramakkalmedu",
        category: "Landscape & Nature",
        description:
          "Experience open mountain scenery and expansive views of the surrounding countryside.",
      },
      {
        name: "Marayoor",
        category: "Cultural & Natural Heritage",
        description:
          "Explore its historic dolmens, sandalwood landscapes and distinctive village heritage.",
      },
    ],

    food:
      "Experience high-range food traditions, fresh spices, cardamom, pepper, local vegetables, mountain-grown produce and traditional Kerala dishes.",

    experience:
      "Explore tea and spice plantations, discover mountain villages, learn about traditional farming and experience guided nature activities.",
  },

  // 07 — ERNAKULAM
  ernakulam: {
    name: "Ernakulam",
    malayalam: "എറണാകുളം",
    region: "CENTRAL KERALA",
    tagline: "A Meeting Place of Cultures.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Ernakulam is a district where historic port settlements, island communities, modern cities and traditional village life come together.",
      "Kochi's maritime history reflects centuries of trade and cultural exchange involving communities from different parts of the world.",
      "From Fort Kochi and Mattancherry to rural backwater villages, the district offers a diverse cultural landscape.",
    ],

    heritage:
      "Kochi's maritime trade, historic neighbourhoods, fishing communities, traditional architecture and multicultural heritage define much of Ernakulam's identity.",

    culture: [
      {
        number: "01",
        title: "Kochi Maritime Heritage",
        description:
          "Explore the history of Kochi as a historic port and its connections with international maritime trade.",
      },
      {
        number: "02",
        title: "Multicultural Communities",
        description:
          "Discover the cultural influences of different communities who shaped historic Kochi and its neighbourhoods.",
      },
      {
        number: "03",
        title: "Traditional Fishing",
        description:
          "Learn about Chinese fishing nets, local fishing livelihoods and the relationship between people and the backwaters.",
      },
      {
        number: "04",
        title: "Performing Arts",
        description:
          "Experience Kathakali, classical music, theatre, contemporary art and cultural festivals in Kochi.",
      },
    ],

    places: [
      {
        name: "Fort Kochi",
        category: "Maritime & Colonial Heritage",
        description:
          "Discover historic streets, colonial-era buildings, art spaces and the cultural landscape of old Kochi.",
      },
      {
        name: "Mattancherry Palace",
        category: "Royal & Architectural Heritage",
        description:
          "Explore a historic palace known for its architecture and mural paintings.",
      },
      {
        name: "Jew Town",
        category: "Community Heritage",
        description:
          "Discover the historic neighbourhood and its association with Kochi's Jewish community.",
      },
      {
        name: "Cherai Beach",
        category: "Coastal Landscape",
        description:
          "Experience a coastal destination along the northern side of Vypin Island.",
      },
      {
        name: "Kumbalangi",
        category: "Village Heritage",
        description:
          "Explore a backwater village known for its fishing communities and rural landscapes.",
      },
      {
        name: "Hill Palace Museum",
        category: "Royal Heritage",
        description:
          "Discover the former royal residence and museum collections associated with Kochi's royal history.",
      },
    ],

    food:
      "Explore Kochi's multicultural food heritage, seafood, appam and stew, traditional Kerala meals, coastal dishes and historic market flavours.",

    experience:
      "Discover Fort Kochi's heritage streets, experience fishing village life, explore local art spaces and learn about traditional coastal livelihoods.",
  },

  // 08 — THRISSUR
  thrissur: {
    name: "Thrissur",
    malayalam: "തൃശ്ശൂർ",
    region: "CENTRAL KERALA",
    tagline: "The Cultural Capital of Kerala.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Thrissur is widely recognised as Kerala's cultural capital, with a strong association with temple festivals, classical arts, theatre, literature and traditional craftsmanship.",
      "The district is home to the famous Thrissur Pooram, cultural institutions and Kerala Kalamandalam, an important centre for traditional performing arts.",
      "Its heritage connects historic temples, sacred landscapes, traditional artists and generations of cultural practitioners.",
    ],

    heritage:
      "Thrissur's festivals, performing arts, temple traditions and cultural institutions make it one of Kerala's important centres of artistic heritage.",

    culture: [
      {
        number: "01",
        title: "Thrissur Pooram",
        description:
          "Discover one of Kerala's best-known temple festivals, celebrated through processions, percussion and traditional ceremonies.",
      },
      {
        number: "02",
        title: "Kathakali & Classical Arts",
        description:
          "Explore Kerala's classical dance and theatre traditions through institutions and local practitioners.",
      },
      {
        number: "03",
        title: "Traditional Percussion",
        description:
          "Learn about Chenda Melam, Panchavadyam and the percussion traditions associated with temple festivals.",
      },
      {
        number: "04",
        title: "Craft & Cultural Institutions",
        description:
          "Discover traditional craftsmanship, literature, theatre and the institutions that preserve Kerala's cultural expressions.",
      },
    ],

    places: [
      {
        name: "Vadakkunnathan Temple",
        category: "Temple Heritage",
        description:
          "Explore a historic temple at the heart of Thrissur and its architectural significance.",
      },
      {
        name: "Kerala Kalamandalam",
        category: "Performing Arts Heritage",
        description:
          "Discover an important institution dedicated to Kerala's traditional performing arts.",
      },
      {
        name: "Athirappilly Waterfalls",
        category: "Nature & Landscape",
        description:
          "Experience a famous waterfall surrounded by the forests of the Western Ghats.",
      },
      {
        name: "Guruvayur Temple",
        category: "Spiritual Heritage",
        description:
          "Visit a major pilgrimage destination known for its temple traditions.",
      },
      {
        name: "Shakthan Thampuran Palace",
        category: "Royal Heritage",
        description:
          "Explore a historic palace associated with the rulers of the former Cochin kingdom.",
      },
      {
        name: "Cheraman Juma Masjid",
        category: "Religious Heritage",
        description:
          "Discover a historically significant mosque associated with the region's religious heritage.",
      },
    ],

    food:
      "Explore Thrissur's traditional vegetarian meals, temple festival food, local snacks, banana-based dishes and distinctive central Kerala flavours.",

    experience:
      "Discover traditional art institutions, experience festival culture, learn about percussion traditions and explore historic temple towns.",
  },

  // 09 — PALAKKAD
  palakkad: {
    name: "Palakkad",
    malayalam: "പാലക്കാട്",
    region: "CENTRAL KERALA",
    tagline: "The Gateway to Kerala's Granary.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Palakkad is a district of expansive paddy fields, mountain passes, forests, rivers and traditional agricultural communities.",
      "The Palakkad Gap has historically connected Kerala with the neighbouring Tamil Nadu region, creating a distinctive cultural exchange.",
      "Its heritage includes farming traditions, folk performances, traditional architecture, music and the cultural life of villages.",
    ],

    heritage:
      "Palakkad's agricultural landscape, village traditions, musical heritage and cultural connections across the Palakkad Gap form its distinctive identity.",

    culture: [
      {
        number: "01",
        title: "Agricultural Heritage",
        description:
          "Discover the farming traditions, paddy cultivation and rural livelihoods that give Palakkad its reputation as Kerala's granary.",
      },
      {
        number: "02",
        title: "Kalpathy Heritage",
        description:
          "Explore the historic Brahmin agraharam streets, temple traditions and music associated with Kalpathy.",
      },
      {
        number: "03",
        title: "Folk Arts",
        description:
          "Discover local folk expressions, traditional performances and community celebrations.",
      },
      {
        number: "04",
        title: "Musical Traditions",
        description:
          "Explore the district's connections with classical music, traditional instruments and cultural institutions.",
      },
    ],

    places: [
      {
        name: "Palakkad Fort",
        category: "History & Architecture",
        description:
          "Discover a historic fort situated in the heart of Palakkad town.",
      },
      {
        name: "Malampuzha",
        category: "Landscape & Heritage",
        description:
          "Explore a well-known destination with gardens, a reservoir and surrounding hills.",
      },
      {
        name: "Silent Valley National Park",
        category: "Wildlife & Conservation",
        description:
          "Discover a protected tropical evergreen forest ecosystem in the Western Ghats.",
      },
      {
        name: "Nelliyampathy",
        category: "Hills & Nature",
        description:
          "Experience scenic mountain landscapes and plantation surroundings.",
      },
      {
        name: "Kalpathy",
        category: "Living Heritage",
        description:
          "Explore historic streets and the cultural traditions of the Kalpathy heritage village.",
      },
      {
        name: "Parambikulam",
        category: "Wildlife & Nature",
        description:
          "Discover forest landscapes, reservoirs and nature-based experiences.",
      },
    ],

    food:
      "Explore traditional Palakkadan matta rice, vegetarian meals, local vegetable preparations, snacks and the distinctive food traditions of the Palakkad region.",

    experience:
      "Discover traditional farming, explore heritage streets, learn about folk arts and experience the mountain and forest landscapes.",
  },

  // 10 — MALAPPURAM
  malappuram: {
    name: "Malappuram",
    malayalam: "മലപ്പുറം",
    region: "MALABAR",
    tagline: "A Land of History, Learning & Living Traditions.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Malappuram is a district of historic towns, green hills, river landscapes, religious heritage and strong cultural traditions.",
      "The district has an important place in the history of Malabar, including its connections with trade, scholarship, literature and community life.",
      "Its cultural landscape includes Mappila heritage, traditional art forms, Vedic learning, historic mosques and temples, and vibrant local festivals.",
    ],

    heritage:
      "Malappuram's Mappila cultural traditions, literary history, religious learning, folk arts and historic settlements contribute to its rich heritage.",

    culture: [
      {
        number: "01",
        title: "Mappila Heritage",
        description:
          "Explore the language, literature, music, food traditions and cultural history of the Mappila communities.",
      },
      {
        number: "02",
        title: "Mappilappattu",
        description:
          "Discover a distinctive musical and literary tradition with deep roots in Malabar's cultural history.",
      },
      {
        number: "03",
        title: "Traditional Learning",
        description:
          "Learn about the district's history of religious scholarship, education and centres of traditional learning.",
      },
      {
        number: "04",
        title: "Folk & Martial Traditions",
        description:
          "Explore local folk performances, traditional celebrations and the martial art tradition of Kalaripayattu.",
      },
    ],

    places: [
      {
        name: "Thirunavaya",
        category: "Historical & Spiritual Heritage",
        description:
          "Discover a historic settlement on the Bharathapuzha River associated with traditional gatherings and heritage.",
      },
      {
        name: "Kottakkunnu",
        category: "History & Landscape",
        description:
          "Explore a hilltop destination overlooking Malappuram town.",
      },
      {
        name: "Nilambur Teak Museum",
        category: "Forest & Industrial Heritage",
        description:
          "Discover the history of teak cultivation and forestry in the Nilambur region.",
      },
      {
        name: "Adyanpara Waterfalls",
        category: "Nature & Landscape",
        description:
          "Experience a waterfall surrounded by the green landscapes of the Western Ghats.",
      },
      {
        name: "Ponnani",
        category: "Maritime & Religious Heritage",
        description:
          "Explore a historic coastal town with strong connections to trade and Mappila heritage.",
      },
      {
        name: "Kadalundi Bird Sanctuary",
        category: "Ecology & Nature",
        description:
          "Discover an estuarine landscape known for its birdlife and coastal ecology.",
      },
    ],

    food:
      "Discover Malabar biryani, pathiri, Mappila snacks, traditional meat and seafood dishes, and the rich culinary heritage of the region.",

    experience:
      "Explore historic learning centres, discover Mappila music and literature, experience traditional food culture and learn about local crafts.",
  },

  // 11 — KOZHIKODE
  kozhikode: {
    name: "Kozhikode",
    malayalam: "കോഴിക്കോട്",
    region: "NORTH MALABAR",
    tagline: "The City of Spices & Stories.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Kozhikode, historically known as Calicut, is a district with a remarkable maritime trading history and a strong cultural identity along the Malabar Coast.",
      "It was an important centre of spice trade and international exchange, connecting local communities with merchants and travellers from across the world.",
      "The district is known for its literary culture, Mappila heritage, traditional food, beaches, historic settlements and performing arts.",
    ],

    heritage:
      "Kozhikode's maritime trade, spice markets, literary contributions, Mappila traditions and historic communities create a rich cultural legacy.",

    culture: [
      {
        number: "01",
        title: "Spice Trade Heritage",
        description:
          "Discover Kozhikode's historical role in the global spice trade and its connections with merchants from different regions.",
      },
      {
        number: "02",
        title: "Mappila Arts",
        description:
          "Explore Mappilappattu, Oppana, traditional storytelling and the cultural expressions of the Malabar region.",
      },
      {
        number: "03",
        title: "Literary Heritage",
        description:
          "Discover the writers, poets, publishers and literary traditions associated with Kozhikode.",
      },
      {
        number: "04",
        title: "Malabar Food Culture",
        description:
          "Experience the distinctive cuisine of Kozhikode, shaped by trade, local ingredients and generations of culinary traditions.",
      },
    ],

    places: [
      {
        name: "Kozhikode Beach",
        category: "Coastal Heritage",
        description:
          "Explore the historic waterfront and the coastal atmosphere of the city.",
      },
      {
        name: "Kappad Beach",
        category: "Maritime History",
        description:
          "Discover the beach associated with the arrival of Vasco da Gama in 1498.",
      },
      {
        name: "Beypore",
        category: "Traditional Craftsmanship",
        description:
          "Explore the historic port and the traditional construction of wooden sailing vessels known as Uru.",
      },
      {
        name: "Mananchira",
        category: "Urban Heritage",
        description:
          "Discover a historic waterbody and public space in the heart of Kozhikode city.",
      },
      {
        name: "Thusharagiri",
        category: "Nature & Landscape",
        description:
          "Explore waterfalls, forest landscapes and scenic trekking surroundings.",
      },
      {
        name: "SM Street",
        category: "Market & Food Heritage",
        description:
          "Experience a historic shopping street known for its local shops and traditional food culture.",
      },
    ],

    food:
      "Explore Kozhikode biryani, Kozhikode halwa, pathiri, seafood preparations, banana chips and the city's famous Malabar food traditions.",

    experience:
      "Discover traditional Uru boat craftsmanship in Beypore, explore historic markets, experience local food culture and learn about maritime trade history.",
  },

  // 12 — WAYANAD
  wayanad: {
    name: "Wayanad",
    malayalam: "വയനാട്",
    region: "WESTERN GHATS",
    tagline: "The Land of Misty Mountains.",
    image: "/images/wayanad-hero.png",

    introduction: [
      "Nestled in the Western Ghats, Wayanad is a district of mist-covered mountains, forests, waterfalls and landscapes shaped by centuries of human and natural history.",
      "Its cultural identity includes diverse indigenous communities, traditional knowledge, agricultural practices, local crafts and distinctive food traditions.",
      "Discover Wayanad through its landscapes, ancient heritage, living cultures and the communities whose stories are an important part of the region.",
    ],

    heritage:
      "Wayanad's ancient archaeological heritage, indigenous knowledge, agricultural traditions and forest landscapes form an important part of its identity.",

    culture: [
      {
        number: "01",
        title: "Indigenous Heritage",
        description:
          "Learn about the distinct histories, languages, cultural practices and living traditions of Wayanad's indigenous communities through respectful community-led storytelling.",
      },
      {
        number: "02",
        title: "Traditional Knowledge",
        description:
          "Discover knowledge connected with agriculture, forests, food, medicinal plants and the relationship between communities and their landscapes.",
      },
      {
        number: "03",
        title: "Craftsmanship & Folk Arts",
        description:
          "Explore local craft traditions, bamboo craftsmanship, folk expressions and the skills passed between generations.",
      },
      {
        number: "04",
        title: "Wayanad Food Culture",
        description:
          "Experience regional food traditions shaped by local ingredients, farming practices and the culinary diversity of the Western Ghats.",
      },
    ],

    places: [
      {
        name: "Edakkal Caves",
        category: "Ancient Heritage",
        description:
          "Discover prehistoric rock engravings and remarkable evidence of early human presence in the region.",
      },
      {
        name: "Thirunelli Temple",
        category: "Spiritual Heritage",
        description:
          "Visit an ancient temple set amid the forested hills of the Brahmagiri region.",
      },
      {
        name: "Wayanad Heritage Museum",
        category: "History & Archaeology",
        description:
          "Explore archaeological collections and artefacts connected with the history and heritage of Wayanad.",
      },
      {
        name: "Banasura Sagar Dam",
        category: "Landscape & Nature",
        description:
          "Experience a scenic reservoir surrounded by the hills of the Western Ghats.",
      },
      {
        name: "Pookode Lake",
        category: "Nature & Landscape",
        description:
          "Discover a freshwater lake surrounded by forests and green mountain scenery.",
      },
      {
        name: "Chembra Peak",
        category: "Hills & Trekking",
        description:
          "Explore one of Wayanad's best-known mountain trekking destinations.",
      },
      {
        name: "Kuruva Island",
        category: "Ecology & Nature",
        description:
          "Discover a group of river islands known for their rich greenery and natural environment.",
      },
      {
        name: "Muthanga Wildlife Sanctuary",
        category: "Wildlife & Conservation",
        description:
          "Explore a protected forest landscape that forms part of the Nilgiri Biosphere Reserve.",
      },
    ],

    food:
      "Discover traditional Wayanad rice varieties, bamboo rice, local tubers, forest-inspired ingredients, spice-based dishes and regional food traditions.",

    experience:
      "Explore mountain villages, discover local agricultural practices, learn about traditional crafts and experience guided nature activities.",
  },

  // 13 — KANNUR
  kannur: {
    name: "Kannur",
    malayalam: "കണ്ണൂർ",
    region: "NORTH MALABAR",
    tagline: "The Land of Looms & Lores.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "Located in northern Kerala along the Malabar Coast, Kannur is known for its rich cultural traditions, historic heritage and beautiful coastline.",
      "Its identity is closely connected with Theyyam, traditional handloom weaving, folk arts, historic settlements and the communities that preserve them.",
      "Explore Kannur not just through its destinations, but through the people, skills and stories that make the district unique.",
    ],

    heritage:
      "Kannur's ritual arts, handloom traditions, coastal settlements and historic communities are important parts of North Malabar's living heritage.",

    culture: [
      {
        number: "01",
        title: "Theyyam",
        description:
          "A ritual performance tradition combining mythology, folklore, elaborate costumes, music and spiritual practices.",
      },
      {
        number: "02",
        title: "Kannur Handloom",
        description:
          "Discover the region's weaving heritage, traditional textiles and skilled handloom communities.",
      },
      {
        number: "03",
        title: "Kalaripayattu",
        description:
          "Learn about Kerala's traditional martial art and its historical connections with the region.",
      },
      {
        number: "04",
        title: "Malabar Food",
        description:
          "Explore the food traditions of North Malabar, including its distinctive culinary influences.",
      },
    ],

    places: [
      {
        name: "St. Angelo's Fort",
        category: "History & Architecture",
        description:
          "A historic coastal fort overlooking the Arabian Sea and Mappila Bay.",
      },
      {
        name: "Arakkal Museum",
        category: "Royal Heritage",
        description:
          "Discover the history of the Arakkal royal family and its legacy.",
      },
      {
        name: "Gundert Bungalow",
        category: "Literary Heritage",
        description:
          "Explore a historic place associated with Hermann Gundert and Malayalam language history.",
      },
      {
        name: "Payyambalam Beach",
        category: "Coastal Heritage",
        description:
          "A beautiful coastal destination close to Kannur town.",
      },
      {
        name: "Muzhappilangad Beach",
        category: "Nature & Coast",
        description:
          "Discover Kerala's well-known drive-in beach.",
      },
      {
        name: "Madayipara",
        category: "Nature & Landscape",
        description:
          "Explore a laterite hill landscape known for its seasonal natural beauty.",
      },
      {
        name: "Paithalmala",
        category: "Hills & Nature",
        description:
          "Discover a scenic hill destination in the Western Ghats.",
      },
      {
        name: "Parassinikadavu",
        category: "Living Traditions",
        description:
          "Visit the well-known Sri Muthappan Temple on the Valapattanam River.",
      },
    ],

    food:
      "Explore North Malabar biryani, pathiri, local seafood, traditional snacks, coconut-based dishes and the distinctive culinary traditions of Kannur.",

    experience:
      "Discover handloom weaving, learn about Theyyam through community-led interpretation, explore historic forts and experience local food traditions.",
  },

  // 14 — KASARAGOD
  kasaragod: {
    name: "Kasaragod",
    malayalam: "കാസർഗോഡ്",
    region: "NORTHERN MALABAR",
    tagline: "Where Cultures Meet.",
    image: "/images/discover-backwaters.png",

    introduction: [
      "At the northern edge of Kerala, Kasaragod is a district shaped by coastal landscapes, historic settlements and diverse cultural influences.",
      "Its identity reflects a meeting of languages, communities, traditional art forms, religious heritage and generations of local craftsmanship.",
      "Explore Kasaragod through its landmarks, living traditions, landscapes and the people who keep its cultural stories alive.",
    ],

    heritage:
      "Kasaragod's multilingual communities, Theyyam, Yakshagana, historic forts, religious landmarks and coastal heritage make it culturally distinctive.",

    culture: [
      {
        number: "01",
        title: "Yakshagana",
        description:
          "Discover the vibrant traditional theatre form known for expressive performances, music, elaborate costumes and storytelling.",
      },
      {
        number: "02",
        title: "Theyyam",
        description:
          "Experience the ritual performance traditions of North Malabar, preserved through local communities and sacred spaces.",
      },
      {
        number: "03",
        title: "Multilingual Heritage",
        description:
          "Explore the district's diverse cultural influences, including Malayalam, Tulu, Kannada and Beary traditions.",
      },
      {
        number: "04",
        title: "Poorakkali & Kolkali",
        description:
          "Discover traditional group performance forms that are part of the region's folk culture.",
      },
    ],

    places: [
      {
        name: "Bekal Fort",
        category: "History & Architecture",
        description:
          "Explore one of Kerala's largest and best-known historic coastal forts, overlooking the Arabian Sea.",
      },
      {
        name: "Chandragiri Fort",
        category: "Historic Heritage",
        description:
          "Discover a historic fort overlooking the Chandragiri River and the surrounding landscape.",
      },
      {
        name: "Ananthapura Lake Temple",
        category: "Spiritual Heritage",
        description:
          "Visit a distinctive temple situated in the middle of a freshwater lake.",
      },
      {
        name: "Madhur Temple",
        category: "Temple Architecture",
        description:
          "Discover the traditional architecture and heritage of this historic temple.",
      },
      {
        name: "Ranipuram",
        category: "Hills & Nature",
        description:
          "Explore a scenic hill destination known for its green landscapes and trekking trails.",
      },
      {
        name: "Valiyaparamba Backwaters",
        category: "Nature & Landscape",
        description:
          "Experience the peaceful backwaters, islands and waterways of northern Kerala.",
      },
      {
        name: "Kappil Beach",
        category: "Coastal Heritage",
        description:
          "Discover a beautiful coastal landscape where the backwaters meet the Arabian Sea.",
      },
      {
        name: "Malik Dinar Mosque",
        category: "Religious Heritage",
        description:
          "Explore an important landmark associated with the history of Islam on the Malabar Coast.",
      },
    ],

    food:
      "Discover Kasaragod's coastal cuisine, seafood, rice-based dishes, local snacks and the culinary influences of its Malayalam, Tulu and Kannada-speaking communities.",

    experience:
      "Explore traditional art forms, discover coastal villages, learn about local crafts and experience the district's multilingual cultural heritage.",
  },
};

// ------------------------------------------
// LOADING FALLBACK
// ------------------------------------------
function DistrictLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b1c14] text-[#f4efe4]">
      <p className="font-editorial text-2xl">
        Discovering Kerala...
      </p>
    </main>
  );
}

// ------------------------------------------
// MAIN ROUTE
// ------------------------------------------
export default function DistrictPage({
  params,
}: {
  params: Promise<{ district: string }>;
}) {
  return (
    <Suspense fallback={<DistrictLoading />}>
      <DistrictContent params={params} />
    </Suspense>
  );
}

// ------------------------------------------
// DISTRICT CONTENT
// ------------------------------------------
async function DistrictContent({
  params,
}: {
  params: Promise<{ district: string }>;
}) {
  const { district } = await params;

  const data = districts[district];

  if (!data) {
    notFound();
  }

  return <DistrictPageContent data={data} />;
}

// ------------------------------------------
// REUSABLE DISTRICT PAGE
// ------------------------------------------
function DistrictPageContent({
  data,
}: {
  data: District;
}) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1c14] text-[#f4efe4]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end">
        <img
          src={data.image}
          alt={`${data.name} landscape`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07150e]/90 via-[#07150e]/55 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c14] via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:px-12">
          <p className="mb-5 text-sm text-[#d6b77a]">
            {data.malayalam}
          </p>

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#d6b77a]">
            KERALA / {data.region}
          </p>

          <h1 className="font-editorial text-5xl leading-tight md:text-8xl">
            {data.name}
            <span className="block italic text-[#df642f]">
              {data.tagline}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#eee3c9]/80 md:text-lg">
            {data.introduction[0]}
          </p>

          <Link
            href="#discover"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#bd4c2b] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#df642f]"
          >
            Discover {data.name}
            <span>↓</span>
          </Link>
        </div>
      </section>

      {/* DISTRICT INTRODUCTION */}
      <section
        id="discover"
        className="px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              01 — THE DISTRICT
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              A place with
              <span className="block italic text-[#d6b77a]">
                its own identity.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#eee3c9]/70">
            {data.introduction.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURAL HIGHLIGHTS */}
      <section className="bg-[#10271f] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              02 — CULTURE & TRADITIONS
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              The living culture
              <span className="block italic text-[#d6b77a]">
                of {data.name}.
              </span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {data.culture.map((item) => (
              <article
                key={item.number}
                className="bg-[#10271f] p-8 transition hover:bg-[#18382b] md:p-11"
              >
                <p className="mb-12 text-sm tracking-widest text-[#d6b77a]">
                  {item.number}
                </p>

                <h3 className="font-editorial text-3xl md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-8 text-[#eee3c9]/65">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              03 — PLACES & HERITAGE
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              Discover places.
              <span className="block italic text-[#d6b77a]">
                Uncover their stories.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.places.map((place, index) => (
              <article
                key={place.name}
                className="flex min-h-[250px] flex-col rounded-xl border border-white/10 bg-[#10271f] p-7 transition hover:-translate-y-1 hover:border-[#d6b77a]/40"
              >
                <span className="mb-8 text-xs tracking-widest text-[#d6b77a]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[#df642f]">
                  {place.category}
                </p>

                <h3 className="font-editorial text-2xl">
                  {place.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#eee3c9]/65">
                  {place.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD CULTURE */}
      <section className="bg-[#10271f] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              04 — FOOD & LOCAL IDENTITY
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              A taste of
              <span className="block italic text-[#d6b77a]">
                {data.name}.
              </span>
            </h2>
          </div>

          <p className="text-base leading-8 text-[#eee3c9]/70">
            {data.food}
          </p>
        </div>
      </section>

      {/* LOCAL EXPERIENCES */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#df642f]">
            05 — EXPERIENCE THE DISTRICT
          </p>

          <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
            Go beyond the destination.
            <span className="block italic text-[#d6b77a]">
              Meet the culture.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-[#eee3c9]/70">
            {data.experience}
          </p>
        </div>
      </section>

      {/* HERITAGE PRESERVATION */}
      <section className="bg-[#eee3c9] px-6 py-24 text-[#10271f] md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#bd4c2b]">
            06 — PRESERVING LOCAL HERITAGE
          </p>

          <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
            Every community
            <span className="block italic text-[#bd4c2b]">
              has a story.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#10271f]/70">
            {data.heritage} YOCHA aims to bring visibility to
            the people, skills, knowledge and communities that
            preserve these traditions for future generations.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#10271f] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#bd4c2b]"
          >
            Connect with YOCHA
          </Link>
        </div>
      </section>

      {/* OFFICIAL REFERENCE */}
      <section className="px-6 py-12 md:px-12">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d6b77a]">
            EXPLORE OFFICIAL KERALA RESOURCES
          </p>

          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#eee3c9]/70">
            <a
              href="https://www.keralatourism.org/districts/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              Kerala Tourism — Districts
            </a>

            <a
              href="https://www.keralatourism.org/greencarpet/destinations"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              Kerala Tourism — Destinations
            </a>

            <a
              href="https://kerala.s3waas.gov.in/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              Kerala District Administration
            </a>
          </div>
        </div>
      </section>

      {/* BACK TO ALL DISTRICTS */}
      <section className="px-6 pb-24 text-center md:pb-32">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d6b77a]">
          CONTINUE YOUR DISCOVERY
        </p>

        <h2 className="font-editorial text-4xl md:text-6xl">
          Fourteen districts.
          <span className="block italic text-[#df642f]">
            Endless stories.
          </span>
        </h2>

        <Link
          href="/explore"
          className="mt-9 inline-flex rounded-full border border-[#d6b77a]/50 px-8 py-4 text-sm transition hover:bg-[#d6b77a] hover:text-[#10271f]"
        >
          Explore Kerala
        </Link>
      </section>

      <Footer />
    </main>
  );
}
