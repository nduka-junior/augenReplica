import React from "react";
import gsap from "gsap";

import { useEffect, useRef } from "react";
function Introduction() {
  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = app.current?.children;
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();
            Array.from(elements).forEach((element, index) => {
              tl.fromTo(
                element,
                { opacity: 0, x: -300, filter: "blur(3px)" },
                {
                  opacity: 1,
                  x: 0,
                  duration: 1.5,
                  filter: "blur(0px)",
                  ease: "power2.inOut",
                },
                index * 0.4
              );
            });
            observer.unobserve(entry.target); // Optionally, stop observing after animation
          }
        });
      },
      { threshold: 0.2 }
    ); // Adjust the threshold as needed

    Array.from(elements).forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
  return (
    <div
      className="font-neue flex flex-col items-center justify-center py-20 bg-[#efefef] max-md:space-y-20 px-7 md:flex-row md:items-start  md:px-40 md:pt-60 md:pb-32"
      ref={app}
    >
      <div className="text-center md:w-[30%] md:text-sm">
        <h1 className="font-thin  md:text-sm  ">Introduction</h1>
        <h1 className="font-light text-lg  md:text-sm">What&apos;s Augen</h1>
      </div>
      <div className="flex max-md:items-center flex-col gap-20 md:w-[70%]">
        <h1 className="text-xl   md:text-2xl md:pr-[10vw]">
          Augen is the first-of-its-kind AI Wearable Company bringing
          general-purpose devices to improve people&apos;s life.
        </h1>
        <div className="flex gap-3 items-center ">
          <div className="border-[#0071e3] py-1 px-3 rounded-[30px] border-[1px]  w-auto">
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              data-v-8e98293e=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.18252 2.51959L4.71493 1.05199L5.19807 0.568848L7.30658 2.67736L7.54815 2.91893L7.30658 3.1605L5.19807 5.26902L4.71493 4.78588L6.29795 3.20285H0.972656V2.51959H6.18252Z"
                fill="#0071e3"
              ></path>
            </svg>
          </div>
          <h1 className="text-[#0071e3] font-light">Join our community</h1>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
