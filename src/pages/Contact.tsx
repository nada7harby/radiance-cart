import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Get in Touch</h1>
        <p className="text-center text-muted-foreground mb-12">
          Have questions? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">support@pureglow.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      123 Skincare Avenue<br />
                      Los Angeles, CA 90028
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold mb-2">Customer Support Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                Saturday: 10:00 AM - 4:00 PM PST<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
