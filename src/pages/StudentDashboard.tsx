import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, Calendar, User, Bell, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    { id: 1, name: 'Computer Science Fundamentals', code: 'CS101', instructor: 'Dr. Smith', grade: 'A-', attendance: 92 },
    { id: 2, name: 'Data Structures & Algorithms', code: 'CS201', instructor: 'Prof. Johnson', grade: 'B+', attendance: 88 },
    { id: 3, name: 'Database Management Systems', code: 'CS301', instructor: 'Dr. Brown', grade: 'A', attendance: 95 },
    { id: 4, name: 'Web Development', code: 'CS250', instructor: 'Ms. Davis', grade: 'A-', attendance: 90 }
  ];

  const upcomingEvents = [
    { date: '2024-07-08', event: 'CS201 Midterm Exam', type: 'exam' },
    { date: '2024-07-10', event: 'Project Submission - CS250', type: 'assignment' },
    { date: '2024-07-15', event: 'Career Fair', type: 'event' }
  ];

  const notifications = [
    { id: 1, message: 'New assignment posted in CS201', time: '2 hours ago', unread: true },
    { id: 2, message: 'Grade updated for CS101 Quiz', time: '1 day ago', unread: true },
    { id: 3, message: 'University Holiday - July 4th', time: '3 days ago', unread: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" onClick={() => navigate('/')}>
                ← Back to Home
              </Button>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
                  <p className="text-gray-600">Welcome back, John Doe</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'courses', label: 'My Courses' },
            { id: 'grades', label: 'Grades' },
            { id: 'attendance', label: 'Attendance' },
            { id: 'calendar', label: 'Calendar' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{courses.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Average Grade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">A-</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Overall Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">91%</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Pending Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">3</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Current Courses</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses.slice(0, 3).map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{course.code}</h4>
                        <p className="text-sm text-gray-600">{course.name}</p>
                      </div>
                      <Badge variant="secondary">{course.grade}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Upcoming Events</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-sm font-medium text-blue-600">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {new Date(event.date).getDate()}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{event.event}</p>
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Recent Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-3 rounded-lg border-l-4 ${
                    notification.unread ? 'bg-blue-50 border-blue-400' : 'bg-gray-50 border-gray-300'
                  }`}>
                    <p className="text-sm text-gray-900">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{course.code}</CardTitle>
                      <CardDescription className="mt-1">{course.name}</CardDescription>
                      <p className="text-sm text-gray-600 mt-2">Instructor: {course.instructor}</p>
                    </div>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {course.grade}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Attendance</span>
                        <span>{course.attendance}%</span>
                      </div>
                      <Progress value={course.attendance} className="h-2" />
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Materials
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Assignments
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Other tabs content would be similar but focused on their specific data */}
        {activeTab !== 'overview' && activeTab !== 'courses' && (
          <Card>
            <CardHeader>
              <CardTitle className="capitalize">{activeTab} View</CardTitle>
              <CardDescription>
                This section will display detailed {activeTab} information and functionality.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {activeTab} module content will be implemented here with specific features like:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Interactive charts and data visualization</li>
                <li>• Detailed academic records</li>
                <li>• Export and download capabilities</li>
                <li>• Real-time updates and notifications</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
