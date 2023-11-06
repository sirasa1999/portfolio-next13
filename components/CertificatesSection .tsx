import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const certificates = [
  {
    name: "Udemy-Css and Bootstrap",
    image: "/Udemy-Css and Bootstrap.png",
  },
  {
    name: "Coursera- Python",
    image: "/Coursera-python.png",
  },
  {
    name: "Empowering Women to Excel in AI & Data Science",
    image: "/women_in_ai.png",
  },
  {
    name: "PhotoKathmandu Volunteering",
    image: "/photoktm_certificate.png",
  },
];

const certificatesSection = () => {
  return (
    <section id="certificates" className="my-24">

      <h1 className="my-10 text-center font-bold text-4xl text-gray-600">
        Certificates
        <hr className="w-1/2 md:w-1/5 h-1 mx-auto my-0 bg-purple-300 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col items-center justify-center text-center space-y-28">
        {certificates.map((certificate, idx) => {
          return (
            <div key={idx}>
              <div className="border p-2">
                <div className="mt-8">
                  <h1 className="text-xl text-gray-700 font-semibold mb-6">{certificate.name}</h1>
                </div>
                <div className="">
                  <Link href={certificate.image}>
                    <Image
                      src={certificate.image}
                      alt=""
                      width={600}
                      height={600}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default certificatesSection;
