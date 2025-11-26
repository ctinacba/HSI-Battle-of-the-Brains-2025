import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot" | "human";
};

export default function Content() {
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [chatMode, setChatMode] = React.useState<"ai" | "human">("ai");
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [isZoomed, setIsZoomed] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newUserMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setInput("");

    // Simulate response
    setTimeout(() => {
      if (chatMode === "ai") {
        const aiResponse: Message = {
          id: Date.now() + 1,
          text: "This is a simulated AI feedback on your content. Looks great!",
          sender: "bot",
        };
        setMessages((prev) => [...prev, aiResponse]);
      } else {
        const userMessages = updatedMessages.filter((m) => m.sender === "user");
        if (userMessages.length === 1) {
          const humanResponse: Message = {
            id: Date.now() + 1,
            text: "Thank you for reaching out! Our expert team is currently assisting other businesses. Please standby, and we'll be with you shortly.",
            sender: "human",
          };
          setMessages((prev) => [...prev, humanResponse]);
        }
      }
    }, 1000);
  };

  const handleChatModeChange = (mode: "ai" | "human") => {
    setChatMode(mode);
    setMessages([]); // Clear messages when switching modes
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Content Creation</h1>
        <p className="text-muted-foreground">Create and get feedback on your advertisements.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Side: File Drop */}
        <Card 
          className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-muted-foreground/50 h-96"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
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
            <div className="text-center">
              <p className="text-muted-foreground mb-2">Drop a video or photo here</p>
              <Label htmlFor="file-upload" className="cursor-pointer text-primary font-semibold">
                or browse files
              </Label>
              <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*,video/*" />
            </div>
          )}
        </Card>

        {/* Right Side: Chat Box */}
        <Card className="flex flex-col h-96">
          <CardContent className="p-6 flex-1 flex flex-col min-h-0">
            <div className="flex justify-center gap-4 mb-4">
              <Button 
                variant={chatMode === 'ai' ? 'default' : 'outline'} 
                onClick={() => handleChatModeChange('ai')}
              >
                AI Feedback
              </Button>
              <Button 
                variant={chatMode === 'human' ? 'default' : 'outline'} 
                onClick={() => handleChatModeChange('human')}
              >
                Live Human Chat
              </Button>
            </div>
            <div className="flex-1 border rounded-md p-4 mb-4 bg-muted/20 space-y-4 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Send a message to start the conversation.</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex",
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-lg px-3 py-2 max-w-xs lg:max-w-md",
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex gap-2">
              <Input 
                placeholder="Ask for feedback..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Zoomed Image Modal */}
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
