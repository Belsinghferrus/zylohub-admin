// src/config/sidebarConfig.js
import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiFileText,
  FiCheckCircle,
  FiClipboard,
  FiMessageSquare,
  FiAlertTriangle,
  FiFlag,
} from "react-icons/fi";

export const sidebarOptions = [
  { name: "Dashboard", path: "/dashboard", icon: FiHome },
  { name: "Users", path: "/dashboard/users", icon: FiUsers },
  { name: "Jobs", path: "/dashboard/jobs", icon: FiBriefcase },
  { name: "Job Request", path: "/dashboard/job-request", icon: FiFileText },
  {
    name: "Identity Verification",
    path: "/dashboard/identity-verification",
    icon: FiCheckCircle,
  },
  {
    name: "Business Verification",
    path: "/dashboard/business-verification",
    icon: FiClipboard,
  },
  { name: "Feedbacks", path: "/dashboard/feedbacks", icon: FiMessageSquare },
  { name: "SOS", path: "/dashboard/sos", icon: FiAlertTriangle },
  { name: "Report", path: "/dashboard/report", icon: FiFlag },
];
