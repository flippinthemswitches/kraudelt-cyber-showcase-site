
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "2020 - Present",
      title: "Chief Information Security Officer",
      company: "TechSecure Solutions",
      description: "Lead the development and implementation of information security strategies to protect the organization's digital assets. Oversee a team of security professionals and manage the security operations center.",
    },
    {
      period: "2016 - 2020",
      title: "Security Architect",
      company: "Global Financial Systems",
      description: "Designed secure infrastructure for critical financial systems. Developed security frameworks and collaborated with development teams to implement secure-by-design principles.",
    },
    {
      period: "2012 - 2016",
      title: "Senior Security Analyst",
      company: "Cybershield Defense",
      description: "Conducted vulnerability assessments and penetration tests for enterprise clients. Led incident response activities and implemented security monitoring solutions.",
    },
    {
      period: "2008 - 2012",
      title: "Network Security Specialist",
      company: "DataGuard Inc.",
      description: "Managed network security infrastructure including firewalls, IDS/IPS, and VPNs. Performed security audits and recommended improvements to security posture.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card relative binary-bg">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="cyber-text-gradient">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-blue mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A track record of success across various cybersecurity roles and industries,
            always staying at the forefront of emerging threats and solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-cyber-blue/30 transform md:translate-x-[-1px]"></div>

          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-cyber-blue rounded-full transform md:translate-x-[-40%] mt-8 z-10 shadow-[0_0_10px_rgba(0,120,255,0.6)]"></div>
                  
                  {/* Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-10 md:pl-0`}>
                    <div className="cyber-card p-6 cyber-glow">
                      <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyber-blue/30 bg-cyber-blue/5 text-sm text-cyber-blue mb-4">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-cyber-lightBlue mb-1">{exp.title}</h3>
                      <div className="flex items-center mb-4">
                        <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">{exp.company}</span>
                      </div>
                      
                      <p className="text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
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
