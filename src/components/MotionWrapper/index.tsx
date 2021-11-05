import React from 'react';
import { motion } from 'framer-motion';

export const MotionWrapper: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
