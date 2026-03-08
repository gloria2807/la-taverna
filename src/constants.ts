import { MenuItem, NavItem, GuestItem, Photo } from './types';
import tacoTuesday from './assets/taco-tuesday.jpg'
import pizzaWednesday from './assets/pizza-wednesday.jpg'
import pastaThursday from './assets/pasta-thursday.jpg'
import Seafood from './assets/Seafood.jpg'
import RedCake from './assets/red-cake.jpg'
import ginBasil from './assets/gin-Basil.jpg'
import JollofAlAjillo from './assets/jollof-al-ajillo.jpg'
import cheeseCake from './assets/cheese-cake.jpg'
import BBQ from './assets/bbq.jpg'
import Cocktail from './assets/cocktail.jpg'
import porkBelly from './assets/pork-belly.jpg'
import logo1 from './assets/1.jpg'
import logo2 from './assets/2.jpg'
import logo3 from './assets/3.jpg'
import logo4 from './assets/4.jpg'
import logo5 from './assets/5.jpg'
import logo6 from './assets/6.jpg'
import logo7 from './assets/7.jpg'
import logo8 from './assets/8.jpg'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'A big plate straight from the ocean.',
    description: 'Fresh seafood, rich flavours, and a dining experience worth coming back for.',
    price: 8500,
    category: 'Seafood',
    image: Seafood,
  },
  {
    id: '2',
    name: 'Red velvet cake at La Taverna',
    description: 'Soft. Rich. Perfectly frosted. That one slice that turns into two. Freshly baked and ready for you.',
    price: 5500,
    category: 'Cake',
    image: RedCake,
  },
  {
    id: '3',
    name: 'Sunny day. Gin Basil in hand',
    description: 'Start the new week the right way — fresh, vibrant, effortless. Join us for cocktails, great food, and easy moments.',
    price: 14500,
    category: 'Drinks',
    image: ginBasil,
  },
  {
    id: '4',
    name: 'Fall in love with Jollof Al Ajillo.',
    description: 'A bold new addition to your favourites — rich, flavourful and perfectly satisfying.',
    price: 12000,
    category: 'Seafood',
    image: JollofAlAjillo,
  },
  {
    id: '5',
    name: 'Creamy cheesecake crowned with fresh strawberries and sweet berry drizzle',
    description: 'Don’t miss dessert today… don’t miss out on what you love.',
    price: 9500,
    category: 'Cake',
    image: cheeseCake,
  },
  {
    id: '6',
    name: 'BBQ pork ribs served with oven potatoes',
    description: 'Smoky, tender, and deeply satisfying',
    price: 11000,
    category: 'Meat',
    image: BBQ,
  },
  {
    id: '7',
    name: 'Cocktails made to be savoured',
    description: 'From classic favourites to signature blends, every sip is mixed to perfection. Unwind, sip slow, and enjoy the moment.',
    price: 18000,
    category: 'Drinks',
    image: Cocktail,
  },
  {
    id: '8',
    name: 'Soft pork belly',
    description: 'Slow-cooked, melt-in-your-mouth, and worth every bite. Perfectly tender, richly flavoured, and made to be enjoyed slowly.',
    price: 7500,
    category: 'Meat',
    image: porkBelly,
  },
];

export const GUEST_ITEMS: GuestItem[] = [
  {
    id: '1',
    name: 'Farouk Tackie',
    description: 'Local Guide',
    star: '⭐⭐⭐⭐⭐',
    review: 'I had a lovely experience at La Taverna. It was a bit tricky finding parking at first, but once I got in, everything else made up for it. The restaurant has both indoor and outdoor seating. I chose to sit outside and really enjoyed the serene atmosphere. The customer experience was great, and the food arrived right on time. Meals were affordable, portions were good, and there are plenty of nice photo spots too. Definitely worth visiting again.',
  },
  {
   id: '2',
    name: 'Nkechi Okoli',
    description: 'Local Guide',
    star: '⭐⭐⭐⭐',
    review: 'Reminds me of an old Italian movie. A nice blend of rustic and modern with lots of greenery. This restaurant is very calming.  And price was a surprise.  Quite affordable. Meal were nice but not as spicy as i would prefer. The pizza and desert though was excellent. Love the service. PS- Very nice smelling rest rooms.  Definitely a plus',
  },
];

export const EVENTS = [
  {
    id: '1',
    title: 'Taco Tuesday',
    date: 'Every Tuesday, from 4pm',
    description: 'Spice up your Tuesday with Taco',
    img: tacoTuesday,
  },
  {
    id: '2',
    title: 'Pizza Wednesday',
    date: 'Every Tuesday',
    description: 'Delicious slices made fresh, baked to perfection every time',
    img: pizzaWednesday,
  },
  {
    id: '3',
    title: 'Pasta Thursday',
    date: 'Every Thursday',
    description: 'Get a glass of wine, sangria, bottle of water or juice. 12 different types of pasta available',
    img: pastaThursday,
  }
];
export const PHOTOS: Photo[] = [
  {
    id: '1',
    img: logo1,
  },
  {
    id: '2',
    img: logo2,
  },
  {
    id: '3',
    img: logo3,
  },
  {
    id: '4',
    img: logo4,
  },
  {
    id: '5',
    img: logo5,
  },
  {
    id: '6',
    img: logo6,
  },
  {
    id: '7',
    img: logo7,
  },
  {
    id: '8',
    img: logo8,
  },
  {
    id: '9',
    img: porkBelly,
  },
  {
    id: '10',
    img: RedCake,
  },
  {
    id: '11',
    img: Seafood,
  },
  {
    id: '12',
    img: Cocktail,
  }
];

export const HERO_DATA = {
  subtitle: 'Authentic Mediterranean Flavors',
  title: 'A Taste of the Mediterranean in Lagos',
  description: 'Experience the warmth of rustic dining in the heart of Victoria Island. From wood-fired pizzas to authentic Spanish tapas.',
  button_text: 'Explore Menu'
};

export const CONTACT_DATA = {
  address: '48 Balarabe Musa Cres, Victoria Island, Lagos, Nigeria',
  phone: '+234 908 765 4321',
  instagram: 'https://www.instagram.com/la_taverna_lagos/',
  facebook: 'https://www.facebook.com/latavernalagos'
};
