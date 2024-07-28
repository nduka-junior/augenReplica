"use client";
import React from "react";
import { ReactLenis, useLenis } from "lenis/react";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.06,
      }}
    >
      {children}{" "}
    </ReactLenis>
  );
}

export default SmoothScroll;
