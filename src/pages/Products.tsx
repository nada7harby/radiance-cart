import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("featured");

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return (b.new ? 1 : 0) - (a.new ? 1 : 0);
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">All Products</h1>
        <p className="text-muted-foreground">
          Discover our complete collection of premium skincare
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.slug}
              variant={selectedCategory === category.slug ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.slug)}
              size="sm"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Sort */}
        <div className="md:ml-auto">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
