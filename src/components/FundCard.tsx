import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Star } from "lucide-react";

interface FundCardProps {
  name: string;
  category: string;
  risk: "Low" | "Medium" | "High";
  return1Y: number;
  return3Y: number;
  return5Y: number;
  nav: number;
  rating: number;
  badge?: string;
}

export const FundCard = ({
  name,
  category,
  risk,
  return1Y,
  return3Y,
  return5Y,
  nav,
  rating,
  badge
}: FundCardProps) => {
  const riskColors = {
    Low: "text-success",
    Medium: "text-warning",
    High: "text-destructive"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <GlassCard hover={false} className="h-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">{name}</h3>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
            {badge && (
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                {badge}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Shield className={`h-4 w-4 ${riskColors[risk]}`} />
              <span className={`text-sm font-medium ${riskColors[risk]}`}>{risk} Risk</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? 'fill-warning text-warning' : 'text-muted'}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/30">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">1Y Return</p>
              <p className="text-lg font-bold text-success flex items-center justify-center gap-1">
                <TrendingUp className="h-4 w-4" />
                {return1Y}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">3Y Return</p>
              <p className="text-lg font-bold text-success">{return3Y}%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">5Y Return</p>
              <p className="text-lg font-bold text-success">{return5Y}%</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Current NAV</p>
              <p className="text-xl font-bold">₹{nav.toFixed(2)}</p>
            </div>
            <Button variant="hero" size="sm">
              Invest Now
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
