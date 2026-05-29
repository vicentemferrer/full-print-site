import Link from "next/link"
import { FileText, Camera, Ruler, Palette, CreditCard, Gift } from "lucide-react"

const categories = [
  {
    name: "Documentos",
    description: "Impresos esenciales para tu empresa y negocio.",
    icon: FileText,
    href: "/productos/documentos",
    color: "cyan",
  },
  {
    name: "Fotografías",
    description: "Impresiones fotográficas de alta calidad.",
    icon: Camera,
    href: "/productos/fotografias",
    color: "magenta",
  },
  {
    name: "Planos",
    description: "Impresión de planos con precisión profesional.",
    icon: Ruler,
    href: "/productos/planos-ploteos",
    color: "yellow",
  },
  {
    name: "Gráfica Publicitaria",
    description: "Impresión en gran formato para impactar.",
    icon: Palette,
    href: "/productos/grafica-publicitaria",
    color: "black",
  },
  {
    name: "Tarjetería y marketing",
    description: "Material impreso para promocionar tu marca.",
    icon: CreditCard,
    href: "/productos/tarjeteria-marketing",
    color: "magenta",
  },
  {
    name: "Personalizados",
    description: "Productos únicos hechos a tu medida.",
    icon: Gift,
    href: "/productos/personalizados",
    color: "cyan",
  },
]

export const metadata = {
  title: "Productos - Full Print",
  description: "Soluciones de impresión profesional para cada necesidad. Explora nuestras categorías y encuentra lo que tu proyecto necesita.",
}

export default function ProductosPage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#5F666D] mb-6">
            <Link href="/" className="hover:text-[#050708] transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-[#F4147E] font-semibold">Productos</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Nuestros productos
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mb-6">
            Soluciones de impresión profesional para cada necesidad.
            <br />
            Explora nuestras categorías y encuentra lo que tu proyecto necesita.
          </p>

          {/* Decorative underline */}
          <div className="flex gap-1 w-32">
            <div className="h-1 bg-cyan-500 flex-1"></div>
            <div className="h-1 bg-magenta-600 flex-1"></div>
            <div className="h-1 bg-yellow-400 flex-1"></div>
            <div className="h-1 bg-black flex-1"></div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            const colorMap = {
              cyan: "bg-cyan-100 text-cyan-600",
              magenta: "bg-magenta-100 text-magenta-600",
              yellow: "bg-yellow-100 text-yellow-600",
              black: "bg-gray-100 text-black",
            }
            
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group block p-6 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
              >
                <div className={`${colorMap[category.color as keyof typeof colorMap]} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="text-cyan-600 font-semibold flex items-center gap-2 text-sm">
                  Explorar
                  <span>→</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-magenta-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">¿No encuentras lo que buscas?</h2>
            <p className="text-gray-600 mb-6">
              Podemos ayudarte a encontrar la mejor solución para tu proyecto.
              Escribenos y te asesoramos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/56912345678"
                className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>💬</span>
                ESCRIBENOS POR WHATSAPP
              </a>
              <a
                href="mailto:hola@fullprint.cl"
                className="bg-white border-2 border-black text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                ENVIANOS UN CORREO
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
