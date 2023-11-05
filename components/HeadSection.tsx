"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const HeadSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:mr-5">
                    <Image
                        src="/sirasa.jpg"
                        alt=""
                        width={325}
                        height={325}
                        className="rounded-full shadow-2xl fill-none"
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-neutral-600">
                        Namaste,<br /> I'm Sirasa Tuladhar!
                    </h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I am a {" "}
                        <span className="font-semibold text-purple-600">
                            Software Engineer{" "}
                        </span>
                        from Kathmandu, Nepal with knowledge of programming, highly interested in the ﬁeld of learning different
                        programming languages and looking for a wholesome environment for growth as a skilled developer.
                    </p>
                    <div className="flex text-neutral-500 text-center items-center justify-center md:justify-start">
                        <a href="https://www.linkedin.com/in/sirasa/" target="_blank" rel="noopener noreferrer" className="mx-4">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/sirasa1999" target="_blank" rel="noopener noreferrer" className="mx-4">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeadSection;