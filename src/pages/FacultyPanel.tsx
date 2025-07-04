import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Calendar, ClipboardList, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FacultyPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  const classes = [
    { id: 1, code: 'CS101', name: 'Computer Science Fundamentals', students: 45, schedule: 'MWF 9:00-10:00', room: 'Room 201' },
    { id: 2, code: 'CS201', name: 'Data Structures & Algorithms', students: 38, schedule: 'TTh 11:00-12:30', room: 'Room 305' },
    { id: 3, code: 'CS301', name: 'Database Management Systems', students: 32, schedule: 'MWF 2:00-3:00', room: 'Room 410' }
  ];

  const upcomingClasses = [
    { time: '9:00 AM', course: 'CS101', room: 'Room 201', type: 'Lecture' },
    { time: '11:00 AM', course: 'CS201', room: 'Room 305', type: 'Lab' },
    { time: '2:00 PM', course: 'CS301', room: 'Room 410', type: 'Lecture' }
  ];

  const pendingTasks = [
    { task: 'Grade CS201 midterm exams', priority: 'High', due: '2024-07-10' },
    { task: 'Update CS101 attendance records', priority: 'Medium', due: '2024-07-08' },
    { task: 'Prepare CS301 next week materials', priority: 'Low', due: '2024-07-12' }
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
                <BookOpen className="h-8 w-8 text-green-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Faculty Panel</h1>
                  <p className="text-gray-600">Welcome, Prof. Johnson</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Messages
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
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'classes', label: 'My Classes' },
            { id: 'attendance', label: 'Attendance' },
            { id: 'grades', label: 'Grading' },
            { id: 'schedule', label: 'Schedule' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{classes.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    {classes.reduce((sum, cls) => sum + cls.students, 0)}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Pending Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">{pendingTasks.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">This Week Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">12</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Today's Schedule</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingClasses.map((cls, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{cls.time}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{cls.course}</h4>
                        <p className="text-sm text-gray-600">{cls.room}</p>
                      </div>
                      <Badge variant="outline">{cls.type}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Pending Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ClipboardList className="h-5 w-5" />
                    <span>Pending Tasks</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingTasks.map((task, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{task.task}</h4>
                        <Badge 
                          variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">Due: {new Date(task.due).toLocaleDateString()}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used functions for efficient class management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="h-20 flex flex-col space-y-2" variant="outline">
                    <ClipboardList className="h-6 w-6" />
                    <span className="text-sm">Take Attendance</span>
                  </Button>
                  <Button className="h-20 flex flex-col space-y-2" variant="outline">
                    <BookOpen className="h-6 w-6" />
                    <span className="text-sm">Upload Materials</span>
                  </Button>
                  <Button className="h-20 flex flex-col space-y-2" variant="outline">
                    <Users className="h-6 w-6" />
                    <span className="text-sm">View Students</span>
                  </Button>
                  <Button className="h-20 flex flex-col space-y-2" variant="outline">
                    <Bell className="h-6 w-6" />
                    <span className="text-sm">Send Announcement</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Classes Tab */}
        {activeTab === 'classes' && (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <Card key={cls.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{cls.code}</CardTitle>
                      <CardDescription className="mt-1">{cls.name}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {cls.students} students
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <p><strong>Schedule:</strong> {cls.schedule}</p>
                      <p><strong>Room:</strong> {cls.room}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" variant="outline">
                        View Roster
                      </Button>
                      <Button size="sm" variant="outline">
                        Attendance
                      </Button>
                      <Button size="sm" variant="outline">
                        Grades
                      </Button>
                      <Button size="sm" variant="outline">
                        Materials
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Other tabs placeholder */}
        {!['dashboard', 'classes'].includes(activeTab) && (
          <Card>
            <CardHeader>
              <CardTitle className="capitalize">{activeTab} Management</CardTitle>
              <CardDescription>
                This section provides comprehensive {activeTab} management tools and features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {activeTab} module content will include:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Real-time data entry and updates</li>
                <li>• Batch processing capabilities</li>
                <li>• Export and reporting features</li>
                <li>• Integration with student portal</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default FacultyPanel;
