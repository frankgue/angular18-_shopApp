export interface Category {
  _id?: string;
  name: string;
  path?: string;
  created_at: Date;
  updated_at: Date;
  slug: string;
  author: string;
}
