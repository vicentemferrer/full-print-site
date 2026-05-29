"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, Menu, X, Home, Package, Briefcase, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import styles from "./Header.module.css"

// Navigation data
const productCategories = [
  {
    name: "Documentos",
    icon: "file",
    href: "/productos/documentos",
    submenu: [
      { name: "Tarjetas de Presentación", href: "/productos/documentos/tarjetas" },
      { name: "Membretes", href: "/productos/documentos/membretes" },
      { name: "Sobres", href: "/productos/documentos/sobres" },
      { name: "Carpetas", href: "/productos/documentos/carpetas" },
    ],
  },
  {
    name: "Fotografías",
    icon: "camera",
    href: "/productos/fotografias",
    submenu: [
      { name: "Impresiones", href: "/productos/fotografias/impresiones" },
      { name: "Lienzos", href: "/productos/fotografias/lienzos" },
      { name: "Fotolibros", href: "/productos/fotografias/fotolibros" },
      { name: "Pósters", href: "/productos/fotografias/posters" },
    ],
  },
  {
    name: "Planos y Ploteos",
    icon: "ruler",
    href: "/productos/planos-ploteos",
    submenu: [
      { name: "Planos A0", href: "/productos/planos-ploteos/a0" },
      { name: "Planos A1", href: "/productos/planos-ploteos/a1" },
      { name: "Planos A2", href: "/productos/planos-ploteos/a2" },
      { name: "Ploteos Especiales", href: "/productos/planos-ploteos/especiales" },
    ],
  },
  {
    name: "Gráfica Publicitaria",
    icon: "palette",
    href: "/productos/grafica-publicitaria",
    submenu: [
      { name: "Afiches", href: "/productos/grafica-publicitaria/afiches" },
      { name: "Banners", href: "/productos/grafica-publicitaria/banners" },
      { name: "Vinilos", href: "/productos/grafica-publicitaria/vinilos" },
      { name: "Lona", href: "/productos/grafica-publicitaria/lona" },
    ],
  },
  {
    name: "Tarjetería y Marketing",
    icon: "card",
    href: "/productos/tarjeteria-marketing",
    active: true,
    submenu: [
      { name: "Tarjetas de Presentación", href: "/productos/tarjeteria-marketing/tarjetas" },
      { name: "Flyers", href: "/productos/tarjeteria-marketing/flyers" },
      { name: "Giftcards", href: "/productos/tarjeteria-marketing/giftcards" },
      { name: "Invitaciones", href: "/productos/tarjeteria-marketing/invitaciones" },
      { name: "Imanes", href: "/productos/tarjeteria-marketing/imanes" },
      { name: "Afiches", href: "/productos/tarjeteria-marketing/afiches" },
      { name: "Marcapáginas", href: "/productos/tarjeteria-marketing/marcapaginas" },
      { name: "Entradas", href: "/productos/tarjeteria-marketing/entradas" },
    ],
  },
  {
    name: "Personalizados",
    icon: "custom",
    href: "/productos/personalizados",
    submenu: [
      { name: "Tazas", href: "/productos/personalizados/tazas" },
      { name: "Camisetas", href: "/productos/personalizados/camisetas" },
      { name: "Mochilas", href: "/productos/personalizados/mochilas" },
      { name: "Objetos Varios", href: "/productos/personalizados/varios" },
    ],
  },
]

const navLinks = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Productos", href: "/productos", icon: Package, hasDropdown: true },
  { name: "Trabajos", href: "/trabajos", icon: Briefcase },
  { name: "Contacto", href: "/contacto", icon: Phone },
]

// Category Icon Component
function CategoryIcon({ type, className }: { type: string; className?: string }) {
  const iconClass = cn("w-5 h-5", className)
  
  switch (type) {
    case "file":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    case "camera":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      )
    case "ruler":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.5 4h-5L3 14v6h6l6.5-10V4z" />
          <path d="M21 4v16h-6V4h6z" />
        </svg>
      )
    case "palette":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="13.5" cy="6.5" r="2.5" />
          <circle cx="6.5" cy="12" r="2.5" />
          <circle cx="8.5" cy="18.5" r="2.5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
        </svg>
      )
    case "card":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M7 15h4M7 11h2" />
        </svg>
      )
    case "custom":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
      )
    default:
      return null
  }
}

// WhatsApp Icon Component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// Full Print Logo Component
function FullPrintLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={styles.logoIcon}>
        <div className={styles.logoInner}>
          <span className={styles.logoText}>FP</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-lg leading-tight tracking-tight">FULL PRINT</span>
        <span className="text-white/70 text-[10px] tracking-widest uppercase">Centro de Impresiones</span>
      </div>
    </div>
  )
}

