import { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [rotate, setRotate] = useState(false)

  return (
    <div className="example-container bg-rose-900 min-h-screen flex justify-center items-center">
      <motion.div animate={{rotate: rotate? 360 : 0}} initial={{}} onClick={()=>(setRotate(rotate))} className="rounded-2xl bg-blue-900 w-[300px] h-[300px]"></motion.div>
    </div>
  );
};

export default App;
