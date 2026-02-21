const eventsData = [
    {
        id: 1,
        title: "Urban Neon Photography Walk",
        host: "Tokyo Shutterbugs",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "Tomorrow, 7:30 PM",
        isoDate: "2026-02-22T19:30:00",
        location: "Shibuya, Tokyo, Japan",
        coords: [35.6581, 139.7017],
        image: "https://picsum.photos/seed/tokyo_neon/600/400",
        verified: true,
        rating: 4.8,
        description: "Explore the bustling streets of Shibuya at night. Learn long-exposure techniques to capture the perfect neon trails and vibrant city life.",
        reviews: [
            { user: "Sarah M.", text: "Absolutely breathtaking views and great tips on camera settings!" },
            { user: "David L.", text: "Great guide, very patient with beginners like me." }
        ]
    },
    {
        id: 2,
        title: "Traditional Tuscan Pottery",
        host: "Chianti Arts Club",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "Saturday, 10:00 AM",
        isoDate: "2026-02-28T10:00:00",
        location: "Florence, Tuscany, Italy",
        coords: [43.7696, 11.2558],
        image: "https://picsum.photos/seed/italy_pottery/600/400",
        verified: true,
        rating: 4.9,
        description: "Learn ancient Tuscan pottery techniques from local artisans in Florence. Take home your own handcrafted earthen bowl.",
        reviews: [
            { user: "Elena P.", text: "Such a relaxing and therapeutic experience. I loved the instructor." },
            { user: "James F.", text: "My first time touching clay and I managed to make a bowl! Highly recommend." }
        ]
    },
    {
        id: 3,
        title: "ATX Indie Music Festival",
        host: "Austin Arts Council",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "Friday, 7:00 PM",
        isoDate: "2026-02-27T19:00:00",
        location: "Austin, Texas, USA",
        coords: [30.2672, -97.7431],
        image: "https://picsum.photos/seed/austin_festival/600/400",
        verified: true,
        rating: 4.6,
        description: "Experience a vibrant evening of live indie music in the Live Music Capital of the World. Features local food trucks and craft vendors.",
        reviews: [
            { user: "Alex W.", text: "Great lineup and an amazing vibe. The local snacks were a nice bonus." },
            { user: "Chris B.", text: "Music was beautiful, but it got a little crowded near the main stage." }
        ]
    },
    {
        id: 4,
        title: "Rice Terrace Sunrise Yoga",
        host: "Ubud Wellness Retreats",
        category: "wellness",
        categoryLabel: "Wellness & Fitness",
        date: "Sunday, 6:00 AM",
        isoDate: "2026-03-01T06:00:00",
        location: "Ubud, Bali, Indonesia",
        coords: [-8.4311, 115.2811],
        image: "https://picsum.photos/seed/bali_yoga/600/400",
        verified: true,
        rating: 5.0,
        description: "Join us overlooking the majestic Tegalalang rice terraces for a guided sunrise yoga session. Connect with your breath in nature.",
        reviews: [
            { user: "Maya K.", text: "The most serene morning I've had in months. The sound of the birds is perfect." },
            { user: "Leo N.", text: "Instructor was fantastic. Felt totally rejuvenated." }
        ]
    },
    {
        id: 5,
        title: "Matterhorn Base Trek",
        host: "Alpine Trailblazers",
        category: "outdoor",
        categoryLabel: "Outdoor Adventures",
        date: "Next Saturday, 8:00 AM",
        isoDate: "2026-03-07T08:00:00",
        location: "Zermatt, Valais, Switzerland",
        coords: [45.9765, 7.6585],
        image: "https://picsum.photos/seed/swiss_hike/600/400",
        verified: true,
        rating: 4.9,
        description: "A challenging but rewarding trek through lush alpine meadows leading to spectacular views of the iconic Matterhorn peak.",
        reviews: [
            { user: "Jenna R.", text: "Beautiful scenery, though the trail was quite steep!" },
            { user: "Mark T.", text: "The packed lunch facing the peak made it all worth it. Excellent group." }
        ]
    },
    {
        id: 6,
        title: "Digital Art Masterclass",
        host: "Seoul Tech Hub",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "Thursday, 6:30 PM",
        isoDate: "2026-02-26T18:30:00",
        location: "Gangnam, Seoul, South Korea",
        coords: [37.4979, 127.0276],
        image: "https://picsum.photos/seed/seoul_digitalart/600/400",
        verified: true,
        rating: 4.5,
        description: "Blend tradition with technology by learning how to digitally illustrate character designs using modern tools like iPad and Procreate.",
        reviews: [
            { user: "Sam Q.", text: "Learned a ton of new techniques. Very fast-paced." },
            { user: "Diana V.", text: "Really cool atmosphere and great networking opportunity." }
        ]
    },
    {
        id: 7,
        title: "Oaxacan Mole Cooking Class",
        host: "Cocina de Oaxaca",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "Wednesday, 5:00 PM",
        isoDate: "2026-02-25T17:00:00",
        location: "Oaxaca City, Oaxaca, Mexico",
        coords: [17.0732, -96.7266],
        image: "https://picsum.photos/seed/mexico_cooking/600/400",
        verified: true,
        rating: 4.9,
        description: "Learn to cook authentic Mexican Mole using fresh spices from the local mercado. Enjoy the dinner in a beautiful courtyard setting.",
        reviews: [
            { user: "Greg H.", text: "The spices were so fresh, and the chef was delightful." },
            { user: "Chloe S.", text: "Loved walking the market before cooking. The meal was to die for." }
        ]
    },
    {
        id: 8,
        title: "Tea Plantation Walk",
        host: "Munnar Spice Gardens",
        category: "wellness",
        categoryLabel: "Wellness & Fitness",
        date: "Saturday, 8:00 AM",
        isoDate: "2026-02-28T08:00:00",
        location: "Munnar, Idukki, Kerala, India",
        coords: [10.0889, 77.0595],
        image: "https://picsum.photos/seed/kerala_garden/600/400",
        verified: true,
        rating: 4.8,
        description: "Spend your morning walking through the lush tea estates of Kerala. Includes a guided nature walk, tea tasting, and light refreshments.",
        reviews: [
            { user: "Mia J.", text: "Felt great to connect with nature. Great community spirit here." },
            { user: "Tom K.", text: "Relaxing walk and learned so much about tea processing." }
        ]
    },
    {
        id: 9,
        title: "Holi Festival Celebration",
        host: "Community Celebrations",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "March 14, 10:00 AM",
        isoDate: "2026-03-14T10:00:00",
        location: "Pan India",
        coords: [28.6139, 77.2090],
        image: "https://picsum.photos/seed/holi/600/400",
        verified: true,
        rating: 4.9,
        description: "Celebrate the festival of colors with music, dance, and organic gulal. A vibrant cultural experience for all ages.",
        reviews: [{ user: "Amit R.", text: "The most energetic celebration I've ever been part of!" }]
    },
    {
        id: 10,
        title: "Diwali Lights Festival",
        host: "Community & Temple Committees",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "November 1, 6:30 PM",
        isoDate: "2026-11-01T18:30:00",
        location: "Pan India",
        coords: [19.0760, 72.8777],
        image: "https://picsum.photos/seed/diwali/600/400",
        verified: true,
        rating: 5.0,
        description: "The festival of lights. Experience stunning fireworks, diyas, and traditional sweets in a warm community atmosphere.",
        reviews: [{ user: "Sita G.", text: "Beautiful decorations everywhere." }]
    },
    {
        id: 11,
        title: "Pongal Harvest Festival",
        host: "Govt of TN & Local Communities",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "January 14, 9:00 AM",
        isoDate: "2026-01-14T09:00:00",
        location: "Tamil Nadu, India",
        coords: [13.0827, 80.2707],
        image: "https://picsum.photos/seed/pongal/600/400",
        verified: true,
        rating: 4.7,
        description: "A traditional harvest festival celebrating nature and cattle. Enjoy the cooking of the 'Pongal' dish in open courtyards.",
        reviews: []
    },
    {
        id: 12,
        title: "Thrissur Pooram",
        host: "Cochin Devaswom Board",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "May 10, 2:00 PM",
        isoDate: "2026-05-10T14:00:00",
        location: "Thrissur, Kerala",
        coords: [10.5276, 76.2144],
        image: "https://picsum.photos/seed/pooram/600/400",
        verified: true,
        rating: 4.9,
        description: "The 'festival of festivals' in Kerala. Witness a magnificent procession of decorated elephants and spectacular fireworks.",
        reviews: []
    },
    {
        id: 13,
        title: "Goa Carnival",
        host: "Goa Tourism Department",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "February 22, 4:00 PM",
        isoDate: "2026-02-22T16:00:00",
        location: "Panjim, Goa",
        coords: [15.4909, 73.8278],
        image: "https://picsum.photos/seed/goacarnival/600/400",
        verified: true,
        rating: 4.8,
        description: "A vibrant cultural parade featuring music, dance, and colorful floats through the streets of Goa.",
        reviews: []
    },
    {
        id: 14,
        title: "Pushkar Camel Fair",
        host: "RTDC",
        category: "outdoor",
        categoryLabel: "Outdoor Adventures",
        date: "November 5, 8:00 AM",
        isoDate: "2026-11-05T08:00:00",
        location: "Pushkar, Rajasthan",
        coords: [26.4897, 74.5511],
        image: "https://picsum.photos/seed/pushkar/600/400",
        verified: true,
        rating: 4.6,
        description: "One of the world's largest livestock fairs. Experience desert life, traditional competitions, and cultural performances.",
        reviews: []
    },
    {
        id: 15,
        title: "International Kite Festival",
        host: "Gujarat Tourism",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "January 14, 10:00 AM",
        isoDate: "2026-01-14T10:00:00",
        location: "Ahmedabad, Gujarat",
        coords: [23.0225, 72.5714],
        image: "https://picsum.photos/seed/kites/600/400",
        verified: true,
        rating: 4.7,
        description: "The skies fill with thousands of colorful kites. Join master kite flyers and learn the art of kite making.",
        reviews: []
    },
    {
        id: 16,
        title: "Sunburn Festival",
        host: "Sunburn & Event Networks",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "December 28, 5:00 PM",
        isoDate: "2026-12-28T17:00:00",
        location: "Vagator, Goa",
        coords: [15.6030, 73.7336],
        image: "https://picsum.photos/seed/sunburn/600/400",
        verified: true,
        rating: 4.5,
        description: "Asia's largest Electronic Dance Music festival. Features top global DJs and an immersive festival experience.",
        reviews: []
    },
    {
        id: 17,
        title: "Hornbill Festival",
        host: "Government of Nagaland",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "December 1, 10:00 AM",
        isoDate: "2026-12-01T10:00:00",
        location: "Kisama, Nagaland",
        coords: [25.6067, 94.1167],
        image: "https://picsum.photos/seed/hornbill/600/400",
        verified: true,
        rating: 4.9,
        description: "The 'Festival of Festivals' showcasing the rich cultural heritage of Nagaland's tribes through dance, food, and crafts.",
        reviews: []
    },
    {
        id: 18,
        title: "Mysuru Dasara",
        host: "Government of Karnataka",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "October 12, 6:00 PM",
        isoDate: "2026-10-12T18:00:00",
        location: "Mysuru, Karnataka",
        coords: [12.3053, 76.6552],
        image: "https://picsum.photos/seed/dasara/600/400",
        verified: true,
        rating: 4.8,
        description: "A 10-day state festival celebrating victory of good over evil. The Mysuru Palace is illuminated with 100,000 bulbs.",
        reviews: []
    },
    {
        id: 19,
        title: "International Yoga Day",
        host: "Ministry of AYUSH",
        category: "wellness",
        categoryLabel: "Wellness & Fitness",
        date: "June 21, 6:00 AM",
        isoDate: "2026-06-21T06:00:00",
        location: "Pan India",
        coords: [28.6139, 77.2090],
        image: "https://picsum.photos/seed/yoga_day/600/400",
        verified: true,
        rating: 5.0,
        description: "Massive outdoor yoga sessions held across the country to celebrate health and spiritual wellness.",
        reviews: []
    },
    {
        id: 20,
        title: "India International Trade Fair",
        host: "ITPO",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "November 14, 11:00 AM",
        isoDate: "2026-11-14T11:00:00",
        location: "Pragati Maidan, New Delhi",
        coords: [28.6149, 77.2427],
        image: "https://picsum.photos/seed/tradefair/600/400",
        verified: true,
        rating: 4.2,
        description: "A huge platform for business and cultural exchange. Features pavilions from different states and countries.",
        reviews: []
    },
    {
        id: 21,
        title: "Tata Mumbai Marathon",
        host: "Procam International",
        category: "wellness",
        categoryLabel: "Wellness & Fitness",
        date: "January 19, 5:30 AM",
        isoDate: "2026-01-19T05:30:00",
        location: "Mumbai, Maharashtra",
        coords: [18.9400, 72.8353],
        image: "https://picsum.photos/seed/marathon/600/400",
        verified: true,
        rating: 4.8,
        description: "Join thousands of runners in India's premier international marathon across the iconic sea link.",
        reviews: []
    },
    {
        id: 22,
        title: "Jaipur Literature Festival",
        host: "Teamwork Arts",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "January 23, 10:00 AM",
        isoDate: "2026-01-23T10:00:00",
        location: "Jaipur, Rajasthan",
        coords: [26.9124, 75.8198],
        image: "https://picsum.photos/seed/literature/600/400",
        verified: true,
        rating: 4.9,
        description: "The world's largest free literary festival. Engage with top authors, thinkers, and Nobel laureates.",
        reviews: []
    },
    {
        id: 23,
        title: "National Science Day Events",
        host: "Min of Science & Technology",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "February 28, 11:00 AM",
        isoDate: "2026-02-28T11:00:00",
        location: "Pan India",
        coords: [12.9716, 77.5946],
        image: "https://picsum.photos/seed/science/600/400",
        verified: true,
        rating: 4.4,
        description: "Scientific exhibitions and competitions across universities to promote the importance of science in daily life.",
        reviews: []
    },
    {
        id: 24,
        title: "Swachh Bharat Drives",
        host: "Government of India",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "Every Sunday, 8:00 AM",
        isoDate: "2026-03-01T08:00:00",
        location: "Pan India",
        coords: [28.6139, 77.2090],
        image: "https://picsum.photos/seed/cleanliness/600/400",
        verified: true,
        rating: 4.7,
        description: "Community-driven cleanliness initiatives aimed at improving social awareness and public hygiene.",
        reviews: []
    },
    {
        id: 25,
        title: "Bangalore Tech Summit",
        host: "Government of Karnataka",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "November 19, 9:30 AM",
        isoDate: "2026-11-19T09:30:00",
        location: "Bengaluru, Karnataka",
        coords: [12.9716, 77.5946],
        image: "https://picsum.photos/seed/techsummit/600/400",
        verified: true,
        rating: 4.6,
        description: "India's flagship technology event focusing on AI, Biotech, and future tech trends.",
        reviews: []
    },
    {
        id: 26,
        title: "Chennai Music Season",
        host: "Music Academy Madras",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "December 15, 5:00 PM",
        isoDate: "2026-12-15T17:00:00",
        location: "Chennai, Tamil Nadu",
        coords: [13.0428, 80.2565],
        image: "https://picsum.photos/seed/carnatic/600/400",
        verified: true,
        rating: 4.9,
        description: "A prestigious classical music and dance festival featuring the best of Carnatic traditions.",
        reviews: []
    },
    {
        id: 27,
        title: "Rann Utsav",
        host: "Gujarat Tourism",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "November 10, 7:00 PM",
        isoDate: "2026-11-10T19:00:00",
        location: "Kutch, Gujarat",
        coords: [23.2420, 69.6669],
        image: "https://picsum.photos/seed/rann/600/400",
        verified: true,
        rating: 4.8,
        description: "Experience the magic of the white salt desert under the full moon. Includes folk music, crafts, and desert camps.",
        reviews: []
    },
    {
        id: 28,
        title: "Delhi Book Fair",
        host: "ITPO",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "September 5, 11:00 AM",
        isoDate: "2026-09-05T11:00:00",
        location: "New Delhi",
        coords: [28.6149, 77.2427],
        image: "https://picsum.photos/seed/bookfair/600/400",
        verified: true,
        rating: 4.3,
        description: "A paradise for book lovers featuring thousands of titles across all genres and literary discussions.",
        reviews: []
    },
    {
        id: 29,
        title: "CodeStorm 2026",
        host: "TechNova Innovations",
        category: "hackathon",
        categoryLabel: "Hackathons",
        date: "March 15, 2026, 09:00 AM",
        isoDate: "2026-03-15T09:00:00",
        location: "Dept of CS (Online/Hybrid)",
        coords: [19.0760, 72.8777],
        image: "https://picsum.photos/seed/codestorm/600/400",
        verified: true,
        rating: 4.8,
        description: "A high-intensity 48-hour hackathon focused on solving real-world challenges through innovative software solutions.",
        reviews: []
    },
    {
        id: 30,
        title: "Ignite the Future Summit",
        host: "Future Leaders Forum",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "March 22, 2026, 10:30 AM",
        isoDate: "2026-03-22T10:30:00",
        location: "Student Development Cell, Pan India",
        coords: [28.6139, 77.2090],
        image: "https://picsum.photos/seed/ignite/600/400",
        verified: true,
        rating: 4.7,
        description: "Empowering the next generation of leaders with workshops on soft skills, leadership, and entrepreneurship.",
        reviews: []
    },
    {
        id: 31,
        title: "Rhythm & Radiance Fest",
        host: "Cultural Collective Society",
        category: "social",
        categoryLabel: "Social Gatherings",
        date: "April 5, 2026, 04:00 PM",
        isoDate: "2026-04-05T16:00:00",
        location: "Arts and Culture Committee, India",
        coords: [13.0827, 80.2707],
        image: "https://picsum.photos/seed/rhythm/600/400",
        verified: true,
        rating: 4.9,
        description: "A grand celebration of performing arts, featuring classical dance and modern musical fusions.",
        reviews: []
    },
    {
        id: 32,
        title: "HackVerse 2.0",
        host: "Innovators Hub",
        category: "hackathon",
        categoryLabel: "Hackathons",
        date: "April 12, 2026, 08:30 AM",
        isoDate: "2026-04-12T08:30:00",
        location: "IEEE Student Branch",
        coords: [12.9716, 77.5946],
        image: "https://picsum.photos/seed/hackverse/600/400",
        verified: true,
        rating: 4.6,
        description: "Explore the metaverse and web3 technologies in this collaborative hacking marathon. Prizes for best dApps!",
        reviews: []
    },
    {
        id: 33,
        title: "EcoWarriors Conclave",
        host: "Green Earth Initiative",
        category: "outdoor",
        categoryLabel: "Outdoor Adventures",
        date: "April 18, 2026, 11:00 AM",
        isoDate: "2026-04-18T11:00:00",
        location: "Environmental Club, Pan India",
        coords: [28.6139, 77.2090],
        image: "https://picsum.photos/seed/eco/600/400",
        verified: true,
        rating: 4.8,
        description: "A summit dedicated to climate action, sustainable living, and community-led conservation efforts.",
        reviews: []
    },
    {
        id: 34,
        title: "BizBlaze Expo",
        host: "Entrepreneurship Cell",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "April 25, 2026, 09:30 AM",
        isoDate: "2026-04-25T09:30:00",
        location: "Business Admin Dept",
        coords: [19.0760, 72.8777],
        image: "https://picsum.photos/seed/bizblaze/600/400",
        verified: true,
        rating: 4.5,
        description: "Startup showcase and networking event connecting student entrepreneurs with industry mentors.",
        reviews: []
    },
    {
        id: 35,
        title: "CyberShield Workshop",
        host: "CyberSecure Foundation",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "May 2, 2026, 02:00 PM",
        isoDate: "2026-05-02T14:00:00",
        location: "IT Department, Pan India",
        coords: [12.9716, 77.5946],
        image: "https://picsum.photos/seed/cyber/600/400",
        verified: true,
        rating: 4.7,
        description: "Hands-on training session on ethical hacking, network security, and personal digital safety.",
        reviews: []
    },
    {
        id: 36,
        title: "Stellar Minds Conference",
        host: "Academic Excellence Forum",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "May 10, 2026, 10:00 AM",
        isoDate: "2026-05-10T10:00:00",
        location: "Research and Development Cell",
        coords: [28.6139, 77.2090],
        image: "https://picsum.photos/seed/stellar/600/400",
        verified: true,
        rating: 4.4,
        description: "Academic conference showcasing breakthrough research in physics and aerospace engineering.",
        reviews: []
    },
    {
        id: 37,
        title: "MedSpark Symposium",
        host: "Health Horizons Association",
        category: "wellness",
        categoryLabel: "Wellness & Fitness",
        date: "May 18, 2026, 09:00 AM",
        isoDate: "2026-05-18T09:00:00",
        location: "Medical Sciences Dept",
        coords: [19.0760, 72.8777],
        image: "https://picsum.photos/seed/medspark/600/400",
        verified: true,
        rating: 4.8,
        description: "Discussing modern healthcare trends, medical AI, and public health innovations.",
        reviews: []
    },
    {
        id: 38,
        title: "PixelPulse Designathon",
        host: "Creative Minds Studio",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "May 24, 2026, 01:00 PM",
        isoDate: "2026-05-24T13:00:00",
        location: "Media and Design Club",
        coords: [12.9716, 77.5946],
        image: "https://picsum.photos/seed/pixelpulse/600/400",
        verified: true,
        rating: 4.5,
        description: "A fast-paced design competition where creators solve UX/UI problems for social impact.",
        reviews: []
    },
    {
        id: 39,
        title: "AthleXtreme Championship",
        host: "Sports Arena Association",
        category: "wellness",
        categoryLabel: "Wellness & Fitness",
        date: "June 1, 2026, 07:00 AM",
        isoDate: "2026-06-01T07:00:00",
        location: "Physical Education Dept",
        coords: [13.0827, 80.2707],
        image: "https://picsum.photos/seed/extreme/600/400",
        verified: true,
        rating: 4.9,
        description: "Inter-collegiate sports meet featuring track, field, and swimming championships.",
        reviews: []
    },
    {
        id: 40,
        title: "Literary Lumina Fest",
        host: "WordWeavers Guild",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "June 8, 2026, 10:30 AM",
        isoDate: "2026-06-08T10:30:00",
        location: "English Department",
        coords: [28.6139, 77.2090],
        image: "https://picsum.photos/seed/literary/600/400",
        verified: true,
        rating: 4.6,
        description: "A celebration of literature, poetry slams, and creative writing workshops.",
        reviews: []
    },
    {
        id: 41,
        title: "AI Ascend Summit",
        host: "NextGen Tech Society",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "June 15, 2026, 09:00 AM",
        isoDate: "2026-06-15T09:00:00",
        location: "AI Research Cell",
        coords: [12.9716, 77.5946],
        image: "https://picsum.photos/seed/ai_ascend/600/400",
        verified: true,
        rating: 4.9,
        description: "A deep dive into the world of Large Language Models and Generative AI ethics.",
        reviews: []
    },
    {
        id: 42,
        title: "Harmony Heals Concert",
        host: "Music & Wellness Foundation",
        category: "wellness",
        categoryLabel: "Wellness & Fitness",
        date: "June 21, 2026, 05:30 PM",
        isoDate: "2026-06-21T17:30:00",
        location: "Fine Arts Department",
        coords: [28.6139, 77.2090],
        image: "https://picsum.photos/seed/harmony/600/400",
        verified: true,
        rating: 4.8,
        description: "Experience the healing power of sound therapy and classical instrumental music.",
        reviews: []
    },
    {
        id: 43,
        title: "Startup Sprint Challenge",
        host: "LaunchPad Network",
        category: "creative",
        categoryLabel: "Creative Workshops",
        date: "June 28, 2026, 09:00 AM",
        isoDate: "2026-06-28T09:00:00",
        location: "Innovation Center",
        coords: [19.0760, 72.8777],
        image: "https://picsum.photos/seed/sprint/600/400",
        verified: true,
        rating: 4.7,
        description: "A pitch competition where aspiring founders compete for seed funding and incubation.",
        reviews: []
    },
];

