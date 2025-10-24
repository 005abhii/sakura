"use client";

import { useState } from "react";
import {
  LogOut,
  AlertCircle,
  BarChart2,
  Clock,
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
  Search,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const TeacherBandwidthTracker = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [timelineView, setTimelineView] = useState("past");

  const generateTimelineData = (teacherId, view) => {
    const data = [];
    const currentDate = new Date();

    if (view === "past") {
      for (let i = 11; i >= 0; i--) {
        const date = new Date(currentDate);
        date.setMonth(date.getMonth() - i);
        data.push({
          month: date.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }),
          teachingHours: Math.floor(Math.random() * 10) + 20,
          adminHours: Math.floor(Math.random() * 5) + 8,
          extracurricular: Math.floor(Math.random() * 5) + 3,
          substitutePeriods: Math.floor(Math.random() * 8) + 2,
          events: generateMonthEvents(date, teacherId),
        });
      }
    } else {
      for (let i = 0; i < 4; i++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + i * 7);
        data.push({
          week: `Week ${i + 1}`,
          date: date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          plannedTeaching: Math.floor(Math.random() * 8) + 18,
          plannedAdmin: Math.floor(Math.random() * 4) + 8,
          plannedExtracurricular: Math.floor(Math.random() * 3) + 2,
          events: generateFutureEvents(date, teacherId),
        });
      }
    }
    return data;
  };

  const generateMonthEvents = (date, teacherId) => {
    const events = [
      "Parent-Teacher Meeting",
      "Department Workshop",
      "Curriculum Review",
      "Student Assessment",
      "Professional Development",
      "Staff Meeting",
    ];
    const numEvents = Math.floor(Math.random() * 3) + 1;
    return Array.from(
      { length: numEvents },
      () => events[Math.floor(Math.random() * events.length)]
    );
  };

  const generateFutureEvents = (date, teacherId) => {
    const events = [
      "Scheduled Parent Meeting",
      "Upcoming Workshop",
      "Field Trip Planning",
      "Exam Preparation",
      "Team Collaboration",
      "Project Review",
    ];
    const numEvents = Math.floor(Math.random() * 2) + 1;
    return Array.from(
      { length: numEvents },
      () => events[Math.floor(Math.random() * events.length)]
    );
  };

  const teacherData = [
    {
      id: 1,
      name: "Ms. Bennett",
      subject: "Mathematics",
      grade: "Grade 8",
      totalWeeklyHours: 40,
      teachingHours: 25,
      adminHours: 10,
      extracurricularHours: 5,
      workload: 35,
      status: "Optimal",
      efficiency: 85,
      syllabusCompletion: 92,
      deviation: -3,
      lastUpdated: "2023-12-05",
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
      syllabusCompletion: 88,
      deviation: 5,
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
      syllabusCompletion: 78,
      deviation: -12,
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
      syllabusCompletion: 95,
      deviation: 8,
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
      syllabusCompletion: 90,
      deviation: 2,
      lastUpdated: "2023-12-05",
    },
  ];

  const workloadStats = {
    overworked: teacherData.filter((t) => t.workload > 35).length,
    optimal: teacherData.filter((t) => t.workload >= 25 && t.workload <= 35)
      .length,
    available: teacherData.filter((t) => t.workload < 25).length,
    averageWorkload:
      teacherData.reduce((acc, curr) => acc + curr.workload, 0) /
      teacherData.length,
  };

  const getWorkloadColor = (workload) => {
    if (workload <= 20) return "#22c55e";
    if (workload <= 30) return "#3b82f6";
    if (workload <= 35) return "#f59e0b";
    return "#ef4444";
  };

  const getWorkloadWidth = (workload) => {
    return Math.min((workload / 45) * 100, 100);
  };

  const getStatusColor = (status) => {
    if (status === "Overworked")
      return { bg: "#fef2f2", text: "#dc2626", border: "#fca5a5" };
    if (status === "Available")
      return { bg: "#f0fdf4", text: "#16a34a", border: "#86efac" };
    return { bg: "#eff6ff", text: "#2563eb", border: "#93c5fd" };
  };

  const filteredTeachers = teacherData.filter((teacher) => {
    return (
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSubject === "" || teacher.subject === selectedSubject) &&
      (selectedGrade === "" || teacher.grade === selectedGrade) &&
      (selectedStatus === "" || teacher.status === selectedStatus)
    );
  });

  const statsCards = [
    {
      title: "Average Workload",
      value: `${workloadStats.averageWorkload.toFixed(1)}h`,
      icon: <Clock size={20} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      trend: "+2.5%",
    },
    {
      title: "Overworked Teachers",
      value: workloadStats.overworked,
      icon: <AlertCircle size={20} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      trend: "-1",
    },
    {
      title: "Optimal Workload",
      value: workloadStats.optimal,
      icon: <BarChart2 size={20} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      trend: "+2",
    },
    {
      title: "Available Capacity",
      value: workloadStats.available,
      icon: <Briefcase size={20} />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      trend: "+1",
    },
  ];

  const filterOptions = [
    {
      label: "Subject",
      value: selectedSubject,
      setter: setSelectedSubject,
      options: ["Mathematics", "Science", "English", "History", "Art"],
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

  const generateDayEvents = (date, teacherId) => {
    const events = [
      { type: "teaching", label: "Class - Math 101", time: "9:00 AM" },
      { type: "admin", label: "Staff Meeting", time: "2:00 PM" },
      { type: "extracurricular", label: "Chess Club", time: "4:00 PM" },
      { type: "teaching", label: "Class - Math 201", time: "11:00 AM" },
    ];
    const count = Math.floor(Math.random() * 3);
    return events.slice(0, count);
  };

  // const generateFutureEvents = (date, teacherId) => {
  //   const events = [
  //     { type: "teaching", label: "Planned - Math 101", time: "9:00 AM" },
  //     { type: "admin", label: "Department Meeting", time: "1:00 PM" },
  //     { type: "extracurricular", label: "Science Fair Prep", time: "3:30 PM" },
  //   ];
  //   const count = Math.floor(Math.random() * 2) + 1;
  //   return events.slice(0, count);
  // };

  const generateCalendarData = (teacherId, view) => {
    const currentDate = new Date();
    const calendar = [];
    if (view === "past") {
      for (let monthOffset = 11; monthOffset >= 0; monthOffset--) {
        const targetDate = new Date(currentDate);
        targetDate.setMonth(targetDate.getMonth() - monthOffset);
        targetDate.setDate(1);

        const month = targetDate.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
        const daysInMonth = new Date(
          targetDate.getFullYear(),
          targetDate.getMonth() + 1,
          0
        ).getDate();
        const firstDayOfWeek = targetDate.getDay();

        const days = [];
        for (let i = 0; i < firstDayOfWeek; i++) {
          days.push({ empty: true });
        }

        for (let day = 1; day <= daysInMonth; day++) {
          const date = new Date(
            targetDate.getFullYear(),
            targetDate.getMonth(),
            day
          );
          const isToday = date.toDateString() === new Date().toDateString();
          const isPast = date < new Date();

          days.push({
            day,
            date,
            isToday,
            isPast,
            events: day % 3 === 0 ? generateDayEvents(date, teacherId) : [],
            teachingHours:
              day % 2 === 0 ? Math.floor(Math.random() * 4) + 4 : 0,
            adminHours: day % 3 === 0 ? Math.floor(Math.random() * 2) + 1 : 0,
            extracurricular:
              day % 4 === 0 ? Math.floor(Math.random() * 2) + 1 : 0,
          });
        }

        calendar.push({ month, days });
      }
    } else {
      const nextMonth = new Date(currentDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      nextMonth.setDate(1);

      const month = nextMonth.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
      const daysInMonth = new Date(
        nextMonth.getFullYear(),
        nextMonth.getMonth() + 1,
        0
      ).getDate();
      const firstDayOfWeek = nextMonth.getDay();

      const days = [];
      for (let i = 0; i < firstDayOfWeek; i++) {
        days.push({ empty: true });
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(
          nextMonth.getFullYear(),
          nextMonth.getMonth(),
          day
        );
        days.push({
          day,
          date,
          isFuture: true,
          events: day % 3 === 0 ? generateFutureEvents(date, teacherId) : [],
          plannedTeaching:
            day % 2 === 0 ? Math.floor(Math.random() * 4) + 4 : 0,
          plannedAdmin: day % 3 === 0 ? Math.floor(Math.random() * 2) + 1 : 0,
        });
      }

      calendar.push({ month, days });
    }

    return calendar;
  };

  const CalendarDay = ({ dayData, onClick }) => {
    if (dayData.empty) {
      return <div style={{ padding: "8px" }} />;
    }

    const hasEvents = dayData.events && dayData.events.length > 0;
    const totalHours =
      (dayData.teachingHours || dayData.plannedTeaching || 0) +
      (dayData.adminHours || dayData.plannedAdmin || 0) +
      (dayData.extracurricular || 0);

    // Different colors for future vs past
    const isFuture = dayData.isFuture;
    const bgColor = dayData.isToday
      ? "#fef3c7"
      : isFuture
      ? hasEvents
        ? "#f0fdf4"
        : "white"
      : hasEvents
      ? "#f0f9ff"
      : "white";
    const borderColor = isFuture ? "#86efac" : "#e2e8f0";

    return (
      <div
        onClick={() => onClick(dayData)}
        style={{
          padding: "8px",
          minHeight: "80px",
          border: `1px solid ${borderColor}`,
          borderRadius: "8px",
          backgroundColor: bgColor,
          cursor: hasEvents ? "pointer" : "default",
          transition: "all 0.2s",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          if (hasEvents) {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div
          style={{
            fontWeight: dayData.isToday ? "700" : "600",
            color: dayData.isToday
              ? "#f59e0b"
              : isFuture
              ? "#16a34a"
              : "#1e293b",
            marginBottom: "4px",
            fontSize: "14px",
          }}
        >
          {dayData.day}
        </div>
        {hasEvents && (
          <div
            style={{
              fontSize: "11px",
              color: isFuture ? "#15803d" : "#64748b",
            }}
          >
            {dayData.events.slice(0, 2).map((event, i) => (
              <div
                key={i}
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginBottom: "2px",
                }}
              >
                • {event.label}
              </div>
            ))}
            {dayData.events.length > 2 && (
              <div
                style={{
                  color: isFuture ? "#16a34a" : "#667eea",
                  fontWeight: "600",
                }}
              >
                +{dayData.events.length - 2} more
              </div>
            )}
          </div>
        )}
        {totalHours > 0 && (
          <div
            style={{
              position: "absolute",
              bottom: "4px",
              right: "4px",
              fontSize: "10px",
              color: isFuture ? "#16a34a" : "#64748b",
              backgroundColor: isFuture ? "#dcfce7" : "#f1f5f9",
              padding: "2px 6px",
              borderRadius: "4px",
              fontWeight: "600",
            }}
          >
            {totalHours}h
          </div>
        )}
      </div>
    );
  };

  const DayDetailModal = ({ dayData, onClose }) => {
    const getEventIcon = (type) => {
      switch (type) {
        case "teaching":
          return <BookOpen size={16} />;
        case "admin":
          return <Users size={16} />;
        case "extracurricular":
          return <Award size={16} />;
        default:
          return <Clock size={16} />;
      }
    };

    const getEventColor = (type) => {
      switch (type) {
        case "teaching":
          return "#667eea";
        case "admin":
          return "#f59e0b";
        case "extracurricular":
          return "#10b981";
        default:
          return "#64748b";
      }
    };

    const isFuture = dayData.isFuture;

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2000,
        }}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "24px",
            maxWidth: "500px",
            width: "90%",
            maxHeight: "80vh",
            overflow: "auto",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1e293b",
                }}
              >
                {dayData.date.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              {isFuture && (
                <div
                  style={{
                    display: "inline-block",
                    marginTop: "8px",
                    padding: "4px 12px",
                    backgroundColor: "#dcfce7",
                    color: "#16a34a",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Upcoming
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#f1f5f9",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              ×
            </button>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#64748b",
                marginBottom: "12px",
              }}
            >
              {isFuture ? "Planned Activities" : "Activity Summary"}
            </h4>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {(dayData.teachingHours || dayData.plannedTeaching) > 0 && (
                <div
                  style={{
                    padding: "8px 12px",
                    backgroundColor: isFuture ? "#dbeafe" : "#ede9fe",
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: isFuture ? "#1d4ed8" : "#667eea",
                    fontWeight: "600",
                    border: isFuture ? "1px dashed #60a5fa" : "none",
                  }}
                >
                  {isFuture ? "Planned " : ""}Teaching:{" "}
                  {dayData.teachingHours || dayData.plannedTeaching}h
                </div>
              )}
              {(dayData.adminHours || dayData.plannedAdmin) > 0 && (
                <div
                  style={{
                    padding: "8px 12px",
                    backgroundColor: isFuture ? "#fef3c7" : "#fef3c7",
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: isFuture ? "#d97706" : "#f59e0b",
                    fontWeight: "600",
                    border: isFuture ? "1px dashed #fbbf24" : "none",
                  }}
                >
                  {isFuture ? "Planned " : ""}Admin:{" "}
                  {dayData.adminHours || dayData.plannedAdmin}h
                </div>
              )}
              {dayData.extracurricular > 0 && (
                <div
                  style={{
                    padding: "8px 12px",
                    backgroundColor: isFuture ? "#d1fae5" : "#d1fae5",
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: isFuture ? "#059669" : "#10b981",
                    fontWeight: "600",
                    border: isFuture ? "1px dashed #34d399" : "none",
                  }}
                >
                  {isFuture ? "Planned " : ""}Activities:{" "}
                  {dayData.extracurricular}h
                </div>
              )}
            </div>
          </div>

          {dayData.events && dayData.events.length > 0 && (
            <div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#64748b",
                  marginBottom: "12px",
                }}
              >
                {isFuture ? "Scheduled Events" : "Events"}
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {dayData.events.map((event, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "12px",
                      backgroundColor: isFuture ? "#f0fdf4" : "#f8fafc",
                      borderRadius: "8px",
                      borderLeft: `3px solid ${getEventColor(event.type)}`,
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      border: isFuture ? "1px dashed #86efac" : "none",
                      borderLeft: `3px solid ${getEventColor(event.type)}`,
                    }}
                  >
                    <div style={{ color: getEventColor(event.type) }}>
                      {getEventIcon(event.type)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontWeight: "600",
                          color: "#1e293b",
                          fontSize: "14px",
                        }}
                      >
                        {event.label}
                      </div>
                      <div
                        style={{
                          color: "#64748b",
                          fontSize: "12px",
                          marginTop: "2px",
                        }}
                      >
                        {event.time}
                      </div>
                    </div>
                    {isFuture && (
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#16a34a",
                          fontWeight: "600",
                          backgroundColor: "#dcfce7",
                          padding: "2px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        Planned
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const TimelineModal = ({ teacher, onClose }) => {
    const [timelineView, setTimelineView] = useState("past");
    const [selectedDay, setSelectedDay] = useState(null);
    const calendarData = generateCalendarData(teacher.id, timelineView);

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
            backdropFilter: "blur(4px)",
          }}
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              maxWidth: "1200px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                padding: "32px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                      marginBottom: "8px",
                    }}
                  >
                    {teacher.name}
                  </h2>
                  <p style={{ fontSize: "16px", opacity: 0.9 }}>
                    {teacher.subject} • {teacher.grade}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "24px",
                    fontWeight: "300",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "rgba(255,255,255,0.3)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "rgba(255,255,255,0.2)")
                  }
                >
                  ×
                </button>
              </div>
            </div>

            <div style={{ flex: 1, overflow: "auto" }}>
              <div style={{ padding: "24px 32px", backgroundColor: "#f8fafc" }}>
                <div
                  style={{
                    display: "inline-flex",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    padding: "4px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <button
                    onClick={() => setTimelineView("past")}
                    style={{
                      padding: "10px 28px",
                      borderRadius: "10px",
                      border: "none",
                      background:
                        timelineView === "past"
                          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          : "transparent",
                      color: timelineView === "past" ? "white" : "#64748b",
                      cursor: "pointer",
                      fontWeight: "600",
                      transition: "all 0.3s",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                    }}
                  >
                    <Calendar size={16} />
                    Past Year
                  </button>
                  <button
                    onClick={() => setTimelineView("future")}
                    style={{
                      padding: "10px 28px",
                      borderRadius: "10px",
                      border: "none",
                      background:
                        timelineView === "future"
                          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          : "transparent",
                      color: timelineView === "future" ? "white" : "#64748b",
                      cursor: "pointer",
                      fontWeight: "600",
                      transition: "all 0.3s",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                    }}
                  >
                    <Calendar size={16} />
                    Next Month
                  </button>
                </div>
              </div>

              <div style={{ padding: "24px 32px", backgroundColor: "white" }}>
                {calendarData.map((monthData, idx) => (
                  <div
                    key={idx}
                    style={{
                      marginBottom:
                        idx < calendarData.length - 1 ? "32px" : "0",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#1e293b",
                        marginBottom: "16px",
                      }}
                    >
                      {monthData.month}
                    </h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                        gap: "8px",
                      }}
                    >
                      {weekDays.map((day) => (
                        <div
                          key={day}
                          style={{
                            padding: "8px",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "12px",
                            color: "#64748b",
                          }}
                        >
                          {day}
                        </div>
                      ))}
                      {monthData.days.map((day, i) => (
                        <CalendarDay
                          key={i}
                          dayData={day}
                          onClick={(data) => setSelectedDay(data)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {selectedDay && (
          <DayDetailModal
            dayData={selectedDay}
            onClose={() => setSelectedDay(null)}
          />
        )}
      </>
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%)",
        padding: "40px 32px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "8px",
            letterSpacing: "-0.02em",
          }}
        >
          Teacher Bandwidth Tracker
        </h1>
        <p style={{ fontSize: "16px", color: "#64748b" }}>
          Monitor and optimize teacher workload distribution
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        {statsCards.map((stat, index) => (
          <div
            key={index}
            style={{
              background: stat.gradient,
              borderRadius: "20px",
              padding: "28px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              transition: "all 0.3s",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  padding: "12px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "white",
                  backdropFilter: "blur(10px)",
                }}
              >
                {stat.icon}
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <TrendingUp size={12} />
                {stat.trend}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.9)",
                  marginBottom: "4px",
                  fontWeight: "500",
                }}
              >
                {stat.title}
              </div>
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  color: "white",
                }}
              >
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Teacher Table */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "4px",
                }}
              >
                Teacher Overview
              </h2>
              <p style={{ fontSize: "14px", color: "#64748b" }}>
                {filteredTeachers.length} teachers found
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr repeat(3, 1fr)",
              gap: "16px",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <div style={{ position: "relative" }}>
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                }}
              />
              <input
                type="text"
                placeholder="Search teachers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px 12px 48px",
                  borderRadius: "12px",
                  border: "2px solid #e2e8f0",
                  fontSize: "14px",
                  transition: "all 0.3s",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              />
            </div>

            {filterOptions.map((filter, index) => (
              <select
                key={index}
                value={filter.value}
                onChange={(e) => filter.setter(e.target.value)}
                style={{
                  padding: "12px 16px",
                  borderRadius: "12px",
                  border: "2px solid #e2e8f0",
                  fontSize: "14px",
                  color: "#1e293b",
                  backgroundColor: "white",
                  cursor: "pointer",
                  outline: "none",
                  transition: "all 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
              >
                <option value="">All {filter.label}s</option>
                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "1400px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                {[
                  "Teacher",
                  "Subject",
                  "Grade",
                  "Regular Hours",
                  "Substitute Hours",
                  "Admin Hours",
                  "Extra Hours",
                  "Workload",
                  "Status",
                  "Syllabus",
                  "Deviation",
                  "Efficiency",
                  "Last Updated",
                  "Timeline",
                ].map((header, index) => (
                  <th
                    key={index}
                    style={{
                      padding: "20px 24px",
                      textAlign: "left",
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#475569",
                      borderBottom: "2px solid #e2e8f0",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #f1f5f9",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#fafbfc")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <td
                    style={{
                      padding: "20px 24px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "12px",
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: "700",
                          fontSize: "16px",
                        }}
                      >
                        {teacher.name.split(" ")[1][0]}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            color: "#0f172a",
                          }}
                        >
                          {teacher.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "20px 24px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#667eea",
                    }}
                  >
                    {teacher.subject}
                  </td>
                  <td
                    style={{
                      padding: "20px 24px",
                      fontSize: "14px",
                      color: "#64748b",
                    }}
                  >
                    {teacher.grade}
                  </td>
                  <td
                    style={{
                      padding: "20px 24px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1e293b",
                    }}
                  >
                    {teacher.totalWeeklyHours}h
                  </td>
                  <td
                    style={{
                      padding: "20px 24px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#667eea",
                    }}
                  >
                    {teacher.teachingHours}h
                  </td>
                  <td
                    style={{
                      padding: "20px 24px",
                      fontSize: "14px",
                      color: "#64748b",
                    }}
                  >
                    {teacher.adminHours}h
                  </td>
                  <td
                    style={{
                      padding: "20px 24px",
                      fontSize: "14px",
                      color: "#64748b",
                    }}
                  >
                    {teacher.extracurricularHours}h
                  </td>
                  <td style={{ padding: "20px 24px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "120px",
                          height: "8px",
                          backgroundColor: "#f1f5f9",
                          borderRadius: "10px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: `${getWorkloadWidth(teacher.workload)}%`,
                            height: "100%",
                            background: `linear-gradient(to right, ${getWorkloadColor(
                              teacher.workload
                            )}, ${getWorkloadColor(teacher.workload)}dd)`,
                            borderRadius: "10px",
                            transition: "all 0.5s",
                          }}
                        ></div>
                      </div>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#1e293b",
                        }}
                      >
                        {teacher.workload}h
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "20px 24px" }}>
                    <span
                      style={{
                        padding: "6px 14px",
                        borderRadius: "20px",
                        fontSize: "13px",
                        fontWeight: "600",
                        backgroundColor: getStatusColor(teacher.status).bg,
                        color: getStatusColor(teacher.status).text,
                        border: `1px solid ${
                          getStatusColor(teacher.status).border
                        }`,
                        display: "inline-block",
                      }}
                    >
                      {teacher.status}
                    </span>
                  </td>
                  <td style={{ padding: "20px 24px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: `conic-gradient(#667eea ${
                            teacher.syllabusCompletion * 3.6
                          }deg, #e2e8f0 0deg)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            fontWeight: "700",
                            color: "#1e293b",
                          }}
                        >
                          {teacher.syllabusCompletion}%
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "20px 24px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          color:
                            teacher.deviation > 0
                              ? "#10b981"
                              : teacher.deviation < 0
                              ? "#ef4444"
                              : "#64748b",
                        }}
                      >
                        {teacher.deviation > 0 ? "+" : ""}
                        {teacher.deviation}%
                      </span>
                      <span
                        style={{
                          padding: "4px 10px",
                          borderRadius: "12px",
                          fontSize: "11px",
                          fontWeight: "600",
                          backgroundColor:
                            teacher.deviation > 0
                              ? "#f0fdf4"
                              : teacher.deviation < 0
                              ? "#fef2f2"
                              : "#f8fafc",
                          color:
                            teacher.deviation > 0
                              ? "#16a34a"
                              : teacher.deviation < 0
                              ? "#dc2626"
                              : "#64748b",
                          border: `1px solid ${
                            teacher.deviation > 0
                              ? "#86efac"
                              : teacher.deviation < 0
                              ? "#fca5a5"
                              : "#e2e8f0"
                          }`,
                        }}
                      >
                        {teacher.deviation > 0
                          ? "Ahead"
                          : teacher.deviation < 0
                          ? "Behind"
                          : "On Track"}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "20px 24px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: `conic-gradient(#667eea ${
                            teacher.efficiency * 3.6
                          }deg, #e2e8f0 0deg)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            fontWeight: "700",
                            color: "#1e293b",
                          }}
                        >
                          {teacher.efficiency}
                        </div>
                      </div>
                      <span style={{ fontSize: "13px", color: "#64748b" }}>
                        %
                      </span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "20px 24px",
                      fontSize: "14px",
                      color: "#64748b",
                    }}
                  >
                    {new Date(teacher.lastUpdated).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td style={{ padding: "20px 24px" }}>
                    <button
                      onClick={() => setSelectedTeacher(teacher)}
                      style={{
                        padding: "10px 20px",
                        borderRadius: "12px",
                        border: "none",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transition: "all 0.3s",
                        boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow =
                          "0 4px 12px rgba(102, 126, 234, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow =
                          "0 2px 8px rgba(102, 126, 234, 0.3)";
                      }}
                    >
                      <Calendar size={16} />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTeachers.length === 0 && (
          <div
            style={{
              padding: "60px",
              textAlign: "center",
              color: "#94a3b8",
            }}
          >
            <Users size={48} style={{ marginBottom: "16px", opacity: 0.5 }} />
            <p style={{ fontSize: "16px", fontWeight: "600" }}>
              No teachers found
            </p>
            <p style={{ fontSize: "14px", marginTop: "8px" }}>
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>

      {/* Timeline Modal */}
      {selectedTeacher && (
        <TimelineModal
          teacher={selectedTeacher}
          onClose={() => setSelectedTeacher(null)}
        />
      )}
    </main>
  );
};

export default TeacherBandwidthTracker;
