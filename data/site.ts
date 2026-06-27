// Single source of truth for Tasty's Joint brand & content.
// Centralized so the homepage, /menu, /visit, and JSON-LD stay in sync.

export const site = {
  name: "Tasty's Joint",
  tagline: "A burger joint worth the bridge toll.",
  shortDescription:
    "Smash burgers, hand-cut fries, and a hand-shaken milkshake — built the slow way on a hot flattop in the heart of Sausalito.",
  description:
    "Tasty's Joint is a small, opinionated burger shop on Caledonia Street in Sausalito, California. We grind chuck brisket daily, slice everything to order, and refuse to put lettuce on a bun just for the optics.",
  address: "43 Caledonia St",
  city: "Sausalito",
  state: "CA",
  zip: "94965",
  phone: "(415) 729-9328",
  phoneRaw: "+14157299328",
  email: "hello@tastysjoint.com",
  url: "https://tastysjoint.com",
  instagram: "https://instagram.com/tastysjoint",
  yelp: "https://yelp.com/biz/tastys-joint-sausalito",
  mapsUrl:
    "https://maps.google.com/?q=43+Caledonia+St+Sausalito+CA+94965",
  mapsEmbed:
    "https://www.google.com/maps?q=43+Caledonia+St,+Sausalito,+CA+94965&hl=en&z=16&output=embed",
  hours: [
    { day: "Mon – Thu", time: "11:00 – 21:00" },
    { day: "Fri – Sat", time: "11:00 – 22:00" },
    { day: "Sunday", time: "11:00 – 20:00" },
  ],
  founded: 2024,
  reservationsUrl: "#reserve",
};

export const stats = [
  { value: "Daily", label: "Fresh chuck + brisket grind" },
  { value: "90 sec", label: "Average smash-to-bun time" },
  { value: "Brioche", label: "Baked in San Rafael at 4am" },
  { value: "Marin", label: "Locally owned since '24" },
];

export const featuredBurgers = [
  {
    id: "01",
    name: "The Caledonia",
    price: "$16",
    tagline: "The house signature.",
    description:
      "Double smash, raclette, caramelized onions, garlic aioli. The burger our regulars order when they don't want to think about it.",
    highlight: "house-charred onions",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=85&auto=format&fit=crop",
  },
  {
    id: "02",
    name: "Smokehouse",
    price: "$18",
    tagline: "Slow, messy, worth it.",
    description:
      "Single thick patty, smoked cheddar, applewood bacon, pickled jalapeños, smoked-salt fries on the side.",
    highlight: "smoked the night before",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?w=1200&q=85&auto=format&fit=crop",
  },
  {
    id: "03",
    name: "North Beach",
    price: "$15",
    tagline: "Italian job.",
    description:
      "Mozzarella di bufala, basil pistou, sun-dried tomato pesto on a toasted semolina bun. Bennio would approve.",
    highlight: "basil from our back plot",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&q=85&auto=format&fit=crop",
  },
  {
    id: "04",
    name: "The Fog",
    price: "$17",
    tagline: "Quietly spicy.",
    description:
      "Pepper jack, chipotle crema, charred serrano, lime. A late-night, post-drinks kind of burger.",
    highlight: "charred serranos",
    image:
      "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=1200&q=85&auto=format&fit=crop",
  },
  {
    id: "05",
    name: "Black & Blue",
    price: "$19",
    tagline: "For the committed.",
    description:
      "Blackened patty, gorgonzola dolce, watercress, port-wine glaze. Heavy. Unapologetic. Pairs with a dry cabernet.",
    highlight: "blue from Point Reyes",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=85&auto=format&fit=crop",
  },
  {
    id: "06",
    name: "Garden State",
    price: "$15",
    tagline: "Yes, we have a veggie burger.",
    description:
      "Smashed black bean + brown rice patty, aged cheddar, smoked tomato, allesandro. We didn't make it because we had to.",
    highlight: "smoked tomatoes",
    image:
      "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=1200&q=85&auto=format&fit=crop",
  },
];

