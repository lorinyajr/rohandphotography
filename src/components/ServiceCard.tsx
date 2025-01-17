import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="service-card">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        className="w-full bg-primary hover:bg-primary/90"
        onClick={scrollToServices}
      >
        Book Now
      </Button>
    </div>
  );
};

export default ServiceCard;