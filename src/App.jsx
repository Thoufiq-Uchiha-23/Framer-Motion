import { useState } from "react";
import { motion } from "framer-motion";
import Rotate from "./Rotate";
import Gestures from "./Gestures";

const App = () => {
  const [move, setMove] = useState(false);

  return (
    <div className="example-container bg-rose-900 min-h-screen flex justify-center items-center">
      {/* <Rotate />
      <Move />
      <Gestures /> */}
      {/* ROTATE */}
      {/* <motion.div
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => setRotate(!rotate)}  // Toggle the state correctly
        className="rounded-2xl bg-blue-900 w-[300px] h-[300px]"
      ></motion.div> */}
      {/* MOVE */}
      {/* <motion.div
        animate={{ x: move ? 200 : -200 }}
        onClick={() => setMove(!move)}
        // transition={{delay: 1}} // to delay for some seconds and animate
        // transition={{type: "tween", duration: 1}} // for smooth and slow speed
        transition={{type: "spring", bounce: 0.5}} // for smooth and bounce and spring effect
        className="rounded-2xl bg-blue-900 w-[300px] h-[300px]"
      ></motion.div> */}
      {/* GESTURES */}
      {/* <motion.div whileHover={{scale: 2}} className="rounded-2xl bg-blue-900 w-[300px] h-[300px] flex justify-center items-center">While we Hover</motion.div> */}
      {/* <motion.div drag whileDrag={{scale: 1.5}} className="rounded-2xl bg-blue-900 w-[300px] h-[300px] flex justify-center items-center">While we Drag</motion.div> */}
      <motion.div animate={{rotate: [0, 200, 200, 0], x: [0, 200, 200, 0, -200, -200, 0]}} transition={{repeat: Infinity, duration: 1}} className="rounded-[30px] bg-blue-900 w-[300px] h-[300px] flex justify-center items-center">Adding Keyframes</motion.div>
    </div>
  );
};

export default App;
