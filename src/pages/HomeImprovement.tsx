import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CreditSimulator from "@/components/credit/CreditSimulator";
import { Card } from "@/components/ui/card";
import { Home, CheckCircle } from "lucide-react";

const HomeImprovement = () => {
  const benefits = [
    "Finance from €3,000 to €75,000",
    "Rates starting from 3.5% APR",
    "Terms up to 15 years available",
    "No collateral required",
    "Use for any home improvement project",
    "Fast approval and funding",
  ];

  const projectExamples = [
    {
      project: "Kitchen Renovation",
      amount: "€15,000",
      duration: "60 months",
      monthly: "€276",
      description: "New cabinets, countertops, appliances, and flooring"
    },
    {
      project: "Bathroom Remodel",
      amount: "€10,000",
      duration: "48 months",
      monthly: "€227",
      description: "Updated fixtures, tiles, vanity, and shower"
    },
    {
      project: "Home Extension",
      amount: "€40,000",
      duration: "120 months",
      monthly: "€444",
      description: "Additional bedroom or living space"
    },
    {
      project: "Energy Efficiency",
      amount: "€8,000",
      duration: "60 months",
      monthly: "€147",
      description: "Solar panels, insulation, new windows"
    },
  ];

  const faqs = [
    {
      q: "What home improvement projects can I finance?",
      a: "Almost any project! Kitchen and bathroom renovations, room additions, landscaping, swimming pools, energy efficiency upgrades, new roofing, siding, windows, HVAC systems, basement finishing, and more. The only restriction is that funds must be used for property improvements."
    },
    {
      q: "Do I need to own my home to qualify?",
      a: "Yes, home improvement loans are available to homeowners. If you're a renter, consider our personal loan option instead. We don't place a lien on your property, but you must own or be in the process of purchasing the property you're improving."
    },
    {
      q: "How is this different from a home equity loan?",
      a: "Our home improvement loans are unsecured personal loans, meaning you don't use your home as collateral and there's no lien placed on your property. This makes the application faster and simpler. Home equity loans typically offer lower rates but require property appraisal and longer approval times."
    },
    {
      q: "Can I get financing before I have contractor quotes?",
      a: "Yes! Get pre-approved first to know your budget, then obtain contractor quotes. This approach gives you negotiating power with contractors since you'll have guaranteed financing. You can always borrow less than your approved amount."
    },
    {
      q: "Do you pay the contractor directly?",
      a: "No, funds are deposited into your bank account, and you pay contractors yourself. This gives you control over payments and allows you to negotiate terms with contractors. We recommend paying contractors in milestones as work is completed."
    },
    {
      q: "What if my project costs more than expected?",
      a: "Cost overruns are common in renovations. If approved, you might consider borrowing slightly more than initial estimates to create a contingency fund (typically 10-20% extra). If you've already taken out a loan, you can apply for additional financing, though we recommend completing your first loan project first."
    },
    {
      q: "Are there tax benefits to home improvement loans?",
      a: "Interest on home improvement loans typically isn't tax-deductible unless you secure it with your home. However, many improvements can increase your home's value and may qualify for energy tax credits if they improve energy efficiency. Consult a tax professional for specific advice."
    },
    {
      q: "How quickly can I get the funds?",
      a: "Once approved and all documents are verified, funds are typically transferred within 24-48 hours. This means you can often start your project within a week of applying."
    },
    {
      q: "Can I finance a project on a property I'm buying?",
      a: "Generally, we recommend completing your home purchase first, then applying for a renovation loan. Some exceptions may apply for immediate necessary repairs. Contact us to discuss your specific situation."
    },
    {
      q: "What's the minimum credit score needed?",
      a: "While we prefer scores above 650 for the best rates, we consider applications from various credit profiles. Higher loan amounts and longer terms typically require stronger credit. Your specific project and financial situation are also factors in approval."
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
                <Home className="h-10 w-10" />
                <h1 className="text-4xl md:text-5xl font-bold">Home Improvement Loans</h1>
              </div>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Transform your living space with our flexible home improvement financing. From kitchen renovations to energy upgrades, we fund your dream home projects.
              </p>
            </div>
            <div>
              <CreditSimulator 
                minAmount={3000} 
                maxAmount={75000} 
                defaultAmount={15000} 
                minDuration={12}
                maxDuration={180}
                defaultDuration={60}
                interestRate={4.5} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Our Home Improvement Loans?</h2>
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
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Popular Project Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectExamples.map((example, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{example.project}</h3>
                <p className="text-sm text-muted-foreground mb-4">{example.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Loan Amount</div>
                    <div className="text-lg font-bold text-accent">{example.amount}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Monthly Payment</div>
                    <div className="text-lg font-bold text-success">{example.monthly}/mo</div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {example.duration} term at ~4.5% APR
                </div>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            *Examples are illustrative. Your actual rate and payments depend on your credit profile and chosen terms.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Complete Guide to Home Improvement Financing</h2>
            
            <h3 className="text-2xl font-bold text-foreground">What is a Home Improvement Loan?</h3>
            <p className="text-foreground leading-relaxed">
              A home improvement loan is an unsecured personal loan specifically designed to finance renovations, repairs, and upgrades to your home. Unlike home equity loans or HELOCs (Home Equity Lines of Credit), these loans don't require you to use your home as collateral, making them faster and simpler to obtain.
            </p>
            <p className="text-foreground leading-relaxed">
              At CreditPro, our home improvement loans range from €3,000 to €75,000 with terms up to 15 years for larger projects. Interest rates start from 3.5% APR for qualified borrowers. Because these are unsecured loans, approval is based primarily on your creditworthiness and income rather than your home's equity.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Benefits of Home Improvement Loans</h3>
            <ul className="space-y-3 text-foreground">
              <li><strong>Increase Property Value:</strong> Strategic improvements can boost your home's market value significantly, often exceeding the cost of the loan</li>
              <li><strong>No Collateral Required:</strong> Your home isn't used as security, so there's no risk of foreclosure if you encounter financial difficulties</li>
              <li><strong>Fast Approval Process:</strong> Without property appraisals and title searches, approval is typically much faster than home equity products</li>
              <li><strong>Fixed Rates and Payments:</strong> Know exactly what you'll pay each month throughout the loan term</li>
              <li><strong>Improve Quality of Life:</strong> Create the living space you've always wanted without depleting savings</li>
              <li><strong>Energy Savings:</strong> Efficiency upgrades often pay for themselves through reduced utility bills</li>
              <li><strong>Flexible Use:</strong> Finance virtually any improvement project from minor updates to major renovations</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Popular Home Improvement Projects</h3>
            <p className="text-foreground leading-relaxed">
              Our customers finance a wide variety of projects. Here are the most popular:
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Kitchen Renovations (€10,000-€40,000)</h4>
            <p className="text-foreground leading-relaxed">
              Kitchen remodels consistently offer the best return on investment, often recouping 60-80% of costs in increased home value. Projects include new cabinets, countertops, appliances, flooring, lighting, and layout changes. A modern, functional kitchen is a major selling point and improves daily quality of life.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Bathroom Remodeling (€5,000-€25,000)</h4>
            <p className="text-foreground leading-relaxed">
              Bathroom updates range from simple cosmetic refreshes to complete gut renovations. Common improvements include new fixtures, tiling, vanities, lighting, ventilation, and accessibility features. Multiple bathroom homes command higher prices, making an additional bathroom a valuable investment.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Room Additions and Extensions (€20,000-€75,000)</h4>
            <p className="text-foreground leading-relaxed">
              Adding square footage increases both living space and property value. Popular additions include extra bedrooms, home offices, sunrooms, and expanded living areas. These projects typically offer strong returns but require proper planning, permits, and experienced contractors.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Energy Efficiency Upgrades (€5,000-€30,000)</h4>
            <p className="text-foreground leading-relaxed">
              Investments in solar panels, improved insulation, energy-efficient windows, updated HVAC systems, and smart home technology reduce utility bills while increasing comfort and property value. Many improvements qualify for government incentives and tax credits, effectively reducing your costs.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Outdoor Improvements (€5,000-€35,000)</h4>
            <p className="text-foreground leading-relaxed">
              Landscaping, decks, patios, fencing, and outdoor kitchens extend your living space and boost curb appeal. These projects are especially valuable in good weather climates and can significantly enhance your enjoyment of the property while appealing to future buyers.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Planning Your Home Improvement Project</h3>
            <p className="text-foreground leading-relaxed">
              Successful renovations require careful planning:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-foreground">
              <li><strong>Define Your Goals:</strong> Identify what you want to achieve - better functionality, increased value, improved aesthetics, or energy efficiency</li>
              <li><strong>Research Costs:</strong> Get at least three quotes from licensed contractors to understand realistic pricing</li>
              <li><strong>Add a Contingency:</strong> Budget an extra 10-20% for unexpected issues that commonly arise during renovations</li>
              <li><strong>Check Requirements:</strong> Verify if your project requires permits, HOA approval, or must meet specific building codes</li>
              <li><strong>Consider Timing:</strong> Plan projects during appropriate seasons and consider how long you'll be without use of the space</li>
              <li><strong>Get Pre-Approved:</strong> Secure financing before committing to contractors so you know exactly what you can afford</li>
            </ol>

            <h3 className="text-2xl font-bold text-foreground mt-8">Choosing the Right Contractors</h3>
            <p className="text-foreground leading-relaxed">
              Your contractor choice can make or break your project:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Verify licenses, insurance, and bonding for all contractors</li>
              <li>Check references and review previous work examples</li>
              <li>Get detailed written estimates that itemize labor and materials</li>
              <li>Never pay the full amount upfront - use a milestone payment structure</li>
              <li>Ensure all agreements, warranties, and timelines are in writing</li>
              <li>Verify permits are obtained and inspections are scheduled</li>
              <li>Maintain open communication throughout the project</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Maximizing Your Investment</h3>
            <p className="text-foreground leading-relaxed">
              To ensure your renovation adds maximum value:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Focus on improvements that appeal to the broadest range of buyers</li>
              <li>Avoid over-improving relative to your neighborhood</li>
              <li>Choose timeless designs over trendy styles that may quickly date</li>
              <li>Invest in quality materials that will last</li>
              <li>Consider universal design features that work for all ages and abilities</li>
              <li>Maintain detailed records of all improvements for future sale disclosures</li>
              <li>Keep receipts for potential tax benefits or insurance purposes</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Home Improvement Loan vs. Other Options</h3>
            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Home Equity Loan</h4>
              <p className="mb-2"><strong>Pros:</strong> Lower rates, larger amounts, potential tax deductibility</p>
              <p><strong>Cons:</strong> Uses home as collateral, slower approval, requires significant equity, closing costs</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">HELOC (Home Equity Line of Credit)</h4>
              <p className="mb-2"><strong>Pros:</strong> Flexible borrowing, pay interest only on what you use, potential tax benefits</p>
              <p><strong>Cons:</strong> Variable rates, uses home as collateral, requires equity, can tempt overspending</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Personal Loan (Our Option)</h4>
              <p className="mb-2"><strong>Pros:</strong> Fast approval, no collateral, fixed rates, simple application</p>
              <p><strong>Cons:</strong> Potentially higher rates than secured options, lower maximum amounts</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Credit Cards</h4>
              <p className="mb-2"><strong>Pros:</strong> Immediate access, potential rewards</p>
              <p><strong>Cons:</strong> High interest rates, can impact credit utilization, unsuitable for large projects</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Home Improvement Loan FAQ</h2>
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

export default HomeImprovement;
