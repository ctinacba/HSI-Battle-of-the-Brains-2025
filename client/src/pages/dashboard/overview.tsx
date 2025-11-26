import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, ShoppingCart, Clock } from "lucide-react";

interface OverviewProps {
  user: any;
}

export default function Overview({ user }: OverviewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2" data-testid="welcome-message">
          Welcome back, Ebay_Seller
        </h1>
        <p className="text-muted-foreground">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card data-testid="revenue-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                <DollarSign className="text-white" size={24} />
              </div>
              <span className="text-green-600 text-sm font-medium flex items-center">
                <span className="mr-1">↑</span>12.5%
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">$45,231</div>
            <div className="text-sm text-muted-foreground">Total Revenue</div>
          </CardContent>
        </Card>

        <Card data-testid="users-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <span className="text-green-600 text-sm font-medium flex items-center">
                <span className="mr-1">↑</span>8.2%
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">2,847</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </CardContent>
        </Card>

        <Card data-testid="conversions-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                <ShoppingCart className="text-white" size={24} />
              </div>
              <span className="text-green-600 text-sm font-medium flex items-center">
                <span className="mr-1">↑</span>15.3%
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">573</div>
            <div className="text-sm text-muted-foreground">Conversions</div>
          </CardContent>
        </Card>

        <Card data-testid="session-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <span className="text-red-600 text-sm font-medium flex items-center">
                <span className="mr-1">↓</span>3.1%
              </span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">2m 34s</div>
            <div className="text-sm text-muted-foreground">Avg. Session</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid md:grid-cols-1 gap-6">
        <Card data-testid="revenue-chart">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Revenue Overview</h3>
              <select className="text-sm border border-input rounded-md px-3 py-1 focus:ring-2 focus:ring-ring bg-background">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Revenue Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
