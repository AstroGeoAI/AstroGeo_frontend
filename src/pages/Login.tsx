import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom"; // <-- import useNavigate

const Login = () => {
  const navigate = useNavigate(); // <-- initialize navigate

  return (
    <div className="min-h-screen gradient-space relative overflow-hidden">
      {/* Animated 3D Space Background */}
      <div className="absolute inset-0 opacity-30">
        {/* ... existing floating animations ... */}
      </div>

      {/* Starfield Animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 px-4 py-2 bg-background/50 border border-border/50 rounded hover:bg-background/70 transition text-sm"
        >
          ← Back
        </button>

        <Card className="w-full max-w-md bg-card/20 backdrop-blur-md border-border/50 stellar-glow">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-playfair cosmic-text-glow">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Sign in to AstroGeo AI account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                type="text" 
                placeholder="Enter your username"
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>
            
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground stellar-glow">
              Login
            </Button>
            
            <div className="text-center space-y-2">
              <Link 
                to="/forgot-password" 
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Forgot Password?
              </Link>
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link 
                  to="/register" 
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
