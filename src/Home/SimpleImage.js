import * as React from "react";
import { motion } from "framer-motion";
import motivation from "./motivation.png";

export default function SimpleImage() {
  return (
    <motion.img
      src={motivation}
      alt="Motivational Image"
      initial={{ opacity: 0, y: 20 }} 
      animate={{
        opacity: 1,
        y: 0,
        x: [0, -10, 10, -10, 10, -10, 10, 0],  
      }}
      transition={{
        duration: 1, 
        delay: 2,    
        x: {
          type: "spring",
          stiffness: 500,
          damping: 30,
          duration: 0.5,  
        },
      }}
      style={{
        maxWidth: "95%",
        maxHeight: "95%",
        objectFit: "contain"
      }}
    />
  );
}
