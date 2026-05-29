export default function Page() {
  return (
    <div>
        {/* Hero Section placeholder */}
        <section className="max-w-[1180px] mx-auto px-5 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <p className="text-[#F4147E] text-sm font-extrabold tracking-wide uppercase">
                FULL PRINT | ANCUD - CHILOÉ
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.98] tracking-tight text-[#050708]">
                Impresión profesional{" "}
                <span className="text-[#00AEEF]">que hace destacar tu marca</span>
              </h1>
              <p className="text-[#5F666D] text-lg leading-relaxed max-w-lg">
                Diseño, impresión y soluciones gráficas de alta calidad para empresas, emprendedores e instituciones.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/cotiza-aqui"
                  className="inline-flex items-center gap-2 bg-[#FFD400] text-[#050708] font-bold px-6 py-3.5 rounded-xl hover:bg-[#F2C900] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  COTIZA AQUÍ
                </a>
                <a
                  href="/productos"
                  className="inline-flex items-center gap-2 bg-[#101820] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#18222A] transition-colors border border-[#1F2933]"
                >
                  VER PRODUCTOS
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hero Image placeholder */}
            <div className="relative h-80 lg:h-[500px] bg-[#F7F8FA] rounded-2xl border border-[#E6E8EC] flex items-center justify-center">
              <p className="text-[#5F666D]">Mockups de productos</p>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="max-w-[1180px] mx-auto px-5 pb-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-[#F4147E] text-sm font-extrabold tracking-wide uppercase mb-2">
                PRODUCTOS DESTACADOS
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#050708]">
                Lo que más nos piden
              </h2>
            </div>
            <a
              href="/productos"
              className="hidden md:inline-flex items-center gap-2 text-[#050708] font-semibold hover:gap-3 transition-all"
            >
              VER CATÁLOGO COMPLETO
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {[
              { name: "Tarjetas de presentación", price: "$9.990", image: "📇" },
              { name: "Stickers personalizados", price: "$4.990", image: "🏷️", prefix: "Desde" },
              { name: "Pendones roller", price: "$39.990", image: "📌", prefix: "Desde" },
              { name: "Letreros acrílicos", price: "$24.990", image: "✨", prefix: "Desde" },
              { name: "Adhesivos vítrinas", price: "$8.990", image: "🪟", prefix: "Desde" },
              { name: "Planos y ploteos", price: "$2.990 m²", image: "📐", prefix: "Desde" },
            ].map((product, i) => (
              <a
                key={i}
                href="/productos"
                className="group flex flex-col bg-white border border-[#E6E8EC] rounded-2xl p-4 hover:shadow-lg hover:border-[#D0D3DC] transition-all"
              >
                <div className="w-full aspect-square bg-[#F7F8FA] rounded-xl mb-3 flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                  {product.image}
                </div>
                <h3 className="text-sm font-semibold text-[#050708] mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-[#F4147E] font-bold text-sm">
                  {product.prefix && <span className="text-[#5F666D] font-normal">{product.prefix} </span>}
                  {product.price}
                </p>
              </a>
            ))}
          </div>

          <div className="md:hidden flex justify-center">
            <a
              href="/productos"
              className="inline-flex items-center gap-2 text-[#050708] font-semibold hover:gap-3 transition-all border border-[#E6E8EC] px-4 py-2 rounded-lg hover:border-[#D0D3DC]"
            >
              VER CATÁLOGO COMPLETO
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Benefits Section placeholder */}
        <section className="max-w-[1180px] mx-auto px-5 pb-16">
          <div className="bg-white border border-[#E6E8EC] rounded-[22px] p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: "⭐", title: "Atención personalizada", color: "#F4147E" },
                { icon: "💎", title: "Calidad premium", color: "#00AEEF" },
                { icon: "⚡", title: "Producción rápida", color: "#FFD400" },
                { icon: "🚚", title: "Envíos e instalaciones", color: "#00AEEF" },
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full bg-white border border-[#E6E8EC] flex items-center justify-center text-xl"
                    style={{ color: benefit.color }}
                  >
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#050708]">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  )
}
