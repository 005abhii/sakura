import { useState } from "react"                                                                    // importing useState hook
import { LogOut, MessageSquare, ThumbsUp, Star, Users, TrendingUp, Target, Award, BookOpen, BarChart3, Filter, Download, Eye, Heart } from 'lucide-react' // importing icons from lucide-react
import { RiDashboardLine, RiTimeLine, RiBarChartBoxLine, RiMessage2Line } from "react-icons/ri"     // importing icons
import { navigateToPage, isPageActive, handleLogout as utilHandleLogout } from "../utils/navigation" // importing utility functions

const TeacherFeedbackDashboard = () => {                                                            // defining the component
    const [activeNav, setActiveNav] = useState("Feedback")                                          // usestate to store the active navigation tab

    const handleNavigation = (page) => {                                                            // function to handle navigation
        navigateToPage(page);                                                                       // calling the utility function to navigate to the page
    }

    const sidebarItems = [
        { icon: <RiDashboardLine size={20} color="#000" />, label: "Overview", active: isPageActive("Overview") }, // sidebar item with icon and label
        { icon: <RiTimeLine size={20} color="#000" />, label: "Workload", active: isPageActive("Workload") }, // sidebar item with icon and label
        { icon: <RiBarChartBoxLine size={20} color="#000" />, label: "Performance", active: isPageActive("Performance") }, // sidebar item with icon and label
        { icon: <RiMessage2Line size={20} color="#000" />, label: "Feedback", active: isPageActive("Feedback") },// sidebar item with icon and label
    ]

    // Enhanced feedback analytics with more comprehensive data
    const feedbackAnalytics = {                                                                     // object containing feedback analytics data
        summary: {                                                                                  // summary of feedback analytics
            averageRating: 4.8,                                                                     // average rating of feedback
            totalFeedback: 156,                                                                     // total number of feedback
            positivePercentage: 92,                                                                 // percentage of positive feedback
            responseRate: 88,                                                                       // response rate of feedback
            improvementScore: 15,                                                                   // improvement score of feedback
            studentSatisfaction: 94,                                                                // student satisfaction score of feedback
        },
        categories: [
            {
                name: "Teaching Methods",
                rating: 4.9,
                responses: 45,
                trend: "+0.3",
                color: "#10b981",
                percentage: 96,
            },
            {
                name: "Student Engagement",
                rating: 4.7,
                responses: 38,
                trend: "+0.2",
                color: "#3b82f6",
                percentage: 89,
            },
            {
                name: "Communication",
                rating: 4.8,
                responses: 42,
                trend: "+0.1",
                color: "#8b5cf6",
                percentage: 93,
            },
            {
                name: "Course Content",
                rating: 4.6,
                responses: 31,
                trend: "-0.1",
                color: "#f59e0b",
                percentage: 87,
            },
        ],
        recentFeedback: [                                                                           // recent feedback data
            {
                id: 1,                                                                              // unique id of feedback
                student: "Anonymous Student #1",                                                    // student who provided feedback
                rating: 5,                                                                          // rating of feedback
                comment:                                                                            // comment provided by student
                    "Very clear explanations and always available for questions. The interactive sessions really help understand complex topics.",
                date: "2024-02-15",                                                                 // date when feedback was provided
                helpful: 12,                                                                        // number of students who found this feedback helpful
                category: "Teaching Methods",                                                       // category of feedback
                sentiment: "positive",                                                              // sentiment of feedback (positive or negative)
            },
            {
                id: 2,
                student: "Anonymous Student #2",
                rating: 4,
                comment: "Great teacher but could use more group activities to make classes more engaging.",
                date: "2024-02-14",
                helpful: 8,
                category: "Student Engagement",
                sentiment: "constructive",
            },
            {
                id: 3,
                student: "Anonymous Student #3",
                rating: 5,
                comment: "Excellent communication skills and very patient with students who need extra help.",
                date: "2024-02-13",
                helpful: 15,
                category: "Communication",
                sentiment: "positive",
            },
            {
                id: 4,
                student: "Anonymous Student #4",
                rating: 4,
                comment: "Course material is well-organized but some topics could be explained in more detail.",
                date: "2024-02-12",
                helpful: 6,
                category: "Course Content",
                sentiment: "constructive",
            },
        ],
        improvements: [                                                                             // improvements data
            {
                area: "Group Activities",                                                           // area of improvement
                suggestion: "Incorporate more collaborative learning sessions",                     // suggestion for improvement
                status: "In Progress",                                                              // status of improvement (e.g., in progress, completed)
                priority: "High",                                                                   // priority of improvement (e.g., high, low)
                votes: 23,                                                                          // number of votes for this improvement
                color: "#f59e0b",                                                                   // color of improvement (e.g., red, green, yellow)
            },
            {
                area: "Technology Integration",
                suggestion: "Use more interactive digital tools",
                status: "Planned",
                priority: "Medium",
                votes: 18,
                color: "#3b82f6",
            },
            {
                area: "Assessment Methods",
                suggestion: "Provide more frequent formative assessments",
                status: "Completed",
                priority: "Low",
                votes: 12,
                color: "#10b981",
            },
        ],
        monthlyTrends: [
            { month: "Oct", rating: 4.5, responses: 32 },                                           // monthly trends data
            { month: "Nov", rating: 4.6, responses: 38 },
            { month: "Dec", rating: 4.7, responses: 41 },
            { month: "Jan", rating: 4.8, responses: 45 },
            { month: "Feb", rating: 4.8, responses: 42 },
        ],
    }

    const relatedContent = [                                                                        // related content data
        {
            title: "Giving Constructive Feedback",                                                  // title of related content
            type: "Workshop",                                                                       // type of related content (e.g., workshop, video, article)
            duration: "1.5 hours",                                                                  // duration of related content
            link: "#",                                                                              // link to related content
            icon: <MessageSquare size={20} />,                                                      // icon for related content
            color: "#3b82f6",                                                                       // color of related content
        },
        {
            title: "Student Communication Skills",
            type: "Course",
            duration: "1 week",
            link: "#",
            icon: <Users size={20} />,
            color: "#10b981",
        },
        {
            title: "Parent-Teacher Conference Guide",
            type: "Guide",
            duration: "20 min read",
            link: "#",
            icon: <BookOpen size={20} />,
            color: "#8b5cf6",
        },
        {
            title: "Classroom Management Strategies",
            type: "Workshop",
            duration: "2 hours",
            link: "#",
            icon: <Target size={20} />,
            color: "#f59e0b",
        },
    ]

    // Helper function to get sentiment color
    const getSentimentColor = (sentiment) => {                                                      // function to get sentiment color
        switch (sentiment) {                                                                        // switch statement to determine color based on sentiment
            case "positive":
                return "#10b981"
            case "constructive":
                return "#f59e0b"
            case "negative":
                return "#ef4444"
            default:
                return "#6b7280"
        }
    }

    // Helper function to get status color
    const getStatusColor = (status) => {                                                            // function to get status color
        switch (status) {                                                                           // switch statement to determine color based on status
            case "Completed":                                                                       // if status is completed, return green color
                return "#10b981"                                                                    // green color
            case "In Progress":                                                                     // if status is in progress, return yellow color
                return "#f59e0b"                                                                    // yellow color
            case "Planned":                                                                         // if status is planned, return blue color
                return "#3b82f6"                                                                    // blue color
            default:                                                                                // default
                return "#6b7280"                                                                    // gray color
        }
    }

    const handleLogout = () => {                                                                    // function to handle logout
        utilHandleLogout();                                                                         // logout function from util
    }

    return (
        <div                                                                                        // main div
            style={{
                display: "flex",                                                                    // display as flex
                minHeight: "100vh",                                                                 // minimum height of 100vh
                fontFamily: "system-ui, -apple-system, sans-serif",                                 // font family
                backgroundColor: "#f8fafc",                                                         // background color
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
                    {sidebarItems.map((item, index) => (                                            // map over sidebar items
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
                            onClick={() => handleNavigation(item.label)}                            // handle navigation click
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
                                    Feedback Dashboard
                                </h1>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        color: "#6b7280",
                                        margin: "0",
                                    }}
                                >
                                    Track your teaching performance and student satisfaction
                                </p>
                            </div>
                        </div>

                        {                                                                           /* Overview Cards */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
                                            backgroundColor: "#fef3c7",
                                            borderRadius: "8px",
                                            color: "#f59e0b",
                                        }}
                                    >
                                        <Star size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>Average Rating</div>
                                        <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>
                                            {feedbackAnalytics.summary.averageRating}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <TrendingUp size={14} style={{ color: "#10b981" }} />
                                    <span style={{ fontSize: "12px", color: "#10b981", fontWeight: "500" }}>+0.2 from last month</span>
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
                                            backgroundColor: "#dbeafe",
                                            borderRadius: "8px",
                                            color: "#3b82f6",
                                        }}
                                    >
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>Total Feedback</div>
                                        <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>
                                            {feedbackAnalytics.summary.totalFeedback}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <TrendingUp size={14} style={{ color: "#10b981" }} />
                                    <span style={{ fontSize: "12px", color: "#10b981", fontWeight: "500" }}>+12 this month</span>
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
                                            backgroundColor: "#dcfce7",
                                            borderRadius: "8px",
                                            color: "#10b981",
                                        }}
                                    >
                                        <ThumbsUp size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>Positive Feedback</div>
                                        <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>
                                            {feedbackAnalytics.summary.positivePercentage}%
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <TrendingUp size={14} style={{ color: "#10b981" }} />
                                    <span style={{ fontSize: "12px", color: "#10b981", fontWeight: "500" }}>+3% improvement</span>
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
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", color: "#6b7280", fontWeight: "500" }}>Response Rate</div>
                                        <div style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937" }}>
                                            {feedbackAnalytics.summary.responseRate}%
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <TrendingUp size={14} style={{ color: "#10b981" }} />
                                    <span style={{ fontSize: "12px", color: "#10b981", fontWeight: "500" }}>+5% this month</span>
                                </div>
                            </div>
                        </div>

                        {                                                                           /* Main Content Grid */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "2fr 1fr",
                                gap: "32px",
                                marginBottom: "32px",
                            }}
                        >
                            {                                                                       /* Category Performance */}
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
                                        Performance by Category
                                    </h2>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <button
                                            style={{
                                                padding: "6px 12px",
                                                border: "1px solid #e5e7eb",
                                                borderRadius: "6px",
                                                backgroundColor: "white",
                                                color: "#6b7280",
                                                cursor: "pointer",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <Filter size={14} />
                                        </button>
                                    </div>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {feedbackAnalytics.categories.map((category, index) => (        // analytics .categories
                                        <div
                                            key={index}
                                            style={{
                                                padding: "16px",
                                                border: "1px solid #f3f4f6",
                                                borderRadius: "8px",
                                                backgroundColor: "#fafafa",
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
                                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                                    <div
                                                        style={{
                                                            width: "8px",
                                                            height: "8px",
                                                            borderRadius: "50%",
                                                            backgroundColor: category.color,
                                                        }}
                                                    />
                                                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>{category.name}</span>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <span style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>
                                                        {category.rating}
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontSize: "12px",
                                                            color: category.trend.startsWith("+") ? "#10b981" : "#ef4444", // color based on trend
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {category.trend}
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
                                                <span style={{ fontSize: "12px", color: "#6b7280" }}>{category.responses} responses</span>
                                                <span style={{ fontSize: "12px", color: "#6b7280" }}>{category.percentage}%</span>
                                            </div>

                                            <div
                                                style={{
                                                    width: "100%",
                                                    height: "6px",
                                                    backgroundColor: "#f3f4f6",
                                                    borderRadius: "3px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: `${category.percentage}%`,
                                                        height: "100%",
                                                        backgroundColor: category.color,
                                                        transition: "width 0.3s ease",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {                                                                       /* Quick Stats */}
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
                                    Quick Stats
                                </h2>

                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "16px",
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                            <Award size={20} style={{ color: "#f59e0b" }} />
                                            <span style={{ fontSize: "14px", color: "#1f2937" }}>Improvement Score</span>
                                        </div>
                                        <span style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>
                                            +{feedbackAnalytics.summary.improvementScore}%
                                        </span>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "16px",
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                            <Heart size={20} style={{ color: "#ef4444" }} />
                                            <span style={{ fontSize: "14px", color: "#1f2937" }}>Student Satisfaction</span>
                                        </div>
                                        <span style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>
                                            {feedbackAnalytics.summary.studentSatisfaction}%
                                        </span>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "16px",
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                            <BarChart3 size={20} style={{ color: "#3b82f6" }} />
                                            <span style={{ fontSize: "14px", color: "#1f2937" }}>This Month</span>
                                        </div>
                                        <span style={{ fontSize: "16px", fontWeight: "600", color: "#1f2937" }}>42 reviews</span>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "16px",
                                            backgroundColor: "#f8fafc",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                            <TrendingUp size={20} style={{ color: "#10b981" }} />
                                            <span style={{ fontSize: "14px", color: "#1f2937" }}>Growth Rate</span>
                                        </div>
                                        <span style={{ fontSize: "16px", fontWeight: "600", color: "#10b981" }}>+8.5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {                                                                           /* Recent Feedback and Improvements */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "32px",
                                marginBottom: "32px",
                            }}
                        >
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
                                    <h2 style={{ fontSize: "20px", fontWeight: "600", margin: 0, color: "#1f2937" }}>Recent Feedback</h2>
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
                                        <Eye size={14} />
                                        View All
                                    </button>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {feedbackAnalytics.recentFeedback.slice(0, 3).map((feedback) => ( // feedback Analytics.recentFeedback is an array of objects
                                        <div
                                            key={feedback.id}
                                            style={{
                                                padding: "16px",
                                                border: "1px solid #f3f4f6",
                                                borderRadius: "8px",
                                                backgroundColor: "#fafafa",
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
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#1f2937" }}>
                                                        {feedback.student}
                                                    </span>
                                                    <div
                                                        style={{
                                                            padding: "2px 6px",
                                                            borderRadius: "4px",
                                                            backgroundColor: getSentimentColor(feedback.sentiment) + "20",
                                                            color: getSentimentColor(feedback.sentiment),
                                                            fontSize: "10px",
                                                            fontWeight: "500",
                                                            textTransform: "uppercase",
                                                        }}
                                                    >
                                                        {feedback.sentiment}
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={12}
                                                            style={{
                                                                color: i < feedback.rating ? "#f59e0b" : "#e5e7eb",
                                                                fill: i < feedback.rating ? "#f59e0b" : "none",
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <p
                                                style={{
                                                    fontSize: "14px",
                                                    color: "#4b5563",
                                                    margin: "0 0 12px 0",
                                                    lineHeight: "1.4",
                                                }}
                                            >
                                                {feedback.comment}
                                            </p>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span style={{ fontSize: "12px", color: "#6b7280" }}>
                                                    {new Date(feedback.date).toLocaleDateString()}
                                                </span>
                                                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                    <ThumbsUp size={12} style={{ color: "#6b7280" }} />
                                                    <span style={{ fontSize: "12px", color: "#6b7280" }}>{feedback.helpful}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {                                                                       /* Improvement Suggestions */}
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
                                    Improvement Areas
                                </h2>

                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {feedbackAnalytics.improvements.map((improvement, index) => (   // feedback analysis improvements
                                        <div
                                            key={index}
                                            style={{
                                                padding: "16px",
                                                border: "1px solid #f3f4f6",
                                                borderRadius: "8px",
                                                backgroundColor: "#fafafa",
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
                                                    <h3
                                                        style={{
                                                            fontSize: "14px",
                                                            fontWeight: "500",
                                                            margin: "0 0 4px 0",
                                                            color: "#1f2937",
                                                        }}
                                                    >
                                                        {improvement.area}
                                                    </h3>
                                                    <p
                                                        style={{
                                                            fontSize: "12px",
                                                            color: "#6b7280",
                                                            margin: 0,
                                                            lineHeight: "1.4",
                                                        }}
                                                    >
                                                        {improvement.suggestion}
                                                    </p>
                                                </div>
                                                <div
                                                    style={{
                                                        padding: "4px 8px",
                                                        borderRadius: "4px",
                                                        backgroundColor: getStatusColor(improvement.status) + "20", // get status color
                                                        color: getStatusColor(improvement.status),  // get status color
                                                        fontSize: "10px",
                                                        fontWeight: "500",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {improvement.status}
                                                </div>
                                            </div>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        padding: "2px 6px",
                                                        borderRadius: "4px",
                                                        backgroundColor:
                                                            improvement.priority === "High"
                                                                ? "#fef2f2"
                                                                : improvement.priority === "Medium"
                                                                    ? "#fef3c7"
                                                                    : "#f0fdf4",
                                                        color:
                                                            improvement.priority === "High"
                                                                ? "#ef4444"
                                                                : improvement.priority === "Medium"
                                                                    ? "#f59e0b"
                                                                    : "#10b981",
                                                        fontSize: "10px",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    {improvement.priority} Priority
                                                </div>
                                                <span style={{ fontSize: "12px", color: "#6b7280" }}>{improvement.votes} votes</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {                                                                           /* Related Resources */}
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherFeedbackDashboard                                                             // export the default component to App.jsx