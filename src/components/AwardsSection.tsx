
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      title: "Officer of the Year",
      organization: "Exchange Club of Saginaw",
      year: "2022 & 2015",
      description: "The Exchange Club of Saginaw acknowledges work done by members of law enforcement through their Officer of the Year award."
    },
    {
      title: "Citation of Special Achievement for Outstanding Performance",
      organization: "FBI",
      year: "2018",
      description: "Employees of the FBI who receive year over year outstanding performance reviews are acknowledged with the Citation of Special Achievement for Outstanding Performance."
    },
    {
      title: "Director’s Medal of Excellence",
      organization: "FBI",
      year: "2017",
      description: "This award offers the Director the opportunity to recognize FBI employees who make oustanding contributions to the community."
    }
      {
      title: "Certificate of Appreciation for Outstanding Performance",
      organization: "Department of Justice (DOJ)",
      year: "2014",
      description: "The Department of Justice uses the Certificate of Appreciation for Outstanding Performance to acknowledge those individuals whose work made significant impacts in criminal prosecutions."
    }
      {
      title: "Certificate for Superior Performance as a Digital Forensic Examinere",
      organization: "FBI",
      year: "2011",
      description: "This honor included an acknowledgement that I duplicated and forensically examined the highest volume of data of any examiner within the FBI."
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
