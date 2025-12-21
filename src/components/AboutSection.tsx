import { GraduationCap, Target, Code2, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Passionate about{' '}
              <span className="gradient-text">Data & Technology</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm G Krishna Lohith, a Computer Science student at Vardhaman College of Engineering (JNTUH) 
              with a strong foundation in Python, SQL, and Data Analytics. I specialize in data wrangling, 
              exploratory data analysis, and machine learning.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech has equipped me with hands-on experience in building predictive models, 
              creating interactive dashboards, and implementing CI/CD pipelines. I'm eager to contribute 
              to impactful projects and grow as a data professional.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-card shadow-card">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card shadow-card">
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-muted-foreground mt-1">Internships</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card shadow-card">
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-sm text-muted-foreground mt-1">Certifications</div>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card shadow-card hover-lift">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">
                B.Tech in Computer Science & Engineering from JNTUH (2022-2026). 
                Strong academic foundation with focus on DSA, DBMS, and OOP.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card hover-lift">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Focus</h3>
              <p className="text-muted-foreground">
                Specialized in Python, Data Science, and Machine Learning. 
                Experienced with Pandas, NumPy, scikit-learn, and Power BI.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card shadow-card hover-lift">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Goal</h3>
              <p className="text-muted-foreground">
                Aspiring to become a Data Scientist, applying data-driven 
                decision-making to solve real-world business problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
