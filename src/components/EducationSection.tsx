
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      institution: "University of Technology",
      year: "2020",
      description: "Specialized in Network Security and Cryptography"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      year: "2018",
      description: "Focus on Software Engineering and Information Security"
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="h-8 w-8 text-cyber-blue" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="cyber-card">
              <CardContent className="p-6">
                <GraduationCap className="h-6 w-6 text-cyber-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">Class of {edu.year}</p>
                <p className="mt-4 text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
