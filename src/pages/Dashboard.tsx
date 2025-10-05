import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { StatsCard } from "@/components/StatsCard";
import { GlassCard } from "@/components/GlassCard";
import { TrendingUp, Wallet, TrendingDown, PieChart } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const portfolioData = [
  { month: "Jan", value: 50000 },
  { month: "Feb", value: 55000 },
  { month: "Mar", value: 53000 },
  { month: "Apr", value: 61000 },
  { month: "May", value: 68000 },
  { month: "Jun", value: 75000 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen pb-20">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome Back, Investor</h1>
          <p className="text-xl text-muted-foreground">Here's your portfolio overview</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={Wallet}
            label="Total Invested"
            value={50000}
            prefix="₹"
            trend={12.5}
          />
          <StatsCard
            icon={TrendingUp}
            label="Current Value"
            value={75000}
            prefix="₹"
            trend={18.2}
          />
          <StatsCard
            icon={PieChart}
            label="Total Returns"
            value={25000}
            prefix="₹"
            trend={50}
          />
          <StatsCard
            icon={TrendingDown}
            label="Active SIPs"
            value={5}
          />
        </div>

        {/* Portfolio Growth Chart */}
        <GlassCard className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Portfolio Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `₹${value / 1000}k`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                  formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Portfolio Value']}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Recent Transactions */}
        <GlassCard>
          <h3 className="text-2xl font-bold mb-6">Recent Transactions</h3>
          <div className="space-y-4">
            {[
              { fund: "Axis Bluechip Fund", amount: 5000, date: "2 days ago", type: "SIP" },
              { fund: "HDFC Mid-Cap Opportunities", amount: 10000, date: "5 days ago", type: "Lumpsum" },
              { fund: "SBI Small Cap Fund", amount: 3000, date: "1 week ago", type: "SIP" },
            ].map((transaction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div>
                  <p className="font-medium">{transaction.fund}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-success">₹{transaction.amount.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{transaction.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;
