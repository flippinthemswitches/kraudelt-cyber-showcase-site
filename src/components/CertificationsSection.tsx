
import { Card, CardContent } from "@/components/ui/card";
import { Badge, Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      date: "2024",
      id: "12345"
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      id: "67890"
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2022",
      id: "11223"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Badge className="h-8 w-8 text-cyber-blue" />
          <h2 className="text-3xl font-bold">Professional Certifications</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
