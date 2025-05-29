import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Stethoscope, Video, Pill, FileText, Heart, Brain } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Stethoscope className="w-12 h-12 text-orange-600" />,
      title: 'General Consultation',
      description: 'Connect with experienced doctors for routine check-ups and general health concerns.',
      features: [
        'Same-day appointments',
        'Choice of language',
        'Follow-up consultation',
        'Digital prescriptions'
      ]
    },
    {
      icon: <Video className="w-12 h-12 text-orange-600" />,
      title: 'Video Consultation',
      description: 'Consult with specialists from the comfort of your home through secure video calls.',
      features: [
        'HD video quality',
        'End-to-end encryption',
        'Screen sharing',
        'Multi-party calls'
      ]
    },
    {
      icon: <Pill className="w-12 h-12 text-orange-600" />,
      title: 'Ayurvedic Treatment',
      description: 'Access traditional Indian healing methods with certified Ayurvedic practitioners.',
      features: [
        'Personalized treatment plans',
        'Herbal medicine consultation',
        'Diet recommendations',
        'Lifestyle guidance'
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-600" />,
      title: 'Health Records',
      description: 'Securely store and access your medical records, prescriptions, and test results.',
      features: [
        'Digital storage',
        'Easy sharing',
        'Automatic updates',
        'Lifetime access'
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: 'Preventive Care',
      description: 'Comprehensive health check-ups and preventive care programs.',
      features: [
        'Regular health monitoring',
        'Customized programs',
        'Risk assessment',
        'Wellness tracking'
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-orange-600" />,
      title: 'Mental Health',
      description: 'Professional counseling and mental health support services.',
      features: [
        'Confidential sessions',
        'Expert therapists',
        'Stress management',
        'Regular follow-ups'
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive healthcare solutions combining traditional wisdom with modern technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Vaidhya Vani?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Experience healthcare that combines the best of traditional and modern medicine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Verified Doctors</h3>
                <p className="text-gray-600 dark:text-gray-300">All our doctors are verified and highly qualified</p>
              </div>

              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-300">Round-the-clock medical assistance</p>
              </div>

              <div className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Affordable Rates</h3>
                <p className="text-gray-600 dark:text-gray-300">Quality healthcare at reasonable prices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;