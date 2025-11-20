import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/products" className="hover:text-primary">Products</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
            {product.category}
          </p>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold text-primary mb-6">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <Button size="lg" onClick={handleAddToCart} className="flex-1">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <Separator className="mb-6" />

          {/* Ingredients */}
          <div>
            <h3 className="font-semibold mb-3">Key Ingredients</h3>
            <p className="text-sm text-muted-foreground">{product.ingredients}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="bg-secondary rounded-lg p-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-2xl font-bold">{product.rating} out of 5</p>
            <p className="text-muted-foreground">Based on {product.reviews} reviews</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
