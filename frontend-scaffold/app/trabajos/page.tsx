import { Star } from "lucide-react"
import { Breadcrumbs } from "@/components/Breadcrumbs"

const portfolioItems = [
  {
    id: 1,
    title: "Fast Food Instagram Visual Refresh",
    description: "Rediseño de identidad visual para redes sociales de marca de food delivery. Contenido llamativo y consistente.",
    category: "Redes Sociales",
    image: "🍔",
  },
  {
    id: 2,
    title: "Premium Café Instagram Design",
    description: "Diseño de contenido para Instagram de cafetería local. Estética premium, limpia y alineada a la marca.",
    category: "Redes Sociales",
    image: "☕",
  },
  {
    id: 3,
    title: "Pendón y gráfica para negocio local",
    description: "Diseño e impresión de pendón roller y gráfica publicitaria para gimnasio local.",
    category: "Impresión",
    image: "📋",
  },
  {
    id: 4,
    title: "Tarjetas de presentación premium",
    description: "Tarjetas de presentación con terminaciones premium: papel texturado, barniz selectivo y relieve.",
    category: "Impresión",
    image: "🎫",
  },
  {
    id: 5,
    title: "Letrero acrílico para tienda",
    description: "Fabricación e instalación de letrero en acrílico con separadores para tienda de ropa.",
    category: "Impresión",
    image: "🔤",
  },
  {
    id: 6,
    title: "Packaging y stickers personalizados",
    description: "Stickers troquelados y etiquetas personalizadas para emprendimientos locales.",
    category: "Impresión",
    image: "📦",
  },
]

const testimonials = [
  {
    name: "María",
    rating: 5,
    text: "Excelente servicio y calidad de impresión. Cumplieron con los plazos y el resultado superó mis expectativas.",
  },
  {
    name: "Carlos",
    rating: 5,
    text: "Los pendones y afiches quedaron increíbles. Muy buena atención y asesoría en todo el proceso.",
  },
  {
    name: "Camila",
    rating: 5,
    text: "Diseñaron nuestras redes sociales y el feedback que hablé por nosotros. Mayor interacción y una imagen coherente.",
  },
  {
    name: "Diego",
    rating: 5,
    text: "Stickers y packaging de gran calidad. Se nota el cuidado en los detalles de impresión y acabado en todo.",
  },
]

export const metadata = {
  title: "Trabajos - Full Print",
  description: "Conoce algunos de los proyectos que hemos realizado para nuestros clientes. Desde branding e impresión hasta gráfica publicitaria y más.",
}

export default function TrabajosPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumbs 
        items={[
          { label: "Inicio", href: "/" },
          { label: "Trabajos" },
        ]} 
      />

      {/* Header Section */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-cyan-600 mb-4">
            <span>FULL PRINT | ANCUD - CHILOÉ</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Trabajos
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mb-8">
            Conoce algunos de los proyectos que hemos realizado para nuestros clientes.
            Desde branding e impresión hasta gráfica publicitaria, redes sociales, packaging y material promocional.
          </p>

          {/* Decorative underline */}
          <div className="flex gap-1 w-32">
            <div className="h-1 bg-cyan-500 flex-1"></div>
            <div className="h-1 bg-magenta-600 flex-1"></div>
            <div className="h-1 bg-yellow-400 flex-1"></div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 md:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-full bg-cyan-500 text-white font-semibold text-sm">
              Todos
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200 transition-colors">
              Impresión
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200 transition-colors">
              Redes Sociales
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200 transition-colors">
              Letreros
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200 transition-colors">
              Branding
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all hover:shadow-md"
              >
                <div className="aspect-video bg-gray-100 flex items-center justify-center text-5xl">
                  {item.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 md:px-8 pb-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl font-bold">4.9</span>
            </div>
            <p className="text-gray-600">
              Clientes felices
              <br />
              <span className="text-sm">basado en 1000+ reseñas verificadas</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">{testimonial.text}</p>
                <p className="font-bold text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-magenta-100 rounded-lg p-8 text-center border-2 border-magenta-300">
            <div className="w-16 h-16 bg-magenta-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Cuéntanos tu experiencia</h2>
            <p className="text-gray-700 mb-6">
              Tu opinión nos ayuda a seguir mejorando cada día.
            </p>
            <button className="bg-magenta-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-magenta-700 transition-colors">
              Dejar testimonio
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
