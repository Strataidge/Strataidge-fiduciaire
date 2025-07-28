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
  HandCoins,
  GraduationCap,
  Briefcase,
  FileText,
  Scale,
  Landmark,
  Banknote,
  Rocket,
  FolderKanban,
  Handshake,
  ClipboardCheck,
  Target,
  ClipboardList,
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
import { SparkleAnimation } from "@/components/sparkle-animation"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FadeIn } from "@/components/fade-in"
import { AnimatedTitle } from "@/components/animated-title"
import { ModernOffersCarousel } from "@/components/modern-offers-carousel"
import { RecruitmentBanner } from "@/components/recruitment-banner"
import { RecruitmentPopup } from "@/components/recruitment-popup"
import { FileUpload } from "@/components/file-upload"

// Main Component
export default function StrataidgeLandingPageV2() {
  const [isBannerVisible, setIsBannerVisible] = useState(true)
  const [isRecruitmentPopupOpen, setIsRecruitmentPopupOpen] = useState(false)

  return (
    <div className="bg-white text-gray-800 antialiased font-sans">
      <RecruitmentBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
        onOpenPopup={() => setIsRecruitmentPopupOpen(true)}
      />
      <RecruitmentPopup isOpen={isRecruitmentPopupOpen} onOpenChange={setIsRecruitmentPopupOpen} />
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

// --- SECTIONS ---

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
          <FadeIn>
            <span className="font-semibold text-strataidge-turquoise">Vision</span>
            <AnimatedTitle className="text-gray-900">
              Plus que des chiffres, une compréhension profonde de votre réalité.
            </AnimatedTitle>
          </FadeIn>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-lg text-gray-700 text-center">
              {
                "Avec plus de 14 années d'expérience en expertise comptable et fiscale, les fondateurs de Strataidge Fiduciaire & Conseils ont accompagné des indépendants, des petites, moyennes et grandes entreprises, jusqu'à siéger aux conseils d'administration. Cette immersion à tous les échelons leur a révélé une évidence : une stratégie réellement efficace ne peut naître qu'en comprenant les personnes derrière chaque entreprise."
              }
            </p>
            <p className="mt-4 text-gray-700 text-center">
              {
                "Nous croyons qu'un conseil réellement pertinent ne se limite pas aux chiffres. Il repose sur l'écoute, la proximité et la compréhension des ambitions humaines qui façonnent chaque projet. Chez Strataidge, nous allions cette approche personnalisée à une expertise rigoureuse et exigeante pour transformer la complexité en opportunité et bâtir une réussite durable. Le digital vient soutenir cette vision en apportant fluidité, simplicité d'exécution et clarté dans chaque étape de votre accompagnement."
              }
            </p>
            <div className="mt-8 border-strataidge-turquoise border-t-0 text-right pr-0 pl-2 ml-0 border-l-4 border-r-[px]">
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
    description: "Une gestion continue et innovante de vos flux financiers pour une vision claire et anticipative.",
    details: {
      intro:
        "Allez au-delà de la simple tenue de livres. Nous transformons votre comptabilité en un outil de pilotage stratégique grâce à des technologies de pointe et une expertise proactive.",
      points: [
        "**Tableaux de bord en temps réel :** Suivez vos indicateurs de performance clés (KPIs) via une plateforme intuitive, accessible 24/7.",
        "**Automatisation des flux :** Gagnez un temps précieux et réduisez les risques d'erreur grâce à la synchronisation bancaire et l'encodage intelligent.",
        "**Reporting proactif :** Recevez des rapports clairs et des alertes personnalisées pour anticiper les opportunités et les risques.",
        "**Conformité assurée :** Gestion complète de vos déclarations TVA, bilans et autres obligations légales belges.",
      ],
      conclusion: "Avec notre pilotage digitalisé, vous ne subissez plus votre comptabilité, vous la maîtrisez.",
    },
  },
  {
    icon: Shield,
    title: "Stratégies fiscales sur mesure",
    description: "Des stratégies adaptées à vos enjeux, alliant anticipation et rigueur pour une fiscalité optimisée.",
    details: {
      intro:
        "La fiscalité est un levier de croissance, pas une fatalité. Notre approche sur mesure vise à optimiser votre charge fiscale en toute légalité et à sécuriser votre avenir.",
      points: [
        "**Audit fiscal complet :** Analyse de votre situation actuelle pour identifier les zones de risque et les opportunités d'optimisation.",
        "**Planification fiscale :** Mise en place de stratégies pour vos revenus, investissements, et rémunérations de dirigeant.",
        "**Optimisation des structures :** Conseils sur le choix et l'évolution de votre forme juridique (SRL, SA...) pour un impact fiscal maîtrisé.",
        "**Veille réglementaire active :** Nous anticipons les changements législatifs pour ajuster votre stratégie et garantir une conformité sans faille.",
      ],
      conclusion: "Transformez la complexité fiscale en avantage concurrentiel et protégez la valeur que vous créez.",
    },
  },
  {
    icon: LineChart,
    title: "Analyses financières avancées",
    description:
      "Des analyses précises pour renforcer votre solidité financière et identifier les leviers de performance.",
    details: {
      intro:
        "Vos chiffres racontent une histoire. Nous vous aidons à la déchiffrer pour renforcer la santé financière de votre entreprise et éclairer vos décisions d'investissement.",
      points: [
        "**Analyse de rentabilité :** Identification de vos produits, services ou clients les plus rentables pour concentrer vos efforts.",
        "**Gestion de trésorerie prévisionnelle :** Modélisation de vos flux de trésorerie pour anticiper les besoins et éviter les tensions.",
        "**Diagnostic de la structure de coûts :** Optimisation de vos charges fixes et variables pour améliorer vos marges.",
        "**Simulation d'investissements :** Évaluation de la pertinence et de l'impact financier de vos futurs projets d'expansion.",
      ],
      conclusion:
        "Prenez des décisions basées sur des données fiables et des analyses profondes, pas sur des intuitions.",
    },
  },
  {
    icon: HandCoins,
    title: "Accompagnement au financement",
    description:
      "Nous montons des dossiers solides pour obtenir crédits et subsides, maximisant vos chances de succès.",
    details: {
      intro:
        "Un projet de croissance a besoin de carburant. Nous vous aidons à structurer vos demandes de financement pour convaincre les banques, les investisseurs et les organismes publics.",
      points: [
        "**Montage de dossiers de crédit :** Préparation de business plans et de prévisionnels financiers robustes et crédibles.",
        "**Recherche de subsides et aides publiques :** Identification des aides régionales, fédérales et européennes auxquelles vous êtes éligible.",
        "**Négociation avec les partenaires financiers :** Nous vous conseillons et pouvons vous assister lors des rendez-vous pour défendre votre projet.",
        "**Solutions de financement alternatives :** Exploration des options de crowdfunding, business angels ou capital-risque.",
      ],
      conclusion: "Mettez toutes les chances de votre côté pour obtenir les fonds nécessaires à vos ambitions.",
    },
  },
  {
    icon: Network,
    title: "Management et structuration",
    description:
      "Nous aidons à structurer votre entreprise et développer un management performant pour une croissance durable.",
    details: {
      intro:
        "La croissance désorganisée est un risque. Nous vous aidons à bâtir des fondations solides pour scaler votre entreprise de manière saine et durable.",
      points: [
        "**Optimisation des processus internes :** Cartographie et amélioration de vos flux de travail pour plus d'efficacité et de clarté.",
        "**Définition des rôles et responsabilités :** Mise en place d'organigrammes clairs et de fiches de fonction pour aligner vos équipes.",
        "**Mise en place d'outils de pilotage :** Déploiement de tableaux de bord de management pour suivre la performance opérationnelle.",
        "**Accompagnement au changement :** Nous aidons vos équipes à adopter les nouvelles structures et les nouveaux outils.",
      ],
      conclusion:
        "Structurez votre entreprise pour la croissance, libérez votre potentiel et celui de vos collaborateurs.",
    },
  },
  {
    icon: Combine,
    title: "Optimisation globale",
    description: "Une vision transversale qui combine expertise humaine et tech pour maximiser chaque opportunité.",
    details: {
      intro:
        "Votre entreprise est un écosystème. Notre vision à 360° décloisonne les expertises (comptable, fiscale, sociale, stratégique) pour créer des synergies et maximiser votre performance globale.",
      points: [
        "**Audit transversal :** Analyse complète de votre entreprise, de la structure de coûts à la stratégie commerciale.",
        "**Optimisation de la rémunération du dirigeant :** Stratégie globale alliant salaire, dividendes, avantages en nature et planification patrimoniale.",
        "**Alignement stratégique et financier :** Nous nous assurons que vos décisions opérationnelles servent votre vision à long terme.",
        "**Intégration technologique :** Conseils sur les outils digitaux qui peuvent optimiser l'ensemble de votre chaîne de valeur.",
      ],
      conclusion: "Ne pensez plus en silos. Adoptez une approche intégrée pour une performance démultipliée.",
    },
  },
  {
    icon: Briefcase,
    title: "Création d'entreprise",
    description: "De l'idée à la réalité, nous vous guidons pour lancer votre entreprise sur des bases solides.",
    details: {
      intro:
        "Transformer une idée en une entreprise prospère est un parcours exigeant. Nous sommes votre co-pilote à chaque étape pour un lancement sécurisé et optimisé.",
      points: [
        "**Validation du projet et business plan :** Nous challengeons votre idée et la traduisons en un plan financier solide.",
        "**Choix de la structure juridique :** Analyse comparative (indépendant, SRL, SA...) pour trouver la forme la plus adaptée fiscalement et socialement.",
        "**Démarches administratives simplifiées :** Coordination avec le notaire, inscription à la BCE, activation de la TVA... Nous gérons la complexité.",
        "**Mise en place des fondations :** Installation de vos outils comptables et formation à vos premières obligations.",
      ],
      conclusion: "Lancez-vous sur des bases saines et concentrez-vous sur ce que vous faites de mieux : votre métier.",
    },
  },
  {
    icon: Handshake,
    title: "Transmission & Acquisition",
    description:
      "Un accompagnement stratégique pour sécuriser et valoriser la vente ou l'acquisition d'une entreprise.",
    details: {
      intro:
        "Vendre, transmettre ou acquérir une entreprise est un moment clé. Notre accompagnement stratégique vise à sécuriser la transaction et à en maximiser la valeur pour vous.",
      points: [
        "**Valorisation d'entreprise :** Évaluation objective de la valeur de l'entreprise pour définir un prix juste.",
        "**Préparation à la vente (Due Diligence) :** Nous préparons votre entreprise à l'audit de l'acquéreur pour une transaction fluide.",
        "**Optimisation fiscale de la cession :** Mise en place de la structure la plus avantageuse pour minimiser l'impôt sur la plus-value.",
        "**Assistance à la négociation :** Nous vous conseillons à chaque étape des discussions pour défendre votre projet.",
      ],
      conclusion: "Abordez cette étape cruciale avec sérénité, stratégie et le soutien d'experts dédiés.",
    },
  },
]

