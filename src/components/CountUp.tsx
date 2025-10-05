import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUp = ({ 
  end, 
  duration = 2, 
  prefix = "", 
  suffix = "", 
  decimals = 0,
  className = ""
}: CountUpProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    const controls = animate(count, end, { duration });
    return controls.stop;
  }, [end, duration, count]);

  return <motion.span className={className}>{rounded}</motion.span>;
};
