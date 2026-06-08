const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://zarpazo-backend.fly.dev';

export type Category = { key: string; label: string; sortOrder: number }

export type ProductVariant = { id: string; size: string }

export type Product = {
  id: string
  slug: string
  category: string
  garmentType: string
  title: string
  description: string
  price: number
  price_original: number
  discount_label: string
  active: boolean
  image: string
  variants: ProductVariant[]
  colors: { name: string; image: string; hex: string }[]
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const { data } = await res.json();
  return data;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const res = await fetch(`${API_URL}/api/products/${slug}`, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const { data } = await res.json();
  return data;
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${API_URL}/api/categories`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const { data } = await res.json();
  return data;
}
