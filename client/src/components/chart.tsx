import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ChartProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'green' | 'red';
}

export function StatCard({ title, value, change, trend, description, color = 'primary' }: ChartProps) {
  const colorClasses = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground',
    green: 'bg-green-600 text-white',
    red: 'bg-red-600 text-white'
  };

  return (
    <Card data-testid={`stat-card-${title.toLowerCase().replace(' ', '-')}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 ${colorClasses[color]} rounded-lg flex items-center justify-center`}>
            {trend === 'up' ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
          </div>
          <span className={`text-sm font-medium flex items-center ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? <TrendingUp className="mr-1" size={16} /> : <TrendingDown className="mr-1" size={16} />}
            {change}
          </span>
        </div>
        <div className="text-2xl font-bold text-foreground mb-1" data-testid={`value-${title.toLowerCase().replace(' ', '-')}`}>
          {value}
        </div>
        <div className="text-sm text-muted-foreground">{description || title}</div>
      </CardContent>
    </Card>
  );
}

interface ProgressBarProps {
  label: string;
  value: number;
  color?: string;
}

export function ProgressBar({ label, value, color = 'bg-primary' }: ProgressBarProps) {
  return (
    <div className="space-y-2" data-testid={`progress-${label.toLowerCase().replace(' ', '-')}`}>
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className={`h-2 rounded-full ${color}`} 
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export function MetricCard({ title, value, description, trend = 'neutral', trendValue }: MetricCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card data-testid={`metric-card-${title.toLowerCase().replace(' ', '-')}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-foreground">{title}</h3>
          {trendValue && (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTrendColor()} bg-muted`}>
              {trendValue}
            </span>
          )}
        </div>
        <div className="text-3xl font-bold text-foreground mb-2" data-testid={`metric-value-${title.toLowerCase().replace(' ', '-')}`}>
          {value}
        </div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </CardContent>
    </Card>
  );
}
