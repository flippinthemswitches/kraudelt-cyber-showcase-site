import { 
  ShieldAlert, 
  FileSearch, 
  Users, 
  HardDrive, 
  Lock, 
  BookOpen 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <ShieldAlert className="h-12 w-12 text-cyber-blue" />,
      title: "Security Assessment",
      description: "Comprehensive evaluation of your security posture to identify vulnerabilities and provide actionable remediation strategies.",
    },
    {
      icon: <FileSearch className="h-12 w-12 text-cyber-blue" />,
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify exploitable vulnerabilities in your systems before malicious actors can discover them.",
    },
    {
      icon: <Users className="h-12 w-12 text-cyber-blue" />,
      title: "Security Awareness",
      description: "Training programs designed to educate your team on security best practices and create a security-conscious culture.",
    },
    {
      icon: <HardDrive className="h-12 w-12 text-cyber-blue" />,
      title: "Infrastructure Security",
      description: "Design and implementation of secure network architecture to protect your critical infrastructure from threats.",
    },
    {
      icon: <Lock className="h-12 w-12 text-cyber-blue" />,
      title: "Compliance & Governance",
      description: "Expert guidance on meeting regulatory requirements and implementing security governance frameworks.",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-cyber-blue" />,
      title: "Security Consulting",
      description: "Strategic security advice tailored to your business objectives and risk tolerance.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background relative binary-bg">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Security <span className="cyber-text-gradient">Services</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-blue mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity services designed to protect your assets, 
            minimize risks, and strengthen your overall security posture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="cyber-card p-8 flex flex-col items-center text-center group"
            >
              <div className="mb-6 bg-secondary/50 p-4 rounded-2xl group-hover:bg-cyber-blue/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyber-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
