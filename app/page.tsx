"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 min-h-screen w-full overflow-x-hidden">
      <FloatingNav navItems={navItems} />
      <div className="flex justify-center items-center flex-col mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="w-full">
          <Hero />
          <Grid />
          <Experience />
          <RecentProjects />
          <Certificates />
          <Approach />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
