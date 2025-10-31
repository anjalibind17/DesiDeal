"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-16 px-8 max-w-3xl mx-auto text-center text-gray-800">
        <h1 className="text-3xl font-semibold mb-6 text-orange-500">About Us</h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          Welcome to <span className="font-semibold text-orange-500">DesiDeal</span>! 
          We are dedicated to bringing you the best deals and products with top-notch service. 
          Our platform connects customers to authentic and affordable brands while ensuring 
          a smooth, transparent shopping experience. We aim to be your most trusted online 
          marketplace for all your lifestyle needs.
        </p>
      </section>
      <Footer />
    </>
  );
}
