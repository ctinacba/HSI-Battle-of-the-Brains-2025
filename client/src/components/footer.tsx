import { Link } from "wouter";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import companyLogo from "@assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <img src={companyLogo} alt={"FluidReach Logo"}/>
              </div>
              <span className="text-xl font-semibold text-foreground">FluidReach</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Precision Marketing Fluidly Delivered.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/solution" data-testid="footer-features">
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Features</span>
                </Link>
              </li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-pricing">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-security">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-roadmap">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mission" data-testid="footer-mission">
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/stories" data-testid="footer-stories">
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Success Stories</span>
                </Link>
              </li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-careers">Careers</a></li>
              <li>
                <Link href="/contact" data-testid="footer-contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-privacy">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-terms">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-cookies">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm" data-testid="footer-compliance">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 FluidReach. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-linkedin">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-github">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-youtube">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
