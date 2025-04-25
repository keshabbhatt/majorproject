import { BookOpen, CheckCircle, Clock, Layers, Users } from 'lucide-react';

export function Dashboard() {
  // Mock Data for User's Courses and Progress
  const userData = {
    completedCourses: [
      { id: 1, title: 'Digital Electronics', progress: 100 },
      { id: 2, title: 'Microprocessors', progress: 100 },
    ],
    remainingCourses: [
      { id: 3, title: 'Control Systems', progress: 0 },
      { id: 4, title: 'Machine Learning', progress: 0 },
    ],
    totalCourses: 4,
    coursesCompleted: 2,
    overallProgress: 50, // You can calculate this dynamically based on completed courses
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-800 text-white overflow-y-auto">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 text-white">Welcome back, Student!</h1>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Total Progress */}
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900">Overall Progress</h2>
            <div className="flex items-center mt-4">
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{ width: `${userData.overallProgress}%` }}
                />
              </div>
              <span className="ml-2 text-gray-600">{userData.overallProgress}%</span>
            </div>
          </div>

          {/* Completed Courses */}
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900">Completed Courses</h2>
            <ul className="mt-4">
              {userData.completedCourses.map((course) => (
                <li key={course.id} className="flex items-center mb-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  {course.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Remaining Courses */}
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900">Remaining Courses</h2>
            <ul className="mt-4">
              {userData.remainingCourses.map((course) => (
                <li key={course.id} className="flex items-center mb-2 text-gray-700">
                  <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                  {course.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Total Courses */}
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900">Total Courses</h2>
            <div className="mt-4 text-gray-700">
              <p>{userData.totalCourses} total courses</p>
              <p>{userData.coursesCompleted} courses completed</p>
            </div>
          </div>
        </div>

        {/* Current Courses */}
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-800 mb-8">
          <h2 className="text-lg font-semibold text-gray-900">Current Courses</h2>
          {/* Replace with dynamic data for the current courses */}
          <ul className="mt-4">
            {userData.remainingCourses.map((course) => (
              <li key={course.id} className="flex items-center mb-2 text-gray-700">
                <Layers className="w-5 h-5 text-blue-600 mr-2" />
                {course.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          {/* Mock recent activities */}
          <ul className="mt-4 text-gray-700">
            <li className="flex items-center mb-2">
              <Clock className="w-5 h-5 text-gray-500 mr-2" />
              Started "Control Systems" course.
            </li>
            <li className="flex items-center mb-2">
              <Clock className="w-5 h-5 text-gray-500 mr-2" />
              Completed "Digital Electronics" course.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
