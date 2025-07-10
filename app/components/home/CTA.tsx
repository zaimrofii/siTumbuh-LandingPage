// components/SectionMulai.tsx
import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="bg-white h-[80vh] flex flex-col justify-center py-16 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--green)] mb-4">
        🎉 Siap Tumbuh Bersama{" "}
        <span className="text-[color:var(--red)]">siTumbuh</span>?
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto text-lg mb-8">
        Daftarkan sekolah atau TPA Anda secara gratis. <br />
        Nikmati cara baru mendampingi anak bertumbuh dengan lebih cerdas dan
        menyenangkan!
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-[color:var(--green)] hover:bg-[color:var(--green)] text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-200 cursor-pointer">
          Daftar Sekarang Gratis
        </button>
        <button className="bg-white border-2 border-[color:var(--green)] text-[color:var(--green)] font-semibold py-3 px-6 rounded-xl shadow-sm hover:bg-green-50 transition-all duration-200 cursor-pointer">
          Konsultasi Tim Kami
        </button>
      </div>
    </section>
  );
};

export default CTA;
