import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CreditSimulator from "@/components/credit/CreditSimulator";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

const PersonalLoan = () => {
  const benefits = [
    "Aucune garantie requise",
    "Durées de remboursement flexibles (12-84 mois)",
    "Remboursement anticipé sans pénalités",
    "Fonds disponibles sous 48 heures",
    "Processus de demande 100% en ligne",
    "Frais transparents - aucun coût caché",
  ];

  const examples = [
    { amount: "5 000€", duration: "36 mois", monthly: "151€", apr: "4,2%", total: "5 436€" },
    { amount: "10 000€", duration: "48 mois", monthly: "221€", apr: "4,9%", total: "10 608€" },
    { amount: "20 000€", duration: "60 mois", monthly: "395€", apr: "5,5%", total: "23 700€" },
    { amount: "30 000€", duration: "72 mois", monthly: "504€", apr: "6,2%", total: "36 288€" },
  ];

  const faqs = [
    {
      q: "À quoi puis-je utiliser un prêt personnel ?",
      a: "Les prêts personnels sont polyvalents et peuvent être utilisés pour presque toutes les fins légales : mariages, vacances, frais médicaux, regroupement de dettes, rénovations, éducation ou dépenses imprévues."
    },
    {
      q: "Quel est le score de crédit minimum requis ?",
      a: "Bien que nous préférions les demandeurs avec un score de crédit supérieur à 650, nous évaluons chaque demande individuellement. Un score inférieur ne vous disqualifie pas automatiquement - nous considérons votre profil financier complet."
    },
    {
      q: "En combien de temps puis-je obtenir l'argent ?",
      a: "Une fois votre demande approuvée et tous les documents vérifiés, les fonds sont généralement transférés sur votre compte bancaire dans les 24 à 48 heures."
    },
    {
      q: "Y a-t-il des frais pour le remboursement anticipé ?",
      a: "Non ! Tous nos prêts personnels sont sans pénalités de remboursement anticipé. Vous pouvez rembourser votre prêt en avance et économiser sur les intérêts."
    },
    {
      q: "Quels documents dois-je fournir ?",
      a: "Vous aurez besoin d'une pièce d'identité valide, d'une preuve de revenus (3 derniers bulletins de salaire ou déclarations fiscales si travailleur indépendant), de relevés bancaires récents (3 derniers mois) et d'un justificatif de domicile actuel."
    },
    {
      q: "Puis-je postuler si je suis travailleur indépendant ?",
      a: "Oui ! Les travailleurs indépendants sont les bienvenus. Vous devrez fournir des documents supplémentaires tels que des déclarations fiscales et des relevés bancaires professionnels."
    },
    {
      q: "Qu'est-ce que le TAEG et comment affecte-t-il mon prêt ?",
      a: "Le TAEG (Taux Annuel Effectif Global) représente le coût annuel total de votre prêt, incluant les intérêts et les frais. Un TAEG plus bas signifie des coûts globaux plus faibles. Votre TAEG spécifique dépend de votre profil de crédit et des conditions du prêt."
    },
    {
      q: "Puis-je modifier ma date de paiement mensuel ?",
      a: "Oui, nous offrons de la flexibilité avec les dates de paiement. Contactez notre service client pour organiser un calendrier de paiement qui s'aligne avec votre cycle de revenus."
    },
    {
      q: "Que se passe-t-il si je manque un paiement ?",
      a: "Nous comprenons que des imprévus arrivent. Si vous avez du mal à effectuer un paiement, contactez-nous immédiatement. Nous pourrons peut-être organiser un plan de paiement ou un report temporaire. Les paiements en retard peuvent entraîner des frais et affecter votre score de crédit."
    },
    {
      q: "Mes informations personnelles sont-elles sécurisées ?",
      a: "Absolument. Nous utilisons un chiffrement SSL 256 bits de niveau bancaire et sommes entièrement conformes aux réglementations RGPD. Vos données ne sont jamais partagées avec des tiers sans votre consentement explicite."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with Simulator */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt personnel
                <br />
                <span className="text-accent-light">De 1 000€ à 75 000€</span>
              </h1>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Financez vos rêves avec nos prêts personnels flexibles. Que ce soit pour un mariage, des vacances, des frais médicaux ou tout projet personnel - nous avons ce qu'il vous faut.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm">Approbation en 5 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">100% sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm">À partir de 2,9% TAEG</span>
                </div>
              </div>
            </div>
            <div>
              <CreditSimulator minAmount={1000} maxAmount={75000} defaultAmount={10000} interestRate={4.9} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Pourquoi choisir notre prêt personnel ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Exemples de prêts</h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left">Montant</th>
                    <th className="px-6 py-4 text-left">Durée</th>
                    <th className="px-6 py-4 text-left">Mensualité</th>
                    <th className="px-6 py-4 text-left">TAEG</th>
                    <th className="px-6 py-4 text-left">Coût total</th>
                  </tr>
                </thead>
                <tbody>
                  {examples.map((example, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="px-6 py-4 font-semibold text-foreground">{example.amount}</td>
                      <td className="px-6 py-4 text-muted-foreground">{example.duration}</td>
                      <td className="px-6 py-4 text-success font-semibold">{example.monthly}/mois</td>
                      <td className="px-6 py-4 text-muted-foreground">{example.apr}</td>
                      <td className="px-6 py-4 text-foreground">{example.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            *Les exemples sont à titre indicatif. Vos taux et paiements réels peuvent varier en fonction de votre profil de crédit.
          </p>
        </div>
      </section>

      {/* Detailed Content for SEO */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Guide complet des prêts personnels</h2>
            
            <h3 className="text-2xl font-bold text-foreground mt-8">Qu'est-ce qu'un prêt personnel ?</h3>
            <p className="text-foreground leading-relaxed">
              Un prêt personnel est un prêt non garanti qui vous fournit une somme d'argent forfaitaire pour usage personnel. Contrairement aux hypothèques ou crédits auto liés à des achats spécifiques, les prêts personnels offrent une flexibilité maximale. Vous pouvez utiliser les fonds pour pratiquement toute fin légale - du regroupement de dettes au financement d'un mariage, en passant par les frais médicaux ou les rénovations domiciliaires.
            </p>
            <p className="text-foreground leading-relaxed">
              Chez Privat Equity, nos prêts personnels vont de 1 000€ à 75 000€ avec des durées de remboursement de 12 à 84 mois. Nous proposons des taux d'intérêt fixes compétitifs à partir de 2,9% TAEG, selon votre solvabilité et les conditions du prêt. Parce que les prêts personnels sont non garantis, vous n'avez pas besoin de fournir de garantie, ce qui les rend accessibles et simples.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Utilisations courantes des prêts personnels</h3>
            <ul className="space-y-2 text-foreground">
              <li><strong>Regroupement de dettes :</strong> Combinez plusieurs dettes à taux d'intérêt élevés en un seul paiement mensuel gérable</li>
              <li><strong>Rénovations domiciliaires :</strong> Rénovez votre cuisine, ajoutez une salle de bain ou améliorez votre propriété</li>
              <li><strong>Achats importants :</strong> Achetez des meubles, des appareils électroménagers ou de l'électronique sans épuiser vos économies</li>
              <li><strong>Frais médicaux :</strong> Couvrez les coûts de santé imprévus ou les procédures électives</li>
              <li><strong>Mariages :</strong> Financez le mariage de vos rêves sans stress financier</li>
              <li><strong>Éducation :</strong> Payez des cours, des certifications ou une formation continue</li>
              <li><strong>Vacances :</strong> Créez des expériences mémorables avec vos proches</li>
              <li><strong>Dépenses d'urgence :</strong> Gérez les coûts imprévus comme les réparations automobiles ou les réparations urgentes de la maison</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Comment se qualifier</h3>
            <p className="text-foreground leading-relaxed">
              Bien que les critères d'éligibilité varient selon le prêteur, chez Privat Equity nous exigeons généralement que les demandeurs :
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Aient au moins 18 ans</li>
              <li>Soient résidents français ou aient un permis de résidence valide</li>
              <li>Aient une source de revenus stable (employé, travailleur indépendant ou retraité avec pension)</li>
              <li>Aient un ratio d'endettement inférieur à 40%</li>
              <li>Fournissent la documentation nécessaire (pièce d'identité, preuve de revenus, relevés bancaires)</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Comprendre les taux d'intérêt et le TAEG</h3>
            <p className="text-foreground leading-relaxed">
              Le Taux Annuel Effectif Global (TAEG) est le coût annuel total de votre prêt exprimé en pourcentage. Il inclut à la fois le taux d'intérêt et tous les frais, vous donnant une image complète de ce que le prêt vous coûtera. Chez CreditPro, votre TAEG dépend de plusieurs facteurs :
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Score de crédit :</strong> Des scores plus élevés se qualifient généralement pour des taux plus bas</li>
              <li><strong>Montant du prêt :</strong> Les prêts plus importants peuvent avoir des structures de taux différentes</li>
              <li><strong>Durée du prêt :</strong> Les durées plus courtes ont souvent des taux plus bas mais des paiements mensuels plus élevés</li>
              <li><strong>Ratio d'endettement :</strong> Des ratios plus faibles démontrent une meilleure capacité de remboursement</li>
              <li><strong>Stabilité des revenus :</strong> Un historique d'emploi cohérent améliore votre taux</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Le processus de demande</h3>
            <ol className="space-y-3 list-decimal list-inside text-foreground">
              <li><strong>Vérifiez votre éligibilité :</strong> Utilisez notre simulateur pour estimer vos paiements mensuels</li>
              <li><strong>Rassemblez les documents :</strong> Préparez votre pièce d'identité, preuve de revenus et relevés bancaires</li>
              <li><strong>Soumettez la demande :</strong> Complétez notre formulaire en ligne sécurisé (prend environ 5 minutes)</li>
              <li><strong>Obtenez une décision instantanée :</strong> Recevez une approbation ou un refus préliminaire en quelques minutes</li>
              <li><strong>Vérifiez les informations :</strong> Notre équipe examine votre demande et vos documents</li>
              <li><strong>Signez l'accord :</strong> Examinez et signez électroniquement votre contrat de prêt</li>
              <li><strong>Recevez les fonds :</strong> L'argent est déposé directement sur votre compte bancaire</li>
            </ol>

            <h3 className="text-2xl font-bold text-foreground mt-8">Conseils pour obtenir le meilleur taux</h3>
            <ul className="space-y-2 text-foreground">
              <li>Vérifiez et améliorez votre score de crédit avant de postuler</li>
              <li>Comparez les offres de plusieurs prêteurs</li>
              <li>Envisagez une durée de prêt plus courte si vous pouvez vous permettre des paiements mensuels plus élevés</li>
              <li>N'empruntez que ce dont vous avez besoin - les prêts plus importants ont souvent des taux plus élevés</li>
              <li>Configurez des paiements automatiques pour ne jamais manquer une échéance</li>
              <li>Envisagez un co-emprunteur si votre crédit n'est pas idéal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">FAQ Prêt personnel</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalLoan;
