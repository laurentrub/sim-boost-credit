import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const glossaryTerms = [
  {
    term: "APR (Annual Percentage Rate)",
    definition: "The annual cost of a loan expressed as a percentage, including interest and fees. APR provides a complete picture of what a loan will cost you over one year."
  },
  {
    term: "Amortization",
    definition: "The process of paying off a debt over time through regular payments. Each payment covers both principal and interest, with the proportion shifting over the loan term."
  },
  {
    term: "Collateral",
    definition: "An asset (such as a house or car) pledged by a borrower to secure a loan. If the borrower defaults, the lender can seize the collateral."
  },
  {
    term: "Credit Score",
    definition: "A numerical representation of your creditworthiness, typically ranging from 300 to 850. Higher scores indicate lower risk to lenders and can result in better loan terms."
  },
  {
    term: "Debt Consolidation",
    definition: "Combining multiple debts into a single loan, often with a lower interest rate or more favorable terms. This simplifies repayment and can reduce monthly payments."
  },
  {
    term: "Debt-to-Income Ratio (DTI)",
    definition: "The percentage of your gross monthly income that goes toward debt payments. Lenders use this to assess your ability to manage monthly payments."
  },
  {
    term: "Default",
    definition: "Failure to repay a loan according to the agreed terms. Defaulting can seriously damage your credit score and may result in legal action."
  },
  {
    term: "Deferred Payment",
    definition: "A loan feature allowing borrowers to postpone payments for a specified period. Interest may continue to accrue during the deferment."
  },
  {
    term: "Fixed Interest Rate",
    definition: "An interest rate that remains constant throughout the loan term, providing predictable monthly payments."
  },
  {
    term: "Grace Period",
    definition: "A period after a payment due date during which you can make a payment without incurring late fees or penalties."
  },
  {
    term: "Guarantor",
    definition: "A person who agrees to repay a loan if the primary borrower fails to do so. Having a guarantor can improve approval chances for those with limited credit."
  },
  {
    term: "Hard Inquiry",
    definition: "A credit check performed when you apply for credit. Hard inquiries can temporarily lower your credit score and remain on your report for two years."
  },
  {
    term: "Interest Rate",
    definition: "The percentage charged on the principal amount of a loan. This is the cost of borrowing money, typically expressed as an annual rate."
  },
  {
    term: "Loan Term",
    definition: "The length of time you have to repay a loan, typically expressed in months or years. Longer terms mean lower monthly payments but more total interest paid."
  },
  {
    term: "Origination Fee",
    definition: "A fee charged by lenders to process a new loan application. This is usually a percentage of the loan amount."
  },
  {
    term: "Preapproval",
    definition: "A preliminary assessment by a lender indicating how much you may be eligible to borrow. This is not a guarantee of final approval but helps with planning."
  },
  {
    term: "Principal",
    definition: "The original amount of money borrowed, not including interest or fees. As you make payments, the principal decreases."
  },
  {
    term: "Refinancing",
    definition: "Replacing an existing loan with a new one, typically to secure better terms such as a lower interest rate or different repayment period."
  },
  {
    term: "Secured Loan",
    definition: "A loan backed by collateral. If you default, the lender can take possession of the collateral. Examples include mortgages and auto loans."
  },
  {
    term: "Soft Inquiry",
    definition: "A credit check that doesn't affect your credit score. These occur when you check your own credit or when lenders preapprove you for offers."
  },
  {
    term: "Unsecured Loan",
    definition: "A loan not backed by collateral. Personal loans are typically unsecured and may have higher interest rates due to increased lender risk."
  },
  {
    term: "Variable Interest Rate",
    definition: "An interest rate that can change over time based on market conditions. Monthly payments may fluctuate with rate changes."
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Credit Glossary</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Understand key credit and lending terms to make informed financial decisions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Input
              type="text"
              placeholder="Search terms..."
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
              <p className="text-muted-foreground">No terms found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Glossary;
