import { useState } from "react";

 const Header = () => {
    return (
        <div className=" bg-gray-100 ">
            <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
                <h1 className="text-xl font-bold">LOGO</h1>
                <ul className="flex space-x-6 text-gray-600 font-medium">
                  <li className="cursor-pointer hover:text-blue-600">Home</li>
                  <li className="cursor-pointer hover:text-blue-600">About</li>
                  <li className="cursor-pointer hover:text-blue-600">Contact</li>
                  <li className="cursor-pointer hover:text-blue-600">Price</li> 
                </ul>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Get started
                </button>
            </nav>
            
        </div>
    )
}
export default Header;
