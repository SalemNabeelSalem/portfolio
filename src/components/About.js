import React from "react";

import ScrollIntoView from "react-scroll-into-view";

import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black md:text-4xl font-bold text-center">
          Hey 👋
        </p>

        <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
          I am passionate about developing highly scalable, resilient
          applications. I love everything from the{" "}
          <span className="font-semibold">Databases</span>,{" "}
          <span className="font-semibold">Testing</span>, and{" "}
          <span className="font-semibold">DevOps</span> to{" "}
          <span className="font-semibold">Microservices</span> (
          <span className="font-semibold">Kubernetes</span>,{" "}
          <span className="font-semibold">Docker</span>, etc), to the{" "}
          <span className="font-semibold">Frontend</span> and{" "}
          <span className="font-semibold">Backend</span>. I find it amazing how
          all pieces work together to provide a fast and pleasurable experience
          to end-users, mainly because they have no clue how complex that
          "simple" app is.
        </p>
      </div>

      <ScrollIntoView selector="">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
