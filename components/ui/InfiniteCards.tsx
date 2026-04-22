"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type AchievementItem = {
  id?: number;
  title?: string;
  des?: string;
  img?: string;
  quote?: string;
  name?: string;
  project_link?: string;
};

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: AchievementItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const item = items[index];

  return (
    <div className={cn("flex flex-col items-center gap-8 w-full px-4 mt-12", className)}>

      {/* Card with glow border */}
      <div className="relative w-full max-w-3xl group">

        {/* Purple glow behind card */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-500 to-blue-600 opacity-30 blur-sm group-hover:opacity-60 transition duration-500" />

        {/* Card */}
        <div
          className="relative w-full h-[320px] md:h-[360px] rounded-2xl border border-white/10 p-8 md:p-12 flex flex-col overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(4,7,29,1) 0%, rgba(15,10,45,1) 60%, rgba(4,7,29,1) 100%)",
          }}
        >
          {/* Big faded index number in background */}
          <span
            className="absolute right-6 top-4 text-[7rem] md:text-[9rem] font-black leading-none select-none pointer-events-none"
            style={{ color: "rgba(139,92,246,0.08)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Accent bar */}
          <div className="w-10 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-5 shrink-0" />

          <h3 className="text-lg md:text-xl font-bold text-white mb-4 shrink-0 leading-snug pr-16">
            {item.title}
          </h3>

          <p className="text-sm md:text-[0.9rem] leading-[1.8] text-white/70 font-normal overflow-y-auto pr-2">
            {item.quote || item.des}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-5">
        <button
          onClick={prev}
          className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/25 hover:border-purple-500/60 active:scale-95 transition-all text-white"
          aria-label="Previous"
        >
          <FaChevronLeft size={15} />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                i === index
                  ? "w-6 h-2 bg-purple-500"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/25 hover:border-purple-500/60 active:scale-95 transition-all text-white"
          aria-label="Next"
        >
          <FaChevronRight size={15} />
        </button>
      </div>

      {/* Counter */}
      <span className="text-white/30 text-xs font-medium tabular-nums -mt-4">
        {index + 1} of {items.length}
      </span>
    </div>
  );
};
