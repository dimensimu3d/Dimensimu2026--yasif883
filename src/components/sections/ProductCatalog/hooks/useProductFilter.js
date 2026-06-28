import { useMemo, useState } from "react";

export default function useProductFilter(products) {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = category === "All" || product.category === category;

      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [products, search, category]);

  return {
    search,
    setSearch,

    category,
    setCategory,

    filteredProducts,
  };
}
