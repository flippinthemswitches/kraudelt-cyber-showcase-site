
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background relative binary-bg">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="cyber-text-gradient">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-blue mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a security challenge or interested in services? Reach out for a consultation
            or to discuss how we can help secure your digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyber-blue/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:contact@kraudelt.com" className="text-lg hover:text-cyber-blue transition-colors">
                      contact@kraudelt.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-blue/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-lg hover:text-cyber-blue transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-blue/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-lg">Remote & On-site Services Available</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-blue/10 p-3 rounded-lg mr-4">
                    <ExternalLink className="h-6 w-6 text-cyber-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Website</p>
                    <a href="https://kraudelt.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-cyber-blue transition-colors">
                      kraudelt.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold mb-4">Security Emergency?</h3>
              <p className="text-muted-foreground mb-6">
                For urgent security incidents requiring immediate assistance, please use our priority response line.
              </p>
              <Button className="w-full bg-cyber-blue hover:bg-cyber-lightBlue text-white">
                Priority Response Line
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-secondary/50 border-cyber-blue/20 focus:border-cyber-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-secondary/50 border-cyber-blue/20 focus:border-cyber-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  className="bg-secondary/50 border-cyber-blue/20 focus:border-cyber-blue"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Please provide details about your inquiry..." 
                  className="bg-secondary/50 border-cyber-blue/20 focus:border-cyber-blue resize-none min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-cyber-blue hover:bg-cyber-lightBlue text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