type Service = (typeof services)[0]

function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <>
      <section id="services" className="relative py-24 sm:py-32 bg-strataidge-blue-night">
        <SparkleAnimation className="opacity-50" />
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
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <FadeIn key={service.title}>
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-left h-full w-full p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group transition-all duration-300 hover:border-strataidge-turquoise/50 hover:bg-white/[.08] cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6 w-12 h-12 rounded-lg bg-strataidge-turquoise/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-strataidge-turquoise" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="mt-2 text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              {selectedService && (
                <>
                  <DialogHeader className="flex-shrink-0 text-left">
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise flex items-center gap-4">
                      <selectedService.icon className="h-8 w-8" />
                      {selectedService.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4 text-left">
                    <p className="text-gray-300">{selectedService.details.intro}</p>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-3">Nos engagements :</h4>
                      <ul className="space-y-3">
                        {selectedService.details.points.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                            <span
                              className="text-gray-300"
                              dangerouslySetInnerHTML={{
                                __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>'),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-strataidge-turquoise/80 italic pt-2 border-t border-white/10">
                      {selectedService.details.conclusion}
                    </p>
                  </div>
                  <DialogFooter className="mt-4 flex-shrink-0">
                    <Button
                      onClick={() => setSelectedService(null)}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                    >
                      Fermer
                    </Button>
                    <Button
                      asChild
                      className="bg-strataidge-coral/90 hover:bg-strataidge-coral text-white font-bold shadow-lg shadow-strataidge-coral/25 hover:shadow-xl hover:shadow-strataidge-coral/40 transition-all duration-300"
                    >
                      <Link href="#contact">Discutons de cette solution</Link>
                    </Button>
                  </DialogFooter>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
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
    <section
      id="methodology"
      className="relative py-24 sm:py-32 bg-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent"
    >
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
            <div className="absolute left-4 top-4 h-full w-0.5 bg-white/20" aria-hidden="true" />
            {steps.map((step) => (
              <FadeIn key={step.title}>
                <div className="relative pl-12 pb-12">
                  <div className="absolute left-0 top-4">
                    <div className="w-8 h-8 bg-slate-800 rounded-full border-2 border-strataidge-turquoise flex items-center justify-center">
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
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl max-w-md">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl text-strataidge-turquoise">{selectedPost?.title}</DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  Cet article est réservé à nos membres. Connectez-vous pour accéder à l'analyse complète de nos
                  experts.
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
            </div>
          </div>
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
  const [isCreationDetailsOpen, setIsCreationDetailsOpen] = useState(false)
  const [isTransmissionDetailsOpen, setIsTransmissionDetailsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const [isCarteDetailsOpen, setIsCarteDetailsOpen] = useState(false)

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

  const openCarteRequest = () => {
    setIsCarteDetailsOpen(false)
    handleSelectPlan("À la carte")
  }

  const openCreationRequest = () => {
    setIsCreationDetailsOpen(false)
    handleSelectPlan("Création d'entreprise")
  }

  const openTransmissionRequest = () => {
    setIsTransmissionDetailsOpen(false)
    handleSelectPlan("Transmission & Acquisition")
  }

  const plans = [
    {
      name: "Full Digital",
      price: "À partir de",
      amount: "50€",
      description: "La gestion comptable et fiscale complète, 100% en ligne.",
      features: [
        "Gestion comptable et déclarations fiscales",
        "Optimisation fiscale et conformité légale belge",
        "Suivi trimestriel des chiffres avec rapport",
        "Plateforme sécurisée pour envoi et stockage des documents",
      ],
      notIncluded: [
        "Rendez-vous conseils (visio ou présentiel)",
        "Assistance en cas de contrôle fiscal",
        "Conseils stratégiques, business plans, ou management",
        "Montages fiscaux complexes ou optimisations ciblées",
        "Accompagnements spécifiques (création, transmission, financement)",
      ],
    },
    {
      name: "Standard",
      price: "À partir de",
      amount: "250€",
      description: "L'équilibre entre autonomie digitale et accompagnement humain.",
      features: [
        "Tout le contenu de l'offre Full Digital",
        "Rendez-vous de mise en place de la collaboration",
        "4 rendez-vous conseils/an (un par trimestre, visio ou présentiel)",
        "Accompagnement en cas de contrôle fiscal",
        "Priorité dans le traitement de vos demandes",
        "Conseils personnalisés sur les factures encodées",
        "Permanence pour toutes vos questions",
      ],
      notIncluded: [
        "Conseil stratégique avancé ou management d'entreprise",
        "Élaboration de business plans ou plans stratégiques",
        "Montages fiscaux complexes et optimisations poussées",
        "Accompagnement spécifique (création, transmission, financement)",
        "Audit et diagnostic complet de l'entreprise",
      ],
    },
    {
      name: "Strataidge",
      price: "À partir de",
      amount: "500€",
      description: "Une immersion stratégique pour transformer votre business.",
      features: [
        "Diagnostic stratégique approfondi et analyse complète",
        "Plan de développement sur mesure avec feuille de route",
        "Accompagnement personnalisé et coaching stratégique",
        "Accès à notre écosystème premium de partenaires",
        "Mesure et optimisation continue des performances (KPIs)",
      ],
      notIncluded: [
        "La gestion comptable et fiscale de base (Offre Full Digital) n'est pas incluse par défaut et peut être ajoutée.",
        "Des missions très spécifiques comme la recherche de financement ou l'accompagnement à la transmission peuvent faire l'objet d'un devis séparé.",
      ],
    },
    {
      name: "À la carte",
      price: "Sur demande",
      amount: "",
      description: "Des services ponctuels pour vos besoins spécifiques.",
      features: [
        "Rendez-vous conseils (comptable, financier, stratégique et fiscale)",
        "Recherche et montage de crédits professionnels",
        "Assistance en cas de contrôle fiscal",
        "Optimisations fiscales ou comptables ciblées",
        "Élaboration de business plans ou plans stratégiques",
        "Audit et diagnostic d'entreprise (risques, opportunités, procédures)",
        "Mise en place de l'internalisation de la comptabilité (diagnostic, écolage, etc.)",
      ],
    },
    {
      name: "Création d'entreprise",
      price: "Sur devis",
      amount: "",
      description:
        "De l'idée au lancement officiel : un accompagnement clé en main pour créer votre société sereinement.",
      features: [
        "Analyse et validation du projet",
        "Rédaction et accompagnement du business plan",
        "Choix de la forme juridique et fiscalité adaptée",
        "Préparation et coordination avec le notaire",
      ],
      fullDetails: {
        included: {
          preparation: {
            title: "Analyse et préparation du projet",
            icon: Briefcase,
            items: [
              "Évaluation de la faisabilité et du potentiel",
              "Analyse du marché et des besoins financiers",
              "Définition des objectifs et stratégie de lancement",
            ],
          },
          businessPlan: {
            title: "Business plan complet",
            icon: FileText,
            items: [
              "Rédaction des prévisions financières et analyses de rentabilité",
              "Présentation claire pour banquiers et investisseurs",
              "Conseils sur les aides et subsides disponibles",
            ],
          },
          structure: {
            title: "Choix de la structure juridique et fiscale",
            icon: Scale,
            items: [
              "Comparatif SRL, SA, SNC… adapté à votre projet",
              "Conseils sur la fiscalité la plus avantageuse",
              "Prévision des impacts sociaux et personnels (statut dirigeant, dividendes)",
            ],
          },
          demarches: {
            title: "Démarches administratives et notariales",
            icon: Landmark,
            items: [
              "Coordination avec le notaire pour la création de la société",
              "Assistance pour l'ouverture du compte bancaire professionnel",
              "Aide pour l'inscription à la BCE et l'activation de la TVA",
            ],
          },
          comptable: {
            title: "Mise en place comptable",
            icon: Banknote,
            items: [
              "Installation des outils de gestion adaptés",
              "Mise en place des premiers processus (facturation, suivi, reporting)",
              "Formation initiale à vos obligations comptables et fiscales",
            ],
          },
          suivi: {
            title: "Suivi post-création",
            icon: Rocket,
            items: [
              "Contrôle des premiers mois de gestion",
              "Conseils sur l'optimisation et l'organisation",
              "Possibilité de basculer vers un pack Full Digital ou Standard",
            ],
          },
        },
        pourQui: [
          "Porteurs de projet et futurs entrepreneurs",
          "Indépendants souhaitant passer en société",
          "Startups recherchant un accompagnement complet et professionnel",
        ],
        conditions: [
          "Offre sur devis (personnalisée selon le projet et le niveau d'accompagnement souhaité)",
          "Prestations modulables : business plan seul, démarches notariales uniquement ou accompagnement complet",
          "Timeline claire : de la validation de l'idée jusqu'au lancement opérationnel",
        ],
        exemples: [
          "Un indépendant qui veut passer en société et avoir une fiscalité optimisée dès la création",
          "Une startup qui a besoin d'un business plan solide pour convaincre une banque ou des investisseurs",
          "Un porteur de projet qui souhaite déléguer toute la partie administrative et se concentrer sur son activité",
        ],
      },
    },
    {
      name: "Transmission & Acquisition",
      price: "Sur devis",
      amount: "",
      description:
        "Préparez, valorisez et concrétisez la vente, la reprise ou la transmission de votre entreprise avec une approche stratégique et humaine.",
      features: [
        "Valorisation et diagnostic stratégique",
        "Optimisation fiscale et juridique préalable",
        "Dossier de vente ou d'acquisition complet et professionnel",
        "Conseil et assistance en négociation",
      ],
      fullDetails: {
        included: {
          diagnostic: {
            title: "Diagnostic et stratégie initiale",
            icon: ClipboardList,
            items: [
              "Analyse financière et opérationnelle de l'entreprise concernée",
              "Évaluation de la valeur (méthodes multiples) et identification des leviers d'optimisation",
              "Définition d'une stratégie adaptée : transmission (vente ou familiale) ou acquisition",
            ],
          },
          optimisation: {
            title: "Optimisation fiscale et juridique",
            icon: Shield,
            items: [
              "Mise en place des meilleures stratégies fiscales avant opération",
              "Structuration juridique adaptée à la vente, reprise ou transmission",
              "Anticipation des impacts patrimoniaux pour dirigeants et actionnaires",
            ],
          },
          dossier: {
            title: "Dossier et préparation transactionnelle",
            icon: FolderKanban,
            items: [
              "Création du dossier de présentation ou dossier de reprise (pitch, mémo, business plan)",
              "Préparation des documents financiers et prévisionnels",
              "Mise en conformité comptable et légale",
            ],
          },
          negociation: {
            title: "Accompagnement dans les négociations",
            icon: Handshake,
            items: [
              "Aide à la recherche d'acquéreurs ou d'entreprises cibles",
              "Conseil stratégique dans les discussions et offres",
              "Coordination avec les notaires, avocats et partenaires financiers",
            ],
          },
          acquisition: {
            title: "Acquisition (reprise d'entreprise)",
            icon: Target,
            items: [
              "Analyse de la cible et due diligence",
              "Assistance dans la négociation des conditions d'acquisition",
              "Plan de financement et intégration post-rachat",
            ],
          },
          suivi: {
            title: "Suivi post-transaction",
            icon: ClipboardCheck,
            items: [
              "Transition organisationnelle après la vente ou la reprise",
              "Optimisation patrimoniale du dirigeant après cession ou acquisition",
              "Support dans la mise en place des nouveaux processus",
            ],
          },
        },
        pourQui: [
          "Chefs d'entreprise préparant la vente ou la transmission de leur société",
          "Entreprises familiales organisant une succession sereine",
          "Repreneurs et investisseurs cherchant à acquérir une société avec un accompagnement stratégique",
        ],
        conditions: [
          "Offre sur devis personnalisé selon l'ampleur du projet (taille, complexité, objectifs)",
          "Mission cadrée : diagnostic initial, plan de préparation et accompagnement jusqu'à la conclusion",
          "Possibilité de suivi post-opérationnel (intégration, optimisation patrimoniale)",
        ],
        exemples: [
          "Vente d'une PME : préparer et valoriser l'entreprise 18 mois avant la vente",
          "Transmission familiale : réduire l'impact fiscal et organiser la succession sereinement",
          "Acquisition d'une société : analyser la cible, structurer le financement et négocier les conditions",
        ],
      },
    },
  ]

  const handlePlanClick = (planName: string) => {
    switch (planName) {
      case "Full Digital":
        setIsDetailsOpen(true)
        break
      case "Standard":
        setIsStandardDetailsOpen(true)
        break
      case "Strataidge":
        setIsStrataidgeDetailsOpen(true)
        break
      case "À la carte":
        setIsCarteDetailsOpen(true)
        break
      case "Création d'entreprise":
        setIsCreationDetailsOpen(true)
        break
      case "Transmission & Acquisition":
        setIsTransmissionDetailsOpen(true)
        break
      default:
        handleSelectPlan(planName)
        break
    }
  }

  const InternalisationSection = () => (
    <div className="mt-6 p-4 rounded-lg bg-strataidge-turquoise/10 border border-strataidge-turquoise/20">
      <h4 className="font-bold text-xl text-white mb-3 flex items-center">
        <GraduationCap className="h-6 w-6 text-strataidge-turquoise mr-3" />
        Vers l'autonomie comptable : un levier de croissance
      </h4>
      <p className="text-gray-300 mb-2">
        Internaliser votre comptabilité peut être un atout stratégique majeur, offrant plus de contrôle, de réactivité
        et une meilleure vision financière. C'est une étape que nous encourageons lorsque c'est pertinent pour votre
        structure.
      </p>
      <p className="text-gray-300">
        Nous pouvons vous accompagner dans cette transition. Notre{" "}
        <button
          onClick={() => {
            setIsDetailsOpen(false)
            setIsStandardDetailsOpen(false)
            setIsStrataidgeDetailsOpen(false)
            setIsCarteDetailsOpen(true)
          }}
          className="font-bold text-strataidge-turquoise hover:underline"
        >
          "À la carte"
        </button>{" "}
        inclut un accompagnement complet pour la mise en place de votre comptabilité interne.
      </p>
    </div>
  )

  const creationPlan = plans.find((p) => p.name === "Création d'entreprise")
  const transmissionPlan = plans.find((p) => p.name === "Transmission & Acquisition")

  return (
    <>
      <section id="offers" className="py-24 sm:py-32 bg-strataidge-blue-night overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-semibold text-strataidge-turquoise">Offres</span>
            <AnimatedTitle className="text-white">Des solutions pour chaque étape de votre parcours</AnimatedTitle>
            <FadeIn>
              <p className="mt-4 text-lg text-gray-300">
                Que vous soyez en phase de création, de croissance ou de transmission, nous avons une solution pour
                vous. Découvrez nos abonnements et nos missions spécifiques.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="mt-20">
          <ModernOffersCarousel plans={plans} onPlanSelect={handlePlanClick} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mt-12 text-center max-w-4xl mx-auto bg-white/5 rounded-2xl p-10 border border-white/20 shadow-xl backdrop-blur-sm">
              <p className="text-xl text-gray-200 font-medium mb-8">
                Vous n'êtes pas certain de l'offre qui vous correspond le mieux ? Chaque parcours est unique. C'est
                pourquoi nous vous invitons à un échange personnalisé pour construire ensemble la solution qui servira
                au mieux vos ambitions.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-strataidge-coral/90 hover:bg-strataidge-coral text-white font-bold shadow-xl shadow-strataidge-coral/30 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-strataidge-coral/50 hover:scale-105"
              >
                <Link href="#contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DIALOGS */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Offre Full Digital
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg text-gray-300 pt-2">
                  L'efficacité du tout digital, la rigueur d'un bureau complet
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4">
                <div>
                  <p className="text-gray-300">
                    Full Digital s'adresse à ceux qui veulent une gestion comptable et fiscale complète tout en gagnant
                    du temps et en réduisant leurs coûts. Cette offre est idéale si vous souhaitez externaliser
                    entièrement votre comptabilité, que vous partiez de zéro ou que vous ayez déjà un système en place.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-3">Ce qui est inclus</h4>
                  <ul className="space-y-2">
                    {plans
                      .find((p) => p.name === "Full Digital")
                      ?.features.map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-3">
                    Ce qui n'est pas inclus (disponible "À la carte")
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    {plans
                      .find((p) => p.name === "Full Digital")
                      ?.notIncluded?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
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
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isStandardDetailsOpen} onOpenChange={setIsStandardDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Offre Standard
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg text-gray-300 pt-2">
                  L'équilibre parfait entre autonomie digitale et accompagnement humain renforcé.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4">
                <div>
                  <p className="text-gray-300">
                    L'offre Standard combine la simplicité digitale avec un accompagnement humain renforcé. Elle
                    s'adapte que votre comptabilité soit gérée en interne par vos équipes ou externalisée.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-3">Ce qui est inclus</h4>
                  <ul className="space-y-2">
                    {plans
                      .find((p) => p.name === "Standard")
                      ?.features.map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-3">
                    Ce qui n'est pas inclus (disponible "À la carte")
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                    {plans
                      .find((p) => p.name === "Standard")
                      ?.notIncluded?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                  </ul>
                </div>
                <InternalisationSection />
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={openIaConfigurator}
                  className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-3"
                >
                  Paramétrez votre offre et recevez un devis instantané
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isStrataidgeDetailsOpen} onOpenChange={setIsStrataidgeDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Offre Strataidge
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg text-gray-300 pt-2">
                  Une offre haut de gamme pour transformer votre business et l'aligner avec votre ambition.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4">
                <div>
                  <p className="text-gray-300">
                    L'offre Strataidge est conçue pour les entreprises ambitieuses qui cherchent à dépasser les
                    objectifs visibles. Elle s'adapte que votre comptabilité soit gérée en interne par vos équipes ou
                    externalisée, car notre focus est la stratégie globale.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-3">Ce qui est inclus</h4>
                  <ul className="space-y-2">
                    {plans
                      .find((p) => p.name === "Strataidge")
                      ?.features.map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-3">
                    Ce qui n'est pas inclus (disponible "À la carte")
                  </h4>
                  <p className="text-gray-400">{plans.find((p) => p.name === "Strataidge")?.notIncluded?.join(" ")}</p>
                </div>
                <InternalisationSection />
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={openIaConfigurator}
                  className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold py-3"
                >
                  Paramétrez votre offre et recevez un devis instantané
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isCarteDetailsOpen} onOpenChange={setIsCarteDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Offre À la carte
                </DialogTitle>
                <DialogDescription className="text-base sm:text-lg text-gray-300 pt-2">
                  Flexibilité totale pour vos besoins spécifiques
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4">
                <div>
                  <h4 className="font-bold text-xl text-white mb-3">Services ponctuels</h4>
                  <ul className="space-y-2">
                    {plans
                      .find((p) => p.name === "À la carte")
                      ?.features.filter((f) => !f.includes("internalisation"))
                      .map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-strataidge-turquoise/10 border border-strataidge-turquoise/20">
                  <h4 className="font-bold text-xl text-white mb-3 flex items-center">
                    <GraduationCap className="h-6 w-6 text-strataidge-turquoise mr-3" />
                    NOUVEAU : Accompagnement à l'internalisation de la comptabilité
                  </h4>
                  <p className="text-gray-300 mb-3">
                    Prenez le contrôle de votre comptabilité. Nous vous accompagnons pour structurer, former et
                    superviser vos équipes, transformant votre service comptable en un centre de performance.
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-lg text-strataidge-turquoise mb-1">
                      Nos modules d'intervention :
                    </h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
                      <li>
                        <strong>Structuration & Mise en place :</strong> Audit, choix des outils, création des
                        procédures.
                      </li>
                      <li>
                        <strong>Formation & Écolage des équipes :</strong> Montée en compétence sur les outils et les
                        obligations légales.
                      </li>
                      <li>
                        <strong>Supervision & Validation :</strong> Revue périodique de votre comptabilité pour garantir
                        la conformité.
                      </li>
                      <li>
                        <strong>Audit & Optimisation :</strong> Analyse de l'existant pour identifier risques et
                        améliorations.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-xl text-white mb-3">Pour qui ?</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Clients actuels ayant besoin de services supplémentaires en dehors de leur pack</li>
                    <li>Futurs clients souhaitant une mission unique (exemple : assistance contrôle fiscal)</li>
                    <li>Entreprises souhaitant internaliser leur comptabilité avec un accompagnement expert</li>
                  </ul>
                </div>
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={openCarteRequest}
                  className="w-full bg-strataidge-coral/90 hover:bg-strataidge-coral text-white font-bold py-3 shadow-lg shadow-strataidge-coral/25 hover:shadow-xl hover:shadow-strataidge-coral/40 transition-all duration-300"
                >
                  Demander une mission sur mesure et obtenir un devis rapidement
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {creationPlan && (
        <Dialog open={isCreationDetailsOpen} onOpenChange={setIsCreationDetailsOpen}>
          <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-3xl">
            <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
              <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
                <DialogHeader className="flex-shrink-0">
                  <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                    Offre Création d'entreprise
                  </DialogTitle>
                  <DialogDescription className="text-base sm:text-lg text-gray-300 pt-2">
                    Un accompagnement complet pour transformer votre idée en société
                  </DialogDescription>
                </DialogHeader>
                <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4">
                  <div>
                    <p className="text-gray-300">
                      Créer une entreprise est une étape clé qui demande rigueur et vision stratégique. L'offre Création
                      d'entreprise de Strataidge couvre toutes les étapes : de l'analyse de votre projet à la signature
                      chez le notaire, en passant par la rédaction de votre business plan et la mise en place de votre
                      structure comptable et fiscale. Nous vous guidons pas à pas, pour que chaque décision soit
                      éclairée et conforme aux exigences légales belges.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-4">Ce qui est inclus</h4>
                    <div className="space-y-6">
                      {Object.values(creationPlan.fullDetails.included).map((section) => (
                        <div key={section.title}>
                          <h5 className="font-semibold text-lg text-strataidge-turquoise mb-3 flex items-center">
                            <section.icon className="h-5 w-5 mr-3" />
                            {section.title}
                          </h5>
                          <ul className="space-y-2 pl-8">
                            {section.items.map((item) => (
                              <li key={item} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-3">Pour qui ?</h4>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      {creationPlan.fullDetails.pourQui.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-3">Conditions et fonctionnement</h4>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      {creationPlan.fullDetails.conditions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-3">Exemples concrets</h4>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      {creationPlan.fullDetails.exemples.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <DialogFooter className="mt-4 flex-shrink-0">
                  <Button
                    onClick={openCreationRequest}
                    className="w-full bg-strataidge-coral/90 hover:bg-strataidge-coral text-white font-bold py-3 shadow-lg shadow-strataidge-coral/25 hover:shadow-xl hover:shadow-strataidge-coral/40 transition-all duration-300"
                  >
                    Démarrer mon projet d'entreprise avec Strataidge
                  </Button>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {transmissionPlan && (
        <Dialog open={isTransmissionDetailsOpen} onOpenChange={setIsTransmissionDetailsOpen}>
          <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-3xl">
            <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
              <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
                <DialogHeader className="flex-shrink-0">
                  <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                    Offre Transmission et Acquisition d'entreprise
                  </DialogTitle>
                  <DialogDescription className="text-base sm:text-lg text-gray-300 pt-2">
                    Un accompagnement complet pour chaque étape clé
                  </DialogDescription>
                </DialogHeader>
                <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4">
                  <div>
                    <p className="text-gray-300">
                      Que vous soyez transmetteur (vente ou familial) ou acquéreur (repreneur), chaque opération de ce
                      type demande une préparation rigoureuse et une vision globale. Strataidge vous accompagne de la
                      réflexion à la signature, en mettant l'accent sur la valorisation de l'entreprise, l'optimisation
                      fiscale et juridique, et une négociation équilibrée et sécurisée.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-4">Ce qui est inclus</h4>
                    <div className="space-y-6">
                      {Object.values(transmissionPlan.fullDetails.included).map((section) => (
                        <div key={section.title}>
                          <h5 className="font-semibold text-lg text-strataidge-turquoise mb-3 flex items-center">
                            <section.icon className="h-5 w-5 mr-3" />
                            {section.title}
                          </h5>
                          <ul className="space-y-2 pl-8">
                            {section.items.map((item) => (
                              <li key={item} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-3">Pour qui ?</h4>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      {transmissionPlan.fullDetails.pourQui.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-3">Conditions et fonctionnement</h4>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      {transmissionPlan.fullDetails.conditions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-3">Exemples concrets</h4>
                    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                      {transmissionPlan.fullDetails.exemples.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <DialogFooter className="mt-4 flex-shrink-0">
                  <Button
                    onClick={openTransmissionRequest}
                    className="w-full bg-strataidge-coral/90 hover:bg-strataidge-coral text-white font-bold py-3 shadow-lg shadow-strataidge-coral/25 hover:shadow-xl hover:shadow-strataidge-coral/40 transition-all duration-300"
                  >
                    Préparer ma transmission ou acquisition avec Strataidge
                  </Button>
                </DialogFooter>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Dialog open={!!selectedPlan} onOpenChange={(isOpen) => !isOpen && setSelectedPlan(null)}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl max-w-md">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl text-strataidge-turquoise">
                  Demande d'offre : {selectedPlan}
                </DialogTitle>
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
                      className="w-full bg-strataidge-coral/90 hover:bg-strataidge-coral text-white font-bold py-3 shadow-lg shadow-strataidge-coral/25 hover:shadow-xl hover:shadow-strataidge-coral/40 transition-all duration-300"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Recevoir mon offre"}
                    </Button>
                  </DialogFooter>
                </form>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState<string | null>(null)
  const [formError, setFormError] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormMessage(null)
    setFormError(false)

    const formData = new FormData(event.currentTarget)

    // Ajouter le fichier sélectionné au FormData
    if (selectedFile) {
      formData.set("file", selectedFile)
    }

    const webhookUrl = "https://buck-able-curiously.ngrok-free.app/webhook/13387ff2-fae9-48d1-80b5-4ce7fb39e895"

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setFormMessage("Votre message a bien été envoyé, nous vous répondrons rapidement.")
        setFormError(false)
        ;(event.target as HTMLFormElement).reset()
        setSelectedFile(null)
      } else {
        setFormMessage("Une erreur est survenue, merci de réessayer.")
        setFormError(true)
      }
    } catch (error) {
      console.error("Submission error:", error)
      setFormMessage("Une erreur est survenue, merci de réessayer.")
      setFormError(true)
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

              <FileUpload
                onFileSelect={setSelectedFile}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                placeholder="Joindre un document (facultatif)"
                required={false}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-strataidge-coral/90 hover:bg-strataidge-coral text-white font-bold py-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-strataidge-coral/25 hover:shadow-xl hover:shadow-strataidge-coral/40 transition-all duration-300"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
              {formMessage && (
                <p
                  className={`text-center text-sm ${formError ? "text-strataidge-coral" : "text-strataidge-turquoise"}`}
                >
                  {formMessage}
                </p>
              )}
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
            <p className="mt-2 text-xs text-left ml-2.5 text-gray-400">
              {
                "Strataidge, votre fiduciaire de confiance en Wallonie et à Bruxelles, vous accompagne dans le pilotage comptable, fiscal et stratégique de votre activité. Nous sommes également à vos côtés pour la création, la transmission ou l'acquisition de votre entreprise."
              }
            </p>
          </div>
          <div className="hidden md:block md:col-span-2"></div>
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
