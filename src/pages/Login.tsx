import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">{isLogin ? "Welcome Back" : "Create Account"}</CardTitle>
          <CardDescription>
            {isLogin ? "Sign in to your account" : "Sign up to get started"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {!isLogin && (
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>

            <Button type="submit" className="w-full">
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Button variant="outline">Google</Button>
              <Button variant="outline">Facebook</Button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-primary hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-primary hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
