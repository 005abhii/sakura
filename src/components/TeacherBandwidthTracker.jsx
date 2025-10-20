"use client";

import { useState } from "react"; // Import useState hook from React library
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router library
import { LogOut, AlertCircle, BarChart2, Clock, Briefcase } from "lucide-react"; // Import icons from Lucide library
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // Import chart components from Recharts library

const TeacherBandwidthTracker = () => {
  const navigate = useNavigate(); // Create a navigate function to redirect user to other routes
  const [searchTerm, setSearchTerm] = useState(""); // Create a state variable to store the search term
  const [selectedSubject, setSelectedSubject] = useState(""); // Create a state variable to store the selected subject
  const [selectedGrade, setSelectedGrade] = useState(""); // Create a state variable to store the selected grade
  const [selectedStatus, setSelectedStatus] = useState(""); // Create a state variable to store the selected status

  // Enhanced teacher data with more details
  const teacherData = [
    // Define the data for the chart
    {
      id: 1, // unique id for each data point
      name: "Ms. Bennett", // name of the teacher
      subject: "Mathematics", // subject taught by the teacher
      grade: "Grade 8", // grade thought by the teacher
      totalWeeklyHours: 40, // total weekly hours of the teacher
      teachingHours: 25, // teaching hours of the teacher
      adminHours: 10, // admin hours of the teacher
      extracurricularHours: 5, // extracurricular hours of the teacher
      workload: 35, // workload of the teacher
      status: "Optimal", // status of the teacher
      efficiency: 85, // efficiency of the teacher
      lastUpdated: "2023-12-05", // last updated date of the teacher data
    },
    {
      id: 2,
      name: "Mr. Carter",
      subject: "Science",
      grade: "Grade 9",
      totalWeeklyHours: 35,
      teachingHours: 20,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 25,
      status: "Optimal",
      efficiency: 75,
      lastUpdated: "2023-12-05",
    },
    {
      id: 3,
      name: "Ms. Davis",
      subject: "English",
      grade: "Grade 10",
      totalWeeklyHours: 45,
      teachingHours: 30,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 40,
      status: "Overworked",
      efficiency: 90,
      lastUpdated: "2023-12-05",
    },
    {
      id: 4,
      name: "Mr. Evans",
      subject: "History",
      grade: "Grade 7",
      totalWeeklyHours: 30,
      teachingHours: 15,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 20,
      status: "Available",
      efficiency: 60,
      lastUpdated: "2023-12-05",
    },
    {
      id: 5,
      name: "Ms. Foster",
      subject: "Art",
      grade: "Grade 6",
      totalWeeklyHours: 40,
      teachingHours: 25,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 35,
      status: "Optimal",
      efficiency: 85,
      lastUpdated: "2023-12-05",
    },
  ];

  // Analytics data for workload distribution
  const workloadStats = {
    // assuming this is the data you want to display
    overworked: teacherData.filter((t) => t.workload > 35).length, // count of teachers with workload >
    optimal: teacherData.filter((t) => t.workload >= 25 && t.workload <= 35)
      .length, // count of teachers with workload between 25 and 35
    available: teacherData.filter((t) => t.workload < 25).length, // count of teachers with workload
    averageWorkload:
      teacherData.reduce((acc, curr) => acc + curr.workload, 0) /
      teacherData.length, // average workload of all teachers
  };

  // Chart data for workload distribution
  const chartData = [
    // assuming this is the data you want to display
    {
      name: "Teaching",
      value: teacherData.reduce((acc, curr) => acc + curr.teachingHours, 0),
    }, // teaching hours of the teacher
    {
      name: "Admin",
      value: teacherData.reduce((acc, curr) => acc + curr.adminHours, 0),
    }, // admin hours of the teacher
    {
      name: "Extracurricular",
      value: teacherData.reduce(
        (acc, curr) => acc + curr.extracurricularHours,
        0
      ),
    }, // extra -curricular hours of the teacher
  ];

  const getWorkloadColor = (workload) => {
    // getworkload color function to determine the color of the workload
    if (workload <= 20) return "#60a5fa";
    if (workload <= 30) return "#3b82f6";
    return "#1d4ed8";
  };

  const getWorkloadWidth = (workload) => {
    return Math.min((workload / 45) * 100, 100);
  };

  const filteredTeachers = teacherData.filter((teacher) => {
    return (
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSubject === "" || teacher.subject === selectedSubject) &&
      (selectedGrade === "" || teacher.grade === selectedGrade) &&
      (selectedStatus === "" || teacher.status === selectedStatus)
    );
  });

  // const handleLogout = () => {
  //   localStorage.removeItem("isAuthenticated");
  //   navigate('/');
  // };

  // Add statsCards data array
  const statsCards = [
    // assuming this is the data you want to display
    {
      title: "Average Workload", // title of the card
      value: `${workloadStats.averageWorkload.toFixed(1)}h`, // value of the card
      icon: <Clock size={24} />, // icon of the card
      color: "#3b82f6", // color of the card
      bgColor: "#eff6ff", // background color of the card
    },
    {
      title: "Overworked Teachers",
      value: workloadStats.overworked,
      icon: <AlertCircle size={24} />,
      color: "#ef4444",
      bgColor: "#fef2f2",
    },
    {
      title: "Optimal Workload",
      value: workloadStats.optimal,
      icon: <BarChart2 size={24} />,
      color: "#10b981",
      bgColor: "#f0fdf4",
    },
    {
      title: "Available Capacity",
      value: workloadStats.available,
      icon: <Briefcase size={24} />,
      color: "#f59e0b",
      bgColor: "#fefce8",
    },
  ];

  // Add filterOptions array
  const filterOptions = [
    // assuming this is the data you want to display
    {
      label: "Subject", // label of the filter option
      value: selectedSubject, // selected value of the filter option
      setter: setSelectedSubject, // set the selected value of the filter option
      options: ["Mathematics", "Science", "English", "History", "Art"], // options of the filter option
    },
    {
      label: "Grade",
      value: selectedGrade,
      setter: setSelectedGrade,
      options: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"],
    },
    {
      label: "Status",
      value: selectedStatus,
      setter: setSelectedStatus,
      options: ["Optimal", "Overworked", "Available"],
    },
  ];

  return (
    <main style={{ padding: "32px" }}>
      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        {statsCards.map((stat, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  padding: "12px",
                  borderRadius: "12px",
                  backgroundColor: stat.bgColor,
                  color: stat.color,
                }}
              >
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: "14px", color: "#6b7280" }}>
                  {stat.title}
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#1f2937",
                  }}
                >
                  {stat.value}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workload Distribution Chart */}

      {/* Enhanced Teacher Table */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          marginBottom: "32px",
        }}
      >
        <hr style={{ height: "10px", backgroundColor: "transparent" }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto auto",
            gap: "16px",
            alignItems: "center",
          }}
        >
          {/* Search Input */}
          <div
            style={{
              position: "relative",
            }}
          >
            <input
              type="text"
              placeholder="Search teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 16px",
                paddingLeft: "40px",
                borderRadius: "8px",
                border: "1px solid #000",
                fontSize: "14px",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
              }}
            >
              🔍
            </span>
          </div>

          {/* Filter Dropdowns */}
          {filterOptions.map(
            (
              filter,
              index // filter Options is an array of objects with label and options
            ) => (
              <select
                key={index}
                value={filter.value}
                onChange={(e) => filter.setter(e.target.value)} // event handler to update the filter value
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "14px",
                  minWidth: "150px",
                  color: "#1f2937",
                  backgroundColor: "white",
                }}
              >
                <option value="">{filter.label}</option>
                {filter.options.map(
                  (
                    option // filter options is an array of objects with label and value
                  ) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )
                )}
              </select>
            )
          )}
        </div>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "800px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                {[
                  "Name",
                  "Subject",
                  "Grade",
                  "No. of regular periods",
                  "No. of substitute periods",
                  "After working hours, no. of hours",
                  "Extracurricular Hours",
                  "Workload",
                  "Status",
                  "Efficiency",
                  "Last Updated",
                ].map(
                  (
                    header,
                    index // header is an array of strings
                  ) => (
                    <th
                      key={index}
                      style={{
                        padding: "16px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map(
                (
                  teacher,
                  index // filter teachers based on selected filters
                ) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #f1f5f9",
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
                      {teacher.name}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#3b82f6",
                      }}
                    >
                      {teacher.subject}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.grade}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.totalWeeklyHours}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#3b82f6",
                      }}
                    >
                      {teacher.teachingHours}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.adminHours}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.extracurricularHours}
                    </td>
                    <td style={{ padding: "16px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: "100px",
                            height: "6px",
                            backgroundColor: "#e2e8f0",
                            borderRadius: "3px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${getWorkloadWidth(teacher.workload)}%`, // calculate the width of the progress bar based on the workload
                              height: "100%",
                              backgroundColor: getWorkloadColor(
                                teacher.workload
                              ), // calculate the color of the progress bar based on the workload
                              borderRadius: "3px",
                            }}
                          ></div>
                        </div>
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#1f2937",
                          }}
                        >
                          {teacher.workload}
                        </span>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color:
                          teacher.status === "Overworked"
                            ? "#ef4444"
                            : "#10b981",
                      }}
                    >
                      {teacher.status}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.efficiency}%
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {new Date(teacher.lastUpdated).toLocaleDateString()}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <hr style={{ height: "10px", backgroundColor: "transparent" }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto auto",
            gap: "16px",
            alignItems: "center",
          }}
        >
          {/* Search Input */}
          <div
            style={{
              position: "relative",
            }}
          >
            <input
              type="text"
              placeholder="Search teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 16px",
                paddingLeft: "40px",
                borderRadius: "8px",
                border: "1px solid #000",
                fontSize: "14px",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
              }}
            >
              🔍
            </span>
          </div>

          {/* Filter Dropdowns */}
          {filterOptions.map(
            (
              filter,
              index // filter Options is an array of objects with label and options
            ) => (
              <select
                key={index}
                value={filter.value}
                onChange={(e) => filter.setter(e.target.value)} // event handler to update the filter value
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  fontSize: "14px",
                  minWidth: "150px",
                  color: "#1f2937",
                  backgroundColor: "white",
                }}
              >
                <option value="">{filter.label}</option>
                {filter.options.map(
                  (
                    option // filter options is an array of objects with label and value
                  ) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  )
                )}
              </select>
            )
          )}
        </div>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "800px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                {[
                  "Name",
                  "Subject",
                  "Grade",
                  "No. of regular periods",
                  "No. of substitute periods",
                  "After working hours, no. of hours",
                  "Extracurricular Hours",
                  "Workload",
                  "Status",
                  "Efficiency",
                  "Last Updated",
                ].map(
                  (
                    header,
                    index // header is an array of strings
                  ) => (
                    <th
                      key={index}
                      style={{
                        padding: "16px",
                        textAlign: "left",
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map(
                (
                  teacher,
                  index // filter teachers based on selected filters
                ) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #f1f5f9",
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
                      {teacher.name}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#3b82f6",
                      }}
                    >
                      {teacher.subject}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.grade}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.totalWeeklyHours}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#3b82f6",
                      }}
                    >
                      {teacher.teachingHours}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.adminHours}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.extracurricularHours}
                    </td>
                    <td style={{ padding: "16px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: "100px",
                            height: "6px",
                            backgroundColor: "#e2e8f0",
                            borderRadius: "3px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: `${getWorkloadWidth(teacher.workload)}%`, // calculate the width of the progress bar based on the workload
                              height: "100%",
                              backgroundColor: getWorkloadColor(
                                teacher.workload
                              ), // calculate the color of the progress bar based on the workload
                              borderRadius: "3px",
                            }}
                          ></div>
                        </div>
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#1f2937",
                          }}
                        >
                          {teacher.workload}
                        </span>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color:
                          teacher.status === "Overworked"
                            ? "#ef4444"
                            : "#10b981",
                      }}
                    >
                      {teacher.status}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {teacher.efficiency}%
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#6b7280",
                      }}
                    >
                      {new Date(teacher.lastUpdated).toLocaleDateString()}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default TeacherBandwidthTracker;
