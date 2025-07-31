import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-strataidge-blue-night flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-strataidge-turquoise mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Page non trouvée</h2>
          <p className="text-gray-300 mb-8">Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
        </div>

        <div className="space-y-4">
          <Button
            asChild
            className="w-full bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-bold"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
          >
            <Link href="/#contact">Nous contacter</Link>
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>Si vous pensez qu'il s'agit d'une erreur, n'hésitez pas à nous contacter.</p>
        </div>
      </div>
    </div>
  )
}
