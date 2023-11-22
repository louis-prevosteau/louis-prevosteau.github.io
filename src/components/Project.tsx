"use client"
import { projectsData } from '@/lib/data';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

type ProjectProps = (typeof projectsData)[number];

const Project = ({ name, description, tags, github }: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
            scale: scaleProgess,
            opacity: opacityProgess,
            }}
            className="group mb-8 last:mb-0 max-w-[42rem] sm:h-[20rem]"
        >
            <div className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-10 pb-7 px-5 sm:pl-10 sm:pr-2 flex flex-col h-full">
                    <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                    <p className="text-white/70 leading-relaxed mb-4">{description}</p>
                    <Link href={github} passHref className="flex items-center gap-2">
                        <FaGithub className="opacity-70 group-hover:translate-x-1 transition" />
                        Dépôt Github
                    </Link>
                    <ul className="flex flex-wrap mt-4 gap-2">
                        {tags.map((tag, index) => (
                        <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            key={index}
                        >
                            {tag}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;