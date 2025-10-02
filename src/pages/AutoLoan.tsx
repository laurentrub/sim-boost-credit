import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CreditSimulator from "@/components/credit/CreditSimulator";
import { Card } from "@/components/ui/card";
import { Car, CheckCircle } from "lucide-react";

const AutoLoan = () => {
  const benefits = [
    "Finance new or used vehicles",
    "Competitive rates from 3.2% APR",
    "Up to €50,000 financing",
    "Flexible terms: 12-72 months",
    "No down payment required",
    "Quick approval process",
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
                <h1 className="text-4xl md:text-5xl font-bold">Auto Loan</h1>
              </div>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Drive your dream car today with our flexible auto financing options. New or used, we've got you covered.
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
          <h2 className="text-3xl font-bold mb-8">Auto Loan Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold">Finance Your Vehicle with Confidence</h3>
            <p className="leading-relaxed">
              Whether you're buying a brand new car from a dealership or a quality used vehicle from a private seller, CreditPro's auto loans provide the financing you need with terms you can trust. Our streamlined process means you can get pre-approved before you shop, giving you the confidence to negotiate the best price.
            </p>
            <p className="leading-relaxed">
              We offer competitive interest rates starting from 3.2% APR for borrowers with excellent credit. Even if your credit history isn't perfect, we work with a wide range of credit profiles to find a solution that works for you. With loan amounts up to €50,000 and repayment terms from 12 to 72 months, you have the flexibility to structure a loan that fits your budget.
            </p>
            
            <h3 className="text-2xl font-bold mt-8">What You Can Finance</h3>
            <ul className="space-y-2">
              <li>New cars from authorized dealerships</li>
              <li>Certified pre-owned vehicles</li>
              <li>Used cars from dealerships or private sellers</li>
              <li>Motorcycles and scooters</li>
              <li>Electric and hybrid vehicles</li>
              <li>Light commercial vehicles</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8">How It Works</h3>
            <ol className="space-y-3">
              <li><strong>Get Pre-Approved:</strong> Apply online and receive a decision in minutes</li>
              <li><strong>Shop with Confidence:</strong> Know your budget before visiting dealerships</li>
              <li><strong>Choose Your Vehicle:</strong> Find the perfect car that fits your approved amount</li>
              <li><strong>Finalize Your Loan:</strong> Submit vehicle details and complete the paperwork</li>
              <li><strong>Drive Away:</strong> Funds are sent directly to the seller, and you're ready to go</li>
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutoLoan;
