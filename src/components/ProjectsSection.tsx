import { Github, ExternalLink, Folder, BarChart2, FileText, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'IMDb Movies Dataset – EDA',
    description: 'Cleaned and analyzed 3,000+ movie records with advanced data wrangling. Implemented joins, groupby analysis, and visualizations to derive movie industry trends.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'EDA'],
    icon: BarChart2,
    date: 'August 2025',
    highlights: ['3,000+ records analyzed', 'Feature engineering', 'Trend visualization'],
  },
  {
    title: 'NLP-Based Resume Analysis',
    description: 'Automated resume parsing and keyword extraction using NLP. Built skill-gap analysis tool with course recommendations and job role prediction.',
    tech: ['Python', 'NLP', 'scikit-learn', 'ML'],
    icon: FileText,
    date: 'Jan-April 2025',
    highlights: ['Keyword extraction', 'Skill-gap analysis', 'Job prediction'],
  },
  {
    title: 'Database Product Launch Management',
    description: 'Designed and implemented database schema for product launches. Added validation queries, constraints, and performed data integrity checks.',
    tech: ['SQL', 'MySQL', 'Database Design'],
    icon: Database,
    date: 'September 2025',
    highlights: ['Data validation', 'Constraint enforcement', 'Integrity checks'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Folder className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world projects showcasing data analysis, machine learning, and database management skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group p-6 rounded-2xl bg-card shadow-card hover-lift flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon & Date */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">{project.date}</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mb-4 space-y-1">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="https://github.com/krishnalohith525" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button variant="default" size="sm" className="flex-1" asChild>
                  <a href="https://github.com/krishnalohith525" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/krishnalohith525" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
