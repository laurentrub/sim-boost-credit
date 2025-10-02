import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const CreditGuide = () => {
  const articles = [
    {
      title: "How to Choose the Right Loan for Your Needs",
      content: `Selecting the right loan requires careful consideration of your financial situation, goals, and repayment capacity. Start by identifying your specific need - is it debt consolidation, a major purchase, home improvement, or business investment? Each purpose may be better suited to different loan types.

Consider the loan amount you truly need. Borrowing too little means you might need additional financing later; borrowing too much increases costs unnecessarily. Create a detailed budget showing exactly how you'll use the funds.

Compare interest rates across multiple lenders, but remember that APR (Annual Percentage Rate) is more important than the base interest rate as it includes fees. Fixed rates provide payment stability, while variable rates might start lower but carry risk of increases.

Evaluate repayment terms carefully. Shorter terms mean higher monthly payments but lower total interest costs. Longer terms reduce monthly payments but significantly increase the total amount paid over time. Choose a term that balances affordability with minimizing interest.

Check for fees including origination fees, prepayment penalties, late payment charges, and annual fees. Some loans advertise low rates but have high fees that increase the true cost.

Consider your credit score realistically. If your score is below 650, you might face higher rates or need a co-signer. Improving your credit before applying can save thousands in interest.

Finally, read the fine print. Understand all terms, conditions, and your obligations before signing. Never feel pressured to accept an offer - legitimate lenders give you time to review and decide.`
    },
    {
      title: "Understanding and Calculating Your Debt-to-Income Ratio",
      content: `Your debt-to-income ratio (DTI) is one of the most important factors lenders consider when evaluating your loan application. It measures what percentage of your gross monthly income goes toward debt payments, indicating your ability to manage monthly payments.

To calculate your DTI, first determine your total monthly debt payments. Include credit card minimum payments, personal loan payments, auto loans, student loans, mortgage or rent, and any other recurring debt obligations. Do not include utilities, groceries, or insurance unless they're part of a payment plan.

Next, calculate your gross monthly income (before taxes). Include salary, bonuses, commission, rental income, alimony, child support, and any other regular income sources.

Divide total monthly debt payments by gross monthly income, then multiply by 100 to get your percentage. For example: €1,200 in debt payments ÷ €4,000 gross income = 0.30 or 30% DTI.

Most lenders prefer a DTI below 36%, with no more than 28% going to housing costs. You can still qualify with DTI up to 43-45%, but you'll likely face higher interest rates. Above 45%, approval becomes very difficult.

To improve your DTI, you can increase income through raises, side jobs, or bonuses, or reduce debt by paying down balances, consolidating high-interest debts, or avoiding new debt. Sometimes postponing a loan application while improving your DTI results in much better terms.

When applying for a new loan, lenders calculate DTI including the proposed new payment. Ensure you can comfortably afford this combined payment while maintaining emergency savings and quality of life.`
    },
    {
      title: "How to Compare Loan Offers Effectively",
      content: `Comparing loan offers requires looking beyond the advertised interest rate. Use these strategies to make an informed decision:

First, focus on APR (Annual Percentage Rate) rather than just the interest rate. APR includes origination fees, processing fees, and other costs, giving you the true annual cost of borrowing. A loan with a 5% interest rate but 5% origination fee might have a 7% APR, making it more expensive than a loan with 6% interest and no fees.

Compare total loan costs by multiplying your monthly payment by the number of payments. A €10,000 loan at 5% APR for 36 months costs €299/month (€10,764 total), while the same loan at 7% APR costs €308/month (€11,088 total) - a €324 difference.

Examine all fees carefully. Common fees include origination fees (typically 1-6% of loan amount), application fees, prepayment penalties, late payment fees, and check processing fees. Some lenders charge no fees but higher rates, while others do the opposite.

Check the repayment flexibility. Can you make extra payments without penalty? Can you change your payment date? Is there a grace period for late payments? These features matter when life circumstances change.

Read reviews and research lender reputation. Check the Better Business Bureau, consumer finance websites, and social media. Beware of lenders with complaints about hidden fees, poor customer service, or aggressive collection practices.

Verify the lender's credentials. Ensure they're properly licensed in France and compliant with consumer protection laws. Legitimate lenders clearly disclose all terms and never pressure you to sign immediately.

Finally, get everything in writing. Compare written loan offers side-by-side, including APR, monthly payment, total cost, fees, and terms. Take time to review - never sign under pressure.`
    },
    {
      title: "The Truth About Paying Off Loans Early",
      content: `Paying off a loan early can save significant money in interest, but it's not always the best financial move. Understanding the implications helps you make the right decision.

Most personal loans use simple interest calculated daily on the remaining balance. Paying early or making extra payments reduces the principal faster, which reduces the interest that accrues. For example, adding €100/month to a €10,000 loan at 6% APR can save over €500 in interest and cut months off your repayment.

However, check for prepayment penalties first. While increasingly rare on personal loans, some lenders charge fees (typically 2-5% of the remaining balance) if you pay off the loan within the first 1-3 years. This fee might eliminate your interest savings, making early payoff pointless.

Consider opportunity cost before making extra payments. If your loan rate is 5% but you could earn 8% by investing that money, you might be better off making minimum payments and investing the difference. This is especially true if your employer matches retirement contributions - that's free money you shouldn't miss.

Don't prioritize loan payoff at the expense of emergency savings. Financial experts recommend 3-6 months of expenses in readily accessible savings before aggressively paying down low-interest debt. Without emergency funds, you might need to take on high-interest debt during a crisis.

Focus extra payments on high-interest debt first. If you have a personal loan at 6% and credit cards at 20%, pay minimums on the loan and attack the credit cards. This "avalanche method" saves the most money.

Paying off loans early does improve your credit score by reducing your credit utilization and debt-to-income ratio, which helps if you're planning to apply for a mortgage or other major loan soon.

Calculate your exact savings using an early payoff calculator before deciding. Sometimes the savings are minimal, while other times they're substantial.`
    },
    {
      title: "Building and Maintaining Good Credit",
      content: `Your credit score impacts every financial aspect of your life - loan approvals, interest rates, housing applications, and even employment. Understanding how to build and maintain good credit is essential for financial success.

Credit scores range from 300 to 850. Scores above 750 are excellent, 700-749 is good, 650-699 is fair, 600-649 is poor, and below 600 is very poor. The exact score formula is proprietary, but we know the key factors.

Payment history accounts for 35% of your score. Never miss payments - even one 30-day late payment can drop your score 100+ points. Set up automatic payments or calendar reminders for all debts. If you do miss a payment, pay it immediately and contact the creditor - they sometimes agree not to report it if you have a good history.

Credit utilization (amounts owed) represents 30% of your score. Keep credit card balances below 30% of limits, ideally below 10%. Pay down balances rather than moving debt around. High utilization signals financial stress even if you pay on time.

Length of credit history contributes 15%. Keep old accounts open even if unused, as they establish your credit history depth. The average age of your accounts matters significantly.

Credit mix accounts for 10%. Having different types of credit (credit cards, installment loans, mortgage) shows you can manage various obligations, though you shouldn't take on debt just for mix.

New credit inquiries make up 10%. Each hard inquiry (when you apply for credit) can drop your score 5-10 points temporarily. Rate shopping for mortgages or auto loans within 14-45 days counts as one inquiry, so consolidate shopping periods.

To build credit from scratch, start with a secured credit card, become an authorized user on a responsible person's account, or get a credit-builder loan. Make small charges and pay in full monthly.

Monitor your credit regularly through free annual reports. Dispute any errors immediately, as mistakes are common and can significantly hurt your score.

Avoid credit repair scams. No one can legally remove accurate negative information, and disputing accurate items wastes time and money.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Credit Guide</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Educational resources to help you make informed borrowing decisions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {articles.map((article, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{article.title}</h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditGuide;
