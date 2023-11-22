"use client"
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
    const { ref } = useSectionInView("Projets", 0.5)
    return (
        <motion.section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>Projets</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project { ...project }/>
                    </React.Fragment>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;