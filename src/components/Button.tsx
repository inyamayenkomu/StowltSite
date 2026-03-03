"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-stowlt-orange text-white hover:bg-stowlt-orange-dark shadow-lg shadow-stowlt-orange/25 hover:shadow-stowlt-orange/40",
    secondary:
      "bg-stowlt-blue text-white hover:bg-stowlt-blue-dark shadow-lg shadow-stowlt-blue/25",
    outline:
      "border-2 border-stowlt-orange text-stowlt-orange hover:bg-stowlt-orange hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-2xl",
    md: "px-6 py-3 text-base rounded-3xl",
    lg: "px-8 py-4 text-lg rounded-3xl",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = motion.create("button");
  const MotionLink = motion.create(Link);

  if (href) {
    return (
      <MotionLink
        href={href}
        className={combinedStyles}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
