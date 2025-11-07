import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const glossaryTerms = [
  {
    term: "TAEG (Taux Annuel Effectif Global)",
    definition: "Le coût annuel d'un prêt exprimé en pourcentage, incluant les intérêts et les frais. Le TAEG fournit une image complète de ce qu'un prêt vous coûtera sur un an."
  },
  {
    term: "Amortissement",
    definition: "Le processus de remboursement d'une dette au fil du temps par des paiements réguliers. Chaque paiement couvre à la fois le capital et les intérêts, avec une proportion changeant au cours de la durée du prêt."
  },
  {
    term: "Garantie",
    definition: "Un actif (comme une maison ou une voiture) mis en gage par un emprunteur pour garantir un prêt. Si l'emprunteur fait défaut, le prêteur peut saisir la garantie."
  },
  {
    term: "Score de crédit",
    definition: "Une représentation numérique de votre solvabilité, généralement comprise entre 300 et 850. Des scores plus élevés indiquent un risque plus faible pour les prêteurs et peuvent entraîner de meilleures conditions de prêt."
  },
  {
    term: "Regroupement de crédits",
    definition: "Combiner plusieurs dettes en un seul prêt, souvent avec un taux d'intérêt plus bas ou des conditions plus favorables. Cela simplifie le remboursement et peut réduire les paiements mensuels."
  },
  {
    term: "Ratio d'endettement",
    definition: "Le pourcentage de votre revenu mensuel brut qui va vers les paiements de dettes. Les prêteurs utilisent ceci pour évaluer votre capacité à gérer les paiements mensuels."
  },
  {
    term: "Défaut de paiement",
    definition: "Le non-remboursement d'un prêt selon les conditions convenues. Faire défaut peut gravement endommager votre score de crédit et peut entraîner des poursuites judiciaires."
  },
  {
    term: "Paiement différé",
    definition: "Une caractéristique de prêt permettant aux emprunteurs de reporter les paiements pendant une période spécifiée. Les intérêts peuvent continuer à s'accumuler pendant le report."
  },
  {
    term: "Taux d'intérêt fixe",
    definition: "Un taux d'intérêt qui reste constant pendant toute la durée du prêt, fournissant des paiements mensuels prévisibles."
  },
  {
    term: "Période de grâce",
    definition: "Une période après la date d'échéance d'un paiement pendant laquelle vous pouvez effectuer un paiement sans encourir de frais de retard ou de pénalités."
  },
  {
    term: "Garant",
    definition: "Une personne qui accepte de rembourser un prêt si l'emprunteur principal ne le fait pas. Avoir un garant peut améliorer les chances d'approbation pour ceux qui ont un crédit limité."
  },
  {
    term: "Enquête approfondie",
    definition: "Une vérification de crédit effectuée lorsque vous demandez un crédit. Les enquêtes approfondies peuvent temporairement abaisser votre score de crédit et restent sur votre rapport pendant deux ans."
  },
  {
    term: "Taux d'intérêt",
    definition: "Le pourcentage facturé sur le montant principal d'un prêt. C'est le coût d'emprunter de l'argent, généralement exprimé comme un taux annuel."
  },
  {
    term: "Durée du prêt",
    definition: "La durée pendant laquelle vous devez rembourser un prêt, généralement exprimée en mois ou en années. Des durées plus longues signifient des paiements mensuels plus bas mais plus d'intérêts totaux payés."
  },
  {
    term: "Frais de dossier",
    definition: "Des frais facturés par les prêteurs pour traiter une nouvelle demande de prêt. C'est généralement un pourcentage du montant du prêt."
  },
  {
    term: "Pré-approbation",
    definition: "Une évaluation préliminaire par un prêteur indiquant combien vous pourriez être éligible à emprunter. Ce n'est pas une garantie d'approbation finale mais aide à la planification."
  },
  {
    term: "Capital",
    definition: "Le montant d'argent emprunté à l'origine, sans inclure les intérêts ou les frais. À mesure que vous effectuez des paiements, le capital diminue."
  },
  {
    term: "Refinancement",
    definition: "Remplacer un prêt existant par un nouveau, généralement pour obtenir de meilleures conditions telles qu'un taux d'intérêt plus bas ou une période de remboursement différente."
  },
  {
    term: "Prêt garanti",
    definition: "Un prêt adossé à une garantie. Si vous faites défaut, le prêteur peut prendre possession de la garantie. Les exemples incluent les hypothèques et les crédits auto."
  },
  {
    term: "Enquête souple",
    definition: "Une vérification de crédit qui n'affecte pas votre score de crédit. Celles-ci se produisent lorsque vous vérifiez votre propre crédit ou lorsque les prêteurs vous pré-approuvent pour des offres."
  },
  {
    term: "Prêt non garanti",
    definition: "Un prêt non adossé à une garantie. Les prêts personnels sont généralement non garantis et peuvent avoir des taux d'intérêt plus élevés en raison du risque accru pour le prêteur."
  },
  {
    term: "Taux d'intérêt variable",
    definition: "Un taux d'intérêt qui peut changer au fil du temps en fonction des conditions du marché. Les paiements mensuels peuvent fluctuer avec les changements de taux."
  },
  {
    term: "Capacité d'emprunt",
    definition: "Le montant maximum qu'un emprunteur peut raisonnablement se permettre d'emprunter en fonction de ses revenus, dépenses et obligations financières existantes."
  },
  {
    term: "Co-emprunteur",
    definition: "Une personne qui demande un prêt avec vous et partage la responsabilité égale du remboursement. Les deux scores de crédit et revenus sont considérés."
  },
  {
    term: "Assurance emprunteur",
    definition: "Une assurance qui couvre les paiements du prêt en cas de décès, d'invalidité ou de perte d'emploi. Souvent optionnelle mais peut fournir une tranquillité d'esprit."
  },
  {
    term: "Pénalité de remboursement anticipé",
    definition: "Des frais facturés par certains prêteurs si vous remboursez votre prêt avant la fin de la durée prévue. Chez CreditPro, nous n'avons pas de pénalités de remboursement anticipé."
  },
  {
    term: "Prêt renouvelable",
    definition: "Un type de crédit où vous pouvez emprunter, rembourser et emprunter à nouveau jusqu'à une limite approuvée. Les cartes de crédit sont des exemples de crédit renouvelable."
  },
  {
    term: "Tableau d'amortissement",
    definition: "Un calendrier détaillé montrant chaque paiement de prêt, décomposé entre capital et intérêts, sur toute la durée du prêt."
  },
  {
    term: "Taux annuel nominal",
    definition: "Le taux d'intérêt de base sans inclure les frais supplémentaires, contrairement au TAEG qui inclut tous les coûts."
  },
  {
    term: "Franchise",
    definition: "La période initiale d'un prêt pendant laquelle vous ne payez que les intérêts, sans rembourser le capital."
  },
  {
    term: "Restructuration de dette",
    definition: "Modification des conditions d'un prêt existant pour rendre les paiements plus gérables, comme prolonger la durée ou réduire le taux d'intérêt."
  },
  {
    term: "Crédit affecté",
    definition: "Un prêt lié à l'achat d'un bien ou service spécifique, comme un crédit auto ou un crédit mobilier."
  },
  {
    term: "Crédit non affecté",
    definition: "Un prêt qui n'est pas lié à un achat spécifique et peut être utilisé à votre discrétion, comme un prêt personnel."
  },
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Glossaire du crédit</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Comprenez les termes clés du crédit et du prêt pour prendre des décisions financières éclairées
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Input
              type="text"
              placeholder="Rechercher des termes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="space-y-4">
            {filteredTerms.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.term}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
              </Card>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucun terme trouvé correspondant à votre recherche.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Glossary;