// DOM Elements
const eventGrid = document.getElementById('eventGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('registrationModal');
const closeModalBtn = document.getElementById('closeModal');
const regForm = document.getElementById('registrationForm');
const successMsg = document.getElementById('successMessage');
const modalEventTitle = document.getElementById('modalEventTitle');
const modalEventDate = document.getElementById('modalEventDate');
const citySearch = document.getElementById('citySearch');
const searchBtn = document.getElementById('searchBtn');

// Travel Elements
const userLocationInput = document.getElementById('userLocation');
const getDirectionsBtn = document.getElementById('getDirectionsBtn');
const travelInstructions = document.getElementById('travelInstructions');
const eventReviewsList = document.getElementById('eventReviewsList');
let currentEventLocation = "";
let currentEventHost = "";

// Add Event Elements
const addEventModal = document.getElementById('addEventModal');
const openAddEventBtn = document.getElementById('openAddEventBtn');
const closeAddEventModalBtn = document.getElementById('closeAddEventModal');
const addEventForm = document.getElementById('addEventForm');
const addEventSuccessMessage = document.getElementById('addEventSuccessMessage');

// Render Events
function renderEvents(events) {
    eventGrid.innerHTML = '';

    if (events.length === 0) {
        eventGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No events found matching your criteria.</p>';
        return;
    }

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card glass-panel';
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-image" loading="lazy">
            <div class="event-details">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                    <span class="event-category" style="margin-bottom: 0; padding: 0.2rem 0.6rem; font-size: 0.70rem;">${event.categoryLabel}</span>
                    <span style="color: #fbbf24; font-size: 0.75rem; font-weight: 600;"><i class="ri-star-fill"></i> ${event.rating}</span>
                </div>
                <h3 class="event-title">${event.title}</h3>
                <div style="color: var(--secondary); font-size: 0.8rem; font-weight: 600; margin-bottom: 0.3rem; display: flex; align-items: center; gap: 0.2rem;">
                    <i class="ri-user-star-line"></i> Hosted by: ${event.host}
                    ${event.verified ? '<i class="ri-verified-badge-fill" style="color: #3b82f6; margin-left: 0.2rem;" title="Authorized Organization"></i>' : '<span style="color: var(--text-muted); font-size: 0.7rem; font-weight: normal; margin-left: 0.3rem;">(Community Event)</span>'}
                </div>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.8rem; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">
                    ${event.description}
                </p>
                <div class="event-meta">
                    <span><i class="ri-calendar-event-line"></i> ${event.date}</span>
                    <span><i class="ri-map-pin-line"></i> ${event.location}</span>
                </div>
                <button class="register-btn" data-id="${event.id}">View Details & Join</button>
            </div>
        `;
        eventGrid.appendChild(card);
    });

    // Add event listeners to new buttons
    document.querySelectorAll('.register-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const eventId = parseInt(e.target.getAttribute('data-id'));
            openModal(eventId);
        });
    });
}

// Combined Filter & Sort Logic
let searchTimeout;
const sortSelect = document.getElementById('sortEvents');
const targetDateInput = document.getElementById('targetDate');

sortSelect.addEventListener('change', () => {
    if (sortSelect.value === 'closest') {
        targetDateInput.style.display = 'block';
    } else {
        targetDateInput.style.display = 'none';
        applyFilters();
    }
});

targetDateInput.addEventListener('change', applyFilters);

function applyFilters() {
    const query = citySearch.value.trim().toLowerCase();
    const activeBtn = document.querySelector('.filter-btn.active');
    const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    const sortBy = sortSelect.value;
    const targetDate = targetDateInput.value ? new Date(targetDateInput.value) : new Date();

    let filtered = [...eventsData];

    // 1. Filter by Category
    if (category !== 'all') {
        filtered = filtered.filter(e => e.category === category);
    }

    // 2. Filter by Search Query
    if (query) {
        filtered = filtered.filter(e =>
            e.title.toLowerCase().includes(query) ||
            e.location.toLowerCase().includes(query) ||
            e.host.toLowerCase().includes(query) ||
            e.description.toLowerCase().includes(query) ||
            e.categoryLabel.toLowerCase().includes(query)
        );
    }

    // 3. Sorting Logic
    if (sortBy === 'upcoming') {
        filtered.sort((a, b) => new Date(a.isoDate || '2099') - new Date(b.isoDate || '2099'));
    } else if (sortBy === 'recent') {
        filtered.sort((a, b) => b.id - a.id);
    } else if (sortBy === 'closest') {
        filtered.sort((a, b) => {
            const dA = Math.abs(new Date(a.isoDate || '2099') - targetDate);
            const dB = Math.abs(new Date(b.isoDate || '2099') - targetDate);
            return dA - dB;
        });
    }

    renderEvents(filtered);
    resetSearchTimer();
}

function resetSearchTimer() {
    clearTimeout(searchTimeout);
    if (citySearch.value.trim() !== "") {
        searchTimeout = setTimeout(() => {
            citySearch.value = "";
            applyFilters();
        }, 5 * 60 * 1000); // 5 minutes
    }
}

// Category Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilters();
    });
});

// Search Listeners
searchBtn.addEventListener('click', () => {
    applyFilters();
    document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
});

citySearch.addEventListener('input', applyFilters);
citySearch.addEventListener('keyup', applyFilters);

// Modal Logic
let map;
function initMap(lat, lng, title) {
    if (map) { map.remove(); }
    setTimeout(() => {
        map = L.map('eventMap').setView([lat, lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([lat, lng]).addTo(map).bindPopup(title).openPopup();
        map.invalidateSize();
    }, 300);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function openModal(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (event) {
        currentEventLocation = event.location;
        currentEventHost = event.host;
        modalEventTitle.innerHTML = `${event.title} <span style="font-size: 1rem; color: #fbbf24; margin-left: 0.5rem;"><i class="ri-star-fill"></i> ${event.rating}</span>`;
        modalEventDate.textContent = `${event.date} @ ${event.location}`;

        const existingDesc = document.getElementById('modalEventDescription');
        if (!existingDesc) {
            const descEl = document.createElement('p');
            descEl.id = 'modalEventDescription';
            descEl.style.cssText = 'font-size: 0.95rem; color: var(--text-main); margin: 1rem 0; line-height: 1.5; padding: 1rem; background: var(--glass-bg); border-radius: 8px; border: 1px solid var(--glass-border);';
            descEl.textContent = event.description;
            document.querySelector('.modal-header').appendChild(descEl);
        } else {
            existingDesc.textContent = event.description;
        }

        // Initialize Map
        const coords = event.coords || [28.6139, 77.2090];
        initMap(coords[0], coords[1], event.title);
        document.getElementById('distanceInfo').textContent = "";

        // Populate reviews
        if (event.reviews && event.reviews.length > 0) {
            let reviewsHTML = '';
            event.reviews.forEach(review => {
                reviewsHTML += `
                    <div style="background: rgba(255,255,255,0.05); padding: 0.8rem; border-radius: 8px; margin-bottom: 0.5rem;">
                        <div style="font-weight: 600; font-size: 0.85rem; margin-bottom: 0.2rem; color: var(--secondary);"><i class="ri-user-smile-line"></i> ${review.user}</div>
                        <div style="font-size: 0.9rem; color: var(--text-main); font-style: italic;">"${review.text}"</div>
                    </div>
                `;
            });
            eventReviewsList.innerHTML = reviewsHTML;
        } else {
            eventReviewsList.innerHTML = '<p style="font-size: 0.9rem; color: var(--text-muted);">No reviews yet.</p>';
        }

        // Reset form state
        regForm.reset();

        // Pre-fill location if searched
        userLocationInput.value = citySearch.value;
        travelInstructions.classList.add('hidden');
        travelInstructions.innerHTML = '';

        regForm.classList.remove('hidden');
        successMsg.classList.add('hidden');

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Add Event Logic
openAddEventBtn.addEventListener('click', () => {
    addEventForm.reset();
    addEventForm.classList.remove('hidden');
    addEventSuccessMessage.classList.add('hidden');

    addEventModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeAddEventModal() {
    addEventModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeAddEventModalBtn.addEventListener('click', closeAddEventModal);

addEventModal.addEventListener('click', (e) => {
    if (e.target === addEventModal) {
        closeAddEventModal();
    }
});

addEventForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Generate a random ID
    const newId = eventsData.length > 0 ? Math.max(...eventsData.map(ev => ev.id)) + 1 : 1;

    // Get form values
    const categorySelect = document.getElementById('newEventCategory');
    const categoryLabel = categorySelect.options[categorySelect.selectedIndex].text;
    const categoryVal = categorySelect.value;

    let imageUrl = document.getElementById('newEventImage').value.trim();
    if (!imageUrl) {
        // Fallback default image
        imageUrl = `https://picsum.photos/seed/${newId}community/600/400`;
    }

    // Create the new event object
    const newEvent = {
        id: newId,
        title: document.getElementById('newEventTitle').value.trim(),
        host: document.getElementById('newEventHost').value.trim(),
        category: categoryVal,
        categoryLabel: categoryLabel,
        date: document.getElementById('newEventDate').value.trim(),
        location: document.getElementById('newEventLocation').value.trim(),
        image: imageUrl,
        description: "A wonderful new event added by a community member. Check back later for more details!",
        verified: false, // Community added events are not verified by default
        rating: 5.0, // Default for new events 
        reviews: [] // Empty reviews
    };

    // Animate saving
    const submitBtn = addEventForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Publishing...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Push and render
        eventsData.unshift(newEvent); // Add to beginning of array

        // Update filters appropriately
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        if (activeFilter === 'all' || activeFilter === categoryVal) {
            renderEvents(eventsData.filter(e => activeFilter === 'all' || e.category === activeFilter));
        }

        // Show success
        addEventForm.classList.add('hidden');
        addEventSuccessMessage.classList.remove('hidden');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Auto close after 2 seconds
        setTimeout(() => {
            closeAddEventModal();
        }, 2000);

    }, 1000);
});

