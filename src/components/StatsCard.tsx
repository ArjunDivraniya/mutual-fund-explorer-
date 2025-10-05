import { GlassCard } from "./GlassCard";
import { CountUp } from "./CountUp";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  trend?: number;
}

export const StatsCard = ({ 
  icon: Icon, 
  label, 
  value, 
  prefix = "",
  suffix = "",
  decimals = 0,
  trend
}: StatsCardProps) => {
  return (
    <GlassCard className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        {trend !== undefined && (
          <span className={`text-sm font-medium ${trend >= 0 ? 'text-success' : 'text-destructive'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold">
          <CountUp end={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </div>
    </GlassCard>
  );
};
