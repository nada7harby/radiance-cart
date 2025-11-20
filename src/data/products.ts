export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  ingredients: string;
  image: string;
  rating: number;
  reviews: number;
  featured: boolean;
  new: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Gentle Foaming Cleanser",
    category: "Cleansers",
    price: 24.99,
    description: "A gentle, pH-balanced cleanser that removes impurities without stripping natural oils. Perfect for daily use on all skin types.",
    ingredients: "Water, Glycerin, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Niacinamide",
    image: "/src/assets/product-cleanser.jpg",
    rating: 4.8,
    reviews: 328,
    featured: true,
    new: false,
  },
  {
    id: "2",
    name: "Hyaluronic Acid Serum",
    category: "Serums",
    price: 32.99,
    description: "Multi-weight hyaluronic acid complex that hydrates multiple layers of skin for plump, dewy complexion.",
    ingredients: "Aqua, Sodium Hyaluronate, Hyaluronic Acid, Pentylene Glycol, Panthenol",
    image: "/src/assets/product-serum.jpg",
    rating: 4.9,
    reviews: 512,
    featured: true,
    new: false,
  },
  {
    id: "3",
    name: "Nourishing Night Moisturizer",
    category: "Moisturizers",
    price: 38.99,
    description: "Rich, overnight treatment that repairs and rejuvenates skin while you sleep with ceramides and peptides.",
    ingredients: "Water, Ceramide NP, Ceramide AP, Peptide Complex, Squalane, Shea Butter",
    image: "/src/assets/product-moisturizer.jpg",
    rating: 4.7,
    reviews: 245,
    featured: true,
    new: false,
  },
  {
    id: "4",
    name: "Vitamin C Brightening Serum",
    category: "Serums",
    price: 36.99,
    description: "Potent antioxidant serum that brightens, evens skin tone, and protects against environmental damage.",
    ingredients: "Ascorbic Acid, Ferulic Acid, Vitamin E, Propanediol, Glycerin",
    image: "/src/assets/product-serum.jpg",
    rating: 4.6,
    reviews: 189,
    featured: false,
    new: true,
  },
  {
    id: "5",
    name: "Hydrating Clay Mask",
    category: "Masks",
    price: 28.99,
    description: "Detoxifying clay mask that purifies pores while maintaining skin's moisture balance with hyaluronic acid.",
    ingredients: "Kaolin Clay, Bentonite, Hyaluronic Acid, Aloe Vera, Green Tea Extract",
    image: "/src/assets/product-mask.jpg",
    rating: 4.5,
    reviews: 156,
    featured: false,
    new: true,
  },
  {
    id: "6",
    name: "Retinol Night Treatment",
    category: "Serums",
    price: 42.99,
    description: "Time-released retinol formula that minimizes fine lines and improves skin texture with minimal irritation.",
    ingredients: "Retinol, Squalane, Niacinamide, Ceramides, Bisabolol",
    image: "/src/assets/product-serum.jpg",
    rating: 4.8,
    reviews: 423,
    featured: true,
    new: false,
  },
  {
    id: "7",
    name: "Soothing Gel Cleanser",
    category: "Cleansers",
    price: 22.99,
    description: "Ultra-gentle gel cleanser with calming botanical extracts, ideal for sensitive and reactive skin.",
    ingredients: "Aloe Barbadensis Leaf Juice, Chamomile Extract, Cucumber Extract, Glycerin",
    image: "/src/assets/product-cleanser.jpg",
    rating: 4.7,
    reviews: 287,
    featured: false,
    new: false,
  },
  {
    id: "8",
    name: "Daily Defense Moisturizer SPF 30",
    category: "Moisturizers",
    price: 34.99,
    description: "Lightweight daily moisturizer with broad-spectrum SPF protection and antioxidants.",
    ingredients: "Zinc Oxide, Titanium Dioxide, Niacinamide, Vitamin E, Green Tea Extract",
    image: "/src/assets/product-moisturizer.jpg",
    rating: 4.6,
    reviews: 198,
    featured: false,
    new: true,
  },
];

export const categories = [
  { name: "All Products", slug: "all" },
  { name: "Cleansers", slug: "cleansers" },
  { name: "Serums", slug: "serums" },
  { name: "Moisturizers", slug: "moisturizers" },
  { name: "Masks", slug: "masks" },
];
