
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
              With experience working in information security, including almost two decades with the Federal Bureau of Investigation in the fields of investigative cybersecurity and risk assessment, I’ve excelled at triaging, investigating and securing high-tech systems emerging cyber threats.      
            </p>
            
            <p className="text-lg leading-relaxed">
               My training and experience have allowed me to stay on the cutting edge of technology; combating new threats and implementing successful techniques to mitigate and resolve complex cyber matters.
            </p>

            <p className="text-lg leading-relaxed">
              I believe in the importance of team building, the ability to foster a positive working environment and bringing out the best in the people around me. I’m a lifelong learner, with a goal of continuously improving myself and passing knowledge to colleagues and the communities I serve.
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
                Holding top industry certifications including those ISC2's CISSP, AWS, and GIAC, validating expert knowledge in cybersecurity.
              </p>
            </div>

            <div className="cyber-card p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <Briefcase className="mb-4 h-10 w-10 text-cyber-blue" />
              <h3 className="text-xl font-semibold mb-2">Industry Experience</h3>
              <p className="text-muted-foreground">
                25+ years working with enterprises, government agencies, and small to medium businees on critical security initiatives.
              </p>
            </div>

            <div className="cyber-card p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <GraduationCap className="mb-4 h-10 w-10 text-cyber-blue" />
              <h3 className="text-xl font-semibold mb-2">Advanced Education</h3>
              <p className="text-muted-foreground">
                Master's degree and advanced an graduate certificate in Cybersecurity, demonstrating continuous professional development to stay ahead of emerging threats.
              </p>
            </div>

            <div className="cyber-card p-6 hover:translate-y-[-5px] transition-transform duration-300">
              <Trophy className="mb-4 h-10 w-10 text-cyber-blue" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">
                Successfully identifying, prevented and mitigated numerous cyber attacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
