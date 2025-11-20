import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">PureGlow</h3>
            <p className="text-sm text-muted-foreground">
              Premium skincare solutions for radiant, healthy skin.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=cleansers" className="text-muted-foreground hover:text-primary">
                  Cleansers
                </Link>
              </li>
              <li>
                <Link to="/products?category=serums" className="text-muted-foreground hover:text-primary">
                  Serums
                </Link>
              </li>
              <li>
                <Link to="/products?category=moisturizers" className="text-muted-foreground hover:text-primary">
                  Moisturizers
                </Link>
              </li>
              <li>
                <Link to="/products?category=masks" className="text-muted-foreground hover:text-primary">
                  Masks
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 PureGlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
