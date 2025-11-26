import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Info } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  inquiryType: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        inquiryType: '',
        message: ''
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.inquiryType || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-20 bg-background page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 page-transition">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6" data-testid="contact-title">
            Get in Touch
          </h1>
          <p className="text-2xl text-muted-foreground font-light">
            Enter the flow. We're here for you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="rounded-2xl shadow-lg border border-border page-transition">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6"> Reach Out to Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2">First Name*</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John"
                      required
                      data-testid="input-firstname"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2">Last Name*</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe"
                      required
                      data-testid="input-lastname"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@company.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-foreground mb-2">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your Company"
                    data-testid="input-company"
                  />
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-foreground mb-2">How can we help?*</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)} required>
                    <SelectTrigger data-testid="select-inquiry-type">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Connect with Our Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">Message*</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    placeholder="Tell us more about your needs..."
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-accent transition-all transform hover:scale-105 font-semibold text-lg shadow-lg h-12"
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 page-transition">
            <Card className="rounded-2xl shadow-lg border border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-email">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <a href="mailto:communication@fluidreach.com" className="text-muted-foreground hover:text-primary transition-colors">
                        communication@fluidreach.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-phone">
                    <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone</div>
                      <a href="tel:+1-800-912-1852" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (800) 912 1852
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-address">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Address</div>
                      <p className="text-muted-foreground">1 Camino Santa Maria St<br />San Antonio, TX 78228</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Business Hours</h3>
                <div className="space-y-3" data-testid="business-hours">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold text-foreground">9:00 AM - 6:00 PM CST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 4:00 PM CST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-semibold text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Follow Us</h3>
                <div className="flex space-x-4" data-testid="social-links">
                  <a href="#" className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" data-testid="social-twitter">
                    <FaTwitter size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" data-testid="social-linkedin">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" data-testid="social-github">
                    <FaGithub size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" data-testid="social-youtube">
                    <FaYoutube size={24} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
