import { Link } from "wouter";
import { BarChart3, Calendar, PenSquare, Users } from "lucide-react";

export default function Solution() {
  return (
    <div className="py-20 bg-background page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Our Solution: Your Partner in Growth
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            We understand that as a small business owner, you wear many hats. Marketing is just one of them. That's why we built FluidReach—to be more than just a tool, but a partner that simplifies your marketing, amplifies your message, and empowers you to grow.
          </p>
        </div>

        <div className="space-y-16">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">The Dashboard: Your Command Center</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We designed the FluidReach dashboard with you, our Client, in mind. It's a single, intuitive space where you can manage your entire social media presence without feeling overwhelmed. We know your time is precious, so we've made everything accessible and easy to understand, from planning your content to seeing the results.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <Calendar className="h-10 w-10 text-primary mb-2" />
                <p className="font-semibold text-foreground">Schedule Posts</p>
              </div>
              <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <p className="font-semibold text-foreground">Track Analytics</p>
              </div>
              <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <PenSquare className="h-10 w-10 text-primary mb-2" />
                <p className="font-semibold text-foreground">Create Content</p>
              </div>
              <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <Users className="h-10 w-10 text-primary mb-2" />
                <p className="font-semibold text-foreground">Get Feedback</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h3 className="text-3xl font-semibold text-foreground mb-4">Content Creation, Simplified</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Feeling the pressure to constantly create fresh content? We get it. Our Content Creation hub is designed to be your creative partner. Upload your advertisement, and our AI will provide instant feedback. Or, if you prefer a human touch, you can connect with one of our marketing experts for a live chat. We're here to help you create content that resonates with your audience, without the stress.
              </p>
            </div>
            <div className="md:order-1">
              <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Creative process" className="rounded-2xl shadow-xl w-full h-auto"/>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">Analytics That Make Sense</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Data can be intimidating. That's why our Analytics dashboard is designed to give you clear, actionable insights, not just a flood of numbers. See what's trending in your market, understand which social media platforms are performing best for you, and get a clear picture of your audience. We believe that understanding your data is the key to making smarter marketing decisions, and we're here to make that process as simple as possible.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600" alt="Analytics dashboard" className="rounded-2xl shadow-xl w-full h-auto"/>
            </div>
          </div>

          <div className="text-center pt-8">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Ready to Grow with a Partner Who Cares?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Let us handle the complexities of marketing so you can focus on what you do best—running your business. Get in touch with us today to learn how FluidReach can become a part of your team.
            </p>
            <Link href="/contact">
              <a className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-accent font-semibold text-lg transition-all">
                Contact Us
              </a>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
