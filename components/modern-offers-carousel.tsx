"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

function ModernOfferCard({ plan, onPlanSelect }: { plan: any; onPlanSelect: (planName: string) => void }) {
  const getButtonText = () => {
    const detailedPlans = ["Full Digital", "Standard", "Strataidge", "À la carte"]
    if (detailedPlans.includes(plan.name)) {
      return "Découvrir l'offre"
    }
    return "Demander un devis"
  }

  const configurablePlans = ["Full Digital", "Standard", "Strataidge"]
  const isConfigurable = configurablePlans.includes(plan.name)

  return (
    <div className="relative w-full h-full rounded-3xl p-px bg-gradient-to-b from-strataidge-turquoise/50 to-strataidge-blue-night/50 shadow-2xl shadow-black/40 group transition-all duration-300 hover:shadow-3xl hover:shadow-black/60">
      <div className="relative bg-[#0A192F]/80 backdrop-blur-xl w-full h-full rounded-[23px] p-8 flex flex-col group-hover:bg-[#0A192F]/90 transition-all duration-300">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white group-hover:text-strataidge-turquoise transition-colors duration-300">
            {plan.name}
          </h3>
          <p className="mt-2 text-sm text-gray-400 min-h-[40px] group-hover:text-gray-300 transition-colors duration-300">
            {plan.description}
          </p>

          <div className="my-8">
            {plan.amount ? (
              <>
                <span className="text-sm text-strataidge-turquoise">{plan.price}</span>
                <p className="text-5xl font-extrabold text-white">
                  {plan.amount}
                  <span className="text-lg font-medium text-gray-400">/mois</span>
                </p>
              </>
            ) : (
              <p className="text-3xl font-bold text-white">{plan.price}</p>
            )}
          </div>

          <ul className="space-y-3 text-sm">
            {(plan.features || []).slice(0, 4).map((feature: string) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-strataidge-turquoise mt-px flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <Button
            onClick={() => onPlanSelect(plan.name)}
            className="w-full font-bold py-3 text-base bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night transition-all duration-300 rounded-lg group-hover:shadow-lg group-hover:shadow-strataidge-turquoise/30 group-hover:scale-105"
          >
            {getButtonText()}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          {isConfigurable && (
            <p className="text-xs text-center mt-3 text-strataidge-turquoise/80 flex items-center justify-center gap-1.5 group-hover:text-strataidge-turquoise transition-colors duration-300">
              <Wrench className="h-3 w-3" />
              Devis instantané après configuration
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export function ModernOffersCarousel({
  plans,
  onPlanSelect,
}: {
  plans: any[]
  onPlanSelect: (planName: string) => void
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="w-full">
      <div
        className="flex gap-8 overflow-x-auto pb-8 horizontal-scrollbar px-[5vw] scroll-px-[5vw]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className="flex-shrink-0 w-[85vw] max-w-sm sm:w-[380px]"
            style={{ scrollSnapAlign: "start" }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <ModernOfferCard plan={plan} onPlanSelect={onPlanSelect} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
