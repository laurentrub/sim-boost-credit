import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CreditPro</h3>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for fast, transparent, and secure credit solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Loan Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/personal-loan" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link to="/auto-loan" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Auto Loan
                </Link>
              </li>
              <li>
                <Link to="/home-improvement" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home Improvement
                </Link>
              </li>
              <li>
                <Link to="/consolidation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Loan Consolidation
                </Link>
              </li>
              <li>
                <Link to="/business-loan" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Business Loan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/resources/glossary" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Credit Glossary
                </Link>
              </li>
              <li>
                <Link to="/resources/guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Credit Guide
                </Link>
              </li>
              <li>
                <Link to="/resources/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} CreditPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
