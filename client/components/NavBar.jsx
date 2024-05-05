'use client'
import { useState, useEffect } from "react";

const NavBar = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(
    () => {
      function handleScroll() {
        if (window.scrollY > 20) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }

      window.addEventListener('scroll', handleScroll);
      console.log(window.scrollY)
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },
    []
  )

  return (
    <nav className={`${(scroll) ? "bg-gray-100 opacity-50 shadow-gray-200 shadow-xl text-black" : "bg-gray-700 text-white"} transition-all duration-500 sticky top-0`}>
      <div className="container mx-auto px-4 md:px-0 max-w-3xl">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">My Blog</a>
          </div>
          <div className="">
            <a href="/" className="px-4">Home</a>
            <a href="/about" className="px-4">About</a>
            <a href="/contact" className="px-4">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

