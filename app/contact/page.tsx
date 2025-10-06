"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Building2, Globe } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})

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

  const offices = [
    {
      name: "Global Headquarters",
      address: "1250 Innovation Drive, Boston, MA 02115, USA",
      phone: "+1 (617) 555-0100",
      email: "headquarters@regenerapharma.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM EST",
    },
    {
      name: "European Office",
      address: "45 Harley Street, London W1G 8QQ, United Kingdom",
      phone: "+44 20 7123 4567",
      email: "europe@regenerapharma.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT",
    },
    {
      name: "Asia-Pacific Office",
      address: "88 Marina Bay, Singapore 018981",
      phone: "+65 6789 0123",
      email: "apac@regenerapharma.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
    },
  ]

  const departments = [
    {
      name: "Sales & Business Development",
      email: "sales@regenerapharma.com",
      phone: "+1 (617) 555-0101",
      icon: Building2,
    },
    {
      name: "Medical Affairs",
      email: "medical@regenerapharma.com",
      phone: "+1 (617) 555-0102",
      icon: Phone,
    },
    {
      name: "Clinical Trials",
      email: "clinical@regenerapharma.com",
      phone: "+1 (617) 555-0103",
      icon: Mail,
    },
    {
      name: "Investor Relations",
      email: "investors@regenerapharma.com",
      phone: "+1 (617) 555-0104",
      icon: Globe,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase animate-fade-in-up">
              Get In Touch
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 text-balance tracking-tight leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Contact
              <br />
              <span className="gradient-text">Regenera Pharma</span>
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              We're here to answer your questions and discuss how our regenerative therapies can benefit your patients
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

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              id="contact-form"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["contact-form"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <Card className="p-8 border-2">
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-medium tracking-wide">
                        FIRST NAME *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-medium tracking-wide">
                        LAST NAME *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="border-2 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium tracking-wide">
                      EMAIL ADDRESS *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium tracking-wide">
                      PHONE NUMBER
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="font-medium tracking-wide">
                      ORGANIZATION
                    </Label>
                    <Input
                      id="organization"
                      placeholder="Hospital or Institution Name"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry" className="font-medium tracking-wide">
                      INQUIRY TYPE *
                    </Label>
                    <select
                      id="inquiry"
                      required
                      className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="product">Product Information</option>
                      <option value="quote">Request a Quote</option>
                      <option value="clinical">Clinical Trials</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium tracking-wide">
                      MESSAGE *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      required
                      rows={6}
                      className="border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div
              id="contact-info"
              data-animate
              className={`space-y-8 transition-all duration-1000 ${
                isVisible["contact-info"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Contact Information</h2>
                <p className="text-muted-foreground text-pretty leading-relaxed mb-8">
                  Reach out to our team for inquiries, support, or partnership opportunities. We're committed to
                  responding within 24 hours.
                </p>
              </div>

              {/* Department Cards */}
              <div className="space-y-4">
                {departments.map((dept, index) => {
                  const Icon = dept.icon
                  return (
                    <Card
                      key={index}
                      className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-2 tracking-tight">{dept.name}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              <a href={`mailto:${dept.email}`} className="hover:text-primary transition-colors">
                                {dept.email}
                              </a>
                            </p>
                            <p className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              <a href={`tel:${dept.phone}`} className="hover:text-primary transition-colors">
                                {dept.phone}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div
            id="offices-header"
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["offices-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Our <span className="gradient-text">Global Presence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              With offices across three continents, we're positioned to serve patients and healthcare providers
              worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {offices.map((office, index) => (
              <div
                key={index}
                id={`office-${index}`}
                data-animate
                className={`transition-all duration-1000 ${
                  isVisible[`office-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <Card className="p-8 h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{office.name}</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                      <span>{office.address}</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                        {office.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                        {office.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{office.hours}</span>
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div
            id="map"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["map"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Card className="overflow-hidden border-2">
              <div className="relative h-96 bg-muted">
                <img
                  src="/world-map-with-medical-network-connections.jpg"
                  alt="Global Office Locations"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-xl font-bold tracking-tight">Serving 50+ Countries Worldwide</p>
                    <p className="text-muted-foreground mt-2">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Distributor Information */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            id="distributor-info"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["distributor-info"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <Card className="p-12 border-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Looking for a <span className="gradient-text">Local Distributor?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
                Our products are available through authorized distributors in over 50 countries. Contact us to find your
                nearest distributor or discuss distribution opportunities.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide"
              >
                FIND A DISTRIBUTOR
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div
            id="emergency-contact"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible["emergency-contact"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Medical Emergency or Adverse Event?</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
              For urgent medical inquiries or to report an adverse event related to our products, please contact our
              24/7 medical hotline immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 text-xl font-bold">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+18005550199" className="hover:text-primary transition-colors">
                  +1 (800) 555-0199
                </a>
              </div>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-3 text-xl font-bold">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:safety@regenerapharma.com" className="hover:text-primary transition-colors">
                  safety@regenerapharma.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
