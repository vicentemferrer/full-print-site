"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { MessageCircle, Mail, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/Breadcrumbs"

// Mock product data by category
const productsByCategory: Record<string, any[]> = {
  "tarjeteria-marketing": [
    {
      id: 1,
      name: "Tarjetas de Presentación",
      description: "Tarjetas de presentación de alta calidad que comunican profesionalismo y refuerzan tu marca.",
      image: "/placeholder-tarjetas.jpg",
      category: "Tarjetería y Marketing",
    },
    {
      id: 2,
      name: "Flyers",
      description: "Diseño de contenido para Instagram de cafetería local. Estética premium, limpia y alineada a la marca.",
      image: "/placeholder-flyers.jpg",
      category: "Tarjetería y Marketing",
    },
    {
      id: 3,
      name: "Giftcards",
      description: "Tarjetas regalo personalizadas para promocionar tus productos y servicios.",
      image: "/placeholder-giftcards.jpg",
      category: "Tarjetería y Marketing",
    },
    {
      id: 4,
      name: "Invitaciones",
      description: "Invitaciones personalizadas para eventos especiales y ocasiones importantes.",
      image: "/placeholder-invitaciones.jpg",
      category: "Tarjetería y Marketing",
    },
    {
      id: 5,
      name: "Imanes",
      description: "Imanes publicitarios para promocionar tu negocio de forma innovadora.",
      image: "/placeholder-imanes.jpg",
      category: "Tarjetería y Marketing",
    },
    {
      id: 6,
      name: "Afiches",
      description: "Afiches de impresión profesional para comunicar tus mensajes con impacto.",
      image: "/placeholder-afiches.jpg",
      category: "Tarjetería y Marketing",
    },
    {
      id: 7,
      name: "Marcapáginas",
      description: "Marcapáginas personalizados con tus diseños y mensajes especiales.",
      image: "/placeholder-marcapaginas.jpg",
      category: "Tarjetería y Marketing",
    },
    {
      id: 8,
      name: "Entradas",
      description: "Entradas para eventos con diseño personalizado y seguridad.",
      image: "/placeholder-entradas.jpg",
      category: "Tarjetería y Marketing",
    },
  ],
  "documentos": [
    { id: 1, name: "Tarjetas de Presentación", category: "Documentos" },
    { id: 2, name: "Membretes", category: "Documentos" },
    { id: 3, name: "Sobres", category: "Documentos" },
    { id: 4, name: "Carpetas", category: "Documentos" },
  ],
  "fotografias": [
    { id: 1, name: "Impresiones", category: "Fotografías" },
    { id: 2, name: "Lienzos", category: "Fotografías" },
    { id: 3, name: "Fotolibros", category: "Fotografías" },
    { id: 4, name: "Pósters", category: "Fotografías" },
  ],
  "planos-ploteos": [
    { id: 1, name: "Planos A0", category: "Planos y Ploteos" },
    { id: 2, name: "Planos A1", category: "Planos y Ploteos" },
    { id: 3, name: "Planos A2", category: "Planos y Ploteos" },
    { id: 4, name: "Ploteos Especiales", category: "Planos y Ploteos" },
  ],
  "grafica-publicitaria": [
    { id: 1, name: "Afiches", category: "Gráfica Publicitaria" },
    { id: 2, name: "Banners", category: "Gráfica Publicitaria" },
    { id: 3, name: "Vinilos", category: "Gráfica Publicitaria" },
    { id: 4, name: "Lona", category: "Gráfica Publicitaria" },
  ],
  "personalizados": [
    { id: 1, name: "Tazas", category: "Personalizados" },
    { id: 2, name: "Camisetas", category: "Personalizados" },
    { id: 3, name: "Mochilas", category: "Personalizados" },
    { id: 4, name: "Objetos Varios", category: "Personalizados" },
  ],
}

const categoryNames: Record<string, string> = {
  "tarjeteria-marketing": "Tarjetería y Marketing",
  "documentos": "Documentos",
  "fotografias": "Fotografías",
  "planos-ploteos": "Planos y Ploteos",
  "grafica-publicitaria": "Gráfica Publicitaria",
  "personalizados": "Personalizados",
}

// Category Tabs - using category subproducts as tabs
const categoryTabs: Record<string, string[]> = {
  "tarjeteria-marketing": ["Tarjetas", "Flyers", "Giftcards", "Invitaciones", "Imanes", "Afiches", "Marcapáginas", "Entradas"],
  "documentos": ["Tarjetas", "Membretes", "Sobres", "Carpetas"],
  "fotografias": ["Impresiones", "Lienzos", "Fotolibros", "Pósters"],
  "planos-ploteos": ["A0", "A1", "A2", "Especiales"],
  "grafica-publicitaria": ["Afiches", "Banners", "Vinilos", "Lona"],
  "personalizados": ["Tazas", "Camisetas", "Mochilas", "Otros"],
}

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string
  const [activeTab, setActiveTab] = useState(0)

  const products = productsByCategory[category] || []
  const categoryName = categoryNames[category] || category
  const tabs = categoryTabs[category] || []

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumbs 
        items={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: categoryName },
        ]} 
      />

      {/* Header Section */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {categoryName}
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mb-8">
            Tarjetas, flyers, invitaciones y material promocional de alta calidad para impulsar tu marca y comunicar con impacto.
          </p>

          {/* Decorative underline */}
          <div className="flex gap-1 w-32 mb-8">
            <div className="h-1 bg-cyan-500 flex-1"></div>
            <div className="h-1 bg-magenta-600 flex-1"></div>
            <div className="h-1 bg-yellow-400 flex-1"></div>
            <div className="h-1 bg-black flex-1"></div>
          </div>

          {/* Tabs */}
          {tabs.length > 0 && (
            <div className="flex flex-wrap gap-2 md:gap-3">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeTab === index
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/productos/${category}/${product.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all">
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      [Product Image]
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-2 group-hover:text-cyan-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-600 text-sm font-semibold">
                      Ver detalle
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="font-bold mb-2">Impresión de alta calidad</h3>
              <p className="text-gray-600 text-sm">Colores vivos y nítidos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-magenta-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⚙️</span>
              </div>
              <h3 className="font-bold mb-2">Materiales resistentes</h3>
              <p className="text-gray-600 text-sm">Para uso interior y exterior</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">✂️</span>
              </div>
              <h3 className="font-bold mb-2">Cortes precisos</h3>
              <p className="text-gray-600 text-sm">Troquelado profesional</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📏</span>
              </div>
              <h3 className="font-bold mb-2">Varias medidas</h3>
              <p className="text-gray-600 text-sm">Desde pequeñas a gran formato</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sidebar */}
      <section className="px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-cyan-50 rounded-lg p-8 md:p-12 border border-cyan-200">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-cyan-600" />
            </div>
            <h2 className="text-2xl font-bold mb-3">¿Necesitas una cotización personalizada?</h2>
            <p className="text-gray-600 mb-6">
              Te ayudamos a elegir el formato, material y cantidad ideal para tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/56912345678"
                className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Escribenos por WhatsApp
              </a>
              <a
                href="mailto:hola@fullprint.cl"
                className="bg-white border-2 border-gray-300 text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Envianos un correo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
