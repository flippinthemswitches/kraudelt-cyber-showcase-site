
import { Card, CardContent } from "@/components/ui/card";
import { Badge, Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC2",
      date: "2020",
      id: "12345"
    },
    {
      name: "National Crisis Negotiator Certification & Certified Adjunct Professor",
      issuer: "FBI",
      date: "2018 & 2023",
      id: "67890"
    },
    {
      name: "Linux +, Security +, Network +, A+, Cloud +",
      issuer: "CompTIA",
      date: "2004 - 2021",
      id: "11223"
    },
    {
      name: "Continuous Monitoring (GMON), Security Operations (GSOC), Defensible Security Architecture (GDSA) & Cloud Threat Detection (GCTD)",
      issuer: "GIAC",
      date: "2022 - 2023",
      id: "33445"
    },
    {
      name: "Ethical Hacker & Cyber Threat Management",
      issuer: "Cisco",
      date: "2024 & 2025",
      id: "55667"
    },
    {
      name: "Artificial Intelligence Fundamental",
      issuer: "IBM",
      date: "2024",
      id: "77889"
    },
    {
      name: "Part 107 Drone Certification",
      issuer: "FAA",
      date: "2022",
      id: "99001"
    },
    {
      name: "Cloud Practitioner Certification",
      issuer: "Amazon Web Services",
      date: "2021",
      id: "11234"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Badge className="h-8 w-8 text-cyber-blue" />
          <h2 className="text-3xl font-bold">Professional Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.id} className="cyber-card">
              <CardContent className="p-6">
                <Badge className="h-6 w-6 text-cyber-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

