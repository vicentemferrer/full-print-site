import { Cloud, Send, Star, Zap, Award, Lock } from "lucide-react"
import { Breadcrumbs } from "@/components/Breadcrumbs"

export const metadata = {
  title: "Cotización Personalizada - Full Print",
  description: "Solicita tu cotización personalizada. Completa los detalles de tu producto y recibe una propuesta a medida de nuestro equipo.",
}

export default function CotizaAquiPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumbs 
        items={[
          { label: "Inicio", href: "/" },
          { label: "Cotiza Aquí" },
        ]} 
      />

      {/* Header Section */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-cyan-600 mb-4">
            <span>FULL PRINT | ANCUD - CHILOÉ</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cotización Personalizada
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl">
            Cuéntanos qué necesitas. Completa los detalles de tu producto personalizado y adjunta tus archivos para recibir una cotización a medida.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-8">Tipo de producto</h2>

              {/* Product Type Selection */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <input type="radio" id="existing" name="productType" defaultChecked />
                    <label htmlFor="existing" className="font-semibold cursor-pointer">Producto existente</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" id="custom" name="productType" />
                    <label htmlFor="custom" className="font-semibold cursor-pointer flex items-center gap-2">
                      <span className="w-2 h-2 bg-magenta-600 rounded-full"></span>
                      Producto personalizado
                    </label>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <span className="flex items-center gap-2">
                      <span>📝</span>
                      Nombre del producto
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Pendones roller, Tarjetas de presentación, Afiches, etc."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <span className="flex items-center gap-2">
                      <span>📦</span>
                      Cantidad
                    </span>
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="number"
                      defaultValue="1"
                      className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm"
                    />
                    <button className="bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center">
                      <span>+</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      <span className="flex items-center gap-2">
                        <span>↔️</span>
                        Tamaño (Ancho)
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 10 cm, 90 cm, 120 cm"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      <span className="flex items-center gap-2">
                        <span>↕️</span>
                        Tamaño (Largo)
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 15 cm, 120 cm, 200 cm"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <span className="flex items-center gap-2">
                      <span>📄</span>
                      Tipo de papel / Material
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Couche 300 gr, Adhesivo, Lona, Acrílico, etc."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <span className="flex items-center gap-2">
                      <span>✨</span>
                      Laminado
                    </span>
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm">
                    <option>No aplica</option>
                    <option>Mate</option>
                    <option>Brillante</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <span className="flex items-center gap-2">
                      <span>🎨</span>
                      Terminación
                    </span>
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm">
                    <option>No aplica</option>
                    <option>Esquinas rectas</option>
                    <option>Esquinas redondeadas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <span className="flex items-center gap-2">
                      <span>📎</span>
                      Archivo
                    </span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Cloud className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Haz clic o arrastra tu archivo aquí</p>
                    <p className="text-xs text-gray-500 mb-3">JPG, PNG, PDF, AI o PSD (Máx. 25 MB)</p>
                    <button type="button" className="text-magenta-600 font-semibold text-sm">
                      Seleccionar archivo
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <span className="flex items-center gap-2">
                      <span>📝</span>
                      Detalles adicionales
                    </span>
                  </label>
                  <textarea
                    placeholder="Cuéntanos más sobre tu proyecto, acabados especiales, colores, usos, etc."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Solicitar cotización
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-white border-2 border-gray-300 text-black font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Enviar por correo
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quote Help */}
            <div className="bg-magenta-50 rounded-lg p-6 border border-magenta-200">
              <div className="w-10 h-10 bg-magenta-600 rounded-full flex items-center justify-center mb-3">
                <span className="text-lg">❓</span>
              </div>
              <h3 className="font-bold mb-2">¿Necesitas ayuda con tu cotización?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Nuestro equipo está listo para asesorarte y ayudarte a definir la mejor opción para tu proyecto.
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-3">
              <a
                href="https://wa.me/56912345678"
                className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-green-500 transition-colors"
              >
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span>💬</span>
                </div>
                <div>
                  <p className="font-bold text-sm">WhatsApp</p>
                  <p className="text-gray-600 text-xs">+56 9 1234 5678</p>
                </div>
              </a>

              <a
                href="mailto:hola@fullprint.cl"
                className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-magenta-500 transition-colors"
              >
                <div className="w-8 h-8 bg-magenta-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span>📧</span>
                </div>
                <div>
                  <p className="font-bold text-sm">Correo</p>
                  <p className="text-gray-600 text-xs">hola@fullprint.cl</p>
                </div>
              </a>

              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span>⏰</span>
                </div>
                <div>
                  <p className="font-bold text-sm">Horario de atención</p>
                  <p className="text-gray-600 text-xs">Lunes a Viernes 09:00 – 18:30 hrs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span>⏱️</span>
                </div>
                <div>
                  <p className="font-bold text-sm">Te responderemos a la brevedad</p>
                  <p className="text-gray-600 text-xs">Recibirás tu cotización en el menor tiempo posible, con la mejor solución para tu proyecto.</p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <span>📁</span>
                Formatos de archivo aceptados
              </h3>
              <p className="text-gray-600 text-sm">JPG, PNG, PDF, AI, PSD, EPS</p>
              <p className="text-gray-600 text-xs mt-2">Máx. 50 MB por archivo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 md:px-8 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-magenta-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-magenta-600" />
            </div>
            <h3 className="font-bold mb-2">Atención personalizada</h3>
            <p className="text-gray-600 text-sm">Te acompañamos en cada paso de tu proyecto.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-bold mb-2">Respuesta rápida</h3>
            <p className="text-gray-600 text-sm">Cotizaciones claras y ágiles para que decidas mejor.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-bold mb-2">Asesoría para elegir material</h3>
            <p className="text-gray-600 text-sm">Te ayudamos a elegir los mejores materiales y terminaciones.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">Archivos protegidos</h3>
            <p className="text-gray-600 text-sm">Tu información y archivos siempre están seguros.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
