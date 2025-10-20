import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import TeacherBandwidthTracker from "./components/TeacherBandwidthTracker"
import PerformanceDashboard from "./components/performance-dashboard"
import IntegratedLMS from "./components/IntegratedLMS"
import RecognitionDashboard from "./components/R&R"
import AIInsightsDashboard from "./components/AI-PoweredInsights"
import Login from "./components/Login"
import TeacherProfile from "./components/TeacherProfile"
import ProtectedTeacherRoute from "./components/ProtectedTeacherRoute"
import ProtectedAdminRoute from "./components/ProtectedAdminRoute"
import TeacherWorkloadDashboard from "./components/TeacherWorkloadDashboard"
import TeacherPerformanceDashboard from "./components/TeacherPerformanceDashboard"
import TeacherFeedbackDashboard from "./components/TeacherFeedbackDashboard"

// Protected Route Component
const ProtectedRoute = ({ children, allowedRole }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const userRole = localStorage.getItem("userRole");

  if (!isAuthenticated || userRole !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true"
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher-profile" element={
          <ProtectedTeacherRoute>
            <TeacherProfile />
          </ProtectedTeacherRoute>
        } />
        {/* Protected Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRole="admin">
              <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="bandwidth" element={<TeacherBandwidthTracker />} />
                  <Route path="performance" element={<PerformanceDashboard />} />
                  <Route path="lms" element={<IntegratedLMS />} />
                  <Route path="recognition" element={<RecognitionDashboard />} />
                  <Route path="insights" element={<AIInsightsDashboard />} />
                  <Route path="/" element={<Navigate to="dashboard" replace />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
        {/* Protected Teacher Routes */}
        <Route
          path="/teacher/*"
          element={
            <ProtectedRoute allowedRole="teacher">
              <Routes>
                <Route path="dashboard" element={<TeacherProfile />} />
                <Route path="workload" element={<TeacherWorkloadDashboard />} />
                <Route path="performance" element={<TeacherPerformanceDashboard />} />
                <Route path="feedback" element={<TeacherFeedbackDashboard />} />
              </Routes>
            </ProtectedRoute>
          }
        />
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}