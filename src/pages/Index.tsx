
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, Settings, BookOpen } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: 'student',
      title: 'Student Portal',
      description: 'Access your courses, grades, and academic information',
      icon: GraduationCap,
      route: '/student-dashboard',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      id: 'faculty',
      title: 'Faculty Panel',
      description: 'Manage classes, attendance, and student assessments',
      icon: BookOpen,
      route: '/faculty-panel',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'admin',
      title: 'Admin Interface',
      description: 'Manage users, courses, and system administration',
      icon: Settings,
      route: '/admin-interface',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  const handleRoleSelection = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">CampusConnect</h1>
                <p className="text-lg text-gray-600">University Management Portal</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to CampusConnect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive university management solution. Access academic information, 
            manage courses, and stay connected with your university community.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.id} 
                className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-blue-300"
                onClick={() => handleRoleSelection(role.route)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${role.color} flex items-center justify-center mb-4 transition-colors duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {role.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    className={`w-full ${role.color} text-white font-medium py-3 transition-colors duration-300`}
                  >
                    Access Portal
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Overview */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Platform Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Course Management", desc: "Comprehensive course and curriculum oversight" },
              { title: "Grade Tracking", desc: "Real-time academic performance monitoring" },
              { title: "Attendance System", desc: "Automated attendance recording and reporting" },
              { title: "Communication Hub", desc: "Integrated messaging and notifications" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
