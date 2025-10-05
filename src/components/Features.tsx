import { motion } from "framer-motion";
import { Shield, TrendingUp, Smartphone, HeadphonesIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";

const FEATURES = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-grade 256-bit encryption keeps your investments and data completely safe"
  },
  {
    icon: TrendingUp,
    title: "High Returns",
    description: "Access to top-performing mutual funds with proven track records of growth"
  },
  {
    icon: Smartphone,
    title: "Easy to Use",
    description: "Intuitive platform that makes investing simple, even for beginners"
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "24/7 dedicated support from certified financial advisors"
  }
];

export const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of security, simplicity, and superior returns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="text-center h-full">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-primary mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
