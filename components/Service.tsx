import React from 'react'

import{
FaPencilRuler,
FaLaptopCode,
FaMobileAlt,
FaPaintBrush,
FaServer,
FaCloud,
FaDatabase,
FaLock,
FaPuzzlePiece,
FaExchangeAlt,
FaProjectDiagram
} from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaPencilRuler size={40} className="text-amber-500" />,
    title: "UI / UX Design",
    description: " design clean, intuitive, and user-friendly interfaces."
  },
  {
    id: 2,
    icon: <FaLaptopCode size={40} className="text-amber-500" />,
    title: "Web Development",
    description: "I build modern, fast, and responsive web applications using frameworks like React and Next.js"
  },
  {
    id: 3,
    icon: <FaServer size={40} className="text-amber-500" />,
    title: "Backend Development",
    description: "I develop server-side logic and APIs using Java and Spring Boot."
  },
  {
    id: 4,
    icon: <FaPuzzlePiece size={40} className="text-amber-500" />,
    title: " Problem Solving",
    description: "I enjoy solving complex coding problems with simple and effective solutions.."
  },
  {
    id: 5,
    icon: <FaExchangeAlt size={40} className="text-amber-500" />,
    title: " API Integration",
    description: "I connect web apps to external services using reliable and secure APIs."
  },
  {
    id: 6,
    icon: <FaProjectDiagram size={40} className="text-amber-500" />,
    title: "Full Stack Project Development",
    description: "I develop end-to-end web projects — from designing the frontend to building and connecting the backend."
  },

];

const Service = () => {
  return (
    <section className='py-10' id='services'>
     <div className='max-w-6xl mx-auto px-4'>
     <div className='text-center mb-10'>
        <h2 className='text-4xl text-amber-500 font-bold'>Services</h2>
        <p className='text-gray-500 mt-2'>
        Services I offer using the skills I’ve built so far — from UI design to full-stack web development.
        </p>
        </div>   
         
       <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {servicesData.map((service)=>(
            <div key={service.id}
            className='border rounded-lg p-6 flex flex-col items-start tranform transition duration-500 hover:scale-105'
            >
             
             <div>{service.icon}</div>
             <h3 className='text-2xl font-semibold mb-4'>{service.title}</h3>
             <p className='text-gray-500'>{service.description}</p>
            
            </div>
        ))}
        
        </div>  


     </div>

    </section>


    
  )
}

export default Service