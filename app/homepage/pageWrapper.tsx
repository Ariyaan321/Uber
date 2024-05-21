'use client';

import React, { FC, ReactNode } from 'react'
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { useInView } from 'framer-motion';

interface MyProps {
  children?: ReactNode;
}

const PageWrapper: FC<MyProps> = (props: { children: any; }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 'all', once: true }}

        >
          {props.children}
        </motion.div>
      </AnimatePresence >
    </>
  )
}

export default PageWrapper;