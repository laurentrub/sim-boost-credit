import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What is CreditPro?",
        a: "CreditPro is an online lending platform that connects borrowers with competitive loan offers. We provide personal loans, auto loans, home improvement loans, debt consolidation, and business financing."
      },
      {
        q: "How does CreditPro make money?",
        a: "We earn a fee from our lending partners when we successfully match borrowers with loans. This service is free for borrowers - we never charge application fees or upfront costs."
      },
      {
        q: "Is CreditPro safe and legitimate?",
        a: "Yes, CreditPro is a licensed and regulated lending platform. We use bank-level encryption, are fully GDPR compliant, and work only with licensed financial institutions."
      },
    ]
  },
  {
    category: "Application Process",
    questions: [
      {
        q: "How long does the application take?",
        a: "Our online application takes about 5-10 minutes to complete. You'll receive a preliminary decision instantly, and final approval typically takes 24-48 hours."
      },
      {
        q: "What documents do I need?",
        a: "You'll need a valid ID, proof of income (pay slips or tax returns), bank statements from the last 3 months, and proof of address. Additional documents may be requested based on your application."
      },
      {
        q: "Will checking my rate affect my credit score?",
        a: "No! Checking your rate on CreditPro uses a soft credit inquiry which doesn't impact your credit score. Only when you formally accept a loan offer will a hard inquiry be made."
      },
      {
        q: "Can I apply if I'm self-employed?",
        a: "Yes! Self-employed individuals are welcome to apply. You'll need to provide additional documentation such as tax returns, business bank statements, and proof of business registration."
      },
      {
        q: "What if my application is denied?",
        a: "If your application is denied, we'll explain why and may suggest alternatives. Common reasons include insufficient income, high debt-to-income ratio, or credit issues. You can reapply after addressing these concerns."
      },
    ]
  },
  {
    category: "Loan Terms & Rates",
    questions: [
      {
        q: "What interest rates do you offer?",
        a: "Our rates start from 2.9% APR for qualified borrowers. Your specific rate depends on your credit profile, loan amount, term length, and type of loan."
      },
      {
        q: "How is my interest rate determined?",
        a: "Interest rates are based on your credit score, income, debt-to-income ratio, loan amount, and term length. Better credit and financial profiles typically receive lower rates."
      },
      {
        q: "Are rates fixed or variable?",
        a: "All our personal, auto, and home improvement loans have fixed rates, meaning your rate and monthly payment never change. This provides predictability throughout your loan term."
      },
      {
        q: "What loan amounts are available?",
        a: "We offer loans from €1,000 to €75,000 depending on the loan type. Personal loans go up to €75,000, while specific product limits may vary."
      },
      {
        q: "What repayment terms are available?",
        a: "Repayment terms range from 12 to 84 months depending on the loan type and amount. Longer terms have lower monthly payments but more total interest."
      },
      {
        q: "Are there any fees?",
        a: "We don't charge application fees. Some loans may have origination fees (typically 1-5% of the loan amount), which are clearly disclosed before you accept an offer."
      },
    ]
  },
  {
    category: "Repayment & Management",
    questions: [
      {
        q: "How do I make payments?",
        a: "Payments are automatically deducted from your bank account on your scheduled payment date each month. You can also make manual payments through your online account."
      },
      {
        q: "Can I change my payment date?",
        a: "Yes, contact our customer service team to request a payment date change. We'll work with you to align payments with your income schedule."
      },
      {
        q: "Can I pay off my loan early?",
        a: "Yes! All our loans allow early repayment with no penalties. You'll save on interest by paying off your loan ahead of schedule."
      },
      {
        q: "What happens if I miss a payment?",
        a: "Contact us immediately if you can't make a payment. We may be able to arrange a payment plan or temporary deferral. Missing payments can result in late fees and damage to your credit score."
      },
      {
        q: "Can I increase my loan amount later?",
        a: "Once your loan is active, you can't increase the amount. However, once you've made several on-time payments, you may qualify to refinance for a larger amount."
      },
    ]
  },
  {
    category: "Credit & Eligibility",
    questions: [
      {
        q: "What credit score do I need?",
        a: "While we prefer scores above 650, we consider applications from various credit profiles. A lower score doesn't automatically disqualify you - we evaluate your complete financial picture."
      },
      {
        q: "Can I apply with bad credit?",
        a: "Yes, we work with borrowers across the credit spectrum. Bad credit may result in higher rates or require a co-signer, but many options are still available."
      },
      {
        q: "Do you accept applications with co-signers?",
        a: "Yes, adding a co-signer with good credit can improve your approval chances and potentially lower your interest rate."
      },
      {
        q: "What is the minimum income requirement?",
        a: "There's no strict minimum, but you must demonstrate sufficient income to cover loan payments. We typically look for a debt-to-income ratio below 40%."
      },
    ]
  },
  {
    category: "Security & Privacy",
    questions: [
      {
        q: "How is my personal information protected?",
        a: "We use 256-bit SSL encryption, the same security used by banks. Your data is never sold or shared without your explicit consent, and we're fully GDPR compliant."
      },
      {
        q: "Who has access to my information?",
        a: "Only authorized CreditPro staff and our lending partners (when you accept an offer) have access to your information. We never sell your data to third parties."
      },
      {
        q: "How long do you keep my information?",
        a: "We retain your information according to legal requirements and our privacy policy. You can request deletion of your data at any time, subject to regulatory obligations."
      },
    ]
  },
  {
    category: "Special Situations",
    questions: [
      {
        q: "Can I apply if I'm retired?",
        a: "Yes! Retired individuals with pension or retirement income can apply. You'll need to provide proof of your retirement income."
      },
      {
        q: "Do you offer loans to students?",
        a: "Students with part-time jobs or other income sources can apply. However, income requirements still apply, and a co-signer may be beneficial."
      },
      {
        q: "Can I use a loan to start a business?",
        a: "For business purposes, we recommend our dedicated Business Loan product, which is specifically designed for entrepreneurs and business owners."
      },
      {
        q: "What if I'm going through a divorce?",
        a: "Divorcing individuals can apply, but you'll need to show your individual income and debts. Joint debts are considered in your debt-to-income calculation."
      },
    ]
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
            Everything you need to know about loans, applications, and CreditPro
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <AccordionItem key={qIndex} value={`${catIndex}-${qIndex}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
