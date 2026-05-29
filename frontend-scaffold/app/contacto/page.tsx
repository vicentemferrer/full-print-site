import { MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react"
import { Breadcrumbs } from "@/components/Breadcrumbs"

export const metadata = {
  title: "Contacto - Full Print",
  description: "Estamos listos para ayudarte con impresiones, documentos, letreros, diseño gráfico y cotizaciones personalizadas.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumbs 
        items={[
          { label: "Inicio", href: "/" },
          { label: "Contacto" },
        ]} 
      />

      {/* Header Section */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-cyan-600 mb-4">
            <span>FULL PRINT | ANCUD - CHILOÉ</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contáctanos
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mb-8">
            Estamos listos para ayudarte con impresiones, documentos, letreros, diseño gráfico y cotizaciones personalizadas.
          </p>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/56912345678"
              className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              ESCRIBENOS POR WHATSAPP
            </a>
            <a
              href="mailto:hola@fullprint.cl"
              className="bg-black text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              ENVIAR CORREO
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-3">+56 9 9406 9861</p>
            <a href="https://wa.me/56912345678" className="text-green-600 text-sm font-semibold">
              Enviar mensaje →
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-magenta-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-magenta-600" />
            </div>
            <h3 className="font-bold mb-2">Correo</h3>
            <p className="text-gray-600 text-sm mb-3">fullprint.chiloé@gmail.com</p>
            <a href="mailto:hola@fullprint.cl" className="text-magenta-600 text-sm font-semibold">
              Enviar correo →
            </a>
          </div>

          {/* Direction */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-cyan-600" />
            </div>
            <h3 className="font-bold mb-2">Dirección</h3>
            <p className="text-gray-600 text-sm mb-3">Chacabuco 797, Ancud, Chiloé</p>
            <a href="#" className="text-cyan-600 text-sm font-semibold">
              Ver ubicación →
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="font-bold mb-2">Horario</h3>
            <p className="text-gray-600 text-sm mb-3">
              Lunes a Viernes 09:00 - 18:30 hrs
              <br />
              Sábado 10:30 - 14:00 hrs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold mb-6">Envíanos tu solicitud o consulta</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Teléfono / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+56 9 ..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Tipo de solicitud</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500">
                  <option>Selecciona una opción</option>
                  <option>Impresión</option>
                  <option>Cotización</option>
                  <option>Consulta General</option>
                  <option>Soporte</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje / Detalles del pedido</label>
                <textarea
                  placeholder="Cuéntanos qué necesitas..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-500"
                ></textarea>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Adjuntar archivo (opcional)</p>
                <p className="text-xs text-gray-500">JPG, PNG, PDF, AI, CDR, DOCX (máx. 20 MB)</p>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                ENVIAR SOLICITUD
              </button>
            </form>
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Mapa de ubicación</p>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold mb-4">Ubicación</h3>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Chacabuco 797</strong>
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Ancud, Chiloé
              </p>
            </div>

            {/* Pickup Info */}
            <div className="bg-magenta-50 rounded-lg border border-magenta-200 p-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-magenta-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Retiro en tienda</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Chacabuco 797, Ancud, Chiloé
                  </p>
                  <p className="text-gray-600 text-sm">
                    Contáctanos por WhatsApp para coordinar envíos fuera de Ancud.
                  </p>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-cyan-50 rounded-lg border border-cyan-200 p-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Respuesta rápida</h3>
                  <p className="text-gray-600 text-sm">
                    Respondemos tu consulta a la brevedad.
                    Nuestro compromiso es tu satisfacción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 md:px-8 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-magenta-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="font-bold mb-2">Atención personalizada</h3>
            <p className="text-gray-600 text-sm">Te acompañamos en cada paso de tu proyecto.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-bold mb-2">Respuesta rápida</h3>
            <p className="text-gray-600 text-sm">Cotizaciones claras y ágiles para que decidas mejor.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">👨</span>
            </div>
            <h3 className="font-bold mb-2">Asesoría para elegir material</h3>
            <p className="text-gray-600 text-sm">Te ayudamos a elegir los mejores materiales y terminaciones.</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-bold mb-2">Archivos protegidos</h3>
            <p className="text-gray-600 text-sm">Tu información y archivos siempre están seguros.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
