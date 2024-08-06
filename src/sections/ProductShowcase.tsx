"use client"
import productImage from "@/assets/product-image.png";
import pyramidImg from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import {motion, useScroll, useTransform } from 'framer-motion';
import {useRef} from 'react';
export const ProductShowcase = () => {
  const productRef = useRef(null)
  const  {scrollYProgress} = useScroll( {
    target:productRef,
    offset:["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0,1], [450, -450]);

  return (
    <section ref={productRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            Saas website in just minutes wuth tis template.
          </p>{" "}
        </div>
        <div className="relative">
          <Image 
            src={productImage} 
            alt="Product Image" 
            className="mt-10" 
          />

          <motion.img
            src={pyramidImg.src}
            alt="Pyramid Image "
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY
            }}
          />

          <motion.img
            src={tubeImage.src}
            alt="Tube Image "
            width={248}
            height={248}
            className="hidden md:block absolute -left-36 -bottom-24"
            style={{
              translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};
