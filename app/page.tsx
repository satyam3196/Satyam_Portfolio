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
    <main className="relative bg-black-100 min-h-screen w-full">
      <FloatingNav navItems={navItems} />
      <div className="flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
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
