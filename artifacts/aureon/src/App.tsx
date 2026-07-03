import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import Quiz from "@/pages/Quiz";
import SelectMedication from "@/pages/SelectMedication";
import SelectPlan from "@/pages/SelectPlan";
import Intake from "@/pages/Intake";
import Contact from "@/pages/Contact";
import Start from "@/pages/Start";
import LpGhosted from "@/pages/LpGhosted";
import LpPrice from "@/pages/LpPrice";
import TermsOfService from "@/pages/TermsOfService";
import TDEEPage from "@/pages/TDEEPage";
import RouteHead from "@/components/RouteHead";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <>
      <RouteHead
        title="SculptRx — Women's Health & Weight Loss"
        description="Clinician-guided GLP-1 weight loss and hormone replacement therapy built for women. Physician-prescribed. Transparent pricing. Real results."
        canonical="/"
      />
      <Home />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <RouteHead
        title="About SculptRx — Physician-Led Women's Health Care"
        description="SculptRx is a physician-led women's health platform. Board-certified OBGYNs, transparent pricing, and real care for GLP-1 weight loss and hormone therapy."
        canonical="/about"
      />
      <AboutUs />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <RouteHead
        title="Contact SculptRx — Get in Touch with Our Care Team"
        description="Have questions about SculptRx? Contact our care team. We guarantee a response within 24 hours — our actual average is under an hour."
        canonical="/contact"
      />
      <Contact />
    </>
  );
}

function LpGhostedPage() {
  return (
    <>
      <RouteHead
        title="Done Being Ghosted by Your GLP-1 Provider? — SculptRx"
        description="Tired of weight loss providers who disappear after your prescription? SculptRx offers physician-led GLP-1 care with guaranteed 24-hour response times, built for women."
        canonical="/lp/ghosted"
      />
      <LpGhosted />
    </>
  );
}

function LpPricePage() {
  return (
    <>
      <RouteHead
        title="Transparent GLP-1 Pricing — No Hidden Fees — SculptRx"
        description="See exactly what you'll pay for physician-guided GLP-1 weight loss at SculptRx. No surprise fees. No price hikes as your dose increases. Medication included."
        canonical="/lp/price"
      />
      <LpPrice />
    </>
  );
}

function StartPage() {
  return (
    <>
      <RouteHead
        title="Choose Your Treatment — SculptRx"
        description="Select the SculptRx treatment path that's right for you: GLP-1 weight loss or hormone replacement therapy."
        canonical="/start"
        noIndex
      />
      <Start />
    </>
  );
}

function QuizPage() {
  return (
    <>
      <RouteHead
        title="Weight Loss Assessment — SculptRx"
        description="Take the SculptRx assessment to find out if GLP-1 therapy is right for you. Board-certified physicians review every response."
        canonical="/quiz"
        noIndex
      />
      <Quiz />
    </>
  );
}

function SelectMedicationPage() {
  return (
    <>
      <RouteHead
        title="Choose Your Medication — SculptRx"
        description="Select your GLP-1 medication at SculptRx. Semaglutide or tirzepatide, physician-reviewed and prescribed."
        canonical="/select-medication"
        noIndex
      />
      <SelectMedication />
    </>
  );
}

function SelectPlanPage() {
  return (
    <>
      <RouteHead
        title="Select Your Plan — SculptRx"
        description="Choose the SculptRx plan that fits your goals. All plans include medication, physician care, and ongoing support."
        canonical="/select-plan"
        noIndex
      />
      <SelectPlan />
    </>
  );
}

function IntakePage() {
  return (
    <>
      <RouteHead
        title="Medical Intake — SculptRx"
        description="Complete your SculptRx medical intake form. Your responses are reviewed by a board-certified physician before your prescription is issued."
        canonical="/intake"
        noIndex
      />
      <Intake />
    </>
  );
}

function TermsPage() {
  return (
    <>
      <RouteHead
        title="Terms of Service — SculptRx"
        description="Read the SculptRx Terms of Service. SculptRx is operated by ASR Health LLC, a Florida limited liability company."
        canonical="/terms"
        noIndex
      />
      <TermsOfService />
    </>
  );
}

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/start" component={StartPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/select-medication" component={SelectMedicationPage} />
      <Route path="/select-plan" component={SelectPlanPage} />
      <Route path="/intake" component={IntakePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/lp/ghosted" component={LpGhostedPage} />
      <Route path="/lp/price" component={LpPricePage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/tools/tdee" component={TDEEPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AppRoutes />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
