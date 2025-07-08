import React from "react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import SocialIcon from "./components/SocialIcon";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-gray-700 border-t mt-auto text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Logo and Description */}
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                Shop<span className="text-blue-600">vault</span>
              </h1>
              <p className="text-gray-400 text-sm max-w-md">
                Your trusted online marketplace for quality products at
                unbeatable prices. Discover thousands of items with fast
                shipping and excellent customer service.
              </p>
            </div>

            {/* Social Icons and Copyright */}
            <div className="flex flex-col items-start md:items-end gap-3">
              <h1 className="text-xl font-semibold">Stay connected</h1>
              <div className="flex gap-4">
                <SocialIcon href="https://facebook.com">
                  <FaFacebook className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon href="https://x.com">
                  <BsTwitter className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon href="https://instagram.com">
                  <BsInstagram className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon href="https://youtube.com">
                  <BsYoutube className="h-5 w-5" />
                </SocialIcon>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm border-t border-gray-600 text-center py-2 mt-6">
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
