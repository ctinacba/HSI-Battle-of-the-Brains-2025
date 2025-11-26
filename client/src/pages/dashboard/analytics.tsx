import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shirt, HeartPulse, Home, Dog, BookOpen, Gamepad2, Carrot, ToyBrick, Twitter, Facebook, Instagram, Linkedin, Youtube, Mail, Music, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const hotTopics = [
  {
    demographic: "Gen Z (16-24)",
    topics: [
      { name: "Sustainable Products", icon: Leaf, color: "text-green-500", bgColor: "bg-green-500", percentage: 85 },
      { name: "Vintage Fashion", icon: Shirt, color: "text-blue-500", bgColor: "bg-blue-500", percentage: 70 },
      { name: "Mental Health Apps", icon: HeartPulse, color: "text-red-500", bgColor: "bg-red-500", percentage: 60 },
    ]
  },
  {
    demographic: "Millennials (25-40)",
    topics: [
      { name: "Home Improvement", icon: Home, color: "text-yellow-500", bgColor: "bg-yellow-500", percentage: 90 },
      { name: "Pet Supplies", icon: Dog, color: "text-indigo-500", bgColor: "bg-indigo-500", percentage: 80 },
      { name: "Online Courses", icon: BookOpen, color: "text-purple-500", bgColor: "bg-purple-500", percentage: 75 },
    ]
  },
  {
    demographic: "Parents",
    topics: [
      { name: "Family Entertainment", icon: Gamepad2, color: "text-pink-500", bgColor: "bg-pink-500", percentage: 80 },
      { name: "Meal Delivery Kits", icon: Carrot, color: "text-orange-500", bgColor: "bg-orange-500", percentage: 88 },
      { name: "Educational Toys", icon: ToyBrick, color: "text-teal-500", bgColor: "bg-teal-500", percentage: 65 },
    ]
  }
];

const socialMediaPlatforms = [
  { name: "Twitter", icon: <Twitter className="h-8 w-8" /> },
  { name: "Facebook", icon: <Facebook className="h-8 w-8" /> },
  { name: "Instagram", icon: <Instagram className="h-8 w-8" /> },
  { name: "LinkedIn", icon: <Linkedin className="h-8 w-8" /> },
  { name: "TikTok", icon: <Music className="h-8 w-8" /> },
  { name: "Youtube", icon: <Youtube className="h-8 w-8" /> },
  { name: "Google", icon: <Globe className="h-8 w-8" /> },
  { name: "Email Chain", icon: <Mail className="h-8 w-8" /> },
];

// Placeholder for a Pie Chart
const PieChartPlaceholder = () => (
  <div>
    <h5 className="text-sm font-semibold text-foreground mb-2">Gender</h5>
    <div className="flex flex-col space-y-2 text-sm">
      <div className="flex items-center justify-between"><span>Female</span><span className="font-medium">62%</span></div>
      <div className="w-full bg-muted rounded-full h-2"><div className="bg-pink-500 h-2 rounded-full" style={{width: "62%"}}></div></div>
      <div className="flex items-center justify-between"><span>Male</span><span className="font-medium">38%</span></div>
      <div className="w-full bg-muted rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{width: "38%"}}></div></div>
    </div>
  </div>
);

// Placeholder for a Bar Chart
const BarChartPlaceholder = () => (
  <div>
    <h5 className="text-sm font-semibold text-foreground mb-2">Engagement by Post Type</h5>
    <div className="flex justify-around items-end h-24 space-x-2">
      <div className="flex flex-col items-center"><div className="w-6 bg-primary" style={{height: "75%"}}></div><span className="text-xs mt-1">Video</span></div>
      <div className="flex flex-col items-center"><div className="w-6 bg-accent" style={{height: "50%"}}></div><span className="text-xs mt-1">Image</span></div>
      <div className="flex flex-col items-center"><div className="w-6 bg-green-500" style={{height: "25%"}}></div><span className="text-xs mt-1">Text</span></div>
    </div>
  </div>
);

export default function Analytics() {
  const [selectedSocial, setSelectedSocial] = React.useState<string | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Analytics</h1>
        <p className="text-muted-foreground">Deep dive into your business metrics and trends.</p>
      </div>

      <div className="grid gap-6">
        <Card data-testid="hot-on-the-market">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Hot on the Market: Ad Targeting Suggestions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {hotTopics.map((group, i) => (
                <Card 
                  key={group.demographic} 
                  className={cn(
                    "transition-all duration-500 ease-out hover:shadow-xl", 
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{transitionDelay: `${i * 100}ms`}}
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-4">{group.demographic}</h4>
                    <div className="space-y-4">
                      {group.topics.map(topic => (
                        <div key={topic.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <topic.icon className={cn("h-5 w-5 mr-3", topic.color)} />
                              <span>{topic.name}</span>
                            </div>
                            <span className="font-semibold text-foreground">{topic.percentage}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className={cn("h-2 rounded-full transition-all duration-1000 ease-out", topic.bgColor)}
                              style={{width: isLoaded ? `${topic.percentage}%` : '0%'}}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Social Media Performance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {socialMediaPlatforms.map(social => (
                <div 
                  key={social.name} 
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer border-2 transition-all",
                    selectedSocial === social.name ? "border-primary bg-primary/10" : "border-transparent hover:border-primary/50 hover:bg-primary/5"
                  )}
                  onClick={() => setSelectedSocial(social.name)}
                >
                  {social.icon}
                  <span className="text-sm font-medium mt-2">{social.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedSocial && (
          <Card className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0")}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">{selectedSocial} Analytics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Post Gallery */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Posted Content</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <span className="text-muted-foreground text-xs">Post {i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Charts */}
                <div className="space-y-6">
                  <BarChartPlaceholder />
                  <PieChartPlaceholder />
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">Trending Topics</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge>#SummerVibes</Badge>
                      <Badge>#DIY</Badge>
                      <Badge>#Tech</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
