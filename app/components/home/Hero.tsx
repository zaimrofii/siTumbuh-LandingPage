// components/HeroSection.tsx
import Image from "next/image";
import React from "react";
import { Pencil, Book, GraduationCap } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="w-full h-auto md:h-screen relative">
      <div className="h-screen w-full absolute top-0 left-0 -z-50 flex">
        <div className="h-full w-[70%] md:bg-[color:var(--bg)]"></div>
        <div className="hidden md:flex h-full w-[30%] bg-[color:var(--green)]  justify-start">
          <div className="h-full w-[95%] xl:w-[80%] relative">
            <Book
              strokeWidth={1}
              className="text-white w-20 h-20 absolute top-20 right-20 -rotate-30"
            />
            <Pencil
              strokeWidth={1}
              className="text-white w-20 h-20 absolute top-60 right-0 "
            />
            <GraduationCap
              strokeWidth={1}
              className="text-white w-20 h-20 absolute bottom-20 right-0 rotate-20"
            />
          </div>
        </div>
      </div>
      <div className=" h-auto md:h-[100vh] w-[80%] mx-auto relative flex  flex-col md:flex-row  justify-center z-50  ">
        <div className="h-[80vh] md:h-screen w-[90%] md:w-[60%] flex flex-col  justify-center relative  mx-auto  pt-20 md:pt-0">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-[color:var(--green)] mb-4 leading-tight">
            Mari Tumbuh dan Belajar Bersama{" "}
            <span className="text-white bg-[color:var(--red)] rounded-xl px-5">
              siTumbuh
            </span>{" "}
            untuk Masa Depan yang Cerah
          </h1>

          <p className="w-3/4 text-gray-700 text-md md:text-xl mb-8">
            Platform cerdas untuk memantau dan merayakan perkembangan anak—
            <br className="hidden md:block" />
            secara <strong>real-time</strong>, <strong>mudah</strong>, dan{" "}
            <strong>penuh cinta</strong> 💙
          </p>
          <div className="flex flex-col sm:flex-row  gap-4">
            <button className="bg-[color:var(--green)] hover:scale-103 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-200 cursor-pointer">
              Mulai Sekarang Gratis
            </button>
            <button className="bg-[color:var(--red)]  text-white font-semibold py-3 px-6 rounded-xl shadow-sm hover:scale-103 transition-all duration-200 cursor-pointer">
              Lihat Demo
            </button>
          </div>
        </div>
        <div className="h-4/5 md:h-screen w-[90%] md:w-[40%] flex justify-start items-center relative z-40 mx-auto">
          <Image
            src="/hero-student.png"
            alt="student"
            width={400}
            height={600}
            // className="w-4/5 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
