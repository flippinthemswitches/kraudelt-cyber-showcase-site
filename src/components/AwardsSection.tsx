
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      title: "Cybersecurity Excellence Award",
      organization: "Global Security Alliance",
      year: "2023",
      description: "Recognition for outstanding contributions to network security"
    },
    {
      title: "Security Innovation Award",
      organization: "Tech Security Forum",
      year: "2022",
      description: "For developing novel security protocols"
    },
    {
      title: "Distinguished Security Professional",
      organization: "CyberSec Institute",
      year: "2021",
      description: "Excellence in security leadership and innovation"
    }
  ];

  return (
    <section id="awards" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Trophy className="h-8 w-8 text-cyber-blue" />
          <h2 className="text-3xl font-bold">Awards & Honors</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="cyber-card">
              <CardContent className="p-6">
                <Trophy className="h-6 w-6 text-cyber-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-lg text-muted-foreground mb-1">{award.organization}</p>
                <p className="text-sm text-muted-foreground mb-4">{award.year}</p>
                <p className="text-muted-foreground">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
