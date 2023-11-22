"use client"
import React from 'react';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './SectionHeading';

const About = () => {
    const { ref } = useSectionInView("À Propos");
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>À Propos</SectionHeading>
            <p className="mb-3">Développeur full-stack, je m'intéresse particulièrement à Node.js et React.</p>
            <p className="mb-3">Mon parcours universitaire et professionnel a contribué à mon ouverture à plusieurs langages et frameworks de développement.</p>
            <p className="mb-3">Selon moi, la mise en place de méthodes Agiles et de principes relatifs au clean code est importante afin d'assurer le bon déroulement d'un projet.</p>
            <p className="mb-3">Je suis passionné par le développement de logiciels innovants et performants. J'ai une forte capacité d'apprentissage et je suis toujours à la recherche de nouvelles technologies et techniques.</p>
        </motion.section>
    );
};

export default About;