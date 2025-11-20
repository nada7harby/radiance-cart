import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          {product.new && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
              New
            </span>
          )}
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm ml-1">{product.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground ml-2">
              ({product.reviews} reviews)
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="group-hover:bg-primary-light transition-colors"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
