interface Menu {
  _id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  featured?: boolean;
  allergens?: string;
  createdAt?: string;
  updatedAt?: string;
}