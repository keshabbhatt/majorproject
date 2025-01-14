import { FileText, Download, BookOpen, Search } from 'lucide-react';
import { useState } from 'react';

export function StudyMaterials() {
  const [searchTerm, setSearchTerm] = useState('');

  const materials = [
    {
      id: 1,
      title: "Digital Electronics Notes",
      type: "PDF",
      size: "2.4 MB",
      subject: "Digital Electronics",
      lastUpdated: "2024-03-10"
    },
    {
      id: 2,
      title: "Microprocessor Architecture",
      type: "PDF",
      size: "3.1 MB",
      subject: "Microprocessors",
      lastUpdated: "2024-03-08"
    },
    {
      id: 3,
      title: "Control Systems Formulas",
      type: "PDF",
      size: "1.8 MB",
      subject: "Control Systems",
      lastUpdated: "2024-03-12"
    }
  ];

  const filteredMaterials = materials.filter(material =>
    material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Study Materials
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access comprehensive study materials, notes, and resources for your engineering courses
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.map((material) => (
            <div 
              key={material.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{material.title}</h3>
                    <p className="text-sm text-gray-600">{material.subject}</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  <Download className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  {material.type}
                </div>
                <div>Size: {material.size}</div>
                <div className="col-span-2">
                  Updated: {new Date(material.lastUpdated).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}