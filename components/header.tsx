"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Users } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 w-20">
              <img src="./image/ycmi-logo.png" alt="Logo" className="object-contain" />
              <span className="text-xl font-bold text-[#063452]">YCMI</span>
            </div>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-[#063452] hover:text-[#d97d2f] transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#063452] hover:text-[#d97d2f] transition-colors"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-[#063452] hover:text-[#d97d2f] transition-colors"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-[#063452] hover:text-[#d97d2f] transition-colors"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#063452] hover:text-[#d97d2f] transition-colors"
            >
              Kontak
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-[#309292] text-[#309292] hover:bg-[#309292] hover:text-white"
              onClick={() => scrollToSection("cta")}
            >
              <Users className="w-4 h-4 mr-2" />
              Gabung Relawan
            </Button>
            <Button className="bg-[#d97d2f] hover:bg-[#d97d2f]/90 text-white" onClick={() => scrollToSection("cta")}>
              <Heart className="w-4 h-4 mr-2" />
              Donasi Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#063452]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-[#063452] hover:text-[#d97d2f] transition-colors"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-[#063452] hover:text-[#d97d2f] transition-colors"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-left text-[#063452] hover:text-[#d97d2f] transition-colors"
              >
                Program
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-[#063452] hover:text-[#d97d2f] transition-colors"
              >
                Testimoni
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-[#063452] hover:text-[#d97d2f] transition-colors"
              >
                Kontak
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-[#309292] text-[#309292] hover:bg-[#309292] hover:text-white"
                  onClick={() => scrollToSection("cta")}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Gabung Relawan
                </Button>
                <Button
                  className="bg-[#d97d2f] hover:bg-[#d97d2f]/90 text-white"
                  onClick={() => scrollToSection("cta")}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Donasi Sekarang
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
