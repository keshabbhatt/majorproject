import { BookOpen, Clock, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Courses() {
  const courses = [
    {
      id: 1,
      title: "Digital Electronics",
      description: "Learn about logic gates, boolean algebra, and digital circuit design",
      duration: "12 weeks",
      level: "Intermediate",
      students: 156,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      title: "Microprocessors",
      description: "Understanding computer architecture and assembly language programming",
      duration: "14 weeks",
      level: "Advanced",
      students: 128,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      title: "Control Systems",
      description: "Study of automatic control systems, feedback, and stability analysis",
      duration: "10 weeks",
      level: "Advanced",
      students: 142,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      title: "Signal Processing",
      description: "Understand signal manipulation, filtering, and transformation techniques",
      duration: "8 weeks",
      level: "Beginner",
      students: 200,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1581092587482-25f56a5e617b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 5,
      title: "Machine Learning",
      description: "Introduction to machine learning algorithms and data science principles",
      duration: "16 weeks",
      level: "Intermediate",
      students: 310,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1561948950-92b42c88e9b2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 6,
      title: "Database Systems",
      description: "Learn about relational databases, SQL, and data management techniques",
      duration: "12 weeks",
      level: "Intermediate",
      students: 220,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1530912801579-b0aef63d62c8?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 7,
      title: "Artificial Intelligence",
      description: "Explore the fundamentals of AI, including algorithms and problem-solving techniques",
      duration: "18 weeks",
      level: "Advanced",
      students: 130,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517511620798-1163e5bff70e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 8,
      title: "Embedded Systems",
      description: "Learn about microcontroller programming, hardware interfacing, and system design",
      duration: "10 weeks",
      level: "Beginner",
      students: 180,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1562541605-98621d1a8009?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="min-h-screen overflow-y-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-800 text-white">
      <div className="container mx-auto px-4 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-indigo-600">
            Available Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of engineering courses designed specifically for FWU students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link 
              key={course.id}
              to={`/courses/${course.id}`}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="h-36 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    {course.level}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    {course.students} students
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {course.rating}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
