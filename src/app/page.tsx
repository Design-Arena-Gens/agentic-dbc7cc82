import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { FeatureMatrix } from "@/components/FeatureMatrix";
import { Workflow } from "@/components/Workflow";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="relative pb-24">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <FeatureMatrix />
        <Workflow />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
