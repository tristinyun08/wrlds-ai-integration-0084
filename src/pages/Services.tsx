import EleosNavbar from '@/components/EleosNavbar';
import EleosServices from '@/components/EleosServices';
import EleosTestimonials from '@/components/EleosTestimonials';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';

const Services = () => {
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="Services - Eleos Marketing Group" 
        description="Discover our comprehensive marketing services including digital marketing, web design, and strategic consulting - all at no cost."
        keywords={['marketing services', 'digital marketing', 'web design', 'social media', 'consulting', 'no cost']}
      />
      <EleosNavbar />
      <div className="pt-20 pb-8">
        <EleosServices />
        <EleosTestimonials />
      </div>
      <EleosFooter />
    </div>
  );
};

export default Services;
