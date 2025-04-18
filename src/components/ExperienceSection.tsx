
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "January 2006 - Present",
      title: "Special Agent",
      company: "Federal Bureau of Investigation (FBI)",
      description: "Throughout my career as a special agent I’ve consistently approached my role as one of service, rather than one of authority. That service has been acknowledged by my receipt of numerous awards to include the FBI Director's Medal of Excellence, DOJ’s Certificate for Outstanding Performance, consistent yearly high-performance appraisals and having been awarded "Officer of the Year" on two separate occasions by the Exchange Club of Saginaw.      My focus on complex, high-tech cyber threats has afforded me the ability to grow my understanding of emerging trends in the information technology field. Whether an assignment was requested or assigned, it has always been important to me that the work be done correctly. I approach new challenges as an opportunity to learn and build new skills.  Through the duration of both my professional and personal life, I've demonstrated a desire to improve my knowledge through formal educational opportunities, training courses and advanced industry certifications. My goal is to be a positive example to my colleagues, the public and most importantly my family.  I have advanced experience in incident response, threat management, and community relations. As a senior employee on my team, I’m entrusted to train and mentor employees on proper investigative techniques, as well as compliance with ever changing laws and regulations.     During my career I've been fortunate to serve in a position as a field agent, a principal and acting supervisor, crisis negotiator and digital forensics examiner; all of which have served to further the mission of my employer.",
    },
    {
      period: "January 2006 - January 20120",
      title: "Special Agent / Digital Forensic Examinert",
      company: "Federal Bureau of Investigation (FBI",
      description: "As an FBI Computer Analysis Response Team (C.A.R.T) digital forensic examiner, I conducted comprehensive forensic examinations of digital evidence, including computers, mobile devices, networks, and cloud-based services. My responsibilities included acquiring and analyzing digital data to identify and extract critical information such as user activity logs, deleted files, communication records, and multimedia files. I prepared detailed forensic reports and testified as an expert witness in court proceedings regarding digital evidence and methodologies. I also assisted in the execution of search warrants and conducted legal review of associative materials related to digital  evidence. Furthermore, I provided training and guidance to law enforcement personnel on digital evidence collection and handling procedures. Throughout my tenure, I maintained a strong understanding of current forensic techniques, tools, and legal standards while ensuring adherence to agency policies and procedures. While working as a digital forensic examiner I was recognized for my efficiency, technical ingenuity and the volume of work conducted which led to the successful criminal investigations.",
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
