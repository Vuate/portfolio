import AboutMe from "@/components/AboutMe";
import Fast from "@/components/Fast";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import Project from "@/components/Project";
import Service from "@/components/Service";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div className="mt-24">
    <Hero/>
    <Fast/>
    <AboutMe/>
    <Service/>
    <Project/>
    {/* <Testimonial /> */}

   </div>
  );
}
