import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "Tic-Tac-Toe Game - Python",
        description:
            "Tic-Tac-Toe is a app that checks if the same player's sign are in any row, column or diagonal to win.",
        image: "/TicTacToe.png",
        github: "https://github.com/sirasa1999/TicTacToe-game",
    },
    {
        name: "Rock-Paper-Scissors Game - JavaScript",
        description: "Rock-Paper-Scissors Game takes input from the player and generates random value for computer, compares the result between them, displays the winner if player or computer wins. When input is same displays a draw game.",
        image: "/RockPaperScissors.jpg",
        github: "https://github.com/sirasa1999/RockPaperScissors-game",
    },
]

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "JQuery" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "Django" },
    { skill: "Nuxt.js" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Postgres" },
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="my-10 text-center font-bold text-4xl text-gray-600">
                Skills
                <hr className="w-1/2 md:w-1/5 h-1 mx-auto my-0 bg-purple-300 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((item, idx) => {
                    return (
                        <p
                            key={idx}
                            className="bg-gray-300 px-4 py-2 mr-2 mt-2 text-gray-600 rounded font-semibold"
                        >
                            {item.skill}
                        </p>
                    )
                })}
            </div>

            <hr className="w-full h-1 mx-auto my-10 bg-purple-500 border-0 rounded"></hr>

            <h1 className="my-10 text-center font-bold text-4xl text-gray-600">
                Projects
                <hr className="w-1/2 md:w-1/5 h-1 mx-auto my-0 bg-purple-300 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                <div className=" md:w-1/2">
                                    <Link href={project.github}>
                                        <Image
                                            src={project.image}
                                            alt=""
                                            width={350}
                                            height={350}
                                            className="rounded-xl shadow-xl hover:opacity-70"
                                        />
                                    </Link>
                                </div>
                                <div className="mt-8 md:w-1/2">
                                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-row align-bottom space-x-4">
                                        <Link href={project.github} target="_blank">
                                            <BsGithub
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default ProjectsSection