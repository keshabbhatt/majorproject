import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react'; 
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import  Home from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ResetPassword } from './pages/ResetPassword';
import { Courses } from './pages/Courses';
import { StudyMaterials } from './pages/StudyMaterials';
import { Practice } from './pages/Practice';
import { Canvas } from '@react-three/fiber';
import StarBackground from './pages/Background';



export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Starry Background */}
      <div className="fixed inset-0">
        <Canvas
          camera={{
            position: [0, 0, 1],
          }}
          style={{ position: 'absolute' }}
        >
          <Suspense fallback={null}>
            <StarBackground />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent" />


      <Navbar />
       {/* Main Content */}
       <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}