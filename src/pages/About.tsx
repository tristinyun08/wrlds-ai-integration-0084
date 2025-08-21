
import EleosNavbar from '@/components/EleosNavbar';
import EleosAbout from '@/components/EleosAbout';
import EleosFooter from '@/components/EleosFooter';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-background w-full max-w-[100vw] overflow-x-hidden">
      <SEO 
        title="About - Eleos Marketing Group" 
        description="Learn about Eleos Marketing Group's mission to empower nonprofits and businesses with no-cost marketing expertise."
        keywords={['about us', 'mission', 'vision', 'marketing agency', 'nonprofit marketing']}
      />
      <EleosNavbar />
      <div className="pt-20 pb-8">
        <EleosAbout />
      </div>
      <EleosFooter />
    </div>
  );
};

export default About;
