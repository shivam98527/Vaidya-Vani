import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Star } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card, { CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

// Mock doctors data
const doctorsData = [
  {
    id: 1,
    name: 'Dr. Jane Smith',
    specialty: 'Cardiology',
    experience: '15 years',
    rating: 4.9,
    reviews: 142,
    location: 'New York, NY',
    education: 'Harvard Medical School',
    languages: ['English', 'Spanish'],
    availability: ['Mon', 'Wed', 'Fri'],
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
  },
  {
    id: 2,
    name: 'Dr. Robert Chen',
    specialty: 'Dermatology',
    experience: '12 years',
    rating: 4.8,
    reviews: 98,
    location: 'San Francisco, CA',
    education: 'Stanford University',
    languages: ['English', 'Mandarin'],
    availability: ['Tue', 'Thu', 'Sat'],
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
  },
  {
    id: 3,
    name: 'Dr. Maria Garcia',
    specialty: 'Pediatrics',
    experience: '10 years',
    rating: 4.7,
    reviews: 115,
    location: 'Chicago, IL',
    education: 'University of Chicago',
    languages: ['English', 'Spanish'],
    availability: ['Mon', 'Tue', 'Thu'],
    image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Neurology',
    experience: '18 years',
    rating: 4.9,
    reviews: 165,
    location: 'Boston, MA',
    education: 'Johns Hopkins University',
    languages: ['English'],
    availability: ['Wed', 'Thu', 'Fri'],
    image: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
  },
  {
    id: 5,
    name: 'Dr. Emily Johnson',
    specialty: 'Psychiatry',
    experience: '8 years',
    rating: 4.6,
    reviews: 87,
    location: 'Seattle, WA',
    education: 'University of Washington',
    languages: ['English', 'French'],
    availability: ['Mon', 'Wed', 'Fri'],
    image: 'https://images.pexels.com/photos/5214987/pexels-photo-5214987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
  },
  {
    id: 6,
    name: 'Dr. Michael Lee',
    specialty: 'Orthopedics',
    experience: '14 years',
    rating: 4.8,
    reviews: 124,
    location: 'Los Angeles, CA',
    education: 'UCLA',
    languages: ['English', 'Korean'],
    availability: ['Tue', 'Thu', 'Sat'],
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150'
  }
];

// Specialty options
const specialties = [
  'All Specialties',
  'Cardiology',
  'Dermatology',
  'Pediatrics',
  'Neurology',
  'Psychiatry',
  'Orthopedics',
  'Ophthalmology',
  'Gynecology',
  'Urology'
];

const DoctorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const filtered = doctorsData.filter(doctor => {
      const matchesSearch = searchTerm === '' || 
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesSpecialty = selectedSpecialty === 'All Specialties' || 
        doctor.specialty === selectedSpecialty;
        
      return matchesSearch && matchesSpecialty;
    });
    
    setFilteredDoctors(filtered);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Find Doctors</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with top healthcare professionals for your telehealth needs
          </p>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <Input
                  type="text"
                  placeholder="Search by name, specialty or location"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  leftIcon={<Search size={18} className="text-gray-500 dark:text-gray-400" />}
                  fullWidth
                />
              </div>
              
              <div className="md:col-span-4">
                <select
                  className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="md:col-span-3 flex space-x-2">
                <Button type="submit" fullWidth>
                  Search
                </Button>
                <Button type="button" variant="outline" className="hidden md:flex">
                  <Filter size={18} className="mr-2" />
                  Filters
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 flex-shrink-0">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="h-48 md:h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{doctor.name}</h3>
                          <p className="text-blue-600 dark:text-blue-400">{doctor.specialty}</p>
                        </div>
                        <div className="flex items-center">
                          <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                          <span className="font-medium text-gray-900 dark:text-white">{doctor.rating}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">({doctor.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <MapPin size={16} className="mr-2" />
                          {doctor.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Calendar size={16} className="mr-2" />
                          Available: {doctor.availability.join(', ')}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          <span className="font-medium">Languages:</span> {doctor.languages.join(', ')}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          <span className="font-medium">Experience:</span> {doctor.experience}
                        </div>
                      </div>
                      
                      <div className="mt-6 flex space-x-3">
                        <Button fullWidth>Book Appointment</Button>
                        <Button variant="outline" fullWidth>View Profile</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No doctors found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('All Specialties');
                setFilteredDoctors(doctorsData);
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorsPage;