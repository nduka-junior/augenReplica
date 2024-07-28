import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap plugins
gsap.registerPlugin(ScrollTrigger);

function Mission() {
  const augenRef = useRef<HTMLDivElement>(null);
  const humanRef = useRef<HTMLDivElement>(null);
  const yRevealRefs = useRef<HTMLDivElement[]>([]);

  yRevealRefs.current = [];

  useEffect(() => {
    if (augenRef.current) {
      gsap.fromTo(
        augenRef.current,
        { opacity: 0, filter: "blur(30px)", x: -300 },
        {
          opacity: 1,
          filter: "blur(0px)",
          x: 0,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: augenRef.current,
            start: "top 80%", // Adjust based on when you want the animation to start
            toggleActions: "play none none none", // Play the animation when entering the viewport
          },
        }
      );
    }

    if (humanRef.current) {
      const chars = humanRef.current.querySelectorAll("span");
      gsap.fromTo(
        chars,
        { x: -100, opacity: 0, filter: "blur(30px)" },
        {
          x: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power1.inOut",
          filter: "blur(0px)",
          stagger: 0.09,
          scrollTrigger: {
            trigger: humanRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    yRevealRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 10, opacity: 0, filter: "blur(3px)" },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power1.inOut",
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !yRevealRefs.current.includes(el)) {
      yRevealRefs.current.push(el);
    }
  };

  // Function to split text into individual characters
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        style={{
          display: "inline-block",
          marginRight: char === " " ? "0.2em" : "0",
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="bg-[#161719] text-white font-neue flex items-start flex-col py-20 px-10 md:items-center">
      <div className="font-light items-center md:flex flex-col w-full">
        <h1 ref={augenRef}>At Augen</h1>
        <h1 className="text-[#0071e3]" ref={humanRef}>
          {splitText("We put Humans First")}
        </h1>
      </div>
      <div>
        <ol className="customs-list md:space-y-14 space-y-20 py-16">
          <li className="max-md:space-y-14 border-b-[1px] py-3 border-[#4f4e4e50] md:flex gap-20 items-center">
            <h1 className="text-sm font-light">Our Mission</h1>
            <h1 className="text-xl md:text-2xl " ref={addToRefs}>
              Enhancement of human experience
            </h1>
          </li>
          <li className="max-md:space-y-14 border-b-[1px] py-3 border-[#4f4e4e50] md:flex gap-20 items-center">
            <h1 className="text-sm font-light">Our Vision</h1>
            <h1 className="text-xl md:text-2xl" ref={addToRefs}>
              Be the future of human enhancement technologies
            </h1>
          </li>
          <li className="max-md:space-y-14 py-3 md:flex gap-20 items-center">
            <h1 className="text-sm font-light">Our Ambition</h1>
            <h1 className="text-xl md:text-2xl" ref={addToRefs}>
              Enhance everyday life
            </h1>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Mission;
