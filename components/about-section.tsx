import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Award } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Misi Kami",
      description: "Memberdayakan masyarakat melalui program pendidikan, kesehatan, dan sosial yang berkelanjutan.",
    },
    {
      icon: Eye,
      title: "Visi Kami",
      description:
        "Menjadi yayasan terdepan dalam menciptakan perubahan positif dan pemberdayaan masyarakat Indonesia.",
    },
    {
      icon: Users,
      title: "Nilai Kami",
      description: "Transparansi, integritas, dan komitmen untuk memberikan dampak nyata bagi masyarakat.",
    },
    {
      icon: Award,
      title: "Pencapaian",
      description: "Telah membantu lebih dari 10,000 keluarga dan menjalankan 50+ program pemberdayaan.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#063452] mb-4">Tentang Yayasan Harapan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Didirikan pada tahun 2015, Yayasan Harapan berkomitmen untuk menciptakan perubahan positif dalam kehidupan
            masyarakat melalui program-program yang berfokus pada pendidikan, kesehatan, dan pemberdayaan ekonomi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#309292] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#063452] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#063452] mb-6">Cerita Kami</h3>
            <p className="text-gray-600 mb-4">
              Berawal dari kepedulian sekelompok individu terhadap kondisi pendidikan dan kesehatan masyarakat kurang
              mampu, Yayasan Harapan tumbuh menjadi organisasi yang dipercaya dalam menjalankan program-program
              pemberdayaan.
            </p>
            <p className="text-gray-600 mb-4">
              Dengan dukungan dari para donatur, relawan, dan mitra strategis, kami telah berhasil mengimplementasikan
              berbagai program yang memberikan dampak langsung kepada masyarakat.
            </p>
            <p className="text-gray-600">
              Transparansi dan akuntabilitas menjadi fondasi utama dalam setiap kegiatan yang kami lakukan, memastikan
              setiap kontribusi memberikan manfaat maksimal.
            </p>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Tim Yayasan Harapan"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-[#309292]/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
