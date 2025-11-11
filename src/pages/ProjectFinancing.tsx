import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Briefcase,
  FileText,
  Building2,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

// Validation schemas
const step1Schema = z.object({
  projectType: z.string().min(1, "Type de projet requis"),
  projectName: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
  projectDescription: z.string().min(50, "Description d'au moins 50 caractères requise"),
  projectSector: z.string().min(1, "Secteur d'activité requis"),
  projectLocation: z.string().min(1, "Localisation requise"),
});

const step2Schema = z.object({
  fundingAmount: z.string().min(1, "Montant requis"),
  fundingPurpose: z.string().min(1, "Utilisation des fonds requise"),
  expectedRevenue: z.string().min(1, "Chiffre d'affaires prévisionnel requis"),
  projectDuration: z.string().min(1, "Durée du projet requise"),
  breakEvenDate: z.string().min(1, "Date de rentabilité requise"),
  ownContribution: z.string().min(1, "Apport personnel requis"),
});

const step3Schema = z.object({
  companyName: z.string().min(2, "Nom de l'entreprise requis"),
  companyStatus: z.string().min(1, "Statut juridique requis"),
  siret: z.string().regex(/^\d{14}$/, "SIRET doit contenir 14 chiffres").optional().or(z.literal("")),
  creationDate: z.string().min(1, "Date de création requise"),
  employeeCount: z.string().min(1, "Nombre d'employés requis"),
  annualRevenue: z.string().min(1, "Chiffre d'affaires requis"),
  founderFirstName: z.string().min(2, "Prénom requis"),
  founderLastName: z.string().min(2, "Nom requis"),
  founderEmail: z.string().email("Email invalide"),
  founderPhone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, "Numéro de téléphone invalide"),
});

const step4Schema = z.object({
  businessPlan: z.string().min(1, "Vous devez confirmer avoir un business plan"),
  financialProjections: z.string().min(1, "Vous devez confirmer avoir des prévisions financières"),
  marketStudy: z.string().min(1, "Vous devez confirmer avoir une étude de marché"),
  additionalInfo: z.string().optional(),
});

