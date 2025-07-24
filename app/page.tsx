"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  TrendingUp,
  Shield,
  LineChart,
  Combine,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle,
  Linkedin,
  Instagram,
  Lock,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { SparkleAnimation } from "@/components/sparkle-animation"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FadeIn } from "@/components/fade-in"
import { AnimatedTitle } from "@/components/animated-title"

// Main Component
export default function StrataidgeLandingPageV2() {
  return (
    <div className="bg-white text-gray-800 antialiased font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MethodologySection />
        <BlogSection />
        <OffersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

// --- SECTIONS MISES À JOUR ---

function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-strataidge-turquoise to-strataidge-coral rounded-2xl blur-xl opacity-20"></div>
              <Image
                src="/team-collaboration.jpg"
                alt="Une équipe de professionnels collaborant sur un projet au bureau"
                width={500}
                height={600}
                className="relative rounded-2xl object-cover w-full h-full shadow-2xl"
              />
            </div>
          </FadeIn>
          {/* Le texte utilise mix-blend-difference pour rester lisible */}
          <FadeIn>
            <span className="font-semibold text-strataidge-turquoise">Vision</span>
            <AnimatedTitle className="text-gray-900">
              Plus que des chiffres, une compréhension profonde de votre réalité.
            </AnimatedTitle>
          </FadeIn>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          {/* Le texte utilise mix-blend-difference pour rester lisible */}
          <FadeIn>
            <p className="text-lg text-gray-700">
              {
                "Avec plus de 14 années d'expérience en expertise comptable et fiscale, les fondateurs de Strataidge Fiduciaire & Conseils ont accompagné des indépendants, des petites, moyennes et grandes entreprises, jusqu'à siéger aux conseils d'administration. Cette immersion à tous les échelons leur a révélé une évidence : une stratégie réellement efficace ne peut naître qu'en comprenant les personnes derrière chaque entreprise."
              }
            </p>
            <p className="mt-4 text-gray-700">
              {
                "Nous croyons qu'un conseil réellement pertinent ne se limite pas aux chiffres. Il repose sur l'écoute, la proximité et la compréhension des ambitions humaines qui façonnent chaque projet. Chez Strataidge, nous allions cette approche personnalisée à une expertise rigoureuse et exigeante pour transformer la complexité en opportunité et bâtir une réussite durable. Le digital vient soutenir cette vision en apportant fluidité, simplicité d'exécution et clarté dans chaque étape de votre accompagnement."
              }
            </p>
            <div className="mt-8 border-strataidge-turquoise border-t-0 border-l-4 text-right border-r-[5px] pr-0 pl-2 ml-0">
              <p className="text-lg italic text-gray-700 text-center">
                Chaque optimisation est pensée pour votre réalité. Chaque conseil est conçu pour votre avenir.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: TrendingUp,
    title: "Pilotage comptable digitalisé",
    description:
      "Nous assurons une gestion continue et innovante de vos flux financiers. Grâce à des outils digitaux performants et une analyse proactive, vous bénéficiez d'une vision claire et anticipative pour guider vos décisions stratégiques.",
  },
  {
    icon: Shield,
    title: "Stratégies fiscales sur mesure",
    description:
      "Nous construisons des stratégies fiscales adaptées à vos enjeux, alliant anticipation et rigueur réglementaire. Nos méthodes garantissent une fiscalité optimisée et une conformité totale, tout en maximisant vos marges de manœuvre.",
  },
  {
    icon: LineChart,
    title: "Analyses financières avancées",
    description:
      "Nous réalisons des analyses précises pour renforcer la solidité financière de votre entreprise, orienter vos choix d'investissement et identifier les leviers de performance les plus rentables.",
  },
  {
    icon: Network,
    title: "Management et structuration stratégique",
    description:
      "Nous aidons votre entreprise à se structurer et à développer un management performant : organisation des équipes, optimisation des processus et pilotage vers une croissance durable.",
  },
  {
    icon: Combine,
    title: "Optimisation globale d'entreprise",
    description:
      "Nous adoptons une vision transversale qui combine expertise humaine et solutions technologiques pour maximiser chaque opportunité, du quotidien opérationnel jusqu'à la stratégie long terme.",
  },
]

