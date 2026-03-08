export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Seafood' | 'Cake' | 'Meat' | 'Drinks';
  image: string;
}

export interface GuestItem {
  id: string;
  name: string;
  description: string;
  star: string;
  review: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  img: string;
}

export interface Photo {
  id: string;
  img: string;
}

export interface NavItem {
  label: string;
  href: string;
}
