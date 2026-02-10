import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conditions Générales d'Utilisation (CGU)</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Fundia Invest
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8 mb-6">
            <div className="prose prose-lg max-w-none">

              <h2 className="text-2xl font-bold text-foreground mb-4">1. Objet</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Les présentes Conditions Générales d'Utilisation (ci-après les « CGU ») ont pour objet de définir les modalités d'accès et d'utilisation de la plateforme <strong>Fundia Invest</strong> (ci-après la « Plateforme »).
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Fundia Invest est une plateforme de <strong>mise en relation entre particuliers</strong>, destinée à faciliter la conclusion de prêts d'argent à titre strictement civil et non professionnel.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">2. Nature et rôle de Fundia Invest</h2>
              <p className="text-foreground leading-relaxed mb-3">
                Fundia Invest agit exclusivement en qualité de :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                <li>tiers technique de mise en relation,</li>
                <li>fournisseur d'outils de structuration contractuelle,</li>
                <li>facilitateur documentaire.</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-3">
                Fundia Invest <strong>n'est pas</strong> :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                <li>un établissement de crédit,</li>
                <li>un intermédiaire financier,</li>
                <li>un prestataire de services d'investissement,</li>
                <li>un prêteur, un emprunteur, un garant ou un assureur.</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-6">
                Fundia Invest n'est <strong>en aucun cas partie</strong> aux contrats conclus entre les utilisateurs de la Plateforme.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">3. Accès à la Plateforme et qualité des utilisateurs</h2>
              <p className="text-foreground leading-relaxed mb-3">
                La Plateforme est accessible à toute personne physique majeure, juridiquement capable, agissant à titre personnel.
              </p>
              <p className="text-foreground leading-relaxed mb-3">
                Chaque utilisateur déclare et garantit :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                <li>agir pour son propre compte,</li>
                <li>ne pas exercer une activité professionnelle de crédit,</li>
                <li>comprendre que les opérations réalisées relèvent du <strong>droit civil</strong>.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">4. Fonctionnement des opérations de prêt</h2>
              <p className="text-foreground leading-relaxed mb-3">
                Les opérations réalisées via la Plateforme constituent des <strong>prêts civils ponctuels</strong>, conclus directement entre utilisateurs, sous leur seule responsabilité.
              </p>
              <p className="text-foreground leading-relaxed mb-3">
                Chaque prêt :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                <li>est initié librement par les parties,</li>
                <li>fait l'objet d'un contrat distinct,</li>
                <li>est exécuté sans intervention financière de Fundia Invest.</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-6">
                Les fonds prêtés ne transitent <strong>en aucun cas</strong> par la Plateforme.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">5. Génération des documents contractuels</h2>
              <p className="text-foreground leading-relaxed mb-3">
                Fundia Invest met à disposition des utilisateurs des <strong>modèles de documents contractuels civils</strong>, générés automatiquement en fonction des informations renseignées par les parties.
              </p>
              <p className="text-foreground leading-relaxed mb-3">
                Ces documents peuvent notamment inclure :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                <li>un contrat de prêt civil,</li>
                <li>une reconnaissance de dette,</li>
                <li>un acte de caution ou de garantie,</li>
                <li>des annexes techniques.</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-3">
                Les utilisateurs reconnaissent que :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                <li>ces documents sont fournis à titre d'assistance,</li>
                <li>ils demeurent seuls responsables de leur contenu et de leur utilisation,</li>
                <li>ils peuvent les modifier ou solliciter l'avis d'un professionnel du droit.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">6. Garanties</h2>
              <p className="text-foreground leading-relaxed mb-3">
                Les garanties éventuelles sont :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                <li>librement exigées par les prêteurs,</li>
                <li>librement acceptées par les emprunteurs,</li>
                <li>formalisées dans des actes distincts ou annexés aux contrats de prêt.</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-6">
                Fundia Invest n'accorde <strong>aucune garantie</strong> et n'intervient pas dans leur mise en œuvre ou leur exécution.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">7. Responsabilité</h2>
              <p className="text-foreground leading-relaxed mb-3">
                Fundia Invest ne saurait être tenue responsable, notamment :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                <li>de la solvabilité des utilisateurs,</li>
                <li>de l'exécution ou de l'inexécution des contrats de prêt,</li>
                <li>des impayés ou retards de paiement,</li>
                <li>des litiges, différends ou procédures entre utilisateurs.</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-6">
                Chaque utilisateur agit sous sa seule et entière responsabilité.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">8. Obligations fiscales et légales</h2>
              <p className="text-foreground leading-relaxed mb-3">
                Les utilisateurs sont seuls responsables :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
                <li>des déclarations fiscales liées aux prêts conclus,</li>
                <li>du respect des obligations légales et réglementaires applicables,</li>
                <li>de la conformité de leurs opérations avec la législation en vigueur.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">9. Droit applicable</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Les présentes CGU sont soumises au <strong>droit français</strong>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">10. Acceptation des CGU</h2>
              <p className="text-foreground leading-relaxed">
                L'accès et l'utilisation de la Plateforme impliquent l'acceptation pleine et entière des présentes Conditions Générales d'Utilisation par l'utilisateur.
              </p>

            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
