"use client"
import React from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

const techItems = [
  { src: "/logos/java.png", label: "Java" },
  { src: "/logos/react.png", label: "React" },
  { src: "/logos/next.png", label: "Next.js" },
  { src: "/logos/sql.png", label: "SQL" },
  { src: "/logos/node.png", label: "Node.js" },
  { src: "/logos/tailwind.png", label: "Tailwind" },
  { src: "/logos/tyoe.png", label: "TypeScript" }
];

const Fast = () => {

  const repeatedTechItems = [...techItems , ...techItems];
  const reversedTechItems = [...repeatedTechItems].reverse();

  return (
    <div className='relative w-full h-[280px] md:h-[400px] z-0 my-1 overflow-hidden'>

      <div className='absolute top-1/2 left-0 w-[120%] -translate-y-1/2 rotate-6 -ml-[20%]'>
        <Marquee
          speed={55}
          className='bg-black text-white dark:bg-white dark:text-black py-6 px-8 font-bold text-2xl'
        >
          {repeatedTechItems.map((item,index)=>(

            <div className=' flex items-center mx-8 gap-2 ' key={index}>
              <Image
                src={item.src}
                alt={item.label}
                width={40}
                height={40}
                className='object-contain'
              />
              <span>{item.label}</span>
          
            </div>

          ))}
        </Marquee>
      </div>

       <div className='absolute top-1/2 left-0 w-[130%] -translate-y-1/2 -rotate-[8deg] -ml-[20%]'>
        <Marquee
          speed={35}
          className='bg-black text-white dark:bg-white dark:text-black py-6 px-8 font-bold text-2xl'
        >
          {reversedTechItems.map((item,index)=>(

            <div className=' flex items-center mx-8 gap-2 ' key={index}>
              <Image
                src={item.src}
                alt={item.label}
                width={40}
                height={40}
                className='object-contain'
              />
              <span>{item.label}</span>
          
            </div>

          ))}
        </Marquee>
      </div>

    </div>
  );
}

export default Fast
