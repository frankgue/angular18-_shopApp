export interface Product {
  _id: string;
  name: string;
  description: string;
  additional_info?: string;
  vendor_info?: string;
  reviews?: string;
  stock?: string;
  imageUrl: string[];
  size?: string[];
  color?: string[];
  category: string[];
  sold_price: number;
  regular_price: number;
  slug?: string;
  created_at: Date;
  updated_at?: Date;
}
