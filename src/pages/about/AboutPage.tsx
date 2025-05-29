import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

const AboutPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Vaidhya Vani</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Bridging the gap between traditional Ayurvedic wisdom and modern healthcare technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                At Vaidhya Vani, we are committed to making quality healthcare accessible to every Indian citizen through our innovative digital platform. We combine the ancient wisdom of Ayurveda with modern medical practices to provide holistic healthcare solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our platform connects you with experienced doctors who understand both traditional and modern medical approaches, ensuring you receive the best possible care for your unique needs.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg"
                alt="Indian doctor consulting patient"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Traditional Wisdom</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We honor and incorporate traditional Indian medical practices, including Ayurveda, Yoga, and natural remedies.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modern Technology</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform leverages cutting-edge technology to provide seamless telemedicine services and digital health records.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Holistic Care</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in treating not just symptoms but the whole person, focusing on prevention and overall wellness.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Trust</h3>
                <p className="text-gray-600 dark:text-gray-300">Building lasting relationships through transparency and reliability</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Compassion</h3>
                <p className="text-gray-600 dark:text-gray-300">Treating every patient with care and understanding</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">Continuously improving our services through technology</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">Maintaining the highest standards in healthcare delivery</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-100 dark:bg-orange-900/40 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Join Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Whether you're a healthcare provider or a patient, be part of our journey to revolutionize healthcare in India.
            </p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;