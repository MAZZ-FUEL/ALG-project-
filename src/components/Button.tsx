import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-[2px] font-sans font-semibold text-[14px] leading-none tracking-[0.15em] uppercase transition-colors duration-400 ease-out px-8 py-4";
  
  const primaryClasses = "bg-alg-gold text-white hover:bg-alg-gold-light hover:shadow-[0_0_15px_rgba(201,168,76,0.3)]";
  const secondaryClasses = "bg-transparent border border-alg-gold text-alg-gold hover:bg-alg-gold hover:text-alg-dark";

  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
