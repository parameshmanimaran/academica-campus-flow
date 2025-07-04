import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Settings, Users, BookOpen, Calendar, Plus, Search, Edit, Trash2, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminInterface = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const systemStats = {
    totalUsers: 1247,
    totalCourses: 156,
    activeSessions: 89,
    systemUptime: '99.8%'
  };

  const users = [
    { id: 1, name: 'John Doe', role: 'Student', email: 'john.doe@university.edu', status: 'Active', department: 'Computer Science' },
    { id: 2, name: 'Prof. Smith', role: 'Faculty', email: 'smith@university.edu', status: 'Active', department: 'Computer Science' },
    { id: 3, name: 'Dr. Johnson', role: 'Faculty', email: 'johnson@university.edu', status: 'Active', department: 'Mathematics' },
    { id: 4, name: 'Jane Wilson', role: 'Student', email: 'jane.wilson@university.edu', status: 'Inactive', department: 'Engineering' }
  ];

  const courses = [
    { id: 1, code: 'CS101', name: 'Computer Science Fundamentals', department: 'Computer Science', students: 45, faculty: 'Dr. Smith' },
    { id: 2, code: 'MATH201', name: 'Linear Algebra', department: 'Mathematics', students: 38, faculty: 'Prof. Johnson' },
    { id: 3, code: 'ENG150', name: 'Technical Writing', department: 'English', students: 32, faculty: 'Ms. Davis' }
  ];

  const recentActivities = [
    { action: 'New user registered', user: 'Alice Brown', time: '5 minutes ago', type: 'user' },
    { action: 'Course CS301 updated', user: 'Dr. Smith', time: '2 hours ago', type: 'course' },
    { action: 'System backup completed', user: 'System', time: '6 hours ago', type: 'system' },
    { action: 'Grade submissions deadline', user: 'System', time: '1 day ago', type: 'notification' }
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
                <Settings className="h-8 w-8 text-purple-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Admin Interface</h1>
                  <p className="text-gray-600">System Administration Panel</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add New
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Admin Profile
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
            { id: 'users', label: 'User Management' },
            { id: 'courses', label: 'Course Management' },
            { id: 'departments', label: 'Departments' },
            { id: 'system', label: 'System Settings' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-sm'
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
            {/* System Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">{systemStats.totalUsers.toLocaleString()}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{systemStats.totalCourses}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Active Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{systemStats.activeSessions}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">System Uptime</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600">{systemStats.systemUptime}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Recent Activities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'user' ? 'bg-blue-500' :
                        activity.type === 'course' ? 'bg-green-500' :
                        activity.type === 'system' ? 'bg-purple-500' : 'bg-orange-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.user} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Quick Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-16 flex flex-col space-y-2" variant="outline">
                      <Users className="h-6 w-6" />
                      <span className="text-sm">Add User</span>
                    </Button>
                    <Button className="h-16 flex flex-col space-y-2" variant="outline">
                      <BookOpen className="h-6 w-6" />
                      <span className="text-sm">New Course</span>
                    </Button>
                    <Button className="h-16 flex flex-col space-y-2" variant="outline">
                      <Calendar className="h-6 w-6" />
                      <span className="text-sm">System Backup</span>
                    </Button>
                    <Button className="h-16 flex flex-col space-y-2" variant="outline">
                      <Settings className="h-6 w-6" />
                      <span className="text-sm">System Config</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <div className="space-y-6">
            {/* Search and Actions */}
            <div className="flex justify-between items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>

            {/* Users Table */}
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage all system users, roles, and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{user.name}</h4>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-xs text-gray-500">{user.department}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={user.role === 'Faculty' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Course Management Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Course Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{course.code}</CardTitle>
                        <CardDescription className="mt-1">{course.name}</CardDescription>
                      </div>
                      <Badge variant="secondary">
                        {course.students} students
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-600">
                        <p><strong>Department:</strong> {course.department}</p>
                        <p><strong>Faculty:</strong> {course.faculty}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Users className="h-4 w-4 mr-1" />
                          Students
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {!['dashboard', 'users', 'courses'].includes(activeTab) && (
          <Card>
            <CardHeader>
              <CardTitle className="capitalize">{activeTab} Management</CardTitle>
              <CardDescription>
                Comprehensive {activeTab} administration and configuration tools.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {activeTab} management features will include:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Advanced configuration options</li>
                <li>• Bulk operations and data import/export</li>
                <li>• Role-based access control</li>
                <li>• Audit logs and system monitoring</li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminInterface;
