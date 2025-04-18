
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "January 2006 - Present",
      title: "Special Agent",
      company: "Federal Bureau of Investigation (FBI)",
      description: "I conducted investigations into violations of federal criminal law, with expertise in both criminal and national security investigaitons.",
    },
    {
      period: "January 2006 - January 20120",
      title: "Special Agent / Digital Forensic Examiner",
      company: "Federal Bureau of Investigation (FBI",
      description: "As an FBI Computer Analysis Response Team (C.A.R.T) digital forensic examiner, I conducted comprehensive forensic examinations which led to the successful criminal investigations.",
    },
    {
      period: "February 2005 - December 2005",
      title: "Network Security Specialist",
      company: "Thomson Gale",
      description: "As a system engineer for Thomson Gale, I was tasked with the maintenance and upgrade of Microsoft Windows servers and the consolidation of a traditional server infrastructure to a virtualized VMWare solution."
    },
    {
      period: "September 2004 - February 2005",
      title: "Microsoft Windows System Engineer",
      company: "Amorphous Network Security",
      description: "I founded Amorphous Network Security in 2004 specializing in the design and installation of secured computer networks. While leading Amorphous Network Security, I worked to enhance my network and computer security skills and increase my knowledge of Cisco based networks.",
    },
    {
      period: "July 2000 - December 200",
      title: "Network Engineer",
      company: "AlixPartners, LLC",
      description: "The job requirements included the design, implementation and securing of telephone systems, networks, end user devices and the company’s data center infrastructure. I led the design and technical build out of offices located in Germany, Italy and the United Kingdom.",
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
