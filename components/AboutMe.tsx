import Image from 'next/image';
import React from 'react'

const AboutMe = () => {

  const skills = [
  {name:"UI / UX Design" , percent:75},  
  {name:"Frontend Development" , percent:80},
  {name:"Backend Development (Java)" , percent:95},
  {name:"Full Stack Project Building " , percent:65},      
  ];


  return (
    <section id='about' className='py-16'>

     <div className='max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10'>

        <div className='flex'>
   <Image
           src="/cd.png"
           alt="Profile Photo"
           width={500}
           height={500}
           className="object-cover rounded-full  mt-[-60px]"
           priority
           />

        </div>
        <div className='flex-1 '>
        <h2 className='text-4xl font-bold mb-4 text-amber-500'>About me</h2>
        <p className='mb-6 text-gray-500'>
            I'm Arda Emreci, a Full Stack Developer Intern studying Computer Programming at Istanbul Arel University.  
  I build modern web apps using technologies like Next.js, React, Tailwind CSS, Java, and Spring Boot.
</p>
        <p className='mb-6 text-gray-500'>
            I'm also learning TypeScript and Supabase while improving my skills through real-world projects.  
  My goal is to become a well-rounded developer who can deliver clean and scalable solutions.
        </p>

        <div className='space-y-6 mt-8'>
          {skills.map((skill,index)=>(
          <div key={index}>
           <div className='flex items-center justify-between mb-1'>
             <span className='font-medium'>{skill.name}</span>
             <span className='font-medium'>{skill.percent}</span>
            </div>  
            <div className='w-full bg-gray-700 h-2 rounded-full'>
             <div className='bg-amber-500 h-2 rounded-full'
             style={{ width: `${skill.percent}%` }}
>

             </div>
           </div>
           
          </div>  


          ))}  


        </div>
        
        </div>

        </div>   

    </section>

    
  )
}

export default AboutMe