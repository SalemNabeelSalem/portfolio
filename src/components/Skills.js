import React from "react";

import { SiSpringboot, SiNodedotjs, SiExpress } from "react-icons/si";
import { FaVuejs, FaJenkins, FaDocker, FaAws } from "react-icons/fa";
// import { FaVuejs, FaReact, FaJenkins, FaDocker, FaAws } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="techs">
      <p className="text-2xl text-black md:text-4xl font-bold text-center pt-4">
        Tech I Use
      </p>

      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiSpringboot color="#6CB33E" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">SpringBoot</p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiNodedotjs color="#73AB5F" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">Node</p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiExpress color="#454545" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">Express</p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaVuejs color="#3FB984" className="mx-auto text-4xl " />
          <p className="mt-6 text-base font-semibold text-center">Vue</p>
        </div>

        {/* <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#2196f3" className="mx-auto text-4xl " />
          <p className="mt-6 text-base font-semibold text-center">React</p>
        </div> */}

        {/* <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">
            TailwindCSS
          </p>
        </div> */}

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaJenkins color="#D43530" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">Jenkins</p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaDocker color="#2496ED" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">Docker</p>
        </div>

        <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaAws color="#EF931E" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">AWS</p>
        </div>

        {/* <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
          <p className="mt-6 text-base font-semibold text-center">JavaScript</p>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
