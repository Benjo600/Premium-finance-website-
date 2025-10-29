"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1 
            className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Wealth Management Solutions for Your Future
          </motion.h1>
          
          <motion.p 
            className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert financial guidance tailored to your unique goals. Our team helps you navigate
            the complexities of wealth management with personalized strategies.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700">
              Get Started
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
              Learn More <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative w-full">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940"
              alt="Wealth management"
              className="h-auto w-full object-cover"
              height={600}
              width={1200}
              style={{ display: 'block' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
