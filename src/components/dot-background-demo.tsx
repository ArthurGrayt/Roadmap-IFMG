import { cn } from "@/lib/utils";
import React from "react";

export default function DotBackgroundDemo({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col bg-white dark:bg-zinc-950 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)] dark:bg-zinc-950"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-1 w-full h-full flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