// Travel Routing Logic
const cityCoords = {
    "tokyo": [35.6895, 139.6917],
    "florence": [43.7696, 11.2558],
    "austin": [30.2672, -97.7431],
    "mumbai": [19.0760, 72.8777],
    "delhi": [28.6139, 77.2090],
    "munnar": [10.0889, 77.0595],
    "bangalore": [12.9716, 77.5946],
    "chennai": [13.0827, 80.2707]
};

getDirectionsBtn.addEventListener('click', () => {
    const userLoc = userLocationInput.value.trim().toLowerCase();
    if (!userLoc) {
        alert("Please enter your location first.");
        return;
    }

    // Simulated geolocation or direct coordinate lookup
    let userCoords = [20.5937, 78.9629]; // Default India center
    for (let city in cityCoords) {
        if (userLoc.includes(city)) {
            userCoords = cityCoords[city];
            break;
        }
    }

    const event = eventsData.find(e => e.location.toLowerCase().includes(currentEventLocation.toLowerCase()) || e.host === currentEventHost);
    const eventCoords = event?.coords || [28.6139, 77.2090];

    const dist = calculateDistance(userCoords[0], userCoords[1], eventCoords[0], eventCoords[1]);
    document.getElementById('distanceInfo').innerHTML = `<i class="ri-map-pin-line"></i> Estimated Distance: ${dist.toFixed(1)} km`;

    travelInstructions.classList.remove('hidden');
    travelInstructions.innerHTML = `
        <p><strong>Recommended:</strong> Flight or Express Train</p>
        <p><strong>Distance:</strong> ${dist.toFixed(1)} km</p>
        <p><strong>Note:</strong> Travel time varies based on local traffic and weather conditions.</p>
    `;

    // Original mock travel instructions logic (modified to fit new structure)
    getDirectionsBtn.textContent = "Calculating...";
    getDirectionsBtn.disabled = true;

    setTimeout(() => {
        // Generate mock times (in hours) to simulate different travel methods
        const distanceBase = Math.floor(dist / 100); // Base time proportional to distance
        const carTime = distanceBase + (Math.random() * 2);
        const transitTime = carTime * 1.3; // Transit usually takes a bit longer
        const flightTime = dist > 500 ? (dist / 800) + 2 : null; // Only fly if > 500km (add 2h for airport security etc)
        const bikeTime = carTime * 4.5;

        // Format time helper
        const formatTime = (hours) => {
            const h = Math.floor(hours);
            const m = Math.round((hours - h) * 60);
            return h > 0 ? `${h}h ${m}m` : `${m}m`;
        }

        // Build route objects
        const routes = [
            { method: '🚗 Car', timeHrs: carTime, desc: `Take the scenic state highway route.` },
            { method: '🚆 Transit', timeHrs: transitTime, desc: `Regional rail line + local shuttle.` },
            { method: '🚲 Bike', timeHrs: bikeTime, desc: `A gorgeous but demanding scenic ride.` }
        ];

        if (flightTime) {
            routes.push({ method: '✈️ Air', timeHrs: flightTime, desc: `Direct flight + short rental car drive.` });
        }

        // Sort by fastest time
        routes.sort((a, b) => a.timeHrs - b.timeHrs);
        const fastestRoute = routes[0];

        // Generate HTML
        let routesHTML = `<ul style="list-style: none; padding: 0; margin-top: 0.8rem;">`;
        routes.forEach(route => {
            const isFastest = route === fastestRoute;
            routesHTML += `
                <li style="margin-bottom: 0.8rem; padding: 0.5rem; background: ${isFastest ? 'var(--primary-glow)' : 'rgba(255,255,255,0.05)'}; border-radius: 6px; border-left: 3px solid ${isFastest ? 'var(--primary)' : 'transparent'};">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                        <strong>${route.method}</strong>
                        <span>${formatTime(route.timeHrs)} ${isFastest ? '<span style="color: #10b981; font-size: 0.8rem; margin-left: 4px;">⚡ Fastest</span>' : ''}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: var(--text-muted);">${route.desc}</div>
                </li>
            `;
        });
        routesHTML += `</ul>`;

        travelInstructions.innerHTML = `
            <p style="margin-bottom: 0.5rem; color: var(--secondary);"><strong>Routes to ${currentEventLocation} from ${userLoc}:</strong></p>
            ${routesHTML}
            <p style="margin-top: 0.8rem; font-size: 0.8rem; text-align: center;">
                <a href="#" style="color: var(--primary); text-decoration: none;">Open in Google Maps <i class="ri-external-link-line"></i></a>
            </p>
        `;
        travelInstructions.classList.remove('hidden');

        getDirectionsBtn.textContent = "Get Route Info";
        getDirectionsBtn.disabled = false;
    }, 800);
});

// Form Submission
regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate API call
    const submitBtn = regForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;

    setTimeout(() => {
        regForm.classList.add('hidden');

        // Update success message to reference the host
        const successParagraph = successMsg.querySelector('p');
        if (successParagraph) {
            successParagraph.innerHTML = `Your registration details have been sent to <strong>${currentEventHost}</strong>. They will follow up with you shortly!`;
        }

        successMsg.classList.remove('hidden');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Initial Render
renderEvents(eventsData);
