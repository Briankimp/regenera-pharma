"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Video, Newspaper, Calendar, Download, ExternalLink, Filter } from "lucide-react"

export default function ResourcesPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const [selectedTag, setSelectedTag] = useState("All")

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

  const tags = ["All", "Research", "Events", "Press Releases", "Clinical Trials", "Publications"]

  const resources = [
    {
      type: "Research Paper",
      title: "Advances in Cellular Regeneration: A Comprehensive Review",
      description:
        "Groundbreaking research on stem cell technology and its applications in tissue repair and regeneration.",
      date: "March 15, 2025",
      author: "Dr. Sarah Chen, Dr. Michael Rodriguez",
      image: "/scientific-research-paper-with-molecular-diagrams.jpg",
      tag: "Research",
      icon: FileText,
      downloadable: true,
    },
    {
      type: "Video",
      title: "Inside Our Laboratory: The Science Behind RegenCell Pro",
      description:
        "Exclusive behind-the-scenes look at our state-of-the-art research facility and manufacturing process.",
      date: "February 28, 2025",
      author: "Regenera Pharma Media Team",
      image: "/pharmaceutical-lab.png",
      tag: "Research",
      icon: Video,
      downloadable: false,
    },
    {
      type: "Article",
      title: "The Future of Personalized Medicine in Regenerative Therapy",
      description: "Exploring how AI and machine learning are revolutionizing patient-specific treatment approaches.",
      date: "February 10, 2025",
      author: "Dr. Emily Watson",
      image: "/futuristic-medical-technology-and-data-visualizati.jpg",
      tag: "Research",
      icon: Newspaper,
      downloadable: false,
    },
    {
      type: "Conference",
      title: "International Regenerative Medicine Summit 2025",
      description: "Join us at the premier global conference for regenerative medicine professionals and researchers.",
      date: "April 15-17, 2025",
      author: "Boston, MA",
      image: "/medical-conference-presentation-audience.jpg",
      tag: "Events",
      icon: Calendar,
      downloadable: false,
    },
    {
      type: "Press Release",
      title: "Regenera Pharma Announces FDA Approval for NeuroPlex Expansion",
      description: "New indications approved for our groundbreaking neurological therapy.",
      date: "January 20, 2025",
      author: "Corporate Communications",
      image: "/press-release-medical-announcement.jpg",
      tag: "Press Releases",
      icon: Newspaper,
      downloadable: true,
    },
    {
      type: "Clinical Trial",
      title: "Phase III Trial Results: CardioRegen in Heart Failure Patients",
      description:
        "Comprehensive analysis of clinical outcomes and safety data from our landmark cardiovascular study.",
      date: "December 5, 2024",
      author: "Dr. David Kumar, Clinical Research Team",
      image: "/clinical-trial-medical-research-data.jpg",
      tag: "Clinical Trials",
      icon: FileText,
      downloadable: true,
    },
    {
      type: "Publication",
      title: "Molecular Mechanisms of Tissue Regeneration",
      description: "Peer-reviewed publication in Nature Medicine exploring the fundamental biology of regeneration.",
      date: "November 18, 2024",
      author: "Dr. James Park et al.",
      image: "/molecular-biology-research-publication.jpg",
      tag: "Publications",
      icon: FileText,
      downloadable: true,
    },
    {
      type: "Video",
      title: "Patient Success Stories: Real Lives Transformed",
      description: "Hear directly from patients whose lives have been changed by our regenerative therapies.",
      date: "October 30, 2024",
      author: "Patient Advocacy Team",
      image: "/patient-testimonial-medical-success.jpg",
      tag: "Events",
      icon: Video,
      downloadable: false,
    },
    {
      type: "Webinar",
      title: "Understanding Stem Cell Therapy: A Physician's Guide",
      description:
        "Educational webinar for healthcare professionals on the clinical applications of stem cell treatments.",
      date: "October 12, 2024",
      author: "Dr. Lisa Thompson",
      image: "/medical-webinar-online-education.jpg",
      tag: "Events",
      icon: Video,
      downloadable: false,
    },
    {
      type: "Research Paper",
      title: "Safety and Efficacy of RegenCell Pro: 5-Year Follow-Up Study",
      description: "Long-term outcomes data demonstrating sustained benefits and excellent safety profile.",
      date: "September 25, 2024",
      author: "Clinical Research Department",
      image: "/long-term-clinical-study-medical-data.jpg",
      tag: "Research",
      icon: FileText,
      downloadable: true,
    },
    {
      type: "Press Release",
      title: "Strategic Partnership with Global Health Initiative",
      description: "Expanding access to regenerative therapies in underserved regions worldwide.",
      date: "September 8, 2024",
      author: "Corporate Communications",
      image: "/world-map-with-medical-network-connections.jpg",
      tag: "Press Releases",
      icon: Newspaper,
      downloadable: true,
    },
    {
      type: "Publication",
      title: "Immunological Considerations in Regenerative Medicine",
      description: "Comprehensive review published in The Lancet on immune responses to cellular therapies.",
      date: "August 15, 2024",
      author: "Dr. Michael Rodriguez, International Collaborators",
      image: "/immunology-research-medical-journal.jpg",
      tag: "Publications",
      icon: FileText,
      downloadable: true,
    },
  ]

  const filteredResources = selectedTag === "All" ? resources : resources.filter((r) => r.tag === selectedTag)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase animate-fade-in-up">
              Knowledge Hub
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 text-balance tracking-tight leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Resources &<br />
              <span className="gradient-text">Insights</span>
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              Stay informed with the latest research, clinical data, and developments in regenerative medicine
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

      {/* Tag Filter */}
      <section className="py-8 px-6 bg-muted/20 sticky top-20 z-40 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide whitespace-nowrap transition-all ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-muted border border-border"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            id="featured-resource"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["featured-resource"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto overflow-hidden group">
                  <img
                    src={resources[0].image || "/placeholder.svg"}
                    alt={resources[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
                  <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground">FEATURED</Badge>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="outline">{resources[0].type}</Badge>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
                    {resources[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{resources[0].description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span>{resources[0].date}</span>
                    <span>•</span>
                    <span>{resources[0].author}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      READ MORE
                    </Button>
                    {resources[0].downloadable && (
                      <Button
                        variant="outline"
                        className="border-2 bg-transparent font-medium tracking-wide hover:bg-muted"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        DOWNLOAD PDF
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div
            id="resources-header"
            data-animate
            className={`mb-12 transition-all duration-1000 ${
              isVisible["resources-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Latest <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Explore our comprehensive library of research, publications, and educational content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.slice(1).map((resource, index) => {
              const Icon = resource.icon
              return (
                <div
                  key={index}
                  id={`resource-${index}`}
                  data-animate
                  className={`transition-all duration-1000 ${
                    isVisible[`resource-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={resource.image || "/placeholder.svg"}
                        alt={resource.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm">
                        {resource.type}
                      </Badge>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <span>{resource.date}</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs">
                          {resource.tag}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-balance leading-tight">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed flex-1">
                        {resource.description}
                      </p>
                      <p className="text-xs text-muted-foreground mb-4">{resource.author}</p>
                      <div className="flex gap-2 mt-auto">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors font-medium tracking-wide"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          VIEW
                        </Button>
                        {resource.downloadable && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group-hover:bg-muted transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="newsletter-cta"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["newsletter-cta"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance tracking-tight leading-tight">
              Stay Updated with
              <br />
              <span className="gradient-text">Latest Research</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Subscribe to our newsletter for exclusive insights, research updates, and industry news
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
              />
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide"
              >
                SUBSCRIBE
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
