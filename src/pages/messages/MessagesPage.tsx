import React, { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

// Mock conversation data
const conversations = [
  {
    id: 1,
    contact: {
      id: 101,
      name: 'Dr. Jane Smith',
      role: 'doctor',
      avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
      status: 'online',
      lastSeen: null
    },
    lastMessage: {
      text: 'I\'ve attached your prescription. Let me know if you have any questions.',
      time: '10:32 AM',
      isRead: false,
      sender: 'contact'
    },
    unreadCount: 1
  },
  {
    id: 2,
    contact: {
      id: 102,
      name: 'Dr. Robert Chen',
      role: 'doctor',
      avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
      status: 'offline',
      lastSeen: '2 hours ago'
    },
    lastMessage: {
      text: 'Your test results look normal. We can discuss them in detail during your next appointment.',
      time: 'Yesterday',
      isRead: true,
      sender: 'contact'
    },
    unreadCount: 0
  },
  {
    id: 3,
    contact: {
      id: 103,
      name: 'John Doe',
      role: 'patient',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
      status: 'online',
      lastSeen: null
    },
    lastMessage: {
      text: 'Thank you for the detailed explanation, doctor. I appreciate your time.',
      time: 'Yesterday',
      isRead: true,
      sender: 'user'
    },
    unreadCount: 0
  },
  {
    id: 4,
    contact: {
      id: 104,
      name: 'Alice Johnson',
      role: 'patient',
      avatar: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
      status: 'offline',
      lastSeen: '1 day ago'
    },
    lastMessage: {
      text: 'When should I start taking the new medication?',
      time: 'Monday',
      isRead: true,
      sender: 'contact'
    },
    unreadCount: 0
  }
];

// Mock messages data for a selected conversation
const mockMessages = [
  {
    id: 1,
    text: 'Hello Dr. Smith, I have been experiencing some chest pain lately. Could we discuss this?',
    time: '10:20 AM',
    sender: 'user',
    status: 'read'
  },
  {
    id: 2,
    text: 'Hello, I\'m sorry to hear that. Could you describe the pain in more detail? When did it start and is it constant or intermittent?',
    time: '10:25 AM',
    sender: 'contact',
    status: 'read'
  },
  {
    id: 3,
    text: 'It started about 3 days ago. The pain is mostly on the left side and comes and goes. It gets worse when I take deep breaths.',
    time: '10:28 AM',
    sender: 'user',
    status: 'read'
  },
  {
    id: 4,
    text: 'Thank you for the details. Based on your description, we should investigate this further. I would recommend scheduling a video consultation so I can assess you better, and possibly order some tests.',
    time: '10:30 AM',
    sender: 'contact',
    status: 'read'
  },
  {
    id: 5,
    text: 'In the meantime, if the pain becomes severe or is accompanied by shortness of breath, dizziness, or sweating, please go to the emergency room immediately.',
    time: '10:31 AM',
    sender: 'contact',
    status: 'read'
  },
  {
    id: 6,
    text: 'I\'ve attached your prescription for a mild pain reliever. Let me know if you have any questions.',
    time: '10:32 AM',
    sender: 'contact',
    status: 'sent'
  }
];

const MessagesPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    // Here you would normally send the message to your backend
    // For demo purposes, we'll just clear the input
    setMessage('');
  };
  
  const filteredConversations = conversations.filter(
    conv => conv.contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-9rem)] flex overflow-hidden bg-white dark:bg-gray-900 rounded-lg shadow-sm">
        {/* Sidebar with conversations */}
        <div className="w-full sm:w-80 flex-shrink-0 border-r border-gray-200 dark:border-gray-700">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <Input
                type="text"
                placeholder="Search conversations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<Search size={18} className="text-gray-500 dark:text-gray-400" />}
                fullWidth
              />
            </div>
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`cursor-pointer p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                      selectedConversation.id === conversation.id ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={conversation.contact.avatar}
                          alt={conversation.contact.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        {conversation.contact.status === 'online' && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></span>
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{conversation.contact.name}</p>
                          <p className="text-xs text-gray-500 dark: text-gray-400">{conversation.lastMessage.time}</p>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                            {conversation.lastMessage.sender === 'user' ? 'You: ' : ''}
                            {conversation.lastMessage.text}
                          </p>
                          {conversation.unreadCount > 0 && (
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-xs font-medium text-white">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500 dark:text-gray-400">No conversations found</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Main chat area */}
        <div className="hidden sm:flex flex-col flex-1">
          {selectedConversation ? (
            <>
              {/* Chat header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={selectedConversation.contact.avatar}
                    alt={selectedConversation.contact.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {selectedConversation.contact.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {selectedConversation.contact.status === 'online' 
                        ? 'Online' 
                        : `Last seen ${selectedConversation.contact.lastSeen}`
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Phone size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreVertical size={16} />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {mockMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                          msg.sender === 'user'
                            ? 'bg-blue-500 text-white rounded-br-none'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <div className={`text-xs mt-1 flex justify-end ${
                          msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {msg.time}
                          {msg.sender === 'user' && (
                            <span className="ml-1">
                              {msg.status === 'read' ? '✓✓' : '✓'}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Message input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                  <Button type="button" variant="outline" size="sm">
                    <Paperclip size={16} />
                  </Button>
                  <Input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                  />
                  <Button type="submit" size="sm">
                    <Send size={16} />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center p-6">
                <p className="text-gray-500 dark:text-gray-400 mb-2">Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile view: show a message to select a conversation */}
        <div className="flex flex-col flex-1 items-center justify-center sm:hidden">
          <p className="text-gray-500 dark:text-gray-400 text-center px-4">
            Select a conversation to view messages
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;