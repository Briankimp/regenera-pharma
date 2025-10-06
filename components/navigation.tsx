"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`${
          scrollY > 50 ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image src="/iconlogo.png" alt="Regenera Pharma" fill className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wide gradient-text">REGENERA PHARMA</span>
                <span className="text-[10px] font-light tracking-widest text-muted-foreground uppercase">
                  Aeternus Caelum
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">
                HOME
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">
                ABOUT
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">
                PRODUCTS
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium hover:text-primary transition-colors tracking-wide"
              >
                RESOURCES
              </Link>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide">
                  CONTACT US
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border shadow-lg">
          <div className="px-6 py-6 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary transition-colors tracking-wide py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium hover:text-primary transition-colors tracking-wide py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/products"
              className="block text-sm font-medium hover:text-primary transition-colors tracking-wide py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link
              href="/resources"
              className="block text-sm font-medium hover:text-primary transition-colors tracking-wide py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              RESOURCES
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
