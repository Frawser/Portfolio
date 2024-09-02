"use client";

import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  const handleClicked = (event: React.MouseEvent<HTMLImageElement, MouseEvent>, link: string) => {
    event.preventDefault();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="w-full pb-20 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to grow with
          <span className="text-purple"> you </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss any questions you may
          have about me!
        </p>
        <a href="mailto:mikis011@hotmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mikael Fernandez
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-5">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={profile.img}
                alt={profile.id}
                width={20}
                height={20}
                onClick={(event) => handleClicked(event, profile.link)}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
