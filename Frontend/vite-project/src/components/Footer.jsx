import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    <div>
    <h2 className="text-2xl font-extrabold mb-4 tracking-wide">ProBrand</h2>
    <p className="text-sm leading-relaxed">Crafting reliable digital experiences for businesses worldwide.</p>
        <div className="flex mt-6 space-x-3">
 <a href="#" className="p-2 bg-gray-700 rounded-full hover:text-blue-500 hover:bg-gray-100">
 <FaFacebookF size={20} /> </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:text-blue-400 hover:bg-gray-100">
<FaTwitter size={20} /> </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:text-pink-400 hover:bg-gray-100">
 <FaInstagram size={20} /></a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:text-blue-700 hover:bg-gray-100">
            <FaLinkedinIn size={20} /></a>
 </div>
</div>
      <div>
 <h3 className="text-lg font-semibold mb-4">Company</h3>
    <ul className="space-y-2">
 <li><a href="#" className="hover:underline">About Us</a></li>
 <li><a href="#" className="hover:underline">Careers</a></li>
 <li><a href="#" className="hover:underline">Blog</a></li>
<li><a href="#" className="hover:underline">Press</a></li>
    </ul>
</div>
    <div><h3 className="text-lg font-semibold mb-4">Service</h3>
    <ul className="space-y-2">
 <li><a href="#" className="hover:underline">Web Design</a></li>
 <li><a href="#" className="hover:underline">App Development</a>
 </li>
 <li><a href="#" className="hover:underline">DSA</a>
 </li>
 <li><a href="#" className="hover:underline">SEO</a></li>
        </ul>

 </div>
      <div>

<h3 className="text-lg font-semibold mb-4">Contact</h3>
<ul className="space-y-2 text-sm">
          <li>Email: testmern@email.com</li> <li>Phone: +91 98765 43210</li>
<li>123 Business Street,Chandigarh</li>
        </ul>
 </div>
    </div>
    <div className="border-t border-gray-700 mt-8 py-6 text-center text-xs text-gray-400">
    2025 ProCLINIC.lorem ispsum jcw cwe
    </div>
  </footer>
);

export default Footer;