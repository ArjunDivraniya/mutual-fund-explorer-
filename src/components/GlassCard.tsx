import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
}

export const GlassCard = ({ children, className, hover = true, animate = true }: GlassCardProps) => {
  const CardComponent = animate ? motion.div : "div";
  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <CardComponent
      className={cn(
        "relative rounded-2xl bg-card/40 backdrop-blur-md border border-border/30 p-6 shadow-card",
        "transition-all duration-300",
        hover && "hover:bg-card/60 hover:border-border/50 hover:shadow-elevated hover:-translate-y-1",
        className
      )}
      {...animationProps}
    >
      {children}
    </CardComponent>
  );
};
