import { useState } from "react"                                                                    // importing the usestate hook
import { LogOut, TrendingUp, Target, Award, Star, Download, Calendar, CheckCircle, Clock, BookOpen, Users, FileText, Video, ChevronRight, Filter, ArrowUp, Zap, Plus, AlertTriangle } from 'lucide-react' // import of the icons from lucide-react
import { RiDashboardLine, RiTimeLine, RiBarChartBoxLine, RiMessage2Line } from "react-icons/ri"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts" // importing the recharts library for the chart
import { navigateToPage, isPageActive, handleLogout as utilHandleLogout } from "../utils/navigation" // navigating between the dashboard pages

const TeacherPerformanceDashboard = () => {                                                         // defining the TeacherPerformanceDashboard component
    const [activeNav, setActiveNav] = useState("Performance")                                       // defining the state for the active navigation
    const [selectedTimeframe, setSelectedTimeframe] = useState("6months")                           // defining the state for the selected timeframe
    const [selectedCategory, setSelectedCategory] = useState("all")                                 // defining the state for the selected category

    const handleNavigation = (page) => {                                                            // navigating event between the dashboard pages
        navigateToPage(page);                                                                       // navigating funtion for routing between the pages
    }

    const sidebarItems = [
        { icon: <RiDashboardLine size={20} color="#000" />, label: "Overview", active: isPageActive("Overview") },  // sidebar item for the overview page
        { icon: <RiTimeLine size={20} color="#000" />, label: "Workload", active: isPageActive("Workload") }, // sidebar items for the workload page
        { icon: <RiBarChartBoxLine size={20} color="#000" />, label: "Performance", active: isPageActive("Performance") },  // sidebar items for the performance page
        { icon: <RiMessage2Line size={20} color="#000" />, label: "Feedback", active: isPageActive("Feedback") }, // sidebar items for the feedback page
    ]
    // Enhanced performance data
    const performanceData = [
        { month: "Jan", score: 75, benchmark: 70, studentProgress: 72, teachingQuality: 78 },       // data for the first  month
        { month: "Feb", score: 82, benchmark: 70, studentProgress: 80, teachingQuality: 84 },       // data for the second month
        { month: "Mar", score: 78, benchmark: 70, studentProgress: 76, teachingQuality: 80 },       // data for the third  month
        { month: "Apr", score: 85, benchmark: 70, studentProgress: 83, teachingQuality: 87 },       // data for the fourth month
        { month: "May", score: 88, benchmark: 70, studentProgress: 86, teachingQuality: 90 },       // data for the fifth  month
        { month: "Jun", score: 92, benchmark: 70, studentProgress: 90, teachingQuality: 94 },       // data for the sixth  month
    ]
    // Enhanced related content
    const relatedContent = [                                                                        // related content data
        {
            title: "Effective Teaching Strategies",                                                 // title of the related content
            type: "Course",                                                                         // type of the related content
            duration: "2 weeks",                                                                    // duration of the related content
            link: "#",                                                                              // link to the related content
            icon: <BookOpen size={20} />,                                                           // icon for the related content
            color: "#3b82f6",                                                                       // color of the related content
            relevance: "High",                                                                      // relevance of the related content
            description: "Learn modern teaching methods to improve student engagement and outcomes.", // description of the related content
        },
        {
            title: "Student Engagement Techniques",
            type: "Webinar",
            duration: "45 mins",
            link: "#",
            icon: <Video size={20} />,
            color: "#10b981",
            relevance: "Medium",
            description: "Practical techniques to boost student participation and interest.",
        },
        {
            title: "Performance Improvement Guide",
            type: "PDF Guide",
            duration: "15 min read",
            link: "#",
            icon: <FileText size={20} />,
            color: "#8b5cf6",
            relevance: "High",
            description: "Step-by-step guide to improve your teaching performance metrics.",
        },
        {
            title: "Classroom Management Masterclass",
            type: "Workshop",
            duration: "3 hours",
            link: "#",
            icon: <Users size={20} />,
            color: "#f59e0b",
            relevance: "Medium",
            description: "Advanced techniques for effective classroom management.",
        },
    ]

    // Enhanced performance KPIs
    const performanceKPIs = [                                                                       // performance KPIs data
        {
            title: "Student Success Rate",                                                          // title of the performance KPI
            value: "92%",                                                                           // value of the performance KPI
            trend: "+5%",                                                                           // trend of the performance KPI
            icon: <TrendingUp size={24} />,                                                         // icon of the performance KPI
            color: "#10b981",                                                                       // color of the performance KPI
            description: "Percentage of students meeting or exceeding expected outcomes",           // description of the performance KPI
            previousValue: "87%",                                                                   // previous value of the performance KPI
        },
        {
            title: "Lesson Effectiveness",
            value: "88%",
            trend: "+3%",
            icon: <Target size={24} />,
            color: "#3b82f6",
            description: "Measured through student feedback and learning outcomes",
            previousValue: "85%",
        },
        {
            title: "Student Engagement",
            value: "94%",
            trend: "+7%",
            icon: <Users size={24} />,
            color: "#8b5cf6",
            description: "Active participation and interest during lessons",
            previousValue: "87%",
        },
        {
            title: "Professional Development",
            value: "96%",
            trend: "+4%",
            icon: <Award size={24} />,
            color: "#f59e0b",
            description: "Completion of professional growth objectives",
            previousValue: "92%",
        },
    ]

    // Enhanced competency metrics
    const competencyMetrics = [                                                                     // compentency metrics dummy data
        {
            area: "Teaching Methods",
            score: 85,
            benchmark: 80,
            improvement: ["Interactive learning techniques", "Technology integration"],
            color: "#3b82f6",
            trend: "+5",
        },
        {
            area: "Subject Knowledge",
            score: 92,
            benchmark: 85,
            improvement: ["Advanced certification", "Research participation"],
            color: "#10b981",
            trend: "+2",
        },
        {
            area: "Student Assessment",
            score: 78,
            benchmark: 75,
            improvement: ["Diversify assessment methods", "Provide more detailed feedback"],
            color: "#f59e0b",
            trend: "+3",
        },
        {
            area: "Classroom Management",
            score: 88,
            benchmark: 80,
            improvement: ["Implement positive behavior strategies", "Create more inclusive environment"],
            color: "#8b5cf6",
            trend: "+6",
        },
        {
            area: "Communication Skills",
            score: 90,
            benchmark: 85,
            improvement: ["Enhance parent communication", "Improve explanation clarity"],
            color: "#ec4899",
            trend: "+4",
        },
    ]

    // Enhanced performance metrics
    const performanceMetrics = {
        overall: {
            score: 92,
            trend: "+5%",
            previousScore: 87,
            rating: 4.8,
            status: "Exceeding Expectations",
        },
        categories: [
            {
                name: "Teaching Quality",
                score: 95,
                trend: "+3%",
                insights: "Excellent student engagement and innovative teaching methods",
                strengths: ["Clear explanations", "Engaging activities", "Effective use of technology"],
                areas: ["More differentiated instruction"],
            },
            {
                name: "Student Progress",
                score: 88,
                trend: "+6%",
                insights: "Steady improvement in test scores and learning outcomes",
                strengths: ["Consistent growth", "Strong remediation strategies"],
                areas: ["More advanced student challenges"],
            },
            {
                name: "Professional Conduct",
                score: 96,
                trend: "+2%",
                insights: "Exemplary professionalism and collaboration with colleagues",
                strengths: ["Reliability", "Teamwork", "Communication"],
                areas: ["Leadership opportunities"],
            },
            {
                name: "Innovation",
                score: 90,
                trend: "+8%",
                insights: "Creative approaches to curriculum and instruction",
                strengths: ["New teaching methods", "Technology integration"],
                areas: ["More documentation of innovative practices"],
            },
        ],
        recentFeedback: [
            {
                from: "Department Head",
                rating: 4.8,
                comment:
                    "Excellent classroom management and student engagement. Your innovative teaching methods have significantly improved student outcomes.",
                date: "2024-02-15",
                category: "Teaching Quality",
            },
            {
                from: "Principal",
                rating: 4.9,
                comment:
                    "Outstanding commitment to professional development and continuous improvement. A role model for other teachers.",
                date: "2024-02-10",
                category: "Professional Conduct",
            },
            {
                from: "Peer Review",
                rating: 4.7,
                comment:
                    "Great collaboration with colleagues and willingness to share best practices. Your contributions to our team are invaluable.",
                date: "2024-02-05",
                category: "Collaboration",
            },
        ],
    }

    // Goals and objectives
    const goalsAndObjectives = [
        {
            title: "Implement Project-Based Learning",
            progress: 75,
            deadline: "2024-03-15",
            status: "In Progress",
            description: "Integrate project-based learning approaches in at least 50% of lessons",
            milestones: [
                { title: "Research PBL methods", completed: true },
                { title: "Develop project templates", completed: true },
                { title: "Pilot in one class", completed: true },
                { title: "Expand to all classes", completed: false },
            ],
        },
        {
            title: "Increase Student Achievement",
            progress: 80,
            deadline: "2024-06-30",
            status: "On Track",
            description: "Improve average class performance by 10% on standardized assessments",
            milestones: [
                { title: "Analyze baseline data", completed: true },
                { title: "Implement targeted interventions", completed: true },
                { title: "Mid-year assessment", completed: true },
                { title: "Final assessment", completed: false },
            ],
        },
        {
            title: "Technology Integration",
            progress: 60,
            deadline: "2024-04-20",
            status: "At Risk",
            description: "Incorporate digital tools in daily instruction to enhance learning",
            milestones: [
                { title: "Technology needs assessment", completed: true },
                { title: "Professional development", completed: true },
                { title: "Implementation plan", completed: false },
                { title: "Evaluation of effectiveness", completed: false },
            ],
        },
    ]

    // Professional development activities
    const professionalDevelopment = [
        {
            title: "Advanced Instructional Strategies",
            type: "Course",
            completed: true,
            date: "2024-01-15",
            credits: 3,
            impact: "High",
            description: "Advanced techniques for differentiated instruction and personalized learning",
        },
        {
            title: "Educational Technology Conference",
            type: "Conference",
            completed: true,
            date: "2024-02-05",
            credits: 2,
            impact: "Medium",
            description: "Latest trends and tools in educational technology",
        },
        {
            title: "Data-Driven Instruction",
            type: "Workshop",
            completed: false,
            date: "2024-03-10",
            credits: 1,
            impact: "High",
            description: "Using assessment data to inform and improve instruction",
        },
        {
            title: "Classroom Management Certification",
            type: "Certification",
            completed: false,
            date: "2024-04-20",
            credits: 4,
            impact: "High",
            description: "Advanced certification in positive behavior management techniques",
        },
    ]

    // Helper function to format date
    const formatDate = (dateString) => {                                                            // Assuming date is in YYYY-MM-DD format
        const date = new Date(dateString)                                                           // Convert string to Date object
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })                 // Format as MM/DD
    }

    // Helper function to get status color
    const getStatusColor = (status) => {                                                            //  Assuming status is a string (e.g., "Completed", "Not Started", etc.)
        switch (status) {
            case "Completed":
            case "On Track":
                return "#10b981"
            case "In Progress":
                return "#3b82f6"
            case "At Risk":
                return "#f59e0b"
            case "Behind":
                return "#ef4444"
            default:
                return "#6b7280"
        }
    }

    // Helper function to get impact color
    const getImpactColor = (impact) => {                                                            // Assuming impact is a string (e.g., "Low", "Medium", "High")
        switch (impact) {
            case "High":
                return "#10b981"
            case "Medium":
                return "#f59e0b"
            case "Low":
                return "#6b7280"
            default:
                return "#6b7280"
        }
    }

    const handleLogout = () => {                                                                    // logout function 
        utilHandleLogout();                                                                         // Call the logout function from the util module
    }

    // Custom tooltip for the area chart
    const CustomTooltip = ({ active, payload, label }) => {                                         // custom tooltip for area chart
        if (active && payload && payload.length) {                                                  // check if the tooltip is active and has payload
            return (
                <div
                    style={{
                        backgroundColor: "white",
                        padding: "10px",
                        border: "1px solid #e5e7eb",
                        borderRadius: "6px",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <p style={{ margin: "0 0 5px 0", fontWeight: "600" }}>{`${label}`}</p>
                    <p style={{ margin: "0", color: "#3b82f6" }}>{`Overall Score: ${payload[0].value}`}</p>
                    <p style={{ margin: "0", color: "#10b981" }}>{`Teaching Quality: ${payload[2].value}`}</p>
                    <p style={{ margin: "0", color: "#8b5cf6" }}>{`Student Progress: ${payload[1].value}`}</p>
                    <p style={{ margin: "0", color: "#6b7280" }}>{`Benchmark: ${payload[3].value}`}</p>
                </div>
            )
        }
        return null
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
                            onClick={() => handleNavigation(item.label)}                            // Navigate onclick event between pages 
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
                                onClick={handleLogout}                                              // handleLogout is a function that logs out the user 
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
                        {                                                                           /* Header */}
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
                                    Performance Dashboard
                                </h1>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        color: "#6b7280",
                                        margin: "0",
                                    }}
                                >
                                    Track your teaching performance and professional growth
                                </p>
                            </div>
                        </div>

                        {                                                                           /* Performance Overview */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "24px",
                                borderRadius: "12px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                marginBottom: "32px",
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
                                <div>
                                    <h2 style={{ fontSize: "20px", fontWeight: "600", margin: "0", color: "#1f2937" }}>
                                        Performance Overview
                                    </h2>
                                    <p style={{ fontSize: "14px", color: "#6b7280", margin: "4px 0 0 0" }}>
                                        Current status: {performanceMetrics.overall.status}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "8px 16px",
                                        backgroundColor: "#f0fdf4",
                                        borderRadius: "6px",
                                        color: "#10b981",
                                    }}
                                >
                                    <Star size={18} fill="#10b981" />
                                    <span style={{ fontWeight: "600", fontSize: "16px" }}>{performanceMetrics.overall.rating}</span>
                                    <span style={{ fontSize: "14px" }}>/ 5.0</span>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    marginBottom: "24px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        borderRadius: "50%",
                                        border: "12px solid #3b82f6",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        backgroundColor: "white",
                                    }}
                                >
                                    <span style={{ fontSize: "32px", fontWeight: "700", color: "#1f2937" }}>
                                        {performanceMetrics.overall.score}
                                    </span>
                                    <span style={{ fontSize: "14px", color: "#6b7280" }}>Overall Score</span>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            marginBottom: "12px",
                                        }}
                                    >
                                        <span style={{ fontSize: "16px", fontWeight: "500", color: "#1f2937" }}>Previous Score:</span>
                                        <span style={{ fontSize: "16px", color: "#6b7280" }}>
                                            {performanceMetrics.overall.previousScore}
                                        </span>
                                        <span
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "2px",
                                                fontSize: "14px",
                                                color: "#10b981",
                                                fontWeight: "500",
                                            }}
                                        >
                                            <ArrowUp size={14} />
                                            {performanceMetrics.overall.trend}
                                        </span>
                                    </div>

                                    <div style={{ marginBottom: "16px" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            <span style={{ fontSize: "14px", color: "#6b7280" }}>Performance Trend</span>
                                            <span style={{ fontSize: "14px", fontWeight: "500", color: "#10b981" }}>Improving</span>
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
                                                    width: `${performanceMetrics.overall.score}%`,
                                                    height: "100%",
                                                    backgroundColor: "#3b82f6",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "16px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                padding: "8px 12px",
                                                backgroundColor: "#f0fdf4",
                                                borderRadius: "6px",
                                            }}
                                        >
                                            <CheckCircle size={16} color="#10b981" />
                                            <span style={{ fontSize: "14px", color: "#10b981", fontWeight: "500" }}>
                                                Above Department Average
                                            </span>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                padding: "8px 12px",
                                                backgroundColor: "#eff6ff",
                                                borderRadius: "6px",
                                            }}
                                        >
                                            <Award size={16} color="#3b82f6" />
                                            <span style={{ fontSize: "14px", color: "#3b82f6", fontWeight: "500" }}>Top 10% Performer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                    gap: "16px",
                                }}
                            >
                                {performanceKPIs.map((kpi, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: "16px",
                                            borderRadius: "8px",
                                            backgroundColor: "#f9fafb",
                                            border: "1px solid #e5e7eb",
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
                                                    backgroundColor: `${kpi.color}15`,
                                                    color: kpi.color,
                                                }}
                                            >
                                                {kpi.icon}
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "14px", color: "#6b7280" }}>{kpi.title}</div>
                                                <div style={{ fontSize: "20px", fontWeight: "600", color: "#1f2937" }}>{kpi.value}</div>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span style={{ fontSize: "12px", color: "#6b7280" }}>Previous: {kpi.previousValue}</span>
                                            <span
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "2px",
                                                    fontSize: "12px",
                                                    color: "#10b981",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                <TrendingUp size={12} />
                                                {kpi.trend}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {                                                                           /* Performance Trends */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "24px",
                                borderRadius: "12px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                marginBottom: "32px",
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
                                <h2 style={{ fontSize: "20px", fontWeight: "600", margin: "0", color: "#1f2937" }}>
                                    Performance Trends
                                </h2>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <button
                                        onClick={() => setSelectedTimeframe("3months")}             // Dummy button, Change this to your desired timeframe
                                        style={{
                                            padding: "6px 12px",
                                            backgroundColor: selectedTimeframe === "3months" ? "#3b82f6" : "#f3f4f6",
                                            color: selectedTimeframe === "3months" ? "white" : "#6b7280",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        3 Months
                                    </button>
                                    <button
                                        onClick={() => setSelectedTimeframe("6months")}             // Dummy button, change to your desired timeframe
                                        style={{
                                            padding: "6px 12px",
                                            backgroundColor: selectedTimeframe === "6months" ? "#3b82f6" : "#f3f4f6",
                                            color: selectedTimeframe === "6months" ? "white" : "#6b7280",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        6 Months
                                    </button>
                                    <button
                                        onClick={() => setSelectedTimeframe("1year")}               // Dummy button, change to your desired timeframe
                                        style={{
                                            padding: "6px 12px",
                                            backgroundColor: selectedTimeframe === "1year" ? "#3b82f6" : "#f3f4f6",
                                            color: selectedTimeframe === "1year" ? "white" : "#6b7280",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        1 Year
                                    </button>
                                </div>
                            </div>
                            <div style={{ height: "300px", width: "100%" }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={performanceData}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis dataKey="month" stroke="#6b7280" />
                                        <YAxis stroke="#6b7280" />
                                        <Tooltip content={<CustomTooltip />} />
                                        <defs>
                                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorStudentProgress" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorTeachingQuality" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Area
                                            type="monotone"
                                            dataKey="score"
                                            stroke="#3b82f6"
                                            fillOpacity={1}
                                            fill="url(#colorScore)"
                                            strokeWidth={2}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="studentProgress"
                                            stroke="#8b5cf6"
                                            fillOpacity={0.5}
                                            fill="url(#colorStudentProgress)"
                                            strokeWidth={2}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="teachingQuality"
                                            stroke="#10b981"
                                            fillOpacity={0.5}
                                            fill="url(#colorTeachingQuality)"
                                            strokeWidth={2}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="benchmark"
                                            stroke="#9ca3af"
                                            strokeDasharray="5 5"
                                            fill="none"
                                            strokeWidth={2}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "24px",
                                    marginTop: "16px",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div
                                        style={{
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "2px",
                                            backgroundColor: "#3b82f6",
                                        }}
                                    />
                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>Overall Score</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div
                                        style={{
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "2px",
                                            backgroundColor: "#10b981",
                                        }}
                                    />
                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>Teaching Quality</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div
                                        style={{
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "2px",
                                            backgroundColor: "#8b5cf6",
                                        }}
                                    />
                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>Student Progress</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div
                                        style={{
                                            width: "12px",
                                            height: "2px",
                                            backgroundColor: "#9ca3af",
                                        }}
                                    />
                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>Benchmark</span>
                                </div>
                            </div>
                        </div>
                        {                                                                           /* Competency Metrics and Feedback */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "32px",
                                marginBottom: "32px",
                            }}
                        >
                            {                                                                       /* Competency Metrics */}
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
                                    Competency Metrics
                                </h2>

                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {competencyMetrics.map((metric, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                padding: "16px",
                                                borderRadius: "8px",
                                                backgroundColor: "#f9fafb",
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
                                                            backgroundColor: metric.color,
                                                        }}
                                                    />
                                                    <span style={{ fontSize: "16px", fontWeight: "500", color: "#1f2937" }}>{metric.area}</span>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <span style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>{metric.score}</span>
                                                    <span
                                                        style={{
                                                            fontSize: "12px",
                                                            color: "#10b981",
                                                            fontWeight: "500",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "2px",
                                                        }}
                                                    >
                                                        <ArrowUp size={12} />
                                                        {metric.trend}
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    marginBottom: "8px",
                                                }}
                                            >
                                                <span style={{ fontSize: "12px", color: "#6b7280" }}>Benchmark: {metric.benchmark}</span>
                                                <span style={{ fontSize: "12px", color: "#6b7280" }}>
                                                    {metric.score >= metric.benchmark ? "Above" : "Below"} Benchmark
                                                </span>
                                            </div>

                                            <div
                                                style={{
                                                    width: "100%",
                                                    height: "8px",
                                                    backgroundColor: "#f3f4f6",
                                                    borderRadius: "4px",
                                                    overflow: "hidden",
                                                    position: "relative",
                                                    marginBottom: "12px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: `${metric.score}%`,
                                                        height: "100%",
                                                        backgroundColor: metric.color,
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: `${metric.benchmark}%`,
                                                        width: "2px",
                                                        height: "100%",
                                                        backgroundColor: "#6b7280",
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                <div style={{ fontSize: "12px", fontWeight: "500", color: "#6b7280", marginBottom: "4px" }}>
                                                    Focus Areas for Improvement:
                                                </div>
                                                <ul style={{ margin: "0", paddingLeft: "16px" }}>
                                                    {metric.improvement.map((item, idx) => (
                                                        <li key={idx} style={{ fontSize: "12px", color: "#6b7280" }}>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {                                                                       /* Recent Feedback */}
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
                                    <h2 style={{ fontSize: "20px", fontWeight: "600", margin: "0", color: "#1f2937" }}>
                                        Recent Feedback
                                    </h2>
                                    <button
                                        style={{
                                            padding: "6px 12px",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "6px",
                                            backgroundColor: "white",
                                            color: "#6b7280",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px",
                                        }}
                                    >
                                        <Filter size={14} />
                                        Filter
                                    </button>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {performanceMetrics.recentFeedback.map((feedback, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                padding: "16px",
                                                borderRadius: "8px",
                                                backgroundColor: "#f9fafb",
                                                border: "1px solid #e5e7eb",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "flex-start",
                                                    marginBottom: "12px",
                                                }}
                                            >
                                                <div>
                                                    <div style={{ fontSize: "16px", fontWeight: "500", color: "#1f2937" }}>{feedback.from}</div>
                                                    <div style={{ fontSize: "12px", color: "#6b7280" }}>{formatDate(feedback.date)}</div>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={14}
                                                            style={{
                                                                color: i < feedback.rating ? "#f59e0b" : "#e5e7eb",
                                                                fill: i < feedback.rating ? "#f59e0b" : "none",
                                                            }}
                                                        />
                                                    ))}
                                                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937", marginLeft: "4px" }}>
                                                        {feedback.rating}
                                                    </span>
                                                </div>
                                            </div>

                                            <p
                                                style={{
                                                    fontSize: "14px",
                                                    color: "#4b5563",
                                                    margin: "0 0 12px 0",
                                                    lineHeight: "1.5",
                                                }}
                                            >
                                                {feedback.comment}
                                            </p>

                                            <div
                                                style={{
                                                    display: "inline-block",
                                                    padding: "4px 8px",
                                                    backgroundColor: "#eff6ff",
                                                    color: "#3b82f6",
                                                    borderRadius: "4px",
                                                    fontSize: "12px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {feedback.category}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {                                                                           /* Goals & Objectives */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "24px",
                                borderRadius: "12px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                marginBottom: "32px",
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
                                <h2 style={{ fontSize: "20px", fontWeight: "600", margin: "0", color: "#1f2937" }}>
                                    Goals & Objectives
                                </h2>
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
                                    <Plus size={16} />
                                    Add Goal
                                </button>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                {goalsAndObjectives.map((goal, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: "20px",
                                            borderRadius: "8px",
                                            backgroundColor: "#f9fafb",
                                            border: "1px solid #e5e7eb",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                marginBottom: "16px",
                                            }}
                                        >
                                            <div>
                                                <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "0 0 4px 0", color: "#1f2937" }}>
                                                    {goal.title}
                                                </h3>
                                                <p style={{ fontSize: "14px", color: "#6b7280", margin: "0" }}>{goal.description}</p>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    padding: "4px 8px",
                                                    backgroundColor: `${getStatusColor(goal.status)}15`,
                                                    color: getStatusColor(goal.status),
                                                    borderRadius: "4px",
                                                    fontSize: "12px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {goal.status === "On Track" || goal.status === "Completed" ? ( // status === "On Track" || status === "Completed"
                                                    <CheckCircle size={14} />
                                                ) : goal.status === "At Risk" ? (
                                                    <AlertTriangle size={14} />
                                                ) : (
                                                    <Clock size={14} />
                                                )}
                                                {goal.status}
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <Calendar size={16} style={{ color: "#6b7280" }} />
                                                <span style={{ fontSize: "14px", color: "#6b7280" }}>Due: {formatDate(goal.deadline)}</span>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                <span style={{ fontSize: "14px", color: "#6b7280" }}>Progress:</span>
                                                <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{goal.progress}%</span>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                width: "100%",
                                                height: "8px",
                                                backgroundColor: "#f3f4f6",
                                                borderRadius: "4px",
                                                overflow: "hidden",
                                                marginBottom: "16px",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: `${goal.progress}%`,
                                                    height: "100%",
                                                    backgroundColor: getStatusColor(goal.status),   // change the color of the progress bar based on the status
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <div style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937", marginBottom: "8px" }}>
                                                Milestones:
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                                {goal.milestones.map((milestone, idx) => (
                                                    <div
                                                        key={idx}
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: "16px",
                                                                height: "16px",
                                                                borderRadius: "50%",
                                                                backgroundColor: milestone.completed ? "#10b981" : "#f3f4f6",
                                                                border: milestone.completed ? "none" : "1px solid #d1d5db",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                            }}
                                                        >
                                                            {milestone.completed && <CheckCircle size={12} color="white" />}
                                                        </div>
                                                        <span
                                                            style={{
                                                                fontSize: "14px",
                                                                color: milestone.completed ? "#1f2937" : "#6b7280",
                                                                textDecoration: milestone.completed ? "line-through" : "none",
                                                            }}
                                                        >
                                                            {milestone.title}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {                                                                           /* Professional Development */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "24px",
                                borderRadius: "12px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                marginBottom: "32px",
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
                                <h2 style={{ fontSize: "20px", fontWeight: "600", margin: "0", color: "#1f2937" }}>
                                    Professional Development
                                </h2>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "8px 12px",
                                        backgroundColor: "#f3f4f6",
                                        borderRadius: "6px",
                                        color: "#6b7280",
                                    }}
                                >
                                    <Award size={16} />
                                    <span style={{ fontSize: "14px", fontWeight: "500" }}>10 Credits Earned</span>
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
                                                Activity
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
                                                Type
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
                                                Date
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
                                                Credits
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
                                                Impact
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {professionalDevelopment.map((activity, index) => (         // map through the array of activities
                                            <tr key={index} style={{ borderBottom: "1px solid #f3f4f6" }}>
                                                <td
                                                    style={{
                                                        padding: "12px 16px",
                                                        color: "#1f2937",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {activity.title}
                                                </td>
                                                <td style={{ padding: "12px 16px" }}>
                                                    <div
                                                        style={{
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "4px",
                                                            padding: "2px 8px",
                                                            backgroundColor: "#f3f4f6",
                                                            borderRadius: "4px",
                                                            color: "#6b7280",
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        {activity.type === "Course" ? (
                                                            <BookOpen size={12} />
                                                        ) : activity.type === "Conference" ? (
                                                            <Users size={12} />
                                                        ) : activity.type === "Workshop" ? (
                                                            <Zap size={12} />
                                                        ) : (
                                                            <Award size={12} />
                                                        )}
                                                        {activity.type}
                                                    </div>
                                                </td>
                                                <td style={{ padding: "12px 16px", color: "#6b7280" }}>{formatDate(activity.date)}</td>
                                                <td
                                                    style={{
                                                        padding: "12px 16px",
                                                        color: "#1f2937",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {activity.credits}
                                                </td>
                                                <td style={{ padding: "12px 16px" }}>
                                                    <div
                                                        style={{
                                                            display: "inline-block",
                                                            padding: "2px 8px",
                                                            borderRadius: "4px",
                                                            backgroundColor: getImpactColor(activity.impact) + "20",
                                                            color: getImpactColor(activity.impact),
                                                            fontSize: "12px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {activity.impact}
                                                    </div>
                                                </td>
                                                <td style={{ padding: "12px 16px" }}>
                                                    <div
                                                        style={{
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "4px",
                                                            color: activity.completed ? "#10b981" : "#6b7280",
                                                            fontSize: "14px",
                                                        }}
                                                    >
                                                        {activity.completed ? <CheckCircle size={14} /> : <Clock size={14} />}
                                                        {activity.completed ? "Completed" : "Upcoming"}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {                                                                           /* Recommended Learning */}
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
                                Recommended Learning
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
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                marginBottom: "12px",
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
                                                            margin: "0 0 4px 0",
                                                            color: "#1f2937",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </h3>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            gap: "8px",
                                                            fontSize: "12px",
                                                            color: "#6b7280",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                padding: "2px 6px",
                                                                backgroundColor: "#f3f4f6",
                                                                borderRadius: "4px",
                                                            }}
                                                        >
                                                            {item.type}
                                                        </span>
                                                        <span>•</span>
                                                        <span>{item.duration}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    padding: "2px 6px",
                                                    backgroundColor:
                                                        item.relevance === "High" ? "#f0fdf4" : item.relevance === "Medium" ? "#fef3c7" : "#f3f4f6",
                                                    color:
                                                        item.relevance === "High" ? "#10b981" : item.relevance === "Medium" ? "#f59e0b" : "#6b7280",
                                                    borderRadius: "4px",
                                                    fontSize: "10px",
                                                    fontWeight: "500",
                                                }}
                                            >
                                                {item.relevance} Relevance
                                            </div>
                                        </div>

                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "#6b7280",
                                                margin: "0 0 16px 0",
                                                lineHeight: "1.5",
                                            }}
                                        >
                                            {item.description}
                                        </p>

                                        <button
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "4px",
                                                padding: "6px 12px",
                                                backgroundColor: "#f3f4f6",
                                                color: "#6b7280",
                                                border: "none",
                                                borderRadius: "6px",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                                cursor: "pointer",
                                            }}
                                        >
                                            View Details
                                            <ChevronRight size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherPerformanceDashboard                                                          // exporting the default component to App.jsx