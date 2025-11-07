import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CreditSimulator from "@/components/credit/CreditSimulator";
import { Card } from "@/components/ui/card";
import { Briefcase, CheckCircle } from "lucide-react";

const BusinessLoan = () => {
  const benefits = [
    "Loans from €5,000 to €75,000",
    "Flexible terms: 12-84 months",
    "Fast approval for entrepreneurs",
    "Use for any business purpose",
    "Competitive rates for SMEs",
    "Preserve business cash flow",
  ];

  const useCases = [
    {
      title: "Working Capital",
      description: "Cover operating expenses, payroll, inventory, or seasonal cash flow gaps",
      typical: "€10,000-€50,000"
    },
    {
      title: "Equipment Purchase",
      description: "Buy machinery, vehicles, computers, or specialized tools",
      typical: "€15,000-€75,000"
    },
    {
      title: "Business Expansion",
      description: "Open new locations, hire staff, or enter new markets",
      typical: "€20,000-€75,000"
    },
    {
      title: "Marketing & Growth",
      description: "Fund advertising campaigns, website development, or sales initiatives",
      typical: "€5,000-€30,000"
    },
    {
      title: "Inventory Purchase",
      description: "Stock up on products, materials, or supplies",
      typical: "€10,000-€50,000"
    },
    {
      title: "Refinancing",
      description: "Consolidate business debts or refinance at better terms",
      typical: "€15,000-€75,000"
    },
  ];

  const faqs = [
    {
      q: "Who qualifies for a business loan?",
      a: "Sole proprietors, partnerships, LLCs, corporations, and self-employed professionals can apply. You'll need to have been in business for at least 6 months (preferably 12+ months), show consistent revenue, and provide business financial documentation. Personal credit score is also considered since these are often personally guaranteed."
    },
    {
      q: "What documents do I need to apply?",
      a: "You'll need business formation documents (registration, articles of incorporation), tax returns (business and personal for last 2 years), profit & loss statements, bank statements (3-6 months), a business plan or explanation of fund usage, and personal identification. Self-employed individuals should provide thorough income documentation."
    },
    {
      q: "Is this a secured or unsecured loan?",
      a: "Our business loans are typically unsecured, meaning you don't need to pledge specific business assets as collateral. However, you may need to provide a personal guarantee, meaning you're personally responsible for repayment if the business cannot pay."
    },
    {
      q: "How quickly can I get funding?",
      a: "Business loan approval typically takes 2-5 business days depending on the complexity of your application and how quickly you provide documentation. Once approved, funds are usually disbursed within 24-48 hours."
    },
    {
      q: "What if my business is brand new?",
      a: "Brand new businesses (under 6 months) have limited options with traditional lenders. Consider applying for a personal loan to fund your startup, using business crowdfunding, seeking angel investors, or waiting until you have 6-12 months of revenue history. Strong personal credit and a detailed business plan can help."
    },
    {
      q: "Can I use this loan to start a business?",
      a: "While our business loans are primarily for existing businesses, if you have a very strong business plan, significant industry experience, substantial personal investment, and excellent personal credit, we may consider startup funding on a case-by-case basis."
    },
    {
      q: "What interest rates can I expect?",
      a: "Rates typically range from 5% to 12% APR depending on your business revenue, time in business, personal credit score, and loan amount/term. Established businesses with strong financials and good personal credit receive the best rates."
    },
    {
      q: "How does business loan repayment work?",
      a: "Repayment is typically through fixed monthly payments that include both principal and interest. Payments are often automatically deducted from your business bank account. There are no prepayment penalties if you want to pay off the loan early."
    },
    {
      q: "Will this affect my personal credit?",
      a: "Yes, applying will result in a hard inquiry on your personal credit report since you're personally guaranteeing the loan. On-time payments can positively impact your personal credit, while missed payments will hurt it. Additionally, the loan may appear on your personal credit report."
    },
    {
      q: "Can I get a loan if my business has debt?",
      a: "Yes, existing business debt doesn't automatically disqualify you. We'll evaluate your debt-to-income ratio and ensure your business generates sufficient revenue to handle the additional payment. Many businesses use our loans specifically to consolidate and refinance existing higher-interest debt."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-10 w-10" />
                <h1 className="text-4xl md:text-5xl font-bold">Business Loans</h1>
              </div>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Flexible financing for entrepreneurs, SMEs, and growing businesses. Fund expansion, equipment, working capital, and more.
              </p>
            </div>
            <div>
              <CreditSimulator 
                minAmount={5000} 
                maxAmount={75000} 
                defaultAmount={25000} 
                minDuration={12}
                maxDuration={84}
                defaultDuration={48}
                interestRate={6.5} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Our Business Loans?</h2>
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Common Business Loan Uses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>
                <div className="text-xs text-accent font-semibold">Typical: {useCase.typical}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Complete Business Loan Guide</h2>
            
            <h3 className="text-2xl font-bold text-foreground">What is a Business Loan?</h3>
            <p className="text-foreground leading-relaxed">
              A business loan provides capital to help your company grow, manage cash flow, purchase assets, or handle unexpected expenses. At Privat Equity, we offer term loans ranging from €5,000 to €75,000 with repayment periods from 12 to 84 months, designed specifically for small and medium-sized enterprises (SMEs), entrepreneurs, and self-employed professionals.
            </p>
            <p className="text-foreground leading-relaxed">
              Unlike traditional bank business loans that can take weeks or months to process, our streamlined application focuses on your business's actual performance and potential rather than just paperwork. Interest rates typically range from 5-12% APR depending on your business strength, time in operation, and creditworthiness.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Benefits of Business Loans</h3>
            <ul className="space-y-3 text-foreground">
              <li><strong>Maintain Cash Flow:</strong> Keep working capital available for daily operations while funding major expenses</li>
              <li><strong>Preserve Equity:</strong> Avoid giving up ownership stakes in your business to investors</li>
              <li><strong>Build Business Credit:</strong> Establishing a positive payment history helps build your business credit profile</li>
              <li><strong>Tax Advantages:</strong> Interest payments on business loans are typically tax-deductible business expenses</li>
              <li><strong>Predictable Payments:</strong> Fixed monthly payments make budgeting and cash flow planning easier</li>
              <li><strong>Fast Access to Capital:</strong> Get funding much faster than traditional bank loans or raising equity</li>
              <li><strong>Flexible Use:</strong> Use funds for almost any legitimate business purpose without restrictions</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Types of Businesses We Finance</h3>
            <p className="text-foreground leading-relaxed">
              We work with a wide range of business types and structures:
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Sole Proprietorships:</strong> Individual business owners including freelancers and consultants</li>
              <li><strong>Partnerships:</strong> Businesses owned by two or more people</li>
              <li><strong>Limited Liability Companies (LLC/SARL):</strong> The most common small business structure</li>
              <li><strong>Corporations (SAS/SA):</strong> Larger structured businesses</li>
              <li><strong>Self-Employed Professionals:</strong> Doctors, lawyers, accountants, contractors, and other professionals</li>
              <li><strong>E-commerce Businesses:</strong> Online retailers and service providers</li>
              <li><strong>Brick-and-Mortar Retail:</strong> Physical stores and showrooms</li>
              <li><strong>Service Businesses:</strong> Consulting, maintenance, health, beauty, and personal services</li>
              <li><strong>Manufacturing:</strong> Small-scale production and fabrication businesses</li>
              <li><strong>Food Service:</strong> Restaurants, cafes, catering, food trucks</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Common Uses for Business Loans</h3>

            <h4 className="text-xl font-semibold text-foreground mt-6">Working Capital</h4>
            <p className="text-foreground leading-relaxed">
              Cover day-to-day operational expenses, manage seasonal fluctuations, pay suppliers, meet payroll during slow periods, or bridge the gap between receivables and payables. Working capital loans keep your business running smoothly during growth phases or temporary cash crunches.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Equipment and Asset Purchases</h4>
            <p className="text-foreground leading-relaxed">
              Buy machinery, vehicles, computers, furniture, specialized tools, or any equipment your business needs to operate or grow. Financing equipment preserves your cash reserves while allowing you to acquire assets that generate revenue or improve efficiency.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Business Expansion</h4>
            <p className="text-foreground leading-relaxed">
              Open additional locations, hire new employees, enter new markets, launch new product lines, or increase production capacity. Expansion requires capital, and strategic borrowing can accelerate growth while minimizing dilution of ownership.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Inventory and Stock</h4>
            <p className="text-foreground leading-relaxed">
              Purchase inventory in bulk to take advantage of discounts, stock up for busy seasons, or maintain adequate inventory levels to meet customer demand. Retail and e-commerce businesses especially benefit from inventory financing.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Marketing and Business Development</h4>
            <p className="text-foreground leading-relaxed">
              Fund advertising campaigns, develop professional websites, attend trade shows, hire sales staff, or implement CRM systems. Marketing investments often have excellent ROI but require upfront capital that loans can provide.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Debt Consolidation and Refinancing</h4>
            <p className="text-foreground leading-relaxed">
              Consolidate multiple business debts or high-interest merchant cash advances into one lower-rate loan. This simplifies finances, reduces total interest costs, and can significantly improve monthly cash flow.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Eligibility Requirements</h3>
            <p className="text-foreground leading-relaxed">
              To qualify for a business loan with Privat Equity, you should generally meet these criteria:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Business operational for at least 6-12 months (exceptions for strong startups)</li>
              <li>Minimum monthly revenue of €5,000-€10,000 depending on loan amount</li>
              <li>Personal credit score of 600+ (higher scores get better rates)</li>
              <li>No recent bankruptcies or major defaults</li>
              <li>Registered business with proper licensing and documentation</li>
              <li>Debt service coverage ratio showing ability to repay</li>
              <li>French residency or proper business registration in France</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Required Documentation</h3>
            <p className="text-foreground leading-relaxed">
              Prepare these documents to speed up your application:
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Business Documentation:</strong> Business registration, articles of incorporation, operating agreement, business licenses</li>
              <li><strong>Financial Statements:</strong> Last 2 years of business tax returns, profit & loss statements, balance sheets</li>
              <li><strong>Bank Statements:</strong> 3-6 months of business bank statements showing revenue and expenses</li>
              <li><strong>Personal Information:</strong> Owner's personal tax returns, personal identification, proof of address</li>
              <li><strong>Business Plan:</strong> Description of your business, how loan funds will be used, growth projections</li>
              <li><strong>Accounts Receivable/Payable:</strong> If applicable, aging reports showing money owed to and by your business</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Understanding Business Loan Terms</h3>

            <h4 className="text-xl font-semibold text-foreground mt-6">Interest Rates (APR)</h4>
            <p className="text-foreground leading-relaxed">
              Your rate depends on multiple factors: time in business (longer is better), annual revenue (higher is better), profit margins, personal credit score, loan amount and term, and your industry. Established profitable businesses with strong credit can secure rates as low as 5% APR, while newer or higher-risk businesses might see rates of 10-12% APR.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Loan Terms and Amortization</h4>
            <p className="text-foreground leading-relaxed">
              Shorter terms (12-36 months) have higher monthly payments but lower total interest costs. Longer terms (60-84 months) reduce monthly payments but increase total interest paid. Choose a term that balances affordable payments with minimizing interest costs.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Personal Guarantees</h4>
            <p className="text-foreground leading-relaxed">
              Most business loans under €75,000 require a personal guarantee from the business owner(s), meaning you're personally liable for repayment if the business cannot pay. This is standard for small business lending and reflects the lender's need for security.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">How to Improve Your Approval Chances</h3>
            <ul className="space-y-2 text-foreground">
              <li>Maintain clean personal and business credit - correct errors before applying</li>
              <li>Demonstrate consistent revenue growth or stable revenue patterns</li>
              <li>Reduce existing business debt to improve debt-to-income ratios</li>
              <li>Have a clear, realistic business plan explaining loan usage and ROI</li>
              <li>Keep detailed financial records showing profitability or path to profitability</li>
              <li>Build a relationship with the lender before needing urgent funding</li>
              <li>Consider a co-signer if your credit or business history is limited</li>
              <li>Start with a smaller loan amount to establish a track record</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Alternatives to Business Loans</h3>

            <h4 className="text-xl font-semibold text-foreground mt-6">Business Line of Credit</h4>
            <p className="text-foreground leading-relaxed">
              Similar to a credit card, you're approved for a maximum amount and only pay interest on what you actually use. Good for ongoing working capital needs rather than one-time purchases.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Equipment Financing</h4>
            <p className="text-foreground leading-relaxed">
              Secured loans where the equipment itself serves as collateral, often resulting in lower rates. The equipment must be the primary use of funds.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Invoice Factoring</h4>
            <p className="text-foreground leading-relaxed">
              Sell your outstanding invoices to a factoring company at a discount to get immediate cash. Expensive but useful for businesses with cash flow problems due to slow-paying customers.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Merchant Cash Advance</h4>
            <p className="text-foreground leading-relaxed">
              Receive a lump sum in exchange for a percentage of daily credit card sales. Very expensive (often 30-100% APR equivalent) and should only be used as a last resort.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Managing Your Business Loan</h3>
            <p className="text-foreground leading-relaxed">
              Once approved, proper loan management is crucial:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Set up automatic payments from your business bank account to never miss a payment</li>
              <li>Track how loan funds are being used against your business plan</li>
              <li>Monitor the ROI of your loan - is it generating the expected returns?</li>
              <li>Make extra payments when cash flow allows to reduce interest costs</li>
              <li>Maintain open communication with your lender if challenges arise</li>
              <li>Keep detailed records for tax purposes (interest is typically deductible)</li>
              <li>Consider refinancing if your business grows and you qualify for better terms</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Business Loan FAQ</h2>
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

export default BusinessLoan;
