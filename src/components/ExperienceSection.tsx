import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Data Science Intern',
    company: 'CodeTech IT Solutions',
    location: 'Online',
    period: 'Feb 2025 - Mar 2025',
    responsibilities: [
      'Applied data preprocessing, machine learning, and visualization to solve real-world business problems',
      'Built and evaluated classification & prediction models using scikit-learn',
      'Developed interactive dashboards for data-driven insights',
    ],
  },
  {
    title: 'DevOps Intern (Virtual)',
    company: 'NIELET-Eduskills',
    location: 'Online',
    period: 'Aug 2024 - Sept 2024',
    responsibilities: [
      'Implemented CI/CD pipelines using Jenkins & GitHub Actions',
      'Worked with Docker & AWS for containerization and cloud deployments',
      'Gained exposure to Kubernetes, version control (Git), and infrastructure monitoring',
    ],
  },
];

const certifications = [
  'IBM Data Science, Data Analysis with Python, Python 101 — Oct 2025',
  'Udemy Data Science — Aug to Oct 2024',
  'Generative AI Great Learning — May to Jun 2023',
  'Employability Skills Wadhwani Foundation — Nov 2024 to Feb 2025',
  'Yhills Power BI — Aug 2024',
  'Udemy Microsoft Excel — Apr 2025',
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in data science and DevOps through industry internships
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-[50%]' : 'md:pl-8 md:ml-[50%]'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-2 w-4 h-4 rounded-full gradient-bg border-4 border-background hidden md:block md:translate-x-1/2" 
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }}
                />

                <div className={`p-6 rounded-2xl bg-card shadow-card hover-lift ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                  <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className={`flex gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
