import { type } from "os";

export interface Member {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  image: string;
  occupation: string;
  currentMoods: ("Dating" | "Networking" | "Parties" | "Adventure" | "Dining Out")[];
}

export const members: Member[] = [
  {
    id: 18,
    name: "Alexander Grey",
    age: 32,
    location: "Barcelona",
    bio: "Luxury fashion consultant and brand strategist. Specializing in sustainable fashion and premium market trends.",
    interests: ["Fashion", "Luxury Brands", "Sustainability", "Design"],
    image: "/attached_assets/Screenshot 2024-03-06 at 12.19.10 PM.png",
    occupation: "Fashion Consultant",
    currentMoods: ["Networking", "Dating"]
  },
  {
    id: 17,
    name: "Sofia Chen",
    age: 28,
    location: "Mexico City",
    bio: "Fashion editor and creative consultant specializing in sustainable luxury. Bridging the gap between high fashion and conscious consumption.",
    interests: ["Fashion", "Sustainability", "Art Direction", "Photography"],
    image: "/attached_assets/Screenshot 2024-03-06 at 10.23.10 AM.png",
    occupation: "Fashion Editor",
    currentMoods: ["Networking", "Dating"]
  },
  {
    id: 16,
    name: "Carlita",
    age: 27,
    location: "Istanbul",
    bio: "International DJ & Producer bringing global rhythms to the electronic music scene. Blending Turkish beats with contemporary electronic sounds.",
    interests: ["Music Production", "Electronic Music", "World Music", "Nightlife"],
    image: "/attached_assets/Screenshot 2025-03-04 at 9.11.42 PM.png",
    occupation: "DJ & Producer",
    currentMoods: ["Parties"]
  },
  {
    id: 1,
    name: "Luca Hudek",
    age: 44,
    location: "Mexico City",
    bio: "Founder of Māly. Building the future of digital nomad communities.",
    interests: ["Innovation", "Community Building", "Digital Nomads"],
    image: "/attached_assets/Screenshot 2025-02-24 at 2.22.24 PM.png",
    occupation: "Founder & CEO",
    currentMoods: ["Networking"]
  },
  {
    id: 2,
    name: "Adrian",
    age: 28,
    location: "Barcelona",
    bio: "Digital nomad & creative director, bringing art to life through visual storytelling and innovative design.",
    interests: ["Photography", "Art Direction", "Travel"],
    image: "/attached_assets/Screenshot 2023-11-12 at 1.04.38 PM.png",
    occupation: "Creative Director",
    currentMoods: ["Adventure", "Dating"]
  },
  {
    id: 3,
    name: "Sofia",
    age: 29,
    location: "Tulum",
    bio: "Festival artist and spiritual guide. Creating immersive experiences in sacred spaces.",
    interests: ["Festivals", "Spirituality", "Art"],
    image: "/attached_assets/Screenshot 2023-11-12 at 12.56.16 PM.png",
    occupation: "Festival Artist",
    currentMoods: ["Adventure", "Dating"]
  },
  {
    id: 4,
    name: "Isabella",
    age: 26,
    location: "Mexico City",
    bio: "Creative content producer from Brazil, capturing stories through the lens of culture and art.",
    interests: ["Content Creation", "Photography", "Cultural Exchange"],
    image: "/attached_assets/Screenshot 2025-03-04 at 8.28.10 PM.png",
    occupation: "Content Producer",
    currentMoods: ["Parties", "Dating"]
  },
  {
    id: 5,
    name: "Gabriel Tavera",
    age: 44,
    location: "Austin",
    bio: "LA-born yogi now based in Austin, sharing wellness and mindful living practices.",
    interests: ["Yoga", "Wellness", "Mindfulness"],
    image: "/attached_assets/Screenshot 2025-03-04 at 8.30.13 PM.png",
    occupation: "Yoga Instructor",
    currentMoods: ["Adventure"]
  },
  {
    id: 6,
    name: "Samuel Garcia",
    age: 50,
    location: "Mexico City",
    bio: "Entrepreneur and community leader fostering connections in Mexico City's vibrant scene.",
    interests: ["Networking", "Business", "Community"],
    image: "/attached_assets/Screenshot 2025-03-04 at 8.31.15 PM.png",
    occupation: "Entrepreneur",
    currentMoods: ["Networking"]
  },
  {
    id: 7,
    name: "Carlo",
    age: 35,
    location: "Mexico City",
    bio: "Performance artist and creative visionary exploring the intersection of art and technology.",
    interests: ["Performance Art", "Digital Art", "Innovation"],
    image: "/attached_assets/Screenshot 2025-03-04 at 8.32.34 PM.png",
    occupation: "Performance Artist",
    currentMoods: ["Parties", "Dating"]
  },
  {
    id: 8,
    name: "Hamish Fraser",
    age: 38,
    location: "Mexico City",
    bio: "Executive operator with expertise in strategic growth and operational excellence.",
    interests: ["Business Strategy", "Operations", "Leadership"],
    image: "/attached_assets/Screenshot 2025-03-04 at 8.33.27 PM.png",
    occupation: "Executive Operator",
    currentMoods: ["Networking", "Dating"]
  },
  {
    id: 9,
    name: "German Anaya",
    age: 50,
    location: "Mexico City",
    bio: "DJ and fitness instructor bringing rhythm and wellness together in unique ways.",
    interests: ["Music", "Fitness", "Wellness"],
    image: "/attached_assets/Screenshot 2025-03-04 at 8.34.30 PM.png",
    occupation: "DJ & Fitness Instructor",
    currentMoods: ["Parties"]
  },
  {
    id: 10,
    name: "Elena Chen",
    age: 32,
    location: "Mexico City",
    bio: "International art director and curator specializing in contemporary Asian and Latin American art movements.",
    interests: ["Contemporary Art", "Cultural Fusion", "Exhibition Design"],
    image: "/attached_assets/Screenshot 2024-03-06 at 11.24.17 AM.png",
    occupation: "Art Director & Curator",
    currentMoods: ["Networking"]
  },
  {
    id: 11,
    name: "Amara Diallo",
    age: 28,
    location: "Mexico City",
    bio: "Fashion business strategist and sustainability advocate revolutionizing luxury retail in Latin America.",
    interests: ["Sustainable Fashion", "Luxury Retail", "Business Strategy"],
    image: "/attached_assets/Screenshot 2024-03-06 at 10.22.46 AM.png",
    occupation: "Fashion Business Strategist",
    currentMoods: ["Dating", "Networking"]
  },
  {
    id: 12,
    name: "Svetlana",
    age: 31,
    location: "Mexico City",
    bio: "Contemporary artist exploring the intersection of traditional and digital mediums in modern storytelling.",
    interests: ["Contemporary Art", "Mixed Media", "Digital Expression"],
    image: "/attached_assets/Screenshot 2023-11-12 at 1.06.14 PM.png",
    occupation: "Artist",
    currentMoods: ["Adventure", "Dating"]
  },
  {
    id: 13,
    name: "Maya Santos",
    age: 29,
    location: "Mexico City",
    bio: "Digital marketing strategist and content creator specializing in authentic brand storytelling and community engagement.",
    interests: ["Digital Marketing", "Content Strategy", "Brand Development"],
    image: "/attached_assets/Screenshot 2023-11-14 at 9.27.40 AM.png",
    occupation: "Digital Marketing Strategist",
    currentMoods: ["Dining Out"]
  },
  {
    id: 14,
    name: "Dr. Marco Ruiz",
    age: 49,
    location: "Mexico City",
    bio: "Research scientist specializing in sustainable technologies and environmental innovation, bridging academic research with practical applications.",
    interests: ["Sustainability", "Research", "Innovation"],
    image: "/attached_assets/Screenshot 2025-03-04 at 8.40.31 PM.png",
    occupation: "Research Scientist",
    currentMoods: ["Networking"]
  },
  {
    id: 15,
    name: "Paty Yrys",
    age: 39,
    location: "Mexico City",
    bio: "Creative entrepreneur and digital nomad exploring the intersection of lifestyle and technology in Mexico City's dynamic environment.",
    interests: ["Digital Nomad", "Creative Direction", "Entrepreneurship"],
    image: "/attached_assets/Screenshot 2025-03-04 at 8.41.36 PM.png",
    occupation: "Creative Entrepreneur",
    currentMoods: ["Adventure", "Dating"]
  }
];