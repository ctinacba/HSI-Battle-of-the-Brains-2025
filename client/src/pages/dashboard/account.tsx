import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useRef, ChangeEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import ebayLogo from "@/assets/ebay.png";

export default function Account({ user, setUser }: { user: any, setUser: any }) {
  const { toast } = useToast();
  const [username, setUsername] = useState("Ebay_Seller");
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || ebayLogo);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch("/api/account/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, profilePicture }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        const message = responseData.message || "Failed to update profile";
        throw new Error(message);
      }

      setUser(responseData.user);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        console.error("Error updating profile:", error);
        toast({
            title: "Error",
            description: errorMessage,
            variant: "destructive",
        });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Account Information</h1>
        <p className="text-muted-foreground">Update your profile and connect your social media accounts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={profilePicture} alt={username} />
                <AvatarFallback>{username?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold text-foreground">{username}</h3>
              <p className="text-sm text-muted-foreground mb-4">{user?.email}</p>
              <Input
                id="picture"
                type="file"
                ref={fileInputRef}
                onChange={handlePictureChange}
                className="hidden"
              />
              <Button onClick={() => fileInputRef.current?.click()}>Change Picture</Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Connect Social Media</h3>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input id="twitter" placeholder="https://twitter.com/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input id="facebook" placeholder="https://facebook.com/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input id="instagram" placeholder="https://instagram.com/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tiktok">TikTok</Label>
                <Input id="tiktok" placeholder="https://tiktok.com/@username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="youtube">YouTube</Label>
                <Input id="youtube" placeholder="https://youtube.com/c/username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="google">Google</Label>
                <Input id="google" placeholder="your-email@gmail.com" />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSaveChanges}>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
