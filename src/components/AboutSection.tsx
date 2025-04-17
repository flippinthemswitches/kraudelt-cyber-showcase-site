
import { ShieldCheck, Briefcase, GraduationCap, Trophy } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card relative binary-bg">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="cyber-text-gradient">Anthony</span></h2>
          <div className="h-1 w-20 bg-cyber-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Anthony Kraudelt is a seasoned cybersecurity professional with over 15 years of experience
              in protecting critical infrastructure, implementing robust security frameworks, and advising
              organizations on best practices to mitigate digital threats.
            </p>
            
            <p className="text-lg leading-relaxed">
              With a strong background in information security, risk management, and compliance, Anthony has
              helped numerous organizations strengthen their security posture while balancing operational needs
              and business objectives.
            </p>

            <p className="text-lg leading-relaxed">
              His expertise spans across vulnerability assessment, penetration testing, security architecture,
              and strategic security planning, making him a versatile and valuable asset to any organization
              seeking to enhance their cybersecurity capabilities.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Network Security", "Threat Intelligence", "Security Architecture", "Risk Management", "Compliance", "Incident Response"].map(skill => (
                <span key={skill} className="px-4 py-2 bg-cyber-gray/30 border border-cyber-blue/20 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="cyber-card p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <ShieldCheck className="mb-4 h-10 w-10 text-cyber-blue" />
              <h3 className="text-xl font-semibold mb-2">Certified Expert</h3>
              <p className="text-muted-foreground">
                Holding top industry certifications including CISSP, CEH, and CISM, validating expert knowledge in cybersecurity.
              </p>
            </div>

            <div className="cyber-card p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <Briefcase className="mb-4 h-10 w-10 text-cyber-blue" />
              <h3 className="text-xl font-semibold mb-2">Industry Experience</h3>
              <p className="text-muted-foreground">
                15+ years working with enterprises, government agencies, and financial institutions on critical security initiatives.
              </p>
            </div>

            <div className="cyber-card p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <GraduationCap className="mb-4 h-10 w-10 text-cyber-blue" />
              <h3 className="text-xl font-semibold mb-2">Advanced Education</h3>
              <p className="text-muted-foreground">
                Master's degree in Cybersecurity and continuous professional development to stay ahead of emerging threats.
              </p>
            </div>

            <div className="cyber-card p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <Trophy className="mb-4 h-10 w-10 text-cyber-blue" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">
                Successfully prevented and mitigated numerous cyber attacks, saving organizations millions in potential damages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
