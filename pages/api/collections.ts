import type { NextApiRequest, NextApiResponse } from "next";

const data = [
  {
    name: "single packs",
    description:
      "Get packs of 6, 12, or 24 of your favourite MOTHs direct to your door.",
    items: [
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
    ],
  },
  {
    name: "mixed packs",
    description:
      "Something for everyone. Or everything for someone. Dropped on your doorstep either way.",
    items: [
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
    ],
  },
  {
    name: "occasions",
    description:
      "Tried and tested cocktail combos for every occasion - our all-in-one recipe for a good time.",
    items: [
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
    ],
  },
  {
    name: "merch",
    description: "The little extra things to enhance the perfect MOTH.",
    items: [
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
      {
        images: [
          "Margarita_125ml_MOTH_Cocktail_PP_Image_1_1_Ratio.png",
          "",
          "",
        ],
        name: "margarita",
        price: "20",
        formula: "Tequila, Triple Sec, Lime",
        details: "125ml — 14.9% vol.",
        description:
          "Fresh, sharp and confident. We think you’ll like it. Show it off in a martini glass with a salted rim. Also good over ice with takeout. Or just drink and dance.",
        size: [6, 12, 24],
        reviews: 88,
        "PRODUCT DESCRIPTION": {
          Taste:
            "Ah oui, this classic belongs on the silver screen. The pinnacle of poise, glamour and fun. Gorgeously balanced with Cornish gin from our friends Tarquin’s. Tantalisingly lemony. Full of fizzy and just the right amount of pinkness to see la vie en rose.",
          "(Im)perfect Serve":
            "You’ve got options here - though sipping in style is a must. Poured over ice in a highball glass gives some charisma to the situation, sure. But going for it with an icy flute and curly lemon twist? That’s showbiz, baby.",
        },
        "SPIRIT PARTNERS": {
          GIN: "The first Cornish distillery for over a hundred years - set up by a 23 year-old surfer in 2012. Tarquin’s Gin is full of humanity, steeped in the story of a young maverick Master Distiller, distilled with beautifully balanced botanicals including handpicked violets.",
        },
        "NUTRITION & ALLERGENS": {
          "Energy (kcal)": [108, 215],
        },
      },
    ],
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "GET") res.json(data);
}