function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-strataidge-blue-night">
      <SparkleAnimation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-strataidge-turquoise">Solutions</span>
          <AnimatedTitle className="text-white">Global dans l'approche, unique dans le conseil</AnimatedTitle>
          <FadeIn>
            <p className="mt-4 text-lg text-gray-300">
              Une expertise complète, humaine et digitale pour piloter votre entreprise avec agilité, clarté et
              anticipation.
            </p>
          </FadeIn>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} className={cn("md:col-span-2 lg:col-span-2", { "lg:col-start-2": i === 3 })}>
              <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-strataidge-turquoise/50 transition-all duration-300 group backdrop-blur-sm">
                <div className="mb-6 w-12 h-12 rounded-lg bg-strataidge-turquoise/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-strataidge-turquoise" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-gray-400">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function MethodologySection() {
  const steps = [
    {
      title: "Écoute & Diagnostic",
      description:
        "Une immersion complète dans votre projet pour comprendre vos enjeux et vos ambitions. Les outils digitaux facilitent la collecte et l'organisation des documents, afin que nous puissions nous concentrer sur l'analyse et la compréhension de votre réalité.",
    },
    {
      title: "Stratégie sur-mesure",
      description:
        "Nous co-construisons une feuille de route claire et adaptée à votre entreprise. Le digital simplifie le partage et la centralisation des informations, mais la réflexion stratégique reste profondément humaine et personnalisée.",
    },
    {
      title: "Déploiement & Action",
      description:
        "Nous mettons en œuvre les solutions définies, en vous accompagnant pas à pas. Les processus digitaux fluidifient l'exécution et réduisent les délais, mais chaque étape est supervisée et ajustée avec vous.",
    },
    {
      title: "Pilotage & Optimisation",
      description:
        "Grâce à un suivi digital en temps réel, nous analysons vos performances et ajustons la stratégie en continu. Cela nous permet de rester proches de vos besoins tout en vous libérant des contraintes administratives.",
    },
  ]

  return (
    <section id="methodology" className="py-24 sm:py-32 bg-strataidge-blue-night">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-strataidge-turquoise">Approche</span>
          <AnimatedTitle className="text-white">4 étapes pour transformer votre gestion</AnimatedTitle>
          <FadeIn>
            <p className="mt-4 text-lg text-gray-300">Avec l'humain au cœur et le digital au service.</p>
          </FadeIn>
        </div>
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-4 h-full w-0.5 bg-white/10" aria-hidden="true" />
            {steps.map((step) => (
              <FadeIn key={step.title}>
                <div className="relative pl-12 pb-12">
                  <div className="absolute left-0 top-4">
                    <div className="w-8 h-8 bg-strataidge-blue-night rounded-full border-2 border-strataidge-turquoise flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-strataidge-turquoise" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-gray-300">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BlogSection() {
  const blogPosts = [
    {
      img: "/gouvernement_de_wever.jpg",
      category: "Fiscalité",
      title: "Réforme fiscale 2025 : ce que prévoit le nouveau gouvernement belge",
    },
    {
      img: "/charges-sociales-pme.jpg",
      category: "Entreprise",
      title: "Charges sociales : nouvelles réductions ciblées pour les PME en 2025",
    },
    {
      img: "/vue-de-dessus-femme-tapant-sur-ordinateur-portable.jpg",
      category: "Digitalisation",
      title: "Facturation électronique : les grands changements à venir",
    },
    {
      img: "/piles-de-pieces-disposees-dans-un-graphique-a-barres.jpg",
      category: "Fiscalité",
      title: "Fiscalité verte : les changements majeurs prévus en 2025",
    },
    {
      img: "/des-couples-ages-discutent-de-finances-avec-une-tirelire.jpg",
      category: "Social",
      title: "Réforme des pensions 2025 : l'âge légal passe à 66 ans, bonus et conditions renforcées",
    },
    {
      img: "/gens-d-affaires-travaillant-avec-des-documents-commerciaux-au-bureau.jpg",
      category: "Innovation",
      title: "L'écosystème belge des start‑ups en plein essor : technologie, santé et durabilité en tête",
    },
  ]

  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null)

  return (
    <section id="blog" className="py-24 sm:py-32 bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-strataidge-turquoise">Analyses</span>
          <AnimatedTitle>Actualité décryptée par nos experts</AnimatedTitle>
        </div>
      </div>
      <div className="mt-20">
        <div
          className="flex gap-8 overflow-x-auto pb-8 horizontal-scrollbar pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {blogPosts.map((post) => (
            <FadeIn
              key={post.title}
              className="flex-shrink-0 w-[90vw] max-w-sm sm:w-[350px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <button
                onClick={() => setSelectedPost(post)}
                className="block group h-full w-full text-left"
                aria-label={`Lire l'article : ${post.title}`}
              >
                <div className="h-full flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-strataidge-turquoise/50 transition-all duration-300 shadow-lg">
                  <div className="overflow-hidden">
                    <Image
                      src={post.img || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm font-semibold text-strataidge-turquoise">{post.category}</span>
                    <h3 className="mt-1 text-lg font-bold text-gray-900 group-hover:text-strataidge-turquoise transition-colors flex-grow">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPost} onOpenChange={(isOpen) => !isOpen && setSelectedPost(null)}>
        <DialogContent className="bg-strataidge-blue-night border-strataidge-turquoise/20 text-white w-[95vw] rounded-lg max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-strataidge-turquoise">{selectedPost?.title}</DialogTitle>
            <DialogDescription className="text-gray-400 pt-2">
              Cet article est réservé à nos membres. Connectez-vous pour accéder à l'analyse complète de nos experts.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center">
            <Lock className="h-16 w-16 mx-auto text-strataidge-yellow/50" />
          </div>
          <DialogFooter>
            <Button
              onClick={() => setSelectedPost(null)}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              Fermer
            </Button>
            <Button className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold">
              Se connecter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function OffersSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [isStandardDetailsOpen, setIsStandardDetailsOpen] = useState(false)
  const [isStrataidgeDetailsOpen, setIsStrataidgeDetailsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState<string | null>(null)

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan)
    setFormMessage(null)
  }

  const openIaConfigurator = () => {
    setIsDetailsOpen(false)
    setIsStandardDetailsOpen(false)
    setIsStrataidgeDetailsOpen(false)
    handleSelectPlan("IA Strataidge")
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormMessage(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormMessage("Votre demande d'offre a été envoyée. Nous vous contacterons très prochainement !")
      ;(event.target as HTMLFormElement).reset()
    } catch (error) {
      console.error("Submission error:", error)
      setFormMessage("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const plans = [
    {
      name: "Full Digital",
      price: "À partir de",
      amount: "50€",
      description: "Tous les services comptables et fiscaux d’un bureau, 100 % en ligne.",
      features: [
        "Comptabilité et fiscalité complètes (Belgique)",
        "Optimisation fiscale et conformité légale garanties",
        "Suivi trimestriel des chiffres",
        "Plateforme sécurisée et transmission 100 % numérique",
        "Réponse à vos questions uniquement par mail",
      ],
      note: "Options additionnelles disponibles dans l’offre À la carte",
    },
    {
      name: "Standard",
      price: "À partir de",
      amount: "250€",
      description: "L’équilibre parfait entre autonomie digitale et accompagnement humain renforcé.",
      features: [
        "Tout le contenu de l’offre Full Digital",
        "Rendez-vous de mise en place de la collaboration",
        "4 rendez-vous conseils/an (un par trimestre, visio ou présentiel)",
        "Accompagnement en cas de contrôle fiscal",
        "Priorité dans le traitement de vos demandes",
        "Conseils personnalisés sur les factures encodées",
        "Permanence pour toutes vos questions",
      ],
      note: "Obligation de transmettre tous les documents et pièces scannés dans les délais (pénalités en cas de retard).",
    },
    {
      name: "Strataidge",
      price: "À partir de",
      amount: "500€",
      description: "Une immersion stratégique pour transformer votre business et l’aligner avec votre ambition.",
      features: [
        "Nous combinons analyse pointue, plan d’action sur mesure et suivi intelligent afin de révéler les leviers cachés de votre croissance.",
        "Une offre haut de gamme, conçue pour ceux qui veulent dépasser les objectifs visibles et atteindre leur véritable potentiel.",
      ],
    },
    {
      name: "Création d'entreprise",
      price: "Sur devis",
      amount: "",
      description:
        "Nous vous guidons à chaque étape de la création de votre entreprise, du business plan à l'immatriculation.",
      features: [
        "Analyse de la viabilité du projet",
        "Choix de la forme juridique",
        "Rédaction des statuts",
        "Accompagnement administratif",
      ],
    },
    {
      name: "Transmission d'entreprise",
      price: "Sur devis",
      amount: "",
      description: "Préparez et optimisez la cession ou la reprise d'une entreprise avec notre expertise.",
      features: [
        "Évaluation de l'entreprise",
        "Optimisation fiscale de la cession",
        "Recherche de repreneurs/cédants",
        "Négociation et closing",
      ],
    },
    {
      name: "Offre à la carte",
      price: "Sur devis",
      amount: "",
      description:
        "Composez votre accompagnement sur mesure en choisissant parmi nos services spécialisés pour répondre à des besoins ponctuels.",
      features: [
        "Rendez-vous conseil (visio ou présentiel)",
        "Conseil stratégique et management",
        "Montage fiscal complexe",
        "Accompagnement spécifique (cession, etc.)",
        "Assistance lors d'un contrôle fiscal",
      ],
    },
  ]

  const mainPlans = plans.slice(0, 3)
  const specificPlans = plans.slice(3)
  const detailedPlans = ["Full Digital", "Standard", "Strataidge"]

  return (
    <>
      <section id="offers" className="py-24 sm:py-32 bg-strataidge-blue-night">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-semibold text-strataidge-turquoise">Offres</span>
            <AnimatedTitle className="text-white">Des offres adaptées à chaque besoin</AnimatedTitle>
            <FadeIn>
              <p className="mt-4 text-lg text-gray-300">
                Que vous soyez en phase de création, de croissance ou de transmission, nous avons une solution pour
                vous. Découvrez nos abonnements et nos missions spécifiques.
              </p>
            </FadeIn>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {mainPlans.map((plan) => (
              <FadeIn key={plan.name} className="flex h-full">
                <div
                  className={cn(
                    "w-full flex flex-col p-8 rounded-2xl bg-white/5 border border-white/20 transition-all duration-300 shadow-lg hover:shadow-strataidge-turquoise/25 hover:border-strataidge-turquoise/60 hover:-translate-y-2 backdrop-blur-sm",
                  )}
                >
                  <h3 className="text-2xl font-bold text-white text-center min-h-[3em] flex items-center justify-center">
                    {plan.name}
                  </h3>
                  {plan.price && (
                    <div className="mt-4 text-center">
                      <span className="text-gray-400">{plan.price}</span>
                      {plan.amount && (
                        <p className="text-5xl font-extrabold text-white">
                          {plan.amount}
                          <span className="text-lg font-medium text-gray-400">/mois</span>
                        </p>
                      )}
                    </div>
                  )}
                  <p className="mt-6 text-gray-300 text-center">{plan.description}</p>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    {plan.note && <p className="mt-6 text-xs text-gray-500 text-center">{plan.note}</p>}
                    <div className="mt-2 flex flex-col gap-2">
                      {detailedPlans.includes(plan.name) ? (
                        <>
                          <Button
                            onClick={openIaConfigurator}
                            className="w-full font-bold py-3 text-sm bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night text-center h-auto text-wrap"
                          >
                            Paramétrez votre offre et recevez un devis instantané
                          </Button>
                          <Button
                            onClick={() => {
                              if (plan.name === "Full Digital") setIsDetailsOpen(true)
                              if (plan.name === "Standard") setIsStandardDetailsOpen(true)
                              if (plan.name === "Strataidge") setIsStrataidgeDetailsOpen(true)
                            }}
                            variant="outline"
                            className="w-full font-bold py-3 text-base border-white/20 text-white hover:bg-white/10 hover:border-strataidge-turquoise/60 bg-transparent"
                          >
                            Détails de l’offre
                          </Button>
                        </>
                      ) : (
                        <Button
                          onClick={() => handleSelectPlan(plan.name)}
                          className={cn(
                            "w-full font-bold py-3 text-base bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night",
                          )}
                        >
                          Recevoir mon offre
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="my-16 text-center max-w-4xl mx-auto bg-white/5 rounded-2xl p-10 border border-white/20 shadow-xl backdrop-blur-sm">
              <p className="text-xl text-gray-200 font-medium mb-8">
                Vous n'êtes pas certain de l'offre qui vous correspond le mieux ? Chaque parcours est unique. C'est
                pourquoi nous vous invitons à un échange personnalisé pour construire ensemble la solution qui servira
                au mieux vos ambitions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-strataidge-coral hover:bg-strataidge-coral/90 text-white font-bold shadow-xl shadow-strataidge-coral/30 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-strataidge-coral/40 hover:scale-105"
              >
                <Link href="#contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {specificPlans.map((plan) => (
              <FadeIn key={plan.name} className="flex h-full">
                <div
                  className={cn(
                    "w-full flex flex-col p-8 rounded-2xl bg-white/5 border border-white/20 transition-all duration-300 shadow-lg hover:shadow-strataidge-turquoise/25 hover:border-strataidge-turquoise/60 hover:-translate-y-2 backdrop-blur-sm",
                  )}
                >
                  <h3 className="text-2xl font-bold text-white text-center min-h-[3em] flex items-center justify-center">
                    {plan.name}
                  </h3>
                  {plan.price && (
                    <div className="mt-4 text-center">
                      <span className="text-gray-400">{plan.price}</span>
                      {plan.amount && (
                        <p className="text-5xl font-extrabold text-white">
                          {plan.amount}
                          <span className="text-lg font-medium text-gray-400">/mois</span>
                        </p>
                      )}
                    </div>
                  )}
                  <p className="mt-6 text-gray-300 text-center">{plan.description}</p>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    {plan.note && <p className="mt-6 text-xs text-gray-500 text-center">{plan.note}</p>}
                    <div className="mt-2 flex flex-col gap-2">
                      {detailedPlans.includes(plan.name) ? (
                        <>
                          <Button
                            onClick={openIaConfigurator}
                            className="w-full font-bold py-3 text-sm bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night text-center h-auto text-wrap"
                          >
                            Paramétrez votre offre et recevez un devis instantané
                          </Button>
                          <Button
                            onClick={() => {
                              if (plan.name === "Full Digital") setIsDetailsOpen(true)
                              if (plan.name === "Standard") setIsStandardDetailsOpen(true)
                              if (plan.name === "Strataidge") setIsStrataidgeDetailsOpen(true)
                            }}
                            variant="outline"
                            className="w-full font-bold py-3 text-base border-white/20 text-white hover:bg-white/10 hover:border-strataidge-turquoise/60 bg-transparent"
                          >
                            Détails de l’offre
                          </Button>
                        </>
                      ) : (
                        <Button
                          onClick={() => handleSelectPlan(plan.name)}
                          className={cn(
                            "w-full font-bold py-3 text-base bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night",
                          )}
                        >
                          Recevoir mon offre
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Details Dialog for Full Digital */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="bg-strataidge-blue-night border-strataidge-turquoise/20 text-white w-[95vw] rounded-lg sm:max-w-2xl flex flex-col max-h-[90vh]">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
              Offre Full Digital
            </DialogTitle>
            <DialogDescription className="text-base sm:text-lg text-gray-300 pt-2">
              L’efficacité du tout digital, la rigueur d’un bureau complet
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4">
            <div>
              <p className="text-gray-300">
                Full Digital s’adresse à ceux qui veulent une gestion comptable et fiscale complète tout en gagnant du
                temps et en réduisant leurs coûts. Tout se fait en ligne : envoi des pièces, suivi des chiffres et
                conseils via plateforme sécurisée et email.
              </p>
              <div className="mt-4 p-4 bg-strataidge-turquoise/10 rounded-lg border border-strataidge-turquoise/20">
                <h4 className="font-bold text-strataidge-turquoise">L'humain avant tout</h4>
                <p className="text-gray-300 mt-2">
                  Même dans notre offre 100% digitale, nous tenons à comprendre qui vous êtes. Avant de démarrer, un
                  échange nous permet de cerner vos attentes, vos ambitions et votre réalité. Cet ADN de notre relation
                  garantit un service qui, bien que digital, vous ressemble vraiment.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-3">Ce qui est inclus</h4>
              <ul className="space-y-2">
                {[
                  "Gestion comptable et déclarations fiscales",
                  "Optimisation fiscale et conformité légale belge",
                  "Suivi trimestriel des chiffres avec rapport",
                  "Plateforme sécurisée pour envoi et stockage",
                  "Manuel de bonne conduite pour ce qui est fiscalement et comptablement admis dans votre comptabilité",
                  "Encodage de toutes les factures et paiements transmis (sans tri fiscal)",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-3">Ce qui est en supplément (“À la carte”)</h4>
              <p className="text-gray-400">
                Tout ce qui dépasse la gestion comptable/fiscale standard est proposé en option via notre offre ‘À la
                carte’ :
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Rendez-vous visio ou présentiels</li>
                <li>Conseils stratégiques et management</li>
                <li>Montages fiscaux complexes</li>
                <li>Accompagnements spécifiques (restructuration, cession...)</li>
                <li>Assistance en cas de contrôle fiscal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-3">Conditions et prix</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>
                  Prix à partir de <strong className="text-white">50 €/mois</strong>, calculé selon votre situation
                </li>
                <li>Pénalités en cas de retard de transmission des documents</li>
                <li>Aucun rendez-vous inclus par défaut (100 % digital)</li>
                <li>
                  La responsabilité de la déductibilité des frais soumis vous incombe. Nous encodons toutes les pièces
                  transmises sans effectuer de tri fiscal préalable.
                </li>
              </ul>
            </div>
          </div>
          <DialogFooter className="mt-4 flex-shrink-0">
            <Button
              onClick={openIaConfigurator}
              className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-3"
            >
              Paramétrez votre offre et recevez un devis instantané
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Details Dialog for Standard */}
      <Dialog open={isStandardDetailsOpen} onOpenChange={setIsStandardDetailsOpen}>
        <DialogContent className="bg-strataidge-blue-night border-strataidge-turquoise/20 text-white w-[95vw] rounded-lg sm:max-w-2xl flex flex-col max-h-[90vh]">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
              Offre Standard
            </DialogTitle>
            <DialogDescription className="text-base sm:text-lg text-gray-300 pt-2">
              L’équilibre parfait entre digital et accompagnement renforcé
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4">
            <div>
              <p className="text-gray-300">
                L’offre Standard combine la simplicité digitale du Full Digital avec un accompagnement humain renforcé.
                En plus des services comptables et fiscaux 100 % numériques, vous bénéficiez de rendez-vous réguliers et
                d’un suivi plus proactif, idéal pour ceux qui veulent plus de conseils et d’interactions tout en restant
                dans un budget maîtrisé.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-3">Ce qui est inclus</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Tout le contenu de l’offre Full Digital :</h5>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4">
                    <li>Comptabilité et fiscalité complètes</li>
                    <li>Optimisation fiscale et conformité légale belge</li>
                    <li>Suivi trimestriel des chiffres</li>
                    <li>Plateforme sécurisée pour envoi et stockage</li>
                    <li>Manuel de bonne conduite et encodage des pièces transmises</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    Services supplémentaires propres à l’offre Standard :
                  </h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
                    <li>
                      Rendez-vous initial (visio ou présentiel) pour mettre en place la collaboration et définir vos
                      objectifs.
                    </li>
                    <li>4 rendez-vous conseils/an (1 par trimestre – Teams ou présentiel)</li>
                    <li>Accompagnement en cas de contrôle fiscal</li>
                    <li>Priorité dans les réponses aux questions</li>
                    <li>Conseils personnalisés sur les factures encodées</li>
                    <li>Permanence pour toutes les questions courantes</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-3">Conditions et fonctionnement</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Prix à partir de 250 €/mois, ajusté selon votre situation et volume de pièces</li>
                <li>Documents transmis obligatoirement scannés et dans les délais (pénalités en cas de retard)</li>
                <li>L’encodage se fait tel que reçu : la responsabilité de la déductibilité reste celle du client</li>
                <li>Rendez-vous planifiés chaque trimestre pour optimiser votre suivi et anticiper les ajustements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-3">Ce qui reste en supplément (“À la carte”)</h4>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Montages fiscaux complexes</li>
                <li>Conseil stratégique avancé ou management d’entreprise</li>
                <li>Accompagnement spécifique (restructurations, cessions, levées de fonds)</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="mt-4 flex-shrink-0">
            <Button
              onClick={openIaConfigurator}
              className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-3"
            >
              Paramétrez votre offre et recevez un devis instantané
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Details Dialog for Strataidge */}
      <Dialog open={isStrataidgeDetailsOpen} onOpenChange={setIsStrataidgeDetailsOpen}>
        <DialogContent className="bg-strataidge-blue-night border-strataidge-turquoise/20 text-white w-[95vw] rounded-lg sm:max-w-2xl flex flex-col max-h-[90vh]">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
              Offre Strataidge
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4">
            <div>
              <h4 className="font-bold text-xl text-white mb-3">Objectif</h4>
              <p className="text-gray-300">
                Vous offrir une vision claire et un plan d’action stratégique pour développer votre activité, optimiser
                vos ressources et vous positionner durablement sur votre marché.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl text-white mb-3">Ce qui est inclus</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">1. Diagnostic stratégique approfondi</h5>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4">
                    <li>Analyse complète de votre activité (forces, faiblesses, opportunités, menaces).</li>
                    <li>Identification des leviers cachés de croissance.</li>
                    <li>Benchmark sectoriel pour vous situer face à la concurrence.</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">2. Plan de développement sur mesure</h5>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4">
                    <li>Définition de votre feuille de route stratégique.</li>
                    <li>Priorisation des actions à fort impact.</li>
                    <li>Proposition d’outils et de ressources adaptés à votre niveau d’évolution.</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">3. Accompagnement personnalisé</h5>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4">
                    <li>Séances de coaching stratégique (1:1 ou en équipe).</li>
                    <li>Ajustement en continu de la stratégie en fonction de votre avancement.</li>
                    <li>Support réactif et suivi par nos experts Strataidge.</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">4. Accès à notre écosystème premium</h5>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4">
                    <li>Mise en relation avec nos experts partenaires (marketing, finance, RH, digital).</li>
                    <li>Accès privilégié aux contenus et méthodologies exclusives Strataidge.</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">5. Mesure et optimisation continue</h5>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 pl-4">
                    <li>Mise en place d’indicateurs de performance (KPI) clairs.</li>
                    <li>Ajustements en temps réel pour maximiser votre retour sur investissement.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl text-white mb-3">Tarif et évolutivité</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>
                  À partir de <strong className="text-white">500 €</strong> pour le cycle d’accompagnement initial.
                </li>
                <li>Options évolutives : suivi mensuel, accompagnement intensif, accès à des experts spécialisés.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl text-white mb-3">Pourquoi choisir cette offre ?</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Stratégie sur mesure et hautement personnalisée.</li>
                <li>Combinaison humaine + intelligence augmentée pour accélérer vos résultats.</li>
                <li>Approche premium mais flexible, adaptée à chaque étape de votre développement.</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="mt-4 flex-shrink-0">
            <Button
              onClick={openIaConfigurator}
              className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-3"
            >
              Paramétrez votre offre et recevez un devis instantané
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedPlan} onOpenChange={(isOpen) => !isOpen && setSelectedPlan(null)}>
        <DialogContent className="bg-strataidge-blue-night border-strataidge-turquoise/20 text-white w-[95vw] rounded-lg max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-strataidge-turquoise">Demande d'offre : {selectedPlan}</DialogTitle>
            <DialogDescription className="text-gray-400 pt-2">
              Remplissez ce court formulaire pour recevoir votre proposition personnalisée.
            </DialogDescription>
          </DialogHeader>
          {formMessage ? (
            <div className="py-8 text-center">
              <CheckCircle className="h-16 w-16 mx-auto text-strataidge-turquoise" />
              <p className="mt-4 text-white">{formMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <Input
                name="name"
                type="text"
                placeholder="Votre nom complet"
                required
                className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise"
              />
              <Input
                name="email"
                type="email"
                placeholder="Votre adresse email"
                required
                className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise"
              />
              <Textarea
                name="message"
                placeholder="Décrivez brièvement votre projet ou vos besoins (facultatif)"
                rows={3}
                className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise"
              />
              <DialogFooter>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-strataidge-coral hover:bg-strataidge-coral/90 text-white font-bold py-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Envoi en cours..." : "Recevoir mon offre"}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormMessage(null)

    try {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Here you would typically handle the rest of the form submission,
      // e.g., sending the form data to your backend.
      console.log("Form submitted.")

      setFormMessage("Votre message a été envoyé avec succès !")
      ;(event.target as HTMLFormElement).reset() // Reset form fields
    } catch (error) {
      console.error("Submission error:", error)
      setFormMessage("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-strataidge-blue-night">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Un projet ? Parlons-en.</h2>
              <p className="mt-4 text-gray-300">
                Discutons de votre projet. Remplissez le formulaire ou prenez rendez-vous directement en ligne.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:contact@strataidge.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-strataidge-turquoise transition-colors justify-center lg:justify-start"
                >
                  <Mail className="h-5 w-5 text-strataidge-turquoise" />
                  <span>contact@strataidge-fiduciaire.com</span>
                </a>
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-3 text-gray-300 hover:text-strataidge-turquoise transition-colors justify-center lg:justify-start"
                >
                  <Phone className="h-5 w-5 text-strataidge-turquoise" />
                  <span>+32 499 47 02 98 </span>
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                type="text"
                placeholder="Votre nom"
                required
                className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise text-white"
              />
              <Input
                name="email"
                type="email"
                placeholder="Votre email"
                required
                className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise text-white"
              />
              <Textarea
                name="message"
                placeholder="Votre message"
                rows={4}
                required
                className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise text-white"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-strataidge-coral hover:bg-strataidge-coral/90 text-white font-bold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
              {formMessage && <p className="text-center text-sm text-strataidge-turquoise">{formMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const navLinks = [
    { name: "Vision", href: "#about" },
    { name: "Solutions", href: "#services" },
    { name: "Approche", href: "#methodology" },
    { name: "Analyses", href: "#blog" },
    { name: "Offres", href: "#offers" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-strataidge-blue-night border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Logo & Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image src="/logo.png" alt="Strataidge Fiduciaire & Conseils Logo" width={40} height={40} />

              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white text-left">Strataidge</span>
                <span className="text-[10px] text-strataidge-turquoise font-medium tracking-widest">
                  FIDUCIAIRE & CONSEILS
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-left ml-2.5 text-white">L'humain derrière les chiffres.</p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Column 2: Site Links */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-white tracking-wider">PLAN DU SITE</h3>
            <ul className="mt-4 space-y-2 columns-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-strataidge-turquoise transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-white tracking-wider">SUIVEZ-NOUS</h3>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                aria-label="Suivez-nous sur LinkedIn"
                className="text-gray-400 hover:text-strataidge-turquoise transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Suivez-nous sur Instagram"
                className="text-gray-400 hover:text-strataidge-turquoise transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Strataidge. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
