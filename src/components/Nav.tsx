"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Nav() {
  const listOl = useRef<HTMLOListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    gsap.fromTo(
      listOl.current,
      { y: -100 }, // Initial state

      {
        y: 0,
        duration: 1.7,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div className="flex justify-between  items-center gap-4 p-5   ">
      <div className="bg-[#7878781a] p-3  rounded-full flex items-center justify-center z-50 mb-3  ">
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-4b5b0323=""
        >
          <path
            d="M6.20742 9.02441H0.12651C0.0566404 9.02441 0 9.08105 0 9.15092V9.85095C0 9.92081 0.0566404 9.97745 0.12651 9.97745H6.20742C6.27728 9.97745 6.33392 9.92081 6.33392 9.85095V9.15092C6.33392 9.08105 6.27728 9.02441 6.20742 9.02441Z"
            fill="currentColor"
          ></path>
          <path
            d="M18.8754 9.02441H12.7945C12.7246 9.02441 12.668 9.08105 12.668 9.15092V9.85095C12.668 9.92081 12.7246 9.97745 12.7945 9.97745H18.8754C18.9453 9.97745 19.0019 9.92081 19.0019 9.85095V9.15092C19.0019 9.08105 18.9453 9.02441 18.8754 9.02441Z"
            fill="currentColor"
          ></path>
          <path
            d="M9.02441 0.12657V6.20747C9.02441 6.27734 9.08105 6.33398 9.15092 6.33398H9.85094C9.92081 6.33398 9.97745 6.27734 9.97745 6.20747V0.12657C9.97745 0.0567002 9.92081 5.96046e-05 9.85094 5.96046e-05H9.15092C9.08105 5.96046e-05 9.02441 0.0567002 9.02441 0.12657Z"
            fill="currentColor"
          ></path>
          <path
            d="M9.0332 12.8028V18.8837C9.0332 18.9536 9.08984 19.0103 9.15971 19.0103H9.85974C9.9296 19.0103 9.98624 18.9536 9.98624 18.8837V12.8028C9.98624 12.733 9.9296 12.6763 9.85974 12.6763H9.15971C9.08984 12.6763 9.0332 12.733 9.0332 12.8028Z"
            fill="currentColor"
          ></path>
          <path
            d="M8.0754 7.40936C8.07773 7.40703 8.07772 7.40325 8.07539 7.40093L3.17103 2.50499C3.12043 2.45439 3.04452 2.45439 2.99392 2.50499L2.50475 2.99417C2.45415 3.04477 2.45415 3.12068 2.50475 3.17128L7.90425 8.57078C7.98157 8.6481 8.07962 8.72957 8.07962 8.83892V10.1715C8.07962 10.2305 8.05431 10.2811 8.02058 10.3233L2.50475 15.8391C2.45415 15.8897 2.45415 15.9656 2.50475 16.0162L2.99392 16.5054C3.04452 16.556 3.12043 16.556 3.17103 16.5054L8.07118 11.6053L8.3495 11.3269C8.77964 10.8968 9.02422 10.3149 9.02422 9.70762V9.31122C9.02422 8.70397 8.77964 8.12203 8.3495 7.6919L8.0754 7.41779C8.07307 7.41546 8.07307 7.41169 8.0754 7.40936Z"
            fill="currentColor"
          ></path>
          <path
            d="M10.99 8.68324C10.99 8.68467 10.9917 8.68538 10.9927 8.68437L16.5058 3.17128C16.5564 3.12067 16.5564 3.04477 16.5058 2.99417L16.0166 2.50499C15.966 2.45439 15.8901 2.45439 15.8395 2.50499L10.9394 7.40514L10.661 7.68346C10.2309 8.1136 9.98633 8.69554 9.98633 9.30279V9.69918C9.98633 10.3064 10.2309 10.8884 10.661 11.3185L10.9394 11.5968L15.8395 16.497C15.8901 16.5476 15.966 16.5476 16.0166 16.497L16.5058 16.0078C16.5564 15.9572 16.5564 15.8813 16.5058 15.8307L11.1063 10.4312C11.029 10.3539 10.9309 10.2724 10.9309 10.1631V8.83048C10.9309 8.77311 10.9548 8.7237 10.9871 8.68226C10.9881 8.68106 10.99 8.68172 10.99 8.68324Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div
        className={`font-neue font-thin w-full inset-0  md:bg-transparent md:static md:flex md:items-center md:font-satoshi md:justify-center  absolute z-40 transition-all 
  duration-700  ease-in-out  block transform ${
    isOpen
      ? "translate-y-0 opacity-100 pointer-events-auto"
      : " max-md:-translate-y-72 max-md:opacity-0 max-md:pointer-events-none"
  } backdrop-blur-2xl bg-white max-md:h-screen`}
      >
        <div className="max-md:bg-[#7878781a] backdrop-blur-2xl ">
          <div className="flex items-center justify-center w-full md:hidden p-5">
            <h1 className="text-center w-full text-lg">Navigation</h1>

            <button
              className="text-xl font-light text-right cursor-pointer p-1"
              onClick={toggleDropdown}
            >
              <div
                className="transform rotate-45 h-[1.4px] w-6 bg-black"
                onClick={toggleDropdown}
              ></div>
              <div
                className="transform -rotate-45 h-[1.4px] w-6 bg-black"
                onClick={toggleDropdown}
              ></div>
            </button>
          </div>
          <ol
            className="group max-md:border-t-[1px] max-md:mt-5 max-md:pt-8 custom-list text-xl max-md:space-y-3 flex gap-2 flex-col md:flex-row md:text-[15px] md:bg-[#7878781a] md:rounded-xl md:py-2 md:px-5 md:gap-12 p-5  "
            ref={listOl}
          >
            <li className="cursor-pointer max-md:pl-[2em] group-hover:text-gray-400 hover:text-black  transition-all duration-300  ease-in-out">
              Wearable
            </li>
            <li className="cursor-pointer max-md:pl-[2em] group-hover:text-gray-400 hover:text-black transition-all duration-300  ease-in-out">
              Neural
            </li>
            <li className="cursor-pointer max-md:pl-[2em] group-hover:text-gray-400 hover:text-black transition-all duration-300  ease-in-out">
              Programs
            </li>
            <li className="cursor-pointer max-md:pl-[2em] group-hover:text-gray-400 hover:text-black transition-all duration-300  ease-in-out">
              Updates
            </li>
            <li className="cursor-pointer max-md:pl-[2em] group-hover:text-gray-400 hover:text-black transition-all duration-300  ease-in-out">
              Search
            </li>
          </ol>
        </div>
      </div>

      <div
        className="flex gap-2 flex-col bg-[#7878781a]  py-5 px-4 rounded-xl items-center justify-center md:hidden"
        onClick={toggleDropdown}
      >
        <span className="w-7 bg-black rounded-2xl h-[1.5px] block"></span>
        <span className="w-7 bg-black rounded-2xl h-[1.5px] block"></span>
      </div>
    </div>
  );
}

export default Nav;
