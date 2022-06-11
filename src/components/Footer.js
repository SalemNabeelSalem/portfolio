import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaRegEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex align-center justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/SalemNabeelSalem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span class="sr-only">Github</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-700 rounded-full hover:text-white transition-colors duration-300"
          href="https://www.linkedin.com/in/isalem-nabeel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span class="sr-only">Linkedin</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://www.facebook.com/iSalemNabeel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
          <span class="sr-only">Facebook</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://twitter.com/isalem_nabeel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
          <span class="sr-only">Twitter</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-yellow-500 hover:bg-yellow-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://mailto:isalemnabeelsalem@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegEnvelope />
          <span class="sr-only">Email</span>
        </a>
      </div>

      <div className="flex align-center justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="img" aria-label="heart">
            💙
          </span>
          by
          <a
            className="text-blue-500 hover:underline"
            href="mailto:isalemnabeelsalem@gmail.com"
          >
            {" "}
            <span className="font-semibold">Salem Nabeel</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
