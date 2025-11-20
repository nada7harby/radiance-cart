import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleRemove = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button size="lg" asChild>
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-lg p-6">
              <div className="flex gap-6">
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-semibold text-lg mb-1 hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4">{item.category}</p>

                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-9 w-9"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="h-9 w-9"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Price and Remove */}
                    <div className="flex items-center gap-6">
                      <span className="text-xl font-bold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemove(item.id, item.name)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-secondary rounded-lg p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-primary">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <Button size="lg" className="w-full mb-4" asChild>
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>

            <Button variant="outline" size="lg" className="w-full" asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
