
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className,
  delay = 0,
  staggerDelay = 0.03
}) => {
  const words = text.split(" ");
  
  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <span className="inline-block overflow-hidden">
            <span 
              className="inline-block animate-fade-in-up" 
              style={{ 
                animationDelay: `${delay + wordIndex * staggerDelay}s`,
                animationFillMode: "both" 
              }}
            >
              {word}
            </span>
          </span>
          {wordIndex !== words.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
};

export default AnimatedText;
