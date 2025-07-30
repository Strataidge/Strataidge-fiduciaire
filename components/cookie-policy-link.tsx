"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Shield, Cookie, Eye, UserCheck, FileText, Mail } from "lucide-react"

export function CookiePolicyLink() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-400 hover:text-strataidge-turquoise transition-colors text-sm underline focus:outline-none focus:ring-0"
      >
        Politique des cookies
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-transparent data-[state=open]:animate-modal-in border-0 p-0 w-[95vw] rounded-2xl sm:max-w-4xl">
          <div className="relative bg-strataidge-blue-night/90 backdrop-blur-2xl text-white rounded-2xl ring-1 ring-inset ring-white/10">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-strataidge-turquoise/30 to-strataidge-coral/30 opacity-50 blur-lg -z-10" />
            <div className="relative p-6 sm:p-8 flex flex-col max-h-[90vh]">
              <DialogHeader className="flex-shrink-0 text-left">
                <DialogTitle className="text-2xl font-bold text-strataidge-turquoise flex items-center gap-3">
                  <Cookie className="h-6 w-6" />
                  Politique des cookies
                </DialogTitle>
              </DialogHeader>

              <div className="flex-1 py-6 space-y-6 overflow-y-auto pr-2 text-left">
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Cette politique des cookies explique comment Strataidge Fiduciaire & Conseils utilise les cookies et
                    technologies similaires sur notre site web.
                  </p>
                  <p className="text-sm text-gray-400">
                    Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Cookie className="h-5 w-5 text-strataidge-turquoise" />
                      Qu'est-ce qu'un cookie ?
                    </h3>
                    <p className="text-gray-300">
                      Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web.
                      Les cookies nous permettent de reconnaître votre navigateur et de capturer et mémoriser certaines
                      informations.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Eye className="h-5 w-5 text-strataidge-turquoise" />
                      Comment nous utilisons les cookies
                    </h3>
                    <p className="text-gray-300">Nous utilisons les cookies pour plusieurs raisons :</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>Assurer le bon fonctionnement de notre site web</li>
                      <li>Améliorer votre expérience utilisateur</li>
                      <li>Analyser l'utilisation de notre site</li>
                      <li>Personnaliser le contenu et les publicités</li>
                      <li>Mémoriser vos préférences</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <FileText className="h-5 w-5 text-strataidge-turquoise" />
                      Types de cookies que nous utilisons
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-strataidge-turquoise mb-2">1. Cookies nécessaires</h4>
                        <p className="text-sm text-gray-300 mb-2">
                          Ces cookies sont essentiels au fonctionnement de notre site web et ne peuvent pas être
                          désactivés.
                        </p>
                        <p className="text-xs text-gray-400">
                          Exemples : cookies de session, authentification, sécurité, préférences de langue
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-strataidge-turquoise mb-2">2. Cookies d'analyse</h4>
                        <p className="text-sm text-gray-300 mb-2">
                          Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site web.
                        </p>
                        <p className="text-xs text-gray-400">
                          Exemples : Google Analytics, statistiques de visite, pages les plus consultées
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-strataidge-turquoise mb-2">3. Cookies marketing</h4>
                        <p className="text-sm text-gray-300 mb-2">
                          Ces cookies sont utilisés pour vous proposer des publicités pertinentes sur notre site et
                          d'autres sites web.
                        </p>
                        <p className="text-xs text-gray-400">
                          Exemples : publicités ciblées, remarketing, pixels de suivi des réseaux sociaux
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg">
                        <h4 className="font-semibold text-strataidge-turquoise mb-2">4. Cookies fonctionnels</h4>
                        <p className="text-sm text-gray-300 mb-2">
                          Ces cookies permettent d'améliorer les fonctionnalités et la personnalisation du site web.
                        </p>
                        <p className="text-xs text-gray-400">
                          Exemples : préférences utilisateur, chat en ligne, widgets des réseaux sociaux
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-strataidge-turquoise" />
                      Vos droits et choix
                    </h3>
                    <p className="text-gray-300">Vous avez le contrôle sur les cookies que nous utilisons :</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>Vous pouvez accepter ou refuser les cookies non essentiels</li>
                      <li>Vous pouvez modifier vos préférences à tout moment</li>
                      <li>Vous pouvez supprimer les cookies existants via votre navigateur</li>
                      <li>Vous pouvez configurer votre navigateur pour bloquer les cookies</li>
                    </ul>
                    <p className="text-sm text-gray-400">
                      Note : La désactivation de certains cookies peut affecter le fonctionnement de notre site web.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Shield className="h-5 w-5 text-strataidge-turquoise" />
                      Cookies tiers
                    </h3>
                    <p className="text-gray-300">
                      Nous utilisons également des services tiers qui peuvent placer leurs propres cookies sur votre
                      appareil :
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>
                        <strong>Google Analytics</strong> : pour analyser le trafic du site
                      </li>
                      <li>
                        <strong>Réseaux sociaux</strong> : pour les boutons de partage et widgets
                      </li>
                      <li>
                        <strong>Services de chat</strong> : pour l'assistance client en ligne
                      </li>
                    </ul>
                    <p className="text-sm text-gray-400">
                      Ces services tiers ont leurs propres politiques de confidentialité et de cookies.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Mail className="h-5 w-5 text-strataidge-turquoise" />
                      Contact
                    </h3>
                    <p className="text-gray-300">
                      Si vous avez des questions concernant notre utilisation des cookies, vous pouvez nous contacter :
                    </p>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-sm text-gray-300">
                        <strong>Strataidge Fiduciaire & Conseils</strong>
                        <br />
                        Email :{" "}
                        <a
                          href="mailto:contact@strataidge-fiduciaire.com"
                          className="text-strataidge-turquoise hover:underline"
                        >
                          contact@strataidge-fiduciaire.com
                        </a>
                        <br />
                        Téléphone :{" "}
                        <a href="tel:+32499470298" className="text-strataidge-turquoise hover:underline">
                          +32 499 47 02 98
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white">Modifications de cette politique</h3>
                    <p className="text-gray-300">
                      Nous pouvons mettre à jour cette politique des cookies de temps à autre. Nous vous encourageons à
                      consulter régulièrement cette page pour rester informé de nos pratiques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 pt-4 border-t border-white/10">
                <Button
                  onClick={() => setIsOpen(false)}
                  className="bg-strataidge-turquoise hover:bg-strataidge-turquoise/90 text-strataidge-blue-night font-semibold focus:outline-none focus:ring-0"
                >
                  Fermer
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
