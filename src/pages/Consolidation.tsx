import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CreditSimulator from "@/components/credit/CreditSimulator";
import { Card } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, TrendingDown } from "lucide-react";

const Consolidation = () => {
  const benefits = [
    "Combine multiple debts into one payment",
    "Potentially lower overall interest rate",
    "Simplify financial management",
    "Fixed monthly payment",
    "May improve credit score over time",
    "Reduce stress and financial anxiety",
  ];

  const whenToConsolidate = [
    {
      icon: CheckCircle,
      scenario: "Multiple High-Interest Debts",
      description: "You have several credit cards or loans with rates above 10-15% APR"
    },
    {
      icon: CheckCircle,
      scenario: "Struggling to Track Payments",
      description: "Managing multiple due dates is overwhelming and you've missed payments"
    },
    {
      icon: CheckCircle,
      scenario: "Good Credit Score",
      description: "Your credit score qualifies you for a rate lower than your current average"
    },
    {
      icon: CheckCircle,
      scenario: "Stable Income",
      description: "You have consistent income to maintain the consolidated payment"
    },
  ];

  const risks = [
    "May extend repayment period, increasing total interest paid",
    "Closing credit cards can temporarily lower credit score",
    "Doesn't address underlying spending habits",
    "Requires discipline to avoid accumulating new debt",
    "Some loans have origination fees that add to costs",
  ];

  const faqs = [
    {
      q: "How does debt consolidation work?",
      a: "Debt consolidation involves taking out a new loan to pay off multiple existing debts. Instead of juggling several payments with different rates and due dates, you make one monthly payment on the new loan, ideally at a lower interest rate than your average current rate."
    },
    {
      q: "Will consolidating debt hurt my credit score?",
      a: "Initially, you may see a small dip from the hard inquiry and from closing paid-off accounts (which reduces your available credit). However, if you make on-time payments and don't accumulate new debt, consolidation typically improves your credit score over time by lowering your credit utilization and demonstrating responsible payment behavior."
    },
    {
      q: "What types of debt can I consolidate?",
      a: "You can consolidate most unsecured debts including credit card balances, personal loans, medical bills, store cards, payday loans, and some student loans. You cannot consolidate secured debts like mortgages or auto loans through a personal consolidation loan."
    },
    {
      q: "Is debt consolidation the same as debt settlement?",
      a: "No, they're very different. Debt consolidation pays off your debts in full with a new loan. Debt settlement involves negotiating with creditors to pay less than you owe, which severely damages your credit and may have tax implications. Consolidation is much less damaging to your financial health."
    },
    {
      q: "How much can I save with debt consolidation?",
      a: "Savings depend on your current rates vs. the new rate. If you're consolidating credit cards at 18-25% APR to a personal loan at 6-8% APR, you could save thousands in interest. Use our calculator to see your potential savings based on your specific situation."
    },
    {
      q: "What's a better option: consolidation or balance transfer?",
      a: "Balance transfers (moving debt to a 0% APR card) can save more if you can pay off the balance during the promotional period (usually 12-18 months). However, consolidation loans are better for larger debts that need longer repayment periods, and they don't require excellent credit like most balance transfer cards."
    },
    {
      q: "Can I consolidate debt if I have bad credit?",
      a: "Yes, though your interest rate will be higher. If your credit score is below 650, you might not save as much on interest, but consolidation can still simplify your finances and help you avoid missed payments. Consider a co-signer to qualify for better rates."
    },
    {
      q: "Should I close my credit cards after paying them off?",
      a: "Generally no, especially for your oldest accounts. Keeping them open maintains your credit history length and credit utilization ratio. However, if you struggle with spending temptation, you might keep them open but stored away securely, or close newer accounts while keeping older ones."
    },
    {
      q: "What if I can't afford the consolidated loan payment?",
      a: "If the new payment is too high, you might need a longer loan term to reduce monthly costs, though this increases total interest paid. Alternatively, consider debt management plans through credit counseling agencies, or in severe cases, consult a bankruptcy attorney. Never ignore the problem - contact your lender immediately if you're struggling."
    },
    {
      q: "How soon will I see results from consolidation?",
      a: "You'll immediately benefit from simplified payments. Credit score improvements typically appear within 3-6 months as you establish a positive payment history. Financial stress relief is often immediate as you're no longer juggling multiple bills."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Debt Consolidation Loans
                <br />
                <span className="text-accent-light">Simplify Your Finances</span>
              </h1>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Combine multiple debts into one manageable monthly payment with a potentially lower interest rate. Take control of your finances today.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="h-5 w-5" />
                <span className="text-sm">Lower your monthly payments and total interest</span>
              </div>
            </div>
            <div>
              <CreditSimulator 
                minAmount={5000} 
                maxAmount={75000} 
                defaultAmount={15000} 
                minDuration={24}
                maxDuration={84}
                defaultDuration={60}
                interestRate={5.2} 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Benefits of Debt Consolidation</h2>
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
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">When Should You Consider Consolidation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whenToConsolidate.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon className="h-8 w-8 text-success flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.scenario}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Complete Guide to Debt Consolidation</h2>
            
            <h3 className="text-2xl font-bold text-foreground">What is Debt Consolidation?</h3>
            <p className="text-foreground leading-relaxed">
              Debt consolidation is a financial strategy that combines multiple debts into a single new loan with one monthly payment. Instead of managing several credit cards, personal loans, and other debts with different interest rates, payment dates, and lenders, you take out one loan to pay them all off, leaving you with just one creditor and one payment to track.
            </p>
            <p className="text-foreground leading-relaxed">
              At Privat Equity, our debt consolidation loans range from €5,000 to €75,000 with repayment terms from 24 to 84 months. Interest rates start from 4.2% APR for qualified borrowers, often significantly lower than credit card rates which typically range from 15-25% APR. The goal is to save money on interest while simplifying your financial life.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">How Debt Consolidation Works</h3>
            <p className="text-foreground leading-relaxed">
              The process is straightforward:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-foreground">
              <li><strong>Assess Your Debts:</strong> Calculate your total debt, current interest rates, and monthly payments</li>
              <li><strong>Apply for a Consolidation Loan:</strong> Get approved for a loan amount that covers all or most of your debts</li>
              <li><strong>Pay Off Existing Debts:</strong> Use the loan funds to pay off credit cards, personal loans, and other debts</li>
              <li><strong>Make One Monthly Payment:</strong> Repay your new consolidation loan with a single fixed monthly payment</li>
              <li><strong>Save Money and Rebuild Credit:</strong> Benefit from lower interest rates and simplified finances while establishing positive payment history</li>
            </ol>

            <h3 className="text-2xl font-bold text-foreground mt-8">Types of Debt You Can Consolidate</h3>
            <p className="text-foreground leading-relaxed">
              Consolidation loans work best for unsecured debts:
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Credit Card Balances:</strong> High-interest revolving debt, often 15-25% APR</li>
              <li><strong>Personal Loans:</strong> Existing loans with higher rates can be refinanced</li>
              <li><strong>Medical Bills:</strong> Outstanding healthcare expenses that need structured repayment</li>
              <li><strong>Store Credit Cards:</strong> Retail cards often have very high interest rates</li>
              <li><strong>Payday Loans:</strong> Extremely high-interest short-term loans that trap borrowers</li>
              <li><strong>Collection Accounts:</strong> Debts in collections (though this may require negotiation)</li>
              <li><strong>Private Student Loans:</strong> Some private education debt can be consolidated</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              <strong>Note:</strong> You typically cannot consolidate secured debts like mortgages or auto loans through a personal consolidation loan, as these are tied to specific collateral.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Benefits of Debt Consolidation</h3>

            <h4 className="text-xl font-semibold text-foreground mt-6">1. Lower Interest Costs</h4>
            <p className="text-foreground leading-relaxed">
              If you're paying 18-25% APR on credit cards and can consolidate at 5-8% APR, your savings can be substantial. For example, consolidating €20,000 in credit card debt at 20% APR into a 5-year personal loan at 6% APR saves approximately €12,000 in interest.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">2. Simplified Financial Management</h4>
            <p className="text-foreground leading-relaxed">
              Managing one payment instead of five or ten eliminates confusion, reduces the chance of missed payments, and makes budgeting much easier. You'll have one due date to remember and one amount to plan for each month.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">3. Fixed Repayment Timeline</h4>
            <p className="text-foreground leading-relaxed">
              Unlike credit cards with no fixed payoff date, consolidation loans have a specific term. You'll know exactly when you'll be debt-free, which provides psychological benefits and helps with long-term financial planning.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">4. Potential Credit Score Improvement</h4>
            <p className="text-foreground leading-relaxed">
              Paying off credit cards reduces your credit utilization ratio (the percentage of available credit you're using), which is a major factor in credit scores. Additionally, consistent on-time payments on your consolidation loan build positive payment history.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">5. Reduced Financial Stress</h4>
            <p className="text-foreground leading-relaxed">
              The mental burden of multiple debts, collection calls, and financial juggling takes a real toll. Consolidation provides a clear path forward and often immediate relief from anxiety.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Potential Risks and Considerations</h3>
            <div className="bg-warning/10 border border-warning/30 rounded-lg p-6 my-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-warning flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Important Warnings</h4>
                  <ul className="space-y-2 text-foreground">
                    {risks.map((risk, index) => (
                      <li key={index} className="text-sm leading-relaxed">• {risk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-8">Is Debt Consolidation Right for You?</h3>
            <p className="text-foreground leading-relaxed">
              Consolidation works best if you:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Have multiple debts with high interest rates (above 10-12%)</li>
              <li>Have steady income to maintain the new payment</li>
              <li>Have good enough credit to qualify for a lower rate than your current average</li>
              <li>Are committed to not accumulating new debt after consolidating</li>
              <li>Have a plan to address the spending or circumstances that led to the debt</li>
            </ul>

            <p className="text-foreground leading-relaxed mt-6">
              Consolidation might NOT be right if:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Your debt is relatively small (under €3,000) and you can pay it off quickly</li>
              <li>You haven't addressed underlying spending issues and will likely accumulate more debt</li>
              <li>Your credit score is so low that you can't qualify for a rate lower than your current debts</li>
              <li>You have very limited income and need debt relief rather than consolidation</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Alternatives to Debt Consolidation</h3>
            
            <h4 className="text-xl font-semibold text-foreground mt-6">Balance Transfer Credit Card</h4>
            <p className="text-foreground leading-relaxed">
              Transfer balances to a card with 0% APR for 12-18 months. Good if you can pay off the balance during the promotional period. Requires good credit and usually includes a 3-5% transfer fee.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Debt Management Plan (DMP)</h4>
            <p className="text-foreground leading-relaxed">
              Work with a credit counseling agency to negotiate lower interest rates with creditors. You make one payment to the agency, which distributes it to creditors. Typically requires closing credit accounts.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Debt Settlement</h4>
            <p className="text-foreground leading-relaxed">
              Negotiate with creditors to pay less than you owe. Severely damages credit and may have tax consequences. Only consider if you're facing bankruptcy.
            </p>

            <h4 className="text-xl font-semibold text-foreground mt-6">Bankruptcy</h4>
            <p className="text-foreground leading-relaxed">
              Legal process that eliminates or restructures debts. Severe credit impact lasting 7-10 years. Should be an absolute last resort after consulting an attorney.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Making Consolidation Work Long-Term</h3>
            <p className="text-foreground leading-relaxed">
              To ensure consolidation truly helps your financial situation:
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Create a Budget:</strong> Track income and expenses to prevent new debt accumulation</li>
              <li><strong>Build Emergency Savings:</strong> Aim for 3-6 months of expenses to avoid future debt</li>
              <li><strong>Address Root Causes:</strong> Identify why you accumulated debt and make necessary changes</li>
              <li><strong>Make Extra Payments:</strong> When possible, pay more than the minimum to reduce interest and payoff time</li>
              <li><strong>Avoid New Debt:</strong> Resist using newly available credit - consider keeping only one card for emergencies</li>
              <li><strong>Set Financial Goals:</strong> Focus on positive objectives like saving for a home or retirement</li>
              <li><strong>Monitor Your Credit:</strong> Check your credit reports regularly to track improvement</li>
              <li><strong>Seek Help if Needed:</strong> Consider financial counseling if you're struggling with spending habits</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">The Application Process</h3>
            <ol className="space-y-3 list-decimal list-inside text-foreground">
              <li><strong>Calculate Total Debt:</strong> List all debts you want to consolidate with balances and rates</li>
              <li><strong>Check Your Credit:</strong> Know your score to understand what rates you might qualify for</li>
              <li><strong>Compare Options:</strong> Review consolidation loan offers from multiple lenders</li>
              <li><strong>Apply:</strong> Submit your application with income and debt documentation</li>
              <li><strong>Review Loan Terms:</strong> Carefully examine the APR, fees, and total cost before accepting</li>
              <li><strong>Pay Off Debts:</strong> Use funds to pay creditors directly (we can often do this for you)</li>
              <li><strong>Confirm Payoffs:</strong> Verify all old accounts show zero balances</li>
              <li><strong>Set Up Auto-Payment:</strong> Ensure you never miss your new loan payment</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Debt Consolidation FAQ</h2>
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

export default Consolidation;
