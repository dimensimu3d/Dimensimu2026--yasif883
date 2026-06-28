import SectionWrapper from "../../ui/SectionWrapper";
import SectionTitle from "../../ui/SectionTitle";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortDropdown from "../../common/SortDropdown";
import ProductGrid from "./ProductGrid";
import EmptyState from "./EmptyState";

import useProducts from "../../../hooks/useProducts";

export default function ProductCatalog() {
  const {
    filteredProducts,

    categories,

    search,
    setSearch,

    category,
    setCategory,

    sort,
    setSort,

    openProduct,
  } = useProducts();

  return (
    <SectionWrapper id="catalog">
      <SectionTitle
        badge="OUR PRODUCTS"
        title="3D Printing Product Catalog"
        subtitle="Explore our collection of custom 3D printing products, engineering prototypes, miniatures, cosplay accessories, and creative solutions."
        align="center"
      />

      <div className="mt-16 space-y-8">
        {/* Toolbar */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="w-full lg:max-w-md">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Sort */}
          <SortDropdown value={sort} onChange={setSort} />
        </div>

        {/* Categories */}
        <CategoryFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />

        {/* Product List */}
        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
            onProductClick={openProduct}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </SectionWrapper>
  );
}
