import { IMG } from "../assets/refimg";

export const CONTACT = {
  phone: "+91 7995150298",
  phoneDisplay: "+91 79951 50298",
  phoneHref: "tel:+917995150298",
  whatsapp:
    "https://wa.me/917995150298?text=Hi%20Aravindh%2C%20I%27d%20like%20a%20free%20doorstep%20measurement%20for%20invisible%20grills%20or%20safety%20nets.",
  email: "aravindhinvisiblegrills@gmail.com",
  emailHref: "mailto:aravindhinvisiblegrills@gmail.com",
  coverage: "Serving all of Hyderabad & Telangana",
  hours: "Monday – Sunday: 8:00 AM – 9:00 PM",
  address: "Hyderabad, Telangana",
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const TOP_STATS = [
  { value: "5,000+", label: "Happy Families Secured" },
  { value: "8+", label: "Years of Experience" },
  { value: "4.9/5", label: "Google Rating" },
  { value: "10,000+", label: "Installations Completed" },
];

export const HERO_SLIDES = [
  {
    image: IMG.s26,
    title: "Balcony Invisible Grills",
    meta: "15 Yrs Warranty",
    alt: "Balcony invisible grill installation in Hyderabad",
  },
  {
    image: IMG.s27,
    title: "Window Invisible Grills",
    meta: "15 Yrs Warranty",
    alt: "Window invisible grill installation in Hyderabad",
  },
  {
    image: IMG.s1,
    title: "Balcony Safety Nets",
    meta: "HDPE",
    alt: "Balcony safety net installation in Hyderabad",
  },
  {
    image: IMG.s28,
    title: "Pets & Monkey Safety Nets",
    meta: "Heavy Duty",
    alt: "Pets and monkey safety net installation",
  },
  {
    image: IMG.s5,
    title: "Children Safety Nets",
    meta: "Child Safe",
    alt: "Children safety net on a high-rise balcony",
  },
  {
    image: IMG.s16,
    title: "Bird Control Spikes",
    meta: "SS 304",
    alt: "Stainless steel bird control spikes installation",
  },
];

export type Service = {
  title: string;
  short: string;
  desc: string;
  image: string;
  badge?: string;
  category: string;
};

const svc = (
  title: string,
  short: string,
  desc: string,
  imageKey: keyof typeof IMG,
  badge: string | undefined,
  category: string
): Service => ({
  title,
  short,
  desc,
  image: IMG[imageKey],
  badge,
  category,
});

export const SERVICES: Service[] = [
  svc(
    "Balcony Invisible Grills",
    "Balcony protection",
    "Add reliable balcony protection without blocking your view. Our high-tensile SS 316 invisible grills provide a clean, modern and elegant safety solution for homes and apartments.",
    "s26",
    "15 Years Warranty",
    "Invisible Grills"
  ),
  svc(
    "Window Invisible Grills",
    "Window protection",
    "Protect your windows with sleek and discreet invisible grills that offer added safety while maintaining natural light and outside visibility.",
    "s27",
    "15 Years Warranty",
    "Invisible Grills"
  ),
  svc(
    "Invisible Grills for Pets",
    "Pet safety",
    "Create a safer environment for your pets with professionally installed invisible grills for balconies and open areas.",
    "s28",
    "15 Years Warranty",
    "Invisible Grills"
  ),
  svc(
    "Invisible Grills for Kids",
    "Child safety",
    "Improve child safety around balconies and windows with discreet invisible grills designed to provide protection without compromising the view.",
    "s29",
    "15 Years Warranty",
    "Invisible Grills"
  ),
  svc(
    "Invisible Grills for Birds",
    "Bird control",
    "Help protect balconies and open spaces from unwanted bird entry with discreet and neatly installed invisible grill solutions.",
    "s30",
    "15 Years Warranty",
    "Invisible Grills"
  ),
  svc(
    "Balcony Safety Nets",
    "Balcony netting",
    "Strong and neatly installed balcony safety nets for children, pets and high-rise homes.",
    "s1",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Building Safety Nets",
    "Building protection",
    "Reliable safety net solutions for residential and commercial buildings across Hyderabad.",
    "s3",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Car Parking Safety Nets",
    "Parking protection",
    "Practical safety netting for open and covered parking areas in apartments and buildings.",
    "s4",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Children Safety Nets",
    "Child-safe netting",
    "Added protection for children around balconies, windows, staircases and open spaces.",
    "s5",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Coconut Tree Safety Nets",
    "Tree protection",
    "Safety net solutions designed for areas around coconut trees and nearby properties.",
    "s6",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Construction Safety Nets",
    "Site protection",
    "Professional safety nets for construction sites and elevated working areas across Hyderabad.",
    "s7",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Duct Area Safety Nets",
    "Duct covering",
    "Customized nets for covering and securing open duct areas in buildings and apartments.",
    "s8",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Industrial Safety Nets",
    "Industrial safety",
    "Heavy-duty safety net solutions for factories, warehouses and industrial spaces.",
    "s9",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Open Area Safety Nets",
    "Open area safety",
    "Customized safety nets for terraces, open areas and exposed spaces across Hyderabad.",
    "s10",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Pets & Monkey Safety Nets",
    "Pet & monkey safety",
    "Protective netting for balconies and open areas to help keep pets safe and prevent monkey entry.",
    "s28",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Staircase Safety Nets",
    "Staircase safety",
    "Professional staircase netting for homes, apartments, schools and commercial buildings.",
    "s12",
    undefined,
    "Safety Nets"
  ),
  svc(
    "Swimming Pool Nets",
    "Pool safety",
    "Additional protection around swimming pools for residential and commercial properties.",
    "s13",
    undefined,
    "Safety Nets"
  ),
  svc(
    "All Sports Practice Nets",
    "Sports netting",
    "Customized practice nets for cricket, football and other sports training areas across Hyderabad.",
    "s14",
    undefined,
    "Sports & Utility"
  ),
  svc(
    "Anti Bird Nets",
    "Bird netting",
    "Keep balconies cleaner and protected with professionally installed anti-bird nets.",
    "s15",
    undefined,
    "Bird Control"
  ),
  svc(
    "Bird Control Spikes",
    "Bird spikes",
    "Help prevent pigeons from settling on ledges, windows, AC units and other areas.",
    "s16",
    undefined,
    "Bird Control"
  ),
  svc(
    "Bird Protection Nets",
    "Bird protection",
    "Protect balconies, terraces and open areas from unwanted bird entry with quality netting.",
    "s19",
    undefined,
    "Bird Control"
  ),
  svc(
    "Cricket Practice Nets",
    "Cricket netting",
    "Professional cricket nets for academies, schools, clubs and private practice areas across Hyderabad.",
    "s20",
    undefined,
    "Sports & Utility"
  ),
  svc(
    "Pigeon Safety Nets",
    "Pigeon control",
    "Keep balcony spaces cleaner and more comfortable with professionally fitted pigeon safety nets.",
    "s15",
    undefined,
    "Bird Control"
  ),
  svc(
    "Terrace Cricket Nets",
    "Terrace netting",
    "Transform your terrace into a practical cricket practice area with customized net installation.",
    "s24",
    undefined,
    "Sports & Utility"
  ),
  svc(
    "Football Stop Nets",
    "Football netting",
    "Durable football stop nets for practice grounds, training areas and sports facilities across Hyderabad.",
    "s25",
    undefined,
    "Sports & Utility"
  ),
  svc(
    "Ceiling Cloth Hangers",
    "Cloth drying",
    "Make better use of your balcony or utility space with a convenient ceiling-mounted cloth hanger. Ideal for modern homes and apartments.",
    "s31",
    undefined,
    "Ceiling Cloth Hangers"
  ),
  svc(
    "Manual Ceiling Cloth Hangers",
    "Manual hangers",
    "Easy-to-use manual ceiling cloth hangers designed to provide convenient clothes drying while saving valuable floor and balcony space.",
    "s32",
    undefined,
    "Ceiling Cloth Hangers"
  ),
  svc(
    "SS Ceiling Cloth Hangers",
    "SS hangers",
    "Durable stainless steel ceiling cloth hangers offering a neat, strong and long-lasting solution for everyday clothes drying.",
    "s33",
    undefined,
    "Ceiling Cloth Hangers"
  ),
];

export const WHY_US = [
  {
    title: "100% High Tensile Strength",
    icon: "shield",
    copy: "Marine-grade SS 316 wire tensioned on aluminium tracks, engineered to absorb heavy impact loads safely.",
  },
  {
    title: "Anti-Rust & Weatherproof",
    icon: "sun",
    copy: "A transparent nylon sheath over every cable blocks rust, rain damage and sun discolouration for years.",
  },
  {
    title: "Unobstructed Panoramic Views",
    icon: "eye",
    copy: "Cables virtually disappear from a distance, preserving daylight, airflow and your open-sky view.",
  },
  {
    title: "Quick Professional Fitting",
    icon: "bolt",
    copy: "Neat, dust-controlled installation finished within hours by our own trained technicians — zero mess left behind.",
  },
  {
    title: "5 Years Comprehensive Warranty",
    icon: "award",
    copy: "Long-term peace of mind with full warranty cover on cables, tracks and workmanship across Hyderabad.",
  },
  {
    title: "Best Factory-Direct Price",
    icon: "tag",
    copy: "Honest, transparent billing with free measurement and a written quote before work begins. No surprises.",
  },
];

export type GalleryItem = {
  src: string;
  title: string;
  category: "Invisible Grills" | "Safety Nets" | "Bird Control" | "Sports & Utility" | "Ceiling Cloth Hangers";
  location?: string;
};

export const GALLERY: GalleryItem[] = [
  { src: IMG.g1, title: "Balcony Invisible Grill Installation, Gachibowli", category: "Invisible Grills" },
  { src: IMG.g2, title: "Window Invisible Grill Installation, Kondapur", category: "Invisible Grills" },
  { src: IMG.g3, title: "High-Rise Balcony Invisible Grills, Kokapet", category: "Invisible Grills" },
  { src: IMG.g4, title: "Modern Balcony Invisible Grills, Financial District", category: "Invisible Grills" },
  { src: IMG.s15, title: "Balcony Safety Net Installation, Miyapur", category: "Safety Nets" },
  { src: IMG.g13, title: "Children Safety Net on High-Rise Balcony", category: "Safety Nets" },
  { src: IMG.s15, title: "Anti Bird Net Installation, Madhapur", category: "Bird Control" },
  { src: IMG.s16, title: "Bird Control Spikes on AC Ledge", category: "Bird Control" },
  { src: IMG.s30, title: "Pigeon Safety Net, Secunderabad", category: "Bird Control" },
  { src: IMG.s20, title: "Cricket Practice Net, Gachibowli", category: "Sports & Utility" },
  { src: IMG.s24, title: "Terrace Cricket Net Setup", category: "Sports & Utility" },
  { src: IMG.s25, title: "Football Stop Net, Kompally", category: "Sports & Utility" },
  { src: IMG.s33, title: "SS Ceiling Cloth Hanger, Kokapet", category: "Ceiling Cloth Hangers" },
  { src: IMG.s31, title: "Ceiling Cloth Hanger, Miyapur", category: "Ceiling Cloth Hangers" },
  { src: IMG.s8, title: "Duct Area Safety Net, Uppal", category: "Safety Nets" },
];

export const GALLERY_FILTERS = [
  "All",
  "Invisible Grills",
  "Safety Nets",
  "Bird Control",
  "Sports & Utility",
  "Ceiling Cloth Hangers",
] as const;

export const LOCALITY_GROUPS = [
  {
    title: "West Hyderabad",
    areas: ["Gachibowli", "HITEC City", "Madhapur", "Kondapur", "Kukatpally", "Miyapur", "Financial District", "Kokapet", "Narsingi", "Tellapur"],
  },
  {
    title: "North & Central Hyderabad",
    areas: ["Secunderabad", "Begumpet", "Banjara Hills", "Jubilee Hills", "Somajiguda", "Ameerpet", "Kompally", "Alwal", "Malkajgiri", "Bowenpally"],
  },
  {
    title: "East & South Hyderabad",
    areas: ["Uppal", "LB Nagar", "Nagole", "Dilsukhnagar", "Habsiguda", "Tarnaka", "Attapur", "Mehdipatnam", "Rajendranagar", "Shamshabad"],
  },
];

export const FAQS = [
  {
    q: "What are invisible grills and how do they work?",
    a: "Invisible grills are high-tensile SS 316 marine-grade stainless steel cables tensioned on heavy aluminium tracks across balconies, windows and open spaces. From a few metres away they are virtually invisible, preserving your outside view and ventilation while providing up to 400 kg load-bearing protection.",
  },
  {
    q: "Do invisible grills come with a warranty?",
    a: "Yes! Our SS 316 invisible grills come with a 15-year product warranty on the stainless steel cables, ensuring complete peace of mind and lifelong safety.",
  },
  {
    q: "How can I get a quotation for invisible grills or safety nets?",
    a: "We offer completely free doorstep measurements anywhere in Hyderabad and Telangana. Our technician will visit your site, measure your space, and provide an exact written quote with zero hidden charges.",
  },
  {
    q: "Are invisible grills safe for children and pets?",
    a: "Absolutely. We provide customized cable spacing (2-inch, 3-inch, or 4-inch) so children cannot climb or slip through, and pets cannot squeeze through. The cables have high tensile strength and smooth nylon coatings.",
  },
  {
    q: "Will invisible grills rust over time in Hyderabad's weather?",
    a: "No. We use genuine marine-grade SS 316 stainless steel with a protective transparent nylon sheath that prevents rust, sun discoloration, and weathering for decades.",
  },
  {
    q: "How long does installation take?",
    a: "Most residential balcony and window installations are completed within 2 to 4 hours on the same day as measurement. Our technicians work neatly and leave zero mess.",
  },
  {
    q: "Do you install safety nets and bird spikes across all of Hyderabad?",
    a: "Yes, we provide doorstep measurement and same-day installation across all areas of Greater Hyderabad and Secunderabad, including Gachibowli, Kondapur, Kukatpally, Miyapur, Hitec City, Uppal, and all surrounding localities.",
  },
];

export type Review = {
  quote: string;
  name: string;
  initials: string;
  location: string;
  service: string;
};

export const REVIEWS: Review[] = [
  {
    quote:
      "Aravind Invisible Grills transformed our balcony beautifully. Premium quality SS 316 cables, neat installation, and the work was completed exactly on schedule.",
    name: "Rahul Sharma",
    initials: "RS",
    location: "Gachibowli, Hyderabad",
    service: "Balcony Invisible Grills",
  },
  {
    quote:
      "We installed child safety invisible grills and couldn't be happier. Strong materials, elegant design, and complete peace of mind for our family.",
    name: "Priya Reddy",
    initials: "PR",
    location: "Kondapur, Hyderabad",
    service: "Child Safety Invisible Grills",
  },
  {
    quote:
      "Outstanding workmanship with high-quality stainless steel cables. The team was professional, punctual, and delivered exactly as promised.",
    name: "Sandeep Kumar",
    initials: "SK",
    location: "Madhapur, Hyderabad",
    service: "Window Invisible Grills",
  },
  {
    quote:
      "The safety net was fitted neatly around our duct area within a couple of hours. Price was exactly as quoted and the team cleaned up after themselves.",
    name: "Anitha Rao",
    initials: "AR",
    location: "Kokapet, Hyderabad",
    service: "Duct Area Safety Nets",
  },
  {
    quote:
      "We have two cats and were worried about the balcony. The team suggested the right spacing and the cats are safe — the view is completely unaffected.",
    name: "Vikram Deshmukh",
    initials: "VD",
    location: "Financial District, Hyderabad",
    service: "Invisible Grills for Pets",
  },
  {
    quote:
      "They installed anti-bird nets and spikes across our apartment block. Clean work, fair pricing and a very responsive team throughout.",
    name: "Imran Ali",
    initials: "IA",
    location: "Mehdipatnam, Hyderabad",
    service: "Anti Bird Nets",
  },
];

export const FIELD_OPTIONS = SERVICES.map((s) => s.title).concat("Other Safety Solutions");

export const STATS_ABOUT = [
  { value: "5,000+", label: "Happy Families Secured" },
  { value: "5-Year", label: "Warranty" },
];
