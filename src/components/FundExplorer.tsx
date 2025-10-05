import { useState } from "react";
import { motion } from "framer-motion";
import { FundCard } from "./FundCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter } from "lucide-react";

const FUNDS = [
  {
    id: 1,
    name: "Axis Bluechip Fund",
    category: "Large Cap",
    risk: "Low" as const,
    return1Y: 18.5,
    return3Y: 22.3,
    return5Y: 19.8,
    nav: 54.32,
    rating: 5,
    badge: "Top Performer"
  },
  {
    id: 2,
    name: "HDFC Mid-Cap Opportunities",
    category: "Mid Cap",
    risk: "Medium" as const,
    return1Y: 25.2,
    return3Y: 28.7,
    return5Y: 24.5,
    nav: 142.15,
    rating: 4,
    badge: "High Growth"
  },
  {
    id: 3,
    name: "SBI Small Cap Fund",
    category: "Small Cap",
    risk: "High" as const,
    return1Y: 32.8,
    return3Y: 35.6,
    return5Y: 28.9,
    nav: 98.47,
    rating: 4
  },
  {
    id: 4,
    name: "ICICI Prudential Balanced",
    category: "Hybrid",
    risk: "Low" as const,
    return1Y: 15.3,
    return3Y: 18.9,
    return5Y: 16.2,
    nav: 76.89,
    rating: 4,
    badge: "Stable Growth"
  },
  {
    id: 5,
    name: "Kotak Emerging Equity",
    category: "Multi Cap",
    risk: "Medium" as const,
    return1Y: 21.7,
    return3Y: 24.8,
    return5Y: 21.3,
    nav: 68.54,
    rating: 5
  },
  {
    id: 6,
    name: "Mirae Asset Tax Saver",
    category: "ELSS",
    risk: "Medium" as const,
    return1Y: 19.4,
    return3Y: 23.1,
    return5Y: 20.6,
    nav: 45.67,
    rating: 5,
    badge: "Tax Saver"
  }
];

export const FundExplorer = () => {
  const [category, setCategory] = useState<string>("all");
  const [risk, setRisk] = useState<string>("all");

  const filteredFunds = FUNDS.filter(fund => {
    if (category !== "all" && fund.category !== category) return false;
    if (risk !== "all" && fund.risk !== risk) return false;
    return true;
  });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Top Mutual Funds</h2>
          <p className="text-xl text-muted-foreground">
            Handpicked funds with proven track records
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>

          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px] bg-card/40 backdrop-blur-md border-border/30">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Large Cap">Large Cap</SelectItem>
              <SelectItem value="Mid Cap">Mid Cap</SelectItem>
              <SelectItem value="Small Cap">Small Cap</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="ELSS">ELSS</SelectItem>
            </SelectContent>
          </Select>

          <Select value={risk} onValueChange={setRisk}>
            <SelectTrigger className="w-[180px] bg-card/40 backdrop-blur-md border-border/30">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risk Levels</SelectItem>
              <SelectItem value="Low">Low Risk</SelectItem>
              <SelectItem value="Medium">Medium Risk</SelectItem>
              <SelectItem value="High">High Risk</SelectItem>
            </SelectContent>
          </Select>

          {(category !== "all" || risk !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setCategory("all");
                setRisk("all");
              }}
            >
              Clear Filters
            </Button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredFunds.map((fund, index) => (
            <motion.div
              key={fund.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FundCard {...fund} />
            </motion.div>
          ))}
        </motion.div>

        {filteredFunds.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No funds match your filters. Try adjusting your selection.</p>
          </div>
        )}
      </div>
    </section>
  );
};
