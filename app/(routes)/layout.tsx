import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import React from 'react'

interface RoutLayoutProps{
  children:React.ReactNode;  
}

const RoutLayout = ({children}:RoutLayoutProps) => {
  return (
    <div className=' flex flex-col'>
       <Header/>
       <div className='min-h-screen '>
       {children}
       </div>
       <Footer/>

    </div>
  )
}

export default RoutLayout