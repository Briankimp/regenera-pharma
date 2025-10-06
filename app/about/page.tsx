"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Award, Target, Eye, Heart, Users, Microscope, FlaskConical, TrendingUp } from "lucide-react"

export default function AboutPage() {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase animate-fade-in-up">
              About Regenera Pharma
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 text-balance tracking-tight leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Pioneering the Future of
              <br />
              <span className="gradient-text">Regenerative Medicine</span>
            </h1>
            <p
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              Driven by scientific excellence, innovation, and an unwavering commitment to improving patient outcomes
              worldwide
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

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To develop and deliver innovative regenerative therapies that transform patient care and address critical unmet medical needs through rigorous scientific research and clinical excellence.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "To be the global leader in regenerative medicine, pioneering breakthrough treatments that restore health, extend life, and improve quality of life for patients worldwide.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Scientific integrity, patient-first innovation, collaborative excellence, ethical responsibility, and sustainable impact guide everything we do.",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  id={`value-${index}`}
                  data-animate
                  className={`transition-all duration-1000 ${
                    isVisible[`value-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <Card className="p-8 h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{item.description}</p>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              id="story-visual"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["story-visual"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="relative">
                <img
                  src="/dna-helix-with-molecular-structures-and-scientific.jpg"
                  alt="Scientific Innovation"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow" />
              </div>
            </div>

            <div
              id="story-content"
              data-animate
              className={`transition-all duration-1000 ${
                isVisible["story-content"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance tracking-tight leading-tight">
                15 Years of
                <br />
                <span className="gradient-text">Scientific Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                Founded in 2010 by a team of visionary scientists and medical professionals, Regenera Pharma was born
                from a simple yet powerful belief: that the human body's natural regenerative capabilities could be
                harnessed and enhanced to treat previously incurable conditions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-pretty leading-relaxed">
                From our humble beginnings in a small research laboratory to becoming a global leader in regenerative
                medicine, our journey has been marked by groundbreaking discoveries, rigorous clinical validation, and
                an unwavering commitment to patient care.
              </p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Today, our therapies are improving lives in over 50 countries, backed by more than 200 peer-reviewed
                publications and numerous industry awards for innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Research", icon: TrendingUp },
              { number: "50+", label: "Clinical Trials", icon: Microscope },
              { number: "200+", label: "Publications", icon: FlaskConical },
              { number: "50+", label: "Countries Served", icon: Users },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  id={`stat-${index}`}
                  data-animate
                  className={`text-center transition-all duration-1000 ${
                    isVisible[`stat-${index}`] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium tracking-wide">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            id="team-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["team-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase">Leadership</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              World-class scientists, clinicians, and innovators driving the future of regenerative medicine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Executive Officer",
                bio: "Pioneering researcher with 20+ years in regenerative medicine and cellular biology",
                image: "/professional-woman-scientist-lab-coat.jpg",
              },
              {
                name: "Dr. Michael Rodriguez",
                role: "Chief Scientific Officer",
                bio: "Leading expert in stem cell research with numerous breakthrough discoveries",
                image: "/professional-man-scientist-lab-coat.jpg",
              },
              {
                name: "Dr. Emily Watson",
                role: "VP of Clinical Development",
                bio: "Extensive experience in clinical trial design and regulatory affairs",
                image: "/professional-woman-doctor-medical.jpg",
              },
              {
                name: "Dr. James Park",
                role: "Head of Research",
                bio: "Molecular biologist specializing in tissue regeneration and cellular therapy",
                image: "/professional-man-researcher-microscope.jpg",
              },
              {
                name: "Dr. Lisa Thompson",
                role: "VP of Quality Assurance",
                bio: "Ensuring the highest standards in pharmaceutical manufacturing and compliance",
                image: "/professional-woman-pharmaceutical-quality.jpg",
              },
              {
                name: "Dr. David Kumar",
                role: "Chief Medical Officer",
                bio: "Renowned physician with expertise in translational medicine and patient care",
                image: "/professional-man-doctor-stethoscope.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                id={`team-${index}`}
                data-animate
                className={`transition-all duration-1000 ${
                  isVisible[`team-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden group cursor-pointer border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative h-80 overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 tracking-tight">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3 tracking-wide">{member.role}</p>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{member.bio}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div
            id="timeline-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["timeline-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase">Our Journey</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
              Milestones & <span className="gradient-text">Achievements</span>
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2010",
                title: "Foundation",
                description:
                  "Regenera Pharma established with a vision to revolutionize regenerative medicine through innovative cellular therapies",
              },
              {
                year: "2012",
                title: "First Patent",
                description: "Secured groundbreaking patent for proprietary stem cell cultivation technology",
              },
              {
                year: "2014",
                title: "Clinical Trials Begin",
                description: "Initiated Phase I trials for RegenCell technology with promising early results",
              },
              {
                year: "2016",
                title: "Research Expansion",
                description: "Opened state-of-the-art research facility and expanded team to 100+ scientists",
              },
              {
                year: "2018",
                title: "FDA Approval",
                description: "RegenCell Pro receives FDA approval for clinical use - a major milestone",
              },
              {
                year: "2020",
                title: "Global Recognition",
                description:
                  "Awarded International Biotech Innovation Prize for contributions to regenerative medicine",
              },
              {
                year: "2021",
                title: "Global Expansion",
                description: "Treatments available in 50+ countries with strategic partnerships worldwide",
              },
              {
                year: "2023",
                title: "Product Portfolio Growth",
                description: "Launched NeuroPlex and CardioRegen, expanding therapeutic applications",
              },
              {
                year: "2025",
                title: "Next Generation Platform",
                description: "Launching advanced AI-driven personalized medicine platform for precision therapeutics",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                id={`milestone-${index}`}
                data-animate
                className={`grid md:grid-cols-12 gap-8 items-center transition-all duration-1000 ${
                  isVisible[`milestone-${index}`] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="md:col-span-2">
                  <div className="text-4xl md:text-5xl font-bold gradient-text">{milestone.year}</div>
                </div>
                <div className="md:col-span-10">
                  <Card className="p-6 md:p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{milestone.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{milestone.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            id="awards-header"
            data-animate
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["awards-header"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-[0.3em] uppercase">Recognition</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance tracking-tight">
              Certifications & <span className="gradient-text">Awards</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "FDA Approved Facility",
              "ISO 9001:2015 Certified",
              "GMP Compliant",
              "EMA Registered",
              "Biotech Innovation Award 2020",
              "Excellence in Research 2021",
              "Best Pharmaceutical Company 2022",
              "Global Health Impact Award 2023",
            ].map((award, index) => (
              <div
                key={index}
                id={`award-${index}`}
                data-animate
                className={`transition-all duration-1000 ${
                  isVisible[`award-${index}`] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <Card className="p-6 h-full flex flex-col items-center justify-center text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <p className="font-bold tracking-tight">{award}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
