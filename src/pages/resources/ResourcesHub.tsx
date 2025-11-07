import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, HelpCircle, FileText } from "lucide-react";

const ResourcesHub = () => {
  const resources = [
    {
      icon: FileText,
      title: "Glossaire du crédit",
      description: "Découvrez la signification des termes courants du crédit et du prêt",
      href: "/resources/glossary",
      color: "text-accent",
    },
    {
      icon: BookOpen,
      title: "Guide du crédit",
      description: "Articles pédagogiques sur l'emprunt, les scores de crédit et la planification financière",
      href: "/resources/guide",
      color: "text-primary",
    },
    {
      icon: HelpCircle,
      title: "FAQ complète",
      description: "Réponses à plus de 50 questions courantes sur les prêts et nos services",
      href: "/resources/faq",
      color: "text-success",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ressources & Guides</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Tout ce dont vous avez besoin pour prendre des décisions d'emprunt éclairées
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-6 ${resource.color}`}>
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{resource.description}</p>
                  <Link to={resource.href}>
                    <Button variant="outline" className="w-full">
                      Explorer
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesHub;
