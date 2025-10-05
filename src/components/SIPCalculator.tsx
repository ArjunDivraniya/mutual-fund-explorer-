import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { CountUp } from "./CountUp";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { TrendingUp } from "lucide-react";

export const SIPCalculator = () => {
  const [amount, setAmount] = useState(5000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  const calculateReturns = () => {
    const monthlyRate = returnRate / 12 / 100;
    const months = years * 12;
    const futureValue = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const invested = amount * months;
    const returns = futureValue - invested;
    
    return {
      invested: Math.round(invested),
      returns: Math.round(returns),
      total: Math.round(futureValue)
    };
  };

  const result = calculateReturns();

  const chartData = [
    { name: "Invested Amount", value: result.invested, color: "#A78BFA" },
    { name: "Estimated Returns", value: result.returns, color: "#34D399" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">SIP Calculator</h2>
          <p className="text-xl text-muted-foreground">
            Calculate your potential returns with our interactive tool
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <GlassCard>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Monthly Investment</label>
                  <span className="text-2xl font-bold text-primary">₹{amount.toLocaleString()}</span>
                </div>
                <Slider
                  value={[amount]}
                  onValueChange={(value) => setAmount(value[0])}
                  min={500}
                  max={100000}
                  step={500}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>₹500</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Time Period</label>
                  <span className="text-2xl font-bold text-primary">{years} Years</span>
                </div>
                <Slider
                  value={[years]}
                  onValueChange={(value) => setYears(value[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Expected Return Rate</label>
                  <span className="text-2xl font-bold text-primary">{returnRate}%</span>
                </div>
                <Slider
                  value={[returnRate]}
                  onValueChange={(value) => setReturnRate(value[0])}
                  min={1}
                  max={30}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="text-success" />
                Your Investment Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
                  <span className="text-muted-foreground">Invested Amount</span>
                  <span className="text-xl font-bold">
                    ₹<CountUp end={result.invested} />
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-success/10">
                  <span className="text-muted-foreground">Estimated Returns</span>
                  <span className="text-xl font-bold text-success">
                    ₹<CountUp end={result.returns} />
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 rounded-lg bg-primary/10 border-2 border-primary/30">
                  <span className="font-medium">Total Value</span>
                  <span className="text-2xl font-bold text-primary">
                    ₹<CountUp end={result.total} />
                  </span>
                </div>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => `₹${value.toLocaleString()}`}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full mt-6">
              Start SIP Now
            </Button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
