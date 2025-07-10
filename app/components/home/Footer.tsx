// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[color:var(--green)] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-lg mb-2">Tentang siTumbuh</h4>
          <p>
            Platform tumbuh kembang anak berbasis teknologi untuk sekolah dan
            TPA.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Bantuan</h4>
          <ul className="space-y-1">
            <li>FAQ</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Sumber Belajar</h4>
          <ul className="space-y-1">
            <li>Blog & Artikel Parenting</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Hak Cipta</h4>
          <p>© 2025 siTumbuh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
