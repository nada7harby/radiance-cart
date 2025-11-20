import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { CreditCard, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process order
      toast.success("Order placed successfully!");
      clearCart();
      navigate("/");
    }
  };

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                s <= step
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {s < step ? <CheckCircle2 className="h-6 w-6" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`w-24 h-1 ${
                  s < step ? "bg-primary" : "bg-secondary"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" required />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <span className="font-medium">Credit Card</span>
                  </div>
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Review Order</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              <Button type="submit" className="flex-1">
                {step === 3 ? "Place Order" : "Continue"}
              </Button>
            </div>
          </form>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
