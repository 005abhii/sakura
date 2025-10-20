import { useState } from "react"                                                                    // import useState from react
import {
    LogOut,
    Clock,
    BookOpen,
    Users,
    ClipboardList,
    Calendar,
    AlertTriangle,
    CheckCircle,
    Download,
    Briefcase,
    FileText,
    Coffee,
    PieChart,
    Plus,
    X,
    ArrowUp,
    ArrowDown,
} from "lucide-react"                                                                               // import icons from "lucide-react"
import { RiDashboardLine, RiTimeLine, RiBarChartBoxLine, RiMessage2Line } from "react-icons/ri"     // import icons from "react-icons/ri"
import { navigateToPage, isPageActive, handleLogout as utilHandleLogout } from "../utils/navigation" // import functions from utils/navigation

const TeacherWorkloadDashboard = () => {                                                            // define the component
    const [activeNav, setActiveNav] = useState("Workload")                                          // active nav state
    const [selectedWeek, setSelectedWeek] = useState("current")                                     // selected week state
    const [selectedView, setSelectedView] = useState("all")                                         // selected view state
    const [showAddTask, setShowAddTask] = useState(false)                                           // selected task state

    const handleNavigation = (page) => {                                                            // handle navigation
        navigateToPage(page)                                                                        // call the function to navigate to the page
    }

    const sidebarItems = [
        { icon: <RiDashboardLine size={20} color="#000" />, label: "Overview", active: isPageActive("Overview") },  // sidebar item 1
        { icon: <RiTimeLine size={20} color="#000" />, label: "Workload", active: isPageActive("Workload") },   // sidebar item 2
        { icon: <RiBarChartBoxLine size={20} color="#000" />, label: "Performance", active: isPageActive("Performance") }, // sidebar item 3
        { icon: <RiMessage2Line size={20} color="#000" />, label: "Feedback", active: isPageActive("Feedback") }, // sidebar item 4
    ]

    // Enhanced workload data
    const workloadData = [                                                                          // enhanced workload data
        { label: "Teaching", value: 80, color: "#3b82f6", hours: 25, target: 24 },                  // workload data's
        { label: "Lesson Planning", value: 60, color: "#8b5cf6", hours: 10, target: 8 },
        { label: "Grading", value: 45, color: "#06b6d4", hours: 8, target: 6 },
        { label: "Meetings", value: 30, color: "#10b981", hours: 5, target: 4 },
        { label: "Admin Tasks", value: 20, color: "#f59e0b", hours: 3, target: 4 },
    ]

    // Enhanced related content
    const relatedContent = [
        {
            title: "Workload Management Tips",
            type: "Article",
            duration: "5 min read",
            link: "#",
            icon: <Clock size={20} />,
            color: "#3b82f6",
        },
        {
            title: "Time Management for Teachers",
            type: "Video",
            duration: "10 mins",
            link: "#",
            icon: <BookOpen size={20} />,
            color: "#10b981",
        },
        {
            title: "Stress Management Workshop",
            type: "Workshop",
            duration: "1 hour",
            link: "#",
            icon: <Coffee size={20} />,
            color: "#8b5cf6",
        },
        {
            title: "Efficient Grading Techniques",
            type: "Guide",
            duration: "15 min read",
            link: "#",
            icon: <FileText size={20} />,
            color: "#f59e0b",
        },
    ]

    // Enhanced workload analytics
    const workloadAnalytics = {
        currentWeek: {
            teachingHours: 25,
            planningHours: 10,
            adminHours: 8,
            totalHours: 43,
            target: 40,
            trend: "+5%",
            overworked: true,
            efficiency: 85,
        },
        previousWeek: {
            teachingHours: 23,
            planningHours: 9,
            adminHours: 7,
            totalHours: 39,
            target: 40,
            trend: "-2%",
            overworked: false,
            efficiency: 82,
        },
        deadlines: [
            {
                id: 1,
                task: "Grade Final Submissions",
                due: "2024-02-20",
                priority: "High",
                status: "Pending",
                course: "Advanced Biology",
                timeEstimate: "4 hours",
            },
            {
                id: 2,
                task: "Prepare Lesson Plans",
                due: "2024-02-18",
                priority: "Medium",
                status: "In Progress",
                course: "Chemistry 101",
                timeEstimate: "2 hours",
            },
            {
                id: 3,
                task: "Department Meeting Preparation",
                due: "2024-02-22",
                priority: "Low",
                status: "Not Started",
                course: "Administration",
                timeEstimate: "1 hour",
            },
            {
                id: 4,
                task: "Student Progress Reports",
                due: "2024-02-25",
                priority: "High",
                status: "Not Started",
                course: "All Classes",
                timeEstimate: "5 hours",
            },
            {
                id: 5,
                task: "Lab Equipment Inventory",
                due: "2024-02-19",
                priority: "Medium",
                status: "Completed",
                course: "Science Department",
                timeEstimate: "2 hours",
            },
        ],
        weeklySchedule: [
            {
                day: "Monday",
                classes: [
                    { time: "08:00-09:30", subject: "Advanced Biology", students: 28, room: "Lab 101" },
                    { time: "10:00-11:30", subject: "Chemistry Lab", students: 24, room: "Lab 202" },
                    { time: "13:00-14:30", subject: "Department Meeting", students: 0, room: "Conference Room" },
                ],
                totalHours: 6,
                color: "#3b82f6",
            },
            {
                day: "Tuesday",
                classes: [
                    { time: "09:00-10:30", subject: "Biology 101", students: 32, room: "Room 305" },
                    { time: "11:00-12:30", subject: "Office Hours", students: 0, room: "Office 210" },
                    { time: "14:00-15:30", subject: "Chemistry 101", students: 26, room: "Lab 202" },
                ],
                totalHours: 5.5,
                color: "#8b5cf6",
            },
            {
                day: "Wednesday",
                classes: [
                    { time: "08:00-09:30", subject: "Advanced Biology", students: 28, room: "Lab 101" },
                    { time: "10:00-11:30", subject: "Research Supervision", students: 5, room: "Lab 103" },
                    { time: "13:00-15:00", subject: "Curriculum Planning", students: 0, room: "Office 210" },
                ],
                totalHours: 6,
                color: "#06b6d4",
            },
            {
                day: "Thursday",
                classes: [
                    { time: "09:00-10:30", subject: "Biology 101", students: 32, room: "Room 305" },
                    { time: "11:00-12:30", subject: "Chemistry 101", students: 26, room: "Lab 202" },
                    { time: "14:00-16:00", subject: "Grading", students: 0, room: "Office 210" },
                ],
                totalHours: 6,
                color: "#10b981",
            },
            {
                day: "Friday",
                classes: [
                    { time: "08:00-09:30", subject: "Chemistry Lab", students: 24, room: "Lab 202" },
                    { time: "10:00-11:30", subject: "Faculty Meeting", students: 0, room: "Conference Room" },
                    { time: "13:00-14:30", subject: "Student Consultations", students: 8, room: "Office 210" },
                ],
                totalHours: 5,
                color: "#f59e0b",
            },
        ],
        monthlyTrends: [
            { month: "Oct", hours: 38, target: 40 },                                                // 38 hours in October
            { month: "Nov", hours: 41, target: 40 },                                                // 41 hours in November
            { month: "Dec", hours: 36, target: 40 },                                                // 36 hours in December
            { month: "Jan", hours: 39, target: 40 },                                                // 39 hours in January
            { month: "Feb", hours: 43, target: 40 },                                                // 43 hours in February
        ],
        workloadDistribution: {                                                                     // workload distribution for each day of the week
            teaching: 58,                                                                           // 58% of workload is teaching
            planning: 23,                                                                           // 23% of workload is planning
            admin: 19,                                                                              // 19% of workload is administration
        },
    }

    // Helper function to get priority color
    const getPriorityColor = (priority) => {                                                        // returns a color based on priority
        switch (priority) {                                                                         // switch statement to return color based on priority
            case "High":
                return "#ef4444"
            case "Medium":
                return "#f59e0b"
            case "Low":
                return "#10b981"
            default:
                return "#6b7280"
        }
    }

    // Helper function to get status color
    const getStatusColor = (status) => {                                                            // returns a color based on status
        switch (status) {
            case "Completed":
                return "#10b981"
            case "In Progress":
                return "#3b82f6"
            case "Pending":
                return "#f59e0b"
            case "Not Started":
                return "#6b7280"
            default:
                return "#6b7280"
        }
    }

    // Helper function to format date
    const formatDate = (dateString) => {                                                            // formats date string to "DD MMM YYYY"
        const date = new Date(dateString)                                                           // creates a new date object
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })                 // formats date strings
    }

    // Helper function to check if a deadline is approaching (within 2 days)
    const isDeadlineApproaching = (dateString) => {                                                 //  checks if deadline is within 2 days
        const today = new Date()                                                                    // gets today's date
        const deadline = new Date(dateString)                                                       // gets deadline date
        const diffTime = deadline.getTime() - today.getTime()                                       // calculates difference in milliseconds
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))                                // converts difference to days
        return diffDays <= 2 && diffDays >= 0                                                       // returns true if deadline is within 2 days
    }

    // Helper function to check if a deadline is overdue
    const isDeadlineOverdue = (dateString) => {                                                     //  checks if deadline is overdue
        const today = new Date()                                                                    // gets today's date
        const deadline = new Date(dateString)                                                       // gets deadline date
        return deadline < today                                                                     // returns true if deadline is before today
    }

    // Filter deadlines based on selected view
    const getFilteredDeadlines = () => {                                                            // filters deadlines based on selected view
        switch (selectedView) {                                                                     // checks selected view
            case "pending":                                                                         // if view is "pending"                                                                         
                return workloadAnalytics.deadlines.filter((item) => item.status === "Pending" || item.status === "Not Started") // returns deadlines with status "Pending" or "Not Started"
            case "completed":                                                                       // if view is "completed"                                         
                return workloadAnalytics.deadlines.filter((item) => item.status === "Completed")    // returns deadlines with status "Completed"
            case "high":                                                                            // if view is "high"                                                   
                return workloadAnalytics.deadlines.filter((item) => item.priority === "High")       // returns deadlines with priority "High"
            default:                                                                                // if view is "all" or any other view
                return workloadAnalytics.deadlines                                                  // returns all deadlines
        }
    }

    // Get current week data based on selection
    const getCurrentWeekData = () => {                                                              // gets current week data based on selection                        
        return selectedWeek === "current" ? workloadAnalytics.currentWeek : workloadAnalytics.previousWeek // workload Analytics.currentWeek or workloadAnalytics.previousWeek
    }

    const handleLogout = () => {                                                                    // logs out user
        utilHandleLogout()                                                                          // calls utilHandleLogout function
    }

    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                fontFamily: "system-ui, -apple-system, sans-serif",
                backgroundColor: "#f8fafc",
            }}
        >
            {                                                                                       /* Left Sidebar */}
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
                {                                                                                   /* Logo/Header */}
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

                {                                                                                   /* Navigation Menu */}
                <nav style={{ padding: "16px 0" }}>
                    {sidebarItems.map((item, index) => (                                            // sidebar Items is an array of objects
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
                            onClick={() => handleNavigation(item.label)}                            // handle Navigation function is not defined
                        >
                            <span style={{ fontSize: "16px" }}>{item.icon}</span>
                            <span style={{ fontSize: "14px" }}>{item.label}</span>
                        </div>
                    ))}
                </nav>
            </div>

            {                                                                                       /* Main Content */}
            <div style={{ flex: 1, overflow: "auto", display: "flex" }}>
                <div style={{ flex: 1, padding: "0" }}>
                    {                                                                               /* Top Navigation */}
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
                        <div></div>
                        {                                                                           /* User Section with Logout */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "16px",
                            }}
                        >
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "8px 16px",
                                    backgroundColor: "#3b82f6",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                }}
                            >
                                <Download size={16} />
                                Export Report
                            </button>
                            <button
                                onClick={handleLogout}                                              // calling the logout function
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

                            {                                                                       /* Notification Bell */}
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

                            {                                                                       /* User Avatar */}
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

                    {                                                                               /* Content Area */}
                    <div style={{ padding: "32px", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
                        {                                                                           /* Header Section */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "32px",
                            }}
                        >
                            <div>
                                <h1
                                    style={{
                                        fontSize: "32px",
                                        fontWeight: "700",
                                        color: "#1f2937",
                                        margin: "0 0 8px 0",
                                    }}
                                >
                                    Workload Management
                                </h1>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        color: "#6b7280",
                                        margin: "0",
                                    }}
                                >
                                    Monitor and manage your teaching workload efficiently
                                </p>
                            </div>
                        </div>

                        {                                                                           /* Workload Overview Cards */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                gap: "24px",
                                marginBottom: "32px",
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: "white",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    border: "1px solid #e5e7eb",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                                    <div
                                        style={{
                                            padding: "8px",
                                            backgroundColor: "#eff6ff",
                                            borderRadius: "8px",
                                            color: "#3b82f6",
                                        }}
                                    >
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>Total Hours</div>
                                        <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>
                                            {getCurrentWeekData().totalHours}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: getCurrentWeekData().totalHours > getCurrentWeekData().target ? "#ef4444" : "#10b981",
                                            fontWeight: "500",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "2px",
                                        }}
                                    >
                                        {getCurrentWeekData().totalHours > getCurrentWeekData().target ? (  // if total hours is greater than target, display a red color
                                            <>
                                                <ArrowUp size={12} /> {getCurrentWeekData().trend} over target
                                            </>
                                        ) : (
                                            <>
                                                <ArrowDown size={12} /> {getCurrentWeekData().trend} under target
                                            </>
                                        )}
                                    </span>
                                </div>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "white",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    border: "1px solid #e5e7eb",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                                    <div
                                        style={{
                                            padding: "8px",
                                            backgroundColor: "#f0fdf4",
                                            borderRadius: "8px",
                                            color: "#10b981",
                                        }}
                                    >
                                        <BookOpen size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>Teaching Hours</div>
                                        <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>
                                            {getCurrentWeekData().teachingHours}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>
                                        {Math.round((getCurrentWeekData().teachingHours / getCurrentWeekData().totalHours) * 100)}% of total
                                        workload
                                    </span>
                                </div>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "white",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    border: "1px solid #e5e7eb",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                                    <div
                                        style={{
                                            padding: "8px",
                                            backgroundColor: "#f3e8ff",
                                            borderRadius: "8px",
                                            color: "#8b5cf6",
                                        }}
                                    >
                                        <ClipboardList size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>Planning Hours</div>
                                        <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>
                                            {getCurrentWeekData().planningHours}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>
                                        {Math.round((getCurrentWeekData().planningHours / getCurrentWeekData().totalHours) * 100)}% of total
                                        workload
                                    </span>
                                </div>
                            </div>

                            <div
                                style={{
                                    backgroundColor: "white",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    border: "1px solid #e5e7eb",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                                    <div
                                        style={{
                                            padding: "8px",
                                            backgroundColor: "#fef3c7",
                                            borderRadius: "8px",
                                            color: "#f59e0b",
                                        }}
                                    >
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>Admin Hours</div>
                                        <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>
                                            {getCurrentWeekData().adminHours}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>
                                        {Math.round((getCurrentWeekData().adminHours / getCurrentWeekData().totalHours) * 100)}% of total
                                        workload
                                    </span>
                                </div>
                            </div>
                        </div>

                        {                                                                           /* Week Selector */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "24px",
                            }}
                        >
                            <div style={{ display: "flex", gap: "12px" }}>
                                <button
                                    onClick={() => setSelectedWeek("current")}
                                    style={{
                                        padding: "8px 16px",
                                        backgroundColor: selectedWeek === "current" ? "#3b82f6" : "#f3f4f6",
                                        color: selectedWeek === "current" ? "white" : "#6b7280",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        fontWeight: "500",
                                        fontSize: "14px",
                                    }}
                                >
                                    Current Week
                                </button>
                                <button
                                    onClick={() => setSelectedWeek("previous")}
                                    style={{
                                        padding: "8px 16px",
                                        backgroundColor: selectedWeek === "previous" ? "#3b82f6" : "#f3f4f6",
                                        color: selectedWeek === "previous" ? "white" : "#6b7280",
                                        border: "none",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                        fontWeight: "500",
                                        fontSize: "14px",
                                    }}
                                >
                                    Previous Week
                                </button>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "8px 16px",
                                    backgroundColor: getCurrentWeekData().overworked ? "#fef2f2" : "#f0fdf4",
                                    borderRadius: "6px",
                                    color: getCurrentWeekData().overworked ? "#ef4444" : "#10b981",
                                    fontWeight: "500",
                                    fontSize: "14px",
                                }}
                            >
                                {getCurrentWeekData().overworked ? (                                // If the user is overworked, display a warning message
                                    <>
                                        <AlertTriangle size={16} /> Overworked
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle size={16} /> Optimal Workload
                                    </>
                                )}
                            </div>
                        </div>

                        {                                                                           /* Main Content Grid */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "32px",
                                marginBottom: "32px",
                            }}
                        >
                            {                                                                       /* Workload Distribution */}
                            <div
                                style={{
                                    backgroundColor: "white",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    border: "1px solid #e5e7eb",
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
                                    <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0, color: "#1f2937" }}>
                                        Workload Distribution
                                    </h2>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            padding: "6px 12px",
                                            backgroundColor: "#f3f4f6",
                                            borderRadius: "6px",
                                            color: "#6b7280",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        <PieChart size={14} />
                                        {selectedWeek === "current" ? "Current Week" : "Previous Week"}
                                    </div>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {workloadData.map((item, index) => (
                                        <div key={index}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    marginBottom: "8px",
                                                }}
                                            >
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <div
                                                        style={{
                                                            width: "12px",
                                                            height: "12px",
                                                            borderRadius: "50%",
                                                            backgroundColor: item.color,
                                                        }}
                                                    />
                                                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{item.label}</span>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#1f2937" }}>
                                                        {item.hours} hrs
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontSize: "12px",
                                                            color: item.hours > item.target ? "#ef4444" : "#10b981",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {item.hours > item.target ? `+${item.hours - item.target}` : `${item.hours - item.target}`}
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                style={{
                                                    width: "100%",
                                                    height: "8px",
                                                    backgroundColor: "#f3f4f6",
                                                    borderRadius: "4px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: `${item.value}%`,
                                                        height: "100%",
                                                        backgroundColor: item.color,
                                                        transition: "width 0.3s ease",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    style={{
                                        marginTop: "24px",
                                        padding: "16px",
                                        backgroundColor: "#f8fafc",
                                        borderRadius: "8px",
                                        border: "1px solid #e5e7eb",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>Efficiency Score</span>
                                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#1f2937" }}>
                                            {getCurrentWeekData().efficiency}%
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "8px",
                                            backgroundColor: "#f3f4f6",
                                            borderRadius: "4px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: `${getCurrentWeekData().efficiency}%`,       // get the efficiency value from the data
                                                height: "100%",
                                                backgroundColor:
                                                    getCurrentWeekData().efficiency >= 90           // get the efficiency value from the data
                                                        ? "#10b981"
                                                        : getCurrentWeekData().efficiency >= 70     // get the efficiency value from the data
                                                            ? "#f59e0b"
                                                            : "#ef4444",
                                                transition: "width 0.3s ease",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {                                                                       /* Weekly Schedule */}
                            <div
                                style={{
                                    backgroundColor: "white",
                                    padding: "24px",
                                    borderRadius: "12px",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    border: "1px solid #e5e7eb",
                                }}
                            >
                                <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px", color: "#1f2937" }}>
                                    Weekly Schedule
                                </h2>

                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                        maxHeight: "400px",
                                        overflowY: "auto",
                                    }}
                                >
                                    {workloadAnalytics.weeklySchedule.map((day, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                padding: "16px",
                                                borderRadius: "8px",
                                                backgroundColor: "#f8fafc",
                                                border: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    marginBottom: "12px",
                                                }}
                                            >
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <div
                                                        style={{
                                                            width: "12px",
                                                            height: "12px",
                                                            borderRadius: "50%",
                                                            backgroundColor: day.color,
                                                        }}
                                                    />
                                                    <span style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>{day.day}</span>
                                                </div>
                                                <span style={{ fontSize: "14px", color: "#6b7280" }}>{day.totalHours} hours</span>
                                            </div>

                                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                                {day.classes.map((cls, idx) => (
                                                    <div
                                                        key={idx}
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            padding: "8px 12px",
                                                            backgroundColor: "white",
                                                            borderRadius: "6px",
                                                            border: "1px solid #e5e7eb",
                                                        }}
                                                    >
                                                        <div>
                                                            <div style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{cls.subject}</div>
                                                            <div style={{ fontSize: "12px", color: "#6b7280" }}>{cls.time}</div>
                                                        </div>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                            {cls.students > 0 ? (
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        gap: "4px",
                                                                        fontSize: "12px",
                                                                        color: "#6b7280",
                                                                    }}
                                                                >
                                                                    <Users size={14} />
                                                                    {cls.students}
                                                                </div>
                                                            ) : null}
                                                            <div
                                                                style={{
                                                                    fontSize: "12px",
                                                                    color: "#6b7280",
                                                                    padding: "2px 6px",
                                                                    backgroundColor: "#f3f4f6",
                                                                    borderRadius: "4px",
                                                                }}
                                                            >
                                                                {cls.room}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {                                                                           /* Tasks and Deadlines */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "24px",
                                borderRadius: "12px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                border: "1px solid #e5e7eb",
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
                                <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0, color: "#1f2937" }}>Tasks & Deadlines</h2>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <button
                                            onClick={() => setSelectedView("all")}                  // set selected view to 'all'
                                            style={{
                                                padding: "6px 12px",
                                                backgroundColor: selectedView === "all" ? "#3b82f6" : "#f3f4f6",
                                                color: selectedView === "all" ? "white" : "#6b7280",
                                                border: "none",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            All
                                        </button>
                                        <button
                                            onClick={() => setSelectedView("pending")}              // set selected view to 'pending'
                                            style={{
                                                padding: "6px 12px",
                                                backgroundColor: selectedView === "pending" ? "#3b82f6" : "#f3f4f6",
                                                color: selectedView === "pending" ? "white" : "#6b7280",
                                                border: "none",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            Pending
                                        </button>
                                        <button
                                            onClick={() => setSelectedView("completed")}            // set selected view to 'completed'
                                            style={{
                                                padding: "6px 12px",
                                                backgroundColor: selectedView === "completed" ? "#3b82f6" : "#f3f4f6",
                                                color: selectedView === "completed" ? "white" : "#6b7280",
                                                border: "none",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            Completed
                                        </button>
                                        <button
                                            onClick={() => setSelectedView("high")}                 // set selected view to 'high'
                                            style={{
                                                padding: "6px 12px",
                                                backgroundColor: selectedView === "high" ? "#3b82f6" : "#f3f4f6",
                                                color: selectedView === "high" ? "white" : "#6b7280",
                                                border: "none",
                                                borderRadius: "6px",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            High Priority
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => setShowAddTask(true)}                        // show add task modal
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            padding: "6px 12px",
                                            backgroundColor: "#10b981",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        <Plus size={14} />
                                        Add Task
                                    </button>
                                </div>
                            </div>

                            <div style={{ overflowX: "auto" }}>
                                <table
                                    style={{
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: "14px",
                                    }}
                                >
                                    <thead>
                                        <tr style={{ backgroundColor: "#f8fafc" }}>
                                            <th
                                                style={{
                                                    padding: "12px 16px",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    borderBottom: "1px solid #e5e7eb",
                                                }}
                                            >
                                                Task
                                            </th>
                                            <th
                                                style={{
                                                    padding: "12px 16px",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    borderBottom: "1px solid #e5e7eb",
                                                }}
                                            >
                                                Course
                                            </th>
                                            <th
                                                style={{
                                                    padding: "12px 16px",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    borderBottom: "1px solid #e5e7eb",
                                                }}
                                            >
                                                Due Date
                                            </th>
                                            <th
                                                style={{
                                                    padding: "12px 16px",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    borderBottom: "1px solid #e5e7eb",
                                                }}
                                            >
                                                Priority
                                            </th>
                                            <th
                                                style={{
                                                    padding: "12px 16px",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    borderBottom: "1px solid #e5e7eb",
                                                }}
                                            >
                                                Status
                                            </th>
                                            <th
                                                style={{
                                                    padding: "12px 16px",
                                                    textAlign: "left",
                                                    fontWeight: "600",
                                                    color: "#374151",
                                                    borderBottom: "1px solid #e5e7eb",
                                                }}
                                            >
                                                Time Estimate
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getFilteredDeadlines().map((task) => (                     // fetch filtered deadlines from state
                                            <tr
                                                key={task.id}
                                                style={{
                                                    borderBottom: "1px solid #f3f4f6",
                                                    backgroundColor:
                                                        isDeadlineOverdue(task.due) && task.status !== "Completed"
                                                            ? "#fef2f2"
                                                            : isDeadlineApproaching(task.due) && task.status !== "Completed"
                                                                ? "#fef3c7"
                                                                : "transparent",
                                                }}
                                            >
                                                <td
                                                    style={{
                                                        padding: "12px 16px",
                                                        color: "#1f2937",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {task.task}
                                                </td>
                                                <td style={{ padding: "12px 16px", color: "#6b7280" }}>{task.course}</td>
                                                <td style={{ padding: "12px 16px" }}>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "4px",
                                                            color:
                                                                isDeadlineOverdue(task.due) && task.status !== "Completed"  // display overdue status
                                                                    ? "#ef4444"
                                                                    : isDeadlineApproaching(task.due) && task.status !== "Completed" // display approaching status
                                                                        ? "#f59e0b"
                                                                        : "#6b7280",
                                                        }}
                                                    >
                                                        <Calendar size={14} />
                                                        {formatDate(task.due)}
                                                        {isDeadlineOverdue(task.due) && task.status !== "Completed" && (    // display overdue status
                                                            <span
                                                                style={{
                                                                    fontSize: "10px",
                                                                    fontWeight: "500",
                                                                    padding: "2px 4px",
                                                                    backgroundColor: "#fecaca",
                                                                    color: "#ef4444",
                                                                    borderRadius: "4px",
                                                                }}
                                                            >
                                                                OVERDUE
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td style={{ padding: "12px 16px" }}>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            padding: "2px 8px",
                                                            borderRadius: "4px",
                                                            backgroundColor: getPriorityColor(task.priority) + "20", // get prioritys
                                                            color: getPriorityColor(task.priority),
                                                            fontSize: "12px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {task.priority}
                                                    </div>
                                                </td>
                                                <td style={{ padding: "12px 16px" }}>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            padding: "2px 8px",
                                                            borderRadius: "4px",
                                                            backgroundColor: getStatusColor(task.status) + "20",    // get status color
                                                            color: getStatusColor(task.status),
                                                            fontSize: "12px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {task.status}
                                                    </div>
                                                </td>
                                                <td style={{ padding: "12px 16px", color: "#6b7280" }}>{task.timeEstimate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {                                                                           /* Monthly Trends */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "24px",
                                borderRadius: "12px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                border: "1px solid #e5e7eb",
                                marginBottom: "32px",
                            }}
                        >
                            <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "24px", color: "#1f2937" }}>
                                Monthly Trends
                            </h2>

                            <div style={{ display: "flex", alignItems: "flex-end", height: "200px", gap: "16px", padding: "0 16px" }}>
                                {workloadAnalytics.monthlyTrends.map((month, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            flex: 1,
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "relative",
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    height: `${(month.hours / 50) * 100}%`,
                                                    width: "40px",
                                                    backgroundColor: month.hours > month.target ? "#fecaca" : "#bfdbfe",
                                                    borderRadius: "6px",
                                                    position: "relative",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: "-24px",
                                                        left: "50%",
                                                        transform: "translateX(-50%)",
                                                        fontSize: "12px",
                                                        fontWeight: "500",
                                                        color: month.hours > month.target ? "#ef4444" : "#3b82f6",
                                                    }}
                                                >
                                                    {month.hours}h
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: "40px",
                                                    height: "2px",
                                                    backgroundColor: "#d1d5db",
                                                    bottom: `${(month.target / 50) * 100}%`,
                                                }}
                                            />
                                        </div>
                                        <div style={{ marginTop: "8px", fontSize: "12px", fontWeight: "500", color: "#6b7280" }}>
                                            {month.month}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "16px",
                                    gap: "24px",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div
                                        style={{
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "2px",
                                            backgroundColor: "#bfdbfe",
                                        }}
                                    />
                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>Within Target</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div
                                        style={{
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "2px",
                                            backgroundColor: "#fecaca",
                                        }}
                                    />
                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>Over Target</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div
                                        style={{
                                            width: "12px",
                                            height: "2px",
                                            backgroundColor: "#d1d5db",
                                        }}
                                    />
                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>Target (40h)</span>
                                </div>
                            </div>
                        </div>

                        {                                                                           /* Related Content Section */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "24px",
                                borderRadius: "12px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                border: "1px solid #e5e7eb",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    marginBottom: "24px",
                                    color: "#1f2937",
                                }}
                            >
                                Related Resources
                            </h2>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                    gap: "16px",
                                }}
                            >
                                {relatedContent.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: "20px",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                            backgroundColor: "white",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = "translateY(-2px)"
                                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)"
                                            e.currentTarget.style.boxShadow = "none"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    padding: "8px",
                                                    borderRadius: "8px",
                                                    backgroundColor: item.color + "20",
                                                    color: item.color,
                                                }}
                                            >
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3
                                                    style={{
                                                        fontSize: "16px",
                                                        fontWeight: "500",
                                                        margin: 0,
                                                        color: "#1f2937",
                                                    }}
                                                >
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "8px",
                                                fontSize: "14px",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    padding: "2px 6px",
                                                    backgroundColor: "#f3f4f6",
                                                    borderRadius: "4px",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                {item.type}
                                            </span>
                                            <span>•</span>
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {                                                                           /* Add Task Modal */}
                        {showAddTask && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 1000,
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "white",
                                        borderRadius: "12px",
                                        width: "500px",
                                        maxWidth: "90%",
                                        padding: "24px",
                                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
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
                                        <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>Add New Task</h2>
                                        <button
                                            onClick={() => setShowAddTask(false)}                   // Close the modal
                                            style={{
                                                background: "none",
                                                border: "none",
                                                cursor: "pointer",
                                                color: "#6b7280",
                                            }}
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    color: "#374151",
                                                }}
                                            >
                                                Task Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter task name"
                                                style={{
                                                    width: "100%",
                                                    padding: "10px 12px",
                                                    border: "1px solid #e5e7eb",
                                                    borderRadius: "6px",
                                                    fontSize: "14px",
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    marginBottom: "8px",
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    color: "#374151",
                                                }}
                                            >
                                                Course
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter course name"
                                                style={{
                                                    width: "100%",
                                                    padding: "10px 12px",
                                                    border: "1px solid #e5e7eb",
                                                    borderRadius: "6px",
                                                    fontSize: "14px",
                                                }}
                                            />
                                        </div>

                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                            <div>
                                                <label
                                                    style={{
                                                        display: "block",
                                                        marginBottom: "8px",
                                                        fontSize: "14px",
                                                        fontWeight: "500",
                                                        color: "#374151",
                                                    }}
                                                >
                                                    Due Date
                                                </label>
                                                <input
                                                    type="date"
                                                    style={{
                                                        width: "100%",
                                                        padding: "10px 12px",
                                                        border: "1px solid #e5e7eb",
                                                        borderRadius: "6px",
                                                        fontSize: "14px",
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    style={{
                                                        display: "block",
                                                        marginBottom: "8px",
                                                        fontSize: "14px",
                                                        fontWeight: "500",
                                                        color: "#374151",
                                                    }}
                                                >
                                                    Time Estimate
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g., 2 hours"
                                                    style={{
                                                        width: "100%",
                                                        padding: "10px 12px",
                                                        border: "1px solid #e5e7eb",
                                                        borderRadius: "6px",
                                                        fontSize: "14px",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                            <div>
                                                <label
                                                    style={{
                                                        display: "block",
                                                        marginBottom: "8px",
                                                        fontSize: "14px",
                                                        fontWeight: "500",
                                                        color: "#374151",
                                                    }}
                                                >
                                                    Priority
                                                </label>
                                                <select
                                                    style={{
                                                        width: "100%",
                                                        padding: "10px 12px",
                                                        border: "1px solid #e5e7eb",
                                                        borderRadius: "6px",
                                                        fontSize: "14px",
                                                        backgroundColor: "white",
                                                    }}
                                                >
                                                    <option value="Low">Low</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="High">High</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label
                                                    style={{
                                                        display: "block",
                                                        marginBottom: "8px",
                                                        fontSize: "14px",
                                                        fontWeight: "500",
                                                        color: "#374151",
                                                    }}
                                                >
                                                    Status
                                                </label>
                                                <select
                                                    style={{
                                                        width: "100%",
                                                        padding: "10px 12px",
                                                        border: "1px solid #e5e7eb",
                                                        borderRadius: "6px",
                                                        fontSize: "14px",
                                                        backgroundColor: "white",
                                                    }}
                                                >
                                                    <option value="Not Started">Not Started</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                                            <button
                                                onClick={() => setShowAddTask(false)}               // set showAddTask to false when button is clicked
                                                style={{
                                                    padding: "10px 16px",
                                                    border: "1px solid #e5e7eb",
                                                    borderRadius: "6px",
                                                    backgroundColor: "white",
                                                    color: "#6b7280",
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                style={{
                                                    padding: "10px 16px",
                                                    border: "none",
                                                    borderRadius: "6px",
                                                    backgroundColor: "#3b82f6",
                                                    color: "white",
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Add Task
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherWorkloadDashboard                                                             // export the default component to App.jsx 