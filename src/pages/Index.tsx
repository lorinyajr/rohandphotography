import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

const Index = () => {
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
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Portrait Photography"
              description="Get amazing portraits in matter of minutes. Book 2 days prior."
              image="https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              title="Event Photography"
              description="Capture your events in the most amazing way. Book before a week."
              image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
            />
            <ServiceCard
              title="Videography"
              description="Your life and events as dreams. Top notch filmmaking for your budget."
              image="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Get Album at offer price
          </h2>
          <h3 className="text-2xl mb-8">for each booking</h3>
          <p className="text-gray-600 mb-8">
            Because when a visitor first lands on your website, you're a stranger to them. They have to get to know you in order to want to trust your blog posts, subscribe to your email newsletter, or buy what you're selling.
          </p>
          <p className="text-gray-600">
            We are really amazed to provide you this offer and make your events memorable. You will be an amazing add-on to all your events. Your future generations will always have a piece of our every place in your heart.
          </p>
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
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            "Tell website visitors who you are and why they should choose your business"
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Find About me
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;