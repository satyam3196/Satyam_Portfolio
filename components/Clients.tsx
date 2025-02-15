"use client";

import React from "react";
import { achievements } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { getImagePath } from '@/lib/imageLoader';

const Clients = () => {
  return (
    <section id="achievements" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> Achievements & Certifications</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={achievements}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
