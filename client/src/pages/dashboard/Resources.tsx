import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { TreePine, PlayCircle, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const educationalResources = [
  {
    type: "video",
    title: "Mastering Social Media Marketing",
    bio: "Learn the fundamentals of creating a winning social media strategy that drives engagement and growth.",
    img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    type: "video",
    title: "SEO for Small Businesses",
    bio: "Unlock the secrets of search engine optimization and get your business discovered by more customers online.",
    img: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    type: "video",
    title: "Content Creation That Converts",
    bio: "Discover how to create compelling content that not only captures attention but also turns viewers into loyal customers.",
    img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    type: "article",
    title: "The Ultimate Guide to Ad Campaigns",
    bio: "This comprehensive guide walks you through everything you need to know to run successful, high-return ad campaigns.",
    img: "https://images.pexels.com/photos/1426620/pexels-photo-1426620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default function Resources() {
  const userAdCount = 50; // Placeholder for user's ad count
  const carbonCostPerAd = 0.12; // Placeholder cost in kg CO2

  const [sliderValue, setSliderValue] = React.useState(userAdCount);

  const getTreeColor = (adCount: number) => {
    if (adCount <= 50) return "text-green-500";
    if (adCount <= 150) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Resources</h1>
        <p className="text-muted-foreground">Tools and knowledge to empower your business.</p>
      </div>

      <div className="space-y-8">
        {/* Sustainability Hub */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Sustainability Hub</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center text-center">
                <TreePine className={cn("h-48 w-48 transition-colors duration-500", getTreeColor(sliderValue))} />
                <h3 className="text-2xl font-bold mt-4">Your Ad Footprint</h3>
                <p className="text-muted-foreground">Based on {userAdCount} advertisements posted.</p>
                <div className="text-4xl font-bold text-primary mt-2">
                  {(userAdCount * carbonCostPerAd).toFixed(2)} kg CO₂e
                </div>
                <p className="text-sm text-muted-foreground">Total Estimated Carbon Cost</p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Carbon Cost Calculator</h3>
                <p className="text-muted-foreground">
                  Use the slider to estimate the carbon cost for a different number of advertisements. Each ad is estimated to have a footprint of {carbonCostPerAd} kg CO₂e.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Number of Advertisements:</span>
                    <span className="font-bold text-xl text-primary">{sliderValue}</span>
                  </div>
                  <Slider
                    defaultValue={[sliderValue]}
                    max={500}
                    step={1}
                    onValueChange={(value) => setSliderValue(value[0])}
                  />
                  <div className="text-center bg-muted/50 p-4 rounded-lg">
                    <p className="text-muted-foreground">Estimated Carbon Cost:</p>
                    <div className="text-3xl font-bold text-primary mt-1">
                      {(sliderValue * carbonCostPerAd).toFixed(2)} kg CO₂e
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Hub */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Education Hub</h2>
          <div className="space-y-4">
            {educationalResources.map((resource) => (
              <div key={resource.title} className="group grid grid-cols-1 md:grid-cols-3 gap-4 items-center border rounded-lg p-4 transition-all hover:shadow-lg cursor-pointer">
                <div className="md:col-span-1 aspect-video bg-muted relative rounded-md overflow-hidden">
                  <img src={resource.img} alt={resource.title} className="w-full h-full object-cover transition-transform group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {resource.type === 'video' ? (
                      <PlayCircle className="h-12 w-12 text-white" />
                    ) : (
                      <FileText className="h-12 w-12 text-white" />
                    )}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-foreground text-lg mb-1">{resource.title}</h4>
                  <p className="text-sm text-muted-foreground">{resource.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
