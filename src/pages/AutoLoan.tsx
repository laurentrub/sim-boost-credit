import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CreditSimulator from "@/components/credit/CreditSimulator";
import { Card } from "@/components/ui/card";
import { Car, CheckCircle } from "lucide-react";

const AutoLoan = () => {
  const autoLoanFaqs = [
    {
      q: "What's the difference between financing through you vs. a dealership?",
      a: "Getting pre-approved with CreditPro gives you a guaranteed rate and amount before you shop, putting you in a stronger negotiating position. Dealership financing is determined after you've chosen a car, and rates can be less competitive. You can also compare our offer with dealership financing."
    },
    {
      q: "Can I finance a used car from a private seller?",
      a: "Yes! We finance used vehicles from both dealerships and private sellers. For private party sales, we'll need the vehicle's VIN, current mileage, and condition details to determine value and finalize your loan."
    },
    {
      q: "How old can a used car be for financing?",
      a: "We typically finance used vehicles up to 8 years old at the time of purchase. The vehicle's age, mileage, and condition all factor into loan approval and interest rate determination."
    },
    {
      q: "Do I need a down payment?",
      a: "No down payment is required, though making one (typically 10-20%) can lower your monthly payments, reduce interest costs, and potentially qualify you for better rates. A down payment also means you'll have immediate equity in the vehicle."
    },
    {
      q: "What insurance do I need for a financed vehicle?",
      a: "Comprehensive and collision insurance is required for financed vehicles to protect both you and the lender. You'll need to name CreditPro as lienholder on your insurance policy. We can provide guidance on coverage requirements."
    },
    {
      q: "Can I trade in my current vehicle?",
      a: "Absolutely! If you own your current vehicle outright, the trade-in value can serve as your down payment. If you still owe money on it, we'll work with you to roll the remaining balance into your new loan or pay off the difference."
    },
    {
      q: "What if the car I want costs less than my approved amount?",
      a: "Perfect! You'll simply borrow the amount you need for the vehicle purchase plus any associated costs (taxes, registration, insurance). There's no obligation to borrow the full approved amount."
    },
    {
      q: "Can I refinance my auto loan later?",
      a: "Yes! If interest rates drop or your credit improves significantly, you can refinance your auto loan to secure better terms. We recommend waiting at least 6-12 months and ensuring you have equity in the vehicle."
    },
    {
      q: "What happens if my car is totaled or stolen?",
      a: "Your comprehensive insurance should cover the vehicle's value. Any insurance payout goes first toward paying off your loan balance. If you owe more than the payout (negative equity), you're responsible for the difference - this is why gap insurance is recommended."
    },
    {
      q: "Can I pay off my auto loan early?",
      a: "Yes! There are no prepayment penalties on our auto loans. Paying off your loan early saves you money on interest and frees you from monthly payments sooner. You can make extra payments or pay the full balance at any time."
    },
  ];

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

          <div className="mt-12 prose prose-lg max-w-none space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Complete Auto Loan Guide</h2>
            
            <h3 className="text-2xl font-bold text-foreground">What is an Auto Loan?</h3>
            <p className="text-foreground leading-relaxed">
              An auto loan is a secured loan specifically designed to help you purchase a vehicle. The car itself serves as collateral, which typically results in lower interest rates compared to unsecured personal loans. At CreditPro, we offer auto financing for new and used vehicles, with loan amounts from €5,000 to €50,000 and flexible repayment terms from 12 to 72 months.
            </p>
            <p className="text-foreground leading-relaxed">
              Our competitive rates start from 3.2% APR for qualified borrowers, and the application process is entirely online. Unlike traditional dealership financing, getting pre-approved with CreditPro gives you negotiating power at the dealership, as you'll know exactly how much you can spend before you start shopping.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8">Benefits of Auto Loans</h3>
            <p className="text-foreground leading-relaxed">
              Financing your vehicle purchase offers several advantages over paying cash:
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>Preserve Your Savings:</strong> Keep your emergency fund intact while still getting the car you need</li>
              <li><strong>Build Credit History:</strong> Making timely payments improves your credit score</li>
              <li><strong>Get a Better Car:</strong> Financing allows you to afford a more reliable, safer vehicle</li>
              <li><strong>Fixed Monthly Payments:</strong> Budget with confidence knowing your payment won't change</li>
              <li><strong>Flexible Terms:</strong> Choose a repayment period that matches your financial situation</li>
              <li><strong>Tax Benefits:</strong> If using the vehicle for business, loan interest may be tax-deductible</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">New vs. Used Vehicle Financing</h3>
            <p className="text-foreground leading-relaxed">
              We finance both new and used vehicles, each with its own considerations:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">New Vehicle Loans</h4>
              <p className="mb-2">New cars typically qualify for the lowest interest rates because they have full warranty coverage and retain value better initially. Rates start from 3.2% APR.</p>
              <p className="text-sm text-muted-foreground">Example: €25,000 over 60 months = €452/month (3.5% APR, total: €27,120)</p>
            </div>
            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Used Vehicle Loans</h4>
              <p className="mb-2">Used cars generally have slightly higher rates (typically 3.9-5.5% APR) but cost significantly less upfront. We finance vehicles up to 8 years old.</p>
              <p className="text-sm text-muted-foreground">Example: €15,000 over 48 months = €342/month (4.5% APR, total: €16,416)</p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-8">How to Qualify for an Auto Loan</h3>
            <p className="text-foreground leading-relaxed">
              To qualify for an auto loan with CreditPro, you'll need to meet these basic requirements:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Be at least 18 years old</li>
              <li>Have a valid driver's license</li>
              <li>Be a French resident or have a valid residence permit</li>
              <li>Have verifiable income (employed, self-employed, or retired)</li>
              <li>Maintain a debt-to-income ratio below 40%</li>
              <li>Provide vehicle information (make, model, year, VIN for used cars)</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Understanding Auto Loan Terms</h3>
            <p className="text-foreground leading-relaxed">
              Several factors influence your auto loan costs and terms:
            </p>
            <ul className="space-y-3 text-foreground">
              <li><strong>Interest Rate (APR):</strong> Your rate depends on credit score, vehicle age, loan term, and down payment amount. Better credit means lower rates.</li>
              <li><strong>Loan Term:</strong> Shorter terms (24-36 months) have higher monthly payments but lower total interest. Longer terms (60-72 months) reduce monthly costs but increase total interest paid.</li>
              <li><strong>Down Payment:</strong> While not required, putting 10-20% down reduces your loan amount, potentially qualifies you for better rates, and builds instant equity.</li>
              <li><strong>Loan-to-Value Ratio:</strong> We typically finance up to 120% of the vehicle's value to cover taxes, registration, and insurance.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">The Auto Loan Application Process</h3>
            <ol className="space-y-3 list-decimal list-inside text-foreground">
              <li><strong>Get Pre-Approved:</strong> Submit a quick online application to see how much you can borrow and at what rate</li>
              <li><strong>Shop for Your Vehicle:</strong> Browse dealerships or private sellers knowing your exact budget</li>
              <li><strong>Choose Your Car:</strong> Select the vehicle that meets your needs and fits within your approved amount</li>
              <li><strong>Provide Vehicle Details:</strong> Submit information about the car (VIN, mileage, condition)</li>
              <li><strong>Complete Documentation:</strong> Upload proof of income, insurance quote, and vehicle documentation</li>
              <li><strong>Sign Your Contract:</strong> Review and electronically sign your loan agreement</li>
              <li><strong>Receive Funds:</strong> We send payment directly to the dealer or seller, and you get the keys</li>
            </ol>

            <h3 className="text-2xl font-bold text-foreground mt-8">Tips for Getting the Best Auto Loan Rate</h3>
            <ul className="space-y-2 text-foreground">
              <li>Check your credit score and correct any errors before applying</li>
              <li>Get pre-approved before visiting dealerships to negotiate from a position of strength</li>
              <li>Consider making a down payment of at least 10-20% of the vehicle price</li>
              <li>Choose the shortest loan term you can comfortably afford</li>
              <li>Compare offers from multiple lenders, including banks, credit unions, and online platforms</li>
              <li>Consider buying a certified pre-owned vehicle for warranty coverage at a lower price</li>
              <li>Time your purchase during manufacturer incentive periods for potential additional savings</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">What Vehicles Can You Finance?</h3>
            <p className="text-foreground leading-relaxed">
              CreditPro offers financing for a wide range of vehicles:
            </p>
            <ul className="space-y-2 text-foreground">
              <li><strong>New Cars:</strong> Fresh from the dealership with full manufacturer warranty</li>
              <li><strong>Used Cars:</strong> Vehicles up to 8 years old from dealerships or private sellers</li>
              <li><strong>Certified Pre-Owned:</strong> Inspected, refurbished vehicles with extended warranties</li>
              <li><strong>Motorcycles:</strong> Both new and used bikes over 125cc</li>
              <li><strong>Electric/Hybrid Vehicles:</strong> Eco-friendly options with potential government incentives</li>
              <li><strong>Light Commercial Vehicles:</strong> Vans and trucks for business use</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8">Managing Your Auto Loan</h3>
            <p className="text-foreground leading-relaxed">
              Once your loan is approved and you've purchased your vehicle, managing your loan is straightforward:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Set up automatic payments to never miss a due date and protect your credit score</li>
              <li>Make extra payments when possible to reduce interest and pay off your loan faster</li>
              <li>Maintain comprehensive insurance coverage as required by your loan agreement</li>
              <li>Keep your vehicle well-maintained to preserve its value</li>
              <li>Consider refinancing if interest rates drop or your credit improves significantly</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Auto Loan FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Auto Loan FAQ</h2>
          <div className="space-y-6">
            {autoLoanFaqs.map((faq, index) => (
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

export default AutoLoan;
