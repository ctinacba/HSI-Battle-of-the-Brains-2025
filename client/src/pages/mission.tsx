import { Card, CardContent } from "@/components/ui/card";
import { Award, Handshake, Rocket, Laptop, Heart, Building2,  CheckCircle } from "lucide-react";

export default function Mission() {
  return (
    <div className="py-20 bg-background page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 page-transition">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6" data-testid="mission-title">
            Our Mission
          </h1>
          <p className="text-2xl text-muted-foreground font-light">
            Empowering businesses to connect with their customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="page-transition">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Team collaboration in modern office" 
              className="rounded-2xl shadow-xl w-full h-auto" 
              data-testid="mission-hero-image"
            />
          </div>
          <div className="page-transition">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Built for the Future</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At FluidReach, we believe that every business deserves access to enterprise-grade analytics.
              Our mission is to provide access to cutting-edge data intelligence, affordable, and actionable
              for organizations of all sizes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're committed to continuous innovation to meet
              the needs of the everchanging world so your company
              can thrive and grow.
            </p>
          </div>
        </div>

        <Card className="rounded-2xl shadow-lg border border-border mb-20">
          <CardContent className="p-12">
            <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">


              <div className="text-center" data-testid="value-quality">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We push the status quo to make sure our sustainable services are to the highest
                    standards to help your business thrive.
                </p>
              </div>


              <div className="text-center" data-testid="value-trust">
                <div className="w-20 h-20 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Utility</h3>
                <p className="text-muted-foreground">
                  We offer reliable solutions that add practical value to various customer needs.
                </p>
              </div>


              <div className="text-center" data-testid="value-authentic">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Authenticity</h3>
                <p className="text-muted-foreground">
                  We effectively show your brand and unique qualities to highlight your story.
                </p>
              </div>


              <div className="text-center" data-testid="value-sustainability">
                <div className="w-20 h-20 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Laptop className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  Providing enterprise-level services for everyone to allow for growth within
                    the innovative community
                </p>
              </div>


              <div className="text-center" data-testid="value-cc">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Customer Care</h3>
                <p className="text-muted-foreground">
                  We listen to our Clients and make sure they have the support needed to succeed long term.
                </p>
              </div>
              <div className="text-center" data-testid="value-simplicity">
                <div className="w-20 h-20 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Connection</h3>
                <p className="text-muted-foreground">
                  Connecting together small businesses to create a support network across communities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="page-transition order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Our Commitment to You</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4" data-testid="commitment-uptime">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="text-white" size={20} />
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-1">Precision & Growth</h4>
                  <p className="text-muted-foreground">We use AI-driven insights and human creativity to deliver targeted ads that connect you with the right customers.</p>
                </div>

              </div>
              <div className="flex items-start space-x-4" data-testid="commitment-support">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Transparency & Support</h4>
                  <p className="text-muted-foreground">We provide clear results, carbon tracking, and a dedicated team ready to help every step of the way.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="commitment-innovation">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Sustainability & Affordability</h4>
                  <p className="text-muted-foreground"> We keep costs low while building eco-friendly marketing solutions that help your business grow responsibly.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="page-transition order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern data center infrastructure" 
              className="rounded-2xl shadow-xl w-full h-auto" 
              data-testid="commitment-image"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Success Stories</h2>
          <div className="space-y-8">
            <div className="group grid grid-cols-1 md:grid-cols-3 gap-4 items-center border rounded-lg p-4 transition-all hover:shadow-lg cursor-pointer">
              <div className="md:col-span-1 aspect-video bg-muted relative rounded-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=800&h=600" alt="Business owner smiling" className="w-full h-full object-cover transition-transform group-hover:scale-105"/>
              </div>
              <div className="md:col-span-2 p-4">
                <p className="text-lg text-muted-foreground mb-4 italic">"FluidReach has been a game-changer for our marketing. The insights are incredibly valuable, and the platform is so easy to use. We've seen a 40% increase in engagement since we started!"</p>
                <p className="font-semibold text-foreground">- Sarah L., CEO of Willow & Sage Boutique</p>
              </div>
            </div>
            <div className="group grid grid-cols-1 md:grid-cols-3 gap-4 items-center border rounded-lg p-4 transition-all hover:shadow-lg cursor-pointer">
              <div className="md:col-span-2 p-4 md:order-1">
                <p className="text-lg text-muted-foreground mb-4 italic">"The AI-powered content creation tools are amazing. We can now create high-quality ads in a fraction of the time. It's like having a full-time marketing expert on our team."</p>
                <p className="font-semibold text-foreground">- Mark R., CEO of Driftwood Coffee Co.</p>
              </div>
              <div className="md:col-span-1 aspect-video bg-muted relative rounded-md overflow-hidden md:order-2">
                <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&h=600" alt="Cafe owner working" className="w-full h-full object-cover transition-transform group-hover:scale-105"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
