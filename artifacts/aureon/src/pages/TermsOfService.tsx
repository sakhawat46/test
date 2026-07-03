import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    id: "1",
    title: "1. Agreement to Terms",
    content: (
      <>
        <p>
          By accessing joinsculptrx.com or using any SculptRx service, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree, do not use our services.
        </p>
        <p>
          These Terms constitute a binding legal agreement between you and ASR Health LLC, a Florida limited liability company doing business as SculptRx ("Company"). ASR Health LLC is the legal contracting entity. SculptRx is a registered fictitious name (DBA) under which ASR Health LLC operates. All references to "SculptRx," "we," "us," or "our" in these Terms refer to ASR Health LLC d/b/a SculptRx.
        </p>
        <p className="font-semibold">
          You must be at least 18 years of age to use SculptRx. Our services are not intended for minors. By using our services, you represent that you are 18 years of age or older.
        </p>
      </>
    ),
  },
  {
    id: "2",
    title: "2. Nature of Our Services — Important Disclosures",
    subsections: [
      {
        title: "2.1 What SculptRx Is",
        content: (
          <p>
            SculptRx is a telehealth platform that connects patients with independent, licensed physicians for async medical consultations. We facilitate access to physician review and, where clinically appropriate, prescriptions for compounded medications dispensed by licensed U.S. pharmacies.
          </p>
        ),
      },
      {
        title: "2.2 What SculptRx Is Not",
        content: (
          <p>
            SculptRx is not a pharmacy. We do not compound, manufacture, dispense, or ship medications. Medication is dispensed by independent licensed compounding pharmacies. SculptRx does not employ the prescribing physicians — they are independent licensed practitioners accessed through our clinical network partner, MD Integrations.
          </p>
        ),
      },
      {
        title: "2.3 Compounded Medications — Required Disclosure",
        content: (
          <>
            <p className="font-semibold">
              The medications available through SculptRx are compounded medications. Compounded medications are not FDA-approved. They have not undergone FDA review for safety, efficacy, or manufacturing quality.
            </p>
            <p>
              Compounded medications are prepared by licensed compounding pharmacies under applicable state and federal law, including 503A of the Federal Food, Drug, and Cosmetic Act.
            </p>
            <p>
              Compounded semaglutide and tirzepatide are not the same as, and are not generic versions of, FDA-approved brand-name GLP-1 medications (such as Ozempic®, Wegovy®, Mounjaro®, or Zepbound®). SculptRx makes no claim that the compounded medications available through our platform are equivalent to, or the same as, any FDA-approved drug product.
            </p>
          </>
        ),
      },
      {
        title: "2.4 No Doctor-Patient Relationship with SculptRx",
        content: (
          <p>
            Your physician consultation is conducted by an independent licensed physician through our clinical network. SculptRx does not provide medical advice, diagnosis, or treatment. Nothing on our platform constitutes medical advice. Always consult a qualified healthcare provider with questions about your medical condition. If you are experiencing a medical emergency, call 911 or your local emergency services immediately.
          </p>
        ),
      },
      {
        title: "2.5 No Guarantee of Prescription",
        content: (
          <p>
            Submitting a medical intake and paying for a consultation does not guarantee that a physician will prescribe medication. Physicians exercise independent clinical judgment. A physician may determine that treatment is not appropriate for you, in which case you will not be charged. See Section 4 (Billing and Payment) for details.
          </p>
        ),
      },
    ],
  },
  {
    id: "3",
    title: "3. Eligibility and Account",
    subsections: [
      {
        title: "3.1 Eligibility",
        content: (
          <p>
            To use SculptRx services you must: (a) be at least 18 years of age; (b) be a legal resident of a U.S. state where our services are available; (c) provide accurate and complete information during registration and intake; and (d) not be prohibited from receiving the services under applicable law.
          </p>
        ),
      },
      {
        title: "3.2 Accurate Information",
        content: (
          <p>
            You agree to provide accurate, current, and complete information during the intake process, including your medical history, current medications, and health conditions. Providing false or incomplete medical information may affect your safety and the physician's ability to make an appropriate clinical determination. You are responsible for the accuracy of all information you provide.
          </p>
        ),
      },
      {
        title: "3.3 Account Security",
        content: (
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately at{" "}
            <a href="mailto:hello@joinsculptrx.com" className="text-primary underline underline-offset-2">hello@joinsculptrx.com</a>{" "}
            if you believe your account has been compromised.
          </p>
        ),
      },
    ],
  },
  {
    id: "4",
    title: "4. Billing, Payment, and Authorization",
    subsections: [
      {
        title: "4.1 Pre-Authorization Hold — $0 Due Until Physician Approval",
        content: (
          <>
            <p>
              When you complete the intake process and enter your payment information, we place a temporary pre-authorization hold on your payment method.{" "}
              <strong>You are not charged at this time.</strong> Your payment method is only charged after a licensed physician reviews your intake information and approves your treatment plan.
            </p>
            <p>
              If a physician determines that treatment is not appropriate for you, the pre-authorization hold is released and you are not charged. There is no fee for a physician determination that treatment is not appropriate.
            </p>
          </>
        ),
      },
      {
        title: "4.2 Charge Upon Physician Approval",
        content: (
          <p>
            Upon physician approval of your treatment plan, we will capture the pre-authorized amount from your payment method. By completing the intake and entering your payment information, you authorize ASR Health LLC to capture this charge upon physician approval. The amount charged will be the plan price you selected at checkout — no additional fees, no surprise charges. The full amount due is disclosed to you before you submit your payment information.
          </p>
        ),
      },
      {
        title: "4.3 Recurring Billing — Subscription Terms",
        content: (
          <>
            <p>
              <strong>Month-to-Month Plans:</strong> If you select a month-to-month plan, you will be billed automatically each month on your fulfillment date until you cancel. You may cancel your month-to-month plan at any time with at least 7 days' notice before your next scheduled fulfillment date. See Section 5 (Cancellation and Refunds) for cancellation instructions.
            </p>
            <p>
              <strong>Multi-Month Commitment Plans:</strong> If you select a 3-month or 6-month plan, you authorize a single upfront charge for the full commitment period at the per-month rate for that plan. Multi-month plans are prepaid committed treatment courses. See Section 5 for refund terms applicable to multi-month plans.
            </p>
            <p className="font-semibold">
              By selecting a plan and submitting your payment information, you expressly authorize the charges described above, including recurring charges for month-to-month plans. You may withdraw this authorization by canceling as described in Section 5.
            </p>
          </>
        ),
      },
      {
        title: "4.4 No Hidden Fees",
        content: (
          <p>
            The price displayed at checkout is the total price for your selected plan. There are no separate membership fees, enrollment fees, or dose-based price increases. Shipping costs, if any, are disclosed at checkout before you complete your purchase.
          </p>
        ),
      },
      {
        title: "4.5 Payment Method",
        content: (
          <p>
            Payments are processed by our third-party payment processor. By providing your payment information, you represent that you are authorized to use that payment method and authorize us to charge it as described in these Terms.
          </p>
        ),
      },
      {
        title: "4.6 Failed Payments",
        content: (
          <p>
            If a payment fails, we will notify you and attempt to contact you to update your payment information. We reserve the right to suspend services until payment is resolved.
          </p>
        ),
      },
    ],
  },
  {
    id: "5",
    title: "5. Cancellation and Refunds",
    subsections: [
      {
        title: "5.1 How to Cancel",
        content: (
          <>
            <p>
              To cancel your plan, contact us at:{" "}
              <a href="mailto:hello@joinsculptrx.com" className="text-primary underline underline-offset-2 font-semibold">hello@joinsculptrx.com</a>{" "}
              with your name and the email or phone number associated with your account. We will confirm your cancellation in writing. Cancellation is always available and will never require more than sending an email to the address above.
            </p>
            <p>
              We may offer alternatives before processing your cancellation — such as a plan pause or a care-team check-in — but these are offered as genuine options, not obstacles. You are never required to speak with anyone or navigate multiple steps to cancel.
            </p>
          </>
        ),
      },
      {
        title: "5.2 Month-to-Month Cancellation",
        content: (
          <p>
            You may cancel a month-to-month plan at any time with at least 7 days' notice before your next scheduled fulfillment date. Cancellation takes effect for upcoming charges only — it is not retroactive. If you cancel fewer than 7 days before your next fulfillment date, that order may already be in processing and the cancellation will take effect the following cycle.
          </p>
        ),
      },
      {
        title: "5.3 Multi-Month Plan Cancellation",
        content: (
          <p>
            Multi-month commitment plans are prepaid treatment courses offered at a reduced per-month rate in exchange for the commitment. The upfront charge for the committed period is non-refundable, except as provided in Section 5.5 (Medical Necessity Exception) or Section 5.6 (Damaged Shipments). You may cancel future auto-renewals of a multi-month plan at any time, which prevents the plan from renewing into a new commitment period.
          </p>
        ),
      },
      {
        title: "5.4 Denied Patients",
        content: (
          <p>
            If a physician determines that treatment is not appropriate for you, the pre-authorization hold is released and you are not charged. There is nothing to refund because no payment was captured.
          </p>
        ),
      },
      {
        title: "5.5 Medical Necessity Exception",
        content: (
          <p>
            If a SculptRx-affiliated physician determines that you should discontinue treatment for medical or safety reasons, any medication within your committed plan that has not yet been shipped will be refunded. Your health always comes first.
          </p>
        ),
      },
      {
        title: "5.6 Damaged Shipments",
        content: (
          <p>
            If your medication arrives damaged or compromised, contact us at{" "}
            <a href="mailto:hello@joinsculptrx.com" className="text-primary underline underline-offset-2">hello@joinsculptrx.com</a>{" "}
            within 24 hours of delivery with a photo of the damage. We will reship your prescription at no cost to you. Medication that arrives damaged is not subject to the non-refundable policy.
          </p>
        ),
      },
      {
        title: "5.7 Prescriptions Already Transmitted or Medication Already Shipped",
        content: (
          <>
            <p>
              Because compounded medications are prepared specifically for you,{" "}
              <strong>once a physician has approved your treatment and transmitted the prescription to the pharmacy, that prescription is non-refundable and non-cancellable.</strong>{" "}
              This applies whether or not the medication has physically shipped, because the pharmacy may have already begun compounding your personalized preparation at the time of transmission.
            </p>
            <p>
              Medication that has already shipped or been dispensed additionally cannot be returned, reused, or refunded under any circumstances. This is a legal and safety requirement applicable to all compounding pharmacies — compounded medications prepared for a specific patient cannot be returned to inventory or provided to another patient.
            </p>
            <p>
              To avoid being charged for a prescription you no longer want, cancellation requests must be received before a physician approves your treatment plan. Once physician approval is issued and the prescription is transmitted, the charge is captured and the prescription is non-refundable.
            </p>
          </>
        ),
      },
      {
        title: "5.8 Refund Processing",
        content: (
          <p>
            Approved refunds are processed to your original payment method within 5–10 business days. Your bank may take additional time to post the credit.
          </p>
        ),
      },
    ],
  },
  {
    id: "6",
    title: "6. Physician Consultation and Clinical Relationship",
    subsections: [
      {
        title: "6.1 Independent Physicians",
        content: (
          <p>
            Physician consultations are provided by independent licensed physicians through our clinical network. These physicians exercise independent clinical judgment and are not employees or agents of SculptRx or ASR Health LLC. SculptRx does not direct, supervise, or control the clinical decisions of any physician.
          </p>
        ),
      },
      {
        title: "6.2 Async Consultation",
        content: (
          <p>
            Consultations are conducted asynchronously — physicians review your submitted intake information rather than conducting a real-time video or phone visit. You will not speak with a physician directly during the initial consultation.
          </p>
        ),
      },
      {
        title: "6.3 Response Time",
        content: (
          <p>
            We aim to have a physician review completed within 24 hours of intake submission. This is a service commitment, not a guarantee of any specific clinical outcome. Response times may vary. If you have an urgent medical need, do not rely on SculptRx — seek in-person care immediately.
          </p>
        ),
      },
      {
        title: "6.4 Ongoing Care",
        content: (
          <p>
            After an initial prescription, your care team remains available to answer questions and provide support within the scope of the platform's telehealth services. Nothing in ongoing care communications constitutes a clinical consultation or replaces the need for in-person evaluation where clinically appropriate.
          </p>
        ),
      },
    ],
  },
  {
    id: "7",
    title: "7. Acceptable Use",
    content: (
      <p>
        You agree not to: (a) provide false or misleading information during intake or registration; (b) use the platform for any purpose other than accessing the telehealth services described herein; (c) attempt to obtain prescription medications through misrepresentation; (d) share your account with any other person; (e) use the platform in any manner that violates applicable law; or (f) interfere with or disrupt the platform's operation.
      </p>
    ),
  },
  {
    id: "8",
    title: "8. Intellectual Property",
    content: (
      <p>
        All content on joinsculptrx.com — including text, graphics, logos, and software — is the property of ASR Health LLC or its licensors and is protected by applicable intellectual property law. You may not reproduce, distribute, or create derivative works from any content on our platform without our express written consent.
      </p>
    ),
  },
  {
    id: "9",
    title: "9. Disclaimers",
    subsections: [
      {
        title: "9.1 No Medical Advice",
        content: (
          <p>
            SculptRx does not provide medical advice. Content on our platform is for informational purposes only and does not constitute medical advice, diagnosis, or treatment.
          </p>
        ),
      },
      {
        title: "9.2 No Warranty",
        content: (
          <p>
            Our services are provided "as is" and "as available" without warranty of any kind, express or implied. We do not warrant that the platform will be uninterrupted, error-free, or free of harmful components.
          </p>
        ),
      },
      {
        title: "9.3 Individual Results",
        content: (
          <p>
            Individual results from any medical treatment vary. SculptRx makes no representation about the average or typical results any user will achieve.
          </p>
        ),
      },
    ],
  },
  {
    id: "10",
    title: "10. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by applicable law, ASR Health LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claim arising from these Terms or your use of our services shall not exceed the amount you paid to SculptRx in the 90 days preceding the claim.
      </p>
    ),
  },
  {
    id: "11",
    title: "11. Indemnification",
    content: (
      <p>
        You agree to indemnify and hold harmless ASR Health LLC, its officers, members, employees, and agents from any claims, damages, or expenses (including reasonable attorneys' fees) arising from your violation of these Terms or your use of our services.
      </p>
    ),
  },
  {
    id: "12",
    title: "12. Governing Law and Dispute Resolution",
    content: (
      <p>
        These Terms are governed by the laws of the State of Florida, without regard to conflict-of-law principles.
      </p>
    ),
  },
  {
    id: "13",
    title: "13. Changes to These Terms",
    content: (
      <p>
        We may update these Terms from time to time. If we make material changes, we will update the "Last Updated" date above and, where appropriate, notify you directly. Your continued use of our services after the effective date of any changes constitutes your acceptance of the updated Terms.
      </p>
    ),
  },
  {
    id: "14",
    title: "14. Contact",
    content: (
      <div className="space-y-1">
        <p>ASR Health LLC d/b/a SculptRx</p>
        <p>
          Email:{" "}
          <a href="mailto:hello@joinsculptrx.com" className="text-primary underline underline-offset-2">
            hello@joinsculptrx.com
          </a>
        </p>
        <p>
          Website:{" "}
          <a href="https://joinsculptrx.com" className="text-primary underline underline-offset-2">
            joinsculptrx.com
          </a>
        </p>
        <p>Formation State: Florida</p>
      </div>
    ),
  },
];

