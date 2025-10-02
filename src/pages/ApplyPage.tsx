import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const ApplyPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Loan Details
    loanType: "",
    amount: "",
    duration: "",
    purpose: "",
    
    // Step 2: Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    
    // Step 3: Financial Information
    employmentStatus: "",
    monthlyIncome: "",
    housingStatus: "",
    monthlyRent: "",
    
    // Step 4: Address
    address: "",
    city: "",
    postalCode: "",
    country: "France",
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    // Simple validation
    if (step === 1 && (!formData.loanType || !formData.amount || !formData.duration)) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (step === 2 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone)) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate approval
    const approved = Math.random() > 0.3; // 70% approval rate
    
    if (approved) {
      toast.success("Congratulations! Your loan application has been preliminarily approved.", {
        description: "Check your email for next steps and document upload instructions.",
        duration: 5000,
      });
      
      // In real app, would send email with unique link
      console.log("Application approved:", formData);
    } else {
      toast.error("Application Under Review", {
        description: "We need more information to process your application. Our team will contact you within 24 hours.",
        duration: 5000,
      });
    }
  };

  const steps = [
    { number: 1, title: "Loan Details" },
    { number: 2, title: "Personal Info" },
    { number: 3, title: "Financial Info" },
    { number: 4, title: "Address & Review" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Loan Application</h1>
            <p className="text-lg text-muted-foreground">
              Complete the form below to get your instant preliminary approval
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((s, index) => (
                <div key={s.number} className="flex-1">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s.number 
                        ? "bg-accent text-accent-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {step > s.number ? <CheckCircle className="h-6 w-6" /> : s.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-1 mx-2 ${
                        step > s.number ? "bg-accent" : "bg-muted"
                      }`} />
                    )}
                  </div>
                  <div className="text-xs mt-2 text-center">{s.title}</div>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Loan Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Loan Details</h2>
                  
                  <div>
                    <Label htmlFor="loanType">Type of Loan *</Label>
                    <Select value={formData.loanType} onValueChange={(value) => updateFormData("loanType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal Loan</SelectItem>
                        <SelectItem value="auto">Auto Loan</SelectItem>
                        <SelectItem value="home">Home Improvement</SelectItem>
                        <SelectItem value="consolidation">Debt Consolidation</SelectItem>
                        <SelectItem value="business">Business Loan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="amount">Loan Amount (€) *</Label>
                    <Input
                      id="amount"
                      type="number"
                      min="1000"
                      max="75000"
                      value={formData.amount}
                      onChange={(e) => updateFormData("amount", e.target.value)}
                      placeholder="10000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="duration">Duration (months) *</Label>
                    <Select value={formData.duration} onValueChange={(value) => updateFormData("duration", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12 months</SelectItem>
                        <SelectItem value="24">24 months</SelectItem>
                        <SelectItem value="36">36 months</SelectItem>
                        <SelectItem value="48">48 months</SelectItem>
                        <SelectItem value="60">60 months</SelectItem>
                        <SelectItem value="72">72 months</SelectItem>
                        <SelectItem value="84">84 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="purpose">Purpose of Loan</Label>
                    <Input
                      id="purpose"
                      value={formData.purpose}
                      onChange={(e) => updateFormData("purpose", e.target.value)}
                      placeholder="e.g., Wedding, Car purchase, Home renovation"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData("firstName", e.target.value)}
                        placeholder="Jean"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="jean.dupont@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div>
                    <Label htmlFor="birthDate">Date of Birth</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => updateFormData("birthDate", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Financial Information */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Financial Information</h2>
                  
                  <div>
                    <Label htmlFor="employmentStatus">Employment Status</Label>
                    <Select value={formData.employmentStatus} onValueChange={(value) => updateFormData("employmentStatus", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed (Full-time)</SelectItem>
                        <SelectItem value="employed-part">Employed (Part-time)</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="monthlyIncome">Monthly Net Income (€)</Label>
                    <Input
                      id="monthlyIncome"
                      type="number"
                      value={formData.monthlyIncome}
                      onChange={(e) => updateFormData("monthlyIncome", e.target.value)}
                      placeholder="2500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="housingStatus">Housing Status</Label>
                    <Select value={formData.housingStatus} onValueChange={(value) => updateFormData("housingStatus", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select housing status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="owner">Homeowner</SelectItem>
                        <SelectItem value="renter">Renter</SelectItem>
                        <SelectItem value="living-with-parents">Living with Parents</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.housingStatus === "renter" && (
                    <div>
                      <Label htmlFor="monthlyRent">Monthly Rent (€)</Label>
                      <Input
                        id="monthlyRent"
                        type="number"
                        value={formData.monthlyRent}
                        onChange={(e) => updateFormData("monthlyRent", e.target.value)}
                        placeholder="800"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Address & Review */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Address</h2>
                  
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                      placeholder="123 Rue de la Paix"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => updateFormData("city", e.target.value)}
                        placeholder="Paris"
                      />
                    </div>

                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => updateFormData("postalCode", e.target.value)}
                        placeholder="75001"
                      />
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 mt-8">
                    <h3 className="font-semibold mb-4">Application Summary</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-muted-foreground">Loan Type:</span> <span className="font-medium">{formData.loanType}</span></p>
                      <p><span className="text-muted-foreground">Amount:</span> <span className="font-medium">€{formData.amount}</span></p>
                      <p><span className="text-muted-foreground">Duration:</span> <span className="font-medium">{formData.duration} months</span></p>
                      <p><span className="text-muted-foreground">Name:</span> <span className="font-medium">{formData.firstName} {formData.lastName}</span></p>
                      <p><span className="text-muted-foreground">Email:</span> <span className="font-medium">{formData.email}</span></p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={handlePrevious}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                )}
                
                {step < 4 ? (
                  <Button type="button" variant="accent" onClick={handleNext} className="ml-auto">
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" variant="success" className="ml-auto">
                    Submit Application
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplyPage;
