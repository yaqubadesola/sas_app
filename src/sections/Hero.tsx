"use client"
import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import {motion, useScroll, useTransform } from 'framer-motion';
import {useRef} from 'react';
export const Hero = () => {
  const heroRef = useRef(null)
  const  {scrollYProgress} = useScroll( {
    target:heroRef,
    offset:["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);
  // useMotionValueEvent(scrollYProgress, "change", latestValue => console.log(latestValue))
  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#182EC2,#EAEEFE_66%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              Version 2.0 is here
            </div>
            <div className="text-5xl md:text-7xl font-bold tracking-tighter  bg-gradient-to-b">
              Pathway to productivity
            </div>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app design to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog Image"
              className="md:h-full  md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY:[-30,30],
              }}
              transition={{
                repeat:Infinity,
                repeatType:"mirror",
                duration:3,
                ease:"easeInOut"
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="Cylinder Image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={ {
                translateY:translateY,
                rotate:30
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="Noodle Image"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={ {
                translateY:translateY,
                rotate:30
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
