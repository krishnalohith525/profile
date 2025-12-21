import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>G Krishna Lohith | Data Science Enthusiast & Python Developer</title>
        <meta
          name="description"
          content="Portfolio of G Krishna Lohith - B.Tech CSE student specializing in Data Science, Python, Machine Learning, and Data Analytics. Explore my projects and experience."
        />
        <meta
          name="keywords"
          content="Krishna Lohith, Data Science, Python Developer, Machine Learning, Portfolio, B.Tech CSE"
        />
        <meta property="og:title" content="G Krishna Lohith | Data Science Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of G Krishna Lohith - Data Science enthusiast and Python developer."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://krishnalohith.dev" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
