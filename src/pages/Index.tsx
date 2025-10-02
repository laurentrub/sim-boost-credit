import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CreditSimulator from "@/components/credit/CreditSimulator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, TrendingUp, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Fast Approval",
      description: "Get your preliminary approval in less than 5 minutes with our instant decision system.",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Bank-level encryption and data protection. Your information is always safe with us.",
    },
    {
      icon: TrendingUp,
      title: "Best Rates",
      description: "Competitive interest rates starting from 2.9% APR. Compare and choose the best option.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated loan advisors available to guide you through every step of the process.",
    },
  ];

  const loanProducts = [
    {
      title: "Personal Loan",
      description: "From €1,000 to €75,000 for all your personal projects",
      rate: "From 2.9% APR",
      href: "/personal-loan",
    },
    {
      title: "Auto Loan",
      description: "Finance your dream car with flexible payment options",
      rate: "From 3.2% APR",
      href: "/auto-loan",
    },
    {
      title: "Home Improvement",
      description: "Transform your home with our renovation loans",
      rate: "From 3.5% APR",
      href: "/home-improvement",
    },
    {
      title: "Loan Consolidation",
      description: "Simplify your finances by consolidating multiple debts",
      rate: "From 4.2% APR",
      href: "/consolidation",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get my loan approved?",
      answer: "Our instant decision system provides preliminary approval in under 5 minutes. Final approval typically takes 24-48 hours after document verification.",
    },
    {
      question: "What is the minimum credit score required?",
      answer: "We accept applications from customers with various credit profiles. While a score above 650 improves your chances, we evaluate each application individually.",
    },
    {
      question: "Can I repay my loan early without penalties?",
      answer: "Yes, all our loans allow early repayment with no penalties. You'll save on interest by paying off your loan ahead of schedule.",
    },
    {
      question: "What documents do I need to apply?",
      answer: "You'll need a valid ID, proof of income (last 3 pay slips), bank statements, and proof of address. Additional documents may be requested based on your situation.",
    },
    {
      question: "How is my monthly payment calculated?",
      answer: "Your monthly payment depends on the loan amount, duration, and your APR. Use our simulator above to get an instant calculation tailored to your needs.",
    },
    {
      question: "Will checking rates affect my credit score?",
      answer: "No! Checking your rate uses a soft credit inquiry which doesn't impact your credit score. Only when you formally accept a loan offer will we perform a hard inquiry.",
    },
    {
      question: "What makes CreditPro different from banks?",
      answer: "We offer faster decisions, a fully digital process, competitive rates by comparing multiple lenders, and personalized service. Plus, you can complete everything online without visiting a branch.",
    },
    {
      question: "Can I apply with a co-borrower or guarantor?",
      answer: "Yes! Adding a co-borrower or guarantor with strong credit can improve your approval chances and potentially secure a lower interest rate.",
    },
    {
      question: "Do you offer loans to self-employed individuals?",
      answer: "Absolutely! Self-employed professionals, freelancers, and business owners are welcome to apply. You'll need to provide tax returns and business bank statements to verify income.",
    },
    {
      question: "What if I have existing debt?",
      answer: "We evaluate your debt-to-income ratio as part of the application. If your existing debts are manageable (typically below 40% of income), you may still qualify. Consider our debt consolidation option to simplify payments.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Simulator */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get Your Credit
                <br />
                <span className="text-accent-light">In Minutes</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Fast, transparent, and secure credit solutions tailored to your needs. 
                Get your preliminary approval with no commitment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/apply">
                  <Button variant="accent" size="xl">
                    Apply Now
                  </Button>
                </Link>
                <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>

            <div>
              <CreditSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">€500M+</div>
              <div className="text-sm text-muted-foreground">Loans Granted</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5 min</div>
              <div className="text-sm text-muted-foreground">Avg. Approval Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose CreditPro?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized service to make borrowing simple, fast, and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Loan Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whatever your project, we have a financing solution tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {loanProducts.map((product, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="text-accent font-semibold mb-6">{product.rate}</div>
                <Link to={product.href}>
                  <Button variant="outline" className="w-full">
                    Learn More & Simulate
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Rich Content for SEO */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            About CreditPro: Your Trusted Credit Partner
          </h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              <strong>CreditPro</strong> is a leading online lending platform that has revolutionized the way individuals and businesses access credit in France. Founded in 2015, we've helped over 50,000 customers achieve their financial goals through transparent, fast, and secure lending solutions.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              We believe that accessing credit should be simple, transparent, and stress-free. Our mission is to democratize lending by leveraging technology to offer competitive rates, instant decisions, and a seamless digital experience. We're committed to financial inclusion and helping our customers make informed borrowing decisions.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why We're Different</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <span><strong>Speed:</strong> Our advanced algorithms provide preliminary approval in under 5 minutes, with funds typically disbursed within 48 hours of final approval.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <span><strong>Transparency:</strong> No hidden fees, no surprises. All costs, rates, and terms are clearly displayed before you commit.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <span><strong>Security:</strong> We use bank-level encryption and are fully compliant with GDPR and French banking regulations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <span><strong>Flexibility:</strong> Early repayment options with no penalties, flexible terms from 12 to 84 months, and amounts from €1,000 to €75,000.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Types of Loans We Offer</h3>
            <p className="leading-relaxed">
              At CreditPro, we understand that every financial need is unique. That's why we offer a comprehensive range of loan products designed to match your specific circumstances:
            </p>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Personal Loans</h4>
              <p className="mb-2">Perfect for weddings, vacations, medical expenses, or any personal project. Borrow from €1,000 to €75,000 with rates starting at 2.9% APR.</p>
              <p className="text-sm text-muted-foreground">Example: €10,000 over 48 months = €221/month (4.9% APR, total cost: €10,608)</p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Auto Loans</h4>
              <p className="mb-2">Finance new or used vehicles with competitive rates and flexible terms. Rates from 3.2% APR.</p>
              <p className="text-sm text-muted-foreground">Example: €20,000 over 60 months = €362/month (3.9% APR, total cost: €21,720)</p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Home Improvement Loans</h4>
              <p className="mb-2">Transform your living space with loans designed for renovations, extensions, or energy efficiency upgrades.</p>
              <p className="text-sm text-muted-foreground">Example: €15,000 over 72 months = €238/month (4.5% APR, total cost: €17,136)</p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg my-6">
              <h4 className="text-xl font-semibold mb-3">Debt Consolidation</h4>
              <p className="mb-2">Simplify multiple debts into one easy monthly payment, often at a lower overall rate.</p>
              <p className="text-sm text-muted-foreground">Example: Consolidate €25,000 in debts over 84 months = €351/month (5.2% APR)</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">How Our Process Works</h3>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="leading-relaxed"><strong>Simulate Your Loan:</strong> Use our interactive calculator to see estimated monthly payments and total costs.</li>
              <li className="leading-relaxed"><strong>Submit Your Application:</strong> Complete our simple online form in just a few minutes.</li>
              <li className="leading-relaxed"><strong>Get Instant Decision:</strong> Our system analyzes your application and provides preliminary approval immediately.</li>
              <li className="leading-relaxed"><strong>Upload Documents:</strong> Submit required documents securely through our platform.</li>
              <li className="leading-relaxed"><strong>Receive Your Funds:</strong> Once approved, funds are transferred directly to your bank account within 48 hours.</li>
            </ol>

            <h3 className="text-2xl font-bold mt-8 mb-4">Our Commitment to Responsible Lending</h3>
            <p className="leading-relaxed">
              We take responsible lending seriously. Before approving any loan, we carefully assess your ability to repay based on your income, expenses, and existing debts. We'll never approve a loan that could put you in financial difficulty. Our advisors are always available to discuss alternatives if a loan isn't the right solution for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/resources/faq">
              <Button variant="outline" size="lg">
                View Complete FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by Leading Financial Institutions
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <Award className="h-12 w-12" />
            <Shield className="h-12 w-12" />
            <TrendingUp className="h-12 w-12" />
            <Users className="h-12 w-12" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join thousands of satisfied customers who chose CreditPro for their financing needs.
          </p>
          <Link to="/apply">
            <Button variant="accent" size="xl">
              Apply Now - Get Instant Approval
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
