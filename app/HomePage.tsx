'use client';
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";

import Experiences from "@/components/experiences/Experiences";
import Contact from "@/components/Contact";
import Header from "./Header";
import Footer from "./Footer";
import Image from 'next/image'


interface Props {
    data: data,
}

const HomePage = ({ data }: Props) => {
    return (
        <>
      
            <Header logo={data.main.name} />
            <Hero mainData={data.main} />
            <About aboutData={data.about} name={data.main.name} />
            <Skills skillData={data.skills} />
            <Projects projectsData={data.projects} />
            <Experiences experienceData={data.experiences} educationData={data.educations} />
            <Contact />
          <Footer/>
          <div className='fixed bottom-3 left-3 z-10000 animate-ping'>
            <a href="https://wa.me/8638357433?text=Thanks for reaching out! We'll get back to you shortly. ?" target='_blank'>
            <Image className=' cursor-pointer'
      src="/whatsapp.png"
      width={65}
      height={65}
      alt="whatsapp"
    />
            </a>
          </div>
            
            
        </>
    )
}

export default HomePage