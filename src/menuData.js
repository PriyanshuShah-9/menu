const menuData = {
  "Ice Cream": [
    {
      name: "Lotus Biscoff",
      variants: [{ quantity: "120ml", price: 80 },{ quantity: "600ml", price: 400 },{ quantity: "1200ml", price: 800 }]
    },
    {
      name: "Belgian Chocolate",
      variants: [{ quantity: "120ml", price: 80 },{ quantity: "600ml", price: 400 },{ quantity: "1200ml", price: 800 }]
    },
    {
      name: "Mexican Khazana",
      variants: [{ quantity: "120ml", price: 70 },{ quantity: "600ml", price: 350 },{ quantity: "1200ml", price: 700 }]
    },
    {
      name: "Mava Malti",
      variants: [{ quantity: "120ml", price: 70 },{ quantity: "600ml", price: 350 },{ quantity: "1200ml", price: 700 }]
    },
    {
      name: "Roasted Dryfruit",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "Blue Diamond",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "Traffic Jam",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "Kesar Pista",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "Chocolate Chips",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "Coffee Bliss",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "Sp. Anmol Ratan",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "American Dryfruit",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "Anjeer",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "Mava Cadbury",
      variants: [{ quantity: "120ml", price: 60 },{ quantity: "600ml", price: 300 },{ quantity: "1200ml", price: 600 }]
    },
    {
      name: "Cookies Cream",
      variants: [{ quantity: "120ml", price: 50 },{ quantity: "600ml", price: 250 },{ quantity: "1200ml", price: 500 }]
    },
    {
      name: "Calcutti Pan",
      variants: [{ quantity: "120ml", price: 50 },{ quantity: "600ml", price: 250 },{ quantity: "1200ml", price: 500 }]
    },
    {
      name: "Kaju Kismis",
      variants: [{ quantity: "120ml", price: 50 },{ quantity: "600ml", price: 250 },{ quantity: "1200ml", price: 500 }]
    },
    {
      name: "Sweet Heart",
      variants: [{ quantity: "120ml", price: 50 },{ quantity: "600ml", price: 250 },{ quantity: "1200ml", price: 500 }]
    },
    {
      name: "Butter Scotch",
      variants: [{ quantity: "120ml", price: 50 },{ quantity: "600ml", price: 250 },{ quantity: "1200ml", price: 500 }]
    },
    {
      name: "Strawberry",
      variants: [{ quantity: "120ml", price: 50 },{ quantity: "600ml", price: 250 },{ quantity: "1200ml", price: 500 }]
    },
    {
      name: "Mango",
      variants: [{ quantity: "120ml", price: 50 },{ quantity: "600ml", price: 250 },{ quantity: "1200ml", price: 500 }],
    },
    {
      name: "Vanilla",
      variants: [{ quantity: "120ml", price: 30 },{ quantity: "600ml", price: 150 },{ quantity: "1200ml", price: 300 }]
    },
  ],

  Sundaes: [
    { name: "Triple Sundae (230ml)", price: 200 },
    { name: "Choco Madness (230ml)", price: 200 },
    { name: "Choco Coffee Fudge (230ml)", price: 200 },
    { name: "Oreo Mocha Tower (230ml)", price: 200 },

    { name: "Double Sundae (180ml)", price: 160 },
    { name: "Traffic Sundae (180ml)", price: 160 },

    { name: "Biscoff Brownie Overload (200ml)", price: 180 },
    { name: "Sizzling Brownie (200ml)", price: 180 },

    { name: "Hot Brownie with Chocolate (200ml)", price: 170 },
    { name: "Hot Brownie with Oreo (200ml)", price: 170 },
    { name: "Hot Brownie with Vanilla (200ml)", price: 150 },

    { name: "Chocolate Coffee Sundae (150ml)", price: 140 },
    { name: "Belgian Choco Sundae (150ml)", price: 140 },
    { name: "Biscoff Sundae (150ml)", price: 140 },

    { name: "Satyanarayan Special (150ml)", price: 120 },
    { name: "American Sundae (150ml)", price: 120 },
    { name: "Choco Sundae (150ml)", price: 120 },
    { name: "Oreo Sundae (150ml)", price: 120 },
    { name: "Dryfruit Sundae (150ml)", price: 120 },

    { name: "Choco Dip (150ml)", price: 100 },
    { name: "Strawberry Choco (150ml)", price: 100 },
    { name: "Mango Dip (150ml)", price: 100 },
    { name: "Chocolate Topping (130ml)", price: 80 },
    { name: "Strawberry Topping (130ml)", price: 60 },
    { name: "Vanilla Topping (130ml)", price: 50 },
    { name: "Vanilla with Jelly (130ml)", price: 50 },
  ],

  Shakes: [
    { name: "Ferrero Rocher Nutella (300ml)", price: 220 },
    { name: "Nutty Nutella (300ml)", price: 220 },
    { name: "Brownella (300ml)", price: 220 },
    { name: "Belgian Chocolate (300ml)", price: 220 },
    { name: "Dairy Milk Silk (300ml)", price: 220 },
    { name: "Roasted Dryfruit (300ml)", price: 220 },

    { name: "Kaju Special (300ml)", price: 190 },
    { name: "Kaju Anjeer (300ml)", price: 190 },
    { name: "Kaju Mawa (300ml)", price: 190 },
    { name: "Kaju Kesar (300ml)", price: 190 },
    { name: "Kaju Gulkand (300ml)", price: 190 },
    { name: "Lotus Biscoff (300ml)", price: 190 },
    { name: "Choco Brownie (300ml)", price: 190 },

    { name: "Anjeer Special (300ml)", price: 160 },
    { name: "Cadbury Gems (300ml)", price: 160 },
    { name: "KitKat (300ml)", price: 160 },
    { name: "Oreo Blast (300ml)", price: 160 },
    { name: "Butter Scotch Crunch (300ml)", price: 160 },
    { name: "Caramel Coffee (300ml)", price: 160 },
    { name: "Chocolate Coffee (300ml)", price: 160 },
    { name: "Dark Fantasy (300ml)", price: 160 },
    { name: "M&M (300ml)", price: 160 },

    { name: "Cold Coffee (300ml)", price: 150 },
    { name: "Fresh Chikoo (300ml)", price: 150 },
    { name: "Blueberry (300ml)", price: 150 },
    { name: "Mango (300ml)", price: 150 },
    { name: "Strawberry (300ml)", price: 150 },
    { name: "Pineapple (300ml)", price: 150 },
    { name: "Black Current (300ml)", price: 150 },
    { name: "Creamy Vanilla (300ml)", price: 150 },

    { name: "Cold Cocoa Special (300ml)", price: 150 },
    { name: "Cold Cocoa with Brownie (300ml)", price: 140 },
    { name: "Cold Cocoa with Ice Cream (300ml)", price: 120 },
    { name: "Cold Cocoa with Chips (300ml)", price: 100 },
    { name: "Cold Cocoa (300ml)", price: 80 },
    { name: "Badam Shake (300ml)", price: 80 },
  ],

  Lassi: [
    { name: "Rajwadi (300ml)", price: 120 },
    { name: "Dryfruit (300ml)", price: 120 },
    { name: "Kaju (300ml)", price: 90 },
    { name: "Chocolate (300ml)", price: 70 },
    { name: "Strawberry (300ml)", price: 70 },
    { name: "Pineapple (300ml)", price: 70 },
    { name: "Mango (300ml)", price: 70 },
    { name: "Sweet (300ml)", price: 50 },
  ],
   "Shrikhand": [
    {
      name: "American Dryfruit",
      variants: [{ quantity: "500gm", price: 190 },{ quantity: "1kg", price: 380 }]
    },
    {
      name: "Rajbhog",
      variants: [{ quantity: "500gm", price: 190 },{ quantity: "1kg", price: 380 }]
    },
    {
      name: "Kesar Elaichi",
      variants: [{ quantity: "500gm", price: 150 },{ quantity: "1kg", price: 300 }]
    },
    {
      name: "Mango",
      variants: [{ quantity: "500gm", price: 150 },{ quantity: "1kg", price: 300 }]
    },
  ],

  "Extra Toppings": [
  { name: "Brownie", price: 30 },
  { name: "Biscoff Crunch", price: 30 },
  { name: "Chips", price: 20 },
  { name: "Jelly", price: 20 },
  { name: "Whipped Cream", price: 20 },
  { name: "Oreo Crunch", price: 20 },
],
};

export default menuData;