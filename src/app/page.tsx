"use client"

import {motion} from "framer-motion"

export default function Home() {
  const showText = {
    hidden:{
      y:"100%",
      opacity:1,
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        delay:0.4,
        type:"tween",
      }
    }
  }

  const moveT = {
    show:{
      x:-128,
    }
  }
  const moveS = {
    show:{
      x:-25,
    }
  }

  return (
    <main className="h-[100svh] relative flex flex-col items-center justify-center bg-[#eaeaea]">
      <motion.div className="relative w-[500px] flex flex-col items-center justify-center overflow-hidden" whileHover="show" initial="hidden">
        <motion.h1 className="text-5xl font-bold flex cursor-pointer">
          <motion.span variants={moveT} transition={{type:"tween",ease:"easeInOut",delay:0.1}}>T</motion.span>
          <motion.span variants={moveS} transition={{type:"tween",ease:"easeInOut",delay:0.1}}>S</motion.span>
        </motion.h1>
        <motion.h1 className="absolute text-5xl font-bold" variants={showText}><span className="opacity-0">T</span>HEO<span className="opacity-0">S</span>TUDIO</motion.h1>
      </motion.div>
    </main>
  );
}
