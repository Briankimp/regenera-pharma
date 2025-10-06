"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChevronDown, ArrowRight, Microscope, FlaskConical, HeartPulse, Users } from "lucide-react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const parallaxOffset = scrollY * 0.5

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <img
            src="/abstract-medical-laboratory-with-blue-lighting-and.jpg"
            alt="Medical Innovation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="text-sm md:text-base font-medium text-muted-foreground mb-4 tracking-[0.3em] uppercase">
              The Future of Medicine
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none text-balance">
              Where Science
              <br />
              <span className="gradient-text">Regrows the Future</span>
            </h1>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Pioneering regenerative medicine with precision, innovation, and scientific excellence
            </p>
          </div>
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            <Link href="/products">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 font-medium tracking-wide"
              >
                EXPLORE PRODUCTS
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-2 bg-transparent font-medium tracking-wide hover:bg-muted"
              >
                LEARN MORE
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Quick Access Tiles */}
      <section className="py-24 px-6 relative overflow-hidden bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div
            id="tiles-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["tiles-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance tracking-tight">
              Discover <span className="gradient-text">Regenera Pharma</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Explore our innovative solutions and groundbreaking research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Products",
                description: "Revolutionary therapeutics for regenerative medicine",
                icon: FlaskConical,
                href: "/products",
                color: "primary",
              },
              {
                title: "Research",
                description: "Cutting-edge scientific discoveries and innovations",
                icon: Microscope,
                href: "/resources",
                color: "secondary",
              },
              {
                title: "Clinical Trials",
                description: "Advancing patient care through rigorous testing",
                icon: HeartPulse,
                href: "/resources#clinical",
                color: "accent",
              },
              {
                title: "About Us",
                description: "Meet our team and learn our mission",
                icon: Users,
                href: "/about",
                color: "primary",
              },
            ].map((tile, index) => {
              const Icon = tile.icon
              return (
                <div
                  key={index}
                  id={`tile-${index}`}
                  data-animate
                  className={`transition-all duration-1000 ${
                    isVisible[`tile-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Link href={tile.href}>
                    <Card className="p-8 h-full group cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-${tile.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-7 h-7 text-${tile.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 tracking-tight">{tile.title}</h3>
                      <p className="text-muted-foreground text-pretty leading-relaxed mb-4">{tile.description}</p>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        <span className="text-sm tracking-wide">EXPLORE</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Card>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Narrative */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              id="narrative-content"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["narrative-content"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase">Our Vision</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight leading-tight">
                Transforming Lives Through
                <br />
                <span className="gradient-text">Scientific Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                At Regenera Pharma, we believe in the power of regenerative medicine to revolutionize healthcare. Our
                commitment to scientific excellence drives us to develop breakthrough therapies that address unmet
                medical needs and improve patient outcomes worldwide.
              </p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                With over 15 years of pioneering research, 50+ clinical trials, and a portfolio of FDA-approved
                treatments, we are at the forefront of cellular regeneration technology.
              </p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide">
                  DISCOVER OUR STORY
                </Button>
              </Link>
            </div>

            <div
              id="narrative-visual"
              data-animate
              className={`relative transition-all duration-1000 ${
                isVisible["narrative-visual"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative">
                <img
                  src="/microscope-with-medical-samples-in-modern-laborato.jpg"
                  alt="Scientific Research"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow" />
                <div
                  className="absolute -top-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-glow"
                  style={{ animationDelay: "1.5s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-32 px-6 bg-muted/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            id="products-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["products-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase">Our Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
              Revolutionary <span className="gradient-text">Therapeutics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Breakthrough treatments representing the pinnacle of regenerative medicine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "RegenCell Pro",
                category: "Cellular Regeneration",
                image: "/premium-medical-vial-with-blue-liquid-and-molecula.jpg",
                description: "Advanced stem cell therapy for tissue repair",
              },
              {
                name: "NeuroPlex",
                category: "Neurological",
                image: "/medical-injection-vial-with-neural-network-visuali.jpg",
                description: "Innovative treatment for neural regeneration",
              },
              {
                name: "CardioRegen",
                category: "Cardiovascular",
                image: "/heart-shaped-medical-container-with-red-liquid.jpg",
                description: "Cardiac tissue regeneration therapy",
              },
            ].map((product, index) => (
              <div
                key={index}
                id={`featured-${index}`}
                data-animate
                className={`transition-all duration-1000 ${
                  isVisible[`featured-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium tracking-wide">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span className="text-sm tracking-wide">LEARN MORE</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium tracking-wide bg-transparent"
              >
                VIEW ALL PRODUCTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events & Partnerships */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            id="events-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["events-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase">Latest Updates</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
              Events & <span className="gradient-text">Partnerships</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: "Conference",
                title: "International Regenerative Medicine Summit 2025",
                date: "April 15-17, 2025",
                location: "Boston, MA",
                image: "/scientific-research-paper-with-molecular-diagrams.jpg",
              },
              {
                type: "Partnership",
                title: "Strategic Alliance with Global Health Initiative",
                date: "March 2025",
                location: "Worldwide",
                image: "/world-map-with-medical-network-connections.jpg",
              },
            ].map((event, index) => (
              <div
                key={index}
                id={`event-${index}`}
                data-animate
                className={`transition-all duration-1000 ${
                  isVisible[`event-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium tracking-wide">
                      {event.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-muted-foreground mb-2 tracking-wide">
                      {event.date} • {event.location}
                    </p>
                    <h3 className="text-xl font-bold mb-4 text-balance leading-tight">{event.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span className="text-sm tracking-wide">READ MORE</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="cta-content"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["cta-content"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight leading-tight">
              Ready to Transform
              <br />
              <span className="gradient-text">Patient Care?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Partner with Regenera Pharma to bring cutting-edge regenerative therapies to your patients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 font-medium tracking-wide"
                >
                  REQUEST CONSULTATION
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 border-2 bg-transparent font-medium tracking-wide hover:bg-muted"
                >
                  DOWNLOAD CATALOG
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 animate-glow" />
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </section>

      <Footer />
    </div>
  )
}
