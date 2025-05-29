import React, { useState } from 'react';
import { Calendar as CalendarIcon, Filter, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card, { CardContent, CardHeader } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

// Mock appointment data
const appointmentsData = [
  {
    id: 1,
    date: '2025-03-15',
    time: '10:00 AM',
    patient: 'John Doe',
    doctor: 'Dr. Jane Smith',
    specialty: 'Cardiology',
    type: 'Video Consultation',
    status: 'Upcoming',
    notes: 'Follow-up on recent test results'
  },
  {
    id: 2,
    date: '2025-03-18',
    time: '2:30 PM',
    patient: 'Alice Johnson',
    doctor: 'Dr. Jane Smith',
    specialty: 'Cardiology',
    type: 'Follow-up',
    status: 'Upcoming',
    notes: 'Medication review'
  },
  {
    id: 3,
    date: '2025-03-10',
    time: '9:00 AM',
    patient: 'Michael Brown',
    doctor: 'Dr. Robert Chen',
    specialty: 'Dermatology',
    type: 'New Patient',
    status: 'Completed',
    notes: 'Skin condition assessment'
  },
  {
    id: 4,
    date: '2025-03-12',
    time: '11:15 AM',
    patient: 'Sarah Miller',
    doctor: 'Dr. Maria Garcia',
    specialty: 'Pediatrics',
    type: 'Annual Check-up',
    status: 'Completed',
    notes: 'Routine physical examination'
  },
  {
    id: 5,
    date: '2025-03-25',
    time: '3:45 PM',
    patient: 'James Wilson',
    doctor: 'Dr. Jane Smith',
    specialty: 'Cardiology',
    type: 'Video Consultation',
    status: 'Upcoming',
    notes: 'Heart palpitations discussion'
  }
];

const AppointmentsPage: React.FC = () => {
  const { user } = useAuth();
  const isDoctor = user?.role === 'doctor';
  
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Filter appointments based on the selected filter
  const filteredAppointments = appointmentsData.filter(appointment => {
    if (filter === 'all') return true;
    return appointment.status.toLowerCase() === filter.toLowerCase();
  });
  
  // Generate days for the calendar view
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };
  
  const getAppointmentsForDay = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];
    
    return appointmentsData.filter(appointment => appointment.date === dateString);
  };
  
  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Appointments</h1>
            <p className="text-gray-600 dark:text-gray-300">
              {isDoctor ? 'Manage your appointments with patients' : 'Manage your healthcare appointments'}
            </p>
          </div>
          
          <div className="flex space-x-3">
            <Button 
              variant={view === 'list' ? 'primary' : 'outline'} 
              onClick={() => setView('list')}
            >
              List View
            </Button>
            <Button 
              variant={view === 'calendar' ? 'primary' : 'outline'} 
              onClick={() => setView('calendar')}
            >
              <CalendarIcon size={16} className="mr-2" />
              Calendar
            </Button>
            <Button>
              <Plus size={16} className="mr-2" />
              New Appointment
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={filter === 'all' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800' : ''}
                  onClick={() => setFilter('all')}
                >
                  All
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={filter === 'upcoming' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800' : ''}
                  onClick={() => setFilter('upcoming')}
                >
                  Upcoming
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={filter === 'completed' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800' : ''}
                  onClick={() => setFilter('completed')}
                >
                  Completed
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter size={16} className="mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            {view === 'list' ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {isDoctor ? 'Patient' : 'Doctor'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Notes</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredAppointments.map((appointment) => (
                      <tr key={appointment.id} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          <div>{new Date(appointment.date).toLocaleDateString()}</div>
                          <div className="text-gray-500 dark:text-gray-400">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          <div>{isDoctor ? appointment.patient : appointment.doctor}</div>
                          {!isDoctor && (
                            <div className="text-gray-500 dark:text-gray-400 text-xs">{appointment.specialty}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          {appointment.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            appointment.status === 'Upcoming' 
                              ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200' 
                              : 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                          }`}>
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">
                          {appointment.notes}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">Details</Button>
                            {appointment.status === 'Upcoming' && (
                              <>
                                {appointment.type === 'Video Consultation' && (
                                  <Button size="sm">Join</Button>
                                )}
                                <Button variant="outline" size="sm" className="text-red-600 dark:text-red-400 border-red-200 dark:border-red-900 hover:bg-red-50 dark:hover:bg-red-900/20">Cancel</Button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {filteredAppointments.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">No appointments found.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={handlePrevMonth}>
                      <ChevronLeft size={16} />
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleNextMonth}>
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-medium text-gray-500 dark:text-gray-400 text-sm py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {generateCalendarDays().map((day, index) => {
                    if (day === null) {
                      return <div key={`empty-${index}`} className="h-28 bg-gray-50 dark:bg-gray-800 rounded-md"></div>;
                    }
                    
                    const appointments = getAppointmentsForDay(day);
                    const isToday = new Date().getDate() === day && 
                                  new Date().getMonth() === currentMonth.getMonth() && 
                                  new Date().getFullYear() === currentMonth.getFullYear();
                    
                    return (
                      <div 
                        key={`day-${day}`} 
                        className={`h-28 border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden ${
                          isToday ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800' : 'bg-white dark:bg-gray-900'
                        }`}
                      >
                        <div className={`text-right p-1 ${
                          isToday ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {day}
                        </div>
                        <div className="p-1 overflow-y-auto max-h-20">
                          {appointments.map((appointment) => (
                            <div 
                              key={appointment.id} 
                              className={`text-xs p-1 mb-1 rounded truncate ${
                                appointment.status === 'Upcoming' 
                                  ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200' 
                                  : 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                              }`}
                            >
                              {appointment.time} - {isDoctor ? appointment.patient : appointment.doctor}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AppointmentsPage;