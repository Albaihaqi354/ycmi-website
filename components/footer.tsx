"use client"

import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#063452] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#d97d2f] rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Yayasan Harapan</span>
            </div>
            <p className="text-gray-300 mb-6">
              Membangun masa depan yang lebih baik melalui program pendidikan, kesehatan, dan pemberdayaan masyarakat.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#309292] rounded-full flex items-center justify-center hover:bg-[#309292]/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#309292] rounded-full flex items-center justify-center hover:bg-[#309292]/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#309292] rounded-full flex items-center justify-center hover:bg-[#309292]/80 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#309292] rounded-full flex items-center justify-center hover:bg-[#309292]/80 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-300 hover:text-[#d97d2f] transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-[#d97d2f] transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-300 hover:text-[#d97d2f] transition-colors"
                >
                  Program
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-300 hover:text-[#d97d2f] transition-colors"
                >
                  Testimoni
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-[#d97d2f] transition-colors"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Program Kami</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#d97d2f] transition-colors">
                  Program Pendidikan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#d97d2f] transition-colors">
                  Program Kesehatan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#d97d2f] transition-colors">
                  Program Sosial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#d97d2f] transition-colors">
                  Program Lingkungan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#d97d2f] transition-colors">
                  Laporan Keuangan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#309292] mt-0.5" />
                <div>
                  <p className="text-gray-300">info@yayasanharapan.org</p>
                  <p className="text-gray-300">donasi@yayasanharapan.org</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#309292] mt-0.5" />
                <div>
                  <p className="text-gray-300">+62 21 1234 5678</p>
                  <p className="text-gray-300">+62 812 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">© 2024 Yayasan Harapan. Semua hak dilindungi.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-[#d97d2f] transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d97d2f] transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d97d2f] transition-colors">
                Transparansi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
