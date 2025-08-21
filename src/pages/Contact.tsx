import EleosNavbar from '@/components/EleosNavbar';
import EleosContact from '@/components/EleosContact';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="Contact - Eleos Marketing Group" 
        description="Get in touch with Eleos Marketing Group to discuss your marketing needs and start your no-cost project."
        keywords={['contact us', 'get in touch', 'marketing consultation', 'free consultation', 'marketing agency']}
      />
      <EleosNavbar />
      <div className="pt-20 pb-8">
        <EleosContact />
      </div>
      <EleosFooter />
    </div>
  );
};

export default Contact;
