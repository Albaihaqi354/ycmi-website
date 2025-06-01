"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 52, 82, 0.7), rgba(6, 52, 82, 0.7)), url('/placeholder.svg?height=1080&width=1920')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Membangun Masa Depan
            <span className="block text-[#d97d2f]">Lewat Aksi Nyata</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Bersama-sama kita wujudkan perubahan positif untuk masyarakat melalui program pendidikan, kesehatan, dan
            pemberdayaan sosial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#d97d2f] hover:bg-[#d97d2f]/90 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection("programs")}
            >
              Lihat Program Kami
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-[#309292] hover:bg-white hover:text-[#d97d2f] px-8 py-4 text-lg"
              onClick={() => scrollToSection("about")}
            >
              <Play className="w-5 h-5 mr-2" />
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
