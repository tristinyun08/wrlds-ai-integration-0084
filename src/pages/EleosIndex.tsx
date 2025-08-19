import EleosNavbar from '@/components/EleosNavbar';
import EleosHero from '@/components/EleosHero';
import EleosAbout from '@/components/EleosAbout';
import EleosServices from '@/components/EleosServices';
import EleosTestimonials from '@/components/EleosTestimonials';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';

const EleosIndex = () => {
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="Eleos Marketing Group - Your Vision, Our Mission, No Fees" 
        description="Empower your nonprofit or business with our no-cost marketing expertise. Digital marketing, web design, and strategic consulting services."
        keywords={['marketing agency', 'nonprofit marketing', 'web design', 'social media', 'digital marketing', 'no cost marketing']}
      />
      <EleosNavbar />
      <EleosHero />
      <EleosAbout />
      <EleosServices />
      <EleosTestimonials />
      <EleosFooter />
    </div>
  );
};

export default EleosIndex;