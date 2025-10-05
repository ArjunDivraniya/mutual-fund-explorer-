import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Users } from "lucide-react";
import { CountUp } from "./CountUp";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <img 
          src={heroBg} 
          alt="Investment growth visualization" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-card/40 backdrop-blur-md border border-border/30"
          >
            <span className="text-sm font-medium text-primary">Trusted by 10,000+ Investors</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Invest Smartly with Confidence
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Start your SIP today — get higher returns with flexible plans and expert guidance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Start Investing
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8">
              Explore Funds
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/20 backdrop-blur-md border border-border/20">
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <div className="text-3xl font-bold">
                <CountUp end={50} prefix="₹" suffix="Cr+" />
              </div>
              <p className="text-sm text-muted-foreground">Total Invested</p>
            </div>

            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/20 backdrop-blur-md border border-border/20">
              <Users className="h-8 w-8 text-accent mb-2" />
              <div className="text-3xl font-bold">
                <CountUp end={10} suffix="k+" />
              </div>
              <p className="text-sm text-muted-foreground">Happy Investors</p>
            </div>

            <div className="flex flex-col items-center gap-2 p-6 rounded-xl bg-card/20 backdrop-blur-md border border-border/20">
              <Shield className="h-8 w-8 text-success mb-2" />
              <div className="text-3xl font-bold">
                <CountUp end={100} suffix="%" />
              </div>
              <p className="text-sm text-muted-foreground">Secure & Safe</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-border/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
