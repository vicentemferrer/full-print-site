"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Share2, Download, Cloud } from "lucide-react"
import { Breadcrumbs } from "@/components/Breadcrumbs"

const productDetails: Record<string, any> = {
  "1": {
    name: "Tarjetas de Presentación",
    category: "Tarjetería y Marketing",
    description: "Tarjetas de presentación de alta calidad que comunican profesionalismo y refuerzan tu marca. Personaliza cada detalle y envíanos la información para recibir una cotización a tu medida.",
    longDescription: "Nuestras tarjetas de presentación combinan diseño, calidad y acabados profesionales para dejar una impresión duradera. Ideales para empresas, emprendedores y profesionales que buscan proyectar una imagen sólida y coherente.",
    specs: [
      { label: "Tipo de impresión", value: "Una cara / Doble cara" },
      { label: "Material", value: "Selecciona el material" },
      { label: "Cantidad", value: "50, 100, 250, 500" },
      { label: "Tamaño (Ancho)", value: "Ej: 10 cm, 90 cm, 120 cm" },
      { label: "Tamaño (Largo)", value: "Ej: 15 cm, 120 cm, 200 cm" },
      { label: "Tipo de papel / Material", value: "Ej: Couche 300 gr, Adhesivo, Lona, Acrílico, etc." },
      { label: "Laminado", value: "No aplica" },
      { label: "Terminación", value: "No aplica" },
    ],
    features: [
      {
        icon: "✨",
        title: "Impresión de alta calidad",
        description: "Colores nítidos y acabados profesionales que reflejan profesionalismo.",
      },
      {
        icon: "📄",
        title: "Materiales profesionales",
        description: "Papeles y cartulinas seleccionados para resultados superiores.",
      },
      {
        icon: "✂️",
        title: "Terminaciones personalizadas",
        description: "Opciones de laminado y cortes para un acabado especial.",
      },
      {
        icon: "💬",
        title: "Asesoría para tu cotización",
        description: "Te ayudamos a elegir la mejor opción según tu marca y objetivo.",
      },
    ],
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.product as string
  const category = params.category as string
  const product = productDetails[productId] || productDetails["1"]

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumbs 
        items={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: product.category, href: `/productos/${category}` },
          { label: product.name },
        ]} 
      />

      {/* Product Header */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {product.name}
          </h1>
          
          <p className="text-gray-600 text-lg mb-4">
            {product.description}
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

      {/* Main Content */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Image & Info */}
          <div className="lg:col-span-2">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg p-8 mb-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📦</div>
                <p className="text-gray-500">Imagen del producto</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-200 mb-8">
              <button className="px-4 py-3 border-b-2 border-cyan-500 font-semibold text-cyan-600">
                Descripción
              </button>
              <button className="px-4 py-3 text-gray-600 hover:text-gray-900">
                Especificaciones
              </button>
              <button className="px-4 py-3 text-gray-600 hover:text-gray-900">
                Recomendaciones
              </button>
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none mb-12">
              <p>{product.longDescription}</p>
              <p>
                Perfectas para ferias, reuniones, networking y cualquier ocasión donde tu marca hable por ti.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-12 border-t border-gray-200">
              {product.features.map((feature: any, index: number) => (
                <div key={index}>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Customization Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-6">Arma tu cotización</h2>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Tipo de impresión</label>
                  <div className="flex gap-2">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="print" defaultChecked />
                      <span className="text-sm">Una cara</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="print" />
                      <span className="text-sm">Doble cara</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Material</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                    <option>Selecciona el material</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Cantidad</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[50, 100, 250, 500].map((qty) => (
                      <button
                        key={qty}
                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:border-cyan-500 transition-colors"
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tamaño (Ancho)</label>
                  <input
                    type="text"
                    placeholder="Ej: 10 cm, 90 cm, 120 cm"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tamaño (Largo)</label>
                  <input
                    type="text"
                    placeholder="Ej: 15 cm, 120 cm, 200 cm"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 mt-8 pt-8 border-t border-gray-200">
                <a
                  href="https://wa.me/56912345678"
                  className="flex-1 bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors text-center text-sm"
                >
                  Solicitar cotización
                </a>
                <a
                  href="mailto:hola@fullprint.cl"
                  className="flex-1 bg-white border-2 border-gray-300 text-black font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors text-center text-sm"
                >
                  Enviar por correo
                </a>
              </div>

              {/* File Upload */}
              <div className="mt-6 p-4 border-2 border-dashed border-gray-200 rounded-lg text-center">
                <Cloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-600 mb-2">Haz clic o arrastra tu archivo aquí</p>
                <p className="text-xs text-gray-500">JPG, PNG, PDF, AI o PSD (Máx. 25 MB)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
