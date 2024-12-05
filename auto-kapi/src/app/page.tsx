"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const carDetailingImages = [
  "/image 2.png",
  "/image 3.png",
  "/image 4.png",
  "/image 5.png",
  "/image 6.png",
  "/image 7.png",
  "/image 8.png",
  "/image 9.png",
];

export default function Page() {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationStep(1), 2000); // Start animation after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative flex gap-8 flex-col ">
      <div>
        <motion.div
          initial={{ top: "40%", left: "50%", x: "-50%", y: "-50%" }}
          animate={{
            top: animationStep === 1 ? "2rem" : "40%",
            left: "50%",
            x: "-50%",
            y: animationStep === 1 ? 0 : "-50%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="justify-center items-center absolute"
        >
          <motion.img
            src="/logo2.png"
            alt="Logo"
            initial={{ width: "726px", height: "726px" }}
            animate={{
              width: animationStep === 1 ? "75px" : "726px",
              height: animationStep === 1 ? "75px" : "726px",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="justify-center items-center w-full h-full"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationStep === 1 ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-full flex flex-col gap-4 px-4 py-8 pt-24"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {carDetailingImages.map((src, index) => (
            <CarDetailingCard key={index} src={src} index={index} />
          ))}
        </div>

        <div className="flex flex-col gap-4 justify-center items-center mt-8">
          <div className="text-white text-lg uppercase">
            <h1>verified by:</h1>
          </div>
          <div className="flex flex-row gap-2">
            <Image
              className="w-28 h-[25px]"
              src="/retina.png"
              alt="Retina logo"
              width={112}
              height={25}
            />
            <Image
              className="w-[86px] h-[25px]"
              src="/rev.png"
              alt="Rev logo"
              width={86}
              height={25}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CarDetailingCard({ src, index }: { src: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={`Car detailing image ${index + 1}`}
        width={360}
        height={377}
        layout="responsive"
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 p-4 transition-transform duration-300 ease-in-out transform translate-y-0 hover:-translate-y-full">
        {isHovered ? (
          <h2 className="text-white hidden text-2xl sm:text-3xl md:text-4xl font-normal font-['Overlock SC']">
            Car Detailing
          </h2>
        ) : (
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl overlock-sc-regular">
            CAR DETALING
          </h2>
        )}
      </div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? 0 : "100%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="absolute inset-0 bg-black bg-opacity-75 gap-10 flex flex-col justify-end"
      >
        <div className="w-full h-full px-[30px] pt-[75px] pb-[60px] bg-black/30 backdrop-blur-[10px] flex-col justify-end items-center inline-flex">
          <div className="self-stretch h-[242px] relative">
            <div className="w-full h-full left-0 top-[90px] absolute text-white text-base play-regular leading-tight">
              Lorem ipsum dolor sit amet consectetur. Nunc eu nulla cras
              faucibus eget aliquam neque egestas. Egestas aliquet et sit
              molestie non dui sed. Nulla sit integer purus mattis aenean
              curabitur id. Sit quis mattis magnis vel suspendisse ut.
            </div>
            <div className="w-full h-full left-0 top-0 absolute text-white text-4xl overlock-sc-regular leading-[64px]">
              CAR DETALING
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
