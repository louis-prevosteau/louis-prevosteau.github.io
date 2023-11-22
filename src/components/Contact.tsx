"use client"

import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import toast from 'react-hot-toast';
import { sendEmail } from '@/actions/SendMail';
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

const Contact = () => {
    const { ref } = useSectionInView("Contact");
    const { pending } = useFormStatus()
    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
        >
            <SectionHeading>Contact</SectionHeading>
            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                const { data, error } = await sendEmail(formData);
                if (error) {
                    toast.error(error);
                    return;
                }

                toast.success("Email envoyé avec succès !");
                }}
            >
                <input
                className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Email"
                />
                <textarea
                className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                name="message"
                placeholder="Votre message"
                required
                maxLength={5000}
                />
                <button
                type="submit"
                className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                disabled={pending}
                >
                {pending ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                ) : (
                    <>
                    Envoyer{" "}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                    </>
                )}
                </button>
            </form>
        </motion.section>
    );
};

export default Contact;