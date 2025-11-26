import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Hammer, Users } from "lucide-react";
import { Link } from "wouter";

export default function Landing() {

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="page-transition">
              <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight" data-testid="hero-title">
               FluidReach
                <br />
                <span className="font-semibold">Precision Marketing Fluidly Delivered.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light" data-testid="hero-description">
                Leveling-Up Your Digital Marketing Strategy with Sustainable AI-Powered Insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    className="bg-white text-primary px-8 py-4 rounded-md hover:bg-blue-50 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg h-auto"
                    data-testid="button-start-trial"
                  >
                    Get Started Today
                  </Button>
                </Link>

                <Link href="/mission">
                  <Button 
                    variant="outline"
                    className="bg-white text-primary px-8 py-4 rounded-md hover:bg-blue-50 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg h-auto"
                    data-testid="button-start-trial"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="page-transition">

              {/* Dashboard Preview */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                  <div className="bg-card rounded-lg p-6" data-testid="dashboard-preview">

              {/* Analytical Dashboard Card */}
                      <div className="flex items-center justify-between mb-4">
                      <h3 className="text-foreground font-semibold">Analytics Dashboard</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">Live</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Revenue Growth</span>
                        <span className="text-lg font-semibold text-green-600">+24.5%</span>
                      </div>

                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">User Engagement</span>
                        <span className="text-lg font-semibold text-blue-600">89%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{width: '89%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" data-testid="features-title">
              Our Software To Level-Up Your Business
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to grow in your community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">

            <Card className="hover:shadow-lg transition-all transform hover:-translate-y-1" data-testid="feature-analytics">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-6">
                    <Hammer className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Efficient Creation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create personalized advertisements with the help of sustainable AI.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all transform hover:-translate-y-1" data-testid="feature-security">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-secondary rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Real-Time Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  View and monitor real-time engagement and learn improvements with resources
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all transform hover:-translate-y-1" data-testid="feature-collaboration">
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Experts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real-time communication with Digital Advertising AI and Advertising Experts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6" data-testid="cta-title">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using FluidReach's solutions to drive better business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-accent transition-all transform hover:scale-105 font-semibold text-lg shadow-lg h-auto"
                data-testid="button-cta-trial"
              >
                Get Started Today
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-md hover:bg-primary hover:text-primary-foreground transition-all font-semibold text-lg h-auto"
                data-testid="button-contact-sales"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
