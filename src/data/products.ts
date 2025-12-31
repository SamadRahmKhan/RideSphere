import { Product } from "@/types/product";

export const products: Product[] = [
  // Mountain Bikes
  {
    id: "mountain-trailblazer-pro",
    name: "Trailblazer Pro",
    category: "mountain",
    price: 1299,
    originalPrice: 1499,
    description: "Conquer any terrain with the Trailblazer Pro. Built for serious trail riders who demand performance and durability on the most challenging mountain paths.",
    shortDescription: "High-performance mountain bike for serious trail riding",
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80",
      "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80"
    ],
    specs: {
      frame: "6061 Aluminum Alloy",
      fork: "RockShox Recon RL 130mm",
      gears: "Shimano Deore 12-speed",
      brakes: "Shimano MT500 Hydraulic Disc",
      wheels: "29\" Tubeless Ready",
      weight: "13.2 kg",
      suspension: "Front Suspension"
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Forest Green", "Matte Black", "Terracotta"],
    featured: true,
    bestSeller: true
  },
  {
    id: "mountain-summit-x",
    name: "Summit X",
    category: "mountain",
    price: 2199,
    description: "Full suspension mastery for the most demanding downhill adventures. The Summit X delivers unmatched control and comfort on extreme terrain.",
    shortDescription: "Full suspension mountain bike for extreme terrain",
    image: "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=800&q=80",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80"
    ],
    specs: {
      frame: "Carbon Fiber Composite",
      fork: "Fox 36 Performance 150mm",
      gears: "SRAM GX Eagle 12-speed",
      brakes: "SRAM Guide RE Hydraulic",
      wheels: "27.5\" Carbon",
      weight: "12.8 kg",
      suspension: "Full Suspension 150mm"
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Carbon Black", "Forest Green"],
    featured: true
  },

  // Road Bikes
  {
    id: "road-velocity-elite",
    name: "Velocity Elite",
    category: "road",
    price: 1899,
    description: "Aerodynamic excellence meets lightweight performance. The Velocity Elite is engineered for cyclists who want to push their limits on paved roads.",
    shortDescription: "Lightweight carbon road bike for speed enthusiasts",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80"
    ],
    specs: {
      frame: "Full Carbon Monocoque",
      fork: "Full Carbon Tapered",
      gears: "Shimano Ultegra R8000 22-speed",
      brakes: "Shimano Ultegra Disc",
      wheels: "700c Carbon Aero",
      weight: "7.9 kg",
      suspension: "None"
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pearl White", "Racing Red", "Midnight Blue"],
    featured: true,
    bestSeller: true
  },
  {
    id: "road-endurance-sport",
    name: "Endurance Sport",
    category: "road",
    price: 1199,
    description: "Designed for long-distance comfort without sacrificing speed. Perfect for century rides and weekend adventures.",
    shortDescription: "Comfortable road bike for long-distance riding",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80"
    ],
    specs: {
      frame: "6061 Aluminum",
      fork: "Carbon Fiber",
      gears: "Shimano 105 R7000 22-speed",
      brakes: "Shimano 105 Hydraulic Disc",
      wheels: "700c Alloy",
      weight: "9.1 kg",
      suspension: "None"
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Sage Green", "Warm Gray", "Black"]
  },

  // City Bikes
  {
    id: "city-urban-commuter",
    name: "Urban Commuter",
    category: "city",
    price: 699,
    description: "Navigate city streets with style and ease. The Urban Commuter combines practicality with modern design for your daily journeys.",
    shortDescription: "Stylish and practical city bike for daily commutes",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=800&q=80",
      "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=800&q=80"
    ],
    specs: {
      frame: "Hi-Ten Steel Step-Through",
      fork: "Steel Rigid",
      gears: "Shimano Nexus 7-speed Internal",
      brakes: "Tektro V-Brake",
      wheels: "700c City",
      weight: "14.5 kg",
      suspension: "None"
    },
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Olive Green", "Navy Blue"],
    featured: true,
    bestSeller: true
  },
  {
    id: "city-metro-classic",
    name: "Metro Classic",
    category: "city",
    price: 549,
    description: "Timeless design meets modern functionality. The Metro Classic is perfect for leisurely rides and quick errands around town.",
    shortDescription: "Classic Dutch-style city bike",
    image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=800&q=80"
    ],
    specs: {
      frame: "Steel Classic",
      fork: "Steel Rigid",
      gears: "Shimano Nexus 3-speed",
      brakes: "Coaster Brake + Front V-Brake",
      wheels: "26\" City",
      weight: "16.2 kg",
      suspension: "None"
    },
    sizes: ["M", "L"],
    colors: ["British Green", "Burgundy", "Black"]
  },

  // Electric Bikes
  {
    id: "electric-eco-rider",
    name: "Eco Rider E+",
    category: "electric",
    price: 2499,
    originalPrice: 2799,
    description: "Go further with zero emissions. The Eco Rider E+ combines powerful electric assistance with eco-conscious design for the ultimate sustainable commute.",
    shortDescription: "Powerful electric bike with 80km range",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80"
    ],
    specs: {
      frame: "6061 Aluminum Integrated Battery",
      fork: "SR Suntour Suspension",
      gears: "Shimano Alivio 9-speed",
      brakes: "Shimano MT200 Hydraulic Disc",
      wheels: "27.5\" E-Bike Rated",
      weight: "22.5 kg",
      motor: "Bosch Performance Line 250W",
      battery: "500Wh Integrated",
      range: "Up to 80km"
    },
    sizes: ["M", "L", "XL"],
    colors: ["Storm Gray", "Forest Green"],
    featured: true
  },
  {
    id: "electric-city-pulse",
    name: "City Pulse E",
    category: "electric",
    price: 1899,
    description: "Urban mobility redefined. Lightweight, agile, and powerful enough to tackle hills with ease.",
    shortDescription: "Lightweight urban electric bike",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    ],
    specs: {
      frame: "Aluminum Step-Through",
      fork: "Rigid Aluminum",
      gears: "Shimano Nexus 5-speed Internal",
      brakes: "Tektro Hydraulic Disc",
      wheels: "700c",
      weight: "19.8 kg",
      motor: "Bafang Hub Motor 250W",
      battery: "360Wh Removable",
      range: "Up to 60km"
    },
    sizes: ["S", "M", "L"],
    colors: ["Pearl White", "Matte Black", "Sage"]
  },

  // Kids Bikes
  {
    id: "kids-adventure-jr",
    name: "Adventure Jr",
    category: "kids",
    price: 299,
    description: "Start them young with a bike built for budding adventurers. Safe, durable, and designed to grow with your child.",
    shortDescription: "Durable kids bike for young adventurers",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
    ],
    specs: {
      frame: "Hi-Ten Steel",
      fork: "Steel Rigid",
      gears: "Single Speed",
      brakes: "V-Brake Front & Rear",
      wheels: "20\"",
      weight: "10.5 kg",
      extras: "Training Wheel Compatible"
    },
    sizes: ["20\""],
    colors: ["Red", "Blue", "Green", "Pink"]
  },
  {
    id: "kids-trail-finder",
    name: "Trail Finder 24",
    category: "kids",
    price: 449,
    description: "For older kids ready to hit the trails. Features real mountain bike geometry scaled down for younger riders.",
    shortDescription: "Youth mountain bike for aspiring trail riders",
    image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80"
    ],
    specs: {
      frame: "6061 Aluminum",
      fork: "SR Suntour XCT Jr 50mm",
      gears: "Shimano Altus 7-speed",
      brakes: "Mechanical Disc",
      wheels: "24\"",
      weight: "11.8 kg"
    },
    sizes: ["24\""],
    colors: ["Neon Orange", "Electric Blue", "Matte Black"]
  }
];

export const categories = [
  {
    id: "mountain",
    name: "Mountain Bikes",
    description: "Conquer any trail with confidence",
    image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&q=80"
  },
  {
    id: "road",
    name: "Road Bikes",
    description: "Speed and performance on pavement",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80"
  },
  {
    id: "city",
    name: "City Bikes",
    description: "Style and comfort for urban journeys",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&q=80"
  },
  {
    id: "electric",
    name: "Electric Bikes",
    description: "Go further with pedal assist",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80"
  },
  {
    id: "kids",
    name: "Kids Bikes",
    description: "Start their cycling adventure",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80"
  }
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getBestSellers = () => products.filter(p => p.bestSeller);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);