export const fullMenu = {
  Burgers: [
    { name: "The Caledonia", price: "$16", desc: "Double smash, raclette, caramelized onions, garlic aioli." },
    { name: "Smokehouse", price: "$18", desc: "Smoked cheddar, applewood bacon, pickled jalapeños." },
    { name: "North Beach", price: "$15", desc: "Mozzarella di bufala, basil pistou, sun-dried tomato pesto." },
    { name: "The Fog", price: "$17", desc: "Pepper jack, chipotle crema, charred serrano, lime." },
    { name: "Black & Blue", price: "$19", desc: "Blackened patty, gorgonzola, watercress, port-wine glaze." },
    { name: "Garden State", price: "$15", desc: "Black bean + brown rice patty, aged cheddar, smoked tomato." },
    { name: "Build Your Own", price: "$12+", desc: "Single smash, brioche. Add cheese $2, add bacon $3, add avocado $3." },
  ],
  "Sides + Shares": [
    { name: "Hand-Cut Fries", price: "$6", desc: "Twice-cooked, smoked-salt, malt aioli." },
    { name: "Crispy Tots", price: "$7", desc: "Served with smoked ketchup." },
    { name: "Onion Rings", price: "$8", desc: "Beer-battered, buttermilk-ranch dip." },
    { name: "Crispy Brussels", price: "$9", desc: "Fish-sauce caramel, lime, peanuts." },
    { name: "House Pickles", price: "$4", desc: "Bread & butter, dilly cukes, pickled chili." },
  ],
  "Shakes + Floats": [
    { name: "Hand-Shaken Chocolate", price: "$7", desc: "Stra's dark, soft serve, sea salt." },
    { name: "Vanilla Bean", price: "$7", desc: "Tahitian vanilla, soft serve, malt." },
    { name: "Salted Caramel", price: "$7", desc: "Browned butter caramel, toasted pecans." },
    { name: "The Sausalito Float", price: "$9", desc: "Cold brew, vanilla ice cream, amarena cherry." },
  ],
  "Drinks (Beer/Wine)": [
    { name: "Local IPA", price: "$7", desc: "Marin Brewing Buried Acorn — 12oz can." },
    { name: "Pilsner", price: "$7", desc: "Fort Point Park — crisp, clean." },
    { name: "House Red", price: "$9", desc: "Glass of Ridge Lytton Springs, Cab Franc blend." },
    { name: "House White", price: "$9", desc: "Gloria Ferrer chardonnay, Sonoma." },
    { name: "Mondo Cold Brew", price: "$4", desc: "Local Marin roast, sweet cream optional." },
  ],
};

export const craftPillars = [
  {
    n: "01",
    title: "Grind daily. Smash hard.",
    body:
      "We grind chuck + brisket every morning at 9, portion it at 10, and start smashing it at 11. Nothing in our walk-in is older than 36 hours.",
  },
  {
    n: "02",
    title: "Buns baked at 4 a.m.",
    body:
      "A baker in San Rafael pulls our brioche out of the oven before we're awake. They get to the shop at 9:30. We never see flour.",
  },
  {
    n: "03",
    title: "Sourced where we grew up.",
    body:
      "Cheese from Cowgirl Creamery in Petaluma. Greens from outside Petaluma. Tomatoes when they're ripe. Marin on the menu, always.",
  },
  {
    n: "04",
    title: "No shortcuts. No lettuce tricks.",
    body:
      "We don't do lettuce wraps. We don't do impossible patties. We don't do deconstructed burgers. We do the burger, honestly.",
  },
];

export const reviews = [
  {
    name: "Mia K.",
    handle: "@miaeats",
    quote:
      "Took the Larkspur ferry across just for this. Worth the tide. The Caledonia is the burger Marin has been waiting for.",
    source: "Instagram",
  },
  {
    name: "Devon R.",
    handle: "Local, Sausalito",
    quote:
      "I've lived here 14 years. This is the first place I send family to. The fries have actual soul.",
    source: "Verified",
  },
  {
    name: "Yelp — 5★",
    handle: "Jess P.",
    quote:
      "I do not understand how the bun is this good. I do not understand how the patty is this good. I do, however, understand why there's a line.",
    source: "Yelp",
  },
];

export const faqs = [
  {
    q: "Do you take reservations?",
    a: "We're a walk-in joint — first come, first served. The line usually moves in under 15 minutes. For parties of 6+, call us the day before and we'll see what we can do.",
  },
  {
    q: "Is there a kids' menu?",
    a: "Smash burger (no onions) on a bun + fries. That's the entire kids' menu, and it's $9. We do this on purpose.",
  },
  {
    q: "Do you have a vegan or gluten-free option?",
    a: "Garden State is our veggie burger (smashed black bean + brown rice). We don't have a gluten-free bun yet, but almost everything else can be ordered bun-less on a bed of greens.",
  },
  {
    q: "Can I order takeout?",
    a: "Yes — call ahead (415) 729-9328 or order at the counter. We don't do delivery apps. We tried, the burgers always showed up ruined.",
  },
  {
    q: "Is there parking?",
    a: "A few spots on Caledonia and Bridgeway, plus the Ferry Building lot two blocks up. The ferry is the move — walk off, eat well, ferry home.",
  },
];

export const galleryCaptions = [
  "Calle at the smasher, 7pm Friday",
  "Double dare. / Smokehouse, 4pm",
  "Buns from La Boulangerie, 9am",
  "The griddle at service — still hot",
  "Bridgeway sunset, kitchen view",
];
