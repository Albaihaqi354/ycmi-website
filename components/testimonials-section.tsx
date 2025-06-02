"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sari",
      role: "Penerima Beasiswa",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Berkat beasiswa dari Yayasan Harapan, saya bisa melanjutkan kuliah dan sekarang bekerja sebagai guru. Terima kasih telah memberikan kesempatan untuk meraih mimpi.",
      rating: 5,
    },
    {
      name: "Ahmad Rizki",
      role: "Relawan Aktif",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Menjadi relawan di Yayasan Harapan adalah pengalaman yang mengubah hidup. Melihat senyum anak-anak yang terbantu membuat semua usaha terasa sangat berharga.",
      rating: 5,
    },
    {
      name: "Dr. Maya Sari",
      role: "Mitra Program Kesehatan",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Kerjasama dengan Yayasan Harapan dalam program kesehatan masyarakat sangat profesional. Mereka benar-benar peduli dengan dampak jangka panjang.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      role: "Donatur Tetap",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Transparansi laporan keuangan dan program yang jelas membuat saya yakin untuk terus mendukung Yayasan Harapan. Setiap rupiah benar-benar tersalurkan dengan baik.",
      rating: 5,
    },
    {
      name: "Ibu Ratna",
      role: "Orang Tua Penerima Bantuan",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Program bantuan pendidikan untuk anak saya sangat membantu. Sekarang anak saya bisa sekolah dengan fasilitas yang layak dan mendapat bimbingan yang baik.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#063452] mb-4">Cerita Mereka yang Terbantu</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dengarkan langsung dari mereka yang telah merasakan dampak positif dari program-program Yayasan Harapan.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#309292]"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-8 h-8 text-[#d97d2f] mb-4 mx-auto md:mx-0" />

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{testimonials[currentIndex].content}</p>

                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#063452] text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-[#309292] font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border-[#309292] text-[#309292] hover:bg-[#309292] hover:text-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border-[#309292] text-[#309292] hover:bg-[#309292] hover:text-white"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-[#d97d2f]" : "bg-gray-300"
              }`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
