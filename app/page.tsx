import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { PdfPreviewCards } from "@/components/pdf-preview-card"
import { EmailCaptureForm } from "@/components/email-capture-form"
import { TrustBadges } from "@/components/trust-badges"
import { FaqSection } from "@/components/faq-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen landing-page dark">
      <main className="container mx-auto px-4 py-5 md:py-8">
        <HeroSection />
        <PdfPreviewCards />
        <FeaturesGrid />
        <EmailCaptureForm />
        <TrustBadges />
        <FaqSection />
      </main>
    </div>
  )
}

