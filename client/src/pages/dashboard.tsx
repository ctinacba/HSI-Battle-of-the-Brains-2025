import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Lightbulb, Gauge, User } from "lucide-react";

// This is now a layout component that wraps the actual page content.
export default function DashboardLayout({ children }) {
  const [location, navigate] = useLocation();
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const pathParts = location.split('/');
    const section = pathParts[2] || 'overview';
    setActiveSection(section);
  }, [location]);

  return (
    <div className="page-transition">
      {/* Dashboard Navigation */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 py-4 overflow-x-auto">

            <Button
              variant={activeSection === 'overview' ? 'default' : 'ghost'}
              onClick={() => navigate('/dashboard/overview')}
              className="whitespace-nowrap"
              data-testid="nav-overview"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Overview
            </Button>

            <Button
              variant={activeSection === 'analytics' ? 'default' : 'ghost'}
              onClick={() => navigate('/dashboard/analytics')}
              className="whitespace-nowrap"
              data-testid="nav-analytics"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Analytics
            </Button>

            <Button
              variant={activeSection === 'content' ? 'default' : 'ghost'}
              onClick={() => navigate('/dashboard/content')}
              className="whitespace-nowrap"
              data-testid="nav-content"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Content Creation
            </Button>

            <Button
              variant={activeSection === 'manage' ? 'default' : 'ghost'}
              onClick={() => navigate('/dashboard/manage')}
              className="whitespace-nowrap"
              data-testid="nav-manage"
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              Manage
            </Button>

            <Button
              variant={activeSection === 'resources' ? 'default' : 'ghost'}
              onClick={() => navigate('/dashboard/resources')}
              className="whitespace-nowrap"
              data-testid="nav-performance"
            >
              <Gauge className="mr-2 h-4 w-4" />
              Resources
            </Button>

            <Button
              variant={activeSection === 'account' ? 'default' : 'ghost'}
              onClick={() => navigate('/dashboard/account')}
              className="whitespace-nowrap"
              data-testid="nav-account"
            >
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>

          </div>
        </div>
      </div>

      {/* The actual page content (e.g., Overview, Analytics) is rendered here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
