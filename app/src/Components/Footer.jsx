import React from "react";

const Footer = () => {

  const date = new Date();
  return (
    <footer className="py-10 bg-[#171717] mt-20">
      <p className="text-white text-center">
        &copy; {date.getFullYear()} Designed and Developed by Qunnderrie.
      </p>
    </footer>
  );
};

export default Footer;
