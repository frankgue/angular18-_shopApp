import { Item } from '../models/item';

export const nav_items: Item[] = [
  {
    name: 'Home',
    path: '',
  },
  {
    name: 'Product',
    path: 'products',
  },
  {
    name: 'Blog',
    path: '',
  },
];

export const auth_items: Item[] = [
  {
    name: 'Sign In',
    path: '/signin',
  },
  {
    name: 'Sign Up',
    path: '/signup',
  },
];
