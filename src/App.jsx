import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Jobs from "./pages/Jobs";
import JobRequest from "./pages/JobRequest";
import IdentityVerification from "./pages/IdentityVerification";
import BusinessVerification from "./pages/BusinessVerification";
import Feedbacks from "./pages/Feedbacks";
import SOS from "./pages/SOS";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";

import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white">
        <Navbar />

        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Routes>
            {/* Redirect root to /dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Dashboard Pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/jobs" element={<Jobs />} />
            <Route path="/dashboard/job-request" element={<JobRequest />} />
            <Route
              path="/dashboard/identity-verification"
              element={<IdentityVerification />}
            />
            <Route
              path="/dashboard/business-verification"
              element={<BusinessVerification />}
            />
            <Route path="/dashboard/feedbacks" element={<Feedbacks />} />
            <Route path="/dashboard/sos" element={<SOS />} />
            <Route path="/dashboard/report" element={<Report />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
