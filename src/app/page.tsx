/**
 * Home page - Main landing page for Gotchu.
 * @author Tristan Mahinay
 */
import {
  Header,
  HeroSection,
  ServicesSection,
  HowItWorks,
  TrustSection,
  DownloadCTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <HowItWorks />
        <TrustSection />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
