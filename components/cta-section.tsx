import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Share2, Mail } from "lucide-react"

export default function CtaSection() {
  return (
    <section id="cta" className="py-20 bg-[#063452] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabunglah dengan Gerakan Perubahan</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Setiap kontribusi Anda, sekecil apapun, dapat membuat perbedaan besar dalam kehidupan mereka yang
            membutuhkan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Donasi Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-[#d97d2f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Donasi Sekarang</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-200 mb-6">
                Berikan donasi untuk mendukung program-program kami dan bantu mereka yang membutuhkan.
              </p>
              <Button variant="outline" className="w-full border-white text-[#309292] hover:bg-[#d97d2f] hover:text-white">
                Mulai Donasi
              </Button>
            </CardContent>
          </Card>

          {/* Volunteer Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-[#309292] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Jadi Relawan</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-200 mb-6">
                Bergabunglah sebagai relawan dan berikan waktu serta keahlian Anda untuk membantu sesama.
              </p>
              <Button variant="outline" className="w-full border-white text-[#309292] hover:bg-[#d97d2f] hover:text-white">
                Daftar Relawan
              </Button>
            </CardContent>
          </Card>

          {/* Share Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Sebarkan Misi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-200 mb-6">
                Bantu sebarkan misi kami ke lebih banyak orang melalui media sosial dan jaringan Anda.
              </p>
              <Button variant="outline" className="w-full border-white text-[#309292] hover:bg-[#d97d2f] hover:text-white">
                Bagikan Sekarang
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Dapatkan Update Terbaru</h3>
          <p className="text-gray-200 mb-6">
            Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang program dan kegiatan Yayasan
            Harapan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Button className="bg-[#d97d2f] hover:bg-[#d97d2f]/90 text-white px-8">
              <Mail className="w-4 h-4 mr-2" />
              Berlangganan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
