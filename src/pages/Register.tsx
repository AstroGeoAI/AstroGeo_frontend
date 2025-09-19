import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom"; // <-- import useNavigate

const Register = () => {
  const navigate = useNavigate(); // <-- initialize navigate

  return (
    <div className="min-h-screen gradient-nebula relative overflow-hidden">
      {/* Animated 3D Space Background */}
      <div className="absolute inset-0 opacity-40">
        {/* ... your existing floating animations ... */}
      </div>

      {/* Cosmic Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 2}s infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-96 h-96 border border-primary/30 rounded-full"></div>
        <div className="absolute w-[500px] h-[500px] border border-accent/20 rounded-full"></div>
        <div className="absolute w-[600px] h-[600px] border border-secondary/15 rounded-full"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 px-4 py-2 bg-background/50 border border-border/50 rounded hover:bg-background/70 transition text-sm"
        >
          ← Back
        </button>

        <Card className="w-full max-w-md bg-card/20 backdrop-blur-md border-border/50 nebula-glow">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-playfair cosmic-text-glow">
              Join AstroGeo AI
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Create your account and explore the cosmos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="reg-username">Username</Label>
              <Input 
                id="reg-username" 
                type="text" 
                placeholder="Choose a username"
                className="bg-background/50 border-border/50 focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-email">Email</Label>
              <Input 
                id="reg-email" 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/50 border-border/50 focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-password">Password</Label>
              <Input 
                id="reg-password" 
                type="password" 
                placeholder="Create a password"
                className="bg-background/50 border-border/50 focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input 
                id="confirm-password" 
                type="password" 
                placeholder="Confirm your password"
                className="bg-background/50 border-border/50 focus:border-accent"
              />
            </div>
            
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground nebula-glow">
              Create Account
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link 
                  to="/login" 
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
