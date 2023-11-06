import React from "react"
import Image from "next/image"

const interests = [
    { interest: "Music" },
    { interest: "Swimming" },
    { interest: "Playing Carrom" },
    { interest: "Baking" },
    { interest: "Stitching" },
    { interest: "Sewing" },
    { interest: "Hiking" },
    { interest: "Trekking" },
    { interest: "Exploring" },
]

const languages = [
    { language: "Nepali" },
    { language: "English" },
    { language: "Newari" },
    { language: "Hindi" },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center text-gray-700 font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-1 bg-purple-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-xl text-purple-800 font-semibold mb-6 md:text-left">
                            Personal Details
                        </h1>
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="w-2/5">Name:</td>
                                    <td>Sirasa Tuladhar</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>Nayabazar, Kathmandu</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>sirasatuladhar@gmail.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-xl text-purple-800 font-semibold my-6 md:text-left">
                            Education
                        </h1>
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td>Bachelors in Computer Engineering<small>(2017 - 2022)</small></td>
                                    <td>Advanced College of Engineering and
                                        Management(ACEM)<br /><small>Balkhu, Kathmandu</small></td>
                                </tr>
                                <tr>
                                    <td>+2(HSEB)<small>(2015 - 2017)</small></td>
                                    <td>Trinity International College<br /><small>Dillibazar, Kathmandu</small></td>
                                </tr>
                                <tr>
                                    <td>School</td>
                                    <td>Graded English Medium School(GEMS)<br /><small>Dhapakhel, Lalitpur</small></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-xl text-purple-800 font-semibold mb-6">Interests</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {interests.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.interest}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-xl text-purple-800 font-semibold mb-6">Languages</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {languages.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.language}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection