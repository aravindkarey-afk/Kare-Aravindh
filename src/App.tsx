import { useCallback, useState } from "react";
import { FloatingActions, Footer, Header } from "./components/Chrome";
import { About, Areas, Hero, WhyUs } from "./sections/HomeSections";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";
import { Faq, Reviews } from "./sections/FaqReviews";
import { Contact } from "./sections/Contact";

export default function App() {
  const [requestedService, setRequestedService] = useState("");

  const requestService = useCallback((service: string) => {
    setRequestedService(service);
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-xs focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services onRequest={requestService} />
        <WhyUs />
        <Gallery />
        <Areas />
        <Faq />
        <Reviews />
        <Contact initialService={requestedService} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
