import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image src="/iconlogo.png" alt="Regenera Pharma" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide gradient-text">REGENERA PHARMA</span>
                <span className="text-[9px] font-light tracking-widest text-muted-foreground uppercase">
                  Aeternus Caelum
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
              Pioneering the future of regenerative medicine through innovation and scientific excellence.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 tracking-wide">PRODUCTS</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products#regencell" className="hover:text-primary transition-colors">
                  RegenCell Pro
                </Link>
              </li>
              <li>
                <Link href="/products#neuroplex" className="hover:text-primary transition-colors">
                  NeuroPlex
                </Link>
              </li>
              <li>
                <Link href="/products#cardioregen" className="hover:text-primary transition-colors">
                  CardioRegen
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-primary transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  Research & Publications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 tracking-wide">LEGAL</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-primary transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="leading-relaxed">
            © 2025 Regenera Pharma. All rights reserved. Advancing medicine through innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}
