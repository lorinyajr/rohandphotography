import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/lovable-uploads/e6048072-402e-42bc-9e4a-acc6ef489a00.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">about me</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Description */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">
            A highly <span className="text-primary">collaborative and supportive</span> individual, coming together on every project to ensure our clients get the very best result.
          </h2>
          <p className="text-muted-foreground mb-12">
            Build the best product that creates the most value for our customers, use business to inspire and implement environmentally friendly solutions.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => window.location.href = 'mailto:pic@photography.com'}
          >
            <Mail className="mr-2" />
            pic@photography.com
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="w-full"
          >
            <Phone className="mr-2" />
            +254728251106
          </Button>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground">
            We strive to go above and beyond for our clients no matter the challenge. We aim to deliver our very best work every single day across our services.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center mb-16">
          <Button
            variant="outline"
            size="lg"
            className="gap-2"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Instagram />
            Follow on Instagram
          </Button>
        </div>

        {/* Testimonial */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <blockquote className="text-2xl font-medium mb-8">
            "Love Nature has an amazing team of hard working professionals. It has been a pleasure to meet them."
          </blockquote>
          
          <div className="flex flex-col items-center gap-4">
            <img 
              src="/lovable-uploads/c3563644-4630-4875-8976-9edd3727be25.png" 
              alt="Photographer"
              className="w-20 h-20 rounded-full object-cover"
            />
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.location.href = '/services'}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;