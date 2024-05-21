'use client';

import React, { FC, ReactNode } from 'react'
import { motion, AnimatePresence, MotionValue } from "framer-motion";

interface MyProps {
  children?: ReactNode;
  leftRight?: boolean;
}


export const NavbarAnim: FC<MyProps> = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {children}
        </motion.div>
      </AnimatePresence >
    </>
  )
}


export const TextRevealAnim: FC<MyProps> = ({ children, leftRight = false }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={leftRight ? { opacity: 0, x: '70px' } : { opacity: 0, x: '-70px' }}
          viewport={{ amount: 0.4, once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </AnimatePresence >
    </>
  )
}

export const ImageReveal: FC<MyProps> = ({ children, leftRight = false }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={leftRight ? { opacity: 0, x: '-70px' } : { opacity: 0, x: '70px' }}
          viewport={{ amount: 0.4, once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      </AnimatePresence >
    </>
  )
}