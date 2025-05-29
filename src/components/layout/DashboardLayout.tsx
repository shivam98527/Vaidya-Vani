import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  Users, 
  MessageSquare, 
  FileText, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  Bell, 
  User, 
  Menu, 
  X,
  LogOut,
  ChevronDown,
  Moon,
  Sun
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = user?.role === 'doctor' ? [
    { name: 'Dashboard', icon: <Home size={20} />, href: '/dashboard' },
    { name: 'Appointments', icon: <Calendar size={20} />, href: '/appointments' },
    { name: 'My Patients', icon: <Users size={20} />, href: '/patients' },
    { name: 'Messages', icon: <MessageSquare size={20} />, href: '/messages' },
    { name: 'Medical Records', icon: <FileText size={20} />, href: '/records' },
    { name: 'Payments', icon: <CreditCard size={20} />, href: '/payments' },
  ] : [
    { name: 'Dashboard', icon: <Home size={20} />, href: '/dashboard' },
    { name: 'Appointments', icon: <Calendar size={20} />, href: '/appointments' },
    { name: 'Find Doctors', icon: <Users size={20} />, href: '/doctors' },
    { name: 'Messages', icon: <MessageSquare size={20} />, href: '/messages' },
    { name: 'My Health', icon: <FileText size={20} />, href: '/health' },
    { name: 'Billing', icon: <CreditCard size={20} />, href: '/billing' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ease-in-out duration-300 z-40 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setSidebarOpen(false)}></div>
        
        <div className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 transition-all ease-in-out duration-300 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">MediConnect</Link>
            <button
              className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X size={24} />
            </button>
          </div>
          <div className="overflow-y-auto h-full pb-4">
            <div className="px-4 py-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <img
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=random`}
                  alt={`${user?.name}'s avatar`}
                  className="h-10 w-10 rounded-full bg-gray-300"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user?.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user?.role}</p>
                </div>
              </div>
            </div>
            <nav className="mt-4 px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto px-4 py-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleTheme}
                className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 w-full"
              >
                {theme === 'dark' ? <Sun size={20} className="mr-3" /> : <Moon size={20} className="mr-3" />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center px-2 py-2 mt-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 w-full"
              >
                <LogOut size={20} className="mr-3" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-64 lg:border-r lg:border-gray-200 lg:dark:border-gray-700 lg:bg-white lg:dark:bg-gray-800">
        <div className="h-16 flex items-center justify-center px-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">MediConnect</Link>
        </div>
        <div className="flex flex-col flex-grow overflow-y-auto">
          <div className="px-4 py-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=random`}
                alt={`${user?.name}'s avatar`}
                className="h-10 w-10 rounded-full bg-gray-300"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user?.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user?.role}</p>
              </div>
            </div>
          </div>
          <nav className="mt-4 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleTheme}
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 w-full"
            >
              {theme === 'dark' ? <Sun size={20} className="mr-3" /> : <Moon size={20} className="mr-3" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center px-2 py-2 mt-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 w-full"
            >
              <LogOut size={20} className="mr-3" />
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors">
          <div className="h-16 px-4 flex items-center justify-between">
            <button
              className="lg:hidden text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu size={24} />
            </button>
            <div className="flex-1 lg:ml-4">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 hidden lg:block">
                {navItems.find(item => item.href === location.pathname)?.name || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 relative">
                <span className="sr-only">View notifications</span>
                <Bell size={20} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800"></span>
              </button>
              <div className="ml-4 relative">
                <div className="flex text-sm border-2 border-transparent focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                  <button className="flex items-center">
                    <img
                      src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=random`}
                      alt={`${user?.name}'s avatar`}
                      className="h-8 w-8 rounded-full bg-gray-300 hidden lg:block"
                    />
                    <ChevronDown size={16} className="ml-1 text-gray-400 dark:text-gray-300 hidden lg:block" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900 transition-colors">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;