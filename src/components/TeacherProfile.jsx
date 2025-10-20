import { useState } from "react"; // importing the useState hook
import { useNavigate } from "react-router-dom"; // importing of the useNAvigate hook
import { LogOut } from "lucide-react"; // import the Logout icon from lucide-react
import {
  RiDashboardLine,
  RiTimeLine,
  RiBarChartBoxLine,
  RiMessage2Line,
} from "react-icons/ri"; // importing the icons from react-icons
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // add BarChart, Bar, Legend for the new section
  BarChart,
  Bar,
  Legend,
} from "recharts"; // importing the recharts library

const TeacherProfile = () => {
  // defining the TeacherProfile component
  const navigate = useNavigate(); // navigate is a function that allows us to redirect to another route
  const [activeNav, setActiveNav] = useState("Overview"); // setting the initial state of the activeNav variable to "Overview"

  const handleNavigation = (page) => {
    // handles the navigation between the different pages
    switch (page) {
      case "Workload":
        navigate("/teacher/workload");
        break;
      case "Performance":
        navigate("/teacher/performance");
        break;
      case "Feedback":
        navigate("/teacher/feedback");
        break;
      default:
        break;
    }
  };

  const sidebarItems = [
    {
      icon: <RiDashboardLine size={20} color="#000" />,
      label: "Overview",
      active: true,
    }, // sidebar item for the overview page
    {
      icon: <RiTimeLine size={20} color="#000" />,
      label: "Workload",
      active: true,
    }, // sidebar item for the workload page
    {
      icon: <RiBarChartBoxLine size={20} color="#000" />,
      label: "Performance",
      active: true,
    }, // sidebar item for the performance page
    {
      icon: <RiMessage2Line size={20} color="#000" />,
      label: "Feedback",
      active: true,
    }, // sidebar item for the feedback page
  ];
  // Update course data with more details
  const courseData = [
    // defining the course data
    {
      name: "Advanced Biology",
      status: "Completed",
      progress: 100,
      statusColor: "#10b981",
      students: 28,
      lastUpdated: "2023-12-01",
      completion: "2023-11-30",
    },
    {
      name: "Chemistry 101",
      status: "In Progress",
      progress: 65,
      statusColor: "#3b82f6",
      students: 32,
      lastUpdated: "2023-12-05",
      completion: null,
    },
    {
      name: "Physics Fundamentals",
      status: "Not Started",
      progress: 0,
      statusColor: "#6b7280",
      students: 25,
      lastUpdated: "2023-12-01",
      completion: null,
    },
  ];

  const recognitions = [
    // list of recognitions
    {
      icon: "🏆",
      title: "Teacher of the Year 2022",
      description: "Awarded for excellence in teaching",
    },
    {
      icon: "💡",
      title: "Innovation in Education Award",
      description: "Recognized for innovative teaching methods",
    },
  ];

  const suggestedSteps = [
    {
      icon: "❤️",
      text: "Encourage participation in wellness programs",
    },
    {
      icon: "👥",
      text: "Provide mentorship opportunities",
    },
    {
      icon: "📚",
      text: "Offer professional development in stress management",
    },
  ];

  // Update KPI data structure
  const kpiData = [
    { month: "Jan", score: 75 },
    { month: "Feb", score: 82 },
    { month: "Mar", score: 78 },
    { month: "Apr", score: 85 },
    { month: "May", score: 88 },
    { month: "Jun", score: 72 },
    { month: "Jul", score: 85 },
  ];

  // Calculate trend
  const lastMonth = kpiData[kpiData.length - 1].score; // Get the score of the last month
  const previousMonth = kpiData[kpiData.length - 2].score; // Get the score of the previous month
  const trend = ((lastMonth - previousMonth) / previousMonth) * 100; // Calculate the trend as a percentage

  const handleLogout = () => {
    // Logout function
    localStorage.removeItem("teacherAuthenticated"); // removes the authentication token from local storage
    sessionStorage.removeItem("teacherRedirectPath"); // removes the redirect path from session storage
    window.dispatchEvent(new Event("storage")); // event to trigger the logout
    navigate("/teacher-login"); // redirects to the login page after logout
  };

  // Add workload data
  const workloadData = [
    // Add workload data
    { label: "Teaching", value: 80, color: "#3b82f6" }, // 80% of workload
    { label: "Lesson Planning", value: 60, color: "#8b5cf6" }, // 60% of workload
    { label: "Grading", value: 45, color: "#06b6d4" }, // 45% of workload
    { label: "Meetings", value: 30, color: "#10b981" }, // 30% of workload
  ];

  // Mock data for teacher performance by month
  const teacherPerformanceData = [
    { month: "Jan", "Ms. Evelyn Reed": 85, "Mr. Smith": 78, "Ms. Patel": 92 },
    { month: "Feb", "Ms. Evelyn Reed": 88, "Mr. Smith": 82, "Ms. Patel": 90 },
    { month: "Mar", "Ms. Evelyn Reed": 90, "Mr. Smith": 80, "Ms. Patel": 94 },
    { month: "Apr", "Ms. Evelyn Reed": 87, "Mr. Smith": 85, "Ms. Patel": 91 },
    { month: "May", "Ms. Evelyn Reed": 92, "Mr. Smith": 88, "Ms. Patel": 95 },
    // ...add more months if needed
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Left Sidebar */}
      <div
        style={{
          width: "280px",
          backgroundColor: "white",
          borderRight: "1px solid #e2e8f0",
          padding: "0",
          flexShrink: 0,
          display: "block",
        }}
      >
        {/* Logo/Header */}
        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#1f2937",
              transform: "rotate(45deg)",
            }}
          ></div>
          <span
            style={{
              fontWeight: "600",
              fontSize: "18px",
              color: "#1f2937",
            }}
          >
            Teacher
          </span>
        </div>

        {/* Navigation Menu */}
        <nav style={{ padding: "16px 0" }}>
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                backgroundColor: item.active ? "#eff6ff" : "transparent",
                borderRight: item.active ? "3px solid #3b82f6" : "none",
                color: item.active ? "#1d4ed8" : "#4b5563",
                fontWeight: item.active ? "500" : "400",
              }}
              onClick={() => handleNavigation(item.label)} // handle navigation function
            >
              <span style={{ fontSize: "16px" }}>{item.icon}</span>
              <span style={{ fontSize: "14px" }}>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: "auto", display: "flex" }}>
        {/* Center Content */}
        <div style={{ flex: 1, padding: "0" }}>
          {/* Top Navigation */}
          <div
            style={{
              backgroundColor: "white",
              padding: "16px 32px",
              borderBottom: "1px solid #e2e8f0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            ></div>

            {/* User Section with Logout */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <button
                onClick={handleLogout} // handle logout function
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "1px solid #ef4444",
                  color: "#ef4444",
                  background: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                <LogOut size={16} />
                Logout
              </button>

              {/* Notification Bell */}
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                  color: "#6b7280",
                }}
              >
                🔔
              </div>

              {/* User Avatar */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#f3f4f6",
                  backgroundImage: "url(/placeholder.svg?height=32&width=32)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                }}
              ></div>
            </div>
          </div>

          {/* Content Area */}
          <div style={{ padding: "32px" }}>
            {/* Header */}
            <div style={{ marginBottom: "32px" }}>
              <h1
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#1f2937",
                  margin: "0 0 8px 0",
                }}
              >
                Teacher Profile
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "#6b7280",
                  margin: "0",
                }}
              >
                View detailed information about a specific teacher.
              </p>
            </div>

            {/* Teacher Profile Card */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "32px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#f3f4f6",
                  backgroundImage: "url('https://placehold.co/600x400')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  margin: "0 auto 16px auto",
                }}
              ></div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 4px 0",
                }}
              >
                Ms. Evelyn Reed
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#6b7280",
                  margin: "0 0 4px 0",
                }}
              >
                Science Teacher
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#9ca3af",
                  margin: "0",
                }}
              >
                Joined 2018
              </p>
            </div>

            {/* Teacher Performance by Month Section */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 24px 0",
                }}
              >
                Teacher Performance by Month
              </h3>
              <div style={{ width: "100%", height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={teacherPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                    <YAxis stroke="#94a3b8" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "6px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="Ms. Evelyn Reed" fill="#3b82f6" />
                    <Bar dataKey="Mr. Smith" fill="#8b5cf6" />
                    <Bar dataKey="Ms. Patel" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Workload Breakdown */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 24px 0",
                }}
              >
                Workload Breakdown
              </h3>

              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    marginBottom: "8px",
                  }}
                >
                  Workload Distribution
                </div>
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    color: "#1f2937",
                    marginBottom: "4px",
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  Current
                </div>
              </div>

              {/* Simple Bar Chart */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end", // This aligns bars to the bottom
                  justifyContent: "space-around",
                  gap: "16px",
                  height: "200px",
                  marginBottom: "16px",
                  padding: "20px",
                }}
              >
                {workloadData.map(
                  (
                    item,
                    index // Map through the data
                  ) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        flex: 1,
                        maxWidth: "100px",
                      }}
                    >
                      {/* Bar */}
                      <div
                        style={{
                          width: "40px",
                          height: `${item.value * 1.6}px`, // Multiply by 1.6 to make bars taller
                          backgroundColor: item.color,
                          borderRadius: "4px",
                          transition: "height 0.3s ease",
                          marginBottom: "8px",
                        }}
                      />
                      {/* Label */}
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#6b7280",
                          fontWeight: "500",
                          textAlign: "center",
                        }}
                      >
                        {item.label}
                        <div
                          style={{
                            color: item.color,
                            fontWeight: "600",
                            marginTop: "4px",
                          }}
                        >
                          {item.value}%
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* KPI Scores Over Time */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                marginBottom: "32px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 24px 0",
                }}
              >
                KPI Scores Over Time
              </h3>

              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        marginBottom: "8px",
                      }}
                    >
                      Average KPI Score
                    </div>
                    <div
                      style={{
                        fontSize: "36px",
                        fontWeight: "700",
                        color: "#1f2937",
                      }}
                    >
                      {lastMonth}
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "8px 16px",
                      backgroundColor: trend >= 0 ? "#f0fdf4" : "#fef2f2",
                      borderRadius: "999px",
                      color: trend >= 0 ? "#16a34a" : "#dc2626",
                      fontSize: "14px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {trend >= 0 ? "↑" : "↓"} {Math.abs(trend).toFixed(1)}% vs
                    last month
                  </div>
                </div>
              </div>

              {/* Recharts Line Chart */}
              <div style={{ width: "100%", height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={kpiData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis
                      dataKey="month"
                      stroke="#94a3b8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      domain={[60, 100]}
                      ticks={[60, 70, 80, 90, 100]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "6px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{
                        stroke: "#3b82f6",
                        strokeWidth: 2,
                        fill: "white",
                        r: 4,
                      }}
                      activeDot={{
                        stroke: "#3b82f6",
                        strokeWidth: 2,
                        fill: "#3b82f6",
                        r: 6,
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Courses */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#1f2937",
                    margin: "0",
                  }}
                >
                  Courses
                </h3>
                <button
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#f3f4f6",
                    border: "none",
                    borderRadius: "6px",
                    color: "#4b5563",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    ":hover": {
                      backgroundColor: "#e5e7eb",
                    },
                  }}
                >
                  View All Courses
                </button>
              </div>

              <div style={{ overflowX: "auto" }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    minWidth: "500px",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#f8fafc" }}>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#374151",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        Course Name
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#374151",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        Students
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#374151",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        Status
                      </th>
                      <th
                        style={{
                          padding: "12px 16px",
                          textAlign: "left",
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#374151",
                          borderBottom: "1px solid #e2e8f0",
                        }}
                      >
                        Progress
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseData.map(
                      (
                        course,
                        index // map to render course data
                      ) => (
                        <tr
                          key={index}
                          style={{
                            borderBottom:
                              index < courseData.length - 1
                                ? "1px solid #f1f5f9"
                                : "none",
                            cursor: "pointer",
                            transition: "background-color 0.2s",
                            ":hover": {
                              backgroundColor: "#f8fafc",
                            },
                          }}
                        >
                          <td
                            style={{
                              padding: "16px",
                              fontSize: "14px",
                              fontWeight: "500",
                              color: "#1f2937",
                            }}
                          >
                            <div style={{ marginBottom: "4px" }}>
                              {course.name}
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#6b7280",
                              }}
                            >
                              Last updated: {course.lastUpdated}
                            </div>
                          </td>
                          <td
                            style={{
                              padding: "16px",
                              fontSize: "14px",
                              color: "#4b5563",
                            }}
                          >
                            {course.students} students
                          </td>
                          <td style={{ padding: "16px" }}>
                            <span
                              style={{
                                padding: "4px 12px",
                                borderRadius: "9999px",
                                fontSize: "12px",
                                fontWeight: "500",
                                backgroundColor: `${course.statusColor}15`,
                                color: course.statusColor,
                              }}
                            >
                              {course.status}
                            </span>
                          </td>
                          <td style={{ padding: "16px", width: "200px" }}>
                            <div
                              style={{
                                marginBottom: "6px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "#6b7280",
                                  fontWeight: "500",
                                }}
                              >
                                {course.progress}%
                              </span>
                              {course.completion && (
                                <span
                                  style={{
                                    fontSize: "12px",
                                    color: "#10b981",
                                  }}
                                >
                                  Completed {course.completion}
                                </span>
                              )}
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "6px",
                                backgroundColor: "#f1f5f9",
                                borderRadius: "9999px",
                                overflow: "hidden",
                              }}
                            >
                              <div
                                style={{
                                  width: `${course.progress}%`,
                                  height: "100%",
                                  backgroundColor: course.statusColor,
                                  borderRadius: "9999px",
                                  transition: "width 0.3s ease",
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recognitions */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#1f2937",
                  margin: "0 0 24px 0",
                }}
              >
                Recognitions
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {recognitions.map((recognition, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px 0",
                      borderBottom:
                        index < recognitions.length - 1
                          ? "1px solid #f1f5f9"
                          : "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "24px",
                        flexShrink: 0,
                      }}
                    >
                      {recognition.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#1f2937",
                          marginBottom: "4px",
                        }}
                      >
                        {recognition.title}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: "#6b7280",
                        }}
                      >
                        {recognition.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          style={{
            width: "320px",
            backgroundColor: "white",
            borderLeft: "1px solid #e2e8f0",
            padding: "32px 24px",
            flexShrink: 0,
          }}
        >
          {/* Burnout Risk */}
          <div style={{ marginBottom: "32px" }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 24px 0",
              }}
            >
              Burnout Risk
            </h3>

            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#1f2937",
                  }}
                >
                  Moderate Risk
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#f59e0b",
                  }}
                >
                  60%
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "#f1f5f9",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "60%",
                    height: "100%",
                    backgroundColor: "#f59e0b",
                    borderRadius: "4px",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Suggested Next Steps */}
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0 0 24px 0",
              }}
            >
              Suggested Next Steps
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {suggestedSteps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "12px 0",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {step.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#4b5563",
                      lineHeight: "1.5",
                    }}
                  >
                    {step.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 1024px) {
            .right-sidebar {
              display: none;
            }
          }
          
          @media (max-width: 768px) {
            .left-sidebar {
              position: fixed;
              left: -280px;
              top: 0;
              height: 100vh;
              z-index: 1000;
              transition: left 0.3s ease;
            }
            .left-sidebar.open {
              left: 0;
            }
            .main-content {
              margin-left: 0;
            }
            .content-padding {
              padding: 16px;
            }
            .top-nav {
              flex-direction: column;
              gap: 16px;
              align-items: flex-start;
            }
            .nav-items {
              display: none;
            }
          }
          
          @media (max-width: 480px) {
            .teacher-profile-card {
              padding: 20px;
            }
            .chart-container {
              height: 80px;
            }
            .table-container {
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TeacherProfile;
