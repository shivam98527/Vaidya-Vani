import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Search, MessageSquare, ShieldCheck, UserCheck } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';
import Button from '../../components/ui/Button';
import Card, { CardContent } from '../../components/ui/Card';

const HomePage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      content: "Vaidhya Vani has transformed how I manage my healthcare. The video consultations are so convenient, and I love having all my medical records in one place.",
      name: "Sarah Johnson",
      role: "Patient",
      avatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    },
    {
      id: 2,
      content: "As a physician, I've found Vaidhya Vani to be invaluable. The platform makes it easy to connect with patients remotely and maintain quality care outside traditional office visits.",
      name: "Dr. Robert Chen",
      role: "Cardiologist",
      avatar: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    },
    {
      id: 3,
      content: "The appointment scheduling system is seamless, and the reminders ensure I never miss a consultation. Vaidhya Vani has made managing my family's healthcare so much easier.",
      name: "Michael Garcia",
      role: "Patient",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150",
    },
  ];

  const features = [
    {
      id: 1,
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      title: "Easy Scheduling",
      description: "Book appointments with doctors in just a few clicks. Manage your healthcare schedule effortlessly.",
    },
    {
      id: 2,
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      title: "Secure Messaging",
      description: "Communicate directly with your healthcare providers through our encrypted messaging system.",
    },
    {
      id: 3,
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "24/7 Access",
      description: "Access your medical records, appointments, and messages anytime, anywhere.",
    },
    {
      id: 4,
      icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
      title: "Privacy First",
      description: "Your data is protected with bank-level security and HIPAA-compliant systems.",
    },
    {
      id: 5,
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: "Find Specialists",
      description: "Search and connect with specialists across various medical fields.",
    },
    {
      id: 6,
      icon: <UserCheck className="h-8 w-8 text-blue-500" />,
      title: "Verified Doctors",
      description: "All healthcare providers on our platform are verified and credentialed.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Healthcare at your fingertips
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-3xl">
                Connect with top healthcare professionals from the comfort of your home. Quality care is just a click away.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    Get Started
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                    Find Doctors
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Doctor with patient" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 transform -skew-y-2 translate-y-8"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our platform offers everything you need for a complete virtual healthcare experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.id} className="text-center p-6 transition-all hover:shadow-lg">
                <CardContent>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get started with Vaidhya Vani in just a few simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-0 -ml-4 mt-2 hidden md:block">
                <div className="h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">1</div>
              </div>
              <Card className="h-full md:pl-8">
                <CardContent className="p-6">
                  <div className="md:hidden mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">1</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Create Your Account
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sign up in minutes. Fill in your information and create a secure profile to access our healthcare services.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 left-0 -ml-4 mt-2 hidden md:block">
                <div className="h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">2</div>
              </div>
              <Card className="h-full md:pl-8">
                <CardContent className="p-6">
                  <div className="md:hidden mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">2</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Find Your Doctor
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Browse through our directory of qualified healthcare professionals and select a specialist based on your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 left-0 -ml-4 mt-2 hidden md:block">
                <div className="h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">3</div>
              </div>
              <Card className="h-full md:pl-8">
                <CardContent className="p-6">
                  <div className="md:hidden mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">3</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Book & Connect
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Schedule an appointment and connect via secure video consultation. Receive personalized care from anywhere.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/register">
              <Button size="lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              What Our Users Say
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Thousands of patients and doctors trust Vaidhya Vani for their healthcare needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to transform your healthcare experience?
              </h2>
              <p className="mt-4 text-xl text-blue-100 max-w-3xl">
                Join thousands of patients and doctors who are already using Vaidhya Vani to revolutionize their healthcare journey.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-4">Benefits at a Glance</h3>
                <ul className="space-y-4">
                  {[
                    "24/7 access to healthcare professionals",
                    "Secure video consultations from anywhere",
                    "Easy appointment scheduling and reminders",
                    "Secure messaging with your healthcare team",
                    "Digital prescriptions and referrals",
                    "Complete medical history at your fingertips"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-blue-100">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;