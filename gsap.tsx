"use client";

import { useState } from "react";
import { Leaf } from "lucide-react";
import Image from "next/image";

const Ai = () => {
  const [selectedNature, setSelectedNature] = useState("Nature1");

  const handleNatureClick = (nature: any) => {
    setSelectedNature(nature);
  };

  const natureSections = [
    {
      name: "Nature1",
      imgSrc:
        "https://images.pexels.com/photos/8386366/pexels-photo-8386366.jpeg?auto=compress&cs=tinysrgb&w=800",
      text: "hello world 1",
    },
    {
      name: "Nature2",
      imgSrc:
        "https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=800",
      text: "hello world 2",
    },
    {
      name: "Nature3",
      imgSrc:
        "https://images.pexels.com/photos/1038166/pexels-photo-1038166.jpeg?auto=compress&cs=tinysrgb&w=800",
      text: "hello world 3",
    },
  ];

  const getNatureImage = () => {
    return (
      natureSections.find((nature) => nature.name === selectedNature)?.imgSrc ||
      ""
    );
  };

  const getNatureText = () => {
    
    return (
      natureSections.find((nature) => nature.name === selectedNature)?.text ||
      ""
    );
  };

 const getBackgroundImageStyle = () => {
    return {
      backgroundImage: `url(${getNatureImage()})`,
      filter: "grayscale(0%)", 
    };
  };

  return (
    <main
      style={getBackgroundImageStyle()}
      className="h-screen  bg-cover bg-center bg-no-repeat w-full"
    >
  
      <h1 className="text-center py-10 pt-20 text-3xl font-semibold text-white first-letter:capitalize">
        Nature through the eyes of AI
      </h1>
      <section className="mt-5 container md:px-44 flex flex-row gap-x-14">
        {/* sections name */}
        <div className="flex w-44 flex-col gap-y-10">
          {natureSections.map((nature) => (
            <div
              key={nature.name}
              className={`flex cursor-pointer items-center gap-x-2 capitalize text-neutralLight ${
                selectedNature === nature.name ? "font-bold transition ease-in duration-300" : ""
              }`}
              onClick={() => handleNatureClick(nature.name)}
            >
              <Leaf />
              <span>{nature.name}</span>
            </div>
          ))}
        </div>
        {/* images and text container */}
        <div className="flex flex-1 items-end justify-end w-full gap-x-5">
          {/* image */}
          <div className="h-full">
            <Image
              alt=""
              src={getNatureImage()}
              width={500}
              height={500}
              className=""
            />
          </div>
          {/* text content */}
          <div className="w-56">
            <p className="text-xs text-white">{getNatureText()}</p>
            <button>read more</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ai;
