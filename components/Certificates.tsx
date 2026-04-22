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
        <div className="w-full flex flex-col antialiased items-center justify-center">
          <InfiniteMovingCards
            items={achievements}
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
