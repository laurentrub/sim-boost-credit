import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CreditSimulator from "@/components/credit/CreditSimulator";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

const PersonalLoan = () => {
  const benefits = [
    "No collateral required",
    "Flexible repayment terms (12-84 months)",
    "Early repayment with no penalties",
    "Funds available within 48 hours",
    "100% online application process",
    "Transparent fees - no hidden costs",
  ];

  const examples = [
    { amount: "€5,000", duration: "36 months", monthly: "€151", apr: "4.2%", total: "€5,436" },
    { amount: "€10,000", duration: "48 months", monthly: "€221", apr: "4.9%", total: "€10,608" },
    { amount: "€20,000", duration: "60 months", monthly: "€395", apr: "5.5%", total: "€23,700" },
    { amount: "€30,000", duration: "72 months", monthly: "€504", apr: "6.2%", total: "€36,288" },
  ];

  const faqs = [
    {
      q: "What can I use a personal loan for?",
      a: "Personal loans are versatile and can be used for almost any legal purpose: weddings, vacations, medical expenses, debt consolidation, home improvements, education, or unexpected expenses."
    },
    {
      q: "What is the minimum credit score required?",
      a: "While we prefer applicants with a credit score above 650, we evaluate each application individually. A lower score doesn't automatically disqualify you - we consider your entire financial profile."
    },
    {
      q: "How quickly can I get the money?",
      a: "Once your application is approved and all documents are verified, funds are typically transferred to your bank account within 24-48 hours."
    },
    {
      q: "Are there any fees for early repayment?",
      a: "No! All our personal loans come with no early repayment penalties. You can pay off your loan ahead of schedule and save on interest."
    },
    {
      q: "What documents do I need to provide?",
      a: "You'll need a valid government ID, proof of income (last 3 pay slips or tax returns if self-employed), recent bank statements (last 3 months), and proof of current address."
    },
    {
      q: "Can I apply if I'm self-employed?",
      a: "Yes! Self-employed individuals are welcome to apply. You'll need to provide additional documentation such as tax returns and business bank statements."
    },
    {
      q: "What is APR and how does it affect my loan?",
      a: "APR (Annual Percentage Rate) represents the total annual cost of your loan, including interest and fees. A lower APR means lower overall costs. Your specific APR depends on your credit profile and loan terms."
    },
    {
      q: "Can I change my monthly payment date?",
      a: "Yes, we offer flexibility with payment dates. Contact our customer service team to arrange a payment schedule that aligns with your income cycle."
    },
    {
      q: "What happens if I miss a payment?",
      a: "We understand life happens. If you're struggling to make a payment, contact us immediately. We may be able to arrange a payment plan or temporary deferral. Late payments may incur fees and affect your credit score."
    },
    {
      q: "Is my personal information secure?",
      a: "Absolutely. We use bank-level 256-bit SSL encryption and are fully compliant with GDPR regulations. Your data is never shared with third parties without your explicit consent."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with Simulator */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Personal Loan
                <br />
                <span className="text-accent-light">From €1,000 to €75,000</span>
              </h1>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Finance your dreams with our flexible personal loans. Whether it's a wedding, vacation, medical expenses, or any personal project - we've got you covered.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm">5-min approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">100% secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm">From 2.9% APR</span>
                </div>
              </div>
            </div>
            <div>
              <CreditSimulator minAmount={1000} maxAmount={75000} defaultAmount={10000} interestRate={4.9} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Our Personal Loan?</h2>
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

      {/* Examples Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Loan Examples</h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left">Amount</th>
                    <th className="px-6 py-4 text-left">Duration</th>
                    <th className="px-6 py-4 text-left">Monthly Payment</th>
                    <th className="px-6 py-4 text-left">APR</th>
                    <th className="px-6 py-4 text-left">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {examples.map((example, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="px-6 py-4 font-semibold text-foreground">{example.amount}</td>
                      <td className="px-6 py-4 text-muted-foreground">{example.duration}</td>
                      <td className="px-6 py-4 text-success font-semibold">{example.monthly}/month</td>
                      <td className="px-6 py-4 text-muted-foreground">{example.apr}</td>
                      <td className="px-6 py-4 text-foreground">{example.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            *Examples are for illustrative purposes. Your actual rate and payments may vary based on your credit profile.
          </p>
        </div>
      </section>

      {/* Detailed Content for SEO */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Complete Guide to Personal Loans</h2>
            
            <h3 className="text-2xl font-bold text-foreground mt-8">What is a Personal Loan?</h3>
            <p className="text-foreground leading-relaxed">
              A personal loan is an unsecured loan that provides you with a lump sum of money for personal use. Unlike mortgages or auto loans that are tied to specific purchases, personal loans offer maximum flexibility. You can use the funds for virtually any legal purpose - from consolidating debt to financing a wedding, covering medical expenses, or funding home improvements.
            </p>
            <p className="text-foreground leading-relaxed">
              At CreditPro, our personal loans range from €1,000 to €75,000 with repayment terms from 12 to 84 months. We offer competitive fixed interest rates starting from 2.9% APR, depending on your creditworthiness and loan terms. Because personal loans are unsecured, you don't need to provide collateral, making them accessible and straightforward.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Common Uses for Personal Loans</h3>
            <ul className="space-y-2 text-foreground">
              <li><strong>Debt Consolidation:</strong> Combine multiple high-interest debts into one manageable monthly payment</li>
              <li><strong>Home Improvements:</strong> Renovate your kitchen, add a bathroom, or upgrade your property</li>
              <li><strong>Major Purchases:</strong> Buy furniture, appliances, or electronics without depleting savings</li>
              <li><strong>Medical Expenses:</strong> Cover unexpected healthcare costs or elective procedures</li>
              <li><strong>Weddings:</strong> Finance your dream wedding without financial stress</li>
              <li><strong>Education:</strong> Pay for courses, certifications, or continuing education</li>
              <li><strong>Vacations:</strong> Create memorable experiences with your loved ones</li>
              <li><strong>Emergency Expenses:</strong> Handle unexpected costs like car repairs or urgent home fixes</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">How to Qualify</h3>
            <p className="text-foreground leading-relaxed">
              While eligibility criteria vary by lender, at CreditPro we generally require applicants to:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Be at least 18 years old</li>
              <li>Be a French resident or have a valid residence permit</li>
              <li>Have a steady source of income (employed, self-employed, or retired with pension)</li>
              <li>Have a debt-to-income ratio below 40%</li>
              <li>Provide necessary documentation (ID, proof of income, bank statements)</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Understanding Interest Rates and APR</h3>
            <p className="text-foreground leading-relaxed">
              The Annual Percentage Rate (APR) is the total annual cost of your loan expressed as a percentage. It includes both the interest rate and any fees, giving you a complete picture of what the loan will cost. At CreditPro, your APR depends on several factors:
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Credit Score:</strong> Higher scores typically qualify for lower rates</li>
              <li><strong>Loan Amount:</strong> Larger loans may have different rate structures</li>
              <li><strong>Loan Term:</strong> Shorter terms often have lower rates but higher monthly payments</li>
              <li><strong>Debt-to-Income Ratio:</strong> Lower ratios demonstrate better ability to repay</li>
              <li><strong>Income Stability:</strong> Consistent employment history improves your rate</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">The Application Process</h3>
            <ol className="space-y-3 list-decimal list-inside text-foreground">
              <li><strong>Check Your Eligibility:</strong> Use our simulator to estimate your monthly payments</li>
              <li><strong>Gather Documents:</strong> Prepare your ID, income proof, and bank statements</li>
              <li><strong>Submit Application:</strong> Complete our secure online form (takes about 5 minutes)</li>
              <li><strong>Get Instant Decision:</strong> Receive preliminary approval or denial within minutes</li>
              <li><strong>Verify Information:</strong> Our team reviews your application and documents</li>
              <li><strong>Sign Agreement:</strong> Review and electronically sign your loan contract</li>
              <li><strong>Receive Funds:</strong> Money is deposited directly into your bank account</li>
            </ol>

            <h3 className="text-2xl font-bold text-foreground mt-8">Tips for Getting the Best Rate</h3>
            <ul className="space-y-2 text-foreground">
              <li>Check and improve your credit score before applying</li>
              <li>Compare offers from multiple lenders</li>
              <li>Consider a shorter loan term if you can afford higher monthly payments</li>
              <li>Borrow only what you need - larger loans often have higher rates</li>
              <li>Set up automatic payments to never miss a due date</li>
              <li>Consider a co-signer if your credit isn't ideal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Personal Loan FAQ</h2>
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

export default PersonalLoan;
