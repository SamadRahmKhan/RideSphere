import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Bikes</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Discover our complete range of premium bicycles.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button variant={activeCategory === "all" ? "default" : "outline"} onClick={() => setSearchParams({})}>All Bikes</Button>
            {categories.map(cat => (
              <Button key={cat.id} variant={activeCategory === cat.id ? "default" : "outline"} onClick={() => setSearchParams({ category: cat.id })}>{cat.name}</Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
