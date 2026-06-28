import { products } from "../data/products";

export function getProducts() {
  return [...products];
}

export function getCategories() {
  return ["All", ...new Set(products.map((item) => item.category))];
}

export function getFeaturedProducts() {
  return products.filter((item) => item.featured);
}

export function getProductBySlug(slug) {
  return products.find((item) => item.slug === slug);
}

export function getLowestPrice(product) {
  return Math.min(...product.variants.map((v) => v.price));
}

export function getHighestPrice(product) {
  return Math.max(...product.variants.map((v) => v.price));
}

export function getDefaultVariant(product) {
  return product.variants[0];
}

export function getTotalStock(product) {
  return product.variants.reduce(
    (total, variant) => total + variant.stock,
    0
  );
}