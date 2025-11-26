import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Instagram, Music, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Manage() {
  const [dates, setDates] = React.useState<Date[] | undefined>();
  const [socialMedia, setSocialMedia] = React.useState<string[]>([]);
  const [postContent, setPostContent] = React.useState<string>("");
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [isZoomed, setIsZoomed] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (dates && dates.length > 0) {
      const timer = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [dates]);

  const handleSocialMediaChange = (platform: string) => {
    setSocialMedia(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform) 
        : [...prev, platform]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleFullscreen = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if ((videoElement as any).webkitRequestFullscreen) { /* Safari */
      (videoElement as any).webkitRequestFullscreen();
    } else if ((videoElement as any).msRequestFullscreen) { /* IE11 */
      (videoElement as any).msRequestFullscreen();
    }
  };

  const socialMediaOptions = ["Twitter", "Facebook", "Instagram", "LinkedIn", "TikTok", "Youtube", "Google", "Email Chain"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2" data-testid="insights-title">Management</h1>
        <p className="text-muted-foreground">Control where and when you post content.</p>
        <p className="text-muted-foreground mt-4">
          To get started, select one or more dates on the calendar below. A form will appear on the right where you can craft your post, select the social media channels, and schedule it.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <Card data-testid="engagement-chart">
          <CardContent className="p-6 grid md:grid-cols-2 gap-6">
            <Calendar
              mode="multiple"
              selected={dates}
              onSelect={setDates}
              className="rounded-md border"
            />
            {dates && dates.length > 0 && (
              <div className={cn(
                "space-y-4 transition-all duration-500 ease-out",
                isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                <h3 className="text-lg font-semibold text-foreground">Schedule a Post for {dates.length} day(s)</h3>
                <div className="space-y-2">
                  <Label>Select Social Media</Label>
                  <div className="flex flex-wrap gap-4">
                    {socialMediaOptions.map((platform) => (
                      <div className="flex items-center space-x-2" key={platform}>
                        <Checkbox 
                          id={platform.toLowerCase().replace(/\s/g, '-')}
                          onCheckedChange={() => handleSocialMediaChange(platform.toLowerCase())}
                          checked={socialMedia.includes(platform.toLowerCase())}
                        />
                        <Label htmlFor={platform.toLowerCase().replace(/\s/g, '-')}>{platform}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Textarea 
                  placeholder="Caption" 
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)} 
                />
                {postContent.length > 0 && (
                  <div className="space-y-2 transition-all duration-300 ease-out">
                    <Label>Suggested Hashtags</Label>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="rounded-full">#marketing</Button>
                      <Button variant="outline" size="sm" className="rounded-full">#smallbiz</Button>
                      <Button variant="outline" size="sm" className="rounded-full">#digital</Button>
                    </div>
                  </div>
                )}
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="picture">Advertisement (Photo/Video)</Label>
                  <Input id="picture" type="file" onChange={handleFileChange} accept="image/*,video/*" />
                </div>
                <Button>Schedule Post</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {dates && dates.length > 0 && (
          <div className={cn(
            "grid md:grid-cols-2 gap-6 transition-all duration-500 ease-out",
            isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{transitionDelay: '100ms'}}>
            <Card data-testid="preview-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Preview</h3>
                <div className="h-48 bg-muted rounded-md flex items-center justify-center">
                  {preview ? (
                    file?.type.startsWith('video/') ? (
                      <video 
                        ref={videoRef}
                        src={preview} 
                        controls 
                        className="max-h-full w-auto cursor-pointer"
                        onClick={handleFullscreen}
                      />
                    ) : (
                      <img 
                        src={preview} 
                        alt="Preview" 
                        className="max-h-full w-auto cursor-zoom-in"
                        onClick={() => setIsZoomed(true)} 
                      />
                    )
                  ) : (
                    <p className="text-muted-foreground">Select a file to see a preview</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card data-testid="top-social-media">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Top Performing Social Media</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center"><Instagram className="h-5 w-5 mr-3 text-pink-500" /><span>Instagram</span></div>
                      <span className="font-semibold text-green-500">92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width: "92%"}}></div></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center"><Music className="h-5 w-5 mr-3" /><span>TikTok</span></div>
                      <span className="font-semibold text-green-500">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width: "85%"}}></div></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center"><Facebook className="h-5 w-5 mr-3 text-blue-600" /><span>Facebook</span></div>
                      <span className="font-semibold text-green-500">78%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{width: "78%"}}></div></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {isZoomed && preview && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <img src={preview} alt="Zoomed Preview" className="max-w-[90vw] max-h-[90vh]" />
        </div>
      )}
    </div>
  );
}