const ProjectFinancing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Step 1
    projectType: "",
    projectName: "",
    projectDescription: "",
    projectSector: "",
    projectLocation: "",
    // Step 2
    fundingAmount: "",
    fundingPurpose: "",
    expectedRevenue: "",
    projectDuration: "",
    breakEvenDate: "",
    ownContribution: "",
    // Step 3
    companyName: "",
    companyStatus: "",
    siret: "",
    creationDate: "",
    employeeCount: "",
    annualRevenue: "",
    founderFirstName: "",
    founderLastName: "",
    founderEmail: "",
    founderPhone: "",
    // Step 4
    businessPlan: "",
    financialProjections: "",
    marketStudy: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number) => {
    try {
      if (step === 1) {
        step1Schema.parse({
          projectType: formData.projectType,
          projectName: formData.projectName,
          projectDescription: formData.projectDescription,
          projectSector: formData.projectSector,
          projectLocation: formData.projectLocation,
        });
      } else if (step === 2) {
        step2Schema.parse({
          fundingAmount: formData.fundingAmount,
          fundingPurpose: formData.fundingPurpose,
          expectedRevenue: formData.expectedRevenue,
          projectDuration: formData.projectDuration,
          breakEvenDate: formData.breakEvenDate,
          ownContribution: formData.ownContribution,
        });
      } else if (step === 3) {
        step3Schema.parse({
          companyName: formData.companyName,
          companyStatus: formData.companyStatus,
          siret: formData.siret,
          creationDate: formData.creationDate,
          employeeCount: formData.employeeCount,
          annualRevenue: formData.annualRevenue,
          founderFirstName: formData.founderFirstName,
          founderLastName: formData.founderLastName,
          founderEmail: formData.founderEmail,
          founderPhone: formData.founderPhone,
        });
      } else if (step === 4) {
        step4Schema.parse({
          businessPlan: formData.businessPlan,
          financialProjections: formData.financialProjections,
          marketStudy: formData.marketStudy,
          additionalInfo: formData.additionalInfo,
        });
      }
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs avant de continuer.",
        variant: "destructive",
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    if (validateStep(4)) {
      sessionStorage.setItem("projectFinancingData", JSON.stringify(formData));
      toast({
        title: "Demande envoyée !",
        description: "Votre demande de financement a été transmise avec succès.",
      });
      navigate("/apply/confirmation");
    } else {
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs avant de soumettre.",
        variant: "destructive",
      });
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  const stepIcons = [
    { icon: Briefcase, title: "Votre Projet" },
    { icon: FileText, title: "Financement" },
    { icon: Building2, title: "Entreprise" },
    { icon: CheckCircle, title: "Documents" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Demande de financement de projet
          </h1>
          <p className="text-lg text-muted-foreground">
            Complétez ce formulaire pour soumettre votre projet de financement. Notre équipe analysera votre demande sous 48h.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {stepIcons.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;
              const StepIcon = step.icon;

              return (
                <div key={stepNumber} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isCompleted
                        ? "bg-success text-success-foreground"
                        : isActive
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <StepIcon className="h-6 w-6" />
                  </div>
                  <span
                    className={`text-xs mt-2 text-center ${
                      isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Form Steps */}
        <Card className="p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informations sur votre projet
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="projectType">Type de projet *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => updateFormData("projectType", value)}
                  >
                    <SelectTrigger className={errors.projectType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez le type de projet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Création d'entreprise (Startup)</SelectItem>
                      <SelectItem value="development">Développement d'activité</SelectItem>
                      <SelectItem value="acquisition">Acquisition d'entreprise</SelectItem>
                      <SelectItem value="real-estate">Projet immobilier commercial</SelectItem>
                      <SelectItem value="innovation">Innovation technologique</SelectItem>
                      <SelectItem value="expansion">Expansion internationale</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectType && (
                    <p className="text-sm text-destructive mt-1">{errors.projectType}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectName">Nom du projet *</Label>
                  <Input
                    id="projectName"
                    value={formData.projectName}
                    onChange={(e) => updateFormData("projectName", e.target.value)}
                    placeholder="Ex: Plateforme de e-commerce innovante"
                    className={errors.projectName ? "border-destructive" : ""}
                  />
                  {errors.projectName && (
                    <p className="text-sm text-destructive mt-1">{errors.projectName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectDescription">Description détaillée du projet *</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => updateFormData("projectDescription", e.target.value)}
                    placeholder="Décrivez votre projet, ses objectifs, son innovation, et sa proposition de valeur..."
                    rows={6}
                    className={errors.projectDescription ? "border-destructive" : ""}
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Minimum 50 caractères ({formData.projectDescription.length}/50)
                  </p>
                  {errors.projectDescription && (
                    <p className="text-sm text-destructive mt-1">{errors.projectDescription}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectSector">Secteur d'activité *</Label>
                  <Select
                    value={formData.projectSector}
                    onValueChange={(value) => updateFormData("projectSector", value)}
                  >
                    <SelectTrigger className={errors.projectSector ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez votre secteur" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technologies & Digital</SelectItem>
                      <SelectItem value="retail">Commerce & Distribution</SelectItem>
                      <SelectItem value="services">Services aux entreprises</SelectItem>
                      <SelectItem value="industry">Industrie & Manufacturing</SelectItem>
                      <SelectItem value="health">Santé & Biotechnologie</SelectItem>
                      <SelectItem value="food">Agroalimentaire & Restauration</SelectItem>
                      <SelectItem value="real-estate">Immobilier</SelectItem>
                      <SelectItem value="energy">Énergie & Environnement</SelectItem>
                      <SelectItem value="education">Éducation & Formation</SelectItem>
                      <SelectItem value="tourism">Tourisme & Hôtellerie</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectSector && (
                    <p className="text-sm text-destructive mt-1">{errors.projectSector}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectLocation">Localisation du projet *</Label>
                  <Input
                    id="projectLocation"
                    value={formData.projectLocation}
                    onChange={(e) => updateFormData("projectLocation", e.target.value)}
                    placeholder="Ville, région ou pays"
                    className={errors.projectLocation ? "border-destructive" : ""}
                  />
                  {errors.projectLocation && (
                    <p className="text-sm text-destructive mt-1">{errors.projectLocation}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Détails financiers du projet
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="fundingAmount">Montant du financement recherché *</Label>
                  <Input
                    id="fundingAmount"
                    type="number"
                    value={formData.fundingAmount}
                    onChange={(e) => updateFormData("fundingAmount", e.target.value)}
                    placeholder="Ex: 500000"
                    className={errors.fundingAmount ? "border-destructive" : ""}
                  />
                  <p className="text-sm text-muted-foreground mt-1">En euros (€)</p>
                  {errors.fundingAmount && (
                    <p className="text-sm text-destructive mt-1">{errors.fundingAmount}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="fundingPurpose">Utilisation des fonds *</Label>
                  <Textarea
                    id="fundingPurpose"
                    value={formData.fundingPurpose}
                    onChange={(e) => updateFormData("fundingPurpose", e.target.value)}
                    placeholder="Détaillez comment vous utiliserez les fonds (équipements, recrutement, marketing, R&D...)"
                    rows={4}
                    className={errors.fundingPurpose ? "border-destructive" : ""}
                  />
                  {errors.fundingPurpose && (
                    <p className="text-sm text-destructive mt-1">{errors.fundingPurpose}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="ownContribution">Apport personnel / Fonds propres *</Label>
                  <Input
                    id="ownContribution"
                    type="number"
                    value={formData.ownContribution}
                    onChange={(e) => updateFormData("ownContribution", e.target.value)}
                    placeholder="Ex: 100000"
                    className={errors.ownContribution ? "border-destructive" : ""}
                  />
                  <p className="text-sm text-muted-foreground mt-1">En euros (€)</p>
                  {errors.ownContribution && (
                    <p className="text-sm text-destructive mt-1">{errors.ownContribution}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="expectedRevenue">
                    Chiffre d'affaires prévisionnel (première année) *
                  </Label>
                  <Input
                    id="expectedRevenue"
                    type="number"
                    value={formData.expectedRevenue}
                    onChange={(e) => updateFormData("expectedRevenue", e.target.value)}
                    placeholder="Ex: 1000000"
                    className={errors.expectedRevenue ? "border-destructive" : ""}
                  />
                  <p className="text-sm text-muted-foreground mt-1">En euros (€)</p>
                  {errors.expectedRevenue && (
                    <p className="text-sm text-destructive mt-1">{errors.expectedRevenue}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="projectDuration">Durée de remboursement souhaitée *</Label>
                  <Select
                    value={formData.projectDuration}
                    onValueChange={(value) => updateFormData("projectDuration", value)}
                  >
                    <SelectTrigger className={errors.projectDuration ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez la durée" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12 mois</SelectItem>
                      <SelectItem value="24">24 mois (2 ans)</SelectItem>
                      <SelectItem value="36">36 mois (3 ans)</SelectItem>
                      <SelectItem value="48">48 mois (4 ans)</SelectItem>
                      <SelectItem value="60">60 mois (5 ans)</SelectItem>
                      <SelectItem value="84">84 mois (7 ans)</SelectItem>
                      <SelectItem value="120">120 mois (10 ans)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.projectDuration && (
                    <p className="text-sm text-destructive mt-1">{errors.projectDuration}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="breakEvenDate">
                    Date prévisionnelle de rentabilité (seuil de rentabilité) *
                  </Label>
                  <Input
                    id="breakEvenDate"
                    type="month"
                    value={formData.breakEvenDate}
                    onChange={(e) => updateFormData("breakEvenDate", e.target.value)}
                    className={errors.breakEvenDate ? "border-destructive" : ""}
                  />
                  {errors.breakEvenDate && (
                    <p className="text-sm text-destructive mt-1">{errors.breakEvenDate}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informations sur l'entreprise et le porteur de projet
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Nom de l'entreprise / Raison sociale *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => updateFormData("companyName", e.target.value)}
                      placeholder="Ex: Innovation Tech SAS"
                      className={errors.companyName ? "border-destructive" : ""}
                    />
                    {errors.companyName && (
                      <p className="text-sm text-destructive mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="companyStatus">Statut juridique *</Label>
                    <Select
                      value={formData.companyStatus}
                      onValueChange={(value) => updateFormData("companyStatus", value)}
                    >
                      <SelectTrigger className={errors.companyStatus ? "border-destructive" : ""}>
                        <SelectValue placeholder="Sélectionnez le statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sarl">SARL</SelectItem>
                        <SelectItem value="sas">SAS</SelectItem>
                        <SelectItem value="sa">SA</SelectItem>
                        <SelectItem value="sasu">SASU</SelectItem>
                        <SelectItem value="eurl">EURL</SelectItem>
                        <SelectItem value="ei">Entreprise Individuelle</SelectItem>
                        <SelectItem value="micro">Micro-entreprise</SelectItem>
                        <SelectItem value="sci">SCI</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.companyStatus && (
                      <p className="text-sm text-destructive mt-1">{errors.companyStatus}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="siret">Numéro SIRET (si disponible)</Label>
                    <Input
                      id="siret"
                      value={formData.siret}
                      onChange={(e) => updateFormData("siret", e.target.value)}
                      placeholder="14 chiffres"
                      maxLength={14}
                      className={errors.siret ? "border-destructive" : ""}
                    />
                    {errors.siret && (
                      <p className="text-sm text-destructive mt-1">{errors.siret}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="creationDate">Date de création / Immatriculation *</Label>
                    <Input
                      id="creationDate"
                      type="date"
                      value={formData.creationDate}
                      onChange={(e) => updateFormData("creationDate", e.target.value)}
                      className={errors.creationDate ? "border-destructive" : ""}
                    />
                    {errors.creationDate && (
                      <p className="text-sm text-destructive mt-1">{errors.creationDate}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="employeeCount">Nombre d'employés *</Label>
                    <Select
                      value={formData.employeeCount}
                      onValueChange={(value) => updateFormData("employeeCount", value)}
                    >
                      <SelectTrigger className={errors.employeeCount ? "border-destructive" : ""}>
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">0 (projet en création)</SelectItem>
                        <SelectItem value="1-5">1 à 5</SelectItem>
                        <SelectItem value="6-10">6 à 10</SelectItem>
                        <SelectItem value="11-50">11 à 50</SelectItem>
                        <SelectItem value="51-100">51 à 100</SelectItem>
                        <SelectItem value="100+">Plus de 100</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.employeeCount && (
                      <p className="text-sm text-destructive mt-1">{errors.employeeCount}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="annualRevenue">Chiffre d'affaires annuel actuel *</Label>
                    <Input
                      id="annualRevenue"
                      type="number"
                      value={formData.annualRevenue}
                      onChange={(e) => updateFormData("annualRevenue", e.target.value)}
                      placeholder="0 si projet en création"
                      className={errors.annualRevenue ? "border-destructive" : ""}
                    />
                    <p className="text-sm text-muted-foreground mt-1">En euros (€)</p>
                    {errors.annualRevenue && (
                      <p className="text-sm text-destructive mt-1">{errors.annualRevenue}</p>
                    )}
                  </div>
                </div>

                <div className="border-t border-border pt-6 mt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Coordonnées du porteur de projet
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="founderFirstName">Prénom *</Label>
                      <Input
                        id="founderFirstName"
                        value={formData.founderFirstName}
                        onChange={(e) => updateFormData("founderFirstName", e.target.value)}
                        className={errors.founderFirstName ? "border-destructive" : ""}
                      />
                      {errors.founderFirstName && (
                        <p className="text-sm text-destructive mt-1">{errors.founderFirstName}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="founderLastName">Nom *</Label>
                      <Input
                        id="founderLastName"
                        value={formData.founderLastName}
                        onChange={(e) => updateFormData("founderLastName", e.target.value)}
                        className={errors.founderLastName ? "border-destructive" : ""}
                      />
                      {errors.founderLastName && (
                        <p className="text-sm text-destructive mt-1">{errors.founderLastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="founderEmail">Email professionnel *</Label>
                      <Input
                        id="founderEmail"
                        type="email"
                        value={formData.founderEmail}
                        onChange={(e) => updateFormData("founderEmail", e.target.value)}
                        placeholder="prenom.nom@entreprise.com"
                        className={errors.founderEmail ? "border-destructive" : ""}
                      />
                      {errors.founderEmail && (
                        <p className="text-sm text-destructive mt-1">{errors.founderEmail}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="founderPhone">Téléphone *</Label>
                      <Input
                        id="founderPhone"
                        type="tel"
                        value={formData.founderPhone}
                        onChange={(e) => updateFormData("founderPhone", e.target.value)}
                        placeholder="06 12 34 56 78"
                        className={errors.founderPhone ? "border-destructive" : ""}
                      />
                      {errors.founderPhone && (
                        <p className="text-sm text-destructive mt-1">{errors.founderPhone}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Documents et informations complémentaires
                </h2>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Documents requis pour l'analyse de votre projet
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ces documents seront demandés ultérieurement si votre projet est présélectionné :
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Business plan détaillé (présentation, étude de marché, stratégie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Prévisions financières sur 3 à 5 ans (compte de résultat, bilan, trésorerie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Étude de marché et analyse concurrentielle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>CV du ou des porteurs de projet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Kbis de moins de 3 mois (si entreprise existante)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Derniers bilans comptables (si entreprise existante)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="businessPlan">
                    Disposez-vous d'un business plan ? *
                  </Label>
                  <Select
                    value={formData.businessPlan}
                    onValueChange={(value) => updateFormData("businessPlan", value)}
                  >
                    <SelectTrigger className={errors.businessPlan ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes-complete">Oui, complet et finalisé</SelectItem>
                      <SelectItem value="yes-draft">Oui, en cours de finalisation</SelectItem>
                      <SelectItem value="no-help">Non, j'aurais besoin d'aide</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.businessPlan && (
                    <p className="text-sm text-destructive mt-1">{errors.businessPlan}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="financialProjections">
                    Disposez-vous de prévisions financières ? *
                  </Label>
                  <Select
                    value={formData.financialProjections}
                    onValueChange={(value) => updateFormData("financialProjections", value)}
                  >
                    <SelectTrigger className={errors.financialProjections ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes-complete">Oui, complètes (3-5 ans)</SelectItem>
                      <SelectItem value="yes-partial">Oui, partielles (1-2 ans)</SelectItem>
                      <SelectItem value="no-help">Non, j'aurais besoin d'aide</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.financialProjections && (
                    <p className="text-sm text-destructive mt-1">{errors.financialProjections}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="marketStudy">
                    Avez-vous réalisé une étude de marché ? *
                  </Label>
                  <Select
                    value={formData.marketStudy}
                    onValueChange={(value) => updateFormData("marketStudy", value)}
                  >
                    <SelectTrigger className={errors.marketStudy ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes-complete">Oui, étude complète</SelectItem>
                      <SelectItem value="yes-basic">Oui, analyse de base</SelectItem>
                      <SelectItem value="no-help">Non, j'aurais besoin d'aide</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.marketStudy && (
                    <p className="text-sm text-destructive mt-1">{errors.marketStudy}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="additionalInfo">
                    Informations complémentaires (facultatif)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                    placeholder="Ajoutez toute information pertinente pour votre demande (partenariats en cours, brevets, subventions obtenues...)"
                    rows={5}
                  />
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Prochaines étapes
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-accent">1.</span>
                    <span>Analyse préliminaire de votre demande sous 48h</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-accent">2.</span>
                    <span>Entretien téléphonique avec un conseiller spécialisé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-accent">3.</span>
                    <span>Demande de documents complémentaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-accent">4.</span>
                    <span>Présentation de votre dossier au comité de financement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-accent">5.</span>
                    <span>Décision finale et proposition de financement</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={handleNext} variant="accent" className="gap-2">
                Suivant
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} variant="accent" className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Soumettre la demande
              </Button>
            )}
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Des questions ? Contactez notre équipe au <span className="font-semibold text-foreground">01 23 45 67 89</span>
            {" "}ou par email à{" "}
            <a href="mailto:projets@privatequity.fr" className="text-accent hover:underline">
              projets@privatequity.fr
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectFinancing;
