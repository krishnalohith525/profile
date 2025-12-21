import { Code, Database, BarChart3, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'C', 'SQL'],
  },
  {
    title: 'Libraries & Frameworks',
    icon: BarChart3,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'scikit-learn'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Power BI', 'MS Excel', 'Git', 'GitHub', 'Docker', 'AWS', 'Jenkins'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Code className="w-4 h-4" />
            Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, machine learning, and software development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card shadow-card hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-border">
          <h3 className="text-xl font-semibold mb-4 text-center">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Data Wrangling', 'EDA', 'Machine Learning', 'Data Visualization', 'CI/CD', 'Cloud Deployment', 'REST APIs', 'Problem Solving'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary hover:shadow-soft transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