// Desktop Dropdown Menu
function ProductsDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeCategory, setActiveCategory] = useState<string | null>("Tarjetería y Marketing")

  if (!isOpen) return null

  const activeSubmenu = productCategories.find(cat => cat.name === activeCategory)?.submenu

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      
      {/* Dropdown */}
      <div className={styles.dropdown}>
        <div className={styles.dropdownContent}>
          {/* Categories */}
          <div className={styles.dropdownCategories}>
            {productCategories.map((category) => (
              <button
                key={category.name}
                className={cn(
                  styles.dropdownCategory,
                  activeCategory === category.name && styles.dropdownCategoryActive
                )}
                onMouseEnter={() => setActiveCategory(category.name)}
                onClick={() => {
                  setActiveCategory(category.name)
                }}
              >
                <CategoryIcon type={category.icon} className={styles.dropdownCategoryIcon} />
                <span>{category.name}</span>
                {category.submenu && (
                  <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
                )}
              </button>
            ))}
          </div>

          {/* Submenu */}
          {activeSubmenu && (
            <div className={styles.dropdownSubmenu}>
              <h3 className={styles.dropdownSubmenuTitle}>
                {activeCategory}
              </h3>
              <div className={styles.dropdownSubmenuGrid}>
                {activeSubmenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={styles.dropdownSubmenuItem}
                    onClick={onClose}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// Mobile Menu (Inline dropdown, not modal)
function MobileMenu({ 
  isOpen, 
  expandedCategory, 
  setExpandedCategory,
  expandedSubcategory,
  setExpandedSubcategory,
  onClose 
}: { 
  isOpen: boolean
  expandedCategory: string | null
  setExpandedCategory: (category: string | null) => void
  expandedSubcategory: string | null
  setExpandedSubcategory: (category: string | null) => void
  onClose: () => void 
}) {
  const menuRef = useRef<HTMLDivElement>(null)

  if (!isOpen) return null

  const handleCategoryClick = (categoryName: string) => {
    setExpandedCategory(prevExpanded => {
      if (prevExpanded === categoryName) {
        return null
      }
      return categoryName
    })
  }

  const handleSubcategoryClick = (subcategoryName: string) => {
    setExpandedSubcategory(prevExpanded => {
      if (prevExpanded === subcategoryName) {
        return null
      }
      return subcategoryName
    })
  }

  return (
    <div className={styles.mobileMenuContainer} ref={menuRef}>
      {/* Navigation Items */}
      <nav className={styles.mobileMenuNav}>
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.hasDropdown ? (
              <>
                <button
                  className={cn(
                    styles.mobileMenuItem,
                    expandedCategory === link.name && styles.mobileMenuItemActive
                  )}
                  onClick={() => handleCategoryClick(link.name)}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 ml-auto transition-transform",
                      expandedCategory === link.name && "rotate-180"
                    )} 
                  />
                </button>
                
                {/* Expandable Categories */}
                {expandedCategory === link.name && (
                  <div className={styles.mobileSubmenu}>
                    {productCategories.map((category) => (
                      <div key={category.name}>
                        <button
                          className={cn(
                            styles.mobileSubmenuCategory,
                            category.active && styles.mobileSubmenuCategoryActive,
                            expandedSubcategory === category.name && styles.mobileSubmenuCategoryActive
                          )}
                          onClick={() => handleSubcategoryClick(category.name)}
                        >
                          <CategoryIcon type={category.icon} className="w-4 h-4" />
                          <span>{category.name}</span>
                          {category.submenu && (
                            <ChevronDown 
                              className={cn(
                                "w-4 h-4 ml-auto transition-transform",
                                expandedSubcategory === category.name && "rotate-180"
                              )} 
                            />
                          )}
                        </button>
                        
                        {/* Submenu Items */}
                        {expandedSubcategory === category.name && category.submenu && (
                          <div className={styles.mobileSubmenuItems}>
                            {category.submenu.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={styles.mobileSubmenuItem}
                                onClick={onClose}
                              >
                                <span>{item.name}</span>
                                <ChevronRight className="w-4 h-4 opacity-40" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={link.href}
                className={styles.mobileMenuItem}
                onClick={onClose}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
                <ChevronRight className="w-5 h-5 ml-auto opacity-40" />
              </Link>
            )}
          </div>
        ))}

        {/* CTA Button */}
        <Link
          href="/cotiza-aqui"
          className={styles.mobileCta}
          onClick={onClose}
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>COTIZA AQUÍ</span>
        </Link>
      </nav>
    </div>
  )
}

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest(`.${styles.headerWrapper}`)) {
        setIsMobileMenuOpen(false)
        setExpandedCategory(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) {
      setExpandedCategory(null)
    }
  }

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
    setExpandedCategory(null)
    setExpandedSubcategory(null)
  }

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <FullPrintLogo />
          </Link>

          {/* Desktop Navigation - includes CTA button */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <button
                    className={cn(
                      styles.navLink,
                      isProductsOpen && styles.navLinkActive
                    )}
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                  >
                    {link.name}
                    <ChevronDown 
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isProductsOpen && "rotate-180"
                      )} 
                    />
                    {isProductsOpen && <span className={styles.navLinkDot} />}
                  </button>
                ) : (
                  <Link href={link.href} className={styles.navLink}>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button - Part of nav links */}
            <Link
              href="/cotiza-aqui"
              className={styles.ctaButton}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>COTIZA AQUÍ</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={handleMobileMenuToggle}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Products Dropdown - Desktop */}
        <ProductsDropdown 
          isOpen={isProductsOpen} 
          onClose={() => setIsProductsOpen(false)} 
        />
      </div>

      {/* Mobile Menu - Inline dropdown below header */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        expandedCategory={expandedCategory}
        setExpandedCategory={setExpandedCategory}
        expandedSubcategory={expandedSubcategory}
        setExpandedSubcategory={setExpandedSubcategory}
        onClose={handleMobileMenuClose}
      />
    </header>
  )
}

export default Header