export default function TermsOfService() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="font-serif text-lg font-semibold text-foreground">SculptRx</span>
        </div>
      </header>

      {/* Hero bar */}
      <div className="bg-[#46384b] text-white py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-2">Terms of Service</h1>
          <p className="text-white/70 text-sm">
            <span className="mr-4">Effective Date: June 23, 2026</span>
            <span>Last Updated: June 23, 2026</span>
          </p>
        </div>
      </div>

      {/* Legal entity callout */}
      <div className="bg-muted/60 border-b border-border/40 px-6 py-4">
        <div className="max-w-4xl mx-auto text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Legal Entity:</strong> ASR Health LLC, a Florida limited liability company, operating as SculptRx (registered DBA / fictitious name). All references to "SculptRx," "we," "us," and "our" refer collectively to ASR Health LLC d/b/a SculptRx.
          {" "}Contact:{" "}
          <a href="mailto:hello@joinsculptrx.com" className="text-primary underline underline-offset-2">hello@joinsculptrx.com</a>
        </div>
      </div>

      {/* Body */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="scroll-mt-20">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border/50">
                {section.title}
              </h2>

              {section.content && (
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {section.content}
                </div>
              )}

              {section.subsections && (
                <div className="space-y-6 mt-4">
                  {section.subsections.map((sub) => (
                    <div key={sub.title}>
                      <h3 className="font-semibold text-foreground text-sm mb-2">{sub.title}</h3>
                      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                        {sub.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back to top / CTA */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 ASR Health LLC d/b/a SculptRx. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </Button>
        </div>
      </main>
    </div>
  );
}
