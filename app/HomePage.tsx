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
import Topheader from '../components/Topheader';

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
            <Topheader/>
            <Footer/>
            
            
        </>
    )
}

export default HomePage