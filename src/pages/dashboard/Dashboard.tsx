import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MessageSquare, Clock, BarChart, Activity } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card, { CardContent, CardHeader } from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const isDoctor = user?.role === 'doctor';

  // Mock data
  const upcomingAppointments = [
    {
      id: 1,
      date: '2025-03-15',
      time: '10:00 AM',
      patient: 'John Doe',
      doctor: 'Dr. Jane Smith',
      type: 'Video Consultation',
      status: 'Confirmed'
    },
    {
      id: 2,
      date: '2025-03-18',
      time: '2:30 PM',
      patient: 'Alice Johnson',
      doctor: 'Dr. Jane Smith',
      type: 'Follow-up',
      status: 'Confirmed'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      sender: isDoctor ? 'John Doe' : 'Dr. Jane Smith',
      message: 'Thanks for the consultation yesterday. I\'ve attached the prescription.',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      sender: isDoctor ? 'Alice Johnson' : 'Dr. Robert Chen',
      message: 'Could you please reschedule our appointment for next week?',
      time: '1 day ago',
      unread: false
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                  <Calendar size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Upcoming</h3>
                  <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">{upcomingAppointments.length}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Appointments</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                  <MessageSquare size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">New</h3>
                  <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    {recentMessages.filter(msg => msg.unread).length}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                  <Users size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {isDoctor ? 'My' : 'Available'}
                  </h3>
                  <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    {isDoctor ? '12' : '24'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {isDoctor ? 'Patients' : 'Doctors'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300">
                  <Activity size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Health</h3>
                  <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Good</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Upcoming Appointments</h3>
                <Link to="/appointments">
                  <Button variant="outline" size="sm">View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {isDoctor ? 'Patient' : 'Doctor'}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {upcomingAppointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          <div>{new Date(appointment.date).toLocaleDateString()}</div>
                          <div className="text-gray-500 dark:text-gray-400">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          {isDoctor ? appointment.patient : appointment.doctor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                          {appointment.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            {appointment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link to={`/appointments/${appointment.id}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
                            Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Recent Messages</h3>
                  <Link to="/messages">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-2">
                <div className="space-y-4">
                  {recentMessages.map((message) => (
                    <div key={message.id} className={`flex items-start p-3 rounded-lg ${message.unread ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(message.sender)}&background=random`}
                        alt={message.sender}
                        className="h-10 w-10 rounded-full bg-gray-300"
                      />
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{message.sender}</h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{message.message}</p>
                      </div>
                      {message.unread && (
                        <span className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {isDoctor ? 'Weekly Appointments' : 'Health Overview'}
                </h3>
              </CardHeader>
              <CardContent className="px-6">
                {isDoctor ? (
                  <div className="relative h-60">
                    <div className="flex justify-between mb-2">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Monday</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Sunday</div>
                    </div>
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-1/7 px-1">
                        <div className="bg-blue-500 rounded-t h-24"></div>
                      </div>
                      <div className="w-1/7 px-1">
                        <div className="bg-blue-500 rounded-t h-36"></div>
                      </div>
                      <div className="w-1/7 px-1">
                        <div className="bg-blue-500 rounded-t h-20"></div>
                      </div>
                      <div className="w-1/7 px-1">
                        <div className="bg-blue-500 rounded-t h-40"></div>
                      </div>
                      <div className="w-1/7 px-1">
                        <div className="bg-blue-500 rounded-t h-32"></div>
                      </div>
                      <div className="w-1/7 px-1">
                        <div className="bg-blue-500 rounded-t h-12"></div>
                      </div>
                      <div className="w-1/7 px-1">
                        <div className="bg-blue-500 rounded-t h-8"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Heart Rate</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">72 BPM</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Blood Pressure</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">120/80</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sleep</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">7.5 hrs</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Steps</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">8,421</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader className="px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {isDoctor ? 'Upcoming Schedule' : 'Recommended Doctors'}
            </h3>
          </CardHeader>
          <CardContent className="px-6">
            {isDoctor ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((day) => (
                  <div key={day} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {new Date(Date.now() + day * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                    </div>
                    <div className="space-y-3">
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center">
                          <div className="flex-shrink-0 h-4 w-4 rounded-full bg-blue-500"></div>
                          <div className="ml-2">
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {`${9 + i * 2}:00 AM - ${11 + i * 2}:00 AM`}
                            </p>
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              Patient Consultation
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Dr. Jane Smith', specialty: 'Cardiologist', rating: 4.9 },
                  { name: 'Dr. Robert Chen', specialty: 'Dermatologist', rating: 4.8 },
                  { name: 'Dr. Maria Garcia', specialty: 'Pediatrician', rating: 4.7 }
                ].map((doctor, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=random`}
                        alt={doctor.name}
                        className="h-12 w-12 rounded-full bg-gray-300"
                      />
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{doctor.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{doctor.specialty}</p>
                        <div className="flex items-center mt-1">
                          <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs ml-1">{doctor.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" fullWidth>View Profile</Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;