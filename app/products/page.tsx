"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, FileText, CheckCircle2, Filter } from "lucide-react"

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const [selectedCategory, setSelectedCategory] = useState("All")

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

  const categories = ["All", "Cellular Regeneration", "Neurological", "Cardiovascular", "Orthopedic", "Immunology"]

  const products = [
    {
      id: "regencell",
      name: "RegenCell Pro",
      category: "Cellular Regeneration",
      tagline: "Advanced Stem Cell Therapy",
      description:
        "Our flagship cellular regeneration therapy, designed to accelerate tissue repair and promote natural healing at the molecular level.",
      image: "/premium-medical-vial-with-blue-liquid-and-molecula.jpg",
      features: [
        "Advanced stem cell technology",
        "FDA-approved for multiple indications",
        "Proven clinical efficacy in Phase III trials",
        "Minimal side effects profile",
      ],
      indications: ["Tissue repair", "Wound healing", "Post-surgical recovery", "Chronic inflammation"],
      approvals: ["FDA", "EMA", "PMDA"],
      featured: true,
    },
    {
      id: "neuroplex",
      name: "NeuroPlex",
      category: "Neurological",
      tagline: "Neural Regeneration Therapy",
      description:
        "Innovative treatment targeting neural tissue regeneration and neuroprotection for various neurological conditions.",
      image: "/medical-injection-vial-with-neural-network-visuali.jpg",
      features: [
        "Targeted neural regeneration",
        "Neuroprotective properties",
        "Crosses blood-brain barrier",
        "Long-lasting therapeutic effects",
      ],
      indications: ["Neurodegenerative diseases", "Nerve damage", "Cognitive decline", "Neuropathy"],
      approvals: ["FDA", "EMA"],
      featured: true,
    },
    {
      id: "cardioregen",
      name: "CardioRegen",
      category: "Cardiovascular",
      tagline: "Cardiac Tissue Regeneration",
      description:
        "Revolutionary therapy for cardiac tissue regeneration, improving heart function and patient outcomes after cardiac events.",
      image: "/heart-shaped-medical-container-with-red-liquid.jpg",
      features: [
        "Cardiac muscle regeneration",
        "Improved ejection fraction",
        "Reduced scar tissue formation",
        "Enhanced vascular growth",
      ],
      indications: ["Post-myocardial infarction", "Heart failure", "Cardiomyopathy", "Ischemic heart disease"],
      approvals: ["FDA", "EMA"],
      featured: true,
    },
    {
      id: "osteomatrix",
      name: "OsteoMatrix",
      category: "Orthopedic",
      tagline: "Bone & Joint Regeneration",
      description:
        "Advanced orthopedic therapy promoting bone and cartilage regeneration for improved mobility and pain relief.",
      image: "/bone-structure-with-regenerative-medicine-visualiz.jpg",
      features: [
        "Accelerated bone healing",
        "Cartilage regeneration",
        "Reduced inflammation",
        "Improved joint function",
      ],
      indications: ["Osteoarthritis", "Bone fractures", "Joint degeneration", "Sports injuries"],
      approvals: ["FDA", "EMA", "TGA"],
      featured: false,
    },
    {
      id: "immunoboost",
      name: "ImmunoBoost",
      category: "Immunology",
      tagline: "Immune System Enhancement",
      description:
        "Cutting-edge immunotherapy designed to enhance immune function and support the body's natural defense mechanisms.",
      image: "/immune-cells-and-antibodies-medical-illustration.jpg",
      features: [
        "Enhanced immune response",
        "Targeted cell activation",
        "Reduced autoimmune reactions",
        "Long-term immune memory",
      ],
      indications: ["Immunodeficiency", "Autoimmune disorders", "Cancer immunotherapy", "Chronic infections"],
      approvals: ["FDA"],
      featured: false,
    },
    {
      id: "dermacell",
      name: "DermaCell",
      category: "Cellular Regeneration",
      tagline: "Skin Regeneration Therapy",
      description: "Advanced dermatological treatment for skin regeneration, wound healing, and aesthetic restoration.",
      image: "/skin-cell-regeneration-medical-visualization.jpg",
      features: ["Rapid wound closure", "Collagen synthesis", "Scar reduction", "Skin rejuvenation"],
      indications: ["Chronic wounds", "Burns", "Diabetic ulcers", "Aesthetic procedures"],
      approvals: ["FDA", "EMA"],
      featured: false,
    },
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase animate-fade-in-up">
              Product Catalogue
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 text-balance tracking-tight leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Revolutionary
              <br />
              <span className="gradient-text">Therapeutics</span>
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              Breakthrough treatments representing the pinnacle of regenerative medicine
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 animate-glow" />
        <div
          className="absolute top-40 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 animate-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-muted/20 sticky top-20 z-40 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-muted border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            id="featured-header"
            data-animate
            className={`mb-12 transition-all duration-1000 ${
              isVisible["featured-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Featured <span className="gradient-text">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Our most advanced and widely-adopted therapeutic solutions
            </p>
          </div>

          <div className="space-y-12">
            {filteredProducts
              .filter((p) => p.featured)
              .map((product, index) => (
                <div
                  key={product.id}
                  id={`featured-${product.id}`}
                  data-animate
                  className={`transition-all duration-1000 ${
                    isVisible[`featured-${product.id}`] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-96 md:h-auto overflow-hidden group">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
                        <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground">FEATURED</Badge>
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <Badge className="w-fit mb-4" variant="outline">
                          {product.category}
                        </Badge>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{product.name}</h3>
                        <p className="text-lg text-primary font-medium mb-4 tracking-wide">{product.tagline}</p>
                        <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{product.description}</p>

                        <div className="mb-6">
                          <h4 className="font-bold mb-3 tracking-tight">Key Features:</h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-bold mb-2 tracking-tight">Regulatory Approvals:</h4>
                          <div className="flex gap-2">
                            {product.approvals.map((approval) => (
                              <Badge key={approval} variant="secondary">
                                {approval}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <Link href={`/products/${product.id}`}>
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide">
                              VIEW DETAILS
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            className="border-2 bg-transparent font-medium tracking-wide hover:bg-muted"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            DOWNLOAD BROCHURE
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div
            id="all-products-header"
            data-animate
            className={`mb-12 transition-all duration-1000 ${
              isVisible["all-products-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Complete <span className="gradient-text">Product Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Comprehensive therapeutic solutions across multiple medical specialties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                id={`product-${product.id}`}
                data-animate
                className={`transition-all duration-1000 ${
                  isVisible[`product-${product.id}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{product.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3 tracking-wide">{product.tagline}</p>
                    <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed flex-1">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-bold mb-2 tracking-wide">INDICATIONS:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.indications.slice(0, 3).map((indication, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {indication}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href={`/products/${product.id}`} className="mt-auto">
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors font-medium tracking-wide"
                      >
                        VIEW DETAILS
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Quote CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="quote-cta"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["quote-cta"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance tracking-tight leading-tight">
              Interested in Our
              <br />
              <span className="gradient-text">Therapeutic Solutions?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Request a quote, bulk order information, or schedule a consultation with our medical affairs team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 font-medium tracking-wide"
                >
                  REQUEST A QUOTE
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-2 bg-transparent font-medium tracking-wide hover:bg-muted"
              >
                <FileText className="w-5 h-5 mr-2" />
                DOWNLOAD CATALOG
              </Button>
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
