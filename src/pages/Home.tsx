import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import heroImage from "@/assets/hero-skincare.jpg";

const Home = () => {
  const featuredProducts = products.filter((p) => p.featured);
  const newProducts = products.filter((p) => p.new);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your
            <span className="text-primary block mt-2">Natural Radiance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Premium skincare formulated with science-backed ingredients for visible results
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.slice(1).map((category) => (
            <Link
              key={category.slug}
              to={`/products?category=${category.slug}`}
              className="group"
            >
              <div className="bg-secondary rounded-lg p-8 text-center hover:bg-accent transition-colors">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Best Sellers</h2>
          <p className="text-muted-foreground">Our most-loved products trusted by thousands</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
            <p className="text-muted-foreground">Discover our latest additions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-accent rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Skincare Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert tips, exclusive offers, and early access to new products
          </p>
          <Button size="lg">Subscribe Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
