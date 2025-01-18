import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/c411a8fa-4325-4d8c-9ef2-1bb3ac4d0656.png"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <Navbar />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Make All Your Events
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              memorable.
            </h2>
            <p className="text-xl text-white mb-8">
              The best way to preserve your memories.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={scrollToServices}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services-section" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Portrait Photography"
              description="Get amazing portraits in matter of minutes. Book 2 days prior. Starting from KSH 500"
              image="/lovable-uploads/4ad8d188-35e0-4ded-b713-5b494b6177b0.png"
            />
            <ServiceCard
              title="Event Photography"
              description="Capture your events in the most amazing way. Book before a week. Starting from KSH 500"
              image="/lovable-uploads/87814f94-1fb7-44de-adf5-70a702b60d9a.png"
            />
            <ServiceCard
              title="Videography"
              description="Your life and events as dreams. Top notch filmmaking for your budget. Starting from KSH 500"
              image="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Get photo mount at offer price
            </h2>
            <h3 className="text-2xl mb-8">for each booking</h3>
            <p className="text-gray-600 mb-8">
              Transform your cherished moments into stunning wall art with our professional photo mounting service. We use premium materials and expert techniques to preserve your photographs while creating beautiful displays for your home or office.
            </p>
            <p className="text-gray-600">
              Our photo mounting service includes various options from traditional matting to modern floating mounts, ensuring your photographs are displayed in the most captivating way. Each mount is crafted with precision to enhance the visual impact of your images while protecting them for years to come.
            </p>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/c8fea826-e164-4dcc-85ad-0798737d99bc.png"
              alt="Photo mounting example"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Portfolio</h2>
          {/* Portfolio grid will be added in future iterations */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View More
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">
            "With over a decade of experience capturing life's precious moments, we bring technical expertise and artistic vision to every shoot. From intimate portraits to grand events, we're dedicated to creating timeless photographs that tell your unique story. Choose us for our commitment to excellence, attention to detail, and passion for turning moments into lasting memories."
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/about">Find About me</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
