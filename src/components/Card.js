import React from "react";

import profile from "../assets/images/memoji.jpg";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile face"
          />
        </div>

        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            Salem Nabeel ⚔
          </p>

          <p className="text-xs sm:text-base text-gray-700 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            I am passionate about developing highly scalable, resilient
            applications. I love everything from the{" "}
            <span className="font-semibold">Databases</span>,{" "}
            <span className="font-semibold">Testing</span>, and{" "}
            <span className="font-semibold">DevOps</span> to{" "}
            <span className="font-semibold">Microservices</span> (
            <span className="font-semibold">Kubernetes</span>,{" "}
            <span className="font-semibold">Docker</span>, etc), to the{" "}
            <span className="font-semibold">Frontend</span> and{" "}
            <span className="font-semibold">Backend</span>. I find it amazing
            how all pieces work together to provide a fast and pleasurable
            experience to end-users, mainly because they have no clue how
            complex that "simple" app is.
          </p>

          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/SalemNabeelSalem"
            >
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300"
              href="https://www.linkedin.com/in/isalem-nabeel"
            >
              <FaYoutube />
              <span class="sr-only">YouTube</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              href="https://twitter.com/isalem_nabeel"
            >
              <FaTwitter />
              <span class="sr-only">Twitter</span>
            </a>

            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
              href="https://mailto:isalemnabeelsalem@gmail.com"
            >
              <FaRegEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
