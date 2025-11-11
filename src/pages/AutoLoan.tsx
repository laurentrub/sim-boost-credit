import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CreditSimulator from "@/components/credit/CreditSimulator";
import { Card } from "@/components/ui/card";
import { Car, CheckCircle } from "lucide-react";

const AutoLoan = () => {
  const autoLoanFaqs = [
    {
      q: "Quelle est la différence entre votre financement et celui d'un concessionnaire ?",
      a: "Obtenir une pré-approbation avec Privat Equity vous donne un taux et un montant garantis avant vos recherches, vous plaçant dans une position de négociation plus forte. Le financement par concessionnaire est déterminé après avoir choisi une voiture, et les taux peuvent être moins compétitifs. Vous pouvez également comparer notre offre avec le financement du concessionnaire."
    },
    {
      q: "Puis-je financer une voiture d'occasion auprès d'un vendeur particulier ?",
      a: "Oui ! Nous finançons les véhicules d'occasion provenant de concessionnaires et de vendeurs particuliers. Pour les ventes entre particuliers, nous aurons besoin du numéro VIN du véhicule, du kilométrage actuel et des détails sur l'état pour déterminer la valeur et finaliser votre prêt."
    },
    {
      q: "Quel âge maximum peut avoir une voiture d'occasion pour être financée ?",
      a: "Nous finançons généralement les véhicules d'occasion jusqu'à 8 ans au moment de l'achat. L'âge du véhicule, le kilométrage et l'état influencent tous l'approbation du prêt et la détermination du taux d'intérêt."
    },
    {
      q: "Ai-je besoin d'un acompte ?",
      a: "Aucun acompte n'est requis, bien qu'en verser un (généralement 10-20%) puisse réduire vos mensualités, diminuer les coûts d'intérêt et potentiellement vous qualifier pour de meilleurs taux. Un acompte signifie également que vous aurez immédiatement de l'équité dans le véhicule."
    },
    {
      q: "Quelle assurance dois-je avoir pour un véhicule financé ?",
      a: "Une assurance tous risques et collision est requise pour les véhicules financés afin de vous protéger ainsi que le prêteur. Vous devrez nommer Privat Equity comme créancier hypothécaire sur votre police d'assurance. Nous pouvons vous guider sur les exigences de couverture."
    },
    {
      q: "Puis-je reprendre mon véhicule actuel ?",
      a: "Absolument ! Si vous possédez votre véhicule actuel en totalité, la valeur de reprise peut servir d'acompte. Si vous devez encore de l'argent dessus, nous travaillerons avec vous pour intégrer le solde restant dans votre nouveau prêt ou rembourser la différence."
    },
    {
      q: "Que se passe-t-il si la voiture que je veux coûte moins que mon montant approuvé ?",
      a: "Parfait ! Vous emprunterez simplement le montant dont vous avez besoin pour l'achat du véhicule plus les coûts associés (taxes, immatriculation, assurance). Il n'y a aucune obligation d'emprunter le montant total approuvé."
    },
    {
      q: "Puis-je refinancer mon prêt auto plus tard ?",
      a: "Oui ! Si les taux d'intérêt baissent ou si votre crédit s'améliore considérablement, vous pouvez refinancer votre prêt auto pour obtenir de meilleures conditions. Nous recommandons d'attendre au moins 6 à 12 mois et de vous assurer que vous avez de l'équité dans le véhicule."
    },
    {
      q: "Que se passe-t-il si ma voiture est détruite ou volée ?",
      a: "Votre assurance tous risques devrait couvrir la valeur du véhicule. Tout paiement d'assurance sert d'abord à rembourser le solde de votre prêt. Si vous devez plus que le paiement (équité négative), vous êtes responsable de la différence - c'est pourquoi l'assurance écart est recommandée."
    },
    {
      q: "Puis-je rembourser mon prêt auto par anticipation ?",
      a: "Oui ! Il n'y a aucune pénalité de remboursement anticipé sur nos prêts auto. Rembourser votre prêt par anticipation vous fait économiser de l'argent sur les intérêts et vous libère des paiements mensuels plus tôt. Vous pouvez effectuer des paiements supplémentaires ou payer le solde complet à tout moment."
    },
  ];

  const benefits = [
    "Financement de véhicules neufs ou d'occasion",
    "Taux compétitifs à partir de 3,2% TAEG",
    "Jusqu'à 50 000 € de financement",
    "Durées flexibles : 12 à 72 mois",
    "Aucun acompte requis",
    "Processus d'approbation rapide",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Car className="h-10 w-10" />
                <h1 className="text-4xl md:text-5xl font-bold">Crédit Auto</h1>
              </div>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Conduisez la voiture de vos rêves dès aujourd'hui avec nos options de financement automobile flexibles. Neuf ou d'occasion, nous avons ce qu'il vous faut.
              </p>
            </div>
            <div>
              <CreditSimulator minAmount={5000} maxAmount={50000} defaultAmount={20000} minDuration={12} maxDuration={72} defaultDuration={60} interestRate={3.9} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Avantages du Crédit Auto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Guide Complet du Crédit Auto</h2>
            
            <h3 className="text-2xl font-bold text-foreground">Qu'est-ce qu'un Crédit Auto ?</h3>
            <p className="text-foreground leading-relaxed">
              Un crédit auto est un prêt garanti spécialement conçu pour vous aider à acheter un véhicule. La voiture elle-même sert de garantie, ce qui entraîne généralement des taux d'intérêt plus bas par rapport aux prêts personnels non garantis. Chez Privat Equity, nous offrons un financement automobile pour les véhicules neufs et d'occasion, avec des montants de prêt de 5 000 € à 50 000 € et des durées de remboursement flexibles de 12 à 72 mois.
            </p>
            <p className="text-foreground leading-relaxed">
              Nos taux compétitifs commencent à partir de 3,2% TAEG pour les emprunteurs qualifiés, et le processus de demande est entièrement en ligne. Contrairement au financement traditionnel par concessionnaire, obtenir une pré-approbation avec Privat Equity vous donne un pouvoir de négociation chez le concessionnaire, car vous saurez exactement combien vous pouvez dépenser avant de commencer vos recherches.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Avantages des Crédits Auto</h3>
            <p className="text-foreground leading-relaxed">
              Financer l'achat de votre véhicule offre plusieurs avantages par rapport au paiement en espèces :
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Préserver Votre Épargne :</strong> Gardez votre fonds d'urgence intact tout en obtenant la voiture dont vous avez besoin</li>
              <li><strong>Construire un Historique de Crédit :</strong> Effectuer des paiements à temps améliore votre score de crédit</li>
              <li><strong>Obtenir une Meilleure Voiture :</strong> Le financement vous permet de vous offrir un véhicule plus fiable et plus sûr</li>
              <li><strong>Mensualités Fixes :</strong> Budgétisez en toute confiance en sachant que votre paiement ne changera pas</li>
              <li><strong>Durées Flexibles :</strong> Choisissez une période de remboursement qui correspond à votre situation financière</li>
              <li><strong>Avantages Fiscaux :</strong> Si vous utilisez le véhicule pour les affaires, les intérêts du prêt peuvent être déductibles d'impôts</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Financement de Véhicules Neufs vs. d'Occasion</h3>
            <p className="text-foreground leading-relaxed">
              Nous finançons les véhicules neufs et d'occasion, chacun avec ses propres considérations :
            </p>
            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Prêts pour Véhicules Neufs</h4>
              <p className="mb-2">Les voitures neuves bénéficient généralement des taux d'intérêt les plus bas car elles ont une couverture de garantie complète et conservent mieux leur valeur initialement. Les taux commencent à partir de 3,2% TAEG.</p>
              <p className="text-sm text-muted-foreground">Exemple : 25 000 € sur 60 mois = 452 €/mois (3,5% TAEG, total : 27 120 €)</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Prêts pour Véhicules d'Occasion</h4>
              <p className="mb-2">Les voitures d'occasion ont généralement des taux légèrement plus élevés (généralement 3,9 à 5,5% TAEG) mais coûtent beaucoup moins cher au départ. Nous finançons les véhicules jusqu'à 8 ans.</p>
              <p className="text-sm text-muted-foreground">Exemple : 15 000 € sur 48 mois = 342 €/mois (4,5% TAEG, total : 16 416 €)</p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-8">Comment Se Qualifier pour un Crédit Auto</h3>
            <p className="text-foreground leading-relaxed">
              Pour bénéficier d'un crédit auto chez Privat Equity, vous devrez remplir ces exigences de base :
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Avoir au moins 18 ans</li>
              <li>Posséder un permis de conduire valide</li>
              <li>Être résident français ou posséder un permis de séjour valide</li>
              <li>Avoir un revenu vérifiable (salarié, indépendant ou retraité)</li>
              <li>Maintenir un ratio d'endettement inférieur à 40%</li>
              <li>Fournir les informations sur le véhicule (marque, modèle, année, numéro VIN pour les voitures d'occasion)</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Comprendre les Conditions du Crédit Auto</h3>
            <p className="text-foreground leading-relaxed">
              Plusieurs facteurs influencent les coûts et les conditions de votre crédit auto :
            </p>
            <ul className="space-y-3 text-foreground">
              <li><strong>Taux d'Intérêt (TAEG) :</strong> Votre taux dépend du score de crédit, de l'âge du véhicule, de la durée du prêt et du montant de l'acompte. Un meilleur crédit signifie des taux plus bas.</li>
              <li><strong>Durée du Prêt :</strong> Les durées plus courtes (24-36 mois) ont des paiements mensuels plus élevés mais des intérêts totaux plus bas. Les durées plus longues (60-72 mois) réduisent les coûts mensuels mais augmentent les intérêts totaux payés.</li>
              <li><strong>Acompte :</strong> Bien que non requis, verser 10 à 20% d'acompte réduit le montant de votre prêt, vous qualifie potentiellement pour de meilleurs taux et crée instantanément de l'équité.</li>
              <li><strong>Ratio Prêt/Valeur :</strong> Nous finançons généralement jusqu'à 120% de la valeur du véhicule pour couvrir les taxes, l'immatriculation et l'assurance.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Le Processus de Demande de Crédit Auto</h3>
            <ol className="space-y-3 list-decimal list-inside text-foreground">
              <li><strong>Obtenir une Pré-Approbation :</strong> Soumettez une demande en ligne rapide pour voir combien vous pouvez emprunter et à quel taux</li>
              <li><strong>Rechercher Votre Véhicule :</strong> Parcourez les concessionnaires ou les vendeurs particuliers en connaissant votre budget exact</li>
              <li><strong>Choisir Votre Voiture :</strong> Sélectionnez le véhicule qui répond à vos besoins et correspond à votre montant approuvé</li>
              <li><strong>Fournir les Détails du Véhicule :</strong> Soumettez les informations sur la voiture (VIN, kilométrage, état)</li>
              <li><strong>Compléter la Documentation :</strong> Téléchargez la preuve de revenu, le devis d'assurance et la documentation du véhicule</li>
              <li><strong>Signer Votre Contrat :</strong> Examinez et signez électroniquement votre contrat de prêt</li>
              <li><strong>Recevoir les Fonds :</strong> Nous envoyons le paiement directement au concessionnaire ou au vendeur, et vous obtenez les clés</li>
            </ol>

            <h3 className="text-2xl font-bold text-foreground mt-8">Conseils pour Obtenir le Meilleur Taux de Crédit Auto</h3>
            <ul className="space-y-2 text-foreground">
              <li>Vérifiez votre score de crédit et corrigez toute erreur avant de faire une demande</li>
              <li>Obtenez une pré-approbation avant de visiter les concessionnaires pour négocier en position de force</li>
              <li>Envisagez de verser un acompte d'au moins 10 à 20% du prix du véhicule</li>
              <li>Choisissez la durée de prêt la plus courte que vous pouvez vous permettre confortablement</li>
              <li>Comparez les offres de plusieurs prêteurs, y compris les banques, les coopératives de crédit et les plateformes en ligne</li>
              <li>Envisagez l'achat d'un véhicule d'occasion certifié pour une couverture de garantie à un prix inférieur</li>
              <li>Planifiez votre achat pendant les périodes d'incitation des fabricants pour des économies potentielles supplémentaires</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Quels Véhicules Pouvez-Vous Financer ?</h3>
            <p className="text-foreground leading-relaxed">
              Privat Equity offre un financement pour une large gamme de véhicules :
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Voitures Neuves :</strong> Fraîchement sorties du concessionnaire avec garantie complète du fabricant</li>
              <li><strong>Voitures d'Occasion :</strong> Véhicules jusqu'à 8 ans provenant de concessionnaires ou de vendeurs particuliers</li>
              <li><strong>Véhicules d'Occasion Certifiés :</strong> Véhicules inspectés et remis à neuf avec garanties prolongées</li>
              <li><strong>Motos :</strong> Motos neuves et d'occasion de plus de 125cc</li>
              <li><strong>Véhicules Électriques/Hybrides :</strong> Options écologiques avec incitations gouvernementales potentielles</li>
              <li><strong>Véhicules Utilitaires Légers :</strong> Camionnettes et camions pour usage professionnel</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Gérer Votre Crédit Auto</h3>
            <p className="text-foreground leading-relaxed">
              Une fois votre prêt approuvé et votre véhicule acheté, gérer votre prêt est simple :
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Configurez des paiements automatiques pour ne jamais manquer une échéance et protéger votre score de crédit</li>
              <li>Effectuez des paiements supplémentaires lorsque possible pour réduire les intérêts et rembourser votre prêt plus rapidement</li>
              <li>Maintenez une couverture d'assurance tous risques comme requis par votre contrat de prêt</li>
              <li>Gardez votre véhicule bien entretenu pour préserver sa valeur</li>
              <li>Envisagez de refinancer si les taux d'intérêt baissent ou si votre crédit s'améliore considérablement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Auto Loan FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">FAQ Crédit Auto</h2>
          <div className="space-y-6">
            {autoLoanFaqs.map((faq, index) => (
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

export default AutoLoan;
