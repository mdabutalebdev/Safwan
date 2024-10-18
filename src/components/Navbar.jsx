
import React from "react";
import List from "./layouts/List";
import Image from "./layouts/Image";
import Logo from '../assets/images/logo.png';
import Button from "./layouts/Button";
 


// Navbar Component
const Navbar = () => {

  return (
    <nav className="w-container mx-auto flex justify-between items-center p-4 bg-white">
      {/* Logo Section */}
    
      <div className="flex items-center space-x-2">
        {/* Logo Image */}
        <div className="flex items-center">
          <Image src={Logo}/>
        </div>
      </div>

      {/* Navigation */}
      <ul className="flex space-x-6  font-semibold">
         <List text='Home' className={`hover:text-ButtonBg`}/>
         <List text='Pages' className={`hover:text-ButtonBg`}/>
         <List text='Services' className={`hover:text-ButtonBg`}/>
         <List text='Blog' className={`hover:text-ButtonBg`}/>
         <List text='Contact' className={`hover:text-ButtonBg`}/>
      </ul>

       
    <Button text='Download CV' className=''/>
      
    </nav>
  );
};

export default Navbar;

 