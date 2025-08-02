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
  Send,
  Loader,
  X,
  Users,
  UserCheck,
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
import { Chatbot } from "@/components/chatbot"
import { CookieBanner } from "@/components/cookie-banner"
import { CookiePolicyLink } from "@/components/cookie-policy-link"

// Main Component
export default function StrataidgeLandingPageV2() {
  const [isBannerVisible, setIsBannerVisible] = useState(true)
  const [isRecruitmentPopupOpen, setIsRecruitmentPopupOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false) // Nouvel état

  return (
    <div className="bg-white text-gray-800 antialiased font-sans">
      {/* Schema.org structured data for the page */}
      <RecruitmentBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
        onOpenPopup={() => setIsRecruitmentPopupOpen(true)}
        isChatOpen={isChatOpen} // Passer l'état du chat
      />
      <RecruitmentPopup isOpen={isRecruitmentPopupOpen} onOpenChange={setIsRecruitmentPopupOpen} />
      <Header />
      <main role="main">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MethodologySection />
        <BlogSection />
        <OffersSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot onChatStateChange={setIsChatOpen} /> {/* Passer le callback */}
      <CookieBanner />
    </div>
  )
}

// --- SECTIONS ---

function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-strataidge-turquoise to-strataidge-coral rounded-2xl blur-xl opacity-20"></div>
              <Image
                src="/vision-team-collaboration.webp"
                alt="Équipe Strataidge célébrant une collaboration réussie dans un bureau moderne avec vue sur la nature"
                width={500}
                height={600}
                className="relative rounded-2xl object-cover w-full h-full shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn>
            <span className="font-semibold text-strataidge-turquoise">Vision</span>
            <AnimatedTitle className="text-gray-900" id="about-heading">
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
    icon: Users,
    title: "Talents freelance",
    description:
      "Nous mettons à votre disposition des experts qualifiés en freelance, adaptés à vos besoins et votre budget.",
    details: {
      intro:
        "Besoin de renforcer votre équipe sans les contraintes d'un recrutement permanent ? Nous vous proposons des talents freelance expérimentés (comptables, contrôleurs de gestion, assistants administratifs), formés à nos méthodes et parfaitement intégrés à votre environnement de travail.",
      points: [
        "**Experts qualifiés et polyvalents :** Sélection rigoureuse de profils avec expertise comptable, contrôle de gestion ou administrative confirmée.",
        "**Flexibilité totale :** Intervention en temps partiel ou temps plein, selon vos besoins et votre charge de travail.",
        "**Intégration rapide :** Formation et accompagnement pour une prise de poste efficace dans vos outils et processus.",
        "**Supervision Strataidge :** Encadrement et contrôle qualité par nos experts pour garantir la conformité et l'excellence.",
        "**Solution économique :** Réduction des coûts RH (pas de charges sociales, formation, congés) tout en maintenant la qualité.",
      ],
      conclusion: "Renforcez votre équipe avec la flexibilité du freelance et la garantie qualité Strataidge.",
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
        "**Assistance à la négociation :** Nous vous conseillons et pouvons vous assister lors des rendez-vous pour défendre votre projet.",
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
      <section
        id="services"
        className="relative py-24 sm:py-32 bg-strataidge-blue-night"
        aria-labelledby="services-heading"
      >
        <SparkleAnimation className="opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-semibold text-strataidge-turquoise">Solutions</span>
            <AnimatedTitle className="text-white" id="services-heading">
              Des solutions digitales et humaines adaptées à vos enjeux
            </AnimatedTitle>
            <FadeIn>
              <p className="mt-4 text-lg text-gray-300">
                Gestion comptable en ligne, optimisation fiscale et automatisation comptabilité : notre reporting
                digital soutient la croissance entreprises avec une approche humaine.
              </p>
            </FadeIn>
          </div>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title}>
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-left h-full w-full p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group transition-all duration-300 hover:border-strataidge-turquoise/50 hover:bg-white/[.08] cursor-pointer focus:outline-none focus:ring-0"
                  aria-label={`En savoir plus sur ${service.title}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6 w-12 h-12 rounded-lg bg-strataidge-turquoise/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-strataidge-turquoise" aria-hidden="true" />
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
                      <selectedService.icon className="h-8 w-8" aria-hidden="true" />
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
                            <CheckCircle
                              className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0"
                              aria-hidden="true"
                            />
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
                    <button
                      onClick={() => setSelectedService(null)}
                      className="relative h-14 bg-transparent backdrop-blur-sm border border-white/20 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-0 px-6 text-white font-semibold text-lg tracking-wide"
                    >
                      Fermer
                    </button>
                    <button
                      asChild
                      className="group relative h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-strataidge-turquoise/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-0 px-6"
                    >
                      <Link href="#contact">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="relative flex items-center justify-center h-full">
                          <span className="text-white font-semibold text-lg tracking-wide">
                            Discutons de cette solution
                          </span>
                          <ArrowRight className="ml-3 h-5 w-5 text-strataidge-turquoise transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-strataidge-coral/20 to-strataidge-turquoise/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </Link>
                    </button>
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
      aria-labelledby="methodology-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-strataidge-turquoise">Approche</span>
          <AnimatedTitle className="text-white" id="methodology-heading">
            Notre approche : l'humain derrière les chiffres, la stratégie au premier plan
          </AnimatedTitle>
          <FadeIn>
            <p className="mt-4 text-lg text-gray-300">
              Une approche comptable innovante qui allie vision stratégique et fiduciaire moderne, avec digitalisation
              comptabilité et accompagnement humain personnalisé.
            </p>
          </FadeIn>
        </div>
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-4 h-full w-0.5 bg-white/20" aria-hidden="true" />
            {steps.map((step, index) => (
              <FadeIn key={step.title}>
                <div className="relative pl-12 pb-12">
                  <div className="absolute left-0 top-4">
                    <div className="w-8 h-8 bg-slate-800 rounded-full border-2 border-strataidge-turquoise flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-strataidge-turquoise" aria-hidden="true" />
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
      img: "/gouvernement-de-wever-2025.webp",
      category: "Fiscalité",
      title: "Réforme fiscale 2025 : ce que prévoit le nouveau gouvernement belge",
    },
    {
      img: "/charges-sociales-pme-new.webp",
      category: "Entreprise",
      title: "Charges sociales : nouvelles réductions ciblées pour les PME en 2025",
    },
    {
      img: "/facturation-electronique.webp",
      category: "Digitalisation",
      title: "Facturation électronique : les grands changements à venir",
    },
    {
      img: "/fiscalite-verte.webp",
      category: "Fiscalité",
      title: "Fiscalité verte : les changements majeurs prévus en 2025",
    },
    {
      img: "/reforme-des-pensions.webp",
      category: "Social",
      title: "Réforme des pensions 2025 : l'âge légal passe à 66 ans, bonus et conditions renforcées",
    },
    {
      img: "/ecosysteme-belge.webp",
      category: "Innovation",
      title: "L'écosystème belge des start‑ups en plein essor : technologie, santé et durabilité en tête",
    },
  ]

  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null)

  return (
    <section id="blog" className="py-24 sm:py-32 bg-gray-200" aria-labelledby="blog-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-semibold text-strataidge-turquoise">Analyses</span>
          <AnimatedTitle id="blog-heading">Actualité décryptée par nos experts</AnimatedTitle>
        </div>
      </div>
      <div className="mt-20">
        <div
          className="flex gap-8 overflow-x-auto pb-8 horizontal-scrollbar pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8"
          style={{ scrollSnapType: "x mandatory" }}
          role="list"
          aria-label="Articles de blog"
        >
          {blogPosts.map((post, index) => (
            <FadeIn
              key={post.title}
              className="flex-shrink-0 w-[90vw] max-w-sm sm:w-[350px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <article role="listitem" className="block group h-full w-full text-left focus:outline-none focus:ring-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full h-full"
                  aria-label={`Lire l'article : ${post.title}`}
                >
                  <div className="h-full flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-strataidge-turquoise/50 transition-all duration-300 shadow-lg">
                    <div className="overflow-hidden">
                      <Image
                        src={post.img || "/placeholder.svg"}
                        alt={`Illustration pour l'article : ${post.title}`}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading={index < 3 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 90vw, 350px"
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
              </article>
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
                <Lock className="h-16 w-16 mx-auto text-strataidge-yellow/50" aria-hidden="true" />
              </div>
              <DialogFooter>
                <Button
                  onClick={() => setSelectedPost(null)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                >
                  Fermer
                </Button>
                <Button className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold focus:outline-none focus:ring-0">
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
  const [isTalentsDetailsOpen, setIsTalentsDetailsOpen] = useState(false)

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

  const openTalentsRequest = () => {
    setIsTalentsDetailsOpen(false)
    handleSelectPlan("Talents freelance")
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
        "Rendez-vous conseils spécialisés",
        "Montage de dossiers de crédit",
        "Assistance contrôle fiscal",
        "Business plans et audits",
      ],
    },
    {
      name: "Création d'entreprise",
      price: "Sur devis",
      amount: "",
      description:
        "De l'idée au lancement officiel : un accompagnement clé en main pour créer votre société sereinement.",
      features: [
        "Analyse et validation complète du projet d'entreprise",
        "Rédaction du business plan et prévisions financières",
        "Choix optimal de la forme juridique et fiscalité",
        "Coordination complète des démarches notariales et administratives",
        "Formation aux obligations comptables et fiscales",
        "Suivi post-création et conseils d'optimisation",
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
    {
      name: "Talents freelance",
      price: "Sur devis",
      amount: "",
      description: "Des experts qualifiés en freelance pour renforcer votre équipe interne selon vos besoins.",
      features: [
        "Experts polyvalents et expérimentés",
        "Temps partiel ou temps plein selon besoins",
        "Supervision et contrôle qualité Strataidge",
        "Intégration rapide dans vos processus",
      ],
      fullDetails: {
        included: {
          selection: {
            title: "Sélection et qualification",
            icon: UserCheck,
            items: [
              "Sélection rigoureuse d'experts expérimentés (comptables, contrôleurs, assistants)",
              "Vérification des compétences techniques et soft skills",
              "Formation aux spécificités de votre secteur d'activité",
            ],
          },
          integration: {
            title: "Intégration et formation",
            icon: GraduationCap,
            items: [
              "Formation à vos outils comptables et processus internes",
              "Accompagnement lors des premiers jours de mission",
              "Documentation complète des procédures à suivre",
            ],
          },
          supervision: {
            title: "Supervision et contrôle qualité",
            icon: Shield,
            items: [
              "Encadrement par nos experts comptables",
              "Contrôles qualité réguliers du travail effectué",
              "Support technique et résolution de problèmes",
            ],
          },
          flexibilite: {
            title: "Flexibilité et adaptation",
            icon: Target,
            items: [
              "Modulation du temps de travail selon vos besoins",
              "Possibilité de changement de profil si nécessaire",
              "Adaptation aux pics d'activité (clôtures, déclarations)",
            ],
          },
          economie: {
            title: "Avantages économiques",
            icon: Banknote,
            items: [
              "Pas de charges sociales ni de coûts RH",
              "Pas de frais de formation ou d'équipement",
              "Facturation uniquement du temps travaillé",
            ],
          },
          support: {
            title: "Support continu",
            icon: Handshake,
            items: [
              "Hotline technique pour l'expert en mission",
              "Réunions de suivi régulières avec votre équipe",
              "Reporting mensuel sur les activités réalisées",
            ],
          },
        },
        pourQui: [
          "Entreprises ayant besoin de renfort temporaire ou permanent",
          "PME souhaitant internaliser leur gestion sans recruter",
          "Sociétés avec des pics d'activité saisonniers",
          "Entreprises en croissance nécessitant une montée en charge progressive",
        ],
        conditions: [
          "Mission minimum de 3 mois pour garantir l'efficacité",
          "Temps partiel : minimum 2 jours/semaine",
          "Devis personnalisé selon le profil et la durée de mission",
          "Possibilité de conversion en CDI avec l'expert freelance",
        ],
        exemples: [
          "PME de 50 salariés : expert 3 jours/semaine pour la gestion courante",
          "Startup en croissance : expert temps plein pendant 6 mois pour structurer",
          "Société saisonnière : renfort 2 mois/an pour les clôtures et déclarations",
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
      case "Talents freelance":
        setIsTalentsDetailsOpen(true)
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
          className="font-bold text-strataidge-turquoise hover:underline focus:outline-none focus:ring-0"
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
      <section
        id="offers"
        className="py-24 sm:py-32 bg-strataidge-blue-night overflow-hidden"
        aria-labelledby="offers-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-semibold text-strataidge-turquoise">Offres</span>
            <AnimatedTitle className="text-white" id="offers-heading">
              Des offres pensées pour chaque étape de votre développement
            </AnimatedTitle>
            <FadeIn>
              <p className="mt-4 text-lg text-gray-300">
                Packs comptables et fiscaux, solutions personnalisées et accompagnement stratégique : notre service
                digitalisé offre un conseil sur-mesure pour chaque entreprise.
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
              <Link
                href="#contact"
                className="group relative h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-strataidge-turquoise/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] focus:outline-none focus:ring-0 inline-flex items-center justify-center px-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center">
                  <span className="text-white font-semibold text-xl tracking-wide">Prendre rendez-vous</span>
                  <ArrowRight className="ml-4 h-6 w-6 text-strataidge-turquoise transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-strataidge-coral/20 to-strataidge-turquoise/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dialogs pour les offres - continuent ici... */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-left">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Full Digital - Gestion 100% en ligne
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  La solution idéale pour une gestion comptable et fiscale entièrement digitalisée.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4 text-left">
                <div>
                  <h4 className="font-bold text-lg text-white mb-3">Inclus dans l'offre :</h4>
                  <ul className="space-y-2">
                    {plans[0].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-3">Non inclus :</h4>
                  <ul className="space-y-2">
                    {plans[0].notIncluded?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={() => setIsDetailsOpen(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                >
                  Fermer
                </Button>
                <Button
                  onClick={openIaConfigurator}
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold focus:outline-none focus:ring-0"
                >
                  Configurer mon offre
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Les autres dialogs continuent de la même manière... */}
      {/* Dialog Standard */}
      <Dialog open={isStandardDetailsOpen} onOpenChange={setIsStandardDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-left">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Standard - L'équilibre parfait
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  Entre autonomie digitale et accompagnement humain personnalisé.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4 text-left">
                <div>
                  <h4 className="font-bold text-lg text-white mb-3">Inclus dans l'offre :</h4>
                  <ul className="space-y-2">
                    {plans[1].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-3">Non inclus :</h4>
                  <ul className="space-y-2">
                    {plans[1].notIncluded?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <InternalisationSection />
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={() => setIsStandardDetailsOpen(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                >
                  Fermer
                </Button>
                <Button
                  onClick={() => {
                    setIsStandardDetailsOpen(false)
                    handleSelectPlan("Standard")
                  }}
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold focus:outline-none focus:ring-0"
                >
                  Demander cette offre
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog Strataidge */}
      <Dialog open={isStrataidgeDetailsOpen} onOpenChange={setIsStrataidgeDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-left">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Strataidge - Transformation stratégique
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  Une immersion complète pour transformer votre business.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4 text-left">
                <div>
                  <h4 className="font-bold text-lg text-white mb-3">Inclus dans l'offre :</h4>
                  <ul className="space-y-2">
                    {plans[2].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-3">À noter :</h4>
                  <ul className="space-y-2">
                    {plans[2].notIncluded?.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={() => setIsStrataidgeDetailsOpen(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                >
                  Fermer
                </Button>
                <Button
                  onClick={() => {
                    setIsStrataidgeDetailsOpen(false)
                    handleSelectPlan("Strataidge")
                  }}
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold focus:outline-none focus:ring-0"
                >
                  Demander cette offre
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog À la carte */}
      <Dialog open={isCarteDetailsOpen} onOpenChange={setIsCarteDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-2xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-left">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  À la carte - Services ponctuels
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  Des services spécialisés pour vos besoins spécifiques.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4 text-left">
                <div>
                  <h4 className="font-bold text-lg text-white mb-3">Services disponibles :</h4>
                  <ul className="space-y-2">
                    {plans[3].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-strataidge-turquoise mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-strataidge-turquoise/10 p-4 rounded-lg border border-strataidge-turquoise/20">
                  <h4 className="font-bold text-white mb-2">Tarification flexible</h4>
                  <p className="text-gray-300 text-sm">
                    Chaque service est facturé selon sa complexité et le temps nécessaire. Nous établissons un devis
                    personnalisé après analyse de votre demande.
                  </p>
                </div>
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={() => setIsCarteDetailsOpen(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                >
                  Fermer
                </Button>
                <Button
                  onClick={openCarteRequest}
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold focus:outline-none focus:ring-0"
                >
                  Demander un devis
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog Création d'entreprise */}
      <Dialog open={isCreationDetailsOpen} onOpenChange={setIsCreationDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-4xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-left">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Création d'entreprise - Accompagnement complet
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  De l'idée au lancement : un accompagnement clé en main.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4 text-left">
                {creationPlan?.fullDetails && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(creationPlan.fullDetails.included).map(([key, section]) => (
                      <div key={key} className="bg-white/5 p-4 rounded-lg">
                        <h4 className="font-bold text-white mb-3 flex items-center">
                          <section.icon className="h-5 w-5 text-strataidge-turquoise mr-2" />
                          {section.title}
                        </h4>
                        <ul className="space-y-1">
                          {section.items.map((item, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-start">
                              <span className="text-strataidge-turquoise mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={() => setIsCreationDetailsOpen(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                >
                  Fermer
                </Button>
                <Button
                  onClick={openCreationRequest}
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold focus:outline-none focus:ring-0"
                >
                  Demander un devis
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog Transmission & Acquisition */}
      <Dialog open={isTransmissionDetailsOpen} onOpenChange={setIsTransmissionDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-4xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-left">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Transmission & Acquisition
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  Accompagnement stratégique pour vendre, transmettre ou acquérir une entreprise.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4 text-left">
                {transmissionPlan?.fullDetails && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(transmissionPlan.fullDetails.included).map(([key, section]) => (
                      <div key={key} className="bg-white/5 p-4 rounded-lg">
                        <h4 className="font-bold text-white mb-3 flex items-center">
                          <section.icon className="h-5 w-5 text-strataidge-turquoise mr-2" />
                          {section.title}
                        </h4>
                        <ul className="space-y-1">
                          {section.items.map((item, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-start">
                              <span className="text-strataidge-turquoise mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={() => setIsTransmissionDetailsOpen(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                >
                  Fermer
                </Button>
                <Button
                  onClick={openTransmissionRequest}
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold focus:outline-none focus:ring-0"
                >
                  Demander un devis
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog Talents freelance */}
      <Dialog open={isTalentsDetailsOpen} onOpenChange={setIsTalentsDetailsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-4xl">
          <div className="relative bg-strataidge-blue-night/80 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-left">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-strataidge-turquoise">
                  Talents freelance
                </DialogTitle>
                <DialogDescription className="text-gray-400 pt-2">
                  Des experts qualifiés pour renforcer votre équipe selon vos besoins.
                </DialogDescription>
              </DialogHeader>
              <div className="flex-1 py-4 space-y-6 overflow-y-auto pr-4 text-left">
                {plans.find((p) => p.name === "Talents freelance")?.fullDetails && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(plans.find((p) => p.name === "Talents freelance").fullDetails.included).map(
                      ([key, section]) => (
                        <div key={key} className="bg-white/5 p-4 rounded-lg">
                          <h4 className="font-bold text-white mb-3 flex items-center">
                            <section.icon className="h-5 w-5 text-strataidge-turquoise mr-2" />
                            {section.title}
                          </h4>
                          <ul className="space-y-1">
                            {section.items.map((item, index) => (
                              <li key={index} className="text-sm text-gray-300 flex items-start">
                                <span className="text-strataidge-turquoise mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
              <DialogFooter className="mt-4 flex-shrink-0">
                <Button
                  onClick={() => setIsTalentsDetailsOpen(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent focus:outline-none focus:ring-0"
                >
                  Fermer
                </Button>
                <Button
                  onClick={openTalentsRequest}
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold focus:outline-none focus:ring-0"
                >
                  Demander un devis
                </Button>
              </DialogFooter>
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
    <section id="contact" className="py-24 sm:py-32 bg-strataidge-blue-night" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 md:p-12 shadow-lg border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 id="contact-heading" className="text-3xl font-bold text-white sm:text-4xl">
                Contactez-nous et faisons évoluer votre vision financière
              </h2>
              <p className="mt-4 text-gray-300">
                Prendre rendez-vous fiduciaire pour un expert-comptable digital et conseil fiscal indépendant. Contact
                entreprise avec accompagnement humain personnalisé.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#115;&#116;&#114;&#97;&#116;&#97;&#105;&#100;&#103;&#101;&#45;&#102;&#105;&#100;&#117;&#99;&#105;&#97;&#105;&#114;&#101;&#46;&#99;&#111;&#109;"
                  className="flex items-center gap-3 text-gray-300 hover:text-strataidge-turquoise transition-colors justify-center lg:justify-start"
                  aria-label="Envoyer un email à Strataidge Fiduciaire"
                >
                  <Mail className="h-5 w-5 text-strataidge-turquoise" aria-hidden="true" />
                  <span>contact@strataidge-fiduciaire.com</span>
                </a>
                <a
                  href="tel:+32499470298"
                  className="flex items-center gap-3 text-gray-300 hover:text-strataidge-turquoise transition-colors justify-center lg:justify-start"
                  aria-label="Appeler Strataidge Fiduciaire"
                >
                  <Phone className="h-5 w-5 text-strataidge-turquoise" aria-hidden="true" />
                  <span>+32 499 47 02 98</span>
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Votre nom
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  required
                  autoComplete="name"
                  className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise text-white"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Votre email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  required
                  autoComplete="email"
                  className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise text-white"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Votre message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Votre message"
                  rows={4}
                  required
                  className="bg-white/5 border-white/10 placeholder:text-gray-400 focus:border-strataidge-turquoise focus:ring-strataidge-turquoise text-white"
                />
              </div>

              <FileUpload
                onFileSelect={setSelectedFile}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                placeholder="Joindre un document (facultatif)"
                required={false}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-strataidge-turquoise/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-0"
                aria-describedby={formMessage ? "form-message" : undefined}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center justify-center h-full px-6">
                  {isSubmitting ? (
                    <>
                      <Loader className="h-5 w-5 animate-spin text-strataidge-turquoise mr-3" aria-hidden="true" />
                      <span className="text-white font-semibold text-lg tracking-wide">Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white font-semibold text-lg tracking-wide">Envoyer le message</span>
                      <Send
                        className="ml-3 h-5 w-5 text-strataidge-turquoise transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-strataidge-coral/20 to-strataidge-turquoise/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              {formMessage && (
                <p
                  id="form-message"
                  className={`text-center text-sm ${formError ? "text-strataidge-coral" : "text-strataidge-turquoise"}`}
                  role={formError ? "alert" : "status"}
                  aria-live="polite"
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
    <footer className="bg-strataidge-blue-night border-t border-white/10" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 w-fit" aria-label="Retour à l'accueil">
              <Image src="/logo.png" alt="" width={40} height={40} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white text-left">Strataidge</span>
                <span className="text-[10px] text-strataidge-turquoise font-medium tracking-widest my-[-4px]">
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
            <nav className="mt-4" aria-label="Navigation du pied de page">
              <ul className="space-y-2 columns-2">
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
            </nav>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-semibold text-white tracking-wider">SUIVEZ-NOUS</h3>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/strataidge"
                aria-label="Suivez-nous sur LinkedIn"
                className="text-gray-400 hover:text-strataidge-turquoise transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/strataidge"
                aria-label="Suivez-nous sur Instagram"
                className="text-gray-400 hover:text-strataidge-turquoise transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left text-sm text-gray-400 flex flex-col sm:flex-row items-center gap-2">
              <span>&copy; {new Date().getFullYear()} Strataidge Fiduciaire & Conseils. Tous droits réservés.</span>
              <span className="hidden sm:inline">•</span>
              <CookiePolicyLink />
            </div>
            <a
              href="https://www.itaa.be/fr/accueil/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Visiter le site de l'ITAA - Institute for Tax Advisors & Accountants"
            >
              <Image
                src="/itaa-logo-new.png"
                alt="Logo ITAA - Institute for Tax Advisors & Accountants"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="text-right">
                <p className="text-xs text-gray-300 font-medium">Entreprise agréée ITAA</p>
                <p className="text-xs text-gray-400">N° 11.813.687</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
