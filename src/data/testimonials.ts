export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Chen",
    location: "Portland, OR",
    rating: 5,
    text: "The Trailblazer Pro has completely transformed my weekend rides. The suspension handles everything from roots to rock gardens with ease. Best investment I've made for my outdoor adventures.",
    product: "Trailblazer Pro",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: "2",
    name: "Sarah Mitchell",
    location: "Austin, TX",
    rating: 5,
    text: "I've been commuting on the Urban Commuter for 6 months now. Rain or shine, it's reliable, comfortable, and turns heads. The integrated lights are a game-changer for safety.",
    product: "Urban Commuter",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    id: "3",
    name: "David Rodriguez",
    location: "Denver, CO",
    rating: 5,
    text: "The Eco Rider E+ lets me tackle the hills in my neighborhood without breaking a sweat. The battery life is impressive - I charge it once a week for my daily commute.",
    product: "Eco Rider E+",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
  },
  {
    id: "4",
    name: "Emma Thompson",
    location: "Seattle, WA",
    rating: 5,
    text: "Bought the Velocity Elite for my first century ride. The carbon frame is incredibly responsive, and the geometry keeps me comfortable even after 100 miles. Absolutely worth every penny.",
    product: "Velocity Elite",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
  },
  {
    id: "5",
    name: "James Okonkwo",
    location: "Chicago, IL",
    rating: 5,
    text: "Got the Adventure Jr for my daughter's birthday. She hasn't stopped riding since! The build quality is excellent and it's clearly designed to last through years of adventures.",
    product: "Adventure Jr",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
  }
];
