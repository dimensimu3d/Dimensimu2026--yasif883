import { useMemo, useState } from "react";

import { getCategories, getProducts } from "../services/product.service";

export default function useProducts() {
  const [products] = useState(getProducts());

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("default");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = useMemo(() => getCategories(), []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category
    if (category !== "All") {
      result = result.filter((item) => item.category === category);
    }

    // Search
    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(keyword) ||
          item.category.toLowerCase().includes(keyword) ||
          item.tags.some((tag) => tag.toLowerCase().includes(keyword)),
      );
    }

    // Sort
    switch (sort) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "category":
        result.sort((a, b) => a.category.localeCompare(b.category));
        break;

      default:
        break;
    }

    return result;
  }, [products, category, search, sort]);

  function openProduct(product) {
    setSelectedProduct(product);
  }

  function closeProduct() {
    setSelectedProduct(null);
  }

  return {
    products,
    filteredProducts,

    categories,

    search,
    setSearch,

    category,
    setCategory,

    sort,
    setSort,

    selectedProduct,

    openProduct,
    closeProduct,
  };
}
