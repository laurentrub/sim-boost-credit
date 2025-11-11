import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Mail, Phone, Home } from "lucide-react";

interface ApplicationData {
  name: string;
  email: string;
  loanType: string;
  amount: string;
  duration: string;
  submittedAt: string;
}

const ApplyConfirmation = () => {
  const navigate = useNavigate();
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);

  useEffect(() => {
    // Récupérer les données de la demande depuis sessionStorage
    const storedData = sessionStorage.getItem('applicationData');
    
    if (!storedData) {
      // Si aucune donnée n'est trouvée, rediriger vers la page de demande
      navigate('/apply');
      return;
    }

    try {
      const data = JSON.parse(storedData);
      setApplicationData(data);
      // Nettoyer les données après récupération
      sessionStorage.removeItem('applicationData');
    } catch (error) {
      console.error('Erreur lors du parsing des données:', error);
      navigate('/apply');
    }
  }, [navigate]);

  if (!applicationData) {
    return null;
  }

  const getLoanTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      personal: "Crédit Personnel",
      auto: "Crédit Auto",
      home: "Crédit Travaux",
      consolidation: "Regroupement de Crédits",
      business: "Crédit Professionnel",
    };
    return types[type] || type;
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/20 mb-6">
              <CheckCircle className="h-12 w-12 text-success" />
            </div>
            <h1 className="text-4xl font-bold text-primary-foreground mb-4">
              Demande Envoyée avec Succès !
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Merci {applicationData.name}, votre demande de crédit a bien été reçue.
            </p>
          </div>

          <Card className="p-8 mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Récapitulatif de votre demande</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Type de crédit</p>
                  <p className="font-semibold text-foreground">{getLoanTypeLabel(applicationData.loanType)}</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Montant demandé</p>
                  <p className="font-semibold text-foreground">{Number(applicationData.amount).toLocaleString('fr-FR')} €</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Durée</p>
                  <p className="font-semibold text-foreground">{applicationData.duration} mois</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Date de soumission</p>
                  <p className="font-semibold text-foreground">{formatDate(applicationData.submittedAt)}</p>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mt-6">
                <p className="text-sm text-foreground">
                  <strong>Numéro de référence :</strong> {applicationData.submittedAt.replace(/[-:T.Z]/g, '').substring(0, 12)}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Prochaines Étapes</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Vérification de votre demande</h3>
                  <p className="text-sm text-muted-foreground">
                    Notre équipe va examiner votre demande dans les prochaines 24 heures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Confirmation par e-mail</h3>
                  <p className="text-sm text-muted-foreground">
                    Vous recevrez un e-mail de confirmation à <strong>{applicationData.email}</strong> avec les détails de votre demande et les documents à fournir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Contact de notre équipe</h3>
                  <p className="text-sm text-muted-foreground">
                    Un conseiller vous contactera pour finaliser votre dossier et répondre à vos questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Décision finale</h3>
                  <p className="text-sm text-muted-foreground">
                    Après étude complète de votre dossier, vous recevrez une réponse définitive sous 2-5 jours ouvrables.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-muted/30">
            <h3 className="font-semibold text-foreground mb-4">Besoin d'aide ?</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a href="mailto:contact@privatequity.fr" className="text-sm font-medium text-foreground hover:text-accent">
                    contact@privatequity.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <a href="tel:+33123456789" className="text-sm font-medium text-foreground hover:text-accent">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild className="flex-1">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="flex-1">
              <Link to="/resources">
                En savoir plus
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplyConfirmation;