import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bochum | CASANOVA BARBER SALON</title>
        <meta
          name="description"
          content="Besuchen Sie den CASANOVA BARBER SALON in Bochum für erstklassige Haarschnitte, Bartpflege und individuelles Styling. Jetzt Termin vereinbaren!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bochum, Casanova Barber"
        />
        <link rel="canonical" href="https://casanova-barber-bochum.de" />

        {/* Open Graph */}
        <meta property="og:title" content="CASANOVA BARBER SALON | Premium Barbershop Bochum" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Mann in Bochum."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://casanova-barber-bochum.de" />
        <meta property="og:image" content="https://casanova-barber-bochum.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CASANOVA BARBER SALON | Premium Barbershop Bochum" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und professionelle Bartpflege."
        />
        <meta name="twitter:image" content="https://casanova-barber-bochum.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "CASANOVA BARBER SALON",
            "image": "https://casanova-barber-bochum.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Westring 37",
              "addressLocality": "Bochum",
              "postalCode": "44787",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.4818",
              "longitude": "7.2162"
            },
            "url": "https://casanova-barber-bochum.de",
            "telephone": "+49 172 8034402",
            "openingHours": "Mo-Fr 09:30-19:30, Sa 09:30-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/casanavabarber",
              "https://www.instagram.com/casanavabarber"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

