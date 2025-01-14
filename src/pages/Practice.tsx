import { Brain, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function Practice() {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const quizzes = [
    {
      id: 1,
      title: "Digital Logic Gates",
      subject: "Digital Electronics",
      questions: 20,
      timeLimit: 30,
      difficulty: "Medium",
      completed: true,
      score: 85
    },
    {
      id: 2,
      title: "8085 Architecture",
      subject: "Microprocessors",
      questions: 25,
      timeLimit: 35,
      difficulty: "Hard",
      completed: false
    },
    {
      id: 3,
      title: "Feedback Systems",
      subject: "Control Systems",
      questions: 15,
      timeLimit: 25,
      difficulty: "Easy",
      completed: true,
      score: 92
    }
  ];

  const filteredQuizzes = selectedSubject === 'all' 
    ? quizzes 
    : quizzes.filter(quiz => quiz.subject === selectedSubject);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Practice Quizzes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Test your knowledge with our AI-generated quizzes tailored to your course content
          </p>
        </div>

        {/* Subject Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedSubject === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/80 text-gray-600 hover:bg-white'
            }`}
          >
            All Subjects
          </button>
          {['Digital Electronics', 'Microprocessors', 'Control Systems'].map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedSubject === subject
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/80 text-gray-600 hover:bg-white'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredQuizzes.map((quiz) => (
            <div 
              key={quiz.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                  <p className="text-sm text-gray-600">{quiz.subject}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                  {quiz.questions} questions
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  {quiz.timeLimit} minutes
                </div>
                <div className="col-span-2">
                  Difficulty: <span className={`font-medium ${
                    quiz.difficulty === 'Easy' ? 'text-green-600' :
                    quiz.difficulty === 'Medium' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>{quiz.difficulty}</span>
                </div>
              </div>

              {quiz.completed ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>Completed: {quiz.score}%</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                    Retry
                  </button>
                </div>
              ) : (
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Start Quiz
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}