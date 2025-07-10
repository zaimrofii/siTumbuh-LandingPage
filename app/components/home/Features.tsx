"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  CalendarDays,
  BarChartBig,
  Lightbulb,
  FileText,
  BellRing,
} from "lucide-react";

const features = [
  {
    icon: (
      <CalendarDays className="w-12 h-12 text-[color:var(--green)] group-hover:text-white" />
    ),
    label: "Catat dan lihat perkembangan anak kapan saja.",
    title: "📅 Laporan Harian & Mingguan",
  },
  {
    icon: (
      <BarChartBig className="w-12 h-12 text-[color:var(--green)] group-hover:text-white" />
    ),
    label: "Visualisasi lucu & mudah dibaca—tidak butuh Excel!",
    title: "📈 Grafik Tumbuh Kembang Otomatis",
  },
  {
    icon: (
      <Lightbulb className="w-12 h-12 text-[color:var(--green)] group-hover:text-white" />
    ),
    label: "Dapatkan saran cerdas untuk mendampingi anak lebih baik.",
    title: "💡 Insight & Saran Otomatis",
  },
  {
    icon: (
      <FileText className="w-12 h-12 text-[color:var(--green)] group-hover:text-white" />
    ),
    label: "Cetak laporan rapi dan siap dibagikan ke orang tua atau lembaga.",
    title: "🧾 Laporan PDF Sekali Klik",
  },
  {
    icon: (
      <BellRing className="w-12 h-12 text-[color:var(--green)] group-hover:text-white" />
    ),
    label:
      "Orang tua selalu update dengan notifikasi perkembangan anak mereka.",
    title: "🔔 Notifikasi Orang Tua",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="feature"
      className="w-[90vw] h-[90vh] mx-auto py-16 px-4 md:px-10 bg-white flex flex-col justify-center"
    >
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          ✨ Fitur yang Bikin Kamu Tersenyum
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Dirancang untuk membuat proses mendampingi anak jadi lebih mudah,
          menyenangkan, dan penuh kejutan manis tiap hari 🍭
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.3}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full"
      >
        {features.map((feature, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-green-50 rounded-xl shadow-md p-6 h-full flex flex-col items-center justify-start text-center hover:bg-[color:var(--green)] transition group">
              {feature.icon}
              <h3 className="my-4 font-semibold text-base group-hover:text-white text-[color:var(--green)]">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm md:text-base group-hover:text-white text-gray-700">
                {feature.label}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
