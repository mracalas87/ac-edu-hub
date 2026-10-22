// ============================================================
// EDIT THIS FILE to change the site name or add games.
// To add a game, copy one block in GAMES and change the details.
//   category: maths | spelling | computational | stem | engineering | finance | art
//   url:      the game's own web address (leave "" for "Coming soon")
//   image:    optional screenshot, e.g. "images/make-ten.png"
//   icon:     an emoji shown when there is no screenshot
// ============================================================

window.SITE = {
  name: "AC Edu Engagement",
  tagline: "Pick a subject and start playing!"
};

window.CATEGORIES = [
  { id: "maths",         name: "Maths",                  icon: "➗", colour: "#60a5fa", blurb: "Number games and puzzles" },
  { id: "spelling",      name: "Spelling",               icon: "🔤", colour: "#c084fc", blurb: "Spell words and have fun" },
  { id: "computational", name: "Computational Thinking", icon: "🧩", colour: "#34d399", blurb: "Solve problems like a computer scientist" },
  { id: "stem",          name: "STEM",                   icon: "🔬", colour: "#fb923c", blurb: "Science, technology, engineering and maths" },
  { id: "engineering",   name: "Engineering",            icon: "🏗️", colour: "#22d3ee", blurb: "Design it, build it, test it" },
  { id: "finance",       name: "Financial Literacy",     icon: "💰", colour: "#fbbf24", blurb: "Learn about money" },
  { id: "art",           name: "Art",                    icon: "🎨", colour: "#f472b6", blurb: "Create digital art" }
];

window.GAMES = [
  {
    category: "maths",
    title: "Crazy Calas Frisbee Golf",
    summary: "Throw discs round nine holes, then win the maths challenge to unlock the next course.",
    url: "https://calasfrisbeegolf-math.vercel.app/",
    image: "",
    icon: "🥏"
  },
  {
    category: "spelling",
    title: "Spelling Sports",
    summary: "Spell words in 30 seconds to earn time on the skate park, BMX trail, surf and more.",
    url: "https://sportspelling-mrandy.vercel.app/",
    image: "",
    icon: "🛹"
  },
  {
    category: "computational",
    title: "Brain Engine",
    summary: "Four brain games: copy light sequences, spot what went missing, remember patterns and program a turtle through a maze.",
    url: "https://memorygame-seven-puce.vercel.app/",
    image: "",
    icon: "🧠"
  },
  {
    category: "stem",
    title: "Wind Tunnel Garage",
    summary: "Design and paint a car, test it in a wind tunnel, then race it.",
    url: "https://ac-windtunnel.vercel.app/",
    image: "",
    icon: "🏎️"
  },
  {
    category: "engineering",
    title: "Brickyard",
    summary: "Build anything you like, brick by brick.",
    url: "https://brickyard-ivory.vercel.app/",
    image: "",
    icon: "🧱"
  },
  {
    category: "engineering",
    title: "Mountain Makers",
    summary: "Build a mountain landscape from blocks, then see it as a map.",
    url: "https://terrablocks.vercel.app/",
    image: "",
    icon: "⛰️"
  },
  {
    category: "finance",
    title: "Lemonade Stand",
    summary: "Run a lemonade stand and a sport shop to learn about money.",
    url: "https://mrandy-lemonadestand.vercel.app/",
    image: "",
    icon: "🍋"
  },
  {
    category: "art",
    title: "Digital Art Tools",
    summary: "Colour in pictures by giving the computer step-by-step instructions.",
    url: "https://digialart-mrandy.vercel.app/",
    image: "",
    icon: "🎨"
  }
];
