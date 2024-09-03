import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';

const Rotate = () => {
  const [rotate, setRotate] = useState(false);

  return (
    {/* ROTATE */}
      // <motion.div
      //   animate={{ rotate: rotate ? 360 : 0 }}
      //   onClick={() => setRotate(!rotate)}  // Toggle the state correctly
      //   className="rounded-2xl bg-blue-900 w-[300px] h-[300px]"
      // ></motion.div>
  )
}

export default Rotate