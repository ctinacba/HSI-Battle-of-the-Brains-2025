import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BarChart3 } from "lucide-react";
import { useState } from "react";
import companyLogo from "@assets/logo.png";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" data-testid="nav-logo">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <img src={companyLogo} alt={"FluidReach Logo"}/>
                </div>
                <span className="text-2xl font-semibold text-foreground">FluidReach</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" data-testid="nav-home">
                <span className={`font-medium transition-colors hover:text-primary ${location === '/' ? 'text-primary' : 'text-foreground'}`}>
                  Home
                </span>
              </Link>

            <Link href="/solution" data-testid="nav-solution">
                <span className={`font-medium transition-colors hover:text-primary ${location === '/solution' ? 'text-primary' : 'text-foreground'}`}>
                  Our Solution
                </span>
            </Link>

              <Link href="/mission" data-testid="nav-mission">
                <span className={`font-medium transition-colors hover:text-primary ${location === '/mission' ? 'text-primary' : 'text-foreground'}`}>
                  Our Mission
                </span>
              </Link>

              <Link href="/contact" data-testid="nav-contact">
                <span className={`font-medium transition-colors hover:text-primary ${location === '/contact' ? 'text-primary' : 'text-foreground'}`}>
                  Contact Us
                </span>
              </Link>
              <Link href="/dashboard" data-testid="nav-dashboard">
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/" data-testid="mobile-nav-home">
                    <span className="block text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                      Home
                    </span>
                  </Link>
                  <Link href="/mission" data-testid="mobile-nav-mission">
                    <span className="block text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                      Mission
                    </span>
                  </Link>
                  <Link href="/solution" data-testid="mobile-nav-solution">
                    <span className="block text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                      Our Solution
                    </span>
                  </Link>
                  <Link href="/contact" data-testid="mobile-nav-contact">
                    <span className="block text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                      Contact Us
                    </span>
                  </Link>
                  <Link href="/dashboard" data-testid="mobile-nav-dashboard">
                    <span className="block text-foreground hover:text-primary transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                      Dashboard
                    </span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
