"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo } from "react";

interface BlobShapeProps {
  className?: string;
  variant?: "1" | "2" | "3" | "4";
  color?: string;
  colorFade?: boolean;
  animate?: boolean;
  cursorInfluence?: number;
}

const blobPathSets = {
  "1": [
    // Base smooth ellipse
    "M250,100 C300,100 345,120 380,155 C415,190 435,235 435,280 C435,325 415,370 380,405 C345,440 300,460 250,460 C200,460 155,440 120,405 C85,370 65,325 65,280 C65,235 85,190 120,155 C155,120 200,100 250,100 Z",
    // Bump on top-right
    "M250,100 C300,95 355,105 395,145 C435,185 435,235 435,280 C435,325 415,370 380,405 C345,440 300,460 250,460 C200,460 155,440 120,405 C85,370 65,325 65,280 C65,235 85,190 120,155 C155,120 200,105 250,100 Z",
    // Bump on bottom-left
    "M250,100 C300,100 345,120 380,155 C415,190 435,235 435,280 C435,325 415,370 380,405 C345,440 300,460 250,460 C200,460 145,450 105,420 C65,390 65,325 65,280 C65,235 85,190 120,155 C155,120 200,100 250,100 Z",
    // Two bumps: top-right and bottom-left
    "M250,100 C300,95 355,105 395,145 C435,185 435,235 435,280 C435,325 415,370 380,405 C345,440 300,460 250,460 C200,460 145,450 105,420 C65,390 65,325 65,280 C65,235 85,190 120,155 C155,120 200,105 250,100 Z",
    // Bump on right side
    "M250,100 C300,100 345,120 380,155 C415,190 450,225 450,280 C450,335 415,370 380,405 C345,440 300,460 250,460 C200,460 155,440 120,405 C85,370 65,325 65,280 C65,235 85,190 120,155 C155,120 200,100 250,100 Z",
    // Bump on left side
    "M250,100 C300,100 345,120 380,155 C415,190 435,235 435,280 C435,325 415,370 380,405 C345,440 300,460 250,460 C200,460 155,440 120,405 C85,370 50,335 50,280 C50,225 85,190 120,155 C155,120 200,100 250,100 Z",
  ],
  "2": [
    // Base smooth ellipse
    "M250,105 C300,105 345,125 380,160 C415,195 430,240 430,285 C430,330 415,375 380,410 C345,445 300,460 250,460 C200,460 155,445 120,410 C85,375 70,330 70,285 C70,240 85,195 120,160 C155,125 200,105 250,105 Z",
    // Bump on top
    "M250,90 C305,85 345,125 380,160 C415,195 430,240 430,285 C430,330 415,375 380,410 C345,445 300,460 250,460 C200,460 155,445 120,410 C85,375 70,330 70,285 C70,240 85,195 120,160 C155,125 195,95 250,90 Z",
    // Bump on bottom
    "M250,105 C300,105 345,125 380,160 C415,195 430,240 430,285 C430,330 415,375 380,410 C345,445 305,475 250,475 C195,475 155,445 120,410 C85,375 70,330 70,285 C70,240 85,195 120,160 C155,125 200,105 250,105 Z",
    // Two bumps: top and right
    "M250,90 C305,85 345,125 380,160 C415,195 445,230 445,285 C445,340 415,375 380,410 C345,445 300,460 250,460 C200,460 155,445 120,410 C85,375 70,330 70,285 C70,240 85,195 120,160 C155,125 195,95 250,90 Z",
    // Bump on bottom-right
    "M250,105 C300,105 345,125 380,160 C415,195 430,240 430,285 C430,330 425,385 390,420 C355,455 300,460 250,460 C200,460 155,445 120,410 C85,375 70,330 70,285 C70,240 85,195 120,160 C155,125 200,105 250,105 Z",
    // Bump on top-left
    "M250,105 C300,105 345,125 380,160 C415,195 430,240 430,285 C430,330 415,375 380,410 C345,445 300,460 250,460 C200,460 155,445 120,410 C85,375 70,330 70,285 C70,240 75,185 110,150 C145,115 200,105 250,105 Z",
  ],
  "3": [
    // Base smooth ellipse
    "M250,105 C300,105 345,125 380,160 C415,195 430,240 430,290 C430,340 415,385 380,420 C345,455 300,470 250,470 C200,470 155,455 120,420 C85,385 70,340 70,290 C70,240 85,195 120,160 C155,125 200,105 250,105 Z",
    // Bump top-right corner
    "M250,105 C305,100 360,115 395,150 C430,185 430,240 430,290 C430,340 415,385 380,420 C345,455 300,470 250,470 C200,470 155,455 120,420 C85,385 70,340 70,290 C70,240 85,195 120,160 C155,125 200,110 250,105 Z",
    // Bump bottom-right corner
    "M250,105 C300,105 345,125 380,160 C415,195 430,240 430,290 C430,340 425,395 390,430 C355,465 300,470 250,470 C200,470 155,455 120,420 C85,385 70,340 70,290 C70,240 85,195 120,160 C155,125 200,105 250,105 Z",
    // Two bumps: top-right and bottom-left
    "M250,105 C305,100 360,115 395,150 C430,185 430,240 430,290 C430,340 415,385 380,420 C345,455 300,470 250,470 C200,470 145,465 110,430 C75,395 70,340 70,290 C70,240 85,195 120,160 C155,125 200,110 250,105 Z",
    // Bump on left
    "M250,105 C300,105 345,125 380,160 C415,195 430,240 430,290 C430,340 415,385 380,420 C345,455 300,470 250,470 C200,470 155,455 120,420 C85,385 55,350 55,290 C55,230 85,195 120,160 C155,125 200,105 250,105 Z",
    // Bump on top
    "M250,90 C305,85 345,125 380,160 C415,195 430,240 430,290 C430,340 415,385 380,420 C345,455 300,470 250,470 C200,470 155,455 120,420 C85,385 70,340 70,290 C70,240 85,195 120,160 C155,125 195,95 250,90 Z",
  ],
  "4": [
    // Base smooth ellipse
    "M250,110 C300,110 345,130 380,165 C415,200 430,250 430,300 C430,350 415,395 380,430 C345,465 300,480 250,480 C200,480 155,465 120,430 C85,395 70,350 70,300 C70,250 85,200 120,165 C155,130 200,110 250,110 Z",
    // Bump on right
    "M250,110 C300,110 345,130 380,165 C415,200 450,240 450,300 C450,360 415,395 380,430 C345,465 300,480 250,480 C200,480 155,465 120,430 C85,395 70,350 70,300 C70,250 85,200 120,165 C155,130 200,110 250,110 Z",
    // Bump on bottom
    "M250,110 C300,110 345,130 380,165 C415,200 430,250 430,300 C430,350 415,395 380,430 C345,465 305,495 250,495 C195,495 155,465 120,430 C85,395 70,350 70,300 C70,250 85,200 120,165 C155,130 200,110 250,110 Z",
    // Two bumps: right and bottom
    "M250,110 C300,110 345,130 380,165 C415,200 450,240 450,300 C450,360 415,395 380,430 C345,465 305,495 250,495 C195,495 155,465 120,430 C85,395 70,350 70,300 C70,250 85,200 120,165 C155,130 200,110 250,110 Z",
    // Bump on top-left
    "M250,110 C300,110 345,130 380,165 C415,200 430,250 430,300 C430,350 415,395 380,430 C345,465 300,480 250,480 C200,480 155,465 120,430 C85,395 70,350 70,300 C70,250 75,190 110,155 C145,120 200,110 250,110 Z",
    // Bump on bottom-left
    "M250,110 C300,110 345,130 380,165 C415,200 430,250 430,300 C430,350 415,395 380,430 C345,465 300,480 250,480 C200,480 145,475 110,440 C75,405 70,350 70,300 C70,250 85,200 120,165 C155,130 200,110 250,110 Z",
  ],
};

