"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { IoMenu, IoClose } from "react-icons/io5";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    onClick?: (e: React.MouseEvent) => void;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "flex fixed top-5 inset-x-0 mx-auto max-w-fit lg:max-w-fit border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]",
        className
      )}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-center px-8 py-4 space-x-4">
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={navItem.onClick}
            className="relative flex items-center space-x-1 text-neutral-600 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-400"
          >
            <span>{navItem.name}</span>
          </a>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="lg:hidden flex items-center justify-between w-full px-4 py-2">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-neutral-600 dark:text-neutral-200 hover:text-neutral-500"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
        <span className="text-neutral-600 dark:text-neutral-200 font-medium">Navigate</span>
        <div className="w-10" />
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 py-2 bg-white dark:bg-black border border-transparent dark:border-white/[0.2] rounded-2xl lg:hidden"
          >
            {navItems.map((navItem: any, idx: number) => (
              <a
                key={`mobile-link-${idx}`}
                href={navItem.link}
                onClick={(e) => {
                  navItem.onClick?.(e);
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-neutral-600 dark:text-neutral-200 hover:text-neutral-500 dark:hover:text-neutral-400"
              >
                {navItem.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
