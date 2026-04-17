import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const directions = {
    up: { y: 50, x: 0 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    zoom: { scale: 0.85, x: 0, y: 0 },
  };

  const initial = { opacity: 0, ...directions[direction] };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.165, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  );
};
