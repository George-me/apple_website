import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section className=" common-padding bg-zinc">
      <div className="md:flex flex-wrap mb-12 justify-between ">
        <h1 id="title" className="section-heading">
          Get the highlights
        </h1>
        <div className="flex flex-wrap gap-5 ">
          <p className="link">
            Watch the film
            <img src={watchImg} className="ml-2" />
          </p>
          <p className="link">
            Watch the event
            <img src={rightImg} className="ml-2" />
          </p>
        </div>
      </div>

      <VideoCarousel />
    </section>
  );
};

export default Highlights;
