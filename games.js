// ============================================================
// EDIT THIS FILE to change the site name or add games.
// To add a game, copy one block in GAMES and change the details.
//   category: maths | spelling | computational | stem | finance | art
//   url:      the game's own web address (leave "" for "Coming soon")
//   icon:     which built-in icon to draw on the card (see ICONS in app.js).
//             Leave it out to use the subject icon.
//   image:    optional screenshot, e.g. "shots/make-ten.png"
//             (if set, it replaces the icon)
// ============================================================

window.SITE = {
  name: "AC Edu Engagement",
  tagline: "Learning games, designed by a teacher."
};

// icon = which built-in icon to draw (see ICONS in app.js)
window.CATEGORIES = [
  { id: "maths",         name: "Maths",                  icon: "maths",         colour: "#2f8be6", blurb: "Number games and puzzles" },
  { id: "spelling",      name: "Spelling",               icon: "spelling",      colour: "#7c4fd1", blurb: "Spell words and have fun" },
  { id: "computational", name: "Computational Thinking", icon: "computational", colour: "#12a36b", blurb: "Solve problems like a computer scientist" },
  { id: "stem",          name: "STEM",                   icon: "stem",          colour: "#ee7d1f", blurb: "Science, technology, engineering and maths" },
  { id: "finance",       name: "Financial Literacy",     icon: "finance",       colour: "#d9a006", blurb: "Learn about money" },
  { id: "art",           name: "Art",                    icon: "art",           colour: "#e5527a", blurb: "Create digital art" }
];

window.GAMES = [
  {
    category: "maths",
    title: "Crazy Calas Frisbee Golf",
    icon: "frisbee",
    summary: "Throw discs round nine holes, then win the maths challenge to unlock the next course.",
    url: "https://calasfrisbeegolf-math.vercel.app/",
    image: ""
  },
  {
    category: "spelling",
    title: "Spelling Sports",
    icon: "skateboard",
    summary: "Spell words in 30 seconds to earn time on the skate park, BMX trail, surf and more.",
    url: "https://sportspelling-mrandy.vercel.app/",
    image: ""
  },
  {
    category: "computational",
    title: "Brain Engine",
    icon: "chip",
    summary: "Four brain games: copy light sequences, spot what went missing, remember patterns and program a turtle through a maze.",
    url: "https://memorygame-seven-puce.vercel.app/",
    image: ""
  },
  {
    category: "stem",
    title: "Wind Tunnel Garage",
    icon: "car",
    summary: "Design and paint a car, test it in a wind tunnel, then race it.",
    url: "https://ac-windtunnel.vercel.app/",
    image: ""
  },
  {
    category: "stem",
    title: "Brickyard",
    icon: "brick",
    summary: "Build anything you like, brick by brick.",
    url: "https://brickyard-ivory.vercel.app/",
    image: ""
  },
  {
    category: "stem",
    title: "Mountain Makers",
    icon: "mountain",
    summary: "Build a mountain landscape from blocks, then see it as a map.",
    url: "https://terrablocks.vercel.app/",
    image: ""
  },
  {
    category: "finance",
    title: "Lemonade Stand",
    icon: "lemonade",
    summary: "Run a lemonade stand and a sport shop to learn about money.",
    url: "https://mrandy-lemonadestand.vercel.app/",
    image: ""
  },
  {
    category: "art",
    title: "Digital Art Tools",
    icon: "pixels",
    summary: "Colour in pictures by giving the computer step-by-step instructions.",
    url: "https://digialart-mrandy.vercel.app/",
    image: ""
  }
];
