"use client";

import { BarChart, Brain, Baby, Handshake, Heart } from "lucide-react";

const WhySitumbuhSection = () => {
  return (
    <section className=" w-full h-auto md:h-screen bg-[color:var(--bg)]">
      <div className="w-[80vw] h-full  mx-auto flex  flex-col md:flex-row items-center gap-8">
        {/* Gambar kiri */}
        <div className="w-full  h-full md:w-1/2 relative flex justify-center  ">
          <div className="w-[80%] h-[80%]  ">
            <img
              src="/teacher3d.png" // Ganti path sesuai gambarmu
              alt="Anak belajar"
              className=" object-cove "
            />
          </div>
        </div>

        {/* Teks kanan */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Untuk Guru & Orang Tua yang Sayang Anak
          </h2>

          <ul className="space-y-4 text-gray-700 text-base md:text-lg pb-5">
            <li className="flex items-start gap-3">
              <BarChart className="text-green-600 w-5 h-5 mt-1" />
              <span>
                Pantau tumbuh kembang anak setiap hari, bukan cuma saat rapotan.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Brain className="text-green-600 w-5 h-5 mt-1" />
              <span>Dapatkan insight otomatis dari sistem pintar kami.</span>
            </li>
            <li className="flex items-start gap-3">
              <Baby className="text-green-600 w-5 h-5 mt-1" />
              <span>
                Setiap anak unik — siTumbuh bantu memahami kekuatan dan
                tantangannya.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Handshake className="text-green-600 w-5 h-5 mt-1" />
              <span>Bangun kolaborasi sehat antara guru & orang tua.</span>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="text-green-600 w-5 h-5 mt-1" />
              <span>Ciptakan momen tumbuh yang tak terlewatkan!</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhySitumbuhSection;
