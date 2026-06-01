const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 5999,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    name: "Apple Watch",
    price: 14999,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 4,
    name: "Laptop",
    price: 55999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 5,
    name: "Royal Crimson Banarasi Saree",
    price: 18999,
    category: "Saree Boutique",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bangladeshi_bride_in_Jamdani_sari.jpg/500px-Bangladeshi_bride_in_Jamdani_sari.jpg",
    details: {
      fabric: "Pure Banarasi Katan Silk",
      craft: "Handwoven Kadhwa Gold Zari",
      length: "5.5 Meters + 0.8 Meter Blouse Piece",
      blouse: "Crimson Silk with Zari Border",
      care: "Dry Clean Only",
      styleNote: "Style this heritage piece with traditional gold jewelry and a neat gajra bun for a timeless festive look."
    },
    description: "An exquisite crimson red silk saree featuring traditional handwoven floral vines (Jaal) and ornamental borders in pure gold and silver zari. Meticulously crafted by master weavers in Varanasi."
  },
  {
    id: 6,
    name: "Midnight Blue Kanjeevaram Saree",
    price: 24500,
    category: "Saree Boutique",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Russia-Bangladeshi_talks_Moscow_2013-01-15_05.jpeg/500px-Russia-Bangladeshi_talks_Moscow_2013-01-15_05.jpeg",
    details: {
      fabric: "Pure Mulberry Silk (Kanchipuram)",
      craft: "Korvai Weaving Technique",
      length: "5.5 Meters + 0.8 Meter Blouse Piece",
      blouse: "Contrast Brocade Silk",
      care: "Dry Clean Only",
      styleNote: "Pair with temple jewelry and contrast colored bangles to highlight the intricate Korvai borders."
    },
    description: "A magnificent royal blue saree with a contrasting rich gold brocade border and pallu. Handloomed with heavy 3-ply silk threads for a luxurious drape and unmatched shine."
  },
  {
    id: 7,
    name: "Peach & Gold Organza Saree",
    price: 12499,
    category: "Saree Boutique",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Monica_Bedi_at_the_8th_Aap_Ki_Awaz_Media_Excellence_Awards.jpg/500px-Monica_Bedi_at_the_8th_Aap_Ki_Awaz_Media_Excellence_Awards.jpg",
    details: {
      fabric: "Premium Tissue Organza",
      craft: "Hand-embroidered Gotapatti & Zardosi",
      length: "5.5 Meters + 0.8 Meter Blouse Piece",
      blouse: "Heavy Hand-embroidered Velvet/Silk",
      care: "Dry Clean Only",
      styleNote: "Keep it modern with a sleek watch, pastel drop earrings, and soft dewy makeup."
    },
    description: "Ethereal and weightless tissue organza saree in a delicate peach shade, featuring fine scalloped borders and hand-stitched Gotapatti floral motifs."
  },
  {
    id: 8,
    name: "Fuchsia Pink Sambalpuri Saree",
    price: 9899,
    category: "Saree Boutique",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nandita_Swetha.jpg/500px-Nandita_Swetha.jpg",
    details: {
      fabric: "Pure Sambalpuri Silk Weave",
      craft: "Sambalpuri Handloom Weave",
      length: "5.5 Meters + 0.8 Meter Blouse Piece",
      blouse: "Matching Crimson Silk Blouse",
      care: "Dry Clean Only",
      styleNote: "Perfect for evening events. Complement with silver chandbalis and a metallic clutch."
    },
    description: "Stunning fuchsia pink and red Sambalpuri saree featuring traditional double-ikat tie-and-dye weaving patterns and intricate borders for a classic handloom look."
  },
  {
    id: 9,
    name: "Classic Bengali Tant Saree",
    price: 6999,
    category: "Saree Boutique",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/A_Traditional_Bengali_Attire-_Saree_draped_in_the_Bengali_way.jpg/500px-A_Traditional_Bengali_Attire-_Saree_draped_in_the_Bengali_way.jpg",
    details: {
      fabric: "Premium Bengal Cotton Tant",
      craft: "Lal-Paar Handloom Tant Weaving",
      length: "5.5 Meters + 0.8 Meter Blouse Piece",
      blouse: "Contrast Red Cotton Blouse",
      care: "Dry Clean Only",
      styleNote: "Pair with a big red bindi, traditional gold jhumkas, and red bangles for an iconic festive look."
    },
    description: "A traditional white cotton saree with a deep red border, draped in the elegant classic Bengali style. Perfect for Durga Puja and cultural celebrations."
  },
  {
    id: 10,
    name: "Leather Bound Journal",
    price: 1299,
    category: "Gifts & Stationery",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363",
    description: "Handcrafted full-grain leather journal with cream-colored parchment paper. Perfect for sketching, diary writing, or daily planning."
  },
  {
    id: 11,
    name: "Matte Black Fountain Pen",
    price: 2499,
    category: "Gifts & Stationery",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd",
    description: "Elegant brass fountain pen with a matte black finish and a medium steel nib. Comes in a signature wooden gift box."
  },
  {
    id: 12,
    name: "Soy Wax Scented Candle Set",
    price: 1899,
    category: "Gifts & Stationery",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
    description: "Set of three hand-poured soy wax candles in Amber & Sandalwood, Lavender & Sage, and Vanilla Bean. Non-toxic clean burn."
  },
  {
    id: 13,
    name: "Watercolor & Sketch Pad",
    price: 1499,
    category: "Gifts & Stationery",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
    description: "Premium heavy-weight cold-press watercolor pad, ideal for sketches, washes, and multimedia work."
  },
  {
    id: 14,
    name: "Adidas Ultraboost",
    price: 11999,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    description: "High-performance running shoe featuring responsive boost cushioning, a breathable Primeknit upper, and durable continental rubber outsole."
  },
  {
    id: 15,
    name: "Classic Canvas Sneakers",
    price: 2499,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    description: "Timeless low-top canvas sneakers with durable vulcanized rubber soles, breathable canvas upper, and double-stitched details."
  },
  {
    id: 16,
    name: "Air Force Premium",
    price: 7999,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    description: "Sleek all-black premium sports sneakers with a soft leather upper, air cushioning, and iconic non-slip rubber traction."
  },
  {
    id: 17,
    name: "Minimalist Leather Watch",
    price: 4999,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
    description: "Elegant quartz watch featuring a genuine tan leather strap, clean white dial with silver markers, and durable mineral glass."
  },
  {
    id: 18,
    name: "Classic Chronograph",
    price: 9999,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa",
    description: "Precision luxury watch with multiple sub-dials, stainless steel casing, sapphire crystal face, and deep black finish."
  },
  {
    id: 20,
    name: "Mechanical Keyboard",
    price: 4499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    description: "Tactile mechanical keyboard with customized RGB backlighting, durable double-shot PBT keycaps, and linear red switches."
  },
  {
    id: 21,
    name: "Wireless Smart Speaker",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    description: "Compact smart speaker with 360-degree immersive sound, voice control assistant, and 12-hour continuous playback battery life."
  },
  {
    id: 22,
    name: "4K Action Camera",
    price: 12999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Ultra-HD action camera with advanced electronic image stabilization, waterproof casing, and dual screens for selfies."
  }
];

export default products;