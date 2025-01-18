import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[300px] w-full bg-gradient-to-l from-primary/90 to-primary transition-all duration-500 ease-in-out">
        <div className="absolute inset-0 flex">
          {/* Right side with image */}
          <div className="w-1/2 md:w-1/3 lg:w-1/4 relative overflow-hidden ml-auto transition-all duration-500 ease-in-out">
            <img 
              src="/lovable-uploads/5cbdf8bd-6a01-4902-a916-42f635701415.png"
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/50 to-primary/90 transition-opacity duration-500 ease-in-out" />
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-white/90">
              Well Captured Excellence Moments of life
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Portrait Photography */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <img
            src="/lovable-uploads/4ad8d188-35e0-4ded-b713-5b494b6177b0.png"
            alt="Portrait Photography"
            className="rounded-lg w-full h-[500px] object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Portrait Photography</h2>
            <p className="text-gray-600 mb-4">
              Portrait photography, or portraiture, is a type of photography aimed toward capturing the personality of a person or group of people by using effective lighting, backdrops, and poses.
            </p>
            <p className="font-semibold mb-6">
              Location, lighting, composition, emotion and technical settings: When all of these elements are well executed, a great portrait is created.
            </p>
            <p className="text-xl font-bold mb-4">From KShs 500</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>

        {/* Event Photography */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="md:order-2">
            <img
              src="/lovable-uploads/87814f94-1fb7-44de-adf5-70a702b60d9a.png"
              alt="Event Photography"
              className="rounded-lg w-full h-[500px] object-cover"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-primary mb-4">Event Photography</h2>
            <p className="text-gray-600 mb-4">
              Event photography is the practice of photographing guests and occurrences at any event or occasion where one may hire a photographer for. This is something that is most common for social occasions such as weddings, christenings, parties, birthdays, formals, dances, ceremonies, award ceremonies, funerals, meals and engagements.
            </p>
            <p className="font-semibold mb-6">
              What is it? A digital record your customer will get from their happy moments with us.
            </p>
            <p className="text-xl font-bold mb-4">From KShs 500</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>

        {/* Videography */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <img
            src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&q=80"
            alt="Videography"
            className="rounded-lg w-full h-[500px] object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Videography</h2>
            <p className="text-gray-600 mb-4">
              Videograph or videography is a type of video record aimed toward capturing the personality of a person or group of people by using effective lighting, backdrops, and poses. A portrait & wedding video may be artistic or clinical.
            </p>
            <p className="font-semibold mb-6">
              Location, lighting, composition, emotion and technical settings: When all of these elements are well executed, a great video film is created.
            </p>
            <p className="text-xl font-bold mb-4">From KShs 500</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 rounded-lg p-12 mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Should You Hire Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">5 Year Experience</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">5 Star Rating</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Quick Turnaround</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Dedicated Support</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;