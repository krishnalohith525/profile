import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <div className="relative animate-fade-up opacity-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
              <img
                src={profilePhoto}
                alt="G Krishna Lohith - Data Science Enthusiast"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up opacity-0">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open to Opportunities
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up opacity-0 delay-100">
              Hi, I'm{' '}
              <span className="gradient-text">Krishna Lohith</span>
            </h1>

            {/* Role */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-4 animate-fade-up opacity-0 delay-200">
              Data Science Enthusiast & Python Developer
            </h2>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 animate-fade-up opacity-0 delay-300">
              Transforming data into actionable insights. B.Tech CSE student passionate about 
              machine learning, data analytics, and building impactful solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up opacity-0 delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="/resume-krishna-lohith.pdf" download="Krishna-Lohith-Resume.pdf">
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-up opacity-0 delay-500">
              <a
                href="https://github.com/krishnalohith525"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-lohith-g-01520b257"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:gkrishnalohith@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