const colorSets = {
  blue: ["#5B7FA3", "#7A9DBF", "#4A6B8A", "#6B8FB3"],
  orange: ["#F5A623", "#FFB84D", "#E09000", "#FFCF80"],
  white: ["rgba(255,255,255,0.9)", "rgba(255,255,255,0.7)", "rgba(255,255,255,0.95)", "rgba(255,255,255,0.8)"],
};

export default function BlobShape({
  className = "",
  variant = "1",
  color = "var(--stowlt-blue)",
  colorFade = false,
  animate = true,
  cursorInfluence = 15,
}: BlobShapeProps) {
  const basePaths = blobPathSets[variant];
  
  const randomConfig = useMemo(() => ({
    startIndex: Math.floor(Math.random() * basePaths.length),
    duration: 12 + Math.random() * 10,
    colorDuration: 15 + Math.random() * 10,
    scaleRange: [1, 1.08 + Math.random() * 0.07, 0.92 + Math.random() * 0.05, 1.05 + Math.random() * 0.06, 1],
    rotateRange: [0, 8 + Math.random() * 10, -8 - Math.random() * 8, 5 + Math.random() * 6, 0],
  }), [basePaths.length]);

  const shuffledPaths = useMemo(() => {
    const shuffled = [...basePaths];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    shuffled.push(shuffled[0]);
    return shuffled;
  }, [basePaths]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 50 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const getColorSet = () => {
    if (color.includes("orange") || color === "var(--stowlt-orange)") {
      return colorSets.orange;
    }
    if (color === "white" || color.includes("255,255,255")) {
      return colorSets.white;
    }
    return colorSets.blue;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(xPercent * cursorInfluence);
      mouseY.set(yPercent * cursorInfluence);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, cursorInfluence]);

  return (
    <motion.svg
      viewBox="0 0 500 500"
      className={className}
      animate={
        animate
          ? {
              scale: randomConfig.scaleRange,
              rotate: randomConfig.rotateRange,
            }
          : undefined
      }
      transition={{
        duration: randomConfig.duration + 5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop",
      }}
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.path
        animate={
          animate
            ? {
                d: shuffledPaths,
                fill: colorFade ? getColorSet() : undefined,
              }
            : undefined
        }
        initial={{ fill: colorFade ? getColorSet()[0] : color }}
        transition={{
          d: {
            duration: randomConfig.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          },
          fill: {
            duration: randomConfig.colorDuration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          },
        }}
        style={!colorFade ? { fill: color } : undefined}
      />
    </motion.svg>
  );
}
