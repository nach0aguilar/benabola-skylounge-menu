enum DrinkIcon {
  BEER = "icons/beer.svg",
  BOTTLE = "icons/bottle.svg",
  CHAMPAGNE = "icons/champagneglass.svg",
  COCKTAIL = "icons/cocktail.svg",
  CUP = "icons/cup.svg",
  GLASS = "icons/glass.svg",
  WINE = "icons/wineglass.svg",
}

export type Drink = {
  id: number;
  category: string;
  name: string;
  img: string;
  glassIcon?: DrinkIcon;
  glassPrice?: number;
  bottleIcon?: DrinkIcon;
  bottlePrice?: number;
  highlighted: boolean;
};

export const DRINKS: Drink[] = [
  // Vodka
  {
    id: 0,
    category: "Vodka",
    name: "Absolut",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/vodka/absolut.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: true,
  },
  {
    id: 1,
    category: "Vodka",
    name: "Ciroc",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/vodka/ciroc.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 16,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 190,
    highlighted: false,
  },
  {
    id: 2,
    category: "Vodka",
    name: "Belvedere",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/vodka/belvedere.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 16,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 190,
    highlighted: true,
  },
  // Gin
  {
    id: 3,
    category: "Gin",
    name: "Beefeater",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/beefeater.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 4,
    category: "Gin",
    name: "Beefeater Pink",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/beefeater-pink.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 5,
    category: "Gin",
    name: "Bombay Sapphire",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/bombay-sapphire.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 15,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  {
    id: 6,
    category: "Gin",
    name: "Brockmans",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/brockmans.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 15,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  {
    id: 7,
    category: "Gin",
    name: "G'vine",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/gvine.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 15,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  {
    id: 8,
    category: "Gin",
    name: "Hendricks",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/hendricks.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 15,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  {
    id: 9,
    category: "Gin",
    name: "Jinzu",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/jinzu.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 15,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  {
    id: 10,
    category: "Gin",
    name: "Malfy Limone",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/malfy-limone.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 11,
    category: "Gin",
    name: "Martin Miller's",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/martin-millers.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 12,
    category: "Gin",
    name: "Monkey 47",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/monkey-47.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 16,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: true,
  },
  {
    id: 13,
    category: "Gin",
    name: "Seagram's",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/seagrams.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 14,
    category: "Gin",
    name: "Tanqueray Ten",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/gin/tanqueray-ten.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 15,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  // Whisky
  {
    id: 15,
    category: "Whisky",
    name: "Ballantines",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/ballantines.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 16,
    category: "Whisky",
    name: "Jameson",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/jameson.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 17,
    category: "Whisky",
    name: "Chivas 12",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/chivas-regal-12.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 18,
    category: "Whisky",
    name: "Chivas 18",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/chivas-regal-18.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 21,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 210,
    highlighted: false,
  },
  {
    id: 19,
    category: "Whisky",
    name: "Jack Daniel's",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/jack-daniels.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 20,
    category: "Whisky",
    name: "JW Red Label",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/johnnie-walker-red.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 21,
    category: "Whisky",
    name: "JW Black Label",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/johnnie-walker-black.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 15,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  {
    id: 22,
    category: "Whisky",
    name: "JW Gold Label",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/johnnie-walker-gold.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 18,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  {
    id: 23,
    category: "Whisky",
    name: "Macallan 12",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/macallan-12.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 19,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 210,
    highlighted: false,
  },
  {
    id: 24,
    category: "Whisky",
    name: "Maker's Mark",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/whisky/makers-mark.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  // Rum
  {
    id: 25,
    category: "Rum",
    name: "Bacardi",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/rum/bacardi.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: true,
  },
  {
    id: 26,
    category: "Rum",
    name: "Barceló Añejo",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/rum/bacardi.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 27,
    category: "Rum",
    name: "Brugal",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/rum/brugal.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 28,
    category: "Rum",
    name: "Captain Morgan",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/rum/captain-morgan.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 29,
    category: "Rum",
    name: "Havana Club 7",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/rum/havana-club-7.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 15,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  {
    id: 30,
    category: "Rum",
    name: "Havana Club Seleccion",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/rum/havana-club-seleccion.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 15,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 160,
    highlighted: false,
  },
  {
    id: 31,
    category: "Rum",
    name: "Malibú",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/rum/malibu.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
  {
    id: 32,
    category: "Rum",
    name: "Kraken Black Spiced",
    img: "https://benabola-skylounge-menu.herokuapp.com/img/drinks/rum/kraken-black.webp",
    glassIcon: DrinkIcon.GLASS,
    glassPrice: 14,
    bottleIcon: DrinkIcon.BOTTLE,
    bottlePrice: 150,
    highlighted: false,
  },
];
