'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="max-w-[1180px] mx-auto px-5 py-4 flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
          )}
          {item.href ? (
            <Link 
              href={item.href}
              className="text-[#F4147E] hover:text-[#D60E63] transition-colors font-semibold"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#5F666D] font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}
