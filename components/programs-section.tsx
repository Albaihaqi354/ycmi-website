import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Heart, Leaf, HandHeart, ArrowRight } from "lucide-react"

export default function ProgramsSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Program Pendidikan",
      description: "Beasiswa pendidikan, pembangunan sekolah, dan pelatihan keterampilan untuk anak-anak dan remaja.",
      features: ["Beasiswa untuk 500+ siswa", "Pembangunan 15 sekolah", "Pelatihan komputer & bahasa"],
      color: "bg-[#d97d2f]",
    },
    {
      icon: Heart,
      title: "Program Kesehatan",
      description: "Layanan kesehatan gratis, kampanye kesehatan masyarakat, dan pembangunan fasilitas kesehatan.",
      features: ["Klinik kesehatan gratis", "Vaksinasi massal", "Edukasi gizi dan sanitasi"],
      color: "bg-[#309292]",
    },
    {
      icon: HandHeart,
      title: "Program Sosial",
      description: "Bantuan untuk keluarga kurang mampu, program pemberdayaan ekonomi, dan bantuan bencana.",
      features: ["Bantuan sembako rutin", "Pelatihan wirausaha", "Tanggap darurat bencana"],
      color: "bg-[#063452]",
    },
    {
      icon: Leaf,
      title: "Program Lingkungan",
      description: "Konservasi lingkungan, penanaman pohon, dan edukasi tentang keberlanjutan lingkungan.",
      features: ["Penanaman 10,000 pohon", "Program daur ulang", "Edukasi lingkungan"],
      color: "bg-green-600",
    },
  ]

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#063452] mb-4">Program Unggulan Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami menjalankan berbagai program yang dirancang untuk memberikan dampak positif dan berkelanjutan bagi
            masyarakat di berbagai bidang kehidupan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#063452]">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{program.description}</p>

                <div className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-[#309292] rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-[#d97d2f] hover:bg-[#d97d2f]/90 text-white">
                    Lihat Program
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#309292] text-[#309292] hover:bg-[#309292] hover:text-white"
                  >
                    Dukung Program
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
